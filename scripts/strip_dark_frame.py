"""
Strip the outermost dark frame from a rembg-cleaned icon.

Operates on already-transparent input (rembg output). Looks at the boundary
of the opaque region (1px-thick band along the alpha edge) and checks if the
dominant color cluster is dark and uniform. If so, peels off the dark frame
by flood-filling its connected component inward.

Conservative: only removes a frame if the dark cluster covers >= 65% of the
boundary AND the frame component is >= 10% of the canvas.
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy.ndimage import label, binary_dilation, binary_erosion

BOUNDARY_DARK_THRESHOLD = 80     # boundary pixel "dark" if max(R,G,B) < this
DOMINANT_FRACTION = 0.65         # >=65% of boundary pixels must be dark
TIGHT_CLUSTER_DIST = 35          # dark pixels must cluster within this RGB dist of their mean
FILL_TOLERANCE = 60              # tolerance for fill-mask
MIN_FRAME_RATIO = 0.05
HALO_PASSES = 3


def process(in_path: Path, out_path: Path) -> tuple[bool, str]:
    img = Image.open(in_path).convert("RGBA")
    arr = np.array(img)
    h, w = arr.shape[:2]

    a = arr[:, :, 3]
    opaque = a > 120
    if not opaque.any():
        img.save(out_path)
        return False, "fully transparent"

    eroded = binary_erosion(opaque)
    boundary = opaque & (~eroded)
    if boundary.sum() < 50:
        img.save(out_path)
        return False, "boundary too small"

    rgb = arr[:, :, :3].astype(np.int16)
    bnd_pixels = rgb[boundary]
    is_dark_bnd = (bnd_pixels.max(axis=1) < BOUNDARY_DARK_THRESHOLD)
    dark_fraction = is_dark_bnd.mean()

    if dark_fraction < DOMINANT_FRACTION:
        img.save(out_path)
        return False, f"boundary not predominantly dark ({dark_fraction:.0%})"

    dark_pixels = bnd_pixels[is_dark_bnd]
    mean_dark = dark_pixels.mean(axis=0)
    # Tightness of dark cluster
    dists = np.sqrt(np.sum((dark_pixels - mean_dark) ** 2, axis=1))
    tightness = (dists < TIGHT_CLUSTER_DIST).mean()
    if tightness < 0.75:
        img.save(out_path)
        return False, f"dark boundary not tight ({tightness:.0%} within {TIGHT_CLUSTER_DIST})"

    frame_color = mean_dark.astype(np.int16)
    # Pixels matching frame color across the whole image
    r = rgb[:, :, 0]
    g = rgb[:, :, 1]
    b = rgb[:, :, 2]
    dist_all = np.sqrt(
        (r - frame_color[0]) ** 2
        + (g - frame_color[1]) ** 2
        + (b - frame_color[2]) ** 2
    )
    near = (dist_all < FILL_TOLERANCE) & opaque

    labels, n = label(near)
    if n == 0:
        img.save(out_path)
        return False, "no near-color component"

    sizes = np.bincount(labels.ravel())
    sizes[0] = 0
    largest = int(np.argmax(sizes))
    frame_size = int(sizes[largest])
    if frame_size < MIN_FRAME_RATIO * h * w:
        img.save(out_path)
        return False, f"frame component too small ({frame_size}px)"

    frame_mask = (labels == largest)
    soft = (dist_all < FILL_TOLERANCE + 45) & (a > 25)
    dilated = frame_mask.copy()
    for _ in range(HALO_PASSES):
        dilated = binary_dilation(dilated)
    halo = dilated & soft & (~frame_mask)

    new_alpha = a.copy()
    new_alpha[frame_mask | halo] = 0
    arr[:, :, 3] = new_alpha
    Image.fromarray(arr).save(out_path)
    return True, (
        f"frame color rgb({frame_color[0]},{frame_color[1]},{frame_color[2]}), "
        f"removed {frame_size}px ({dark_fraction:.0%} of boundary)"
    )


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("input_dir")
    ap.add_argument("output_dir")
    args = ap.parse_args()

    in_dir = Path(args.input_dir)
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    files = sorted(in_dir.glob("icon_*.png"))
    changed = 0
    for f in files:
        out = out_dir / f.name
        ok, reason = process(f, out)
        flag = "REMOVED" if ok else "skipped"
        print(f"[{flag:<8}] {f.name}  | {reason}")
        if ok:
            changed += 1
    print(f"\nDone: {changed}/{len(files)} had a dark frame stripped.")


if __name__ == "__main__":
    main()

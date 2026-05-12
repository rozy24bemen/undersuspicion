"""
Remove the rounded-square frame around icons.

Detection rule: scan inward from canvas edge midpoints; the first opaque pixel
along each ray is sampled. If those samples agree on a single color (uniform
frame), that color is the frame; flood-fill it out. If they disagree (a real
subject's outline varies), the icon has no frame and is passed through.

Works for both dark and light frames. Idempotent.
"""

import argparse
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy.ndimage import label, binary_dilation

UNIFORMITY_FRACTION = 0.70    # >=70% of edge samples within tolerance => frame
EDGE_TOLERANCE = 28           # max RGB distance to call samples "same color"
FILL_TOLERANCE = 55           # tolerance when expanding flood-fill of frame
HALO_PASSES = 3               # post-fill dilation for antialiased fringe
MIN_FRAME_RATIO = 0.06        # frame component must cover >=6% of canvas


def sample_edge_colors(arr: np.ndarray) -> list[np.ndarray]:
    h, w, _ = arr.shape
    rays = []
    x_step = max(1, w // 24)
    y_step = max(1, h // 24)
    # Top / bottom: scan vertically from each edge
    for x in range(w // 6, 5 * w // 6, x_step):
        rays.append((x, 0, 0, 1))
        rays.append((x, h - 1, 0, -1))
    # Left / right: scan horizontally from each edge
    for y in range(h // 6, 5 * h // 6, y_step):
        rays.append((0, y, 1, 0))
        rays.append((w - 1, y, -1, 0))

    samples = []
    max_walk = max(h, w) // 3
    for sx, sy, dx, dy in rays:
        x, y = sx, sy
        for _ in range(max_walk):
            if not (0 <= x < w and 0 <= y < h):
                break
            if arr[y, x, 3] > 200:
                samples.append(arr[y, x, :3].astype(np.int16))
                break
            x += dx
            y += dy
    return samples


def detect_frame_color(arr: np.ndarray):
    samples = sample_edge_colors(arr)
    if len(samples) < 12:
        return None, f"only {len(samples)} edge samples"

    s = np.stack(samples).astype(np.int16)
    median = np.median(s, axis=0).astype(np.int16)
    distances = np.sqrt(np.sum((s - median) ** 2, axis=1))
    within = np.sum(distances < EDGE_TOLERANCE) / len(samples)
    if within < UNIFORMITY_FRACTION:
        return None, f"edge samples not uniform ({within:.0%} within tol; n={len(samples)})"
    return median, f"frame color rgb({median[0]},{median[1]},{median[2]}); {within:.0%} uniform"


def remove_frame(arr: np.ndarray, color: np.ndarray) -> tuple[np.ndarray, bool, str]:
    h, w = arr.shape[:2]
    r = arr[:, :, 0].astype(np.int16)
    g = arr[:, :, 1].astype(np.int16)
    b = arr[:, :, 2].astype(np.int16)
    a = arr[:, :, 3]

    dist = np.sqrt((r - color[0]) ** 2 + (g - color[1]) ** 2 + (b - color[2]) ** 2)
    near = (dist < FILL_TOLERANCE) & (a > 100)

    if not near.any():
        return arr, False, "no near-color pixels"

    labels, n = label(near)
    sizes = np.bincount(labels.ravel())
    sizes[0] = 0
    largest = int(np.argmax(sizes))
    frame_size = int(sizes[largest])
    if frame_size < MIN_FRAME_RATIO * h * w:
        return arr, False, f"frame component too small ({frame_size}px)"

    frame_mask = (labels == largest)

    soft = (dist < FILL_TOLERANCE + 45) & (a > 25)
    dilated = frame_mask.copy()
    for _ in range(HALO_PASSES):
        dilated = binary_dilation(dilated)
    halo = dilated & soft & (~frame_mask)

    new_alpha = a.copy()
    new_alpha[frame_mask | halo] = 0
    arr[:, :, 3] = new_alpha
    return arr, True, f"removed {frame_size}px"


def process(in_path: Path, out_path: Path) -> tuple[bool, str]:
    img = Image.open(in_path).convert("RGBA")
    arr = np.array(img)

    color, info = detect_frame_color(arr)
    if color is None:
        img.save(out_path)
        return False, info

    new_arr, ok, fill_info = remove_frame(arr, color)
    if not ok:
        img.save(out_path)
        return False, f"{info}; {fill_info}"

    Image.fromarray(new_arr).save(out_path)
    return True, f"{info}; {fill_info}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("input_dir")
    ap.add_argument("output_dir")
    args = ap.parse_args()

    in_dir = Path(args.input_dir)
    out_dir = Path(args.output_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    files = sorted(in_dir.glob("icon_*.png"))
    if not files:
        print(f"No icon_*.png files found in {in_dir}", file=sys.stderr)
        sys.exit(1)

    changed = 0
    for f in files:
        out = out_dir / f.name
        was_changed, reason = process(f, out)
        flag = "REMOVED" if was_changed else "skipped"
        print(f"[{flag:<8}] {f.name}  | {reason}")
        if was_changed:
            changed += 1

    print(f"\nDone: {changed}/{len(files)} had a frame removed.")


if __name__ == "__main__":
    main()

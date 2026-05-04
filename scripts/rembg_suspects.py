"""
Quita el fondo a los retratos de sospechosos de los Casos 2-4 usando rembg.

Uso:
    python scripts/rembg_suspects.py

Procesa in-place: lee X.png → escribe Y.png.tmp → mv Y.png.tmp X.png.
Salta los archivos que ya fueron procesados (detección por nombre fuera del
flujo: aquí no hay marca, pero rembg sobre una imagen ya transparente sigue
siendo idempotente en términos visuales — solo reprocesa).

Si algo va mal, restaurar con:
    git checkout -- assets/img/suspects/Caso2/Sospechosos/
    git checkout -- assets/img/suspects/Caso3/Sospechosos/
    git checkout -- assets/img/suspects/Caso4/Sospechosos/
"""
from pathlib import Path
import sys
import time
from rembg import new_session, remove

ROOT = Path(__file__).resolve().parent.parent
DIRS = [
    ROOT / "assets" / "img" / "suspects" / "Caso2" / "Sospechosos",
    ROOT / "assets" / "img" / "suspects" / "Caso3" / "Sospechosos",
    ROOT / "assets" / "img" / "suspects" / "Caso4" / "Sospechosos",
]

def main() -> int:
    session = new_session("u2net")  # modelo por defecto, equilibrio calidad/velocidad

    files = []
    for d in DIRS:
        if not d.is_dir():
            print(f"[skip] no es directorio: {d}", file=sys.stderr)
            continue
        files.extend(sorted(d.glob("*.png")))

    print(f"Procesando {len(files)} imágenes...")
    failures = []
    t0 = time.time()
    for i, f in enumerate(files, 1):
        try:
            data = f.read_bytes()
            out = remove(data, session=session)
            tmp = f.with_suffix(f.suffix + ".tmp")
            tmp.write_bytes(out)
            tmp.replace(f)  # rename atómico
            elapsed = time.time() - t0
            print(f"[{i:>2}/{len(files)}] {f.relative_to(ROOT)}  ({len(out)//1024} KB, {elapsed:.1f}s)")
        except Exception as e:
            failures.append((f, e))
            print(f"[FAIL] {f}: {e}", file=sys.stderr)

    print(f"\nDone. {len(files) - len(failures)} ok, {len(failures)} fallos. Total {time.time()-t0:.1f}s.")
    if failures:
        for f, e in failures:
            print(f"  - {f}: {e}", file=sys.stderr)
        return 1
    return 0

if __name__ == "__main__":
    sys.exit(main())

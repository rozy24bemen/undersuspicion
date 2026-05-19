"""
Quita el fondo a los retratos de sospechosos de los Casos 2-4 y a los
retratos recurrentes de Elena (cenas) usando rembg.

Uso:
    python scripts/rembg_suspects.py [--elena-only]

Procesa in-place: lee X.png → escribe Y.png.tmp → mv Y.png.tmp X.png.
Salta los archivos que ya fueron procesados (detección por nombre fuera del
flujo: aquí no hay marca, pero rembg sobre una imagen ya transparente sigue
siendo idempotente en términos visuales — solo reprocesa).

Excepciones intencionales (no se procesan aunque empiecen por Elena-):
    - Elena-Despedida.png  → lleva luz dorada propia del pasillo
    - Elena-Ausente.png    → ES el comedor (final malo), no es retrato

Si algo va mal, restaurar con:
    git checkout -- assets/img/suspects/
"""
from pathlib import Path
import sys
import time
from rembg import new_session, remove

ROOT = Path(__file__).resolve().parent.parent
SUSPECT_DIRS = [
    ROOT / "assets" / "img" / "suspects" / "Caso2" / "Sospechosos",
    ROOT / "assets" / "img" / "suspects" / "Caso3" / "Sospechosos",
    ROOT / "assets" / "img" / "suspects" / "Caso4" / "Sospechosos",
    ROOT / "assets" / "img" / "suspects" / "Caso8" / "Sospechosos",
]
ELENA_DIR = ROOT / "assets" / "img" / "suspects"
ELENA_EXCLUDE = {"Elena-Despedida.png", "Elena-Ausente.png"}

def collect_elena_portraits():
    """Devuelve los Elena-*.png que SÍ se procesan (idle + hablando)."""
    if not ELENA_DIR.is_dir():
        return []
    return [p for p in sorted(ELENA_DIR.glob("Elena-*.png")) if p.name not in ELENA_EXCLUDE]

def main():
    elena_only = "--elena-only" in sys.argv
    # --case=N procesa SOLO los sospechosos de un caso concreto (útil cuando
    # se añade un caso nuevo y no se quiere reprocesar todos los anteriores,
    # cuyos PNGs ya están transparentes y reprocesarlos solo rewrite-a bytes).
    case_filter = None
    for arg in sys.argv[1:]:
        if arg.startswith("--case="):
            case_filter = arg.split("=", 1)[1]

    session = new_session("u2net")  # modelo por defecto, equilibrio calidad/velocidad

    files = []
    if not elena_only:
        for d in SUSPECT_DIRS:
            if not d.is_dir():
                print(f"[skip] no es directorio: {d}", file=sys.stderr)
                continue
            if case_filter and f"Caso{case_filter}" not in str(d):
                continue
            files.extend(sorted(d.glob("*.png")))
    if not case_filter:
        files.extend(collect_elena_portraits())

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

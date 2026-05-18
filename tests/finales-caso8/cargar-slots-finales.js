/* ─────────────────────────────────────────────────────────────────────
 * Helper de testeo de los 4 finales del Caso 8 ("La última cena").
 *
 * Los 4 finales se distinguen por la matriz 2×2:
 *   eje X = acusación final (al detective sí / no)
 *   eje Y = métricas con Elena (buenas / malas)
 *
 *                BUENAS MÉTRICAS              MALAS MÉTRICAS
 *  TE ENTREGAS │  A. Despedida              │  B. Cobardía creepy   │
 *  NO          │  C. Te pillan igual        │  D. No pudiste más    │
 *
 * Como las métricas las traemos en el slot y la acusación la decide el
 * jugador en la pantalla de Resolución, basta con DOS slots base:
 *   Slot 1 → métricas BUENAS  (acusa al detective ⇒ A · acusa a otro ⇒ C)
 *   Slot 2 → métricas MALAS   (acusa al detective ⇒ B · acusa a otro ⇒ D)
 *
 * Tras terminar una partida, el slot queda con el caso 8 ya completado
 * y no se puede jugar otra vez. Por eso este script también expone una
 * función global `US.Test.cargarFinal(letra)` que REINSTALA el slot
 * correspondiente devolviéndolo al estado inicial (caso 8 aún por jugar).
 *
 * Uso:
 *   1) Abre index.html en el navegador.
 *   2) Abre la consola (F12 o Ctrl+Shift+J) y pega el contenido completo
 *      de este archivo.
 *   3) Vuelve al menú principal → CARGAR PARTIDA. Verás los dos slots.
 *   4) Para cada final, carga el slot, juega el caso 8 y acusa según el
 *      cuadrante deseado (al detective o a Felipe/Octavio).
 *   5) Para volver a probar otro final con las mismas métricas, ejecuta
 *      en consola: `US.Test.cargarFinal('A')` (o B, C, D). Recarga la
 *      pestaña y vuelve a cargar el slot.
 *
 * Notas:
 *   - Sobrescribe los slots 1 y 2 si ya existen. No toca el slot 3.
 *   - Los 7 casos previos quedan marcados como completados.
 * ───────────────────────────────────────────────────────────────────── */
(function cargarSlotsFinalesCaso8() {
  if (!window.US || !US.SaveManager) {
    console.error('[cargar-slots] US.SaveManager no está disponible. ¿Estás en index.html?');
    return;
  }

  var previos = ['caso-01','caso-02','caso-03','caso-04','caso-05','caso-06','caso-07'];

  var META_BUENAS = {
    sinceridad: 85,
    integridad: 85,
    lucidez:    85,
    memoria: {
      recuerda_padre:       true,
      fotos_en_cajon:       true,
      cajon_prohibido:      true,
      promete_contar_todo:  true,
      lee_manuscrito:       true,
      recuerda_calle_goya:  true,
      papeles_elena:        true,
      recuerda_hijo_muerto: true
    },
    usedLines: {}
  };

  var META_MALAS = {
    sinceridad: 25,
    integridad: 25,
    lucidez:    25,
    memoria: {},
    usedLines: {}
  };

  function _slotPayload(name, meta) {
    var now = Date.now();
    return {
      schemaVersion: 1,
      name: name,
      createdAt: now,
      updatedAt: now,
      progress: { completed: previos.slice() },
      meta: JSON.parse(JSON.stringify(meta)),
      runtime: null
    };
  }

  // Mapeo final → (slot, meta, etiqueta).
  var FINALES = {
    A: { slot: 1, meta: META_BUENAS, label: '[TEST] Final A · DESPEDIDA (acusa al detective)' },
    B: { slot: 2, meta: META_MALAS,  label: '[TEST] Final B · COBARDÍA (acusa al detective)' },
    C: { slot: 1, meta: META_BUENAS, label: '[TEST] Final C · TE PILLAN IGUAL (acusa a otro)' },
    D: { slot: 2, meta: META_MALAS,  label: '[TEST] Final D · NO PUDISTE (acusa a otro)' }
  };

  function cargarFinal(letra) {
    var f = FINALES[letra && letra.toUpperCase()];
    if (!f) {
      console.error('[Test] Letra inválida. Usa A, B, C o D.');
      return false;
    }
    var payload = _slotPayload(f.label, f.meta);
    var ok = US.SaveManager.importSlot(f.slot, JSON.stringify(payload));
    console.log('[Test] Final ' + letra.toUpperCase() + ' instalado en slot ' + f.slot + ':', ok ? 'OK' : 'FAIL');
    console.log('[Test] Recarga la pestaña y carga el slot ' + f.slot + ' desde el menú.');
    return ok;
  }

  // Instala los dos slots base por defecto.
  var ok1 = US.SaveManager.importSlot(1, JSON.stringify(_slotPayload(
    '[TEST] Métricas BUENAS · Caso 8 (Final A si acusas al detective, C si no)',
    META_BUENAS
  )));
  var ok2 = US.SaveManager.importSlot(2, JSON.stringify(_slotPayload(
    '[TEST] Métricas MALAS · Caso 8 (Final B si acusas al detective, D si no)',
    META_MALAS
  )));

  console.log('[cargar-slots] Slot 1 (BUENAS):', ok1 ? 'OK' : 'FAIL');
  console.log('[cargar-slots] Slot 2 (MALAS):',  ok2 ? 'OK' : 'FAIL');
  console.log('[cargar-slots] Vuelve al menú principal y pulsa CARGAR en el slot que quieras probar.');
  console.log('[cargar-slots] Para reinstalar un slot tras jugar:');
  console.log('  US.Test.cargarFinal("A")  → Final A (slot 1, métricas buenas)');
  console.log('  US.Test.cargarFinal("B")  → Final B (slot 2, métricas malas)');
  console.log('  US.Test.cargarFinal("C")  → Final C (slot 1, métricas buenas)');
  console.log('  US.Test.cargarFinal("D")  → Final D (slot 2, métricas malas)');

  US.Test = US.Test || {};
  US.Test.cargarFinal = cargarFinal;
})();

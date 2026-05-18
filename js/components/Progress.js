/**
 * Progress — Estado persistente de avance del Modo Historia.
 * Persiste qué casos ha completado el jugador y cuál es el siguiente.
 * Independiente de MetaStore: MetaStore se resetea al iniciar una partida nueva,
 * pero el progreso entre casos vive durante toda la run.
 */
var US = US || {};

// Orden lineal del Modo Historia. Acto 1: casos 1-4. Acto 2: casos 5-7.
// Acto 3 (final): caso 8.
US.PROGRESS_ORDER = ['caso-01', 'caso-02', 'caso-03', 'caso-04',
                     'caso-05', 'caso-06', 'caso-07', 'caso-08'];

US.Progress = (function () {
  const KEY = 'undersuspi.progress';

  const DEFAULT = {
    completed: []   // ids de casos completados, en el orden en que se cerraron
  };

  let state = null;

  function _load() {
    if (state) return state;
    const raw = US.Storage ? US.Storage.readJSON(KEY) : null;
    state = raw ? Object.assign({}, DEFAULT, raw) : Object.assign({}, DEFAULT);
    state.completed = Array.isArray(state.completed) ? state.completed : [];
    return state;
  }

  function _save() {
    if (US.Storage) US.Storage.writeJSON(KEY, state);
  }

  return {
    /** Devuelve la lista de casos completados (en orden). */
    getCompleted() {
      return _load().completed.slice();
    },

    /** Marca un caso como completado si no lo estaba ya. */
    markCompleted(caseId) {
      const s = _load();
      if (!s.completed.includes(caseId)) {
        s.completed.push(caseId);
        _save();
      }
    },

    /**
     * Devuelve el id del próximo caso a jugar según el orden lineal,
     * o null si ya están todos completados (o el siguiente no está disponible
     * en US.CASES — ej. cargando solo casos 1-2 mientras 3-4 no están listos).
     */
    getNext() {
      const completed = _load().completed;
      for (const id of US.PROGRESS_ORDER) {
        if (!completed.includes(id)) {
          // Solo lo devolvemos si el caso está cargado en US.CASES.
          if (US.CASES && US.CASES[id]) return id;
          return null;
        }
      }
      return null;
    },

    /** True si hay al menos un caso completado pero la run no ha terminado. */
    hasInProgressRun() {
      const s = _load();
      return s.completed.length > 0 && this.getNext() !== null;
    },

    /** True si la run completa de PROGRESS_ORDER está terminada. */
    isAllCompleted() {
      const s = _load();
      return US.PROGRESS_ORDER.every(id => s.completed.includes(id));
    },

    /** Resetea el progreso. Llamar al iniciar una partida nueva. */
    reset() {
      state = { completed: [] };
      _save();
    },

    /**
     * Invalida el caché en memoria. Llamar tras escribir directamente la
     * clave de Storage desde fuera (ej. SaveManager activando un slot).
     * El próximo getter leerá los valores nuevos.
     */
    reload() {
      state = null;
    }
  };
})();

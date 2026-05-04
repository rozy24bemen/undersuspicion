/**
 * Progress — Estado persistente de avance del Modo Historia.
 * Persiste qué casos ha completado el jugador y cuál es el siguiente.
 * Independiente de MetaStore: MetaStore se resetea al iniciar una partida nueva,
 * pero el progreso entre casos vive durante toda la run.
 */
var US = US || {};

// Orden lineal del Modo Historia. Cuando se añadan casos 5-8, se extiende aquí.
US.PROGRESS_ORDER = ['caso-01', 'caso-02', 'caso-03', 'caso-04'];

US.Progress = (function () {
  const KEY = 'undersuspi.progress';

  const DEFAULT = {
    completed: []   // ids de casos completados, en el orden en que se cerraron
  };

  let state = null;

  function _load() {
    if (state) return state;
    try {
      const raw = window.localStorage.getItem(KEY);
      state = raw ? Object.assign({}, DEFAULT, JSON.parse(raw)) : Object.assign({}, DEFAULT);
      state.completed = Array.isArray(state.completed) ? state.completed : [];
    } catch (_) {
      state = { completed: [] };
    }
    return state;
  }

  function _save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {}
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
    }
  };
})();

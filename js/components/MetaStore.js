/**
 * MetaStore — Estado persistente del metaarco.
 * Ejes (0-100): sinceridad, integridad, lucidez.
 * Flags discretas: memoria.
 * Líneas usadas: usedLines (para no repetir diálogo del banco global).
 */
var US = US || {};

US.MetaStore = (function() {
  const KEY = 'undersuspi.meta';

  const DEFAULT = {
    sinceridad: 50,
    integridad: 50,
    lucidez:    50,
    memoria:    {},
    usedLines:  {}
  };

  let state = null;

  function _load() {
    if (state) return state;
    try {
      const raw = window.localStorage.getItem(KEY);
      state = raw ? Object.assign({}, DEFAULT, JSON.parse(raw)) : Object.assign({}, DEFAULT);
      state.memoria   = state.memoria   || {};
      state.usedLines = state.usedLines || {};
    } catch (_) {
      state = Object.assign({}, DEFAULT, { memoria: {}, usedLines: {} });
    }
    return state;
  }

  function _save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {}
  }

  function _clamp(v) { return Math.max(0, Math.min(100, v)); }

  return {
    get() {
      return _load();
    },

    bump(eje, delta) {
      const s = _load();
      if (typeof s[eje] !== 'number') return;
      s[eje] = _clamp(s[eje] + delta);
      _save();
    },

    setFlag(name) {
      const s = _load();
      s.memoria[name] = true;
      _save();
    },

    hasFlag(name) {
      return _load().memoria[name] === true;
    },

    markUsed(id) {
      const s = _load();
      s.usedLines[id] = true;
      _save();
    },

    isUsed(id) {
      return _load().usedLines[id] === true;
    },

    applyEffect(efecto) {
      if (!efecto) return;
      ['sinceridad', 'integridad', 'lucidez'].forEach(eje => {
        if (typeof efecto[eje] === 'number') this.bump(eje, efecto[eje]);
      });
      if (Array.isArray(efecto.flags)) {
        efecto.flags.forEach(f => this.setFlag(f));
      }
    },

    reset() {
      state = Object.assign({}, DEFAULT, { memoria: {}, usedLines: {} });
      _save();
    }
  };
})();

/**
 * Storage — Capa de abstracción del almacenamiento persistente.
 *
 * El resto del juego (SaveManager, MetaStore, Progress) habla con esta API
 * en lugar de localStorage directamente. El día que se empaquete el juego
 * para Steam (Electron) o Play Store (Capacitor/Cordova), basta con sustituir
 * la implementación interna por filesystem o el plugin nativo equivalente,
 * sin tocar nada del juego.
 *
 * Contrato: claves string, valores string. JSON helpers de comodidad.
 */
var US = US || {};

US.Storage = (function () {
  function _hasLocalStorage() {
    try {
      return typeof window !== 'undefined' && !!window.localStorage;
    } catch (_) { return false; }
  }

  const supported = _hasLocalStorage();

  // Fallback en memoria para entornos sin localStorage (modo privado, sandbox).
  // Permite que el juego no crashee aunque no persista nada.
  const memory = {};

  return {
    isSupported() { return supported; },

    read(key) {
      if (!supported) return memory[key] != null ? memory[key] : null;
      try { return window.localStorage.getItem(key); }
      catch (_) { return null; }
    },

    write(key, value) {
      if (!supported) { memory[key] = value; return true; }
      try { window.localStorage.setItem(key, value); return true; }
      catch (_) { return false; }
    },

    remove(key) {
      if (!supported) { delete memory[key]; return; }
      try { window.localStorage.removeItem(key); }
      catch (_) {}
    },

    readJSON(key) {
      const raw = this.read(key);
      if (raw == null) return null;
      try { return JSON.parse(raw); }
      catch (_) { return null; }
    },

    writeJSON(key, obj) {
      try { return this.write(key, JSON.stringify(obj)); }
      catch (_) { return false; }
    }
  };
})();

/**
 * Telemetry — Registro de acciones del jugador para playtest.
 *
 * Buffer en localStorage bajo `undersuspi.telemetry`. Exportable a JSON
 * descargable que el playtester nos envía. Sin envío a servidor.
 *
 * Eventos esperados (ver docs/METODOLOGIA.md sección 5):
 *   case-start, case-end, ask, present, contradiction-detected,
 *   evidence-clicked, tool-used, accuse, dinner-choice, meta-snapshot.
 */
var US = US || {};

US.Telemetry = (function() {
  const KEY         = 'undersuspi.telemetry';
  const SESSION_KEY = 'undersuspi.telemetry.session';
  const VERSION     = 1;

  let buffer    = null;
  let sessionId = null;

  function _newSessionId() {
    return 'sess-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
  }

  function _load() {
    if (buffer) return buffer;
    try {
      const raw = window.localStorage.getItem(KEY);
      buffer = raw ? JSON.parse(raw) : [];
      if (!Array.isArray(buffer)) buffer = [];
    } catch (_) {
      buffer = [];
    }
    try {
      sessionId = window.localStorage.getItem(SESSION_KEY) || _newSessionId();
      window.localStorage.setItem(SESSION_KEY, sessionId);
    } catch (_) {
      sessionId = sessionId || _newSessionId();
    }
    return buffer;
  }

  function _save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(buffer)); } catch (_) {}
  }

  return {
    log(eventType, payload) {
      _load();
      const entry = Object.assign({
        sessionId: sessionId,
        timestamp: Date.now(),
        event:     eventType
      }, payload || {});
      buffer.push(entry);
      _save();
    },

    export() {
      _load();
      return {
        version:    VERSION,
        sessionId:  sessionId,
        exportedAt: new Date().toISOString(),
        eventCount: buffer.length,
        events:     buffer.slice()
      };
    },

    download() {
      const data = this.export();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      a.href = url;
      a.download = 'undersuspi-telemetry-' + stamp + '.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    },

    clear() {
      buffer    = [];
      sessionId = _newSessionId();
      try {
        window.localStorage.removeItem(KEY);
        window.localStorage.setItem(SESSION_KEY, sessionId);
      } catch (_) {}
    },

    newSession() {
      sessionId = _newSessionId();
      try { window.localStorage.setItem(SESSION_KEY, sessionId); } catch (_) {}
    },

    count() {
      _load();
      return buffer.length;
    },

    getSessionId() {
      _load();
      return sessionId;
    }
  };
})();

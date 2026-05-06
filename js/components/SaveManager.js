/**
 * SaveManager — Gestión de partidas con 3 slots.
 *
 * Una sola clave en Storage: 'undersuspi.saves' con la forma:
 *   {
 *     schemaVersion: 1,
 *     activeSlot: 1 | 2 | 3 | null,
 *     slots: { 1: SlotData|null, 2: ..., 3: ... }
 *   }
 *
 * SlotData:
 *   {
 *     schemaVersion, name, createdAt, updatedAt,
 *     progress: { completed: [...] },           // espejo de undersuspi.progress
 *     meta:     { sinceridad, integridad, ...}, // espejo de undersuspi.meta
 *     runtime:  null | { caseId, ...estado del GameEngine... }
 *   }
 *
 * Modelo de funcionamiento:
 *   - Las claves legacy 'undersuspi.progress' y 'undersuspi.meta' siguen vivas
 *     y son las que leen/escriben Progress y MetaStore. SaveManager las usa
 *     como "buffer activo" y las sincroniza con el slot activo:
 *       · Al cargar/activar un slot → vuelca slot.{progress,meta} a las claves
 *         legacy y llama a reload() de Progress/MetaStore.
 *       · Al autosave/quicksave → lee las claves legacy y vuelca al slot.
 *   - Esto permite no tocar Progress/MetaStore por dentro: ellos siguen como
 *     siempre, solo que su "single store" es ahora la copia activa de un slot.
 */
var US = US || {};

US.SaveManager = (function () {
  const KEY = 'undersuspi.saves';
  const SCHEMA_VERSION = 1;
  const NUM_SLOTS = 3;

  const LEGACY_PROGRESS_KEY = 'undersuspi.progress';
  const LEGACY_META_KEY     = 'undersuspi.meta';

  const META_DEFAULT = {
    sinceridad: 50,
    integridad: 50,
    lucidez:    50,
    memoria:    {},
    usedLines:  {}
  };

  let cache = null;

  function _emptyState() {
    return {
      schemaVersion: SCHEMA_VERSION,
      activeSlot:    null,
      slots:         { 1: null, 2: null, 3: null }
    };
  }

  function _load() {
    if (cache) return cache;
    const stored = US.Storage.readJSON(KEY);
    if (stored && stored.slots) {
      // Asegura forma correcta aunque venga de una versión vieja
      cache = {
        schemaVersion: stored.schemaVersion || SCHEMA_VERSION,
        activeSlot:    stored.activeSlot || null,
        slots:         { 1: stored.slots[1] || null,
                         2: stored.slots[2] || null,
                         3: stored.slots[3] || null }
      };
    } else {
      cache = _emptyState();
      _migrateLegacyIfPresent();
    }
    return cache;
  }

  function _persist() {
    US.Storage.writeJSON(KEY, cache);
  }

  function _migrateLegacyIfPresent() {
    const legacyProgress = US.Storage.readJSON(LEGACY_PROGRESS_KEY);
    const legacyMeta     = US.Storage.readJSON(LEGACY_META_KEY);
    const hasProgress    = legacyProgress && Array.isArray(legacyProgress.completed) && legacyProgress.completed.length > 0;
    const hasMeta        = legacyMeta && (
      legacyMeta.sinceridad !== 50 ||
      legacyMeta.integridad !== 50 ||
      legacyMeta.lucidez    !== 50 ||
      (legacyMeta.memoria && Object.keys(legacyMeta.memoria).length > 0)
    );
    if (!hasProgress && !hasMeta) return;

    const now = Date.now();
    const slot = {
      schemaVersion: SCHEMA_VERSION,
      name:          'Partida importada',
      createdAt:     now,
      updatedAt:     now,
      progress:      legacyProgress || { completed: [] },
      meta:          Object.assign({}, META_DEFAULT, legacyMeta || {}),
      runtime:       null
    };
    slot.name = _generateName(slot);
    cache.slots[1]   = slot;
    cache.activeSlot = 1;
    _persist();
  }

  function _activateSlotKeys(slotNum) {
    const s = _load();
    const slot = s.slots[slotNum];
    if (!slot) return;
    US.Storage.writeJSON(LEGACY_PROGRESS_KEY, slot.progress || { completed: [] });
    US.Storage.writeJSON(LEGACY_META_KEY,     slot.meta     || Object.assign({}, META_DEFAULT));
    if (US.Progress  && typeof US.Progress.reload  === 'function') US.Progress.reload();
    if (US.MetaStore && typeof US.MetaStore.reload === 'function') US.MetaStore.reload();
  }

  function _captureLive() {
    return {
      progress: US.Storage.readJSON(LEGACY_PROGRESS_KEY) || { completed: [] },
      meta:     US.Storage.readJSON(LEGACY_META_KEY)     || Object.assign({}, META_DEFAULT)
    };
  }

  function _twoDigit(n) { return String(n).padStart(2, '0'); }

  function _formatDate(ts) {
    const d = new Date(ts || Date.now());
    return _twoDigit(d.getDate()) + '/' + _twoDigit(d.getMonth() + 1) + '/' +
           String(d.getFullYear()).slice(2) + ' ' +
           _twoDigit(d.getHours()) + ':' + _twoDigit(d.getMinutes());
  }

  function _caseNumberOf(caseId) {
    const m = /(\d+)/.exec(caseId || '');
    return m ? parseInt(m[1], 10) : null;
  }

  function _generateName(slot) {
    const completed = (slot.progress && slot.progress.completed) || [];
    const runtime   = slot.runtime;
    const date      = _formatDate(slot.updatedAt);

    let label;
    if (runtime && runtime.caseId) {
      const num = _caseNumberOf(runtime.caseId);
      label = num ? 'Caso ' + num + ' (en curso)' : 'En curso';
    } else if (completed.length === 0) {
      label = 'Sin empezar';
    } else {
      const order = US.PROGRESS_ORDER || [];
      const next  = order.find(id => !completed.includes(id));
      if (next) {
        const num = _caseNumberOf(next);
        label = num ? 'Caso ' + num + ' (por jugar)' : 'Listo para continuar';
      } else {
        label = 'Acto completado';
      }
    }
    return label + ' · ' + date;
  }

  return {
    NUM_SLOTS: NUM_SLOTS,

    /** Devuelve [{ slot:1, data:SlotData|null }, ...]. */
    listSlots() {
      const s = _load();
      const out = [];
      for (let i = 1; i <= NUM_SLOTS; i++) {
        out.push({ slot: i, data: s.slots[i] });
      }
      return out;
    },

    getActiveSlot() {
      return _load().activeSlot;
    },

    getSlot(n) {
      return _load().slots[n] || null;
    },

    isSlotEmpty(n) {
      return !_load().slots[n];
    },

    /**
     * Crea una partida nueva en el slot indicado, sobreescribiendo cualquier
     * dato anterior. Lo activa y deja Progress/MetaStore reseteados.
     */
    newGameInSlot(n) {
      const s = _load();
      const now = Date.now();
      const slot = {
        schemaVersion: SCHEMA_VERSION,
        name:          '',
        createdAt:     now,
        updatedAt:     now,
        progress:      { completed: [] },
        meta:          Object.assign({}, META_DEFAULT, { memoria: {}, usedLines: {} }),
        runtime:       null
      };
      slot.name = _generateName(slot);
      s.slots[n]   = slot;
      s.activeSlot = n;
      _persist();
      _activateSlotKeys(n);
      return slot;
    },

    /**
     * Activa un slot existente: vuelca progress y meta a las claves legacy
     * y devuelve el snapshot runtime (o null si está entre casos).
     */
    loadSlot(n) {
      const s = _load();
      const slot = s.slots[n];
      if (!slot) return null;
      s.activeSlot = n;
      _persist();
      _activateSlotKeys(n);
      return slot.runtime || null;
    },

    deleteSlot(n) {
      const s = _load();
      s.slots[n] = null;
      if (s.activeSlot === n) s.activeSlot = null;
      _persist();
    },

    /**
     * Autosave entre casos. Captura progress y meta vivos, runtime=null,
     * sobre el slot activo. Si no hay slot activo, no hace nada.
     */
    autosaveBetweenCases() {
      const s = _load();
      const n = s.activeSlot;
      if (!n || !s.slots[n]) return false;
      const live = _captureLive();
      const updated = Object.assign({}, s.slots[n], {
        schemaVersion: SCHEMA_VERSION,
        progress:      live.progress,
        meta:          live.meta,
        runtime:       null,
        updatedAt:     Date.now()
      });
      updated.name = _generateName(updated);
      s.slots[n] = updated;
      _persist();
      return true;
    },

    /**
     * Guardado manual mid-case. Captura progress, meta y el snapshot
     * serializado del GameEngine sobre el slot activo.
     */
    quickSave(engine) {
      const s = _load();
      const n = s.activeSlot;
      if (!n || !s.slots[n]) return false;
      const live    = _captureLive();
      const runtime = (engine && typeof engine.serialize === 'function')
        ? engine.serialize()
        : null;
      const updated = Object.assign({}, s.slots[n], {
        schemaVersion: SCHEMA_VERSION,
        progress:      live.progress,
        meta:          live.meta,
        runtime:       runtime,
        updatedAt:     Date.now()
      });
      updated.name = _generateName(updated);
      s.slots[n] = updated;
      _persist();
      return true;
    },

    /** Devuelve la SlotData como string JSON, para export manual. */
    exportSlot(n) {
      const slot = this.getSlot(n);
      return slot ? JSON.stringify(slot, null, 2) : null;
    },

    /**
     * Importa un JSON externo a un slot. Validación mínima: requiere
     * un objeto con progress y meta. Devuelve true si tuvo éxito.
     */
    importSlot(n, jsonString) {
      let parsed;
      try { parsed = JSON.parse(jsonString); }
      catch (_) { return false; }
      if (!parsed || typeof parsed !== 'object') return false;
      if (!parsed.progress || !parsed.meta) return false;

      const s = _load();
      const now = Date.now();
      const slot = {
        schemaVersion: parsed.schemaVersion || SCHEMA_VERSION,
        name:          parsed.name || 'Partida importada',
        createdAt:     parsed.createdAt || now,
        updatedAt:     now,
        progress:      parsed.progress,
        meta:          Object.assign({}, META_DEFAULT, parsed.meta),
        runtime:       parsed.runtime || null
      };
      slot.name = parsed.name || _generateName(slot);
      s.slots[n] = slot;
      _persist();
      return true;
    },

    /** Etiqueta humana para mostrar en la UI. */
    describeSlot(slot) {
      if (!slot) return null;
      return {
        name:      slot.name || _generateName(slot),
        updatedAt: _formatDate(slot.updatedAt),
        completedCount: ((slot.progress && slot.progress.completed) || []).length,
        midCase:   !!slot.runtime,
        currentCaseId: slot.runtime ? slot.runtime.caseId : null
      };
    },

    /** Limpia todo (debug). */
    _wipeAll() {
      cache = _emptyState();
      _persist();
      US.Storage.remove(LEGACY_PROGRESS_KEY);
      US.Storage.remove(LEGACY_META_KEY);
      if (US.Progress  && typeof US.Progress.reload  === 'function') US.Progress.reload();
      if (US.MetaStore && typeof US.MetaStore.reload === 'function') US.MetaStore.reload();
    }
  };
})();

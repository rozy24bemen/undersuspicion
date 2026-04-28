/**
 * DinnerPanel — Flujo de diálogo de la cena.
 * Fases: apertura → repaso → gancho → personal → cierre → done.
 * Cada respuesta del jugador aplica efecto al MetaStore y dispara la réplica.
 */
var US = US || {};

US.DinnerPanel = class DinnerPanel {

  constructor(uiController) {
    this.ui = uiController;
    this.root = uiController.root;
    this._replicaTimer = null;
  }

  // ── Public API ───────────────────────────────────

  start(caseResult) {
    if (this._replicaTimer) { clearTimeout(this._replicaTimer); this._replicaTimer = null; }

    const caseData = this.ui.engine.getCase();
    const cena = caseData.cena || {};

    this.caseResult    = caseResult;
    this.caseData      = caseData;
    this.apertura      = cena.apertura || 'Cuéntame.';
    this.repaso        = this._pickRepaso(cena.repasoPool || [], caseResult);
    this.gancho        = cena.ganchoMemoria || null;
    this.personal      = this._pickPersonal(caseData);
    this.veredictoNota = this._veredictoLinea(caseResult);

    this.phase       = 'apertura';
    this.exchangeIdx = 0;
    this.replica     = null;

    this.render();
  }

  render() {
    const panel = this.root.querySelector('#dinner-panel');
    if (!panel) return;

    panel.innerHTML = `
      <div class="dinner-panel__header">
        <span class="dinner-panel__phase">${this._phaseLabel()}</span>
        <span class="dinner-panel__caseRef">${this.ui._esc(this.caseData.subtitle || '')}</span>
      </div>
      <div class="dinner-panel__line" id="dinner-line">${this.ui._esc(this._currentLine())}</div>
      <div class="dinner-panel__body" id="dinner-body"></div>
    `;

    this._renderBody();
  }

  // ── Phase logic ──────────────────────────────────

  _phaseLabel() {
    return ({
      apertura:  'SOBRE EL CASO',
      repaso:    'SOBRE EL CASO',
      gancho:    'SOBRE EL CASO',
      personal:  'ELLA PREGUNTA',
      cierre:    'CIERRE',
      done:      'CIERRE'
    })[this.phase] || '';
  }

  _currentLine() {
    if (this.replica) return this.replica;

    switch (this.phase) {
      case 'apertura':  return this.apertura;
      case 'repaso':    return this._resolveLinea(this.repaso[this.exchangeIdx]);
      case 'gancho':    return this._resolveLinea(this.gancho);
      case 'personal':  return this._resolveLinea(this.personal[this.exchangeIdx]);
      case 'cierre':    return this._pickCierre();
      case 'done':      return '';
      default:          return '';
    }
  }

  _currentExchange() {
    if (this.replica) return null;
    if (this.phase === 'repaso')   return this.repaso[this.exchangeIdx];
    if (this.phase === 'gancho')   return this.gancho;
    if (this.phase === 'personal') return this.personal[this.exchangeIdx];
    return null;
  }

  _renderBody() {
    const body = this.root.querySelector('#dinner-body');
    if (!body) return;

    if (this.replica) {
      body.innerHTML = `<div class="dinner-panel__waiting">...</div>`;
      return;
    }

    if (this.phase === 'apertura') {
      body.innerHTML = `<button class="btn dinner-panel__continue" data-action="dinner-continue">CONTINUAR</button>`;
      body.querySelector('[data-action="dinner-continue"]')
        .addEventListener('click', () => this._advance());
      return;
    }

    if (this.phase === 'cierre' || this.phase === 'done') {
      body.innerHTML = `
        <div class="dinner-panel__veredicto">${this.ui._esc(this.veredictoNota)}</div>
        <button class="btn btn--primary dinner-panel__exit" data-action="dinner-menu">VOLVER AL MENÚ</button>
      `;
      body.querySelector('[data-action="dinner-menu"]')
        .addEventListener('click', () => this.ui.showScreen('menu'));
      return;
    }

    const ex = this._currentExchange();
    if (!ex || !ex.respuestas) {
      body.innerHTML = '';
      return;
    }

    body.innerHTML = ex.respuestas.map(r => `
      <button class="dinner-panel__response" data-resp="${this.ui._esc(r.id)}">
        ${this.ui._esc(r.texto)}
      </button>
    `).join('');

    body.querySelectorAll('.dinner-panel__response').forEach(btn => {
      btn.addEventListener('click', () => this._handleResponse(btn.dataset.resp));
    });
  }

  _handleResponse(respId) {
    const ex = this._currentExchange();
    if (!ex) return;

    const resp = ex.respuestas.find(r => r.id === respId);
    if (!resp) return;

    US.MetaStore.applyEffect(resp.efecto);
    if (ex.fromGlobal) US.MetaStore.markUsed(ex.id);

    if (US.Telemetry) {
      const efecto = resp.efecto || {};
      US.Telemetry.log('dinner-choice', {
        caseId:     this.caseData.id,
        phase:      this.phase,
        exchangeId: ex.id || null,
        responseId: respId,
        fromGlobal: !!ex.fromGlobal,
        axisDeltas: {
          sinceridad: efecto.sinceridad || 0,
          integridad: efecto.integridad || 0,
          lucidez:    efecto.lucidez    || 0
        },
        flags: Array.isArray(efecto.flags) ? efecto.flags.slice() : []
      });
    }

    this.replica = resp.replica || '...';
    this.render();

    this._replicaTimer = setTimeout(() => {
      this.replica = null;
      this._replicaTimer = null;
      this._advance();
    }, 1800);
  }

  _advance() {
    let safety = 8;
    do {
      this._stepPhase();
      safety -= 1;
    } while (safety > 0 && this._shouldSkipCurrentPhase());

    this.render();
  }

  _stepPhase() {
    switch (this.phase) {
      case 'apertura':
        this.phase = 'repaso';
        this.exchangeIdx = 0;
        break;

      case 'repaso':
        if (this.exchangeIdx + 1 < this.repaso.length) {
          this.exchangeIdx += 1;
        } else {
          this.phase = 'gancho';
          this.exchangeIdx = 0;
        }
        break;

      case 'gancho':
        this.phase = 'personal';
        this.exchangeIdx = 0;
        break;

      case 'personal':
        if (this.exchangeIdx + 1 < this.personal.length) {
          this.exchangeIdx += 1;
        } else {
          this.phase = 'cierre';
        }
        break;

      case 'cierre':
        this.phase = 'done';
        if (US.Telemetry && US.MetaStore) {
          const m = US.MetaStore.get();
          US.Telemetry.log('meta-snapshot', {
            caseId:     this.caseData.id,
            phase:      'dinner-end',
            sinceridad: m.sinceridad,
            integridad: m.integridad,
            lucidez:    m.lucidez,
            memoria:    Object.keys(m.memoria || {}).filter(k => m.memoria[k])
          });
        }
        break;
    }
  }

  _shouldSkipCurrentPhase() {
    if (this.phase === 'repaso'   && this.repaso.length === 0) return true;
    if (this.phase === 'gancho'   && !this.gancho)             return true;
    if (this.phase === 'personal' && this.personal.length === 0) return true;
    return false;
  }

  // ── Selection ────────────────────────────────────

  _pickRepaso(pool, caseResult) {
    if (!Array.isArray(pool) || pool.length === 0) return [];
    const shuffled = pool.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(2, shuffled.length));
  }

  _pickPersonal(caseData) {
    const G = US.CENAS_GLOBAL || {};
    const bank = G.metaPreguntas || [];
    const target = G.preguntasPorCena || 3;

    const caseNum = this._caseNumber(caseData.id);
    const tonos = (G.tonosPorCaso && G.tonosPorCaso[caseNum]) || ['casual'];

    const state = US.MetaStore.get();

    const eligibles = bank.filter(q => {
      if (US.MetaStore.isUsed(q.id)) return false;
      if (!tonos.includes(q.tono)) return false;
      if (!this._meetsRequisitos(q.requiere, state)) return false;
      if (Array.isArray(q.excluye) && q.excluye.some(id => US.MetaStore.isUsed(id))) return false;
      return true;
    });

    const shuffled = eligibles.sort(() => Math.random() - 0.5);
    const taken = shuffled.slice(0, target);
    return taken.map(q => Object.assign({ fromGlobal: true }, q));
  }

  _pickCierre() {
    const G = US.CENAS_GLOBAL || {};
    const cierres = G.cierres || [];
    const state = US.MetaStore.get();

    for (const c of cierres) {
      if (c.default) return c.linea;
      if (this._meetsRequisitos(c.si, state)) return c.linea;
    }
    return 'Buenas noches.';
  }

  _meetsRequisitos(req, state) {
    if (!req) return true;

    if (Array.isArray(req.flags)) {
      for (const f of req.flags) if (!state.memoria[f]) return false;
    }
    for (const eje of ['sinceridad', 'integridad', 'lucidez']) {
      const rule = req[eje];
      if (!rule) continue;
      if (typeof rule.lt === 'number' && !(state[eje] <  rule.lt)) return false;
      if (typeof rule.gt === 'number' && !(state[eje] >  rule.gt)) return false;
      if (typeof rule.lte === 'number' && !(state[eje] <= rule.lte)) return false;
      if (typeof rule.gte === 'number' && !(state[eje] >= rule.gte)) return false;
      if (typeof rule.eq === 'number' && state[eje] !== rule.eq) return false;
    }
    return true;
  }

  _caseNumber(caseId) {
    const m = /(\d+)/.exec(caseId || '');
    return m ? parseInt(m[1], 10) : 1;
  }

  // ── Line resolution ──────────────────────────────

  _resolveLinea(exchange) {
    if (!exchange) return '';
    let linea = exchange.linea;
    if (typeof linea === 'object' && linea !== null) {
      if (linea.acusoIncorrecto && this.caseResult && !this.caseResult.correct.who) {
        linea = linea.acusoIncorrecto;
      } else {
        linea = linea.default || '';
      }
    }
    return this._interpolate(linea);
  }

  _interpolate(text) {
    if (!text || typeof text !== 'string') return text || '';
    const r = this.caseResult || {};
    const accusedName = this._suspectName(r.accusedWho);
    const culpritName = this._suspectName(r.actualWho);

    return text
      .replace(/\{nombreAcusado\}/g,            accusedName || 'él')
      .replace(/\{nombreCulpable\}/g,           culpritName || 'el culpable')
      .replace(/\{contradiccionesEncontradas\}/g, String(r.contradictionsFound || 0))
      .replace(/\{contradiccionesTotal\}/g,     String(r.totalContradictions || 0));
  }

  _suspectName(id) {
    if (!id) return '';
    const s = (this.caseData.suspects || []).find(s => s.id === id);
    return s ? s.name : id;
  }

  _veredictoLinea(result) {
    if (!result) return '';
    if (result.allCorrect)    return 'Caso resuelto. Lo cogieron gracias a ti.';
    if (result.correct.who)   return 'Caso cerrado a medias. El nombre correcto, el resto no.';
    return 'Caso sin cerrar. El culpable sigue fuera.';
  }
};

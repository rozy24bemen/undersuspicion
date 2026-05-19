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

    // Final de juego (caso 8). Si el caso define `endings`, se intercala una
    // fase 'ending' tras la fase 'personal' que reproduce una cinemática de
    // bloques narration/dialogue. El cierre del banco global se omite porque
    // el final propio del caso reemplaza el "cierre genérico".
    this.ending           = this._pickEnding(caseData, caseResult);
    this.endingBlockIdx   = 0;

    this.phase       = 'apertura';
    this.exchangeIdx = 0;
    this.replica     = null;

    this.render();
  }

  render() {
    const panel = this.root.querySelector('#dinner-panel');
    if (!panel) return;

    const isEnding = this.phase === 'ending';
    const endingKey = isEnding && this.ending && this.ending.match && this.ending.match.metrics
      ? this.ending.match.metrics
      : '';
    const sceneBlock = this._currentSceneBlock();

    const lineCls = isEnding
      ? (sceneBlock ? 'dinner-panel__line dinner-panel__line--ending dinner-panel__line--scene'
                    : 'dinner-panel__line dinner-panel__line--ending')
      : 'dinner-panel__line';

    const imageHtml = sceneBlock
      ? `<img class="dinner-panel__ending-image" src="${this.ui._esc(sceneBlock.image)}" alt="">`
      : '';

    const lineStyle = sceneBlock ? ' style="white-space: pre-line"' : '';

    panel.innerHTML = `
      <div class="dinner-panel__header">
        <span class="dinner-panel__phase" ${endingKey ? `data-ending="${endingKey}"` : ''}>${this._phaseLabel()}</span>
        <span class="dinner-panel__caseRef">${this.ui._esc(this.caseData.subtitle || '')}</span>
      </div>
      ${imageHtml}
      <div class="${lineCls}" id="dinner-line"${lineStyle}>${this.ui._esc(this._currentLine())}</div>
      <div class="dinner-panel__body" id="dinner-body"></div>
    `;

    this._updateElenaPose();
    this._renderBody();
  }

  _currentSceneBlock() {
    if (this.phase !== 'ending' || !this.ending || !Array.isArray(this.ending.blocks)) return null;
    const b = this.ending.blocks[this.endingBlockIdx];
    return b && b.kind === 'scene' && b.image ? b : null;
  }

  // ── Pose de Elena (sprite en el slot derecho) ───────
  // Escoge la pose según fase + tono + si Elena habla ahora mismo, y
  // actualiza #dinner-elena. Mapa de poses base:
  //   - Fase 'personal' → tono de la pregunta actual (casual/preocupada/confrontacional)
  //   - Resto de fases → 'neutral'
  //   - Fase 'ending' → elenaPose del bloque o fallback por id (despedida/ausente)
  // Sufijo '-hablando' aplicado cuando Elena tiene la palabra (réplica
  // visible o fase de sólo-CONTINUAR como apertura/cierre). Cuando el
  // jugador está eligiendo respuesta, se usa la pose idle (sin sufijo).
  _updateElenaPose() {
    const G = US.CENAS_GLOBAL || {};
    const esposa = G.esposa || {};
    const portraits = esposa.portraits || {};
    if (!portraits.neutral) return;

    const pose = this._pickElenaPose();

    // Fallback: si el hablando no existe (asset no producido), caer al
    // idle del mismo tono antes que saltar a neutral — la transición es
    // menos disruptiva.
    let src = portraits[pose];
    if (!src && pose.endsWith('-hablando')) {
      src = portraits[pose.replace('-hablando', '')];
    }
    src = src || portraits.neutral;

    const figure = this.root.querySelector('#dinner-figure');
    const img    = this.root.querySelector('#dinner-elena');
    if (!figure || !img) return;

    if (img.getAttribute('src') !== src) img.setAttribute('src', src);
    figure.setAttribute('data-pose', pose);
  }

  _pickElenaPose() {
    if (this.phase === 'ending') {
      // Si el bloque actual marca elenaPose, mandar.
      const block = this.ending && Array.isArray(this.ending.blocks)
        ? this.ending.blocks[this.endingBlockIdx]
        : null;
      if (block && block.elenaPose) return block.elenaPose;
      // Fallback por id de ending: A (despedida limpia) o legacy good → 'despedida'.
      // B/C/D (cobardía, te pillan, suicidio) o legacy bad → 'ausente'.
      if (this.ending && this.ending.id) {
        if (/ending-A|good/i.test(this.ending.id)) return 'despedida';
        return 'ausente';
      }
      return 'neutral';
    }

    const base = this._baseTonoPose();
    return this._elenaIsSpeaking() ? base + '-hablando' : base;
  }

  _baseTonoPose() {
    if (this.phase === 'personal') {
      const q = this.personal && this.personal[this.exchangeIdx];
      if (q && q.tono) return q.tono;
    }
    return 'neutral';
  }

  // Elena está hablando ahora mismo si:
  //   - su réplica está visible (acaba de contestar al jugador), o
  //   - estamos en una fase donde sólo hay CONTINUAR (apertura/cierre/done)
  // En las fases con respuestas del jugador (repaso/gancho/personal), si NO
  // hay réplica, los botones del jugador están visibles → Elena espera (idle).
  _elenaIsSpeaking() {
    if (this.replica) return true;
    if (this.phase === 'repaso' || this.phase === 'gancho' || this.phase === 'personal') {
      return false;
    }
    return true;
  }

  // ── Phase logic ──────────────────────────────────

  _phaseLabel() {
    return ({
      apertura:  'SOBRE EL CASO',
      repaso:    'SOBRE EL CASO',
      gancho:    'SOBRE EL CASO',
      personal:  'ELLA PREGUNTA',
      ending:    this.ending ? (this.ending.title || 'FINAL') : 'FINAL',
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
      case 'ending':    return this._currentEndingLine();
      case 'cierre':    return this._pickCierre();
      case 'done':      return '';
      default:          return '';
    }
  }

  _currentEndingLine() {
    if (!this.ending || !Array.isArray(this.ending.blocks)) return '';
    const b = this.ending.blocks[this.endingBlockIdx];
    if (!b) return '';
    if (b.kind === 'scene')    return b.text || '';
    if (b.kind === 'dialogue') return (b.who ? b.who.toUpperCase() + ' — ' : '') + b.text;
    return b.text || '';
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
      // Tras la réplica de Elena, esperamos a que el jugador pulse continuar.
      // Antes había un setTimeout, pero el ritmo dependía del tiempo de
      // lectura del jugador y se cortaba con frecuencia.
      body.innerHTML = `<button class="btn dinner-panel__continue" data-action="dinner-continue">CONTINUAR</button>`;
      body.querySelector('[data-action="dinner-continue"]')
        .addEventListener('click', () => {
          this.replica = null;
          this._advance();
        });
      return;
    }

    if (this.phase === 'apertura') {
      body.innerHTML = `<button class="btn dinner-panel__continue" data-action="dinner-continue">CONTINUAR</button>`;
      body.querySelector('[data-action="dinner-continue"]')
        .addEventListener('click', () => this._advance());
      return;
    }

    if (this.phase === 'ending') {
      const isLast = this.ending && Array.isArray(this.ending.blocks)
        && this.endingBlockIdx >= this.ending.blocks.length - 1;
      const label = isLast ? 'TERMINAR' : 'CONTINUAR';
      body.innerHTML = `<button class="btn dinner-panel__continue" data-action="dinner-continue">${label}</button>`;
      body.querySelector('[data-action="dinner-continue"]')
        .addEventListener('click', () => this._advanceEnding());
      return;
    }

    if (this.phase === 'cierre' || this.phase === 'done') {
      // Marca el caso como completado en el progreso de la run.
      if (US.Progress && this.caseData && this.caseData.id) {
        US.Progress.markCompleted(this.caseData.id);
      }

      // Autosave entre casos: vuelca progress+meta al slot activo con
      // runtime=null (el caso recién terminado está cerrado).
      if (US.SaveManager && US.SaveManager.getActiveSlot()) {
        US.SaveManager.autosaveBetweenCases();
        if (US.Telemetry) {
          US.Telemetry.log('autosave', {
            caseId: this.caseData.id,
            slot:   US.SaveManager.getActiveSlot(),
            phase:  'between-cases'
          });
        }
      }

      // Decide acción siguiente: si hay caso siguiente cargado, encadenar
      // a su intro; si no, volver al menú.
      const nextId    = US.Progress ? US.Progress.getNext() : null;
      const nextCase  = nextId && US.CASES ? US.CASES[nextId] : null;
      const allDone   = US.Progress && US.Progress.isAllCompleted();

      let actionLabel, actionHandler;
      if (nextCase) {
        const num = this._caseNumberOf(nextId);
        actionLabel = num ? `SIGUIENTE CASO · ${num}` : 'SIGUIENTE CASO';
        actionHandler = () => {
          if (US.TutorialOverlay && typeof US.TutorialOverlay.markCompleted === 'function') {
            US.TutorialOverlay.markCompleted();
          }
          this.ui.engine.loadCase(nextId);
          this.ui.showScreen('intro');
        };
      } else if (allDone) {
        actionLabel = 'VOLVER AL MENÚ · INVESTIGACIÓN COMPLETADA';
        actionHandler = () => this.ui.showScreen('menu');
      } else {
        actionLabel = 'VOLVER AL MENÚ';
        actionHandler = () => this.ui.showScreen('menu');
      }

      body.innerHTML = `
        <div class="dinner-panel__veredicto">${this.ui._esc(this.veredictoNota)}</div>
        <button class="btn btn--primary dinner-panel__exit" data-action="dinner-next">${this.ui._esc(actionLabel)}</button>
      `;
      body.querySelector('[data-action="dinner-next"]')
        .addEventListener('click', actionHandler);
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
    // No auto-advance: el jugador pulsa CONTINUAR (gestionado en _renderBody).
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
        // En casos con cinemática propia (caso 8) saltamos la fase 'personal'
        // — sus preguntas del banco global rompen el clímax narrativo. El
        // gancho enlaza directo con la cinemática del final.
        if (this.ending) {
          this.phase = 'ending';
          this.endingBlockIdx = 0;
        } else {
          this.phase = 'personal';
          this.exchangeIdx = 0;
        }
        break;

      case 'personal':
        if (this.exchangeIdx + 1 < this.personal.length) {
          this.exchangeIdx += 1;
        } else {
          // Si el caso tiene cinemática de final propia (caso 8), saltamos
          // el cierre genérico del banco global y enlazamos con la cinemática.
          if (this.ending) {
            this.phase = 'ending';
            this.endingBlockIdx = 0;
          } else {
            this.phase = 'cierre';
          }
        }
        break;

      case 'ending':
        // El avance de bloques de la cinemática se maneja en _advanceEnding().
        // Cuando se llega aquí desde _stepPhase es porque la cinemática terminó.
        this.phase = 'done';
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
    // Intercambios marcados `required: true` siempre aparecen (caso 8 los usa
    // para sembrar el hijo muerto en la cena final, p.ej. c08_tendria). El
    // resto se baraja y rellena hasta llegar al target (2). Si los requeridos
    // ya superan el target, se devuelven todos sin truncar.
    const required = pool.filter(x => x && x.required);
    const optional = pool.filter(x => !x || !x.required);
    const shuffled = optional.slice().sort(() => Math.random() - 0.5);
    const target = 2;
    const fill = Math.max(0, target - required.length);
    return required.concat(shuffled.slice(0, fill));
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

  _caseNumberOf(caseId) {
    const m = /(\d+)/.exec(caseId || '');
    return m ? parseInt(m[1], 10) : null;
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
    if (this.ending) {
      // En el caso final no hablamos de "rating" — el veredicto es el final.
      // Soporta tanto el formato nuevo (4 cuadrantes con match) como el
      // legacy (good/bad por id).
      const m = this.ending.match || {};
      const isAccuse = (typeof m.accuseDetective === 'boolean')
        ? m.accuseDetective
        : (this.ending.id && /good/i.test(this.ending.id));
      const isGoodMetrics = (m.metrics === 'good');

      if (isAccuse && isGoodMetrics)  return 'Caso cerrado. Te entregaste tú mismo.';
      if (isAccuse && !isGoodMetrics) return 'Caso cerrado. Te entregaste antes de que las voces te llevaran.';
      if (!isAccuse && isGoodMetrics) return 'Caso sin cerrar por ti. Te pillaron al amanecer.';
      return 'Caso sin cerrar. La verdad nunca salió de este piso.';
    }
    if (result.allCorrect)    return 'Caso resuelto. Lo cogieron gracias a ti.';
    if (result.correct.who)   return 'Caso cerrado a medias. El nombre correcto, el resto no.';
    return 'Caso sin cerrar. El culpable sigue fuera.';
  }

  // ── Endings (caso 8) ─────────────────────────────

  /**
   * Avanza un bloque de la cinemática final. Si era el último bloque,
   * registra telemetría y pasa la fase a 'done' para que _renderBody
   * pinte el botón de salida + autosave + marca de caso completado.
   */
  _advanceEnding() {
    if (!this.ending || !Array.isArray(this.ending.blocks)) {
      this.phase = 'done';
      this.render();
      return;
    }
    if (this.endingBlockIdx < this.ending.blocks.length - 1) {
      this.endingBlockIdx += 1;
      this.render();
      return;
    }
    // Fin de la cinemática.
    if (US.Telemetry) {
      US.Telemetry.log('ending-shown', {
        caseId:   this.caseData.id,
        endingId: this.ending.id || null,
        title:    this.ending.title || null
      });
    }
    this._advance();
  }

  /**
   * Elige qué ending mostrar (caso 8) en función de la matriz 2x2:
   *   eje X = acusación (detective sí / no)
   *   eje Y = métricas con Elena (buenas / malas)
   *
   * Soporta dos formatos:
   *   - Nuevo (4 finales): caseData.endings = { A, B, C, D } con match
   *     { accuseDetective: bool, metrics: 'good'|'bad' }.
   *   - Legacy (2 finales): caseData.endings = { good, bad } — se sigue
   *     respetando para no romper si algún día se reusa en otro caso.
   *
   * Devuelve null si el caso no tiene cinemáticas finales.
   */
  _pickEnding(caseData, caseResult) {
    const endings = caseData && caseData.endings;
    if (!endings) return null;

    // Formato nuevo: 4 cuadrantes.
    if (endings.A || endings.B || endings.C || endings.D) {
      const accuseDetective = !!(caseResult && caseResult.accusedWho === 'detective');
      const metrics = this._evaluateMetrics() ? 'good' : 'bad';
      const candidates = [endings.A, endings.B, endings.C, endings.D].filter(Boolean);
      for (const e of candidates) {
        const m = e.match || {};
        if (m.accuseDetective === accuseDetective && m.metrics === metrics) return e;
      }
      // Fallback defensivo: si la matriz no devuelve nada, devolver el
      // primero disponible (no debería pasar nunca con los 4 definidos).
      return candidates[0] || null;
    }

    // Formato legacy: good/bad por umbrales explícitos en el propio ending.
    const good = endings.good;
    if (good && this._meetsLegacyEndingRequirements(good, caseResult)) return good;
    return endings.bad || null;
  }

  /**
   * Evalúa si las métricas de las cenas son "buenas". Criterio (OR):
   *   - los 3 ejes ≥ 60, O BIEN
   *   - ≥ 4 flags clave del lore (memoria del detective).
   * El OR evita penalizar perfiles "memoria sí, dialéctica no" o viceversa.
   */
  _evaluateMetrics() {
    if (!US.MetaStore || typeof US.MetaStore.get !== 'function') return true;
    const meta = US.MetaStore.get();
    const ejesOK = ['sinceridad', 'integridad', 'lucidez']
      .every(eje => (meta[eje] || 0) >= 60);
    if (ejesOK) return true;

    const flagsClave = [
      'recuerda_padre', 'fotos_en_cajon', 'cajon_prohibido',
      'promete_contar_todo', 'lee_manuscrito', 'recuerda_calle_goya',
      'papeles_elena', 'recuerda_hijo_muerto'
    ];
    const count = flagsClave.filter(f => meta.memoria && meta.memoria[f]).length;
    return count >= 4;
  }

  _meetsLegacyEndingRequirements(ending, caseResult) {
    if (!ending) return false;
    if (ending.requireAccusedWho && (!caseResult || caseResult.accusedWho !== ending.requireAccusedWho)) {
      return false;
    }
    if (!US.MetaStore || typeof US.MetaStore.get !== 'function') return true;
    const meta = US.MetaStore.get();
    const axes = ending.requireAxes || {};
    for (const eje of ['sinceridad', 'integridad', 'lucidez']) {
      if (typeof axes[eje] === 'number' && (meta[eje] || 0) < axes[eje]) return false;
    }
    if (typeof ending.requireFlagCount === 'number') {
      const count = Object.keys(meta.memoria || {}).filter(k => meta.memoria[k]).length;
      if (count < ending.requireFlagCount) return false;
    }
    return true;
  }
};

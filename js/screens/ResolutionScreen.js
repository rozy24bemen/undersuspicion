/**
 * ResolutionScreen — Pantalla para resolver el caso (acusar).
 * Soporta:
 * - Caso simple: 1 culpable (como siempre).
 * - Cómplice (solution.who2): 2 dropdowns de culpable.
 * - Tabla de argumentación (argumentationMode: true): paso previo obligatorio.
 */
var US = US || {};

US.ResolutionScreen = class ResolutionScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
    this._argTableDone = false;
  }

  render(container) {
    const c = this.engine.getCase();

    // Caso 7 y similares: mostrar tabla de argumentación antes de la acusación
    if (c.argumentationMode && !this._argTableDone) {
      this._renderArgumentationTable(container);
      return;
    }

    this._argTableDone = false;
    this._renderAccusation(container);
  }

  _renderArgumentationTable(container) {
    const c = this.engine.getCase();
    const argTable = c.argumentationTable || [];
    const evidence = this.engine.getEvidence();
    const suspects = this.engine.getSuspects();

    // Agrupar declaraciones por sospechoso
    const statements = argTable.map(a => ({
      id:   a.statementId,
      text: a.statement,
      suspectId: a.suspectId,
      suspectName: (suspects.find(s => s.id === a.suspectId) || {}).name || a.suspectId
    }));

    const evidenceItems = [...new Set(argTable.map(a => a.evidenceId))]
      .map(evId => evidence.find(e => e.id === evId))
      .filter(Boolean);

    container.innerHTML = `
      <div class="resolution">
        <button class="btn btn--back" data-action="back-to-game">← VOLVER</button>

        <div class="resolution__title">TABLA DE ARGUMENTACIÓN</div>
        <div class="resolution__subtitle">CONECTA CADA DECLARACIÓN CON LA PRUEBA QUE LA CONTRADICE</div>

        <div class="arg-table">
          <div class="arg-table__cols">
            <div class="arg-table__col arg-table__col--statements">
              <div class="arg-table__col-header">DECLARACIONES</div>
              ${statements.map(s => `
                <div class="arg-table__item arg-table__statement ${
                  this.engine.matchedArguments.has(s.id + '::' + (argTable.find(a => a.statementId === s.id) || {}).evidenceId)
                    ? 'arg-table__item--matched' : ''
                }" data-statement-id="${s.id}">
                  <div class="arg-table__item-suspect">${this.ui._esc(s.suspectName)}</div>
                  <div class="arg-table__item-text">${this.ui._esc(s.text)}</div>
                </div>
              `).join('')}
            </div>

            <div class="arg-table__col arg-table__col--evidence">
              <div class="arg-table__col-header">PRUEBAS</div>
              ${evidenceItems.map(ev => `
                <div class="arg-table__item arg-table__evidence" data-evidence-id="${ev.id}">
                  <div class="arg-table__item-icon">${ev.icon}</div>
                  <div class="arg-table__item-text">${this.ui._esc(ev.title)}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="arg-table__feedback" id="arg-feedback"></div>

          <div class="arg-table__progress">
            Conexiones correctas: <span id="arg-count">${this.engine.getMatchedArguments()}</span> / ${this.engine.getRequiredArguments()}
          </div>
        </div>

        <button class="btn btn--cta" id="btn-continue-accuse">CONTINUAR A ACUSACIÓN</button>
      </div>
    `;

    container.querySelector('[data-action="back-to-game"]')
      .addEventListener('click', () => this.ui.showScreen('game'));

    let selectedStatement = null;

    container.querySelectorAll('.arg-table__statement').forEach(el => {
      el.addEventListener('click', () => {
        container.querySelectorAll('.arg-table__statement').forEach(e => e.classList.remove('arg-table__item--selected'));
        selectedStatement = el.dataset.statementId;
        el.classList.add('arg-table__item--selected');
      });
    });

    container.querySelectorAll('.arg-table__evidence').forEach(el => {
      el.addEventListener('click', () => {
        if (!selectedStatement) {
          this._argFeedback(container, 'Selecciona primero una declaración de la izquierda.');
          return;
        }
        const result = this.engine.matchArgument(selectedStatement, el.dataset.evidenceId);
        if (result.alreadyMatched) {
          this._argFeedback(container, 'Esta conexión ya estaba registrada.');
        } else if (result.valid) {
          el.classList.add('arg-table__item--matched');
          const stEl = container.querySelector(`[data-statement-id="${selectedStatement}"]`);
          if (stEl) stEl.classList.add('arg-table__item--matched');
          this._argFeedback(container, '✓ Conexión correcta.');
          container.querySelector('#arg-count').textContent = this.engine.getMatchedArguments();
        } else {
          this._argFeedback(container, 'Esa combinación no encaja. Revisa las pruebas.');
        }
        selectedStatement = null;
        container.querySelectorAll('.arg-table__statement').forEach(e => e.classList.remove('arg-table__item--selected'));
      });
    });

    container.querySelector('#btn-continue-accuse').addEventListener('click', () => {
      this._argTableDone = true;
      this._renderAccusation(container);
    });
  }

  _argFeedback(container, msg) {
    const el = container.querySelector('#arg-feedback');
    if (!el) return;
    el.textContent = msg;
    el.style.opacity = '1';
    clearTimeout(this._argTimer);
    this._argTimer = setTimeout(() => { el.style.opacity = '0'; }, 2500);
  }

  _renderAccusation(container) {
    const c = this.engine.getCase();
    const allSuspects = this.engine.getSuspects();
    // Gate condicional: en el caso 8 el 4º sospechoso (el propio detective)
    // solo aparece como opción acusable si los ejes y las flags acumuladas
    // en las cenas previas lo permiten. Si no, se le filtra del dropdown
    // para forzar una acusación errónea → ruta del final malo.
    const suspects = allSuspects.filter(s => this._isSuspectUnlocked(s.id, c));
    const hasAccomplice = !!c.solution.who2;

    container.innerHTML = `
      <div class="resolution">
        <button class="btn btn--back" data-action="back-to-game">← VOLVER</button>

        <div class="resolution__title">RESOLVER EL CASO</div>
        <div class="resolution__subtitle">SELECCIONA UNA OPCIÓN EN CADA CATEGORÍA · ACUSA CUANDO ESTÉS SEGURO</div>

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number" style="background:var(--red-dark);border-color:var(--red);">1</div>
            <div class="resolution__block-question">${hasAccomplice ? '¿QUIÉN ejecutó el crimen?' : '¿QUIÉN cometió el crimen?'}</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-who">
              <option value="">Seleccionar sospechoso...</option>
              ${suspects.map(s => `<option value="${s.id}">${this.ui._esc(s.name)} — ${this.ui._esc(s.role)}</option>`).join('')}
            </select>
          </div>
        </div>

        ${hasAccomplice ? `
        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number" style="background:var(--red-dark);border-color:var(--red);">2</div>
            <div class="resolution__block-question">¿QUIÉN ordenó o planificó el crimen?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-who2">
              <option value="">Seleccionar sospechoso o cómplice...</option>
              ${(c.who2Options || suspects).map(s => `<option value="${s.id}">${this.ui._esc(s.name)} — ${this.ui._esc(s.role || '')}</option>`).join('')}
            </select>
          </div>
        </div>
        ` : ''}

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number">${hasAccomplice ? '3' : '2'}</div>
            <div class="resolution__block-question">¿CÓMO fue cometido?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-how">
              <option value="">Seleccionar método...</option>
              ${c.howOptions.map(o => `<option value="${o.id}">${this.ui._esc(o.text)}</option>`).join('')}
            </select>
          </div>
        </div>

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number">${hasAccomplice ? '4' : '3'}</div>
            <div class="resolution__block-question">¿POR QUÉ lo hizo?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-why">
              <option value="">Seleccionar motivo...</option>
              ${c.whyOptions.map(o => `<option value="${o.id}">${this.ui._esc(o.text)}</option>`).join('')}
            </select>
          </div>
        </div>

        <button class="btn btn--cta" id="btn-accuse" data-action="accuse">ACUSAR</button>
      </div>
    `;

    container.querySelector('[data-action="back-to-game"]')
      .addEventListener('click', () => this.ui.showScreen('game'));

    container.querySelector('[data-action="accuse"]')
      .addEventListener('click', () => this._handleAccuse(hasAccomplice));
  }

  _handleAccuse(hasAccomplice) {
    const who  = this.ui.root.querySelector('#res-who').value;
    const who2 = hasAccomplice ? (this.ui.root.querySelector('#res-who2') || {}).value : null;
    const how  = this.ui.root.querySelector('#res-how').value;
    const why  = this.ui.root.querySelector('#res-why').value;

    const missing = !who || !how || !why || (hasAccomplice && !who2);
    if (missing) {
      var btn = this.ui.root.querySelector('#btn-accuse');
      btn.textContent = '⚠ SELECCIONA TODAS LAS OPCIONES';
      btn.style.borderColor = 'var(--red)';
      setTimeout(function() { btn.textContent = 'ACUSAR'; btn.style.borderColor = ''; }, 2000);
      return;
    }

    const result = this.engine.resolveCase(who, how, why, who2);
    this.ui._lastResult = result;
    if (US.audio) US.audio.playSFX('case-closed');
    this.ui.showScreen('dinner');
  }

  /**
   * Decide si un sospechoso aparece como opción acusable. Por defecto sí.
   * En el caso 8, `gateUnlock[suspectId]` puede exigir umbrales de ejes y
   * un mínimo de flags de memoria para que el detective aparezca como
   * cuarta tarjeta. Si MetaStore no está disponible, se asume desbloqueado
   * (modo libre / debug).
   */
  _isSuspectUnlocked(suspectId, caseData) {
    const gate = caseData.gateUnlock && caseData.gateUnlock[suspectId];
    if (!gate) return true;
    if (!US.MetaStore || typeof US.MetaStore.get !== 'function') return true;

    const meta = US.MetaStore.get();
    const axes = gate.requireAxes || {};
    for (const eje of ['sinceridad', 'integridad', 'lucidez']) {
      if (typeof axes[eje] === 'number' && (meta[eje] || 0) < axes[eje]) return false;
    }

    if (typeof gate.requireFlagCount === 'number') {
      const haveAny = gate.requireFlagsAny;
      const count = haveAny
        ? haveAny.filter(f => meta.memoria && meta.memoria[f]).length
        : Object.keys(meta.memoria || {}).filter(k => meta.memoria[k]).length;
      if (count < gate.requireFlagCount) return false;
    }
    return true;
  }
};

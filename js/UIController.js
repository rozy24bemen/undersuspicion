/**
 * UIController — Toda la manipulación del DOM.
 * Genera las pantallas, gestiona eventos, actualiza visuales.
 * Delega el renderizado de pantallas a clases Screen independientes.
 */
var US = US || {};

US.UIController = class UIController {

  constructor(engine, root) {
    this.engine = engine;
    this.root = root;
    this.activeTab = 'vinculo';
    this.deskCardZIndex = 20;
    this._lastResult = null;

    // Drag state for desk cards
    this._drag = null;

    // Build all static screen shells
    this._buildShell();

    // Instantiate screen delegates
    this._screens = {
      menu:       new US.MenuScreen(this),
      intro:      new US.IntroScreen(this),
      game:       new US.GameScreen(this),
      resolution: new US.ResolutionScreen(this),
      result:     new US.ResultScreen(this)
    };

    this._bindGlobalEvents();
  }

  // ═══════════════════════════════════════════════════
  // SHELL — Creates all screen containers once
  // ═══════════════════════════════════════════════════

  _buildShell() {
    this.root.innerHTML = `
      <section id="screen-menu" class="screen active"></section>
      <section id="screen-intro" class="screen"></section>
      <section id="screen-game" class="screen"></section>
      <section id="screen-resolution" class="screen"></section>
      <section id="screen-result" class="screen"></section>
      <div class="modal-overlay" id="modal-evidence"></div>
      <div class="contradiction-overlay" id="overlay-contradiction"></div>
      <div class="notebook-panel" id="panel-notebook"></div>
    `;

    this.screens = {
      menu:       this.root.querySelector('#screen-menu'),
      intro:      this.root.querySelector('#screen-intro'),
      game:       this.root.querySelector('#screen-game'),
      resolution: this.root.querySelector('#screen-resolution'),
      result:     this.root.querySelector('#screen-result')
    };

    this.modal = this.root.querySelector('#modal-evidence');
    this.contradictionEl = this.root.querySelector('#overlay-contradiction');
    this.notebookEl = this.root.querySelector('#panel-notebook');
  }

  // ═══════════════════════════════════════════════════
  // SCREEN NAVIGATION
  // ═══════════════════════════════════════════════════

  showScreen(name) {
    Object.values(this.screens).forEach(s => s.classList.remove('active'));
    this.screens[name].classList.add('active');

    if (this._screens[name]) {
      this._screens[name].render(this.screens[name]);
    }
  }

  // ═══════════════════════════════════════════════════
  // GAME SCREEN — Internal render helpers
  // (Top-level render delegated to GameScreen)
  // ═══════════════════════════════════════════════════

  // ── Evidence Desk ─────────────────────────────────

  _renderDesk() {
    const surface = this.root.querySelector('#desk-surface');
    const evidence = this.engine.getEvidence();

    const buildCards = () => {
      // Generate positions for cards spread across the desk
      const positions = this._generateDeskPositions(evidence.length, surface);

      surface.innerHTML = evidence.map((ev, i) => {
        const pos = positions[i];
        return `
          <div class="desk-card"
               data-evidence-id="${ev.id}"
               style="left:${pos.x}px;top:${pos.y}px;transform:rotate(${pos.rot}deg);z-index:${10 + i};"
          >
            <div class="desk-card__head">
              <span class="desk-card__icon">${ev.icon}</span>
              <span class="desk-card__title">${this._esc(ev.title)}</span>
            </div>
            <div class="desk-card__body">${this._esc(ev.shortDesc)}</div>
            <div class="desk-card__click-hint">
              <span class="hint-mouse">CLIC PARA VER · ARRASTRA PARA MOVER</span>
              <span class="hint-touch">TOCA PARA VER · MANTÉN PARA MOVER</span>
            </div>
          </div>
        `;
      }).join('');

      // Bind drag and click for each card
      surface.querySelectorAll('.desk-card').forEach(card => {
        card.addEventListener('pointerdown', e => this._onCardPointerDown(e, card));
      });
    };

    // Defer to ensure layout is calculated before reading dimensions
    requestAnimationFrame(buildCards);

    // Global pointer events for drag
    surface.addEventListener('pointermove', e => this._onCardPointerMove(e));
    surface.addEventListener('pointerup', e => this._onCardPointerUp(e));
    surface.addEventListener('pointercancel', e => this._onCardPointerUp(e));
  }

  _generateDeskPositions(count, surface) {
    var w = surface.clientWidth || 700;
    var h = surface.clientHeight || 500;
    // Determine card size from CSS (mobile vs desktop)
    var cardW = w < 500 ? 110 : w < 700 ? 130 : 165;
    var cols = Math.max(2, Math.floor((w - 20) / (cardW + 10)));
    var rows = Math.ceil(count / cols);
    var padX = Math.max(10, (w - cols * (cardW + 10)) / 2);
    var padY = Math.max(10, Math.min(40, (h - rows * 100) / (rows + 1)));
    var rowH = Math.min(140, (h - padY) / Math.max(rows, 1));

    var positions = [];
    for (var i = 0; i < count; i++) {
      var col = i % cols;
      var row = Math.floor(i / cols);
      positions.push({
        x: Math.round(padX + col * (cardW + 10) + (Math.random() * 14 - 7)),
        y: Math.round(padY + row * rowH + (Math.random() * 10 - 5)),
        rot: (Math.random() * 8 - 4).toFixed(1)
      });
    }
    return positions;
  }

  /**
   * Pointer interaction strategy:
   *  - Mouse (pointerType "mouse"): instant drag, 4px threshold to separate click vs drag.
   *  - Touch (pointerType "touch"/"pen"): long-press (~300ms) to enter drag mode.
   *    A short tap opens the evidence modal. Moving >12px before the timer fires cancels it
   *    (scroll gesture), so the user can scroll the desk freely.
   *    Visual feedback: the card scales up when the long-press fires.
   */

  _onCardPointerDown(e, card) {
    if (e.button !== 0) return;
    var isTouch = (e.pointerType === 'touch' || e.pointerType === 'pen');

    card.setPointerCapture(e.pointerId);
    this.deskCardZIndex++;
    card.style.zIndex = this.deskCardZIndex;

    this._drag = {
      card: card,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      origLeft: parseInt(card.style.left) || 0,
      origTop: parseInt(card.style.top) || 0,
      moved: false,
      dragActive: false,    // true once drag is confirmed
      isTouch: isTouch,
      longPressTimer: null,
      cancelled: false
    };

    if (isTouch) {
      // Start a long-press timer; drag starts only after 300ms hold
      this._drag.longPressTimer = setTimeout(() => {
        if (!this._drag || this._drag.cancelled) return;
        this._drag.dragActive = true;
        card.classList.add('dragging');
        // Haptic-like visual pulse
        card.style.transition = 'transform .12s ease';
        card.style.transform = 'scale(1.08)';
        setTimeout(function () {
          card.style.transition = '';
        }, 130);
      }, 300);
    } else {
      // Mouse: drag is immediately active
      this._drag.dragActive = true;
      card.classList.add('dragging');
    }
  }

  _onCardPointerMove(e) {
    if (!this._drag) return;

    var dx = e.clientX - this._drag.startX;
    var dy = e.clientY - this._drag.startY;
    var dist = Math.abs(dx) + Math.abs(dy);

    if (this._drag.isTouch && !this._drag.dragActive) {
      // If finger moves >12px before long-press fires → cancel (scroll intent)
      if (dist > 12) {
        clearTimeout(this._drag.longPressTimer);
        this._drag.cancelled = true;
      }
      return; // Don't move the card until drag is confirmed
    }

    // Mark as moved (for click-vs-drag detection on mouse)
    var threshold = this._drag.isTouch ? 12 : 4;
    if (dist > threshold) this._drag.moved = true;

    if (this._drag.dragActive) {
      this._drag.card.style.left = (this._drag.origLeft + dx) + 'px';
      this._drag.card.style.top = (this._drag.origTop + dy) + 'px';
    }
  }

  _onCardPointerUp(e) {
    if (!this._drag) return;
    var d = this._drag;
    this._drag = null;

    clearTimeout(d.longPressTimer);
    d.card.classList.remove('dragging');

    // Reset any scale transform applied during long-press
    if (d.isTouch) {
      var rot = d.card.style.transform.match(/rotate\([^)]+\)/);
      d.card.style.transform = rot ? rot[0] : '';
    }

    // Open evidence modal on tap (touch) or click (mouse) when no drag occurred
    if (!d.moved && !d.cancelled) {
      var evId = d.card.dataset.evidenceId;
      this._showEvidenceModal(evId);
    }
  }

  // ── Room (Right Half) ─────────────────────────────

  _renderRoom() {
    this._renderPressureBar();
    this._renderPortrait();
    this._renderQuestionPanel();
  }

  _renderPressureBar() {
    const state = this.engine.getActiveSuspectState();
    const pct = state.pressure;
    const section = this.root.querySelector('#pressure-section');
    const cls = pct >= 100 ? 'critical' : pct >= 70 ? 'warning' : '';
    const text = pct >= 100
      ? 'MÁXIMO — El sospechoso se niega a responder'
      : pct >= 70
        ? `${pct}% — El sospechoso muestra signos de estrés`
        : `${pct}%`;

    section.innerHTML = `
      <div class="pressure__label">NIVEL DE PRESIÓN</div>
      <div class="pressure__track"><div class="pressure__fill" style="width:${pct}%"></div></div>
      <div class="pressure__text ${cls}">${text}</div>
    `;
  }

  _renderPortrait() {
    const suspect = this.engine.getActiveSuspect();
    const state = this.engine.getActiveSuspectState();
    const susCls = state.suspicion >= 40 ? 'high' : state.suspicion >= 15 ? 'elevated' : '';
    const section = this.root.querySelector('#portrait-section');

    section.innerHTML = `
      <div class="portrait__frame">
        <div class="portrait__corner portrait__corner--tl"></div>
        <div class="portrait__corner portrait__corner--tr"></div>
        <div class="portrait__corner portrait__corner--bl"></div>
        <div class="portrait__corner portrait__corner--br"></div>
        <div class="portrait__figure-head"></div>
        <div class="portrait__figure-body"></div>
      </div>
      <div class="portrait__name">${this._esc(suspect.name)}</div>
      <div class="portrait__role">${this._esc(suspect.role)}</div>
      <div class="portrait__suspicion ${susCls}">SOSPECHA: ${state.suspicion}%</div>
    `;
  }

  _renderQuestionPanel() {
    const panel = this.root.querySelector('#question-panel');
    panel.innerHTML = `
      <div class="q-tabs">
        <button class="q-tab ${this.activeTab === 'vinculo' ? 'active' : ''}" data-tab="vinculo">VÍNCULO</button>
        <button class="q-tab ${this.activeTab === 'coartada' ? 'active' : ''}" data-tab="coartada">COARTADA</button>
        <button class="q-tab ${this.activeTab === 'prueba' ? 'active' : ''}" data-tab="prueba">PRUEBA</button>
      </div>
      <div class="q-body" id="q-body"></div>
    `;

    panel.querySelectorAll('.q-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.activeTab = tab.dataset.tab;
        this._renderQuestionPanel();
      });
    });

    this._renderTabContent();
  }

  _renderTabContent() {
    const body = this.root.querySelector('#q-body');
    const suspect = this.engine.getActiveSuspect();

    if (this.activeTab === 'prueba') {
      this._renderEvidenceGrid(body);
      return;
    }

    const questions = suspect.questions[this.activeTab] || [];
    body.innerHTML = questions.map(q => {
      const asked = this.engine.isQuestionAsked(q.id);
      return `
        <div class="q-item ${asked ? 'asked' : ''}" data-question-id="${q.id}">
          <div class="q-item__text">${this._esc(q.text)}</div>
          <div class="q-item__cost">-${q.pressureCost}P</div>
          <div class="q-item__status">✓</div>
        </div>
      `;
    }).join('');

    body.querySelectorAll('.q-item:not(.asked)').forEach(item => {
      item.addEventListener('click', () => this._handleAskQuestion(item.dataset.questionId));
    });
  }

  _renderEvidenceGrid(body) {
    const evidence = this.engine.getEvidence();
    const suspect = this.engine.getActiveSuspect();

    body.innerHTML = `
      <div style="font-size:9px;color:#555;margin-bottom:8px;letter-spacing:1px;">
        Selecciona una prueba para presentársela a ${this._esc(suspect.name)}:
      </div>
      <div class="ev-grid">
        ${evidence.map(ev => {
          const presented = this.engine.isEvidencePresented(suspect.id, ev.id);
          return `
            <div class="ev-thumb ${presented ? 'presented' : ''}" data-evidence-id="${ev.id}">
              <span class="ev-thumb__icon">${ev.icon}</span>
              <span class="ev-thumb__label">${this._esc(ev.title)}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;

    body.querySelectorAll('.ev-thumb:not(.presented)').forEach(el => {
      el.addEventListener('click', () => this._handlePresentEvidence(el.dataset.evidenceId));
    });
  }

  // ── Action Handlers ───────────────────────────────

  _handleAskQuestion(questionId) {
    const result = this.engine.askQuestion(questionId);
    if (result.blocked) {
      if (result.reason === 'maxPressure') {
        this._setDialogue('El sospechoso se niega a responder más preguntas. "No tengo nada más que decir. Quiero un abogado."');
      }
      return;
    }

    this._setDialogue(result.response);
    this._renderPressureBar();
    this._renderQuestionPanel();
    this._updateNotebookBadge();

    if (result.contradiction) {
      setTimeout(() => this._showContradiction(result.contradiction), 600);
    }
  }

  _handlePresentEvidence(evidenceId) {
    const result = this.engine.presentEvidence(evidenceId);
    if (result.blocked) {
      if (result.reason === 'maxPressure') {
        this._setDialogue('El sospechoso se niega a recibir más preguntas. "No tengo nada más que decir."');
      } else if (result.reason === 'alreadyPresented') {
        this._setDialogue('Ya has presentado esta prueba a este sospechoso.');
      }
      return;
    }

    this._setDialogue(result.response);
    this._renderPressureBar();
    this._renderPortrait();
    this._renderQuestionPanel();
    this._updateNotebookBadge();

    if (result.contradiction) {
      setTimeout(() => this._showContradiction(result.contradiction), 600);
    }
  }

  _setDialogue(text) {
    const el = this.root.querySelector('#dialogue-text');
    el.textContent = text;
    el.classList.remove('animate');
    void el.offsetWidth;  // force reflow
    el.classList.add('animate');
  }

  // ═══════════════════════════════════════════════════
  // EVIDENCE MODAL
  // ═══════════════════════════════════════════════════

  _showEvidenceModal(evidenceId) {
    const ev = this.engine.getEvidence().find(e => e.id === evidenceId);
    if (!ev) return;

    this.modal.innerHTML = `
      <div class="modal-card">
        <div class="modal__header">
          <div class="modal__header-info">
            <div class="modal__header-title">EVIDENCIA · DETALLE COMPLETO</div>
            <div class="modal__header-ref">${this._esc(ev.metadata.ref)}</div>
          </div>
          <button class="modal__close" data-action="close-modal">✕</button>
        </div>
        <div class="modal__body">
          <div class="modal__image-placeholder">
            <span class="modal__image-icon">${ev.icon}</span>
            <span class="modal__image-label">[${this._esc(ev.type).toUpperCase()} — IMAGEN PLACEHOLDER]</span>
          </div>

          <div>
            <div class="modal__section-label">TÍTULO</div>
            <div class="modal__section-title">${this._esc(ev.title)}</div>
          </div>

          <div>
            <div class="modal__section-label">METADATOS</div>
            <div class="modal__metadata">
              Fecha: ${this._esc(ev.metadata.fecha)}<br>
              Fuente: ${this._esc(ev.metadata.fuente)}<br>
              Referencia: ${this._esc(ev.metadata.ref)}
            </div>
          </div>

          <div>
            <div class="modal__section-label">DESCRIPCIÓN</div>
            <div class="modal__description">${this._esc(ev.fullDesc)}</div>
          </div>

          <button class="btn btn--ghost btn--menu modal__present-btn" data-action="present-from-modal" data-evidence-id="${ev.id}">
            PRESENTAR AL SOSPECHOSO
          </button>
        </div>
      </div>
    `;

    this.modal.classList.add('active');

    this.modal.querySelector('[data-action="close-modal"]')
      .addEventListener('click', () => this._hideEvidenceModal());

    this.modal.querySelector('[data-action="present-from-modal"]')
      .addEventListener('click', (e) => {
        this._hideEvidenceModal();
        this._handlePresentEvidence(e.currentTarget.dataset.evidenceId);
      });

  }

  _hideEvidenceModal() {
    this.modal.classList.remove('active');
  }

  // ═══════════════════════════════════════════════════
  // CONTRADICTION OVERLAY
  // ═══════════════════════════════════════════════════

  _showContradiction(c) {
    const suspectName = this.engine.getSuspects().find(s => s.id === c.suspectId).name;

    this.contradictionEl.innerHTML = `
      <div class="contradiction__accent"></div>
      <div class="contradiction__body">
        <div class="contradiction__title">¡CONTRADICCIÓN DETECTADA!</div>
        <div class="contradiction__subtitle">INCONSISTENCIA LÓGICA REGISTRADA — LIBRETA ACTUALIZADA</div>

        <div class="contradiction__comparison">
          <div class="contradiction__side">
            <div class="contradiction__side-label">DECLARACIÓN DE ${this._esc(suspectName).toUpperCase()}</div>
            <div class="contradiction__side-text">${this._esc(c.statement)}</div>
          </div>
          <div class="contradiction__vs">
            <div class="contradiction__vs-line"></div>
            <div class="contradiction__vs-icon">VS</div>
            <div class="contradiction__vs-line"></div>
          </div>
          <div class="contradiction__side">
            <div class="contradiction__side-label">PRUEBA</div>
            <div class="contradiction__side-text">${this._esc(c.proof)}</div>
          </div>
        </div>

        <div class="contradiction__bottom">
          <div class="contradiction__suspicion">
            <div class="contradiction__suspicion-value">+${c.suspicionBonus}%</div>
            <div>
              <div class="contradiction__suspicion-label">NIVEL DE SOSPECHA</div>
              <div class="contradiction__suspicion-sub">Credibilidad reducida</div>
            </div>
          </div>
          <div class="contradiction__dismiss">
            <div class="contradiction__dismiss-hint">Pulsa para continuar</div>
            <button class="btn" style="width:140px;height:34px;font-size:10px;" data-action="dismiss-contradiction">CONTINUAR</button>
          </div>
        </div>
      </div>
      <div class="contradiction__accent"></div>
    `;

    this.contradictionEl.classList.add('active');

    const dismiss = () => {
      this.contradictionEl.classList.remove('active');
      this._renderPortrait();
      this._updateNotebookBadge();
    };

    this.contradictionEl.querySelector('[data-action="dismiss-contradiction"]')
      .addEventListener('click', dismiss);


  }

  // ═══════════════════════════════════════════════════
  // NOTEBOOK PANEL
  // ═══════════════════════════════════════════════════

  _renderNotebookPanel() {
    this.notebookEl.innerHTML = `
      <div class="notebook__header">
        <div class="notebook__header-title">LIBRETA DEL DETECTIVE</div>
        <button class="notebook__close" data-action="close-notebook">✕</button>
      </div>
      <div class="notebook__body" id="notebook-body">
        <div class="notebook__empty">Sin anotaciones todavía. Interroga a los sospechosos para generar notas automáticamente.</div>
      </div>
    `;

    this.notebookEl.querySelector('[data-action="close-notebook"]')
      .addEventListener('click', () => this._toggleNotebook());
  }

  _toggleNotebook() {
    const isOpen = this.notebookEl.classList.contains('open');
    if (isOpen) {
      this.notebookEl.classList.remove('open');
    } else {
      this._refreshNotebookContent();
      this.notebookEl.classList.add('open');
    }
  }

  _refreshNotebookContent() {
    const body = this.notebookEl.querySelector('#notebook-body');
    const notes = this.engine.getNotebook();

    if (notes.length === 0) {
      body.innerHTML = '<div class="notebook__empty">Sin anotaciones todavía.</div>';
      return;
    }

    const briefing = notes.find(n => n.type === 'briefing');
    const rest = notes.filter(n => n.type !== 'briefing').slice().reverse();
    const ordered = briefing ? [briefing, ...rest] : rest;

    body.innerHTML = ordered.map(n => {
      const isContradiction = n.type === 'contradiction';
      const isBriefing = n.type === 'briefing';
      const typeLabel = { question: 'PREGUNTA', evidence: 'PRUEBA PRESENTADA', contradiction: '⚠ CONTRADICCIÓN', briefing: '📋 EXPEDIENTE' }[n.type];
      const typeCls = `note-entry__type--${n.type}`;
      return `
        <div class="note-entry ${isContradiction ? 'note-entry--contradiction' : ''} ${isBriefing ? 'note-entry--briefing' : ''}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <span class="note-entry__type ${typeCls}">${typeLabel}</span>
            <span class="note-entry__time">${n.time}</span>
          </div>
          <div><span class="note-entry__suspect">${this._esc(n.suspectName)}:</span></div>
          <div class="note-entry__detail">${this._esc(n.detail1)}</div>
          ${n.detail2 ? `<div class="note-entry__detail" style="margin-top:4px;font-style:normal;color:#666;">→ ${this._esc(n.detail2)}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  _updateNotebookBadge() {
    const badge = this.root.querySelector('#notebook-badge');
    if (!badge) return;
    const count = this.engine.getNotebook().length;
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  }

  // ═══════════════════════════════════════════════════
  // GLOBAL EVENTS
  // ═══════════════════════════════════════════════════

  _bindGlobalEvents() {
    // Keyboard: Escape closes modals/notebook
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this._hideEvidenceModal();
        if (this.notebookEl.classList.contains('open')) {
          this.notebookEl.classList.remove('open');
        }
        if (this.contradictionEl.classList.contains('active')) {
          this.contradictionEl.classList.remove('active');
          this._renderPortrait();
          this._updateNotebookBadge();
        }
      }
    });

    // Modal: close on background click (bound once to avoid leaks)
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this._hideEvidenceModal();
    });

    // Contradiction: dismiss on background click (bound once)
    this.contradictionEl.addEventListener('click', (e) => {
      if (e.target === this.contradictionEl) {
        this.contradictionEl.classList.remove('active');
        this._renderPortrait();
        this._updateNotebookBadge();
      }
    });
  }

  // ═══════════════════════════════════════════════════
  // UTIL
  // ═══════════════════════════════════════════════════

  _esc(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

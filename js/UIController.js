/**
 * UIController — Toda la manipulación del DOM.
 * Genera las pantallas, gestiona eventos, actualiza visuales.
 */
var US = US || {};

US.UIController = class UIController {

  constructor(engine, root) {
    this.engine = engine;
    this.root = root;
    this.activeTab = 'vinculo';
    this.deskCardZIndex = 20;

    // Drag state for desk cards
    this._drag = null;

    // Build all static screen shells
    this._buildShell();
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

    const renderers = {
      menu:       () => this.renderMenu(),
      intro:      () => this.renderIntro(),
      game:       () => this.renderGame(),
      resolution: () => this.renderResolution(),
      result:     () => {}  // rendered by resolveCase
    };
    if (renderers[name]) renderers[name]();
  }

  // ═══════════════════════════════════════════════════
  // MAIN MENU
  // ═══════════════════════════════════════════════════

  renderMenu() {
    this.screens.menu.innerHTML = `
      <div class="menu">
        <div class="menu__bg"></div>
        <div class="menu__folder" style="top:30px;left:40px;width:160px;height:240px;transform:rotate(-12deg);opacity:.3;"></div>
        <div class="menu__folder" style="bottom:60px;left:25px;width:120px;height:180px;transform:rotate(7deg);opacity:.2;"></div>
        <div class="menu__folder" style="top:50px;right:45px;width:150px;height:220px;transform:rotate(10deg);opacity:.25;"></div>
        <div class="menu__folder" style="bottom:35px;right:30px;width:110px;height:160px;transform:rotate(-5deg);opacity:.2;"></div>

        <div class="menu__content">
          <div class="menu__logo">
            <div class="menu__logo-corner menu__logo-corner--tl"></div>
            <div class="menu__logo-corner menu__logo-corner--tr"></div>
            <div class="menu__logo-corner menu__logo-corner--bl"></div>
            <div class="menu__logo-corner menu__logo-corner--br"></div>
            <div class="menu__title">UNDER<br>SUSPICION</div>
            <div class="menu__divider"></div>
            <div class="menu__subtitle">POLICÍA DE LA CIUDAD</div>
          </div>

          <div class="menu__stamp">CONFIDENTIAL</div>

          <button class="btn btn--menu btn--primary" data-action="start-story">MODO HISTORIA</button>
          <button class="btn btn--menu btn--disabled">MODO SIN FIN</button>
          <button class="btn btn--menu btn--disabled">⚙ CONFIGURACIÓN</button>
          <button class="btn btn--menu btn--exit btn--disabled">SALIR</button>

          <div class="menu__credits">DEVELOPED BY AARON · DAVID · ROMAN</div>
        </div>
      </div>
    `;

    this.screens.menu.querySelector('[data-action="start-story"]')
      .addEventListener('click', () => {
        this.engine.loadCase('caso-01');
        this.showScreen('intro');
      });
  }

  // ═══════════════════════════════════════════════════
  // CASE INTRO
  // ═══════════════════════════════════════════════════

  renderIntro() {
    const c = this.engine.getCase();
    this.screens.intro.innerHTML = `
      <div class="intro">
        <div class="intro__card">
          <div class="intro__header">
            <div class="intro__case-number">${this._esc(c.subtitle)}</div>
            <div class="intro__case-title">${this._esc(c.title)}</div>
          </div>
          <div class="intro__body">
            <div class="intro__row">
              <span class="intro__label">VÍCTIMA</span>
              <span class="intro__value">${this._esc(c.victim.name)}, ${c.victim.age} años — ${this._esc(c.victim.occupation)}</span>
            </div>
            <div class="intro__row">
              <span class="intro__label">LUGAR</span>
              <span class="intro__value">${this._esc(c.scene.location)}</span>
            </div>
            <div class="intro__row">
              <span class="intro__label">FECHA</span>
              <span class="intro__value">${this._esc(c.scene.date)}</span>
            </div>
            <div class="intro__row">
              <span class="intro__label">HORA</span>
              <span class="intro__value">${this._esc(c.scene.timeOfDeath)}</span>
            </div>
            <div class="intro__divider"></div>
            <div class="intro__text">${this._esc(c.intro)}</div>
            <div class="intro__divider"></div>
            <div class="intro__row">
              <span class="intro__label">SOSPECHOSOS</span>
              <span class="intro__value">${c.suspects.map(s => this._esc(s.name) + ' — ' + this._esc(s.role)).join('<br>')}</span>
            </div>
            <div class="intro__divider"></div>
            <button class="btn btn--primary btn--menu intro__start" data-action="open-case">ABRIR EXPEDIENTE</button>
          </div>
        </div>
      </div>
    `;

    this.screens.intro.querySelector('[data-action="open-case"]')
      .addEventListener('click', () => this.showScreen('game'));
  }

  // ═══════════════════════════════════════════════════
  // GAME SCREEN (SPLIT VIEW)
  // ═══════════════════════════════════════════════════

  renderGame() {
    const suspects = this.engine.getSuspects();

    this.screens.game.innerHTML = `
      <nav class="game-nav">
        <div class="game-nav__title">UNDER SUSPICION</div>
        <div class="game-nav__suspects" id="nav-suspects"></div>
        <div class="game-nav__actions">
          <button class="btn btn--resolver" data-action="go-resolve">RESOLVER CASO</button>
        </div>
      </nav>
      <main class="game-split">
        <div class="desk" id="half-desk">
          <div class="desk__surface" id="desk-surface"></div>
          <div class="notebook-toggle" id="notebook-toggle">
            <span class="notebook-toggle__icon">📓</span>
            <span class="notebook-toggle__badge" id="notebook-badge">0</span>
          </div>
          <div class="desk__label">MESA DE PRUEBAS</div>
        </div>
        <div class="room" id="half-room">
          <div class="pressure" id="pressure-section"></div>
          <div class="portrait" id="portrait-section"></div>
          <div class="dialogue" id="dialogue-section">
            <div class="dialogue__header">RESPUESTA DEL SOSPECHOSO</div>
            <div class="dialogue__text" id="dialogue-text">Seleccione un sospechoso y comience el interrogatorio. Revise las pruebas en la mesa antes de preguntar.</div>
          </div>
          <div class="question-panel" id="question-panel"></div>
        </div>
      </main>
    `;

    // Bind nav
    this._renderSuspectSwitcher();
    this._renderDesk();
    this._renderRoom();
    this._renderNotebookPanel();

    this.screens.game.querySelector('[data-action="go-resolve"]')
      .addEventListener('click', () => this.showScreen('resolution'));

    this.root.querySelector('#notebook-toggle')
      .addEventListener('click', () => this._toggleNotebook());
  }

  // ── Suspect Switcher ──────────────────────────────

  _renderSuspectSwitcher() {
    const container = this.root.querySelector('#nav-suspects');
    const suspects = this.engine.getSuspects();
    const active = this.engine.getActiveSuspect();

    container.innerHTML = suspects.map((s, i) => {
      const initials = s.name.split(' ').map(w => w[0]).join('');
      const cls = s.id === active.id ? 'suspect-thumb active' : 'suspect-thumb';
      return `<div class="${cls}" data-idx="${i}" title="${this._esc(s.name)}">${this._esc(initials)}</div>`;
    }).join('');

    container.querySelectorAll('.suspect-thumb').forEach(el => {
      el.addEventListener('click', () => {
        this.engine.switchSuspect(parseInt(el.dataset.idx));
        this._renderSuspectSwitcher();
        this._renderRoom();
      });
    });
  }

  // ── Evidence Desk ─────────────────────────────────

  _renderDesk() {
    const surface = this.root.querySelector('#desk-surface');
    const evidence = this.engine.getEvidence();

    // Generate positions for cards spread across the desk
    const positions = this._generateDeskPositions(evidence.length);

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
          <div class="desk-card__click-hint">CLIC PARA VER · ARRASTRA PARA MOVER</div>
        </div>
      `;
    }).join('');

    // Bind drag and click for each card
    surface.querySelectorAll('.desk-card').forEach(card => {
      card.addEventListener('pointerdown', e => this._onCardPointerDown(e, card));
    });

    // Global pointer events for drag
    surface.addEventListener('pointermove', e => this._onCardPointerMove(e));
    surface.addEventListener('pointerup', e => this._onCardPointerUp(e));
    surface.addEventListener('pointercancel', e => this._onCardPointerUp(e));
  }

  _generateDeskPositions(count) {
    const cols = 4;
    const positions = [];
    for (let i = 0; i < count; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      positions.push({
        x: 30 + col * 155 + (Math.random() * 30 - 15),
        y: 70 + row * 160 + (Math.random() * 20 - 10),
        rot: (Math.random() * 8 - 4).toFixed(1)
      });
    }
    return positions;
  }

  _onCardPointerDown(e, card) {
    if (e.button !== 0) return;
    card.setPointerCapture(e.pointerId);
    this.deskCardZIndex++;
    card.style.zIndex = this.deskCardZIndex;
    card.classList.add('dragging');

    this._drag = {
      card: card,
      startX: e.clientX,
      startY: e.clientY,
      origLeft: parseInt(card.style.left) || 0,
      origTop: parseInt(card.style.top) || 0,
      moved: false
    };
  }

  _onCardPointerMove(e) {
    if (!this._drag) return;
    const dx = e.clientX - this._drag.startX;
    const dy = e.clientY - this._drag.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) this._drag.moved = true;
    this._drag.card.style.left = (this._drag.origLeft + dx) + 'px';
    this._drag.card.style.top = (this._drag.origTop + dy) + 'px';
  }

  _onCardPointerUp(e) {
    if (!this._drag) return;
    this._drag.card.classList.remove('dragging');
    if (!this._drag.moved) {
      const evId = this._drag.card.dataset.evidenceId;
      this._showEvidenceModal(evId);
    }
    this._drag = null;
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

    body.innerHTML = notes.slice().reverse().map(n => {
      const isContradiction = n.type === 'contradiction';
      const typeLabel = { question: 'PREGUNTA', evidence: 'PRUEBA PRESENTADA', contradiction: '⚠ CONTRADICCIÓN' }[n.type];
      const typeCls = `note-entry__type--${n.type}`;
      return `
        <div class="note-entry ${isContradiction ? 'note-entry--contradiction' : ''}">
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
  // RESOLUTION SCREEN
  // ═══════════════════════════════════════════════════

  renderResolution() {
    const c = this.engine.getCase();
    const suspects = this.engine.getSuspects();

    this.screens.resolution.innerHTML = `
      <div class="resolution">
        <button class="btn btn--back" data-action="back-to-game">← VOLVER</button>

        <div class="resolution__title">RESOLVER EL CASO</div>
        <div class="resolution__subtitle">SELECCIONA UNA OPCIÓN EN CADA CATEGORÍA · ACUSA CUANDO ESTÉS SEGURO</div>

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number" style="background:var(--red-dark);border-color:var(--red);">1</div>
            <div class="resolution__block-question">¿QUIÉN cometió el crimen?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-who">
              <option value="">Seleccionar sospechoso...</option>
              ${suspects.map(s => `<option value="${s.id}">${this._esc(s.name)} — ${this._esc(s.role)}</option>`).join('')}
            </select>
          </div>
        </div>

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number">2</div>
            <div class="resolution__block-question">¿CÓMO fue cometido?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-how">
              <option value="">Seleccionar método...</option>
              ${c.howOptions.map(o => `<option value="${o.id}">${this._esc(o.text)}</option>`).join('')}
            </select>
          </div>
        </div>

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number">3</div>
            <div class="resolution__block-question">¿POR QUÉ lo hizo?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-why">
              <option value="">Seleccionar motivo...</option>
              ${c.whyOptions.map(o => `<option value="${o.id}">${this._esc(o.text)}</option>`).join('')}
            </select>
          </div>
        </div>

        <button class="btn btn--cta" id="btn-accuse" data-action="accuse">ACUSAR</button>
      </div>
    `;

    this.screens.resolution.querySelector('[data-action="back-to-game"]')
      .addEventListener('click', () => this.showScreen('game'));

    this.screens.resolution.querySelector('[data-action="accuse"]')
      .addEventListener('click', () => this._handleAccuse());
  }

  _handleAccuse() {
    const who = this.root.querySelector('#res-who').value;
    const how = this.root.querySelector('#res-how').value;
    const why = this.root.querySelector('#res-why').value;

    if (!who || !how || !why) {
      var btn = this.root.querySelector('#btn-accuse');
      btn.textContent = '⚠ SELECCIONA LAS 3 OPCIONES';
      btn.style.borderColor = 'var(--red)';
      setTimeout(function() { btn.textContent = 'ACUSAR'; btn.style.borderColor = ''; }, 2000);
      return;
    }

    const result = this.engine.resolveCase(who, how, why);
    this._renderResult(result);
    this.showScreen('result');
  }

  // ═══════════════════════════════════════════════════
  // RESULT SCREEN
  // ═══════════════════════════════════════════════════

  _renderResult(result) {
    const verdictText = result.allCorrect ? '¡CASO RESUELTO!'
      : (result.correct.who ? 'CASO PARCIALMENTE RESUELTO' : 'CASO NO RESUELTO');
    const verdictCls = result.allCorrect ? 'correct'
      : (result.correct.who ? 'partial' : 'wrong');

    this.screens.result.innerHTML = `
      <div class="result">
        <div class="result__verdict result__verdict--${verdictCls}">${verdictText}</div>

        <div class="result__score">${result.score}</div>
        <div class="result__rating">RANGO ${result.rating} — ${result.ratingLabel}</div>

        <div class="result__breakdown">
          <div class="result__row">
            <span class="result__row-label">¿Quién?</span>
            <span class="result__row-value ${result.correct.who ? 'correct' : 'wrong'}">${result.correct.who ? '✓ CORRECTO' : '✕ INCORRECTO'}</span>
          </div>
          <div class="result__row">
            <span class="result__row-label">¿Cómo?</span>
            <span class="result__row-value ${result.correct.how ? 'correct' : 'wrong'}">${result.correct.how ? '✓ CORRECTO' : '✕ INCORRECTO'}</span>
          </div>
          <div class="result__row">
            <span class="result__row-label">¿Por qué?</span>
            <span class="result__row-value ${result.correct.why ? 'correct' : 'wrong'}">${result.correct.why ? '✓ CORRECTO' : '✕ INCORRECTO'}</span>
          </div>
          <div style="border-top:1px solid #2e2e2e;margin-top:4px;padding-top:8px;" class="result__row">
            <span class="result__row-label">Contradicciones encontradas</span>
            <span class="result__row-value" style="color:#aaa;">${result.contradictionsFound} / ${result.totalContradictions}</span>
          </div>
        </div>

        <div class="result__explanation">
          <div class="result__explanation-label">LO QUE REALMENTE OCURRIÓ</div>
          ${this._esc(result.explanation)}
        </div>

        <button class="btn btn--primary btn--menu" style="max-width:320px;" data-action="back-to-menu">VOLVER AL MENÚ</button>
      </div>
    `;

    this.screens.result.querySelector('[data-action="back-to-menu"]')
      .addEventListener('click', () => this.showScreen('menu'));
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

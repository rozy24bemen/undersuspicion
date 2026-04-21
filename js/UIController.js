/**
 * UIController — Coordinador principal de UI.
 * Gestiona navegación de pantallas, portrait, diálogo y acciones de interrogatorio.
 * Delega renderizado a Screen classes y componentes especializados.
 */
var US = US || {};

US.UIController = class UIController {

  constructor(engine, root) {
    this.engine = engine;
    this.root = root;
    this._lastResult = null;
    this._portraitVariant = this._readPortraitVariant();
    this._suspectMood = 'neutral';
    this._moodTimer = null;

    this._buildShell();

    this._screens = {
      menu:       new US.MenuScreen(this),
      intro:      new US.IntroScreen(this),
      game:       new US.GameScreen(this),
      resolution: new US.ResolutionScreen(this),
      result:     new US.ResultScreen(this)
    };

    this.desk      = new US.DeskManager(this);
    this.modals    = new US.ModalManager(this);
    this.notebook  = new US.NotebookPanel(this);
    this.questions = new US.QuestionPanel(this);

    this._bindGlobalEvents();
  }

  // ═══════════════════════════════════════════════════
  // SHELL
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
  // PORTRAIT VARIANT
  // ═══════════════════════════════════════════════════

  _readPortraitVariant() {
    try {
      const stored = window.localStorage.getItem('us-portrait-variant');
      return stored === 'background' ? 'background' : 'cutout';
    } catch (_) {
      return 'cutout';
    }
  }

  _persistPortraitVariant() {
    try {
      window.localStorage.setItem('us-portrait-variant', this._portraitVariant);
    } catch (_) {}
  }

  _togglePortraitVariant() {
    const suspect = this.engine.getActiveSuspect();
    if (!this._hasPortraitVariants(suspect)) return;

    this._portraitVariant = this._portraitVariant === 'background' ? 'cutout' : 'background';
    this._persistPortraitVariant();
    this._updatePortraitVariantToggle();
    this._renderPortrait();
  }

  _hasPortraitVariants(suspect) {
    if (!suspect || !suspect.portraits) return false;
    return Object.values(suspect.portraits).some(portrait => (
      portrait && typeof portrait === 'object' && portrait.background && portrait.cutout
    ));
  }

  _updatePortraitVariantToggle() {
    const button = this.root.querySelector('#portrait-variant-toggle');
    if (!button) return;

    const suspect = this.engine.getActiveSuspect();
    const canToggle = this._hasPortraitVariants(suspect);

    button.textContent = canToggle
      ? `RETRATO: ${this._portraitVariant === 'background' ? 'FONDO' : 'RECORTE'}`
      : 'RETRATO: UNICO';
    button.classList.toggle('btn--disabled', !canToggle);
    button.disabled = !canToggle;
    button.setAttribute('aria-disabled', String(!canToggle));
    button.title = canToggle
      ? 'Alternar variante visual del retrato'
      : 'Este sospechoso solo tiene una variante de retrato';
  }

  _resolvePortraitAsset(suspect, mood) {
    const portraits = suspect && suspect.portraits ? suspect.portraits : {};
    const portrait = portraits[mood];

    if (!portrait) {
      return { src: '', fallbackSrc: '', variant: 'default' };
    }

    if (typeof portrait === 'string') {
      return { src: portrait, fallbackSrc: '', variant: 'default' };
    }

    const fallbackSrc = portrait.fallback || portrait.default || '';
    const preferredSrc = portrait[this._portraitVariant]
      || portrait.cutout
      || portrait.background
      || portrait.default
      || fallbackSrc;
    const resolvedVariant = portrait.background && portrait.cutout
      ? this._portraitVariant
      : portrait.cutout
        ? 'cutout'
        : portrait.background
          ? 'background'
          : 'default';

    return {
      src: preferredSrc,
      fallbackSrc: fallbackSrc && fallbackSrc !== preferredSrc ? fallbackSrc : '',
      variant: resolvedVariant
    };
  }

  // ═══════════════════════════════════════════════════
  // ROOM — Portrait & Pressure
  // ═══════════════════════════════════════════════════

  _renderRoom() {
    this._suspectMood = 'neutral';
    if (this._moodTimer) { clearTimeout(this._moodTimer); this._moodTimer = null; }
    const scene = this.root.querySelector('#portrait-section');
    scene.classList.add('scene-interrogatorio2');
    this._renderPressureBar();
    this._renderPortrait();
    this._updatePortraitVariantToggle();
    this.questions.render();
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
    const scene = this.root.querySelector('#portrait-section');
    const info = this.root.querySelector('#portrait-info');
    const mood = this._suspectMood;
    const portraitAsset = this._resolvePortraitAsset(suspect, mood);

    scene.innerHTML = portraitAsset.src
      ? `<img class="portrait__img portrait__img--${mood} portrait__img--asset-${this._esc(portraitAsset.variant)}" src="${this._esc(portraitAsset.src)}" data-fallback-src="${this._esc(portraitAsset.fallbackSrc)}" alt="${this._esc(suspect.name)}">`
      : `<div class="portrait__fallback"><div class="portrait__figure-head"></div><div class="portrait__figure-body"></div></div>`;

    const portraitImg = scene.querySelector('.portrait__img');
    if (portraitImg && portraitAsset.fallbackSrc) {
      portraitImg.addEventListener('error', () => {
        portraitImg.src = portraitAsset.fallbackSrc;
        portraitImg.classList.remove('portrait__img--asset-background', 'portrait__img--asset-cutout');
        portraitImg.classList.add('portrait__img--asset-fallback');
      }, { once: true });
    }

    info.innerHTML = `
      <div class="portrait__name">${this._esc(suspect.name)}</div>
      <div class="portrait__role">${this._esc(suspect.role)}</div>
      <div class="portrait__suspicion ${susCls}">SOSPECHA: ${state.suspicion}%</div>
    `;
  }

  // ═══════════════════════════════════════════════════
  // ACTION HANDLERS
  // ═══════════════════════════════════════════════════

  _handleAskQuestion(questionId) {
    const result = this.engine.askQuestion(questionId);
    if (result.blocked) {
      if (result.reason === 'maxPressure') {
        this._setSuspectMood('nervous', 0);
        this._setDialogue('El sospechoso se niega a responder más preguntas. "No tengo nada más que decir. Quiero un abogado."');
      }
      return;
    }

    this._setSuspectMood('talking', 4000);
    this._setDialogue(result.response);
    this._renderPressureBar();
    this.questions.render();
    this.notebook.updateBadge();

    if (result.contradiction) {
      this._setSuspectMood('nervous', 0);
      setTimeout(() => this.modals.showContradiction(result.contradiction), 600);
    }
  }

  _handlePresentEvidence(evidenceId) {
    const result = this.engine.presentEvidence(evidenceId);
    if (result.blocked) {
      if (result.reason === 'maxPressure') {
        this._setSuspectMood('nervous', 0);
        this._setDialogue('El sospechoso se niega a recibir más preguntas. "No tengo nada más que decir."');
      } else if (result.reason === 'alreadyPresented') {
        this._setDialogue('Ya has presentado esta prueba a este sospechoso.');
      }
      return;
    }

    this._setSuspectMood('talking', 4000);
    this._setDialogue(result.response);
    this._renderPressureBar();
    this._renderPortrait();
    this.questions.render();
    this.notebook.updateBadge();

    if (result.contradiction) {
      this._setSuspectMood('nervous', 0);
      setTimeout(() => this.modals.showContradiction(result.contradiction), 600);
    }
  }

  _setDialogue(text) {
    const el = this.root.querySelector('#dialogue-text');
    el.textContent = text;
    el.classList.remove('animate');
    void el.offsetWidth;
    el.classList.add('animate');
  }

  _setSuspectMood(mood, duration) {
    this._suspectMood = mood;
    this._renderPortrait();
    if (this._moodTimer) clearTimeout(this._moodTimer);
    if (duration) {
      this._moodTimer = setTimeout(() => {
        this._suspectMood = 'neutral';
        this._renderPortrait();
        this._moodTimer = null;
      }, duration);
    }
  }

  // ═══════════════════════════════════════════════════
  // GLOBAL EVENTS
  // ═══════════════════════════════════════════════════

  _bindGlobalEvents() {
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        this.modals.hideEvidence();
        if (this.notebookEl.classList.contains('open')) {
          this.notebookEl.classList.remove('open');
        }
        if (this.contradictionEl.classList.contains('active')) {
          this.modals.dismissContradiction();
        }
      }
    });

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.modals.hideEvidence();
    });

    this.contradictionEl.addEventListener('click', (e) => {
      if (e.target === this.contradictionEl) this.modals.dismissContradiction();
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

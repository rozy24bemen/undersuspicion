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
    this._suspectMood = 'neutral';
    this._moodTimer = null;
    // Última línea de diálogo mostrada por sospechoso (id → texto). Permite
    // que al cambiar de personaje se restaure su última intervención en lugar
    // de quedarse con la del anterior.
    this._lastDialogueBySuspect = {};

    this._buildShell();

    this._screens = {
      menu:       new US.MenuScreen(this),
      intro:      new US.IntroScreen(this),
      game:       new US.GameScreen(this),
      resolution: new US.ResolutionScreen(this),
      dinner:     new US.DinnerScreen(this)
    };

    this.desk      = new US.DeskManager(this);
    this.modals    = new US.ModalManager(this);
    this.notebook  = new US.NotebookPanel(this);
    this.phone     = new US.PhoneTool(this);
    this.questions = new US.QuestionPanel(this);
    this.tutorial  = US.TutorialOverlay ? new US.TutorialOverlay(this) : null;

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
      <section id="screen-dinner" class="screen"></section>
      <div class="modal-overlay" id="modal-evidence"></div>
      <div class="contradiction-overlay" id="overlay-contradiction"></div>
      <div class="notebook-panel" id="panel-notebook"></div>
    `;

    this.screens = {
      menu:       this.root.querySelector('#screen-menu'),
      intro:      this.root.querySelector('#screen-intro'),
      game:       this.root.querySelector('#screen-game'),
      resolution: this.root.querySelector('#screen-resolution'),
      dinner:     this.root.querySelector('#screen-dinner')
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
  // ROOM — Portrait & Pressure
  // ═══════════════════════════════════════════════════

  _renderRoom() {
    this._suspectMood = 'neutral';
    if (this._moodTimer) { clearTimeout(this._moodTimer); this._moodTimer = null; }
    const scene = this.root.querySelector('#portrait-section');
    this._applySceneClass(scene);
    this._renderPressureBar();
    this._renderPortrait();
    this._restoreDialogueForActiveSuspect();
    this.questions.render();
  }

  _restoreDialogueForActiveSuspect() {
    const suspect = this.engine.getActiveSuspect();
    if (!suspect) return;
    const last = this._lastDialogueBySuspect[suspect.id];
    if (last) {
      this._setDialogue(last);
    } else {
      // Sin interacciones todavía con este sospechoso: línea neutra.
      this._setDialogue('Aún no has hablado con ' + suspect.name + '. Selecciona una pregunta o presenta una prueba.');
    }
  }

  _applySceneClass(scene) {
    // Limpia cualquier clase scene-* previa para evitar acumulación entre casos.
    Array.from(scene.classList)
      .filter(c => c.indexOf('scene-') === 0)
      .forEach(c => scene.classList.remove(c));

    // Permite override por sospechoso (suspect.sceneCssClass) — útil cuando un
    // caso usa varios escenarios. Si no, usa el del caso.
    const suspect  = this.engine.getActiveSuspect();
    const caseData = this.engine.getCase();
    const cls = (suspect && suspect.sceneCssClass)
      || (caseData && caseData.scene && caseData.scene.cssClass)
      || 'scene-interrogatorio2';
    scene.classList.add(cls);
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
    const src = (suspect && suspect.portraits && suspect.portraits[mood]) || '';

    scene.innerHTML = src
      ? `<img class="portrait__img portrait__img--${mood}" src="${this._esc(src)}" alt="${this._esc(suspect.name)}">`
      : `<div class="portrait__fallback"><div class="portrait__figure-head"></div><div class="portrait__figure-body"></div></div>`;

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
    if (this.tutorial && !this.tutorial.isAllowed('ask-question', questionId)) return;

    const suspect = this.engine.getActiveSuspect();
    const result = this.engine.askQuestion(questionId);
    if (result.blocked) {
      if (result.reason === 'maxPressure') {
        const blockMsg = 'El sospechoso se niega a responder más preguntas. "No tengo nada más que decir. Quiero un abogado."';
        this._setSuspectMood('nervous', 0);
        this._setDialogue(blockMsg);
        if (suspect) this._lastDialogueBySuspect[suspect.id] = blockMsg;
      }
      return;
    }

    this._setSuspectMood('talking', 4000);
    this._setDialogue(result.response);
    if (suspect) this._lastDialogueBySuspect[suspect.id] = result.response;
    this._renderPressureBar();
    this.questions.render();
    this.notebook.updateBadge();

    if (this.tutorial) this.tutorial.notify('question-asked', { questionId: questionId });

    if (result.contradiction) {
      this._setSuspectMood('nervous', 0);
      setTimeout(() => this.modals.showContradiction(result.contradiction), 600);
      if (this.tutorial) this.tutorial.notify('contradiction-detected', result.contradiction);
    }
  }

  _handlePresentEvidence(evidenceId) {
    if (this.tutorial && !this.tutorial.isAllowed('present-evidence', evidenceId)) return;

    const suspect = this.engine.getActiveSuspect();
    const result = this.engine.presentEvidence(evidenceId);
    if (result.blocked) {
      if (result.reason === 'maxPressure') {
        const blockMsg = 'El sospechoso se niega a recibir más preguntas. "No tengo nada más que decir."';
        this._setSuspectMood('nervous', 0);
        this._setDialogue(blockMsg);
        if (suspect) this._lastDialogueBySuspect[suspect.id] = blockMsg;
      } else if (result.reason === 'alreadyPresented') {
        this._setDialogue('Ya has presentado esta prueba a este sospechoso.');
      } else if (result.reason === 'notFound') {
        // El sospechoso no tiene una respuesta específica para esta prueba.
        // Mostramos una respuesta neutra de "no le concierne" para que el
        // click no quede sin feedback. Si esto ocurre con frecuencia es
        // señal de que faltan entradas en evidenceResponses del caso.
        this._setDialogue('"No sé qué decirle de eso. No me concierne."');
      }
      return;
    }

    this._setSuspectMood('talking', 4000);
    this._setDialogue(result.response);
    if (suspect) this._lastDialogueBySuspect[suspect.id] = result.response;
    this._renderPressureBar();
    this._renderPortrait();
    this.questions.render();
    this.notebook.updateBadge();

    if (this.tutorial) this.tutorial.notify('evidence-presented', { evidenceId: evidenceId });

    if (result.contradiction) {
      this._setSuspectMood('nervous', 0);
      setTimeout(() => this.modals.showContradiction(result.contradiction), 600);
      if (this.tutorial) this.tutorial.notify('contradiction-detected', result.contradiction);
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
    // Cuando cambia de caso, limpia la caché de diálogos por sospechoso para
    // que las respuestas del caso anterior no se muestren en el nuevo.
    this.engine.on('caseLoaded', () => {
      this._lastDialogueBySuspect = {};
    });

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

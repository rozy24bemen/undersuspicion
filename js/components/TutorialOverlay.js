/**
 * TutorialOverlay — Tutorial guiado y forzado para el primer caso.
 *
 * Funciona como un asistente paso a paso que bloquea cualquier interacción fuera
 * del elemento resaltado en cada momento, hasta que el jugador realiza la acción
 * esperada. Cubre las mecánicas básicas del juego usando el Caso 01 como escenario:
 *   1. Seleccionar al sospechoso correcto (Hugo)
 *   2. Abrir la pestaña de COARTADA y hacer la pregunta clave
 *   3. Examinar una prueba en la mesa (Cámara de Seguridad)
 *   4. Presentarla al sospechoso desde la pestaña PRUEBA
 *   5. Detectar la primera contradicción
 *
 * Al terminar marca el flag persistente `us-tutorial-completed` en localStorage
 * (clave dedicada, fuera de MetaStore para no perderse al iniciar una nueva
 * partida). En siguientes partidas el tutorial no se vuelve a mostrar.
 */
var US = US || {};

US.TutorialOverlay = class TutorialOverlay {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
    this.root = uiController.root;
    this.active = false;
    this.currentStep = 0;
    this.steps = this._buildSteps();
    this._reposHandler = null;
    this._observer = null;
    this._build();
  }

  // ── Public API ───────────────────────────────────────

  /**
   * Devuelve true si el jugador ya ha completado el tutorial alguna vez.
   * Persistencia: localStorage dedicado, NO se resetea con MetaStore.reset()
   * (que se llama al iniciar cada Modo Historia).
   */
  static isCompleted() {
    try {
      return window.localStorage.getItem('us-tutorial-completed') === 'true';
    } catch (_) {
      return false;
    }
  }

  static markCompleted() {
    try {
      window.localStorage.setItem('us-tutorial-completed', 'true');
    } catch (_) {}
  }

  start() {
    if (this.active) return;
    if (US.TutorialOverlay.isCompleted()) return;
    this.active = true;
    this.currentStep = 0;
    this.el.classList.add('active');
    this._showStep(0);
    this._reposHandler = () => this._reposition();
    window.addEventListener('resize', this._reposHandler);
    window.addEventListener('scroll', this._reposHandler, true);
    if (US.Telemetry) US.Telemetry.log('tutorial-start', {});
  }

  end(markCompleted) {
    if (!this.active) return;
    this.active = false;
    this.el.classList.remove('active');
    if (this._reposHandler) {
      window.removeEventListener('resize', this._reposHandler);
      window.removeEventListener('scroll', this._reposHandler, true);
      this._reposHandler = null;
    }
    if (markCompleted) {
      US.TutorialOverlay.markCompleted();
    }
    if (US.Telemetry) {
      US.Telemetry.log('tutorial-end', { completed: !!markCompleted });
    }
  }

  /**
   * Recibe eventos del juego para avanzar pasos cuando coincida con el evento esperado.
   * Tipos: 'suspect-changed' | 'question-asked' | 'evidence-modal-opened'
   *      | 'evidence-modal-closed' | 'evidence-presented' | 'contradiction-detected'
   *      | 'contradiction-modal-closed' | 'tab-changed'
   *
   * Auto-pausa: cuando se detecta una contradicción, ocultamos la UI del tutorial
   * para que el jugador pueda leer/cerrar la modal de contradicción sin que las
   * máscaras la tapen. Se reanuda al cerrarse esa modal.
   */
  notify(eventType, data) {
    if (!this.active) return;

    if (eventType === 'contradiction-detected') {
      this.el.classList.add('tutorial-overlay--paused');
    } else if (eventType === 'contradiction-modal-closed') {
      this.el.classList.remove('tutorial-overlay--paused');
      requestAnimationFrame(() => this._reposition());
    }

    const step = this.steps[this.currentStep];
    if (!step || !step.advanceOn) return;
    if (step.advanceOn.event !== eventType) return;
    if (step.advanceOn.match && !step.advanceOn.match(data)) return;
    this._advance();
  }

  isActive() { return this.active; }

  /**
   * Permite a la UI saber si una acción está permitida bajo el tutorial.
   * Se usa para bloquear preventivamente clicks que no son los esperados.
   */
  isAllowed(actionType, payload) {
    if (!this.active) return true;
    const step = this.steps[this.currentStep];
    if (!step || !step.allow) return true;
    return step.allow(actionType, payload);
  }

  // ── Construcción del DOM ────────────────────────────

  _build() {
    const el = document.createElement('div');
    el.className = 'tutorial-overlay';
    el.innerHTML = `
      <div class="tutorial-mask tutorial-mask--top"></div>
      <div class="tutorial-mask tutorial-mask--bottom"></div>
      <div class="tutorial-mask tutorial-mask--left"></div>
      <div class="tutorial-mask tutorial-mask--right"></div>
      <div class="tutorial-spotlight"></div>
      <div class="tutorial-tooltip">
        <div class="tutorial-tooltip__step"></div>
        <div class="tutorial-tooltip__title"></div>
        <div class="tutorial-tooltip__text"></div>
        <div class="tutorial-tooltip__actions">
          <button class="tutorial-tooltip__btn tutorial-tooltip__btn--next" data-action="tutorial-next">CONTINUAR</button>
        </div>
      </div>
    `;
    document.body.appendChild(el);
    this.el = el;
    this.maskTop    = el.querySelector('.tutorial-mask--top');
    this.maskBottom = el.querySelector('.tutorial-mask--bottom');
    this.maskLeft   = el.querySelector('.tutorial-mask--left');
    this.maskRight  = el.querySelector('.tutorial-mask--right');
    this.spotlight  = el.querySelector('.tutorial-spotlight');
    this.tooltip    = el.querySelector('.tutorial-tooltip');
    this.tooltipStep  = el.querySelector('.tutorial-tooltip__step');
    this.tooltipTitle = el.querySelector('.tutorial-tooltip__title');
    this.tooltipText  = el.querySelector('.tutorial-tooltip__text');
    this.btnNext      = el.querySelector('[data-action="tutorial-next"]');

    this.btnNext.addEventListener('click', () => this._advance());
  }

  // ── Definición de pasos ─────────────────────────────

  _buildSteps() {
    return [
      // ───────── Paso 0: bienvenida ─────────
      {
        id: 'welcome',
        target: null,
        title: 'BIENVENIDO, INSPECTOR',
        text: 'Te guiaremos por las mecánicas básicas de la investigación. Sigue cada paso para aprender a interrogar sospechosos, examinar pruebas y descubrir contradicciones. Pulsa CONTINUAR cuando estés listo.',
        showButton: true
      },

      // ───────── Paso 1: seleccionar a Hugo ─────────
      {
        id: 'select-hugo',
        target: () => this._findSuspectThumb('hugo'),
        title: 'ELIGE UN SOSPECHOSO',
        text: 'Estos son los tres sospechosos de tu caso. En la barra superior aparecen sus iniciales. Para empezar, haz clic en HUGO DELMAR (HD), el chef del restaurante.',
        showButton: false,
        allow: (action, payload) => action === 'switch-suspect' && payload === 'hugo',
        advanceOn: {
          event: 'suspect-changed',
          match: (data) => data && data.id === 'hugo'
        }
      },

      // ───────── Paso 2: abrir pestaña COARTADA ─────────
      {
        id: 'open-coartada',
        target: () => this.root.querySelector('.q-tab[data-tab="coartada"]'),
        title: 'PESTAÑA COARTADA',
        text: 'Cada sospechoso tiene preguntas en tres categorías: VÍNCULO, COARTADA y PRUEBA. Empezaremos por su coartada. Pulsa la pestaña COARTADA.',
        showButton: false,
        allow: (action, payload) => action === 'switch-tab' && payload === 'coartada',
        advanceOn: {
          event: 'tab-changed',
          match: (data) => data === 'coartada'
        }
      },

      // ───────── Paso 3: hacer la pregunta clave ─────────
      {
        id: 'ask-coartada',
        target: () => this._findQuestionItem('hugo-c1'),
        title: 'INTERROGA AL SOSPECHOSO',
        text: 'Pregúntale dónde estaba en el momento del asesinato. Cada pregunta sube el NIVEL DE PRESIÓN del sospechoso (al 100% deja de hablar). Haz clic en la primera pregunta de la lista.',
        showButton: false,
        allow: (action, payload) => action === 'ask-question' && payload === 'hugo-c1',
        advanceOn: {
          event: 'question-asked',
          match: (data) => data && data.questionId === 'hugo-c1'
        }
      },

      // ───────── Paso 4: leer la respuesta ─────────
      {
        id: 'read-dialogue',
        target: () => this.root.querySelector('#dialogue-section'),
        title: 'LEE SU RESPUESTA',
        text: 'Hugo afirma que estuvo toda la noche en la cocina y que no pudo moverse de allí. Memoriza esta declaración: necesitarás compararla con las pruebas. Pulsa CONTINUAR.',
        showButton: true
      },

      // ───────── Paso 5: examinar la prueba en la mesa ─────────
      {
        id: 'inspect-camara',
        target: () => this._findDeskCard('camara'),
        title: 'EXAMINA UNA PRUEBA',
        text: 'En la MESA DE PRUEBAS de la izquierda están todas las evidencias del caso. Haz clic en la tarjeta "Cámara de Seguridad" para verla en detalle.',
        showButton: false,
        allow: (action, payload) => action === 'open-evidence' && payload === 'camara',
        advanceOn: {
          event: 'evidence-modal-opened',
          match: (data) => data === 'camara'
        }
      },

      // ───────── Paso 6: leer detalle y cerrar modal ─────────
      {
        id: 'read-evidence',
        target: () => this.root.querySelector('#modal-evidence .modal-card'),
        title: 'CONTRASTA LA PRUEBA',
        text: 'La cámara de seguridad muestra a Hugo en el pasillo del despacho a las 22:15h. ¡Pero él dijo que no salió de la cocina! Cierra la prueba pulsando la X o ESC.',
        showButton: false,
        advanceOn: {
          event: 'evidence-modal-closed'
        }
      },

      // ───────── Paso 7: ir a la pestaña PRUEBA ─────────
      {
        id: 'open-prueba-tab',
        target: () => this.root.querySelector('.q-tab[data-tab="prueba"]'),
        title: 'PESTAÑA PRUEBA',
        text: 'Para confrontar al sospechoso con una evidencia, abre la pestaña PRUEBA. Pulsa sobre ella ahora.',
        showButton: false,
        allow: (action, payload) => action === 'switch-tab' && payload === 'prueba',
        advanceOn: {
          event: 'tab-changed',
          match: (data) => data === 'prueba'
        }
      },

      // ───────── Paso 8: presentar la prueba ─────────
      {
        id: 'present-camara',
        target: () => this._findEvidenceThumb('camara'),
        title: 'PRESENTA LA PRUEBA',
        text: 'Selecciona la "Cámara de Seguridad" de la cuadrícula para presentársela a Hugo. Si la prueba contradice algo que ha dicho, descubrirás una CONTRADICCIÓN.',
        showButton: false,
        allow: (action, payload) => action === 'present-evidence' && payload === 'camara',
        advanceOn: {
          event: 'contradiction-detected',
          match: (data) => data && data.id === 'c1'
        }
      },

      // ───────── Paso 9: cierre + felicitación ─────────
      // Sin advanceOn: el jugador termina pulsando TERMINAR.
      // Se muestra automáticamente cuando se cierra la modal de contradicción
      // (que es cuando se quita la pausa del overlay).
      {
        id: 'finish',
        target: null,
        title: '¡PRIMERA CONTRADICCIÓN DETECTADA!',
        text: 'Has descubierto tu primera inconsistencia. Las contradicciones aumentan la SOSPECHA del culpable y se guardan en el CUADERNO (icono 📓 en la mesa). Ahora ya conoces lo básico: interroga al resto de sospechosos, examina todas las pruebas y, cuando creas saber quién, cómo y por qué, pulsa RESOLVER CASO. ¡Suerte, inspector!',
        showButton: true
      }
    ];
  }

  // ── Lógica de pasos ─────────────────────────────────

  _showStep(index) {
    const step = this.steps[index];
    if (!step) return this._finish();

    this.tooltipStep.textContent = `Paso ${index + 1} de ${this.steps.length}`;
    this.tooltipTitle.textContent = step.title;
    this.tooltipText.textContent = step.text;
    this.btnNext.style.display = step.showButton ? '' : 'none';

    // Si el paso final muestra botón Y tiene advanceOn por contradicción
    // cerrada, lo dejamos visible como "TERMINAR".
    if (index === this.steps.length - 1 && step.showButton) {
      this.btnNext.textContent = 'TERMINAR';
    } else {
      this.btnNext.textContent = 'CONTINUAR';
    }

    if (US.Telemetry) {
      US.Telemetry.log('tutorial-step', { stepId: step.id, index: index });
    }

    // Esperamos un frame para que el DOM destino esté disponible
    requestAnimationFrame(() => this._reposition());
  }

  _advance() {
    if (this.currentStep >= this.steps.length - 1) {
      this._finish();
      return;
    }
    this.currentStep++;
    this._showStep(this.currentStep);
  }

  _finish() {
    this.end(true);
  }

  // ── Posicionado de spotlight + tooltip ──────────────

  _reposition() {
    const step = this.steps[this.currentStep];
    if (!step) return;
    const target = step.target ? step.target() : null;

    if (!target) {
      // Sin target: tooltip centrado, spotlight oculto
      this._maskFull();
      this.spotlight.style.display = 'none';
      this._centerTooltip();
      return;
    }

    const rect = target.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      this._maskFull();
      this.spotlight.style.display = 'none';
      this._centerTooltip();
      return;
    }

    const pad = 8;
    const x = rect.left - pad;
    const y = rect.top - pad;
    const w = rect.width + pad * 2;
    const h = rect.height + pad * 2;

    // Spotlight visible
    this.spotlight.style.display = 'block';
    this.spotlight.style.left   = x + 'px';
    this.spotlight.style.top    = y + 'px';
    this.spotlight.style.width  = w + 'px';
    this.spotlight.style.height = h + 'px';

    // Máscaras de bloqueo (4 rectángulos alrededor del spotlight)
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    this.maskTop.style.cssText    = `left:0;top:0;width:${vw}px;height:${Math.max(0,y)}px;`;
    this.maskBottom.style.cssText = `left:0;top:${y+h}px;width:${vw}px;height:${Math.max(0,vh-(y+h))}px;`;
    this.maskLeft.style.cssText   = `left:0;top:${y}px;width:${Math.max(0,x)}px;height:${h}px;`;
    this.maskRight.style.cssText  = `left:${x+w}px;top:${y}px;width:${Math.max(0,vw-(x+w))}px;height:${h}px;`;

    this._positionTooltipNear(x, y, w, h);
  }

  _maskFull() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    this.maskTop.style.cssText    = `left:0;top:0;width:${vw}px;height:${vh}px;`;
    this.maskBottom.style.cssText = `display:none;`;
    this.maskLeft.style.cssText   = `display:none;`;
    this.maskRight.style.cssText  = `display:none;`;
  }

  _centerTooltip() {
    const tt = this.tooltip;
    tt.style.left = '50%';
    tt.style.top  = '50%';
    tt.style.transform = 'translate(-50%, -50%)';
  }

  _positionTooltipNear(x, y, w, h) {
    const tt = this.tooltip;
    tt.style.transform = '';
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const ttW = Math.min(360, vw - 32);
    tt.style.maxWidth = ttW + 'px';

    // Medimos altura tras layout
    const ttH = tt.offsetHeight || 200;
    const margin = 16;

    // Intentar abajo, luego arriba, luego derecha, luego izquierda, luego centrado
    let left, top;
    if (y + h + ttH + margin < vh) {
      top  = y + h + margin;
      left = Math.min(Math.max(8, x + w / 2 - ttW / 2), vw - ttW - 8);
    } else if (y - ttH - margin > 0) {
      top  = y - ttH - margin;
      left = Math.min(Math.max(8, x + w / 2 - ttW / 2), vw - ttW - 8);
    } else if (x + w + ttW + margin < vw) {
      left = x + w + margin;
      top  = Math.min(Math.max(8, y + h / 2 - ttH / 2), vh - ttH - 8);
    } else if (x - ttW - margin > 0) {
      left = x - ttW - margin;
      top  = Math.min(Math.max(8, y + h / 2 - ttH / 2), vh - ttH - 8);
    } else {
      this._centerTooltip();
      return;
    }
    tt.style.left = left + 'px';
    tt.style.top  = top + 'px';
  }

  // ── Helpers para encontrar targets ──────────────────

  _findSuspectThumb(suspectId) {
    const suspects = this.engine.getSuspects();
    const idx = suspects.findIndex(s => s.id === suspectId);
    if (idx < 0) return null;
    return this.root.querySelector(`.suspect-thumb[data-idx="${idx}"]`);
  }

  _findQuestionItem(questionId) {
    return this.root.querySelector(`.q-item[data-question-id="${questionId}"]`);
  }

  _findDeskCard(evidenceId) {
    return this.root.querySelector(`.desk-card[data-evidence-id="${evidenceId}"]`);
  }

  _findEvidenceThumb(evidenceId) {
    return this.root.querySelector(`.ev-thumb[data-evidence-id="${evidenceId}"]`);
  }
};

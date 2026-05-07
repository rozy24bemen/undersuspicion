/**
 * GameScreen — Pantalla principal del juego (split: desk + room).
 */
var US = US || {};

US.GameScreen = class GameScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
  }

  render(container) {
    const caseData = this.engine.getCase();
    // El teléfono se desbloquea automáticamente cuando el caso tiene
    // phoneNumbers definidos. Mientras no los tenga, el botón aparece
    // bloqueado para comunicar al jugador que es una herramienta futura.
    const phoneAvailable = !!(caseData && Array.isArray(caseData.phoneNumbers) && caseData.phoneNumbers.length > 0);
    const phoneTitle = phoneAvailable
      ? 'Teléfono de mesa'
      : 'Función bloqueada · Disponible en futuros casos';

    container.innerHTML = `
      <nav class="game-nav">
        <button class="btn btn--nav-back" data-action="go-menu">← MENÚ</button>
        <div class="game-nav__title">UNDER SUSPICION</div>
        <div class="game-nav__suspects" id="nav-suspects"></div>
        <div class="game-nav__actions">
          <button class="btn btn--save" data-action="quick-save" title="Guardar partida en la ranura activa">💾 GUARDAR</button>
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
          <div class="phone-toggle ${phoneAvailable ? '' : 'phone-toggle--locked'}" id="phone-toggle" title="${this.ui._esc(phoneTitle)}">
            <span class="phone-toggle__icon">☎️</span>
            <span class="phone-toggle__badge" id="phone-badge">0</span>
          </div>
          <div class="desk__label">MESA DE PRUEBAS</div>
        </div>
        <div class="room" id="half-room">
          <div class="room__scene" id="portrait-section"></div>
          <div class="room__hud">
            <div class="room__hud-top">
              <div class="pressure" id="pressure-section"></div>
              <div class="portrait__info" id="portrait-info"></div>
            </div>
            <div class="room__hud-bottom">
              <div class="dialogue" id="dialogue-section">
                <div class="dialogue__header">RESPUESTA DEL SOSPECHOSO</div>
                <div class="dialogue__text" id="dialogue-text">Seleccione un sospechoso y comience el interrogatorio. Revise las pruebas en la mesa antes de preguntar.</div>
              </div>
              <div class="question-panel" id="question-panel"></div>
            </div>
          </div>
        </div>
      </main>
    `;

    this._renderSuspectSwitcher();
    this.ui.desk.render();
    this.ui._renderRoom();
    this.ui.notebook.render();

    container.querySelector('[data-action="go-resolve"]')
      .addEventListener('click', () => this.ui.showScreen('resolution'));

    const saveBtn = container.querySelector('[data-action="quick-save"]');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => this._handleQuickSave(saveBtn));
    }

    container.querySelector('[data-action="go-menu"]')
      .addEventListener('click', () => {
        if (this.ui.tutorial && this.ui.tutorial.isActive()) return;
        if (confirm('¿Abandonar el caso? Si no has guardado, perderás el progreso actual.')) {
          this.ui.showScreen('menu');
        }
      });

    this.ui.root.querySelector('#notebook-toggle')
      .addEventListener('click', () => this.ui.notebook.toggle());

    this.ui.root.querySelector('#phone-toggle')
      .addEventListener('click', (e) => {
        const el = e.currentTarget;
        if (el.classList.contains('phone-toggle--locked')) {
          this._shakeLocked(el);
          return;
        }
        this.ui.phone.toggle();
      });

    // Pregunta al jugador si quiere hacer el tutorial si es la primera partida (caso-01)
    // y aún no ha respondido en esta sesión.
    if (this.ui.tutorial &&
        caseData && caseData.id === 'caso-01' &&
        !US._tutorialPromptShownThisSession) {
      setTimeout(() => this._showTutorialPrompt(), 80);
    }

    // Mini-tutorial del teléfono al entrar al caso-03 por primera vez.
    // Persistencia propia (no se resetea con MetaStore).
    if (caseData && caseData.id === 'caso-03' &&
        !US.GameScreen.isPhoneIntroSeen() &&
        !US._phoneIntroShownThisSession) {
      setTimeout(() => this._showPhoneIntroModal(), 200);
    }
  }

  static isPhoneIntroSeen() {
    try {
      return window.localStorage.getItem('us-phone-intro-seen') === 'true';
    } catch (_) {
      return false;
    }
  }

  static markPhoneIntroSeen() {
    try {
      window.localStorage.setItem('us-phone-intro-seen', 'true');
    } catch (_) {}
  }

  _shakeLocked(el) {
    el.classList.remove('tool-locked-shake');
    void el.offsetWidth; // fuerza reflow para reiniciar la animación
    el.classList.add('tool-locked-shake');
  }

  _handleQuickSave(btn) {
    if (!US.SaveManager) {
      window.alert('Sistema de guardado no disponible.');
      return;
    }
    if (!US.SaveManager.getActiveSlot()) {
      window.alert('No hay ranura activa. Esta partida fue iniciada en modo DEV.');
      return;
    }

    const ok = US.SaveManager.quickSave(this.engine);
    if (!ok) {
      window.alert('No se pudo guardar la partida.');
      return;
    }

    if (US.Telemetry) {
      const caseData = this.engine.getCase();
      US.Telemetry.log('quick-save', {
        caseId: caseData ? caseData.id : null,
        slot:   US.SaveManager.getActiveSlot()
      });
    }

    // Feedback visual breve sin bloquear el juego
    const original = btn.textContent;
    btn.textContent = '✓ GUARDADO';
    btn.classList.add('btn--save-ok');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('btn--save-ok');
    }, 1400);
  }

  _showTutorialPrompt() {
    // Marcar que ya hemos mostrado la pregunta esta sesión
    US._tutorialPromptShownThisSession = true;
    
    const modal = document.createElement('div');
    modal.className = 'tutorial-prompt-modal';
    modal.innerHTML = `
      <div class="tutorial-prompt__container">
        <div class="tutorial-prompt__content">
          <h2>¿NECESITAS AYUDA?</h2>
          <p>¿Te gustaría ver un tutorial de cómo jugar?</p>
          <div class="tutorial-prompt__buttons">
            <button class="btn btn--primary" data-action="start-tutorial">SÍ, ENSEÑA ME</button>
            <button class="btn btn--secondary" data-action="skip-tutorial">NO, QUIERO JUGAR</button>
          </div>
        </div>
      </div>
    `;
    
    this.ui.root.appendChild(modal);
    
    modal.querySelector('[data-action="start-tutorial"]')
      .addEventListener('click', () => {
        modal.remove();
        // Resetear la flag de completado para permitir que el tutorial se inicie
        US.TutorialOverlay.resetCompletedFlag();
        setTimeout(() => this.ui.tutorial.start(), 80);
      });
    
    modal.querySelector('[data-action="skip-tutorial"]')
      .addEventListener('click', () => {
        modal.remove();
      });
  }

  _showPhoneIntroModal() {
    US._phoneIntroShownThisSession = true;

    const modal = document.createElement('div');
    modal.className = 'tutorial-prompt-modal';
    modal.innerHTML = `
      <div class="tutorial-prompt__container">
        <div class="tutorial-prompt__content">
          <h2>NUEVA HERRAMIENTA · TELÉFONO ☎️</h2>
          <p>En tu mesa hay un <strong>teléfono de escritorio</strong>. Cuando descubras un número de teléfono entre las pruebas o los testimonios, podrás marcarlo aquí para escuchar lo que esa línea revele.</p>
          <p>En este caso encontrarás un <strong>número incompleto</strong>. Tendrás que reunir los fragmentos a través de las pruebas y los interrogatorios. Cuando logres marcarlo entero, descubrirás algo decisivo para la investigación.</p>
          <p style="font-size:11px;color:var(--gold-dim);margin-top:-10px;">El botón ☎️ está en la esquina superior izquierda de la mesa de pruebas.</p>
          <div class="tutorial-prompt__buttons">
            <button class="btn btn--primary" data-action="phone-intro-ok">ENTENDIDO</button>
          </div>
        </div>
      </div>
    `;

    this.ui.root.appendChild(modal);

    modal.querySelector('[data-action="phone-intro-ok"]')
      .addEventListener('click', () => {
        modal.remove();
        US.GameScreen.markPhoneIntroSeen();
        // Parpadeo guiado del botón del teléfono para fijarlo en la atención del jugador.
        const phoneToggle = this.ui.root.querySelector('#phone-toggle');
        if (phoneToggle && !phoneToggle.classList.contains('phone-toggle--locked')) {
          phoneToggle.classList.add('phone-toggle--highlight');
          setTimeout(() => phoneToggle.classList.remove('phone-toggle--highlight'), 5000);
        }
      });
  }

  _renderSuspectSwitcher() {
    const container = this.ui.root.querySelector('#nav-suspects');
    const suspects = this.engine.getSuspects();
    const active = this.engine.getActiveSuspect();

    container.innerHTML = suspects.map((s, i) => {
      const initials = s.name.split(' ').map(w => w[0]).join('');
      const cls = s.id === active.id ? 'suspect-thumb active' : 'suspect-thumb';
      return `<div class="${cls}" data-idx="${i}" title="${this.ui._esc(s.name)}">${this.ui._esc(initials)}</div>`;
    }).join('');

    container.querySelectorAll('.suspect-thumb').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.idx);
        const target = this.engine.getSuspects()[idx];
        if (this.ui.tutorial && !this.ui.tutorial.isAllowed('switch-suspect', target ? target.id : null)) return;
        this.engine.switchSuspect(idx);
        this._renderSuspectSwitcher();
        this.ui._renderRoom();
        if (this.ui.tutorial) this.ui.tutorial.notify('suspect-changed', target);
      });
    });
  }
};

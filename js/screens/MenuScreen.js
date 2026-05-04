/**
 * MenuScreen — Pantalla del menú principal.
 *
 * Modo historia es lineal: cada partida sigue el orden definido en
 * US.PROGRESS_ORDER. Si hay una run en curso, el botón principal ofrece
 * "CONTINUAR" en lugar de "MODO HISTORIA"; si la run está terminada, ofrece
 * "NUEVA PARTIDA". El selector DEV de casos solo se muestra con ?dev=1 en
 * la URL para no romper la experiencia del jugador final.
 */
var US = US || {};

US.MenuScreen = class MenuScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
  }

  render(container) {
    const params = new URLSearchParams(window.location.search);
    const devMode = params.get('dev') === '1';
    const urlCase = params.get('case');

    // Estado del Modo Historia
    const allDone = US.Progress && US.Progress.isAllCompleted();
    const inRun   = US.Progress && US.Progress.hasInProgressRun();
    const next    = US.Progress ? US.Progress.getNext() : 'caso-01';
    const nextNum = next ? this._caseNumber(next) : null;

    let primaryLabel, primaryAction;
    if (allDone) {
      primaryLabel  = 'NUEVA PARTIDA';
      primaryAction = 'new-run';
    } else if (inRun) {
      primaryLabel  = nextNum ? `CONTINUAR · CASO ${nextNum}` : 'CONTINUAR';
      primaryAction = 'continue-run';
    } else {
      primaryLabel  = 'MODO HISTORIA';
      primaryAction = 'new-run';
    }

    container.innerHTML = `
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

          <button class="btn btn--menu btn--primary" data-action="${primaryAction}">${this.ui._esc(primaryLabel)}</button>
          ${inRun ? `<button class="btn btn--menu" data-action="reset-run">REINICIAR PARTIDA</button>` : ''}
          ${devMode ? `<button class="btn btn--menu" data-action="dev-cases">⚙ DEV · ELEGIR CASO</button>` : ''}
          <button class="btn btn--menu btn--disabled">MODO SIN FIN</button>
          <button class="btn btn--menu btn--exit" data-action="exit-game">SALIR</button>

          <div class="menu__credits">DEVELOPED BY AARON · DAVID · ROMAN</div>
        </div>

        <button data-action="export-telemetry"
                title="Exportar datos de partida en JSON (para playtest)"
                style="position:absolute;bottom:10px;right:10px;padding:6px 10px;background:rgba(0,0,0,0.55);color:#aaa;border:1px solid #444;font-family:'Courier New',monospace;font-size:10px;letter-spacing:1px;cursor:pointer;z-index:50;">
          ↓ EXPORTAR PARTIDA
        </button>
      </div>
    `;

    // ── Botón primario: arrancar / continuar / nueva partida ─────
    const primaryBtn = container.querySelector('[data-action="' + primaryAction + '"]');
    if (primaryBtn) {
      primaryBtn.addEventListener('click', () => {
        if (primaryAction === 'continue-run') {
          this._continueRun();
        } else {
          this._startNewRun();
        }
      });
    }

    const resetBtn = container.querySelector('[data-action="reset-run"]');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (window.confirm('¿Reiniciar la partida? Se perderá el progreso de los casos jugados.')) {
          this._startNewRun();
        }
      });
    }

    // ── DEV: solo aparece con ?dev=1 ────────────────────────────
    const devBtn = container.querySelector('[data-action="dev-cases"]');
    if (devBtn) {
      devBtn.addEventListener('click', () => this._openDevCasePicker());
    }

    // ── Salir ──────────────────────────────────────────────────
    const exitBtn = container.querySelector('[data-action="exit-game"]');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => {
        if (window.confirm('¿Seguro que quieres salir del juego?')) {
          window.close();
        }
      });
    }

    // ── Auto-arranque por URL (?case=caso-02) ──────────────────
    // Útil para iteración. Marca tutorial completado y arranca el caso pedido
    // sin tocar el progreso del Modo Historia.
    if (urlCase && US.CASES && US.CASES[urlCase]) {
      setTimeout(() => this._launchCaseFromDev(urlCase), 0);
    }

    // ── Telemetría ─────────────────────────────────────────────
    const exportBtn = container.querySelector('[data-action="export-telemetry"]');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        if (!US.Telemetry) {
          window.alert('Telemetría no disponible.');
          return;
        }
        const count = US.Telemetry.count();
        if (count === 0) {
          window.alert('Aún no hay datos de partida que exportar.');
          return;
        }
        US.Telemetry.download();
      });
    }
  }

  // ── Modo historia: arranque y continuación ──────────────────

  _startNewRun() {
    if (US.MetaStore) US.MetaStore.reset();
    if (US.Progress)  US.Progress.reset();
    if (US.Telemetry) {
      US.Telemetry.newSession();
      US.Telemetry.log('run-start', { caseId: 'caso-01' });
    }
    this.engine.loadCase('caso-01');
    this.ui.showScreen('intro');
  }

  _continueRun() {
    const next = US.Progress ? US.Progress.getNext() : 'caso-01';
    if (!next) {
      // Run terminada: arranca una nueva.
      this._startNewRun();
      return;
    }
    if (US.Telemetry) {
      US.Telemetry.log('run-continue', { caseId: next });
    }
    this.engine.loadCase(next);
    this.ui.showScreen('intro');
  }

  _caseNumber(caseId) {
    const m = /(\d+)/.exec(caseId || '');
    return m ? parseInt(m[1], 10) : null;
  }

  // ── DEV · selector de caso (solo con ?dev=1) ────────────────
  _openDevCasePicker() {
    const ids = Object.keys(US.CASES || {});
    if (ids.length === 0) {
      window.alert('No hay casos cargados.');
      return;
    }

    const list = ids.map(id => `${id} — ${US.CASES[id].title}`).join('\n');

    const choice = window.prompt(
      'DEV · Elegir caso\n\nCasos disponibles:\n' + list + '\n\nEscribe el id (ej: caso-02):',
      ids[ids.length - 1]
    );
    if (!choice) return;
    if (!US.CASES[choice]) {
      window.alert('Caso no encontrado: ' + choice);
      return;
    }
    this._launchCaseFromDev(choice);
  }

  _launchCaseFromDev(caseId) {
    if (US.MetaStore) US.MetaStore.reset();
    if (US.Telemetry) {
      US.Telemetry.newSession();
      US.Telemetry.log('run-start', { caseId: caseId, dev: true });
    }
    if (US.TutorialOverlay && typeof US.TutorialOverlay.markCompleted === 'function') {
      US.TutorialOverlay.markCompleted();
    }
    this.engine.loadCase(caseId);
    this.ui.showScreen('intro');
  }
};

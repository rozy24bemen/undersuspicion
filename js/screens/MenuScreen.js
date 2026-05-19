/**
 * MenuScreen — Pantalla del menú principal.
 *
 * Sistema de partidas con 3 slots:
 *   - NUEVA PARTIDA → abre el panel de slots para elegir dónde crearla
 *   - CARGAR PARTIDA → abre el panel de slots, solo se puede elegir un slot
 *     ocupado. Si el slot tiene runtime, restaura el caso a media partida; si
 *     no, arranca la intro del próximo caso pendiente.
 *
 * El selector DEV de casos se muestra con ?dev=1 en la URL.
 */
var US = US || {};

US.MenuScreen = class MenuScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
  }

  render(container) {
    const params  = new URLSearchParams(window.location.search);
    const devMode = params.get('dev') === '1';
    const urlCase = params.get('case');

    const hasAnySlot = US.SaveManager
      ? US.SaveManager.listSlots().some(s => s.data)
      : false;

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

          <button class="btn btn--menu btn--primary" data-action="new-game">NUEVA PARTIDA</button>
          <button class="btn btn--menu ${hasAnySlot ? '' : 'btn--disabled'}" data-action="load-game" ${hasAnySlot ? '' : 'disabled'}>CARGAR PARTIDA</button>
          ${devMode ? `<button class="btn btn--menu" data-action="dev-cases">⚙ DEV · ELEGIR CASO</button>` : ''}
          <button class="btn btn--menu btn--disabled">MODO SIN FIN</button>
          <button class="btn btn--menu" data-action="audio-settings">AJUSTES DE AUDIO</button>
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

    container.querySelector('[data-action="new-game"]')
      .addEventListener('click', () => this._openSlotPanel('new'));

    const loadBtn = container.querySelector('[data-action="load-game"]');
    if (loadBtn && hasAnySlot) {
      loadBtn.addEventListener('click', () => this._openSlotPanel('load'));
    }

    const devBtn = container.querySelector('[data-action="dev-cases"]');
    if (devBtn) {
      devBtn.addEventListener('click', () => this._openDevCasePicker());
    }

    const exitBtn = container.querySelector('[data-action="exit-game"]');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => {
        if (window.confirm('¿Seguro que quieres salir del juego?')) {
          window.close();
        }
      });
    }

    const audioBtn = container.querySelector('[data-action="audio-settings"]');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        // Buscar el AudioControls montado en body por app.js. Si existe,
        // abrir su modal; si no (test/headless), no-op.
        const modal = document.getElementById('audio-settings');
        if (modal && US.audio) {
          modal.querySelector('[data-audio-music]').value = Math.round(US.audio.getMusicVolume() * 100);
          modal.querySelector('[data-audio-sfx]').value   = Math.round(US.audio.getSfxVolume() * 100);
          modal.querySelector('[data-audio-mute]').checked = US.audio.isMuted();
          modal.classList.add('open');
        }
      });
    }

    if (urlCase && US.CASES && US.CASES[urlCase]) {
      setTimeout(() => this._launchCaseFromDev(urlCase), 0);
    }

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

  // ── Panel de slots ─────────────────────────────────

  _openSlotPanel(mode) {
    if (!US.SaveManager) {
      window.alert('Sistema de guardado no disponible.');
      return;
    }

    // Eliminar panel previo si existe
    const existing = document.getElementById('save-slots-overlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'save-slots-overlay';
    overlay.className = 'save-slots-overlay';

    const titleText = mode === 'load' ? 'CARGAR PARTIDA' : 'NUEVA PARTIDA';
    const helpText  = mode === 'load'
      ? 'Selecciona la partida que quieres continuar.'
      : 'Elige una ranura. Las ranuras ocupadas se sobreescribirán.';

    overlay.innerHTML = `
      <div class="save-slots__modal">
        <div class="save-slots__header">
          <span class="save-slots__title">${titleText}</span>
          <button class="save-slots__close" data-action="close-slots">✕</button>
        </div>
        <div class="save-slots__help">${helpText}</div>
        <div class="save-slots__list" id="save-slots-list"></div>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener('click', e => {
      if (e.target === overlay) overlay.remove();
    });
    overlay.querySelector('[data-action="close-slots"]')
      .addEventListener('click', () => overlay.remove());

    this._renderSlotList(overlay, mode);
  }

  _renderSlotList(overlay, mode) {
    const list = overlay.querySelector('#save-slots-list');
    const slots = US.SaveManager.listSlots();
    const active = US.SaveManager.getActiveSlot();

    list.innerHTML = slots.map(({ slot, data }) => {
      const occupied = !!data;
      const desc     = occupied ? US.SaveManager.describeSlot(data) : null;
      const isActive = active === slot;

      let body;
      if (occupied) {
        const midTag = desc.midCase ? '<span class="save-slot__tag">EN CURSO</span>' : '';
        body = `
          <div class="save-slot__name">${this.ui._esc(desc.name)} ${midTag}</div>
          <div class="save-slot__meta">
            <span>Casos completados: ${desc.completedCount}</span>
            <span>·</span>
            <span>Última actividad: ${this.ui._esc(desc.updatedAt)}</span>
          </div>
        `;
      } else {
        body = `
          <div class="save-slot__name save-slot__name--empty">— Ranura vacía —</div>
          <div class="save-slot__meta"><span>Sin partida guardada</span></div>
        `;
      }

      // Acciones disponibles en cada modo
      let actions = '';
      if (mode === 'load') {
        if (occupied) {
          actions = `
            <button class="save-slot__btn save-slot__btn--primary" data-action="load" data-slot="${slot}">CARGAR</button>
            <button class="save-slot__btn save-slot__btn--ghost"   data-action="delete" data-slot="${slot}">BORRAR</button>
          `;
        } else {
          actions = `<span class="save-slot__btn save-slot__btn--disabled">VACÍA</span>`;
        }
      } else {
        // mode === 'new'
        if (occupied) {
          actions = `
            <button class="save-slot__btn save-slot__btn--warn"  data-action="overwrite" data-slot="${slot}">SOBREESCRIBIR</button>
            <button class="save-slot__btn save-slot__btn--ghost" data-action="delete"    data-slot="${slot}">BORRAR</button>
          `;
        } else {
          actions = `<button class="save-slot__btn save-slot__btn--primary" data-action="new" data-slot="${slot}">EMPEZAR AQUÍ</button>`;
        }
      }

      return `
        <div class="save-slot ${isActive ? 'save-slot--active' : ''} ${occupied ? '' : 'save-slot--empty'}">
          <div class="save-slot__index">RANURA ${slot}${isActive ? ' · ACTIVA' : ''}</div>
          <div class="save-slot__body">${body}</div>
          <div class="save-slot__actions">${actions}</div>
        </div>
      `;
    }).join('');

    list.querySelectorAll('[data-action]').forEach(btn => {
      const action = btn.dataset.action;
      const n      = parseInt(btn.dataset.slot, 10);
      btn.addEventListener('click', () => this._handleSlotAction(action, n, overlay, mode));
    });
  }

  _handleSlotAction(action, n, overlay, mode) {
    switch (action) {
      case 'new': {
        US.SaveManager.newGameInSlot(n);
        overlay.remove();
        this._startCase('caso-01', { newRun: true });
        break;
      }
      case 'overwrite': {
        if (!window.confirm('¿Sobreescribir la ranura ' + n + '? La partida guardada se perderá.')) return;
        US.SaveManager.newGameInSlot(n);
        overlay.remove();
        this._startCase('caso-01', { newRun: true });
        break;
      }
      case 'load': {
        const runtime = US.SaveManager.loadSlot(n);
        overlay.remove();
        if (runtime && runtime.caseId) {
          // Mid-case: rehidratar engine y saltar a game directamente
          const ok = this.engine.restore(runtime);
          if (ok) {
            if (US.TutorialOverlay && typeof US.TutorialOverlay.markCompleted === 'function') {
              US.TutorialOverlay.markCompleted();
            }
            if (US.Telemetry) {
              US.Telemetry.newSession();
              US.Telemetry.log('run-resume', { caseId: runtime.caseId, slot: n, midCase: true });
            }
            this.ui.showScreen('game');
            return;
          }
          // Si la restauración falla (caso desaparecido, schema viejo) caemos
          // al flujo "entre casos" como fallback.
          window.alert('No se pudo restaurar el caso en curso. Continuando desde el próximo caso pendiente.');
        }
        // Entre casos: arrancar la intro del próximo pendiente
        const next = US.Progress ? US.Progress.getNext() : 'caso-01';
        if (next) {
          this._startCase(next, { newRun: false, slot: n });
        } else {
          window.alert('Esta partida ya completó el Acto. Inicia una nueva.');
          this.ui.showScreen('menu');
        }
        break;
      }
      case 'delete': {
        if (!window.confirm('¿Borrar la partida de la ranura ' + n + '? Esta acción no se puede deshacer.')) return;
        US.SaveManager.deleteSlot(n);
        // Re-render del propio panel
        this._renderSlotList(overlay, mode);
        // Si justo borramos el slot activo y estamos en modo load, podríamos
        // quedarnos sin slots: re-render arregla el estado visual.
        break;
      }
    }
  }

  _startCase(caseId, opts) {
    opts = opts || {};
    US._tutorialPromptShownThisSession = false;
    if (US.Telemetry) {
      US.Telemetry.newSession();
      US.Telemetry.log(opts.newRun ? 'run-start' : 'run-continue', {
        caseId: caseId,
        slot:   US.SaveManager ? US.SaveManager.getActiveSlot() : null
      });
    }
    this.engine.loadCase(caseId);
    this.ui.showScreen('intro');
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
    // Modo DEV: no toca SaveManager. Resetea solo lo que necesita la sesión
    // para no contaminar partidas guardadas.
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

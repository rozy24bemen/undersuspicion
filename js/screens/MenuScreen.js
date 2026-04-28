/**
 * MenuScreen — Pantalla del menú principal.
 */
var US = US || {};

US.MenuScreen = class MenuScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
  }

  render(container) {
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

          <button class="btn btn--menu btn--primary" data-action="start-story">MODO HISTORIA</button>
          <button class="btn btn--menu btn--disabled">MODO SIN FIN</button>
          <button class="btn btn--menu btn--disabled">⚙ CONFIGURACIÓN</button>
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

    container.querySelector('[data-action="start-story"]')
      .addEventListener('click', () => {
        // MODO HISTORIA = partida nueva. Resetea metaarco (ejes y flags) y
        // marca un nuevo sessionId de telemetría para distinguir runs en el export.
        // Cuando exista más de un caso, esto pasará a un menú "Nueva / Continuar".
        if (US.MetaStore)  US.MetaStore.reset();
        if (US.Telemetry) {
          US.Telemetry.newSession();
          US.Telemetry.log('run-start', { caseId: 'caso-01' });
        }
        this.engine.loadCase('caso-01');
        this.ui.showScreen('intro');
      });

    // Botón SALIR: cerrar la pestaña o ventana
    const exitBtn = container.querySelector('[data-action="exit-game"]');
    if (exitBtn) {
      exitBtn.addEventListener('click', () => {
        // Intenta cerrar la ventana. Si no es posible, muestra un mensaje.
        if (window.confirm('¿Seguro que quieres salir del juego?')) {
          window.close();
        }
      });
    }

    // Botón exportar telemetría (para playtesters)
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
};

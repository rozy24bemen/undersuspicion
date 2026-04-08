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
          <button class="btn btn--menu btn--exit btn--disabled">SALIR</button>

          <div class="menu__credits">DEVELOPED BY AARON · DAVID · ROMAN</div>
        </div>
      </div>
    `;

    container.querySelector('[data-action="start-story"]')
      .addEventListener('click', () => {
        this.engine.loadCase('caso-01');
        this.ui.showScreen('intro');
      });
  }
};

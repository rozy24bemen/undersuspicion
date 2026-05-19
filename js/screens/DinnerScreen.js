/**
 * DinnerScreen — Cena con la mujer tras resolver un caso.
 * Reutiliza el layout split de GameScreen (izquierda mesa, derecha interlocutora).
 */
var US = US || {};

US.DinnerScreen = class DinnerScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
  }

  render(container) {
    const esposa = (US.CENAS_GLOBAL && US.CENAS_GLOBAL.esposa) || { nombre: 'Ella' };
    const result = this.ui._lastResult;

    const portraits = esposa.portraits || {};
    const initialSrc = portraits.neutral || '';

    container.innerHTML = `
      <nav class="game-nav dinner-nav">
        <div class="game-nav__title">UNDER SUSPICION · CENA EN CASA</div>
        <div class="dinner-nav__who">CON ${this.ui._esc((esposa.nombre || '').toUpperCase())}</div>
      </nav>
      <main class="game-split dinner-split">
        <div class="dinner-table" id="dinner-table">
          <div class="dinner-item dinner-table__candle" data-dinner-item="candle"></div>
          <div class="dinner-item dinner-table__plate" data-dinner-item="plate">
            <div class="dinner-table__food"></div>
          </div>
          <div class="dinner-item dinner-table__glass" data-dinner-item="glass"></div>
          <div class="dinner-item dinner-table__fork" data-dinner-item="fork"></div>
          <div class="dinner-item dinner-table__knife" data-dinner-item="knife"></div>
          <div class="dinner-table__label">MESA DE CASA</div>
        </div>
        <div class="dinner-room">
          <div class="dinner-room__scene">
            <div class="dinner-figure" id="dinner-figure" data-pose="neutral">
              ${initialSrc
                ? `<img id="dinner-elena" src="${this.ui._esc(initialSrc)}" alt="${this.ui._esc(esposa.nombre)}">`
                : `<div class="dinner-figure__silhouette"></div>`}
            </div>
          </div>
          <div class="dinner-room__hud">
            <div class="dinner-room__info">
              <div class="dinner-room__name">${this.ui._esc(esposa.nombre)}</div>
              <div class="dinner-room__role">EN CASA · DESPUÉS DEL TURNO</div>
            </div>
            <div class="dinner-panel" id="dinner-panel"></div>
          </div>
        </div>
      </main>
      <section class="dinner-ending" id="dinner-ending" hidden></section>
    `;

    const audioFab = document.getElementById('audio-fab');
    const dinnerNav = container.querySelector('.game-nav');
    if (audioFab && dinnerNav) {
      const titleEl = dinnerNav.querySelector('.game-nav__title');
      const insertionPoint = titleEl && titleEl.nextElementSibling;
      if (titleEl && insertionPoint) {
        dinnerNav.insertBefore(audioFab, insertionPoint);
      } else if (titleEl) {
        dinnerNav.appendChild(audioFab);
      } else {
        dinnerNav.prepend(audioFab);
      }
    }

    if (!this.ui.dinner) this.ui.dinner = new US.DinnerPanel(this.ui);
    this.ui.dinner.start(result);

    if (!this.ui.dinnerTable) this.ui.dinnerTable = new US.DinnerTable(this.ui);
    this.ui.dinnerTable.init();
  }
};

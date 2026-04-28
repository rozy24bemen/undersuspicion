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
    container.innerHTML = `
      <nav class="game-nav">
        <button class="btn btn--nav-back" data-action="go-menu">← MENÚ</button>
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

    container.querySelector('[data-action="go-menu"]')
      .addEventListener('click', () => {
        if (confirm('¿Abandonar el caso? Se perderá el progreso actual.')) {
          this.ui.showScreen('menu');
        }
      });

    this.ui.root.querySelector('#notebook-toggle')
      .addEventListener('click', () => this.ui.notebook.toggle());
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
        this.engine.switchSuspect(parseInt(el.dataset.idx));
        this._renderSuspectSwitcher();
        this.ui._renderRoom();
      });
    });
  }
};

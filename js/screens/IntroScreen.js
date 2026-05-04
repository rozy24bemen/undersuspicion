/**
 * IntroScreen — Pantalla de introducción del caso.
 */
var US = US || {};

US.IntroScreen = class IntroScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
  }

  render(container) {
    const c = this.engine.getCase();
    container.innerHTML = `
      <div class="intro">
        <div class="intro__card">
          <div class="intro__header">
            <div class="intro__case-number">${this.ui._esc(c.subtitle)}</div>
            <div class="intro__case-title">${this.ui._esc(c.title)}</div>
          </div>
          <div class="intro__body">
            <div class="intro__victim-row">
              ${c.victim.portrait
                ? `<div class="intro__victim-portrait">
                     <img src="${this.ui._esc(c.victim.portrait)}" alt="${this.ui._esc(c.victim.name)}" />
                     <div class="intro__victim-caption">FICHA · VÍCTIMA</div>
                   </div>`
                : ''}
              <div class="intro__victim-info">
                <div class="intro__row">
                  <span class="intro__label">VÍCTIMA</span>
                  <span class="intro__value">${this.ui._esc(c.victim.name)}, ${c.victim.age} años — ${this.ui._esc(c.victim.occupation)}</span>
                </div>
                <div class="intro__row">
                  <span class="intro__label">LUGAR</span>
                  <span class="intro__value">${this.ui._esc(c.scene.location)}</span>
                </div>
                <div class="intro__row">
                  <span class="intro__label">FECHA</span>
                  <span class="intro__value">${this.ui._esc(c.scene.date)}</span>
                </div>
                <div class="intro__row">
                  <span class="intro__label">HORA</span>
                  <span class="intro__value">${this.ui._esc(c.scene.timeOfDeath)}</span>
                </div>
              </div>
            </div>
            <div class="intro__divider"></div>
            <div class="intro__text">${this.ui._esc(c.intro)}</div>
            <div class="intro__divider"></div>
            <div class="intro__row">
              <span class="intro__label">SOSPECHOSOS</span>
              <span class="intro__value">${c.suspects.map(s => this.ui._esc(s.name) + ' — ' + this.ui._esc(s.role)).join('<br>')}</span>
            </div>
            <div class="intro__divider"></div>
            <button class="btn btn--primary btn--menu intro__start" data-action="open-case">ABRIR EXPEDIENTE</button>
          </div>
        </div>
      </div>
    `;

    container.querySelector('[data-action="open-case"]')
      .addEventListener('click', () => this.ui.showScreen('game'));
  }
};

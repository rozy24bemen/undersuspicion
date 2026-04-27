/**
 * ResolutionScreen — Pantalla para resolver el caso (acusar).
 */
var US = US || {};

US.ResolutionScreen = class ResolutionScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
  }

  render(container) {
    const c = this.engine.getCase();
    const suspects = this.engine.getSuspects();

    container.innerHTML = `
      <div class="resolution">
        <button class="btn btn--back" data-action="back-to-game">← VOLVER</button>

        <div class="resolution__title">RESOLVER EL CASO</div>
        <div class="resolution__subtitle">SELECCIONA UNA OPCIÓN EN CADA CATEGORÍA · ACUSA CUANDO ESTÉS SEGURO</div>

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number" style="background:var(--red-dark);border-color:var(--red);">1</div>
            <div class="resolution__block-question">¿QUIÉN cometió el crimen?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-who">
              <option value="">Seleccionar sospechoso...</option>
              ${suspects.map(s => `<option value="${s.id}">${this.ui._esc(s.name)} — ${this.ui._esc(s.role)}</option>`).join('')}
            </select>
          </div>
        </div>

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number">2</div>
            <div class="resolution__block-question">¿CÓMO fue cometido?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-how">
              <option value="">Seleccionar método...</option>
              ${c.howOptions.map(o => `<option value="${o.id}">${this.ui._esc(o.text)}</option>`).join('')}
            </select>
          </div>
        </div>

        <div class="resolution__block">
          <div class="resolution__block-header">
            <div class="resolution__block-number">3</div>
            <div class="resolution__block-question">¿POR QUÉ lo hizo?</div>
          </div>
          <div class="resolution__select-wrap">
            <select class="resolution__select" id="res-why">
              <option value="">Seleccionar motivo...</option>
              ${c.whyOptions.map(o => `<option value="${o.id}">${this.ui._esc(o.text)}</option>`).join('')}
            </select>
          </div>
        </div>

        <button class="btn btn--cta" id="btn-accuse" data-action="accuse">ACUSAR</button>
      </div>
    `;

    container.querySelector('[data-action="back-to-game"]')
      .addEventListener('click', () => this.ui.showScreen('game'));

    container.querySelector('[data-action="accuse"]')
      .addEventListener('click', () => this._handleAccuse());
  }

  _handleAccuse() {
    const who = this.ui.root.querySelector('#res-who').value;
    const how = this.ui.root.querySelector('#res-how').value;
    const why = this.ui.root.querySelector('#res-why').value;

    if (!who || !how || !why) {
      var btn = this.ui.root.querySelector('#btn-accuse');
      btn.textContent = '⚠ SELECCIONA LAS 3 OPCIONES';
      btn.style.borderColor = 'var(--red)';
      setTimeout(function() { btn.textContent = 'ACUSAR'; btn.style.borderColor = ''; }, 2000);
      return;
    }

    const result = this.engine.resolveCase(who, how, why);
    this.ui._lastResult = result;
    this.ui.showScreen('dinner');
  }
};

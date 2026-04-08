/**
 * ResultScreen — Pantalla de resultado final (victoria/derrota).
 */
var US = US || {};

US.ResultScreen = class ResultScreen {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
  }

  render(container) {
    const result = this.ui._lastResult;
    if (!result) { this.ui.showScreen('menu'); return; }

    const verdictText = result.allCorrect ? '¡CASO RESUELTO!'
      : (result.correct.who ? 'CASO PARCIALMENTE RESUELTO' : 'CASO NO RESUELTO');
    const verdictCls = result.allCorrect ? 'correct'
      : (result.correct.who ? 'partial' : 'wrong');

    container.innerHTML = `
      <div class="result">
        <div class="result__verdict result__verdict--${verdictCls}">${verdictText}</div>

        <div class="result__score">${result.score}</div>
        <div class="result__rating">RANGO ${result.rating} — ${result.ratingLabel}</div>

        <div class="result__breakdown">
          <div class="result__row">
            <span class="result__row-label">¿Quién?</span>
            <span class="result__row-value ${result.correct.who ? 'correct' : 'wrong'}">${result.correct.who ? '✓ CORRECTO' : '✕ INCORRECTO'}</span>
          </div>
          <div class="result__row">
            <span class="result__row-label">¿Cómo?</span>
            <span class="result__row-value ${result.correct.how ? 'correct' : 'wrong'}">${result.correct.how ? '✓ CORRECTO' : '✕ INCORRECTO'}</span>
          </div>
          <div class="result__row">
            <span class="result__row-label">¿Por qué?</span>
            <span class="result__row-value ${result.correct.why ? 'correct' : 'wrong'}">${result.correct.why ? '✓ CORRECTO' : '✕ INCORRECTO'}</span>
          </div>
          <div style="border-top:1px solid #2e2e2e;margin-top:4px;padding-top:8px;" class="result__row">
            <span class="result__row-label">Contradicciones encontradas</span>
            <span class="result__row-value" style="color:#aaa;">${result.contradictionsFound} / ${result.totalContradictions}</span>
          </div>
        </div>

        <div class="result__explanation">
          <div class="result__explanation-label">LO QUE REALMENTE OCURRIÓ</div>
          ${this.ui._esc(result.explanation)}
        </div>

        <button class="btn btn--primary btn--menu" style="max-width:320px;" data-action="back-to-menu">VOLVER AL MENÚ</button>
      </div>
    `;

    container.querySelector('[data-action="back-to-menu"]')
      .addEventListener('click', () => this.ui.showScreen('menu'));
  }
};

/**
 * QuestionPanel — Panel de preguntas, coartada y pruebas.
 */
var US = US || {};

US.QuestionPanel = class QuestionPanel {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
    this.root = uiController.root;
    this.activeTab = 'vinculo';
  }

  render() {
    const panel = this.root.querySelector('#question-panel');
    panel.innerHTML = `
      <div class="q-tabs">
        <button class="q-tab ${this.activeTab === 'vinculo' ? 'active' : ''}" data-tab="vinculo">VÍNCULO</button>
        <button class="q-tab ${this.activeTab === 'coartada' ? 'active' : ''}" data-tab="coartada">COARTADA</button>
        <button class="q-tab ${this.activeTab === 'prueba' ? 'active' : ''}" data-tab="prueba">PRUEBA</button>
      </div>
      <div class="q-body" id="q-body"></div>
    `;

    panel.querySelectorAll('.q-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.activeTab = tab.dataset.tab;
        this.render();
      });
    });

    this._renderTabContent();
  }

  _renderTabContent() {
    const body = this.root.querySelector('#q-body');
    const suspect = this.engine.getActiveSuspect();

    if (this.activeTab === 'prueba') {
      this._renderEvidenceGrid(body);
      return;
    }

    const questions = suspect.questions[this.activeTab] || [];
    body.innerHTML = questions.map(q => {
      const asked = this.engine.isQuestionAsked(q.id);
      return `
        <div class="q-item ${asked ? 'asked' : ''}" data-question-id="${q.id}">
          <div class="q-item__text">${this.ui._esc(q.text)}</div>
          <div class="q-item__cost">-${q.pressureCost}P</div>
          <div class="q-item__status">✓</div>
        </div>
      `;
    }).join('');

    body.querySelectorAll('.q-item:not(.asked)').forEach(item => {
      item.addEventListener('click', () => this.ui._handleAskQuestion(item.dataset.questionId));
    });
  }

  _renderEvidenceGrid(body) {
    const evidence = this.engine.getEvidence();
    const suspect = this.engine.getActiveSuspect();

    body.innerHTML = `
      <div style="font-size:9px;color:#555;margin-bottom:8px;letter-spacing:1px;">
        Selecciona una prueba para presentársela a ${this.ui._esc(suspect.name)}:
      </div>
      <div class="ev-grid">
        ${evidence.map(ev => {
          const presented = this.engine.isEvidencePresented(suspect.id, ev.id);
          return `
            <div class="ev-thumb ${presented ? 'presented' : ''}" data-evidence-id="${ev.id}">
              <span class="ev-thumb__icon">${ev.icon}</span>
              <span class="ev-thumb__label">${this.ui._esc(ev.title)}</span>
            </div>
          `;
        }).join('')}
      </div>
    `;

    body.querySelectorAll('.ev-thumb:not(.presented)').forEach(el => {
      el.addEventListener('click', () => this.ui._handlePresentEvidence(el.dataset.evidenceId));
    });
  }
};

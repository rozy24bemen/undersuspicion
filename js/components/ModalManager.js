/**
 * ModalManager — Gestión del modal de evidencia y overlay de contradicción.
 */
var US = US || {};

US.ModalManager = class ModalManager {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
    this.root = uiController.root;
    this.modal = uiController.modal;
    this.contradictionEl = uiController.contradictionEl;
  }

  showEvidence(evidenceId) {
    const ev = this.engine.getEvidence().find(e => e.id === evidenceId);
    if (!ev) return;

    this.modal.innerHTML = `
      <div class="modal-card">
        <div class="modal__header">
          <div class="modal__header-info">
            <div class="modal__header-title">EVIDENCIA · DETALLE COMPLETO</div>
            <div class="modal__header-ref">${this.ui._esc(ev.metadata.ref)}</div>
          </div>
          <button class="modal__close" data-action="close-modal">✕</button>
        </div>
        <div class="modal__body">
          <div class="modal__image-placeholder">
            <span class="modal__image-icon">${ev.icon}</span>
            <span class="modal__image-label">[${this.ui._esc(ev.type).toUpperCase()} — IMAGEN PLACEHOLDER]</span>
          </div>

          <div>
            <div class="modal__section-label">TÍTULO</div>
            <div class="modal__section-title">${this.ui._esc(ev.title)}</div>
          </div>

          <div>
            <div class="modal__section-label">METADATOS</div>
            <div class="modal__metadata">
              Fecha: ${this.ui._esc(ev.metadata.fecha)}<br>
              Fuente: ${this.ui._esc(ev.metadata.fuente)}<br>
              Referencia: ${this.ui._esc(ev.metadata.ref)}
            </div>
          </div>

          <div>
            <div class="modal__section-label">DESCRIPCIÓN</div>
            <div class="modal__description">${this.ui._esc(ev.fullDesc)}</div>
          </div>

          <button class="btn btn--ghost btn--menu modal__present-btn" data-action="present-from-modal" data-evidence-id="${ev.id}">
            PRESENTAR AL SOSPECHOSO
          </button>
        </div>
      </div>
    `;

    this.modal.classList.add('active');

    this.modal.querySelector('[data-action="close-modal"]')
      .addEventListener('click', () => this.hideEvidence());

    this.modal.querySelector('[data-action="present-from-modal"]')
      .addEventListener('click', (e) => {
        this.hideEvidence();
        this.ui._handlePresentEvidence(e.currentTarget.dataset.evidenceId);
      });
  }

  hideEvidence() {
    this.modal.classList.remove('active');
  }

  showContradiction(c) {
    const suspectName = this.engine.getSuspects().find(s => s.id === c.suspectId).name;

    this.contradictionEl.innerHTML = `
      <div class="contradiction__accent"></div>
      <div class="contradiction__body">
        <div class="contradiction__title">¡CONTRADICCIÓN DETECTADA!</div>
        <div class="contradiction__subtitle">INCONSISTENCIA LÓGICA REGISTRADA — LIBRETA ACTUALIZADA</div>

        <div class="contradiction__comparison">
          <div class="contradiction__side">
            <div class="contradiction__side-label">DECLARACIÓN DE ${this.ui._esc(suspectName).toUpperCase()}</div>
            <div class="contradiction__side-text">${this.ui._esc(c.statement)}</div>
          </div>
          <div class="contradiction__vs">
            <div class="contradiction__vs-line"></div>
            <div class="contradiction__vs-icon">VS</div>
            <div class="contradiction__vs-line"></div>
          </div>
          <div class="contradiction__side">
            <div class="contradiction__side-label">PRUEBA</div>
            <div class="contradiction__side-text">${this.ui._esc(c.proof)}</div>
          </div>
        </div>

        <div class="contradiction__bottom">
          <div class="contradiction__suspicion">
            <div class="contradiction__suspicion-value">+${c.suspicionBonus}%</div>
            <div>
              <div class="contradiction__suspicion-label">NIVEL DE SOSPECHA</div>
              <div class="contradiction__suspicion-sub">Credibilidad reducida</div>
            </div>
          </div>
          <div class="contradiction__dismiss">
            <div class="contradiction__dismiss-hint">Pulsa para continuar</div>
            <button class="btn" style="width:140px;height:34px;font-size:10px;" data-action="dismiss-contradiction">CONTINUAR</button>
          </div>
        </div>
      </div>
      <div class="contradiction__accent"></div>
    `;

    this.contradictionEl.classList.add('active');

    const dismiss = () => {
      this.contradictionEl.classList.remove('active');
      this.ui._renderPortrait();
      this.ui.notebook.updateBadge();
    };

    this.contradictionEl.querySelector('[data-action="dismiss-contradiction"]')
      .addEventListener('click', dismiss);
  }

  dismissContradiction() {
    this.contradictionEl.classList.remove('active');
    this.ui._renderPortrait();
    this.ui.notebook.updateBadge();
  }
};

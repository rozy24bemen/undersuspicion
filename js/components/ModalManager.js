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
          <div class="modal__header-actions">
            <button class="modal__uv-btn" data-action="toggle-uv" title="Activar Luz UV">🔦 LUZ UV</button>
          </div>
          <button class="modal__close" data-action="close-modal">✕</button>
        </div>
        <div class="modal__body">
          ${ev.imagePath
            ? `<div class="modal__image">
                 <img src="${this.ui._esc(ev.imagePath)}" alt="${this.ui._esc(ev.title)}" class="modal__image-img" />
               </div>`
            : `<div class="modal__image-placeholder">
                 <span class="modal__image-icon">${ev.icon}</span>
                 <span class="modal__image-label">[${this.ui._esc(ev.type).toUpperCase()} — IMAGEN PLACEHOLDER]</span>
               </div>`
          }

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

    // Estado UV para este modal
    let uvActive = false;
    const uvBtn = this.modal.querySelector('[data-action="toggle-uv"]');
    const imageContainer = this.modal.querySelector('.modal__image');
    const imageImg = this.modal.querySelector('.modal__image-img');

    // Toggle UV
    if (uvBtn) {
      uvBtn.addEventListener('click', () => {
        uvActive = !uvActive;
        uvBtn.classList.toggle('modal__uv-btn--active', uvActive);
        if (imageContainer) {
          imageContainer.classList.toggle('modal__image--uv-active', uvActive);
        }
      });
    }

    // Cursor UV y filtro de luz
    if (imageContainer) {
      // Crear overlay para efecto UV
      const uvOverlay = document.createElement('div');
      uvOverlay.className = 'uv-overlay';
      imageContainer.appendChild(uvOverlay);
      
      const uvCursor = document.createElement('div');
      uvCursor.className = 'uv-cursor';
      document.body.appendChild(uvCursor);

      imageContainer.addEventListener('mousemove', (e) => {
        if (!uvActive) return;
        
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Mostrar cursor UV
        uvCursor.style.display = 'block';
        uvCursor.style.left = (e.clientX - 30) + 'px';
        uvCursor.style.top = (e.clientY - 30) + 'px';
        
        // Aplicar efecto de luz UV al overlay
        uvOverlay.style.opacity = '1';
        uvOverlay.style.setProperty('--uv-x', x + 'px');
        uvOverlay.style.setProperty('--uv-y', y + 'px');
      });

      imageContainer.addEventListener('mouseleave', () => {
        uvCursor.style.display = 'none';
        uvOverlay.style.opacity = '0';
      });

      // Limpiar cursor UV al cerrar modal
      const closeModalBtn = this.modal.querySelector('[data-action="close-modal"]');
      if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
          uvCursor.remove();
          this.hideEvidence();
        });
      }

      const presentBtn = this.modal.querySelector('[data-action="present-from-modal"]');
      if (presentBtn) {
        presentBtn.addEventListener('click', (e) => {
          uvCursor.remove();
          this.hideEvidence();
          this.ui._handlePresentEvidence(e.currentTarget.dataset.evidenceId);
        });
      }
    } else {
      this.modal.querySelector('[data-action="close-modal"]')
        .addEventListener('click', () => this.hideEvidence());

      this.modal.querySelector('[data-action="present-from-modal"]')
        .addEventListener('click', (e) => {
          this.hideEvidence();
          this.ui._handlePresentEvidence(e.currentTarget.dataset.evidenceId);
        });
    }

    if (this.ui.tutorial) this.ui.tutorial.notify('evidence-modal-opened', evidenceId);
  }

  hideEvidence() {
    const wasOpen = this.modal.classList.contains('active');
    this.modal.classList.remove('active');
    if (wasOpen && this.ui.tutorial) this.ui.tutorial.notify('evidence-modal-closed', null);
  }

  showContradiction(c) {
    const suspectName = this.engine.getSuspects().find(s => s.id === c.suspectId).name;

    // No diferenciamos visualmente las pistas falsas: el jugador debe deducir
    // por sí mismo si una contradicción es decisiva o un episodio personal.
    // La única señal numérica es el suspicionBonus (datos), no la UI.
    this.contradictionEl.classList.remove('contradiction--red-herring');

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
      this.ui._setSuspectMood('neutral', 0);
      this.ui.notebook.updateBadge();
      if (this.ui.tutorial) this.ui.tutorial.notify('contradiction-modal-closed', c);
    };

    this.contradictionEl.querySelector('[data-action="dismiss-contradiction"]')
      .addEventListener('click', dismiss);
  }

  dismissContradiction() {
    const wasOpen = this.contradictionEl.classList.contains('active');
    this.contradictionEl.classList.remove('active');
    this.ui._setSuspectMood('neutral', 0);
    this.ui.notebook.updateBadge();
    if (wasOpen && this.ui.tutorial) this.ui.tutorial.notify('contradiction-modal-closed', null);
  }
};

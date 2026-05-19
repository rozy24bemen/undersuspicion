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
    // Buscamos en TODAS las pruebas (incluso bloqueadas), porque el cajón
    // sigue siendo accesible aunque otras pruebas vivan dentro.
    const ev = this.engine.getAllEvidence().find(e => e.id === evidenceId);
    if (!ev) return;

    if (US.audio) US.audio.playSFX('modal-open');

    // ── Estado UV de la prueba y del caso ─────────────────────────
    // - uvLightAvailable a nivel de caso → el botón aparece en TODAS las
    //   pruebas para que el jugador tenga que investigar cuáles revelan
    //   algo. Casos sin esta flag no muestran el botón.
    // - toolData['uv-light'] a nivel de prueba → si existe, hay algo que
    //   revelar (texto + opcionalmente imagen UV apilada). Si no existe,
    //   activar UV solo dará el efecto visual + mensaje de "sin hallazgos".
    const caseData = this.engine.getCase();
    const caseHasUv = !!(caseData && caseData.uvLightAvailable);
    const uvData = ev.toolData && ev.toolData['uv-light'];
    const uvHasReveal = !!(uvData && uvData.reveals);
    const uvHasImage  = !!(uvData && uvData.uvImagePath);
    const uvAlreadyDiscovered = uvHasReveal && this.engine.isToolDiscovered('uv-light', ev.id);

    // ¿Esta prueba tiene cerradura numérica? Si está cerrada renderizamos
    // el keypad EN UN PANEL LATERAL (modo split) para no aplastar la imagen.
    // Si está abierta mostramos el mensaje de éxito dentro del body normal.
    const hasLock          = !!ev.lock;
    const lockOpened       = hasLock && this.engine.isLockOpened(ev.id);
    const showKeypadAside  = hasLock && !lockOpened;

    const keypadMarkup = showKeypadAside ? `
      <div class="modal__keypad" data-keypad>
        <div class="modal__keypad-label">CANDADO NUMÉRICO · 4 DÍGITOS</div>
        <div class="modal__keypad-prompt">${this.ui._esc(ev.lock.prompt || 'Introduce la combinación.')}</div>
        <div class="modal__keypad-display" data-keypad-display>
          ${Array.from({ length: ev.lock.digits || 4 }).map((_, i) => `
            <span class="modal__keypad-digit" data-pos="${i}">·</span>
          `).join('')}
        </div>
        <div class="modal__keypad-feedback" data-keypad-feedback></div>
        <div class="modal__keypad-grid">
          ${[1,2,3,4,5,6,7,8,9].map(d => `
            <button class="modal__keypad-btn" data-digit="${d}">${d}</button>
          `).join('')}
          <button class="modal__keypad-btn modal__keypad-btn--special" data-keypad-action="clear" title="Limpiar">C</button>
          <button class="modal__keypad-btn" data-digit="0">0</button>
          <button class="modal__keypad-btn modal__keypad-btn--special" data-keypad-action="delete" title="Borrar">←</button>
        </div>
      </div>
    ` : '';

    const bodyMarkup = `
      <div class="modal__body">
        ${ev.imagePath
          ? `<div class="modal__image" data-uv-image-container>
               <img src="${this.ui._esc(ev.imagePath)}" alt="${this.ui._esc(ev.title)}" class="modal__image-img" />
               ${uvHasImage ? `
                 <img src="${this.ui._esc(uvData.uvImagePath)}" alt="" class="modal__image-img modal__image-img--uv" data-uv-image aria-hidden="true" />
               ` : ''}
               ${caseHasUv ? `
                 <div class="modal__uv-cursor" data-uv-cursor aria-hidden="true"></div>
                 <div class="modal__uv-hint" data-uv-hint>Mueve la linterna sobre la prueba</div>
               ` : ''}
             </div>`
          : `<div class="modal__image-placeholder">
               <span class="modal__image-icon">${ev.icon}</span>
               <span class="modal__image-label">[${this.ui._esc(ev.type).toUpperCase()} — IMAGEN PLACEHOLDER]</span>
             </div>`
        }

        ${uvHasReveal ? `
          <div class="modal__uv-reveal" data-uv-reveal style="display:${uvAlreadyDiscovered ? 'block' : 'none'};">
            <div class="modal__uv-reveal-label">🔦 HALLAZGO BAJO LUZ ULTRAVIOLETA</div>
            <div class="modal__uv-reveal-text">${this.ui._esc(uvData.reveals)}</div>
          </div>
        ` : ''}

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

        ${hasLock && lockOpened ? `
          <div class="modal__lock-success">
            <div class="modal__lock-success-title">✅ CAJÓN ABIERTO</div>
            <div class="modal__lock-success-text">${this.ui._esc(ev.lock.unlocksMessage || ev.lock.success || 'Cerradura abierta.')}</div>
          </div>
        ` : ''}

        <button class="btn btn--ghost btn--menu modal__present-btn" data-action="present-from-modal" data-evidence-id="${ev.id}">
          PRESENTAR AL SOSPECHOSO
        </button>
      </div>
    `;

    this.modal.innerHTML = `
      <div class="modal-card${showKeypadAside ? ' modal-card--with-keypad' : ''}">
        <div class="modal__header">
          <div class="modal__header-info">
            <div class="modal__header-title">EVIDENCIA · DETALLE COMPLETO</div>
            <div class="modal__header-ref">${this.ui._esc(ev.metadata.ref)}</div>
          </div>
          ${caseHasUv ? `
            <div class="modal__header-actions">
              <button class="modal__uv-btn" data-action="toggle-uv" title="Examinar bajo luz UV">🔦 LUZ UV</button>
            </div>
          ` : ''}
          <button class="modal__close" data-action="close-modal">✕</button>
        </div>
        ${showKeypadAside ? `
          <div class="modal__layout">
            ${bodyMarkup}
            <aside class="modal__keypad-aside">
              ${keypadMarkup}
            </aside>
          </div>
        ` : bodyMarkup}
      </div>
    `;

    this.modal.classList.add('active');

    // ── UV: examinar la prueba bajo luz ultravioleta ───────────────────
    // Modo spotlight con linterna que sigue al cursor. Tres estados según
    // los datos de la prueba:
    //   1. `uvImagePath` presente → se apila la imagen UV sobre la base y
    //      se enmascara con un círculo centrado en el cursor.
    //   2. solo `reveals` (texto) → filtro violeta sobre la imagen + panel
    //      de texto (sin spotlight).
    //   3. sin `toolData['uv-light']` → cursor + halo siguen al ratón pero
    //      no se revela nada; aparece el mensaje "sin hallazgos".
    // En los casos 1 y 2 se registra el descubrimiento en el engine la
    // primera vez. La contradicción NO se dispara aquí (sigue el flujo
    // normal: interrogar → presentar prueba al sospechoso).
    const uvBtn = this.modal.querySelector('[data-action="toggle-uv"]');
    if (uvBtn && caseHasUv) {
      const imageContainer = this.modal.querySelector('.modal__image');
      const revealEl       = this.modal.querySelector('[data-uv-reveal]');
      const uvCursor       = this.modal.querySelector('[data-uv-cursor]');
      const uvHint         = this.modal.querySelector('[data-uv-hint]');
      let   uvActive       = uvAlreadyDiscovered;

      // ── Tracking de la posición de la linterna ────────────────────
      // Las CSS vars --uv-x / --uv-y mueven la máscara y el halo. Se
      // expresan en porcentaje del contenedor para sobrevivir al resize
      // del modal en pantallas responsive.
      const setSpotlight = (xPct, yPct) => {
        if (!imageContainer) return;
        imageContainer.style.setProperty('--uv-x', xPct + '%');
        imageContainer.style.setProperty('--uv-y', yPct + '%');
      };
      const updateFromEvent = (clientX, clientY) => {
        if (!imageContainer) return;
        const rect = imageContainer.getBoundingClientRect();
        const xPct = ((clientX - rect.left) / rect.width)  * 100;
        const yPct = ((clientY - rect.top)  / rect.height) * 100;
        setSpotlight(
          Math.max(0, Math.min(100, xPct)),
          Math.max(0, Math.min(100, yPct))
        );
        // Al primer movimiento, ocultamos la pista textual.
        if (uvHint) uvHint.classList.add('modal__uv-hint--dismissed');
      };
      const onPointerMove = (e) => updateFromEvent(e.clientX, e.clientY);
      const onTouchMove = (e) => {
        if (!e.touches[0]) return;
        e.preventDefault();
        updateFromEvent(e.touches[0].clientX, e.touches[0].clientY);
      };

      const attachTracking = () => {
        if (!imageContainer) return;
        setSpotlight(50, 50);  // Posición inicial: centro de la imagen
        imageContainer.addEventListener('pointermove', onPointerMove);
        imageContainer.addEventListener('touchmove',   onTouchMove, { passive: false });
      };
      const detachTracking = () => {
        if (!imageContainer) return;
        imageContainer.removeEventListener('pointermove', onPointerMove);
        imageContainer.removeEventListener('touchmove',   onTouchMove);
        if (uvHint) uvHint.classList.remove('modal__uv-hint--dismissed');
      };

      const setUvVisible = (visible) => {
        uvActive = visible;
        uvBtn.classList.toggle('modal__uv-btn--active', visible);
        if (imageContainer) imageContainer.classList.toggle('modal__image--uv-active', visible);
        // Solo mostramos panel cuando hay algo que revelar — las pruebas
        // sin hallazgo se barren en silencio (el jugador ve por sí mismo
        // que no aparece nada nuevo bajo el haz).
        if (revealEl) revealEl.style.display = visible && uvHasReveal ? 'block' : 'none';
        if (uvCursor) uvCursor.style.display = visible ? '' : 'none';
        if (uvHint)   uvHint.style.display   = visible ? '' : 'none';
        if (visible) attachTracking();
        else detachTracking();
      };

      // Estado inicial: si ya estaba descubierto en una sesión previa, abre
      // con UV activo.
      setUvVisible(uvActive);

      uvBtn.addEventListener('click', () => {
        const willActivate = !uvActive;
        setUvVisible(willActivate);

        // Solo registramos descubrimiento cuando hay algo que descubrir.
        if (willActivate && uvHasReveal && !this.engine.isToolDiscovered('uv-light', ev.id)) {
          const result = this.engine.useToolOnEvidence('uv-light', ev.id);
          if (!result.blocked && this.ui.notebook) {
            this.ui.notebook.refreshContent();
          }
        }
      });

      // Al cerrar la modal, asegurar que se desenganchen los listeners.
      this._uvCleanup = () => detachTracking();
    } else {
      this._uvCleanup = null;
    }

    // ── Keypad de cerradura numérica ───────────────────────────
    // Si la prueba tiene `lock` y aún no está abierta, conecta el teclado.
    // El jugador introduce hasta `digits` cifras; al completar, el motor
    // valida la combinación. Acierto → abre, libera pruebas escondidas y
    // re-renderiza la mesa. Fallo → shake + reset.
    const keypadEl = this.modal.querySelector('[data-keypad]');
    if (keypadEl && hasLock && !lockOpened) {
      const digitsTotal = ev.lock.digits || 4;
      const display    = this.modal.querySelector('[data-keypad-display]');
      const feedback   = this.modal.querySelector('[data-keypad-feedback]');
      let current = '';
      let locked  = false;  // bloquea entradas mientras animamos error/éxito

      const renderDigits = () => {
        if (!display) return;
        const slots = display.querySelectorAll('.modal__keypad-digit');
        slots.forEach((slot, i) => {
          slot.textContent = current[i] || '·';
          slot.classList.toggle('modal__keypad-digit--filled', !!current[i]);
        });
      };

      const tryAttempt = () => {
        const result = this.engine.attemptOpenLock(ev.id, current);
        if (result.success && !result.alreadyOpened) {
          // Éxito: animación + transición a estado abierto.
          if (feedback) {
            feedback.textContent = ev.lock.success || 'CERRADURA ABIERTA';
            feedback.className = 'modal__keypad-feedback modal__keypad-feedback--success';
          }
          keypadEl.classList.add('modal__keypad--success');
          locked = true;

          // Refresca la libreta, la mesa y el panel de preguntas (la
          // pestaña PRUEBA muestra una rejilla paralela de pruebas que
          // también necesita las cartas nuevas con sus click handlers).
          // Después re-renderiza el modal en estado "abierto" para mostrar
          // el mensaje de éxito.
          if (this.ui.notebook) this.ui.notebook.refreshContent();
          setTimeout(() => {
            if (this.ui.desk)      this.ui.desk.render({ justUnlocked: result.unlockedIds });
            if (this.ui.questions) this.ui.questions.render();
            this.showEvidence(evidenceId);  // re-render del modal en estado abierto
          }, 1100);
        } else {
          if (feedback) {
            feedback.textContent = ev.lock.failure || 'COMBINACIÓN INCORRECTA';
            feedback.className = 'modal__keypad-feedback modal__keypad-feedback--error';
          }
          keypadEl.classList.add('modal__keypad--error');
          locked = true;
          setTimeout(() => {
            keypadEl.classList.remove('modal__keypad--error');
            if (feedback) {
              feedback.textContent = '';
              feedback.className = 'modal__keypad-feedback';
            }
            current = '';
            renderDigits();
            locked = false;
          }, 800);
        }
      };

      keypadEl.querySelectorAll('[data-digit]').forEach(btn => {
        btn.addEventListener('click', () => {
          if (locked) return;
          if (current.length >= digitsTotal) return;
          current += btn.dataset.digit;
          renderDigits();
          if (current.length === digitsTotal) {
            // Pequeño delay para que el jugador vea el último dígito antes
            // del feedback de acierto/error.
            setTimeout(tryAttempt, 200);
          }
        });
      });

      keypadEl.querySelector('[data-keypad-action="clear"]')
        ?.addEventListener('click', () => {
          if (locked) return;
          current = '';
          renderDigits();
        });

      keypadEl.querySelector('[data-keypad-action="delete"]')
        ?.addEventListener('click', () => {
          if (locked) return;
          current = current.slice(0, -1);
          renderDigits();
        });
    }

    this.modal.querySelector('[data-action="close-modal"]')
      .addEventListener('click', () => this.hideEvidence());

    this.modal.querySelector('[data-action="present-from-modal"]')
      .addEventListener('click', (e) => {
        this.hideEvidence();
        this.ui._handlePresentEvidence(e.currentTarget.dataset.evidenceId);
      });

    if (this.ui.tutorial) this.ui.tutorial.notify('evidence-modal-opened', evidenceId);
  }

  hideEvidence() {
    const wasOpen = this.modal.classList.contains('active');
    if (this._uvCleanup) { this._uvCleanup(); this._uvCleanup = null; }
    this.modal.classList.remove('active');
    if (wasOpen && this.ui.tutorial) this.ui.tutorial.notify('evidence-modal-closed', null);
  }

  showContradiction(c) {
    const suspectName = this.engine.getSuspects().find(s => s.id === c.suspectId).name;

    if (US.audio) {
      US.audio.playSFX('contradiction-hit');
      // Sting musical largo encima del impacto seco — refuerzo del beat
      // narrativo "lo has descubierto". Si suena demasiado, basta con
      // bajar SFX en el modal de ajustes (afecta a los dos).
      US.audio.playSFX('revelation-sting');
    }

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

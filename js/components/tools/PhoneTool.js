/**
 * PhoneTool — Herramienta de teléfono para marcar números descubiertos.
 * Modalidad: overlay modal centrado.
 */
var US = US || {};

US.PhoneTool = class PhoneTool {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
    this.root = uiController.root;
    this.el = null;
    this.currentNumber = '';
    this._createOverlay();
  }

  _createOverlay() {
    // Crear contenedor modal si no existe
    const existingOverlay = this.root.querySelector('#phone-overlay');
    if (existingOverlay) {
      this.el = existingOverlay;
      return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'phone-overlay';
    overlay.className = 'phone-overlay';
    this.root.appendChild(overlay);
    this.el = overlay;
  }

  render() {
    this.el.innerHTML = `
      <div class="phone-modal">
        <div class="phone-modal__header">
          <div class="phone-modal__title">TELÉFONO DE ESCRITORIO</div>
          <button class="phone-modal__close" data-action="close-phone">✕</button>
        </div>
        
        <div class="phone-modal__body">
          <!-- Display del número marcado -->
          <div class="phone-display" id="phone-display">
            <div class="phone-display__screen" id="phone-screen"></div>
          </div>

          <!-- Keypad numérico -->
          <div class="phone-keypad" id="phone-keypad">
            <div class="keypad-row">
              <button class="keypad-btn" data-digit="1">1</button>
              <button class="keypad-btn" data-digit="2">2</button>
              <button class="keypad-btn" data-digit="3">3</button>
            </div>
            <div class="keypad-row">
              <button class="keypad-btn" data-digit="4">4</button>
              <button class="keypad-btn" data-digit="5">5</button>
              <button class="keypad-btn" data-digit="6">6</button>
            </div>
            <div class="keypad-row">
              <button class="keypad-btn" data-digit="7">7</button>
              <button class="keypad-btn" data-digit="8">8</button>
              <button class="keypad-btn" data-digit="9">9</button>
            </div>
            <div class="keypad-row">
              <button class="keypad-btn keypad-btn--special" data-action="clear">C</button>
              <button class="keypad-btn" data-digit="0">0</button>
              <button class="keypad-btn keypad-btn--special" data-action="delete">←</button>
            </div>
            <div class="keypad-row">
              <button class="keypad-btn keypad-btn--call" data-action="dial">MARCAR</button>
              <button class="keypad-btn keypad-btn--hang" data-action="hangup">COLGAR</button>
            </div>
          </div>

          <!-- Resultado de la llamada -->
          <div class="phone-result" id="phone-result" style="display:none;">
            <div class="phone-result__content" id="phone-result-content"></div>
            <button class="phone-result__close" data-action="close-result">CERRAR</button>
          </div>
        </div>

        <!-- Footer con números descubiertos -->
        <div class="phone-modal__footer">
          <div class="phone-discovered" id="phone-discovered"></div>
        </div>
      </div>
    `;

    this._bindEvents();
    this._updateDiscovered();
    this._updateDisplay();
  }

  _bindEvents() {
    // Dígitos
    this.el.querySelectorAll('[data-digit]').forEach(btn => {
      btn.addEventListener('click', (e) => this._addDigit(e.target.dataset.digit));
    });

    // Acciones especiales
    this.el.querySelector('[data-action="clear"]')?.addEventListener('click', () => this._clearNumber());
    this.el.querySelector('[data-action="delete"]')?.addEventListener('click', () => this._deleteDigit());
    this.el.querySelector('[data-action="dial"]')?.addEventListener('click', () => this._dial());
    this.el.querySelector('[data-action="hangup"]')?.addEventListener('click', () => this.toggle());
    this.el.querySelector('[data-action="close-phone"]')?.addEventListener('click', () => this.toggle());
    this.el.querySelector('[data-action="close-result"]')?.addEventListener('click', () => this._closeResult());

    // Click en overlay para cerrar
    this.el.addEventListener('click', (e) => {
      if (e.target === this.el) this.toggle();
    });
  }

  _addDigit(digit) {
    if (this.currentNumber.length < 12) {
      this.currentNumber += digit;
      this._updateDisplay();
    }
  }

  _deleteDigit() {
    this.currentNumber = this.currentNumber.slice(0, -1);
    this._updateDisplay();
  }

  _clearNumber() {
    this.currentNumber = '';
    this._updateDisplay();
  }

  _updateDisplay() {
    const screen = this.el.querySelector('#phone-screen');
    if (screen) {
      screen.textContent = this.currentNumber || '─';
    }
  }

  _dial() {
    if (!this.currentNumber) return;

    const caseData = this.engine.getCase();
    if (!caseData || !caseData.phoneNumbers) {
      this._showResult(false, 'No hay números registrados en este caso.');
      return;
    }

    const entry = caseData.phoneNumbers.find(p => p.number.replace(/[^\d]/g, '') === this.currentNumber);

    if (!entry) {
      this._showResult(false, `El número ${this.currentNumber} no está registrado.`);
      return;
    }

    // Marcar como descubierto en el engine
    this.engine.discoverPhoneNumber(entry.id);
    this._updateDiscovered();

    // Mostrar resultado
    const responseText = entry.response.content || 'Línea ocupada...';
    this._showResult(true, responseText, entry);
  }

  _showResult(success, message, entry = null) {
    const resultEl = this.el.querySelector('#phone-result');
    const contentEl = this.el.querySelector('#phone-result-content');
    const keypadEl = this.el.querySelector('#phone-keypad');

    if (keypadEl) keypadEl.style.display = 'none';
    if (resultEl) resultEl.style.display = 'block';

    const icon = success ? '☎️ ✓' : '☎️ ✗';
    contentEl.innerHTML = `
      <div class="phone-result__header">${icon}</div>
      <div class="phone-result__message">${this.ui._esc(message)}</div>
      ${entry && entry.gameplayEffect ? `<div class="phone-result__effect">📌 Info desbloqueada</div>` : ''}
    `;

    this.currentNumber = '';
  }

  _closeResult() {
    const resultEl = this.el.querySelector('#phone-result');
    const keypadEl = this.el.querySelector('#phone-keypad');
    if (resultEl) resultEl.style.display = 'none';
    if (keypadEl) keypadEl.style.display = 'flex';
    this._updateDisplay();
  }

  _updateDiscovered() {
    const discovered = this.el.querySelector('#phone-discovered');
    if (!discovered) return;

    const caseData = this.engine.getCase();
    if (!caseData || !caseData.phoneNumbers) {
      discovered.innerHTML = '<div class="phone-discovered__empty">Sin números descubiertos aún.</div>';
      return;
    }

    const discoverList = caseData.phoneNumbers
      .filter(p => this.engine.getDiscoveredPhoneNumbers().includes(p.id))
      .map(p => `<div class="phone-discovered__item">${this.ui._esc(p.number)} — ${this.ui._esc(p.source)}</div>`)
      .join('');

    if (discoverList) {
      discovered.innerHTML = `
        <div class="phone-discovered__title">NÚMEROS DESCUBIERTOS:</div>
        ${discoverList}
      `;
    } else {
      discovered.innerHTML = '<div class="phone-discovered__empty">Sin números descubiertos aún.</div>';
    }
  }

  toggle() {
    const isOpen = this.el.classList.contains('open');
    if (isOpen) {
      this.el.classList.remove('open');
    } else {
      this.render();
      this.el.classList.add('open');
    }
  }

  updateBadge() {
    const badge = this.root.querySelector('#phone-badge');
    if (!badge) return;
    const count = this.engine.getDiscoveredPhoneNumbers().length;
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  }

};

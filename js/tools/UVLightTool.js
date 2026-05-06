/**
 * UVLightTool — Luz ultravioleta.
 * Tipo: overlay. Al activarse aplica el filtro UV al escritorio.
 * Al hacer click sobre una tarjeta con toolData['uv-light'], revela
 * la información oculta y notifica al sistema.
 */
var US = US || {};

US.UVLightTool = class UVLightTool {

  get id()    { return 'uv-light'; }
  get label() { return 'Luz UV'; }
  get icon()  { return '🔦'; }
  get type()  { return 'overlay'; }

  activate(ctx) {
    this._ctx = ctx;
    ctx.surface.classList.add('desk--uv-mode');
    // Añadir capa de overlay azulado sobre el escritorio
    this._overlay = document.createElement('div');
    this._overlay.className = 'uv-overlay';
    ctx.surface.appendChild(this._overlay);
    // Marcar tarjetas que tienen revelaciones UV
    ctx.getEvidence().forEach(ev => {
      if (ev.toolData && ev.toolData['uv-light']) {
        const card = ctx.surface.querySelector(`[data-evidence-id="${ev.id}"]`);
        if (card) card.classList.add('uv-has-reveal');
      }
    });
  }

  deactivate() {
    if (!this._ctx) return;
    this._ctx.surface.classList.remove('desk--uv-mode');
    if (this._overlay && this._overlay.parentNode) {
      this._overlay.parentNode.removeChild(this._overlay);
    }
    this._ctx.surface.querySelectorAll('.uv-has-reveal, .uv-revealed').forEach(el => {
      el.classList.remove('uv-has-reveal', 'uv-revealed');
    });
    this._ctx = null;
    this._overlay = null;
  }

  interactWithEvidence(evidence) {
    if (!evidence.toolData || !evidence.toolData['uv-light']) return false;
    const ctx = this._ctx;
    if (!ctx) return false;

    const alreadyFound = ctx.isToolDiscovered
      ? ctx.isToolDiscovered('uv-light', evidence.id)
      : false;

    const card = ctx.surface.querySelector(`[data-evidence-id="${evidence.id}"]`);

    if (alreadyFound) {
      // Mostrar el texto ya descubierto de nuevo
      this._showReveal(card, evidence.toolData['uv-light'].reveals, true);
      return true;
    }

    // Nuevo descubrimiento
    ctx.reportDiscovery('uv-light', evidence.id, evidence.toolData['uv-light']);
    this._showReveal(card, evidence.toolData['uv-light'].reveals, false);
    if (card) card.classList.remove('uv-has-reveal');
    if (card) card.classList.add('uv-revealed');
    return true;
  }

  _showReveal(card, revealsText, alreadyKnown) {
    // Eliminar popup anterior si existe
    const old = document.querySelector('.uv-reveal-popup');
    if (old) old.parentNode.removeChild(old);

    const popup = document.createElement('div');
    popup.className = 'uv-reveal-popup' + (alreadyKnown ? ' uv-reveal-popup--known' : '');
    popup.innerHTML = `
      <div class="uv-reveal-popup__icon">🔦</div>
      <div class="uv-reveal-popup__label">${alreadyKnown ? 'HALLAZGO UV (ya registrado)' : 'HALLAZGO UV'}</div>
      <div class="uv-reveal-popup__text">${_escHtml(revealsText)}</div>
    `;
    document.body.appendChild(popup);

    // Auto-cerrar en 4 segundos o al click
    const close = () => { if (popup.parentNode) popup.parentNode.removeChild(popup); };
    popup.addEventListener('click', close);
    setTimeout(close, 4000);
  }
};

function _escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Autoregistrar
US.ToolRegistry.register(new US.UVLightTool());

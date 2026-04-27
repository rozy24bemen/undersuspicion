/**
 * DinnerTable — Drag & drop para los objetos de la mesa de cena.
 * Reutiliza el patrón de DeskManager: pointerdown/move/up con umbral,
 * long-press en táctil, bump de z-index al mover. Sin acción de click
 * (los objetos son decorativos por ahora, se pondrán assets más tarde).
 */
var US = US || {};

US.DinnerTable = class DinnerTable {

  constructor(uiController) {
    this.ui = uiController;
    this.root = uiController.root;
    this._zIndex = 20;
    this._drag = null;
  }

  init() {
    const surface = this.root.querySelector('#dinner-table');
    if (!surface) return;

    const items = surface.querySelectorAll('.dinner-item');

    // Congelar posición actual (px left/top) para que el arrastre sea consistente
    // con independencia de los top/right/bottom/transform originales.
    requestAnimationFrame(() => {
      items.forEach(item => this._freeze(item, surface));
      items.forEach(item => {
        item.addEventListener('pointerdown', e => this._onPointerDown(e, item));
      });
    });

    surface.addEventListener('pointermove',   e => this._onPointerMove(e));
    surface.addEventListener('pointerup',     e => this._onPointerUp(e));
    surface.addEventListener('pointercancel', e => this._onPointerUp(e));
  }

  _freeze(el, surface) {
    const parentRect = surface.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const left = rect.left - parentRect.left;
    const top  = rect.top  - parentRect.top;

    el.style.left      = left + 'px';
    el.style.top       = top  + 'px';
    el.style.right     = 'auto';
    el.style.bottom    = 'auto';
    el.style.transform = 'none';
    el.classList.add('dinner-item--frozen');
  }

  _onPointerDown(e, item) {
    if (e.button !== 0) return;
    const isTouch = (e.pointerType === 'touch' || e.pointerType === 'pen');

    item.setPointerCapture(e.pointerId);
    this._zIndex += 1;
    item.style.zIndex = this._zIndex;

    this._drag = {
      item: item,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      origLeft: parseInt(item.style.left) || 0,
      origTop:  parseInt(item.style.top)  || 0,
      moved: false,
      dragActive: false,
      isTouch: isTouch,
      longPressTimer: null,
      cancelled: false
    };

    if (isTouch) {
      this._drag.longPressTimer = setTimeout(() => {
        if (!this._drag || this._drag.cancelled) return;
        this._drag.dragActive = true;
        item.classList.add('dragging');
        item.style.transition = 'transform .12s ease';
        item.style.transform  = 'scale(1.08)';
        setTimeout(() => { item.style.transition = ''; }, 130);
      }, 300);
    } else {
      this._drag.dragActive = true;
      item.classList.add('dragging');
    }
  }

  _onPointerMove(e) {
    if (!this._drag) return;

    const dx = e.clientX - this._drag.startX;
    const dy = e.clientY - this._drag.startY;
    const dist = Math.abs(dx) + Math.abs(dy);

    if (this._drag.isTouch && !this._drag.dragActive) {
      if (dist > 12) {
        clearTimeout(this._drag.longPressTimer);
        this._drag.cancelled = true;
      }
      return;
    }

    const threshold = this._drag.isTouch ? 12 : 4;
    if (dist > threshold) this._drag.moved = true;

    if (this._drag.dragActive) {
      this._drag.item.style.left = (this._drag.origLeft + dx) + 'px';
      this._drag.item.style.top  = (this._drag.origTop  + dy) + 'px';
    }
  }

  _onPointerUp(e) {
    if (!this._drag) return;
    const d = this._drag;
    this._drag = null;

    clearTimeout(d.longPressTimer);
    d.item.classList.remove('dragging');

    // Reset del efecto de lift en táctil. En escritorio no hay transform que preservar.
    if (d.isTouch) d.item.style.transform = 'none';
  }
};

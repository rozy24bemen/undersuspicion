/**
 * NotebookPanel — Panel lateral de la libreta del detective.
 */
var US = US || {};

US.NotebookPanel = class NotebookPanel {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
    this.root = uiController.root;
    this.el = uiController.notebookEl;
  }

  render() {
    this.el.innerHTML = `
      <div class="notebook__header">
        <div class="notebook__header-title">LIBRETA DEL DETECTIVE</div>
        <button class="notebook__close" data-action="close-notebook">✕</button>
      </div>
      <div class="notebook__body" id="notebook-body">
        <div class="notebook__empty">Sin anotaciones todavía. Interroga a los sospechosos para generar notas automáticamente.</div>
      </div>
    `;

    this.el.querySelector('[data-action="close-notebook"]')
      .addEventListener('click', () => this.toggle());
  }

  toggle() {
    const isOpen = this.el.classList.contains('open');
    if (isOpen) {
      this.el.classList.remove('open');
    } else {
      this.refreshContent();
      this.el.classList.add('open');
    }
  }

  refreshContent() {
    const body = this.el.querySelector('#notebook-body');
    const notes = this.engine.getNotebook();

    if (notes.length === 0) {
      body.innerHTML = '<div class="notebook__empty">Sin anotaciones todavía.</div>';
      return;
    }

    const briefing = notes.find(n => n.type === 'briefing');
    const rest = notes.filter(n => n.type !== 'briefing').slice().reverse();
    const ordered = briefing ? [briefing, ...rest] : rest;

    body.innerHTML = ordered.map(n => {
      const isContradiction = n.type === 'contradiction';
      const isBriefing = n.type === 'briefing';
      const typeLabel = { question: 'PREGUNTA', evidence: 'PRUEBA PRESENTADA', contradiction: '⚠ CONTRADICCIÓN', briefing: '📋 EXPEDIENTE' }[n.type];
      const typeCls = `note-entry__type--${n.type}`;
      return `
        <div class="note-entry ${isContradiction ? 'note-entry--contradiction' : ''} ${isBriefing ? 'note-entry--briefing' : ''}">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <span class="note-entry__type ${typeCls}">${typeLabel}</span>
            <span class="note-entry__time">${n.time}</span>
          </div>
          <div><span class="note-entry__suspect">${this.ui._esc(n.suspectName)}:</span></div>
          <div class="note-entry__detail">${this.ui._esc(n.detail1)}</div>
          ${n.detail2 ? `<div class="note-entry__detail" style="margin-top:4px;font-style:normal;color:#666;">→ ${this.ui._esc(n.detail2)}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  updateBadge() {
    const badge = this.root.querySelector('#notebook-badge');
    if (!badge) return;
    const count = this.engine.getNotebook().length;
    badge.textContent = count;
    badge.classList.toggle('visible', count > 0);
  }
};

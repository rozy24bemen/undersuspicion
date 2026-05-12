/**
 * DeskManager — Lógica de la mesa de pruebas.
 * Gestión de tarjetas de evidencia, posicionamiento y drag.
 */
var US = US || {};

US.DeskManager = class DeskManager {

  constructor(uiController) {
    this.ui = uiController;
    this.engine = uiController.engine;
    this.root = uiController.root;
    this.deskCardZIndex = 20;
    this._drag = null;
  }

  /**
   * Renderiza la mesa con todas las pruebas visibles. Si se pasa un array
   * de IDs en `opts.justUnlocked`, esas cartas reciben la clase de
   * animación de entrada (cajón abierto → tres pruebas caen sobre la mesa).
   */
  render(opts) {
    const justUnlocked = (opts && Array.isArray(opts.justUnlocked)) ? opts.justUnlocked : [];
    const surface = this.root.querySelector('#desk-surface');
    const evidence = this.engine.getEvidence();
    this._activeTool = null;

    const buildCards = () => {
      const positions = this._generatePositions(evidence.length, surface);

      surface.innerHTML = evidence.map((ev, i) => {
        const pos = positions[i];
        const animCls = justUnlocked.includes(ev.id) ? ' desk-card--just-unlocked' : '';
        const lockCls = ev.unlockedByLock ? ' desk-card--from-lock' : '';
        const iconHtml = ev.iconPath
          ? `<img src="${encodeURI(ev.iconPath)}" alt="">`
          : `<span>${ev.icon || ''}</span>`;
        const lockBadge = ev.unlockedByLock
          ? `<div class="desk-card__lock-badge" aria-label="Hallada en el cajón cerrado" title="Hallada en el cajón cerrado">🔓</div>`
          : '';
        return `
          <div class="desk-card${animCls}${lockCls}"
               data-evidence-id="${ev.id}"
               style="left:${pos.x}px;top:${pos.y}px;transform:rotate(${pos.rot}deg);z-index:${10 + i};"
          >
            <div class="desk-card__icon-area">${iconHtml}${lockBadge}</div>
            <div class="desk-card__title">${this.ui._esc(ev.title)}</div>
            <div class="desk-card__click-hint">
              <span class="hint-mouse">CLIC · ARRASTRA</span>
              <span class="hint-touch">TOCA · MANTÉN</span>
            </div>
          </div>
        `;
      }).join('');

      surface.querySelectorAll('.desk-card').forEach(card => {
        card.addEventListener('pointerdown', e => this._onPointerDown(e, card));
      });
    };

    requestAnimationFrame(buildCards);

    surface.addEventListener('pointermove', e => this._onPointerMove(e));
    surface.addEventListener('pointerup', e => this._onPointerUp(e));
    surface.addEventListener('pointercancel', e => this._onPointerUp(e));

    // Toolbar de herramientas
    this._renderToolbar();
  }

  _renderToolbar() {
    const caseData = this.engine.getCase();
    if (!caseData || !US.ToolRegistry) return;

    const tools = US.ToolRegistry.getForCase(caseData.availableTools);
    if (!tools || tools.length === 0) return;

    // Contenedor de herramientas dentro del área del escritorio
    const deskArea = this.root.querySelector('#desk-area') || this.root.querySelector('#desk-surface').parentElement;
    let toolbar = deskArea.querySelector('.tool-toolbar');
    if (toolbar) toolbar.parentNode.removeChild(toolbar);

    toolbar = document.createElement('div');
    toolbar.className = 'tool-toolbar';
    toolbar.innerHTML = tools.map(t => `
      <button class="tool-btn" data-tool-id="${t.id}" title="${this.ui._esc(t.label)}">
        <span class="tool-btn__icon">${t.icon}</span>
        <span class="tool-btn__label">${this.ui._esc(t.label)}</span>
      </button>
    `).join('');

    deskArea.appendChild(toolbar);

    toolbar.querySelectorAll('.tool-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const toolId = btn.dataset.toolId;
        const tool = US.ToolRegistry.get(toolId);
        if (!tool) return;

        if (this._activeTool && this._activeTool.id === toolId) {
          // Toggle off
          this._deactivateTool();
          btn.classList.remove('tool-btn--active');
        } else {
          toolbar.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('tool-btn--active'));
          this._deactivateTool();
          btn.classList.add('tool-btn--active');
          this._activateTool(tool);
        }
      });
    });
  }

  _activateTool(tool) {
    this._activeTool = tool;
    const surface = this.root.querySelector('#desk-surface');
    const ctx = this._buildToolContext(surface);
    tool.activate(ctx);
  }

  _deactivateTool() {
    if (this._activeTool) {
      this._activeTool.deactivate();
      this._activeTool = null;
    }
  }

  _buildToolContext(surface) {
    const engine = this.engine;
    const ui = this.ui;
    const self = this;
    return {
      getEvidence:      () => engine.getEvidence(),
      getActiveSuspect: () => engine.getActiveSuspect(),
      getSuspects:      () => engine.getSuspects(),
      surface:          surface,
      toolContainer:    surface,
      esc:              (s) => ui._esc(s),
      isToolDiscovered: (toolId, evId) => engine.isToolDiscovered(toolId, evId),
      reportDiscovery:  (toolId, evId, data) => self._handleToolDiscovery(toolId, evId, data)
    };
  }

  _handleToolDiscovery(toolId, evidenceId, data) {
    const result = this.engine.useToolOnEvidence(toolId, evidenceId);
    if (result.blocked) return;
    if (this.ui.notebook) this.ui.notebook.refreshContent();
    if (result.contradiction) {
      setTimeout(() => {
        if (this.ui.modals) this.ui.modals.showContradiction(result.contradiction);
      }, 600);
    }
  }

  _generatePositions(count, surface) {
    var w = surface.clientWidth || 700;
    var h = surface.clientHeight || 500;
    var cardW = w < 500 ? 90 : w < 700 ? 110 : 130;
    var cols = Math.max(2, Math.floor((w - 20) / (cardW + 10)));
    var rows = Math.ceil(count / cols);
    var padX = Math.max(10, (w - cols * (cardW + 10)) / 2);
    var padY = Math.max(10, Math.min(40, (h - rows * 120) / (rows + 1)));
    var rowH = Math.min(130, (h - padY) / Math.max(rows, 1));

    var positions = [];
    for (var i = 0; i < count; i++) {
      var col = i % cols;
      var row = Math.floor(i / cols);
      positions.push({
        x: Math.round(padX + col * (cardW + 10) + (Math.random() * 14 - 7)),
        y: Math.round(padY + row * rowH + (Math.random() * 10 - 5)),
        rot: (Math.random() * 8 - 4).toFixed(1)
      });
    }
    return positions;
  }

  _onPointerDown(e, card) {
    if (e.button !== 0) return;
    var isTouch = (e.pointerType === 'touch' || e.pointerType === 'pen');

    card.setPointerCapture(e.pointerId);
    this.deskCardZIndex++;
    card.style.zIndex = this.deskCardZIndex;

    this._drag = {
      card: card,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      origLeft: parseInt(card.style.left) || 0,
      origTop: parseInt(card.style.top) || 0,
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
        card.classList.add('dragging');
        card.style.transition = 'transform .12s ease';
        card.style.transform = 'scale(1.08)';
        setTimeout(function () {
          card.style.transition = '';
        }, 130);
      }, 300);
    } else {
      this._drag.dragActive = true;
      card.classList.add('dragging');
    }
  }

  _onPointerMove(e) {
    if (!this._drag) return;

    var dx = e.clientX - this._drag.startX;
    var dy = e.clientY - this._drag.startY;
    var dist = Math.abs(dx) + Math.abs(dy);

    if (this._drag.isTouch && !this._drag.dragActive) {
      if (dist > 12) {
        clearTimeout(this._drag.longPressTimer);
        this._drag.cancelled = true;
      }
      return;
    }

    var threshold = this._drag.isTouch ? 12 : 4;
    if (dist > threshold) this._drag.moved = true;

    if (this._drag.dragActive) {
      // Obtener dimensiones del contenedor
      var surface = this._drag.card.parentElement;
      var cardWidth = this._drag.card.offsetWidth;
      var cardHeight = this._drag.card.offsetHeight;

      // Calcular nuevas posiciones
      var newLeft = this._drag.origLeft + dx;
      var newTop = this._drag.origTop + dy;

      // Restringir horizontalmente (con pequeño padding)
      var padding = 5;
      var minLeft = -padding;
      var maxLeft = surface.clientWidth - cardWidth + padding;
      newLeft = Math.max(minLeft, Math.min(maxLeft, newLeft));

      // Restringir verticalmente (con pequeño padding)
      var minTop = -padding;
      var maxTop = surface.clientHeight - cardHeight + padding;
      newTop = Math.max(minTop, Math.min(maxTop, newTop));

      // Aplicar posiciones restringidas
      this._drag.card.style.left = newLeft + 'px';
      this._drag.card.style.top = newTop + 'px';
    }
  }

  _onPointerUp(e) {
    if (!this._drag) return;
    var d = this._drag;
    this._drag = null;

    clearTimeout(d.longPressTimer);
    d.card.classList.remove('dragging');

    if (d.isTouch) {
      var rot = d.card.style.transform.match(/rotate\([^)]+\)/);
      d.card.style.transform = rot ? rot[0] : '';
    }

    if (!d.moved && !d.cancelled) {
      var evId = d.card.dataset.evidenceId;
      if (this.ui.tutorial && !this.ui.tutorial.isAllowed('open-evidence', evId)) return;

      if (US.Telemetry) {
        var caseData = this.engine.getCase();
        US.Telemetry.log('evidence-clicked', {
          caseId:     caseData ? caseData.id : null,
          evidenceId: evId
        });
      }

      // Si hay una herramienta activa, dejar que la maneje primero
      if (this._activeTool) {
        const evidence = this.engine.getEvidence().find(e => e.id === evId);
        if (evidence && this._activeTool.interactWithEvidence(evidence)) return;
      }

      this.ui.modals.showEvidence(evId);
    }
  }
};

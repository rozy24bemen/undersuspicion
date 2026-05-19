/**
 * AudioControls — UI de control del audio.
 *
 * Dos piezas:
 *   1) Botón flotante fijo en esquina superior-derecha, siempre visible.
 *      Muestra el icono altavoz; clic alterna mute. Clic largo / clic-derecho
 *      abre el modal de ajustes.
 *   2) Modal de ajustes con dos sliders (música, SFX) + toggle de mute.
 *      Accesible también desde el botón "AJUSTES DE AUDIO" del menú principal.
 *
 * El primer clic en el botón flotante también funciona como gesto de usuario
 * que desbloquea el autoplay del navegador — si el menú-loop quedó silenciado
 * al cargar la página, se reintenta al cerrar el modal o al togglear mute.
 */
var US = US || {};

US.AudioControls = class AudioControls {

  constructor(root) {
    this.root = root;
    this._modalEl = null;
    this._fabEl = null;

    this._mount();
    this._bindGlobalEvents();
  }

  // ═══════════════════════════════════════════════════
  // MOUNT
  // ═══════════════════════════════════════════════════

  _mount() {
    // Botón flotante (FAB). Se inserta directo en body para que viva por
    // encima de cualquier pantalla.
    const fab = document.createElement('button');
    fab.id = 'audio-fab';
    fab.className = 'audio-fab';
    fab.setAttribute('aria-label', 'Ajustes de audio');
    fab.innerHTML = this._iconHtml();
    document.body.appendChild(fab);

    fab.addEventListener('click', (e) => {
      // Clic corto → toggle mute
      this._toggleMute();
    });
    fab.addEventListener('contextmenu', (e) => {
      // Clic derecho → abrir modal
      e.preventDefault();
      this.openSettings();
    });
    fab.addEventListener('dblclick', () => {
      // Doble clic → abrir modal (más accesible que clic derecho en táctil)
      this.openSettings();
    });

    this._fabEl = fab;
    this._refreshFab();

    // Modal de ajustes. Se queda en DOM, escondido por CSS hasta openSettings().
    const modal = document.createElement('div');
    modal.id = 'audio-settings';
    modal.className = 'audio-settings';
    modal.innerHTML = this._modalHtml();
    document.body.appendChild(modal);
    this._modalEl = modal;

    this._bindModal();
  }

  _bindGlobalEvents() {
    // Cerrar modal con ESC.
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this._modalEl && this._modalEl.classList.contains('open')) {
        this.closeSettings();
      }
    });
  }

  _bindModal() {
    const m = this._modalEl;

    m.querySelector('[data-audio-close]').addEventListener('click', () => this.closeSettings());
    m.addEventListener('click', (e) => {
      if (e.target === m) this.closeSettings();
    });

    const musicSlider = m.querySelector('[data-audio-music]');
    const sfxSlider   = m.querySelector('[data-audio-sfx]');
    const muteToggle  = m.querySelector('[data-audio-mute]');

    musicSlider.addEventListener('input', (e) => {
      US.audio.setMusicVolume(+e.target.value / 100);
      this._refreshFab();
    });
    sfxSlider.addEventListener('input', (e) => {
      US.audio.setSfxVolume(+e.target.value / 100);
    });
    muteToggle.addEventListener('change', (e) => {
      US.audio.setMuted(e.target.checked);
      this._refreshFab();
    });

    // Botón de "probar SFX" para validar nivel
    m.querySelector('[data-audio-test]').addEventListener('click', () => {
      US.audio.playSFX('button-click');
    });
  }

  // ═══════════════════════════════════════════════════
  // PUBLIC
  // ═══════════════════════════════════════════════════

  openSettings() {
    if (!this._modalEl || !US.audio) return;
    const m = this._modalEl;
    m.querySelector('[data-audio-music]').value = Math.round(US.audio.getMusicVolume() * 100);
    m.querySelector('[data-audio-sfx]').value   = Math.round(US.audio.getSfxVolume() * 100);
    m.querySelector('[data-audio-mute]').checked = US.audio.isMuted();
    m.classList.add('open');
  }

  closeSettings() {
    if (!this._modalEl) return;
    this._modalEl.classList.remove('open');
  }

  // ═══════════════════════════════════════════════════
  // INTERNAL
  // ═══════════════════════════════════════════════════

  _toggleMute() {
    if (!US.audio) return;
    US.audio.toggleMuted();
    this._refreshFab();
  }

  _refreshFab() {
    if (!this._fabEl || !US.audio) return;
    const muted = US.audio.isMuted();
    this._fabEl.classList.toggle('muted', muted);
    this._fabEl.innerHTML = this._iconHtml(muted);
    this._fabEl.setAttribute('aria-label', muted ? 'Activar audio' : 'Ajustes de audio (clic: mute · doble clic: ajustes)');
  }

  _iconHtml(muted) {
    // SVG altavoz / altavoz tachado, estilo noir gold.
    if (muted) {
      return `
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.59 3l2.7-2.7-1.41-1.41L15.17 10.6l-2.7-2.7-1.42 1.41L13.76 12l-2.71 2.7 1.42 1.41 2.7-2.71 2.7 2.71 1.41-1.41-2.7-2.7z"/>
        </svg>`;
    }
    return `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M3 9v6h4l5 5V4L7 9H3zm10.5 3a4.5 4.5 0 0 0-2.5-4.03v8.06A4.5 4.5 0 0 0 13.5 12zm-2.5-8v2.06a7 7 0 0 1 0 11.88V19a8.5 8.5 0 0 0 0-15z"/>
      </svg>`;
  }

  _modalHtml() {
    return `
      <div class="audio-settings__panel" role="dialog" aria-labelledby="audio-settings-title">
        <header class="audio-settings__header">
          <h2 id="audio-settings-title">AJUSTES DE AUDIO</h2>
          <button class="audio-settings__close" data-audio-close aria-label="Cerrar">×</button>
        </header>
        <div class="audio-settings__body">
          <label class="audio-settings__row">
            <span class="audio-settings__label">MÚSICA</span>
            <input type="range" min="0" max="100" value="60" data-audio-music>
          </label>
          <label class="audio-settings__row">
            <span class="audio-settings__label">EFECTOS</span>
            <input type="range" min="0" max="100" value="80" data-audio-sfx>
          </label>
          <label class="audio-settings__row audio-settings__row--toggle">
            <span class="audio-settings__label">SILENCIAR TODO</span>
            <input type="checkbox" data-audio-mute>
          </label>
          <div class="audio-settings__actions">
            <button class="audio-settings__test" data-audio-test>PROBAR SONIDO</button>
          </div>
        </div>
      </div>`;
  }
};

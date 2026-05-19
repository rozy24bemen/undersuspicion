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
    fab.className = 'btn btn--nav-back audio-fab';
    fab.setAttribute('aria-label', 'Abrir ajustes de audio');
    fab.setAttribute('title', 'Abrir ajustes de audio');
    fab.innerHTML = this._iconHtml() + '<span class="audio-fab__label">Ajustes</span>';
    document.body.appendChild(fab);

    fab.addEventListener('click', () => {
      this.openSettings();
    });
    fab.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.openSettings();
    });
    fab.addEventListener('dblclick', () => {
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

  _refreshFab() {
    if (!this._fabEl) return;
    this._fabEl.classList.remove('muted');
    this._fabEl.innerHTML = this._iconHtml() + '<span class="audio-fab__label">Ajustes</span>';
    this._fabEl.setAttribute('aria-label', 'Abrir ajustes de audio');
  }

  _iconHtml() {
    return `
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0-5a1 1 0 0 1 1 1v1.07a7.002 7.002 0 0 1 3.9 2.26l.76-.76a1 1 0 1 1 1.42 1.42l-.76.76A7.002 7.002 0 0 1 20.93 11H22a1 1 0 1 1 0 2h-1.07a7.002 7.002 0 0 1-2.26 3.9l.76.76a1 1 0 0 1-1.42 1.42l-.76-.76A7.002 7.002 0 0 1 13 20.93V22a1 1 0 1 1-2 0v-1.07a7.002 7.002 0 0 1-3.9-2.26l-.76.76a1 1 0 0 1-1.42-1.42l.76-.76A7.002 7.002 0 0 1 3.07 13H2a1 1 0 1 1 0-2h1.07a7.002 7.002 0 0 1 2.26-3.9l-.76-.76A1 1 0 0 1 5.99 4.92l.76.76A7.002 7.002 0 0 1 11 3.07V2a1 1 0 0 1 1-1z"/>
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

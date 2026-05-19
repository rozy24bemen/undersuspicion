/**
 * AudioManager — Capa única de audio HTML5.
 *
 * Tres loops de música (menu / investigation / dinner) con crossfade de 1.5s
 * al cambiar; banco de SFX one-shot disparados por eventos. Volumen separado
 * para música y SFX, mute global. Preferencias persistidas en localStorage.
 *
 * Los assets viven en `audio/Seccion 1/` (música) y `audio/Seccion2/` (SFX)
 * — la carpeta lleva espacio en su nombre, por eso los paths van `encodeURI`.
 * El sting de revelación tiene un `+` en el nombre, que también requiere
 * encoding (`%2B`).
 *
 * Autoplay: los navegadores bloquean play() antes del primer gesto. Las
 * llamadas a play() llevan `.catch(() => {})`; si el primer playLoop falla
 * porque no hubo gesto aún, se queda en silencio hasta que el siguiente
 * showScreen (post-click) lo reintente.
 */
var US = US || {};

US.AudioManager = class AudioManager {

  constructor() {
    this._loops = {};
    this._sfx = {};
    this._currentLoopKey = null;
    this._currentLoopEl = null;
    this._fadeTimer = null;

    this._musicVolume = 0.6;
    this._sfxVolume   = 0.8;
    this._muted       = false;

    this._loadPrefs();
    this._registerAssets();
  }

  // ═════════════════════════════════════════════════════
  // ASSET REGISTRY
  // ═════════════════════════════════════════════════════

  _registerAssets() {
    const LOOPS = {
      menu:          'audio/Seccion 1/musica/Tema1.mp3',
      investigation: 'audio/Seccion 1/loop/lop1.mp3',
      dinner:        'audio/Seccion 1/cena/loop1.mp3'
    };
    const SFX = {
      'card-click':         'audio/Seccion2/click.mp3',
      'card-drag':          'audio/Seccion2/arrastrar.mp3',
      'modal-open':         'audio/Seccion2/apertura.mp3',
      'contradiction-hit':  'audio/Seccion2/contradiccion.mp3',
      'revelation-sting':   'audio/Seccion 1/revelacion/tema1+.mp3',
      'lock-open':          'audio/Seccion2/cerradura.mp3',
      'uv-on':              'audio/Seccion2/Luz_ON.mp3',
      'uv-loop':            'audio/Seccion2/Lamp.mp3',
      'question-typed':     'audio/Seccion2/Pregunta_Sospechoso.mp3',
      'screen-transition':  'audio/Seccion2/Transicion.mp3',
      'button-hover':       'audio/Seccion2/Hover_boton.mp3',
      'button-click':       'audio/Seccion2/click_boton.mp3',
      'notebook-open':      'audio/Seccion2/apertura_libreta.mp3',
      'case-closed':        'audio/Seccion2/cierre_de_caso.mp3'
    };

    for (const key in LOOPS) {
      const a = new Audio(encodeURI(LOOPS[key]));
      a.loop = true;
      a.preload = 'auto';
      a.volume = 0;
      this._loops[key] = a;
    }
    for (const key in SFX) {
      const a = new Audio(encodeURI(SFX[key]));
      a.preload = 'auto';
      this._sfx[key] = a;
    }
  }

  // ═════════════════════════════════════════════════════
  // MUSIC (LOOPS)
  // ═════════════════════════════════════════════════════

  playLoop(key) {
    if (this._currentLoopKey === key) return;
    const next = this._loops[key];
    if (!next) return;

    const prev = this._currentLoopEl;

    next.currentTime = 0;
    next.volume = 0;
    if (!this._muted) {
      next.play().catch(() => { /* autoplay blocked — retried on next gesture */ });
    }

    this._currentLoopKey = key;
    this._currentLoopEl  = next;

    this._fadeBetween(prev, next, 1500);
  }

  stopLoop() {
    const prev = this._currentLoopEl;
    this._currentLoopKey = null;
    this._currentLoopEl  = null;
    if (!prev) return;
    this._fadeOut(prev, 1000);
  }

  _fadeBetween(out, into, duration) {
    if (this._fadeTimer) { clearInterval(this._fadeTimer); this._fadeTimer = null; }
    const target = this._muted ? 0 : this._musicVolume;
    const start = performance.now();

    this._fadeTimer = setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / duration);
      if (out)  out.volume  = target * (1 - t);
      into.volume = target * t;
      if (t >= 1) {
        clearInterval(this._fadeTimer);
        this._fadeTimer = null;
        if (out) { out.pause(); out.volume = 0; out.currentTime = 0; }
      }
    }, 30);
  }

  _fadeOut(el, duration) {
    if (!el) return;
    const startVol = el.volume;
    const start = performance.now();
    const timer = setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / duration);
      el.volume = startVol * (1 - t);
      if (t >= 1) {
        clearInterval(timer);
        el.pause();
        el.volume = 0;
        el.currentTime = 0;
      }
    }, 30);
  }

  // ═════════════════════════════════════════════════════
  // SFX (ONE-SHOT)
  // ═════════════════════════════════════════════════════

  playSFX(key) {
    const a = this._sfx[key];
    if (!a) return;
    if (this._muted) return;
    try { a.pause(); } catch (e) {}
    a.currentTime = 0;
    a.volume = this._sfxVolume;
    a.play().catch(() => {});
  }

  // Detiene un SFX en curso. Con `fadeMs > 0` aplica un fade-out corto
  // antes de pausar, para evitar el "clic" de un corte abrupto. Útil
  // para SFX largos (revelation-sting) que deben recortarse cuando el
  // jugador cierra el overlay o ha pasado un tiempo máximo.
  stopSFX(key, fadeMs) {
    const a = this._sfx[key];
    if (!a || a.paused) return;
    fadeMs = fadeMs || 0;
    if (fadeMs <= 0) {
      a.pause();
      a.currentTime = 0;
      return;
    }
    const startVol = a.volume;
    const start = performance.now();
    const timer = setInterval(() => {
      const t = Math.min(1, (performance.now() - start) / fadeMs);
      a.volume = startVol * (1 - t);
      if (t >= 1) {
        clearInterval(timer);
        a.pause();
        a.currentTime = 0;
        a.volume = startVol;
      }
    }, 20);
  }

  // ═════════════════════════════════════════════════════
  // VOLUMES & MUTE
  // ═════════════════════════════════════════════════════

  setMusicVolume(v) {
    this._musicVolume = Math.max(0, Math.min(1, +v || 0));
    if (this._currentLoopEl && !this._muted) {
      this._currentLoopEl.volume = this._musicVolume;
    }
    this._savePrefs();
  }

  setSfxVolume(v) {
    this._sfxVolume = Math.max(0, Math.min(1, +v || 0));
    this._savePrefs();
  }

  setMuted(b) {
    this._muted = !!b;
    if (this._muted) {
      for (const k in this._loops) this._loops[k].volume = 0;
    } else if (this._currentLoopEl) {
      this._currentLoopEl.volume = this._musicVolume;
      if (this._currentLoopEl.paused) {
        this._currentLoopEl.play().catch(() => {});
      }
    }
    this._savePrefs();
  }

  toggleMuted() { this.setMuted(!this._muted); return this._muted; }

  getMusicVolume() { return this._musicVolume; }
  getSfxVolume()   { return this._sfxVolume; }
  isMuted()        { return this._muted; }

  // ═════════════════════════════════════════════════════
  // PERSISTENCE
  // ═════════════════════════════════════════════════════

  _loadPrefs() {
    try {
      const raw = localStorage.getItem('us-audio-prefs');
      if (!raw) return;
      const p = JSON.parse(raw);
      if (typeof p.musicVolume === 'number') this._musicVolume = p.musicVolume;
      if (typeof p.sfxVolume   === 'number') this._sfxVolume   = p.sfxVolume;
      if (typeof p.muted       === 'boolean') this._muted      = p.muted;
    } catch (e) { /* ignore */ }
  }

  _savePrefs() {
    try {
      localStorage.setItem('us-audio-prefs', JSON.stringify({
        musicVolume: this._musicVolume,
        sfxVolume:   this._sfxVolume,
        muted:       this._muted
      }));
    } catch (e) { /* ignore */ }
  }
};

// Singleton accesible globalmente. Inicializado en app.js tras DOMContentLoaded.
US.audio = null;

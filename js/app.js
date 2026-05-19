/**
 * App bootstrap — punto de entrada del juego.
 */
(function () {
  'use strict';

  // En builds nativos (Electron .exe / Capacitor APK) el usuario ya tiene
  // el binario en su máquina, así que bloquear F12 / click derecho / Ctrl+C
  // sólo molesta al depurar y no aporta protección real.
  var ua = (navigator.userAgent || '').toLowerCase();
  var isElectron  = ua.indexOf(' electron/') !== -1;
  var isCapacitor = !!(window.Capacitor && window.Capacitor.isNativePlatform &&
                       window.Capacitor.isNativePlatform());
  var isNative    = isElectron || isCapacitor;
  US.isNative = isNative;

  if (isNative) {
    // Salta todo el bloque anti-copia y arranca directo.
    US.audio = new US.AudioManager();
    US.audioControls = new US.AudioControls();
    var engineN = new US.GameEngine();
    var uiN = new US.UIController(engineN, document.getElementById('app'));
    uiN.showScreen('menu');
    return;
  }

  // ── PROTECCIÓN CONTRA COPIAS Y EXTRACCIONES (sólo web) ────

  // Prevenir arrastrado de imágenes
  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG' || 
        e.target.tagName === 'img' ||
        e.target.tagName === 'SVG' ||
        e.target.tagName === 'svg' ||
        e.target.tagName === 'CANVAS' ||
        e.target.classList.contains('portrait__img')) {
      e.preventDefault();
      return false;
    }
  }, false);

  // Prevenir selección de imágenes
  document.addEventListener('selectstart', function(e) {
    if (e.target.tagName === 'IMG' || 
        e.target.tagName === 'img' ||
        e.target.classList.contains('portrait__img')) {
      e.preventDefault();
      return false;
    }
  }, false);

  // Prevenir el menú contextual (click derecho)
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  }, false);

  // Prevenir atajos de teclado para copiar/guardar/imprimir
  document.addEventListener('keydown', function(e) {
    // Ctrl+C / Cmd+C — copiar
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
    // Ctrl+X / Cmd+X — cortar
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 88) {
      e.preventDefault();
      return false;
    }
    // Ctrl+V / Cmd+V — pegar
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 86) {
      e.preventDefault();
      return false;
    }
    // Ctrl+S / Cmd+S — guardar
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }
    // Ctrl+P / Cmd+P — imprimir
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 80) {
      e.preventDefault();
      return false;
    }
    // F12 — developer tools
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+K — consola
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 75) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I — inspector
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }
  }, false);

  // Prevenir el evento de copiar en el portapapeles
  document.addEventListener('copy', function(e) {
    e.preventDefault();
    return false;
  }, false);

  // Prevenir el evento de cortar
  document.addEventListener('cut', function(e) {
    e.preventDefault();
    return false;
  }, false);

  // Establecer draggable="false" en todas las imágenes cuando el DOM esté listo
  function protectImages() {
    var images = document.querySelectorAll('img, svg, canvas');
    for (var i = 0; i < images.length; i++) {
      images[i].draggable = false;
      images[i].addEventListener('dragstart', function(e) { e.preventDefault(); }, false);
    }
  }

  // Proteger imágenes cuando el documento esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', protectImages);
  } else {
    protectImages();
  }

  // Observar cambios en el DOM para proteger imágenes nuevas
  if (window.MutationObserver) {
    var observer = new MutationObserver(function(mutations) {
      protectImages();
    });
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
  }

  // ── BOOTSTRAP ─────────────────────────────────────────────

  // Audio: singleton creado antes que el UI para que showScreen pueda
  // disparar el loop correspondiente desde la primera pantalla.
  US.audio = new US.AudioManager();
  US.audioControls = new US.AudioControls();

  var engine = new US.GameEngine();
  var ui = new US.UIController(engine, document.getElementById('app'));

  ui.showScreen('menu');
})();

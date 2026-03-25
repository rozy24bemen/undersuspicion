/**
 * App bootstrap — punto de entrada del juego.
 */
(function () {
  'use strict';

  var engine = new US.GameEngine();
  var ui = new US.UIController(engine, document.getElementById('app'));

  ui.showScreen('menu');
})();

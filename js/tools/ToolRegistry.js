/**
 * ToolRegistry — Registro central de herramientas del escritorio.
 * Cada herramienta se autoregistra al final de su propio archivo.
 * El motor no depende directamente de ninguna herramienta concreta.
 */
var US = US || {};

US.ToolRegistry = {
  _tools: new Map(),

  register(tool) {
    this._tools.set(tool.id, tool);
  },

  get(id) {
    return this._tools.get(id);
  },

  getAll() {
    return [...this._tools.values()];
  },

  getForCase(availableTools) {
    // Una herramienta solo aparece en la mesa si el caso la declara
    // explícitamente en `availableTools`. Casos sin esta clave no muestran
    // toolbar — evita herramientas no funcionales (p. ej. la luz UV en casos
    // que aún no tienen pruebas con `toolData['uv-light']`).
    if (!Array.isArray(availableTools)) return [];
    return availableTools
      .map(id => this._tools.get(id))
      .filter(Boolean);
  }
};

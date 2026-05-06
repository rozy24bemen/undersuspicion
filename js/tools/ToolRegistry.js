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
    // Si el caso declara qué herramientas tiene, filtrar; si no, devolver todas.
    if (!availableTools || availableTools.length === 0) return this.getAll();
    return availableTools
      .map(id => this._tools.get(id))
      .filter(Boolean);
  }
};

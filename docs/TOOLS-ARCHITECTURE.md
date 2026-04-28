# Arquitectura del Sistema de Herramientas del Escritorio

## Filosofía de diseño

Cada herramienta (luz UV, teléfono, lupa, scanner...) es un **plugin autocontenido**.
El sistema central no sabe qué herramientas existen ni qué hacen. Solo sabe que existen
herramientas con una interfaz común. Añadir una herramienta nueva no requiere tocar
ningún archivo existente — solo crear el archivo de la herramienta y añadirla al HTML.

Regla principal: **el motor del juego (GameEngine) nunca habla directamente con
una herramienta. La herramienta habla con el motor a través de un contexto controlado.**

---

## Estructura de archivos

```
js/
├── tools/
│   ├── ToolRegistry.js       ← registro central (cargado primero)
│   ├── UVLightTool.js        ← ejemplo
│   ├── DeskPhoneTool.js      ← ejemplo
│   └── ...                   ← cada herramienta en su propio archivo
├── components/
│   ├── DeskManager.js        ← evoluciona para hospedar herramientas
│   └── ...
```

En `index.html`, el orden de carga es:
```html
<script src="js/tools/ToolRegistry.js"></script>
<script src="js/tools/UVLightTool.js"></script>      <!-- cada herramienta -->
<script src="js/components/DeskManager.js"></script>  <!-- lee el registry -->
```

---

## 1. ToolRegistry — El registro central

```js
// js/tools/ToolRegistry.js
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
  }
};
```

Cada archivo de herramienta se autoregistra al final:
```js
US.ToolRegistry.register(new US.UVLightTool());
```

---

## 2. La interfaz de una herramienta (contrato)

Todas las herramientas implementan esta interfaz. Los métodos marcados con `[opcional]`
pueden omitirse si la herramienta no los necesita.

```js
class MiHerramienta {

  // ── Identidad ──────────────────────────────────────

  get id()    { return 'mi-herramienta'; }  // string único, kebab-case
  get label() { return 'Nombre visible';  }  // texto en la toolbar
  get icon()  { return '🔧';             }  // emoji o string

  // ── Tipo de herramienta ────────────────────────────
  //
  // 'overlay'   → se superpone visualmente sobre las tarjetas de evidencia
  //               (ej: luz UV, lupa, reactivo)
  // 'panel'     → abre un panel de UI independiente en el escritorio
  //               (ej: teléfono, ordenador, radio)
  // 'board'     → ocupa la superficie del escritorio completa
  //               (ej: tablero de conexiones, línea temporal)
  //
  get type() { return 'panel'; }

  // ── Ciclo de vida ─────────────────────────────────

  // Llamado cuando el jugador activa la herramienta.
  // ctx es el DeskContext (ver sección 3).
  activate(ctx) {
    this._ctx = ctx;
    // montar UI, añadir event listeners, etc.
  }

  // Llamado cuando el jugador desactiva la herramienta o cambia a otra.
  // Debe limpiar cualquier efecto visual o listener.
  deactivate() {
    this._ctx = null;
    // desmontar UI, quitar overlays, etc.
  }

  // [opcional] Render de UI propia (para type 'panel' o 'board').
  // container es un <div> limpio dedicado a esta herramienta.
  render(container) {}

  // [opcional] Llamado cuando el jugador interactúa con una tarjeta de evidencia
  // mientras esta herramienta está activa.
  // evidence = objeto de evidencia del caso.
  // Retorna true si la herramienta consumió la interacción (impide que se abra el modal).
  interactWithEvidence(evidence) { return false; }
}
```

---

## 3. DeskContext — Lo que las herramientas reciben

El `DeskContext` es el único canal entre una herramienta y el resto del sistema.
Las herramientas no tienen referencia directa al `UIController` ni al `GameEngine`.

```js
// Construido por DeskManager y pasado a tool.activate(ctx)
{
  // Lectura de datos del caso
  getEvidence()           // → array de evidencias
  getActiveSuspect()      // → sospechoso activo
  getSuspects()           // → todos los sospechosos

  // Superficie del escritorio (para herramientas tipo overlay/board)
  surface                 // → DOM element #desk-surface

  // Contenedor dedicado para la UI de la herramienta (para tipo panel)
  toolContainer           // → DOM element vacío, limpiado al desactivar

  // Notificar un descubrimiento al sistema
  // toolId     → id de esta herramienta
  // evidenceId → id de la evidencia sobre la que se descubrió (o null si es autónomo)
  // data       → objeto libre con lo que se descubrió (va al notebook y al engine)
  reportDiscovery(toolId, evidenceId, data)

  // Utilitario de escape HTML (el mismo _esc del UIController)
  esc(str)
}
```

`reportDiscovery` es el único efecto que una herramienta puede tener sobre el estado
del juego. Internamente, DeskManager lo transforma en una llamada a `GameEngine`.

---

## 4. Extensión del modelo de evidencia (caso01.js)

Cada evidencia puede declarar opcionalmente qué herramientas revelan algo sobre ella.
Si una herramienta no aparece en `toolData`, esa herramienta no tiene nada que revelar
en esa evidencia.

```js
{
  id: 'ev-copa',
  title: 'Copa de vino',
  icon: '🍷',
  type: 'fisica',
  shortDesc: 'Copa encontrada junto al cuerpo.',
  fullDesc: 'Copa de cristal con restos de vino tinto. Sin marcas visibles.',
  metadata: { fecha: '...', fuente: '...', ref: 'EV-003' },

  // NUEVO — datos para herramientas (totalmente opcional por evidencia)
  toolData: {
    'uv-light': {
      reveals: 'Huella dactilar parcial — dedo índice derecho',
      suspectId: 'suspect-b',        // opcional: vincula el hallazgo a un sospechoso
      contradictionId: 'c-02'        // opcional: este hallazgo puede disparar esta contradicción
    },
    'chemical-test': {
      reveals: 'Presencia de somníferos — Zolpidem 10mg',
      suspectId: null
    }
  }
}
```

Las herramientas leen `evidence.toolData[this.id]` para saber si tienen algo que mostrar.

---

## 5. Cambios mínimos en GameEngine

El engine necesita dos cosas nuevas:

**Estado:** un mapa de descubrimientos por herramienta.
```js
// En loadCase():
this.toolDiscoveries = {};
// estructura: { 'uv-light': Set(['ev-copa', 'ev-03']), ... }
```

**Método de acción:**
```js
useToolOnEvidence(toolId, evidenceId) {
  const evidence = this.caseData.evidence.find(e => e.id === evidenceId);
  const toolEntry = evidence?.toolData?.[toolId];

  if (!toolEntry) return { blocked: true, reason: 'nothingToFind' };

  if (!this.toolDiscoveries[toolId]) this.toolDiscoveries[toolId] = new Set();
  if (this.toolDiscoveries[toolId].has(evidenceId)) {
    return { blocked: true, reason: 'alreadyDiscovered' };
  }

  this.toolDiscoveries[toolId].add(evidenceId);

  this._addNote('tool', toolId, evidence.title, toolEntry.reveals);

  // Igual que con preguntas/evidencias — reutiliza el mismo mecanismo
  const contradiction = toolEntry.contradictionId
    ? this._checkContradictionById(toolEntry.contradictionId, toolEntry.suspectId)
    : null;

  return { blocked: false, reveals: toolEntry.reveals, contradiction };
}

isToolDiscovered(toolId, evidenceId) {
  return this.toolDiscoveries[toolId]?.has(evidenceId) ?? false;
}
```

El notebook ya soporta tipos arbitrarios (`type: 'tool'`), solo habría que añadir
la etiqueta en el mapa de `NotebookPanel`:
```js
// En NotebookPanel.refreshContent():
const typeLabel = {
  question:     'PREGUNTA',
  evidence:     'PRUEBA PRESENTADA',
  contradiction:'⚠ CONTRADICCIÓN',
  briefing:     '📋 EXPEDIENTE',
  tool:         '🔍 HALLAZGO'   // ← nuevo
}[n.type];
```

---

## 6. Evolución de DeskManager

DeskManager pasa de solo gestionar tarjetas a ser el **host de herramientas**.
Sus nuevas responsabilidades:

1. Renderizar una **toolbar** con las herramientas disponibles (leídas del registry o
   de la configuración del caso).
2. Mantener **cuál herramienta está activa** (`this._activeTool`).
3. Al activar una herramienta: construir el `DeskContext` y llamar `tool.activate(ctx)`.
4. Al desactivar: llamar `tool.deactivate()` y limpiar el `toolContainer`.
5. Al hacer click en una tarjeta: si hay herramienta activa, llamar primero a
   `tool.interactWithEvidence(evidence)`. Si retorna `true`, no abrir el modal.

```js
// Esquema de DeskManager refactorizado (no implementación final)

render() {
  // ... renderizar tarjetas como ahora ...
  this._renderToolbar();
}

_renderToolbar() {
  // Obtiene herramientas del registry (o de this.engine.getCase().availableTools)
  // Renderiza botones. Al hacer click → this._setActiveTool(tool)
}

_setActiveTool(tool) {
  if (this._activeTool) this._activeTool.deactivate();
  this._activeTool = tool;
  const ctx = this._buildContext();
  tool.activate(ctx);
}

_buildContext() {
  return {
    getEvidence:       () => this.engine.getEvidence(),
    getActiveSuspect:  () => this.engine.getActiveSuspect(),
    getSuspects:       () => this.engine.getSuspects(),
    surface:           this.root.querySelector('#desk-surface'),
    toolContainer:     this.root.querySelector('#tool-container'),
    esc:               (s) => this.ui._esc(s),
    reportDiscovery:   (toolId, evidenceId, data) =>
                         this._handleDiscovery(toolId, evidenceId, data)
  };
}

_handleDiscovery(toolId, evidenceId, data) {
  const result = this.engine.useToolOnEvidence(toolId, evidenceId);
  if (result.blocked) return;
  this.ui.notebook.updateBadge();
  if (result.contradiction) {
    this.ui._setSuspectMood('nervous', 0);
    setTimeout(() => this.ui.modals.showContradiction(result.contradiction), 600);
  }
}
```

---

## 7. Cómo añadir una herramienta nueva (checklist)

1. **Crear** `js/tools/MiHerramienta.js` implementando la interfaz de la sección 2.
2. **Autoregistrar** al final del archivo: `US.ToolRegistry.register(new US.MiHerramienta());`
3. **Añadir** `<script src="js/tools/MiHerramienta.js"></script>` en `index.html`
   (después de `ToolRegistry.js`, antes de los componentes).
4. **Declarar** en `toolData` de las evidencias relevantes qué revela la herramienta.
5. **Listo.** No hay que tocar GameEngine, UIController, DeskManager ni ningún otro archivo.

El caso puede opcionalmente declarar qué herramientas están disponibles:
```js
// En caso01.js
availableTools: ['uv-light', 'desk-phone']
// Si no se declara, se muestran todas las del registry.
```

---

## 8. Ejemplos concretos

### Luz Ultravioleta (`type: 'overlay'`)

Al activarse, añade una clase CSS al escritorio (`desk--uv-mode`) que cambia la
apariencia visual (filtro azulado). Al hacer hover o click sobre una tarjeta, si
`evidence.toolData['uv-light']` existe y no ha sido descubierto, muestra un overlay
animado con la huella y llama `ctx.reportDiscovery(...)`.

```js
US.UVLightTool = class UVLightTool {
  get id()    { return 'uv-light'; }
  get label() { return 'Luz UV'; }
  get icon()  { return '🔦'; }
  get type()  { return 'overlay'; }

  activate(ctx) {
    this._ctx = ctx;
    ctx.surface.classList.add('desk--uv-mode');
  }

  deactivate() {
    this._ctx?.surface.classList.remove('desk--uv-mode');
    this._ctx = null;
  }

  interactWithEvidence(evidence) {
    if (!evidence.toolData?.['uv-light']) return false;
    if (this._ctx.isToolDiscovered('uv-light', evidence.id)) return false;
    // mostrar overlay de huella, luego:
    this._ctx.reportDiscovery('uv-light', evidence.id, evidence.toolData['uv-light']);
    return true; // consumida — no abrir modal de evidencia
  }
};
US.ToolRegistry.register(new US.UVLightTool());
```

### Teléfono de sobremesa (`type: 'panel'`)

Al activarse, renderiza un panel con un teclado numérico en `ctx.toolContainer`.
El jugador marca un número. Si el número coincide con uno definido en los datos del caso,
se reproduce una "escucha" y se llama `reportDiscovery` con `evidenceId: null`
(el hallazgo no está ligado a una tarjeta física).

```js
// En caso01.js — sección de datos del teléfono
phone: {
  numbers: {
    '555-0142': {
      reveals: 'Llamada de 3 minutos a las 23:47 — la noche del crimen',
      suspectId: 'suspect-a',
      contradictionId: 'c-03'
    }
  }
}
```

```js
US.DeskPhoneTool = class DeskPhoneTool {
  get id()    { return 'desk-phone'; }
  get label() { return 'Teléfono'; }
  get icon()  { return '☎️'; }
  get type()  { return 'panel'; }

  activate(ctx) {
    this._ctx = ctx;
    this.render(ctx.toolContainer);
  }

  deactivate() {
    if (this._ctx) this._ctx.toolContainer.innerHTML = '';
    this._ctx = null;
  }

  render(container) {
    // Renderizar teclado numérico
    // Al confirmar número: buscar en this._ctx.getCase().phone.numbers[numero]
    // Si hay entrada → ctx.reportDiscovery('desk-phone', null, entry)
  }
};
US.ToolRegistry.register(new US.DeskPhoneTool());
```

---

## 9. Plan de despliegue por caso

Reparto efectivo de herramientas a lo largo del Modo Historia. La **motivación
narrativa** de cada herramienta y el porqué de su orden viven en
`HISTORIA-MODO-HISTORIA.md` (sección "Estructura de 3 actos" y casos del Acto I).

| Caso | Acto | Herramienta | Tipo | Notas |
|------|------|-------------|------|-------|
| 1 (Tutorial) | — | — | — | Sin herramientas. Solo interrogatorio + pruebas. |
| 2 | I | — | — | Mecánica narrativa nueva (pistas falsas) sin UI nueva. |
| 3 | I | `desk-phone` | panel | Número fragmentado entre pruebas; al reunirlo y marcarlo desbloquea audio o transcripción decisiva. |
| 4 | I (pivote) | — | — | Sin herramienta. Peso narrativo del cierre del Acto I. |
| 5 | II | `uv-light` | overlay | Sobre fotos antiguas y cartas; revela escritura tachada o huellas. |
| 6, 7 | II | (pendiente) | — | Por decidir tras retrospectiva del Acto I. |
| 8 | III (final) | TODAS | combinadas | `desk-phone` + `uv-light` (+ las que se hayan añadido) son **necesarias en combinación obligatoria**. Ver `HISTORIA-MODO-HISTORIA.md` sección "ACTO III". |

### Cruces con otros documentos
- **Palancas internas del interrogatorio** (red herrings, contradicciones cruzadas,
  presión, etc.) → `SISTEMA-DIFICULTAD.md`. Una herramienta de escritorio y una
  palanca interna pueden coexistir en el mismo caso (p.ej. caso 3 = teléfono +
  pruebas desbloqueables encadenadas).
- **Datos de la cena tras el caso** → `METAARCO-CENAS.md`. El uso del teléfono y
  qué se descubre con él alimenta `sinceridad` (alta si el detective se lo cuenta a
  Elena, baja si lo oculta).

---

## 10. Decisiones que quedan por tomar

Estas no tienen respuesta correcta ahora — dependen de qué herramientas se implementen:

- **¿Las herramientas tienen un "coste"** (como las preguntas tienen `pressureCost`)?
  Podría añadirse a la herramienta o al `toolData` de la evidencia.

- **¿Las herramientas se desbloquean** a medida que avanza la investigación,
  o están disponibles desde el principio?

- **¿Qué pasa con las contradicciones disparadas por herramientas?**
  El modelo actual de contradicciones usa `questionIds + evidenceId`. Habrá que
  decidir si las contradicciones de herramientas son un trigger adicional o un tipo nuevo.

- **¿El teléfono y similares** usan el mismo sistema de `toolData` por evidencia,
  o tienen su propia sección en los datos del caso (como en el ejemplo de arriba)?
  Para herramientas autónomas (sin evidencia física asociada), una sección propia
  en el caso parece más limpio.

# Under Suspicion — Registro de Cambios

> Documento de seguimiento de todos los cambios realizados en el proyecto.
> Cada entrada incluye fecha, descripción del cambio y archivos afectados.

---

## [v0.0.0] — Estado Inicial (Pre-desarrollo)

### Archivos existentes del prototipo
| Archivo | Descripción |
|---------|-------------|
| `index.html` | Punto de entrada HTML |
| `wireframe.html` | Documento de wireframes estáticos |
| `UML.md` | Diagrama de clases UML (Mermaid) |
| `css/game.css` | Estilos completos del juego (~1600 líneas) |
| `js/GameEngine.js` | Motor de juego: estado, lógica, eventos (~230 líneas) |
| `js/UIController.js` | Controlador de UI/DOM (~950 líneas) |
| `js/app.js` | Bootstrap del juego (~10 líneas) |
| `js/data/caso01.js` | Datos del Caso 01 "El Último Brindis" (~370 líneas) |

### Funcionalidades del prototipo
- Menú principal con botones (solo "Modo Historia" activo)
- Pantalla de intro del caso
- Vista split: mesa de pruebas (izq) + sala de interrogatorio (der)
- Tarjetas de evidencia arrastrables en la mesa
- Sistema de presión por sospechoso
- Preguntas por categoría (vínculo / coartada)
- Presentación de pruebas a sospechosos
- Detección de contradicciones con overlay animado
- Libreta del detective con notas automáticas
- Pantalla de resolución (quién, cómo, por qué)
- Pantalla de resultados con puntuación y rating
- Responsive: desktop, tablet, móvil

---

## [v0.2.0] — Subsistema Metaarco (Cenas con Elena) y Reescritura del Modo Historia — 2026-04-27

### Cambios narrativos
- **Modo Historia reescrito de cero.** Se descarta la trama de "La Red de Cristal /
  Grupo Fenix / El Relojero" (thriller político de conspiración) y se sustituye por
  una metaarco psicológica centrada en el pasado del detective y su mujer Elena.
- **Antagonista del juego = el propio detective.** Sin villano externo. Las víctimas
  de los 8 casos se conectan invisiblemente con su pasado.
- **8 casos diseñados al completo** en `HISTORIA-MODO-HISTORIA.md` con víctima,
  escena, sospechosos, pruebas, mecánica, resolución y función en la metaarco.
- **Dos finales del juego** decididos por los 4 ejes acumulados en las cenas, no
  por una puntuación tradicional. (Documentación interna; el detalle completo
  vive en `METAARCO-CENAS.md` sección 8.)
- **Estructura de 3 actos**: Acto I (casos 2-4), Acto II (casos 5-7), Acto III
  (caso 8). Diseño por actos para permitir retrospectiva entre ellos.

### Cambios en el subsistema de cena
- **Nuevo flujo**: `GameScreen → ResolutionScreen → DinnerScreen → MenuScreen`.
- **Retirada `ResultScreen`** (rangos S/A/B/C/F). El veredicto se comunica por
  boca de Elena.
- **4 ejes persistentes** en `localStorage` bajo `undersuspi.meta`:
  - `sinceridad` (0-100), `integridad` (0-100), `lucidez` (0-100), `memoria` (flags).
- **Banco global de preguntas/cierres** (`cenasGlobal.js`) compartido entre todos
  los casos, con anti-repetición de 3 capas y arco de tonos por número de caso.

### Archivos añadidos
- `js/screens/DinnerScreen.js` — Orquesta las dos fases de la cena.
- `js/components/DinnerPanel.js` — UI principal del diálogo.
- `js/components/DinnerTable.js` — Composición visual de la mesa.
- `js/components/MetaStore.js` — Persistencia de los 4 ejes y las flags.
- `js/data/cenasGlobal.js` — Banco compartido de ~25-30 preguntas meta y cierres.
- `css/screens/dinner.css` — Estilos de la pantalla de cena.
- `docs/METAARCO-CENAS.md` — Diseño completo del subsistema de cenas y el giro
  final del juego (contiene SPOILER).
- `docs/HISTORIA-MODO-HISTORIA.md` — Reescrito al completo con los 8 casos.
- `docs/IDEAS-HERRAMIENTAS.md` — Brainstorm previo + priorización post-decisión.
- `docs/TOOLS-ARCHITECTURE.md` — Arquitectura de plugins de herramientas y plan de
  despliegue por caso.

### Archivos modificados
- `index.html` — Carga de los nuevos scripts y CSS de la cena.
- `js/UIController.js` — Coordinación de `DinnerScreen` en lugar de `ResultScreen`.
- `js/GameEngine.js` — Hooks para volcar `_lastResult` a la cena.
- `js/data/caso01.js` — Bloque `cena` con `apertura`, `repasoPool`, `ganchoMemoria`.
- `js/screens/ResolutionScreen.js` — Transición a `DinnerScreen` al finalizar.
- `SOUL.md` — Sección nueva "Subsistema Metaarco" + estructura de archivos
  actualizada + flujo del juego con cena.
- `docs/SISTEMA-DIFICULTAD.md` — Tabla de progresión con doble columna (palanca
  interna + herramienta), numeración 1-8 (caso 1 = tutorial), ejemplo práctico
  reescrito alrededor del caso 2 (pistas falsas).

### Archivos eliminados
- `js/screens/ResultScreen.js` — Sustituido por `DinnerScreen`.
- `css/screens/result.css` — Sustituido por `dinner.css`.

### Decisiones de diseño documentadas
- Ciudad: **Madrid** (no ciudad ficticia).
- Detective: sin nombre en pantalla hasta el caso 8 (revelado: **Roberto Mora**).
  Apellido **Mora** sí es visible retroactivamente en pruebas de casos previos.
- Mujer del detective: **Elena Solana**, profesora de literatura, 38 años.
- Numeración de casos: **caso 1 = tutorial**, casos 2-8 = el resto.
- Sin conspiración política. Sin red criminal recurrente. Sin villano externo.

---

## [v0.1.2] — Selector de Variante de Retrato

### Cambios
- **Comparativa de assets**: Nuevo selector `RETRATO: FONDO / RECORTE` en la barra superior de juego
- **Persistencia local**: La variante elegida se guarda en `localStorage` para mantener la comparación entre recargas
- **Resolución flexible**: El render de retratos ahora acepta tanto una ruta simple como un objeto con variantes por mood
- **Fallback seguro**: Si la variante elegida no existe todavía en disco, el juego vuelve automáticamente al asset anterior del sospechoso
- **Hugo Delmar**: Su retrato neutral queda preparado para probar dos fuentes distintas sin fijar aún el formato definitivo

### Archivos afectados
| Archivo | Cambio |
|---------|--------|
| `js/UIController.js` | Toggle de variante, persistencia, resolución flexible y fallback de retratos |
| `js/screens/GameScreen.js` | Botón para alternar entre retrato con fondo y recorte |
| `js/data/caso01.js` | Hugo neutral preparado con `background`, `cutout` y `fallback` |
| `css/screens/game.css` | Ajustes visuales del botón y de las dos variantes de retrato |

### Convención provisional de assets
- `assets/img/suspects/hugo-neutral-background.png`
- `assets/img/suspects/hugo-neutral-removebg.png`
- Si faltan, se usa `assets/img/suspects/hugo-neutral.svg` como fallback

---

## [v0.1.1] — Sistema de Retratos con Moods

### Cambios
- **Retratos de sospechosos**: Cada personaje ahora tiene 3 estados visuales (neutral, hablando, nervioso)
- **Datos**: Añadido campo `portraits` a cada sospechoso en `caso01.js` con rutas a 3 imágenes
- **UIController**: Nuevo sistema `_suspectMood` + `_setSuspectMood(mood, duration)` que gestiona transiciones automáticas
- **Lógica de moods**:
  - `neutral` → estado por defecto, al cambiar sospechoso
  - `talking` → al responder preguntas o recibir evidencia (4s y vuelve a neutral)
  - `nervous` → al detectar contradicción o alcanzar presión máxima (permanece hasta dismiss)
- **CSS**: Efectos visuales por mood (filtros, animación de temblor para nervioso)
- **Fallback**: Si no hay imagen de retrato, se mantiene la silueta CSS original
- **9 SVG placeholders** creados como assets temporales en `assets/img/suspects/`

### Archivos afectados
| Archivo | Cambio |
|---------|--------|
| `js/data/caso01.js` | `portraits: {neutral, talking, nervous}` en cada sospechoso |
| `js/UIController.js` | `_suspectMood`, `_setSuspectMood()`, portrait con `<img>`, moods en handlers |
| `css/screens/game.css` | `.portrait__img`, filtros por mood, `@keyframes portrait-nervous` |
| `assets/img/suspects/*.svg` | 9 placeholders (3 personajes × 3 moods) |
| `SOUL.md` | Documentación del sistema de moods y convención de assets |

---

## [v0.1.0] — Reestructuración del Proyecto

### Cambios
- **Estructura de carpetas**: Reorganización completa del proyecto para escalabilidad
- **CSS modular**: `game.css` monolítico dividido en 11 archivos organizados por función
- **JS modular**: Pantallas extraídas de `UIController.js` a clases Screen independientes
- **UIController refactorizado**: Delega renderizado de pantallas a Screen classes, conserva lógica interna
- **Documentación**: wireframe.html movido a `docs/`

### Archivos añadidos
- `css/variables.css` — Custom properties (colores, tipografía, espaciado)
- `css/base.css` — Reset, tipografía, sistema de pantallas, scrollbar
- `css/animations.css` — Todos los @keyframes
- `css/responsive.css` — Media queries (≤900px, ≤600px, ≤400px)
- `css/components/buttons.css` — Variantes de `.btn`
- `css/components/modal.css` — Modal de evidencia
- `css/components/contradiction.css` — Overlay de contradicción
- `css/components/notebook.css` — Panel de libreta
- `css/screens/menu.css` — Pantalla de menú
- `css/screens/intro.css` — Pantalla de intro del caso
- `css/screens/game.css` — Pantalla de juego (desk + room)
- `css/screens/resolution.css` — Pantalla de resolución
- `css/screens/result.css` — Pantalla de resultados
- `js/screens/MenuScreen.js` — Clase US.MenuScreen
- `js/screens/IntroScreen.js` — Clase US.IntroScreen
- `js/screens/GameScreen.js` — Clase US.GameScreen
- `js/screens/ResolutionScreen.js` — Clase US.ResolutionScreen
- `js/screens/ResultScreen.js` — Clase US.ResultScreen
- `js/components/DeskManager.js` — Stub para futuro refactor del desk
- `js/components/NotebookPanel.js` — Stub para futuro refactor del notebook
- `js/components/ModalManager.js` — Stub para futuro refactor de modales
- `js/components/QuestionPanel.js` — Stub para futuro refactor de preguntas
- `docs/wireframe.html` — Wireframes (movido desde raíz)
- Directorios: `assets/img/`, `assets/audio/`, `assets/fonts/`

### Archivos modificados
- `index.html` — Referencias a 11 CSS modulares + 5 Screen JS + UIController + app.js
- `js/UIController.js` — Refactorizado: delega pantallas a Screen classes, conserva renderizado interno

### Notas
- `css/game.css` original se mantiene como respaldo (no referenciado en index.html)
- Las clases Component (DeskManager, NotebookPanel, etc.) son stubs preparados para Phase 2
- Las clases Screen replican exactamente la funcionalidad original

---

## [Diseño] — Herramientas de Mesa (Desk Tools)

> Mecánicas interactivas planificadas para la mesa del detective.
> Documentadas en SOUL.md con diseño completo y requisitos técnicos.

### Registradas
- **📞 Teléfono de mesa**: Marcar números que revelan sospechosos o testigos → info oculta, grabaciones, confirmaciones
- **🔦 Luz ultravioleta**: Revelar huellas, manchas, tinta invisible en las pruebas de la mesa
- **Patrón DeskTool**: Sistema genérico para registrar herramientas como componentes independientes

### Arquitectura prevista
- Carpetas: `js/components/tools/`, `css/components/tools/`
- GameEngine: método `useTool(toolId, params)` genérico
- DeskManager: registro de tools, modos de desk (normal/UV)
- Caso data: campos opcionales `phoneNumbers[]`, `uvContent` en evidence

---

<!-- PLANTILLA PARA NUEVAS ENTRADAS:

## [vX.X.X] — TÍTULO — YYYY-MM-DD

### Cambios
- Descripción del cambio 1
- Descripción del cambio 2

### Archivos añadidos
- `ruta/archivo.ext` — descripción

### Archivos modificados
- `ruta/archivo.ext` — qué se cambió

### Archivos eliminados
- `ruta/archivo.ext` — razón

-->

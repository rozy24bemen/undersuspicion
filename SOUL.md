# Under Suspicion — SOUL (System Of Underlying Logic)

> Archivo interno de referencia para el desarrollo. Contiene decisiones técnicas,
> contexto del proyecto y notas relevantes para mantener coherencia.

---

## Identidad del Proyecto

- **Nombre**: Under Suspicion
- **Tipo**: Juego de investigación detectivesca narrativo (web)
- **Visión**: Producto comercial — comenzó académico, objetivo final es venta
- **Equipo**: Aaron, David, Roman
- **Tech Stack**: Vanilla JS (ES6+), HTML5, CSS3 — Sin frameworks
- **Target**: Navegador web (desktop + responsive tablet/móvil)

---

## Arquitectura Actual (v0.1.0)

### Patrón
- Namespace global `US` (var US = US || {})
- Clases:
  - `US.GameEngine` — Lógica pura, sin DOM
  - `US.UIController` — Coordinador DOM, delega pantallas a Screen classes
  - `US.MenuScreen`, `US.IntroScreen`, `US.GameScreen`, `US.ResolutionScreen`, `US.ResultScreen`
  - Stubs: `US.DeskManager`, `US.NotebookPanel`, `US.ModalManager`, `US.QuestionPanel`
- Datos: `US.CASES['caso-01']`
- Bootstrap en `app.js` (IIFE)

### Estructura de archivos
```
index.html
css/
  variables.css, base.css, animations.css, responsive.css
  components/ buttons.css, modal.css, contradiction.css, notebook.css
  screens/ menu.css, intro.css, game.css, resolution.css, result.css
js/
  GameEngine.js, UIController.js, app.js
  screens/ MenuScreen.js, IntroScreen.js, GameScreen.js, ResolutionScreen.js, ResultScreen.js
  components/ DeskManager.js, NotebookPanel.js, ModalManager.js, QuestionPanel.js (stubs)
  data/ caso01.js
```

### Flujo de delegación
- UIController.showScreen(name) → _screens[name].render(container)
- Screen classes reciben `uiController` en constructor, acceden via `this.ui` y `this.engine`
- UIController mantiene: desk rendering, room rendering, modales, contradicciones, notebook, action handlers, _esc()

### GameEngine (lógica pura, sin DOM)

### UIController (coordinador DOM — refactorizado v0.1.0)
- Delega renderizado de cada pantalla a su Screen class
- Mantiene internamente: _renderDesk, _renderRoom, _renderPressureBar, _renderPortrait,
  _renderQuestionPanel, _showEvidenceModal, _showContradiction, _renderNotebookPanel
- Mantiene action handlers: _handleAskQuestion, _handlePresentEvidence
- Los stubs de Component se activarán en futuras fases
- Event emitter propio (on/emit)
- Estado runtime: `suspectState`, `askedQuestions`, `presentedEvidence`, `detectedContradictions`, `notebook`
- Presión: 0-100 por sospechoso, bloquea a 100
- Sospecha: acumulativa por contradicciones detectadas
- Contradicciones: se activan cuando pregunta + evidencia relevante ya presentadas
- Resolución: quién + cómo + por qué, scoring con bonus por contradicciones

### Datos de Caso (caso01.js)
- Estructura: victim, scene, suspects[], evidence[], contradictions[], solution
- 3 sospechosos: Marta (inocente), Lucía (inocente), Hugo (culpable)
- 8 evidencias con metadata
- 4 contradicciones (3 de Hugo, 1 red herring de Lucía)
- Categorías de preguntas: vinculo (3), coartada (3) por sospechoso
- evidenceResponses: 8 respuestas por sospechoso
- **portraits**: objeto con 3 moods (`neutral`, `talking`, `nervous`) → rutas a imágenes

### Sistema de Retratos con Moods (v0.1.1)

Cada sospechoso tiene 3 estados visuales:

| Mood | Cuándo se activa | Duración | Efecto CSS |
|------|-----------------|----------|------------|
| `neutral` | Estado por defecto, al cambiar de sospechoso, al cerrar contradicción | Permanente | `grayscale(30%) brightness(0.9)` |
| `talking` | Al responder pregunta o al presentar evidencia | 4 segundos → vuelve a neutral | `grayscale(10%) brightness(1.0)` |
| `nervous` | Al detectar contradicción, al alcanzar maxPressure | Hasta que se cierre la contradicción | `sepia(20%) brightness(0.85)` + temblor |

**Estructura de datos en suspect:**
```js
portraits: {
  neutral:  'assets/img/suspects/nombre-neutral.svg',  // o .webp/.png
  talking:  'assets/img/suspects/nombre-talking.svg',
  nervous:  'assets/img/suspects/nombre-nervous.svg'
}
```

**Convención de nombres de archivo:**
```
assets/img/suspects/{suspect-id}-{mood}.{ext}
```
Ejemplo: `hugo-nervous.svg`, `marta-talking.webp`

**Fallback:** Si `suspect.portraits` no existe, se usa la silueta CSS original.

**Para futuros casos:** Solo necesitas 3 imágenes por sospechoso siguiendo esta convención.

---

## Convenciones de Código

- Strings con comillas simples en JS
- Clases CSS con BEM-like: bloque__elemento--modificador
- Variables CSS en :root
- Fuente: Courier New (estética criminal/detectivesca)
- Paleta: oscura con acentos gold, red, blue
- Sin semicolons al final en ES6 classes (el código actual SÍ usa semicolons)
- Template literals para HTML generado en UIController
- `_esc()` para sanitizar strings en HTML (XSS protection)

---

## Decisiones Técnicas

| Decisión | Razón |
|----------|-------|
| Sin framework (React, Vue, etc.) | Proyecto académico, aprendizaje puro |
| Sin bundler (Webpack, Vite, etc.) | Simplicidad, scripts directos en HTML |
| Namespace US en vez de ES modules | Compatibilidad con carga por `<script>` tags |
| Evento emitter propio | Sin dependencias externas |
| Datos del caso como JS object literal | Fácil de editar, sin necesidad de fetch/JSON |

---

## Flujo del Juego

```
MENÚ → [Modo Historia] → INTRO CASO → [Abrir Expediente]
  → GAME (interrogar / examinar pruebas / detectar contradicciones)
  → RESOLUCIÓN (acusar: quién + cómo + por qué)
  → RESULTADO (puntuación + rating S/A/B/C/F)
  → MENÚ
```

---

## Notas para Desarrollo

- El wireframe.html es solo documentación visual, no se usa en producción
- UML.md es documentación, no se usa en runtime
- El juego funciona completo como prototipo single-case
- La estructura actual es plana y no escala bien para múltiples casos
- Los sospechosos no tienen imágenes reales (placeholder siluetas CSS)
- No hay sistema de guardado/progreso
- No hay audio/SFX
- No hay animaciones de transición entre pantallas (solo display toggle)
- El modo "Sin Fin" y "Configuración" están deshabilitados (btn--disabled)

---

## Herramientas de Mesa (Desk Tools)

> Filosofía: la mesa del detective no es solo un almacén de pruebas — es un escritorio
> interactivo con herramientas físicas que el jugador usa activamente. Estas mecánicas
> son el core diferenciador del juego y deben pensarse desde la arquitectura.

### 🔧 Patrón DeskTool
Cada herramienta de mesa será un **componente independiente** que:
- Vive en `js/components/tools/` con su propia clase (`US.PhoneTool`, `US.UVLightTool`, etc.)
- Tiene su CSS en `css/components/tools/`
- Se registra en DeskManager como un tool interactuable en la superficie del desk
- Define su propia interfaz de interacción (modal, overlay o inline)
- Se conecta a GameEngine para lógica (validar números, revelar pistas, etc.)

### 📞 Teléfono de Mesa
- **Concepto**: Teléfono clásico de escritorio en la mesa del detective
- **Mecánica**: Algunos sospechosos o pruebas revelan números de teléfono. El jugador
  debe recordarlos (o anotarlos en la libreta) y marcarlos en el teléfono para desbloquear
  información oculta: testimonios de terceros, grabaciones, confirmaciones de coartadas, etc.
- **UI**: Clic en el teléfono → modal/overlay con dial numérico rotatorio o de teclas.
  El jugador introduce el número manualmente. Feedback sonoro (tono de marcado, timbrado, voz).
- **Datos en caso**: `phoneNumbers[]` en el objeto del caso, cada entrada con:
  `number`, `source` (quién/qué lo reveló), `unlockCondition`, `response` (audio/texto),
  `gameplay effect` (desbloquea pregunta, añade nota, revela contradicción, etc.)
- **Implicación arquitectónica**:
  - GameEngine necesita: `dialNumber(number)` → validar, emitir resultado
  - DeskManager: registrar PhoneTool como elemento interactuable
  - NotebookPanel: anotar automáticamente números descubiertos
  - Caso data: añadir campo `phoneNumbers` al schema

### 🔦 Luz Ultravioleta (UV)
- **Concepto**: Lámpara UV portátil que revela información oculta en las pruebas
- **Mecánica**: Al activar la luz UV y "apuntarla" a ciertas evidencias en la mesa,
  se revelan detalles invisibles: huellas dactilares, manchas de sangre, tinta invisible,
  marcas en documentos, etc. No todas las pruebas tienen contenido UV — el jugador
  debe experimentar.
- **UI**: Botón/toggle de UV en la mesa → cambia el modo visual del desk (filtro morado,
  efecto glow). Al pasar por encima de una evidencia con contenido UV, se revela una
  capa oculta con animación de aparición. Clic muestra el detalle completo UV.
- **Datos en caso**: Campo opcional `uvContent` en cada evidence:
  `{ revealed: false, description, image, gameplayEffect }`
- **Implicación arquitectónica**:
  - GameEngine: `revealUV(evidenceId)` → marcar como revelado, emitir evento
  - DeskManager: modo UV (toggle visual), detección de hover/clic sobre cartas con UV
  - Evidence schema: añadir campo opcional `uvContent`
  - CSS: filtro/overlay UV (hue morado, glow en elementos revelables)

### 🔍 Lupa de Aumento *(propuesta Claude)*
- **Concepto**: Lupa física que el jugador arrastra sobre fotos, documentos o evidencias
- **Mecánica**: Algunas evidencias tienen detalles ocultos que solo se ven al ampliar:
  un número de serie en un arma, una firma falsificada, una cara reflejada en un cristal,
  texto borroso en un recibo. El jugador arrastra la lupa sobre la imagen y la zona
  ampliada revela el detalle. Gamificación: el jugador descubre pistas por su propia
  observación, no se las dan hechas.
- **UI**: Cursor circular con efecto lente (zoom 2-3x dentro del círculo). Arrastrar
  por la imagen de la evidencia ampliada. Al pasar sobre una zona de interés, highlight
  sutil + clic para "registrar hallazgo".
- **Datos en caso**: Campo `zoomDetails[]` en evidence:
  `{ x, y, radius, description, gameplayEffect }`

### 🧪 Kit Forense (Huellas Dactilares) *(propuesta Claude)*
- **Concepto**: Maletín con polvo de huellas y fichas de comparación
- **Mecánica**: El jugador "espolvorea" ciertas evidencias físicas (vaso, arma, puerta)
  para revelar huellas. Luego compara con un fichero de huellas de los sospechosos.
  Si coincide → nota en libreta + posible nueva línea de interrogatorio.
  Mini-puzzle: comparar patrones (espirales, arcos, lazos) visualmente.
- **UI**: Animación de polvos apareciendo sobre la evidencia. Modal de comparación
  con dos huellas lado a lado. Botón "COINCIDE" / "NO COINCIDE" (con penalización
  por fallos para evitar brute-force).
- **Datos en caso**: `fingerprints[]` en evidence, `fingerprintProfile` en suspects

### 🎬 Grabadora de Interrogatorio *(propuesta Claude)*
- **Concepto**: Dictáfono vintage en la mesa que graba las declaraciones clave
- **Mecánica**: Registra automáticamente las respuestas más importantes de cada
  sospechoso. El jugador puede reproducir declaraciones anteriores y COMPARARLAS
  entre sí o contra evidencias para detectar inconsistencias por su cuenta
  (en vez de que el sistema le diga que hay contradicción).
- **Modo avanzado**: Ciertas contradicciones no se autodetectan — el jugador debe
  seleccionar dos grabaciones o una grabación + evidencia y pulsar "CONFRONTAR".
  Esto añade una capa de deducción activa.
- **UI**: Reproductor con botones play/stop, lista de grabaciones por sospechoso,
  función "CONFRONTAR" que abre split-view para comparar.
- **Datos en caso**: `recordable: true` en preguntas clave, `manualContradictions[]`
  que requieren que el jugador las encuentre activamente

### 🗺️ Tablón de Investigación (Conspiracy Board) *(propuesta Claude)*
- **Concepto**: Corcho en la pared con fotos, hilos rojos y chinchetas
- **Mecánica**: El jugador arrastra tarjetas (sospechosos, evidencias, lugares, horarios)
  al tablón y las conecta con hilos de colores. No tiene efecto mecánico directo —
  es una herramienta de organización mental para el jugador. PERO: al resolver el caso,
  si el tablón conecta correctamente al culpable con el motivo y el método,
  se otorga una bonificación de puntuación ("Investigación Metódica").
- **UI**: Canvas libre donde las tarjetas se posicionan con drag. Líneas SVG entre
  nodos. Colores de hilo seleccionables. Zoom/scroll del tablón.
- **Datos en caso**: `boardSolution{}` con las conexiones correctas esperadas,
  para calcular bonus. No se valida en tiempo real, solo al final.

### ⏰ Timeline / Línea Temporal *(propuesta Claude)*
- **Concepto**: Eje temporal horizontal donde colocar eventos
- **Mecánica**: A medida que interrogas y descubres información, aparecen marcas
  temporales. El jugador puede reordenarlas. Ciertas combinaciones revelan
  imposibilidades ("X dice que estuvo en Y a las 20:00 pero Z le vio en W a las 20:15
  y están a 1 hora de distancia"). Detectar estas imposibilidades = encontrar mentiras.
- **UI**: Eje arrastraDle con bloques de tiempo. Drag & drop eventos sobre el eje.
  Alertas cuando dos eventos son físicamente incompatibles.
- **Datos en caso**: `timelineEvents[]` con `time`, `source`, `location`, `conflictsWith[]`

### 📰 Archivo de Prensa / Terminal *(propuesta Claude)*
- **Concepto**: Ordenador retro o archivador con recortes de periódico/informes
- **Mecánica**: El jugador busca por palabras clave (nombre, lugar, fecha) y encuentra
  artículos y registros que dan contexto histórico. Un sospechoso mencionó que "nunca
  tuvo problemas con la ley" → busca su nombre → aparece un artículo sobre un
  arresto previo. Sistema de búsqueda simple con resultados predefinidos.
- **UI**: Terminal con prompt de búsqueda estilo DOS/retro. Resultados como
  fichas de periódico con tipografía antigua.
- **Datos en caso**: `archiveEntries[]` con `keywords[]`, `content`, `gameplayEffect`

### 📧 Buzón / Mensajería (eventos temporales) *(propuesta Claude)*
- **Concepto**: Sobre que aparece en la mesa con información nueva durante el caso
- **Mecánica**: Según avanza la investigación (preguntas hechas, pruebas presentadas),
  llegan mensajes al desk: anónimos, resultados de laboratorio, avisos de compañeros.
  Simula que el mundo reacciona a las acciones del jugador.
  Pueden contenener pistas falsas (red herrings) para aumentar la tensión.
- **UI**: Animación de sobre apareciendo en esquina de la mesa. Clic para abrir.
  Notificación badge como la libreta.
- **Datos en caso**: `messages[]` con `trigger` (condición), `from`, `content`, `gameplayEffect`

---

## Implicaciones Arquitectónicas (Desk Tools)

Para soportar las herramientas de mesa sin deuda técnica:

| Componente | Cambio necesario |
|------------|------------------|
| `GameEngine` | Sistema de tools genérico: `useTool(toolId, params)` → resultado |
| `DeskManager` | Registro de tools, toggle de modos (normal/UV), posicionamiento |
| Caso data schema | Campos opcionales: `phoneNumbers[]`, `uvContent`, `zoomDetails[]`, `fingerprints[]`, `timelineEvents[]`, `archiveEntries[]`, `messages[]` |
| `NotebookPanel` | Auto-anotar descubrimientos de herramientas |
| CSS | Modo UV (filtro visual), canvas tablón, timeline, terminal retro, estilos per-tool |
| Carpetas | `js/components/tools/`, `css/components/tools/` |
| Preguntas schema | Campo `recordable` para grabadora, `manualContradictions[]` |
| Suspects schema | Campo `fingerprintProfile` para kit forense |

---

## TODO Futuro (Ideas registradas)

### Core gameplay
- [ ] 📞 Teléfono de mesa (marcar números para info oculta)
- [ ] 🔦 Luz ultravioleta (revelar huellas/detalles en pruebas)
- [ ] 🔧 Sistema DeskTool genérico (base para todas las herramientas)
- [ ] Múltiples casos con selección

### Assets & Polish
- [ ] Imágenes reales para sospechosos y evidencias
- [ ] Audio ambiente + SFX (tonos teléfono, UV buzz, etc.)
- [ ] Animaciones de transición entre pantallas
- [ ] Tutorial/onboarding para nuevos jugadores

### Sistemas
- [ ] Sistema de guardado (localStorage)
- [ ] Modo sin fin (casos procedurales o aleatorios)
- [ ] Configuración (audio, dificultad, idioma)

### Herramientas de mesa *(propuestas Claude)*
- [ ] 🔍 Lupa de aumento (zoom interactivo, descubrir detalles ocultos)
- [ ] 🧪 Kit forense de huellas (espolvorear + comparar patrones)
- [ ] 🎬 Grabadora de interrogatorio (reproducir y confrontar declaraciones)
- [ ] 🗺️ Tablón de investigación (conspiracy board con hilos rojos)
- [ ] ⏰ Timeline / línea temporal (detectar imposibilidades horarias)
- [ ] 📰 Archivo de prensa / terminal retro (buscar antecedentes)
- [ ] 📧 Buzón de mensajes (eventos reactivos durante el caso)

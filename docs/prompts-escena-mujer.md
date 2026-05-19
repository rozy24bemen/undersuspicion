# Prompts — Escena de la mujer (lado izquierdo de la cena)

> Doc de propuesta para sustituir el lado izquierdo de la cena (la "mesa de
> casa") por algo con peso narrativo. Hoy es una mesa dibujada en CSS
> (`.dinner-table__plate`, `.dinner-table__candle`, etc.) con objetos
> drag-and-drop decorativos sin gameplay ([DinnerTable.js:5](../js/components/DinnerTable.js#L5)
> lo deja claro: *"los objetos son decorativos por ahora, se pondrán
> assets más tarde"*). Este documento es ese **"más tarde"**.
>
> El doc tiene **dos ideas** con filosofías opuestas:
> - **Idea 1** (sección 1-8): 4 ilustraciones que EVOLUCIONAN por
>   caso. La mesa se va degradando. Cambio explícito como termómetro.
> - **Idea 2** (sección 9): UNA ilustración que se repite IGUAL en
>   los 8 casos. La repetición misma es el spoiler — solo cuando se
>   revela el lore del C8 el jugador entiende lo que llevaba 7 cenas
>   mirando.
>
> Elegir UNA. No se mezclan — el doc lista las dos para decidir.

---

## 1 · Diagnóstico

### Lo que hay ahora

- `.dinner-table` ocupa el 50% izquierdo del split de la cena.
- Vista cenital (top-down) sobre un degradado marrón con un par de
  formas CSS: vela, plato con comida, copa de vino, tenedor, cuchillo.
- Cinco objetos arrastrables (`<div class="dinner-item">`) que el jugador
  puede mover por la "mesa". No tienen efecto gameplay.
- Label "MESA DE CASA" en la parte inferior.

### Por qué se queda corto

1. **Es la única pantalla del juego donde la izquierda es CSS plano**.
   El comedor de la derecha (Escenario_Comedor + Elena nobg) es
   cinematográfico; el lado izquierdo a su lado parece un placeholder.
2. **Pierde un beat narrativo de oro**: la cena es la única vez por
   caso que el detective se sienta y mira lo que tiene delante. Lo que
   ve en su lado de la mesa **es un reflejo de su estado interior**
   (alcoholismo en aumento, papeles del caso colándose en la cena,
   anillo de boda que aprieta menos, cigarrillos donde antes no había).
3. **El spoiler estructural pide presencia visual**: Elena lleva 3 años
   muerta y el detective sirve siempre dos copas. Ese detalle solo
   tiene fuerza si el lado izquierdo lo MUESTRA — hoy no se ve nada de
   eso, está oculto en CSS.
4. **Continuidad rota con el resto del juego**: la mesa de pruebas
   (`.desk`) en GameScreen también ocupa el 50% izquierdo y tiene
   look propio (papel + cards). La de la cena debería tener equivalente.

---

## 2 · Diseño propuesto

### Concepto: "la mesa del detective"

El lado izquierdo deja de ser una vista cenital genérica y pasa a ser
**la mesa vista desde su POV** — es decir, ÉL al otro lado, viendo su
propio plato y sus propias manos. Top-down ligeramente angulado
(picado, ~70°) para preservar el feel editorial del juego (las
pruebas son flat-lay puro, esto añade un poco de tridimensionalidad
sin pasarse).

**La mesa cambia en cada arco** reflejando su estado:

| Arco | Tono(s) | Estado de la mesa |
|---|---|---|
| Casos 1-2 | `casual` | Plato caliente, servilleta doblada, copa servida normal, mano relajada con la alianza brillante visible |
| Casos 3-5 | `casual` + `preocupada` | Plato a medio comer, ceniza en el borde del cenicero (no fumaba), papeles de caso doblados en una esquina, anillo "girado" en su dedo |
| Casos 6-7 | `preocupada` + `confrontacional` | Plato intacto, comida fría, copa vacía, botella de licor de Cadaqués mediada, chupito al lado, servilleta arrugada |
| Caso 8 | `confrontacional` | **Dos** copas idénticas servidas (lore: una para Elena, una para él), botella vacía, plato olvidado, mano apoyada con los nudillos blancos. Es la imagen-clave del spoiler |

**Detalle continuo**: la **mano del detective** entra ligeramente desde
el borde inferior del frame en las cuatro versiones, anclando que
estamos viendo su POV. Misma mano, mismo reloj de cuerda, misma alianza
— pero la postura y la tensión cambian (relajada → fidget → tensa →
inerte/ceremonial). Es la única "presencia" visible del detective en
el lado izquierdo, y por eso funciona como termómetro de su deterioro
sin necesidad de poner su cara.

### Finales del Caso 8 (opcional, polish)

Si se quiere ir un paso más allá, dos variantes para los endings:
- **Mesa-Despedida** (final bueno): plano final con UNA copa (la de
  Elena se ha "evaporado" según el lore). Mano del detective todavía
  en la mesa. Calma.
- **Mesa-Ausente** (final malo): mesa volcada/ladeada, copa caída.
  Refuerza la cinemática del final malo.

Pero estos dos son opcionales — `Mesa-FinalC8.png` ya cubre la
narrativa principal.

### Aspecto y proporción

- **Aspect ratio**: cuadrado (1:1) o ligeramente vertical (4:5). El
  slot izquierdo es 50% del ancho × 100% del alto, así que un 1:1
  encaja con `background-size: cover` recortando los lados sin perder
  el centro (la mesa).
- **Estilo**: digital oil painting Disco Elysium (mismo que las
  pruebas y los escenarios — coherencia total con `style-bible.json`).
- **Mismo encuadre exacto** en los 4 assets: misma posición de mesa,
  misma altura de cámara, mismas dimensiones de plato y copa. Lo que
  cambia es el CONTENIDO sobre la mesa, no la perspectiva. Esto es
  CRÍTICO — si la cámara baila entre estados, se rompe la sensación
  de cronología sobre la misma mesa.

### Eliminar / mantener interacción

Los objetos arrastrables (`.dinner-item`) eran un placeholder. Mi
recomendación:
- **Eliminar el drag-and-drop** (DinnerTable.js + clases CSS de los
  items). No aporta gameplay y compite visualmente con la nueva
  ilustración.
- **Conservar la animación de la vela parpadeando** (`@keyframes
  dinner-flicker` en `dinner.css`) por encima de la ilustración como
  un único elemento decorativo (con `mix-blend-mode: screen` o un
  pequeño glow CSS sobre la posición de la vela en el cuadro).
- **Label "MESA DE CASA"** se puede quitar (la ilustración habla por
  sí sola) o mover a esquina inferior con tipografía más pequeña.

---

## 3 · Naming canónico

Sigo la convención de los otros escenarios (`Escenario_Comedor.png`,
`Escenario-Recibidor.png`):

```
assets/img/scenes/Mesa_Cena_Tutorial.png         (casos 1-2)
assets/img/scenes/Mesa_Cena_Preocupada.png       (casos 3-5)
assets/img/scenes/Mesa_Cena_Confrontacional.png  (casos 6-7)
assets/img/scenes/Mesa_Cena_FinalC8.png          (caso 8)

# Opcionales (polish endings)
assets/img/scenes/Mesa_Cena_Despedida.png        (caso 8 final bueno A)
assets/img/scenes/Mesa_Cena_Ausente.png          (caso 8 finales malos B/C/D)
```

Todos en `assets/img/scenes/` (no en `suspects/`, porque no son retratos
de sospechoso; son escenografía como `Escenario_Comedor.png`).

---

## 4 · Style guide compartida

Copiar este bloque dentro de cada prompt para garantizar consistencia.

```
Top-down still life of a dinner table viewed from the detective's POV,
slight high-angle (about 70 degrees, not pure flat-lay), square 1:1
aspect ratio.

Art style: digital oil painting illustration, semi-realistic stylized
prop / scene art for a noir detective adventure game (Disco Elysium
tradition). Soft painterly brush strokes, smooth volumetric rendered
shading, visible texture of digital oil paint. NOT cel-shading, NOT
flat colors, NOT anime, NOT 3D render, NOT photorealistic.

Background: dark wooden dining table surface filling the entire frame,
warm chestnut grain, slightly worn. NO walls visible, NO chairs, NO
person body — only the table top and what is on it.

Lighting: single warm candle light from the upper third of the frame
(matching Escenario_Comedor.png), creating soft warm highlights on
crockery and a long shadow toward the bottom of the frame. Ambient
amber fill from the right side (the dining room lamp). NO cold light,
NO daylight.

Mood: lived-in domesticity, intimate, slightly sad. NOT party setting,
NOT formal restaurant, NOT fancy. The home of a couple who eats here
every night.

Composition: the table fills the frame. At the bottom edge of the
frame, ENTERING the composition: ONLY the right hand of a 45-year-old
Spanish man (the detective Roberto Mora), wrist with a vintage
mechanical wristwatch on a brown leather strap, plain gold wedding
band on the ring finger. The hand state varies per pose — see each
prompt. NO face, NO arm above the wrist, NO body, NO second hand.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic,
3D render, children cartoon, deformed, text, watermark, logos,
brand labels, modern technology, smartphones, laptops, flat screens,
party setting, restaurant setting, fancy china, gold cutlery, daylight,
fluorescent lighting, blue cold light, multiple people, two hands,
arm visible above the wrist, full body, face, ghost, supernatural,
gore, blood, multiple tables, kitchen scene, walls visible.
```

---

## 5 · Assets a generar

### 5.1 · Mesa-Tutorial (casos 1-2)

**Archivo**: `Mesa_Cena_Tutorial.png`  
**Aparece en**: cenas del Caso 1 ("El último brindis") y Caso 2 ("Sin sangre").  
**Tono Elena al otro lado**: `casual` (cálida).

> Esta es la versión "feliz" — la mesa que el detective recuerda. El
> jugador todavía no sabe nada del spoiler. La cena es lo que debería
> ser: un hombre cansado del turno que llega a casa y su esposa le
> ha calentado la cena.

```
[BLOQUE DE STYLE GUIDE — pegar arriba]

On the table (specific to this version):
- A ceramic dinner plate centered slightly to the left, with a warm
  meal painterly-rendered (suggestion of stewed meat, vegetables,
  a small piece of bread on the side). Steam suggested as faint
  warm wisps rising from the plate.
- A red wine glass to the right of the plate, served two-thirds full
  with deep ruby wine.
- A folded cream cloth napkin neatly to the left of the plate.
- A silver fork and knife placed parallel above the plate, properly
  arranged as in a domestic setting.
- A short white taper candle in a small brass holder at the upper-
  centre of the frame, lit, flame painterly with warm bloom.
- A salt cellar of dark ceramic at the upper-right edge.

Hand state (bottom edge): the right hand resting flat-open on the
table, palm down, fingers relaxed and spread comfortably. The
wedding band catches the candle light. The wristwatch tells about
9:30 PM (small detail, painterly — hands not crisply readable).

Mood: warm domestic intimacy, the calm of returning home. Slightly
bittersweet but mostly content.

NEGATIVE (adicional a la base): cold food, half-eaten meal, ash,
cigarettes, empty glass, second glass, broken glass, papers on
table, mess.
```

---

### 5.2 · Mesa-Preocupada (casos 3-5)

**Archivo**: `Mesa_Cena_Preocupada.png`  
**Aparece en**: cenas del Caso 3 ("El número equivocado"), Caso 4 ("La
piedra rota") y Caso 5 ("El cajón").  
**Tono Elena al otro lado**: `casual` + `preocupada` (mezcla).

> Las grietas empiezan a verse. El detective no ha terminado el plato,
> ha empezado a fumar otra vez (algo que dejó hace años), y los
> papeles del caso de hoy han migrado a la mesa de la cena porque su
> cabeza no se desconecta. Elena lo nota.

```
[BLOQUE DE STYLE GUIDE — pegar arriba]

On the table (specific to this version):
- The same ceramic dinner plate, but now HALF-EATEN: about 40% of
  the food remains, scattered slightly, fork lying askew across the
  rim of the plate.
- The wine glass now THREE-QUARTERS empty, with a faint lipstick-
  less mark on the rim (his) and a slight wine residue at the bottom.
- A small ceramic saucer at the upper-right with a HALF-SMOKED
  CIGARETTE balanced on its edge, a thin trail of smoke painterly-
  rendered rising up. Ashes visible on the saucer.
- The candle has burned down a third — wax dripping painterly down
  the brass holder.
- The folded napkin is now CRUMPLED, pushed slightly aside.
- At the lower-left corner of the table, partially in frame: TWO or
  THREE sheets of CASE PAPERS folded loosely, edges slightly stained
  with wine. NO readable text on the papers — just illegible
  painterly typing.

Hand state (bottom edge): the right hand visible but tighter — the
fingers slightly curled toward the palm, the wedding band has been
TWISTED on the ring finger (sitting at a different angle, suggesting
he has been fidgeting with it). The wristwatch reads about 10:15 PM.

Mood: domestic intimacy strained. Slightly stale air. The dinner
that was supposed to be a respite is now contaminated by work.

NEGATIVE (adicional a la base): fresh hot food, full glass, no ash,
no cigarette, no papers, party mood, joyful expression.
```

---

### 5.3 · Mesa-Confrontacional (casos 6-7)

**Archivo**: `Mesa_Cena_Confrontacional.png`  
**Aparece en**: cenas del Caso 6 ("Estudio Caracedo") y Caso 7 ("El
sótano").  
**Tono Elena al otro lado**: `preocupada` + `confrontacional`.

> El detective ya no cena. El plato lleva ahí desde hace media hora.
> Lo que importa ahora es la botella de licor de Cadaqués que
> aparecía en los recuerdos de Elena y los casos. Una copa de chupito
> está al lado. Elena lo ha encontrado, se lo va a echar en cara.

```
[BLOQUE DE STYLE GUIDE — pegar arriba]

On the table (specific to this version):
- The ceramic dinner plate UNTOUCHED — same food as in Tutorial but
  visibly cold (no steam, slightly darker tones, fat congealed
  painterly on the surface).
- The red wine glass COMPLETELY EMPTY, slight residue ring at the
  bottom.
- A short, square-shouldered LIQUEUR BOTTLE in dark green glass
  (Cadaqués-style herbal liqueur, no readable label) placed to the
  right of the wine glass. The bottle is HALF EMPTY, cork resting
  beside it on the table.
- A small shot glass (vaso de chupito) on the table near the bottle,
  with about a finger of amber liqueur in it.
- The candle has burned VERY LOW — about an inch left, wax pooled
  thick around the brass holder.
- The napkin is CRUMPLED INTO A LOOSE BALL at the side of the plate.
- Fork and knife abandoned at angles, one on the plate, one off.

Hand state (bottom edge): the right hand visible HOLDING the shot
glass, fingers tight around it (knuckles slightly whitened
painterly). Wedding band visible but the hand position is tense.
The wristwatch reads about 11 PM.

Mood: domestic intimacy fractured. The room still warm but the
table itself has become a small island of denial. No more pretense
of dinner.

NEGATIVE (adicional a la base): full plate eaten warmly, full wine
glass, no liqueur, no shot glass, brightly lit, party setting.
```

---

### 5.4 · Mesa-FinalC8 (caso 8)

**Archivo**: `Mesa_Cena_FinalC8.png`  
**Aparece en**: cena del Caso 8 (durante la fase de cena, antes del
ending block).  
**Tono Elena al otro lado**: `confrontacional`.

> **La imagen clave del spoiler estructural**. Las dos copas idénticas
> servidas con el mismo vino del mismo lote, una con huellas viejas
> de Elena (2023) y otra con huellas frescas del detective. Esta es
> la prueba forense del Caso 8 ([caso08.js:351-358](../js/data/caso08.js#L351-L358))
> traducida a la imagen de la cena. Si el jugador conecta los puntos,
> entiende el final antes de que se le diga.

```
[BLOQUE DE STYLE GUIDE — pegar arriba]

On the table (specific to this version — CRITICAL identity continuity
with the previous Mesa images, same table, same camera, same light):
- TWO IDENTICAL red wine glasses, side by side, each FILLED two-
  thirds with the SAME deep ruby wine. The two glasses are
  positioned where one usually would be (around the right of the
  plate). They almost touch at the stems but do not. This is the
  visual heart of the image.
- The dinner plate has been REMOVED entirely (the detective hasn't
  served himself food tonight — only wine for both).
- The Cadaqués liqueur bottle from the previous Mesa image is now
  COMPLETELY EMPTY, lying on its side at the edge of the table, cork
  missing. A small pool of residue painterly under the neck.
- The shot glass empty, upside down.
- The candle is GUTTERING — only a few millimeters of wax left, the
  flame small and unstable.
- An ASHTRAY at the upper-right with multiple cigarette ends, ash
  mounded.
- The napkin completely abandoned, fallen partially over the edge of
  the table.

Hand state (bottom edge): the right hand FLAT on the table, palm
down, NEXT TO ONE of the two wine glasses (he is about to take it,
or has just set it down). The fingers are relaxed but the wedding
band sits AT THE BOTTOM of his ring finger as if it has been
gradually slipping for weeks. The wristwatch reads about 11:30 PM.
This is the same hand as in the previous Mesa images — identity
continuity is critical so the player reads this as a CONTINUATION,
not a different person.

Mood: a still life of a man who serves dinner for two every night
without realising he is alone. Hauntingly calm. NOT horror, NOT
melodrama — domestic ritual repeated past the point where it should
have stopped.

NEGATIVE (adicional a la base): single glass, no second glass,
visible Elena, second hand, second person, ghost figure, supernatural
glow on the second glass, gore, blood, full plate of food, fresh
liqueur bottle, party setting, dramatic horror lighting, candles
plural beyond the central one.
```

---

### 5.5 · Mesa-Despedida (final bueno C8 — OPCIONAL)

**Archivo**: `Mesa_Cena_Despedida.png`  
**Aparece en**: durante los blocks del ending A (despedida limpia,
acusación al detective + ejes buenos).  
**Tono Elena al otro lado**: pose `despedida`.

> Plano final del lore bueno: la segunda copa se ha "evaporado"
> visualmente. Solo queda la del detective. Es el momento en que su
> mente acepta que Elena no está.

```
[BLOQUE DE STYLE GUIDE — pegar arriba]

On the table (specific to this version — IDENTICAL camera and table
to Mesa-FinalC8.png — single change):
- ONE wine glass remains, the one CLOSEST TO THE HAND (the
  detective's). The OTHER wine glass from the FinalC8 image is GONE
  — replaced by a very faint, almost imperceptible painterly haze
  / mist at the same position, as if the glass has just dissolved
  into warm air. NO sharp ghost outline, NO supernatural glow —
  just a soft thinning of the air where the second glass was.
- Everything else IDENTICAL to Mesa-FinalC8.png: empty liqueur
  bottle on its side, ashtray with cigarettes, candle guttering,
  napkin half-fallen.

Hand state (bottom edge): the right hand has lifted the remaining
glass slightly off the table — fingers around the stem at chest-
height (just visible at the bottom of the frame). Wedding band
back in its normal position on the ring finger. The wristwatch
reads about midnight.

Mood: a quiet release. A man drinking the last glass of a memory
that he has finally allowed to go. NOT triumphant, NOT tragic —
just true.

NEGATIVE (adicional a la base): two glasses, ghost figure visible,
supernatural halos, dramatic lighting change, daylight breaking
through, religious iconography.
```

---

### 5.6 · Mesa-Ausente (finales malos C8 — OPCIONAL)

**Archivo**: `Mesa_Cena_Ausente.png`  
**Aparece en**: durante los blocks del ending B/C/D (cobardía, te
pillan, suicidio).  
**Tono Elena al otro lado**: pose `ausente` (el escenario `Elena-
Ausente.png` ya pinta la cinemática del comedor con la sombra
colgada).

> Plano paralelo al final malo del retrato de Elena: la mesa ladeada,
> la silla del detective volcada implícitamente (no se ve, solo el
> efecto). Las dos copas siguen ahí pero una está caída.

```
[BLOQUE DE STYLE GUIDE — pegar arriba]

On the table (specific to this version — IDENTICAL camera and table
to Mesa-FinalC8.png — but disturbed):
- The TWO wine glasses still on the table, but ONE OF THEM has been
  KNOCKED OVER — lying on its side, with a small pool of dark red
  wine spreading across the wood, painterly.
- The other glass remains upright, half-full.
- The empty Cadaqués bottle still lying on its side.
- The candle has GONE OUT — only the wick smoking faintly, no
  flame.
- The napkin has slipped off the table entirely (only the corner
  visible at the table edge).
- Everything else identical to Mesa-FinalC8.png.

Hand state (bottom edge): the right hand is NO LONGER ON THE TABLE
— the frame at the bottom is empty where it used to be. Only the
empty wooden surface where the hand was. The absence is felt.

Mood: an instant after — something has happened, the room is
quieter than it should be. NOT graphic, NOT horror — implied
absence.

NEGATIVE (adicional a la base): visible body, visible hand,
visible blood beyond the spilled wine, gore, broken glass shards
shown explicitly, screaming face, supernatural manifestation.
```

---

## 6 · Wiring de código (cuando los assets estén dropeados)

### 6.1 · `js/data/cenasGlobal.js`

Añadir un mapa `mesaPorCaso` paralelo al de Elena `tonosPorCaso`:

```js
US.CENAS_GLOBAL = {
  esposa: { /* ... existente ... */ },
  tonosPorCaso: { /* ... existente ... */ },

  // Mesa del detective: ruta de bg según el nº de caso. La cena 8
  // tiene además variantes por block de ending (ver caso08.js).
  mesaPorCaso: {
    1: 'assets/img/scenes/Mesa_Cena_Tutorial.png',
    2: 'assets/img/scenes/Mesa_Cena_Tutorial.png',
    3: 'assets/img/scenes/Mesa_Cena_Preocupada.png',
    4: 'assets/img/scenes/Mesa_Cena_Preocupada.png',
    5: 'assets/img/scenes/Mesa_Cena_Preocupada.png',
    6: 'assets/img/scenes/Mesa_Cena_Confrontacional.png',
    7: 'assets/img/scenes/Mesa_Cena_Confrontacional.png',
    8: 'assets/img/scenes/Mesa_Cena_FinalC8.png'
  },
  // ... resto ...
};
```

### 6.2 · `js/screens/DinnerScreen.js`

En `render()`, calcular el nº de caso del resultado actual y aplicarlo
como `style.backgroundImage` al `<div class="dinner-table">`:

```js
const caseNum = this._caseNumberFromId(this.ui.engine.getCase().id); // helper similar al de DinnerPanel
const mesaSrc = (US.CENAS_GLOBAL && US.CENAS_GLOBAL.mesaPorCaso || {})[caseNum];
// ... en innerHTML, dejar el <div class="dinner-table"> SIN sus
// divs hijos de CSS placeholder (.dinner-table__candle etc.), o
// retirarlos a un toggle:
container.innerHTML = `
  <main class="game-split dinner-split">
    <div class="dinner-table" id="dinner-table"
         style="${mesaSrc ? `background-image: url('${mesaSrc}');` : ''}">
    </div>
    ...
  </main>
`;
```

### 6.3 · `css/screens/dinner.css`

Sustituir el degradado actual de `.dinner-table` y eliminar (o
hacer opacity 0) los placeholders CSS:

```css
.dinner-table {
  width: 50%;
  position: relative;
  background-color: #1e120a;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

/* Mantenemos la animación de la vela pero solo como overlay sobre
   la posición de la vela del cuadro. Si el cuadro ya tiene la vela
   pintada, este overlay añade el parpadeo. Si se prefiere imagen
   estática, eliminar este bloque. */
.dinner-table__candle-overlay {
  position: absolute;
  top: 18%;
  right: 22%;
  /* ... mismas reglas de bloom + flicker del candle CSS actual,
         pero como overlay sin la vela rígida ... */
}

/* OCULTAR los items decorativos antiguos */
.dinner-item { display: none; }
```

### 6.4 · `js/components/DinnerTable.js`

Si se elimina el drag-and-drop, este archivo se puede borrar
y quitar la inicialización en DinnerScreen
([DinnerScreen.js:73-74](../js/screens/DinnerScreen.js#L73-L74)). Si se
quiere conservar para futuro reuso, dejarlo pero hacer que `init()` no
haga nada si no hay `.dinner-item` en el DOM.

### 6.5 · Endings del Caso 8 (opcional)

Si se generan `Mesa_Cena_Despedida.png` y `Mesa_Cena_Ausente.png`,
añadir un campo `mesaBg` a los `endings.A/B/C/D.blocks` en
[caso08.js](../js/data/caso08.js) similar al actual `elenaPose`, y en
DinnerPanel actualizar la mesa cuando se entra a un block de ending
con `mesaBg`.

---

## 7 · Orden de generación recomendado

1. **Mesa_Cena_Tutorial.png** primero — es la referencia maestra de
   la mesa. Define cámara, perspectiva, mano, alianza, reloj.
   Imprescindible aprobar esta antes de generar las otras 3, porque
   las otras 3 mantienen TODO igual excepto el estado de la mesa.
2. **Mesa_Cena_Confrontacional.png** segundo — es el extremo opuesto
   en estado emocional. Si Tutorial y Confrontacional encajan
   visualmente como mismo cuadro, las dos intermedias son
   interpolación.
3. **Mesa_Cena_Preocupada.png** tercero (interpolación entre 1 y 3).
4. **Mesa_Cena_FinalC8.png** cuarto — la imagen-clave del spoiler.
5. **Mesa_Cena_Despedida.png** y **Mesa_Cena_Ausente.png** opcionales,
   solo si se quiere pulir el final del juego.

Total: **4 obligatorios + 2 opcionales = 4-6 assets**.

---

## 8 · Riesgos y decisiones a tomar

| Decisión | Tradeoff |
|---|---|
| ¿Eliminar drag-and-drop de la mesa? | Pro: limpieza visual, no compite con la ilustración. Contra: se pierde un guiño táctil. **Mi recomendación: eliminar** — nunca tuvo función |
| ¿Mantener el label "MESA DE CASA"? | Pro: identifica el lado izquierdo. Contra: la ilustración habla sola. **Recomendación: quitar** |
| ¿Aspect ratio 1:1 o 4:5? | 1:1 es más versátil. 4:5 vertical encaja mejor en el slot 50%×100%. **Recomendación: 1:1 con `background-size: cover`** |
| ¿Mostrar la cara del detective al fondo? | Iría contra el canon (cara solo en C8 cuarta tarjeta vía espejo). **NO mostrar** |
| ¿Cambiar la mesa en tiempo real mientras Elena cambia de pose? | Demasiado intrusivo — el cambio por caso es suficiente. **Mantener mesa estática durante toda la cena** |

---

# 9 · IDEA 2 — "La mesa que nunca cambia"

> Alternativa a la Idea 1 (sección 1-8). Filosofía opuesta: en vez de
> mostrar la decadencia con cambios visibles, **un único cuadro
> idéntico repetido en las 8 cenas**. El golpe narrativo no está en
> "mirar y notar el cambio", sino en "mirar 7 veces sin pensar, y a
> la 8ª darte cuenta de lo que estabas viendo todo el tiempo".

## 9.1 · Concepto

Una sola ilustración de la mesa del comedor, **vista desde arriba con
ligero picado** (similar a Idea 1, ~70°), idéntica en todos los casos.
Sobre la mesa, los objetos canónicos de cualquier cena en casa
española: plato con comida, copa de vino, candela, servilleta, cubiertos.

**La diferencia que cierra el spoiler**: hay **DOS** copas de vino,
ambas servidas, ambas iguales. Las dos están ahí desde el Caso 1. El
jugador no las cuenta — son "dos copas en una mesa para dos". Solo
cuando el Caso 8 revela que Elena lleva tres años muerta, esas dos
copas repetidas desde la primera cena se vuelven retroactivamente
escalofriantes.

El detective no aparece en absoluto en la composición — ni siquiera la
mano del POV (a diferencia de la Idea 1). Es una mesa **vista por nadie**,
como una foto fija de algo que ocurre todas las noches igual. Esa
quietud es deliberada — refuerza el "todas las noches lo mismo durante
tres años".

### Variación permitida (mínima)

El cuadro es idéntico en composición y contenido. Sólo cambia, casi
imperceptible, **el nivel del vino en las dos copas**:

| Casos | Variante visual |
|---|---|
| 1-2 | Ambas copas servidas a 2/3 (recién puestas) |
| 3-5 | Ambas copas a 1/2 — el detective se ha bebido una sin darse cuenta |
| 6-7 | Una copa vacía y la otra a 2/3 — incongruencia visual que se mete bajo la piel sin explicar (ÉL se ha bebido las dos por turnos) |
| 8 | Las dos llenas otra vez (la cena ceremonial final, igual que en la P2 del caso) |

Son **4 variantes** del MISMO cuadro — cambia un único detalle (el
nivel de las copas) y nada más. No cambia perspectiva, ni iluminación,
ni objetos, ni candela. El jugador no debería ser capaz de articular
"la mesa cambió" pero sí sentirlo subconscientemente.

> Una alternativa aún más radical: **una sola imagen para los 8 casos
> sin variación ninguna**. Más barato (1 asset), narrativamente
> también funciona pero pierde el matiz del progreso. Mi
> recomendación: las 4 variantes mínimas.

## 9.2 · Naming canónico (Idea 2)

```
assets/img/scenes/Mesa_Hogar_LLena.png         (casos 1-2)
assets/img/scenes/Mesa_Hogar_Media.png         (casos 3-5)
assets/img/scenes/Mesa_Hogar_Asimetrica.png    (casos 6-7)
assets/img/scenes/Mesa_Hogar_Ceremonial.png    (caso 8)
```

Si se va por la versión 1-asset:

```
assets/img/scenes/Mesa_Hogar.png               (todos los casos)
```

## 9.3 · Prompt único (Idea 2)

> Solo escribo UN prompt completo (la versión "llena", para casos
> 1-2). Las otras 3 variantes son **regeneraciones del mismo prompt**
> cambiando solo la línea que describe el nivel de vino de cada
> copa. Se adjuntan unas a otras como referencia para forzar
> idéntica composición.

### Mesa-Hogar-Llena (casos 1-2 · maestra)

**Archivo**: `Mesa_Hogar_LLena.png`  
**Aparece en**: cenas del Caso 1 y Caso 2.

```
Still life of a domestic dinner table, viewed from above with slight
high-angle (about 70 degrees, not pure flat-lay), square 1:1 aspect
ratio. The table is set for TWO PEOPLE.

Art style: digital oil painting illustration, semi-realistic stylized
prop / scene art for a noir detective adventure game (Disco Elysium
tradition). Soft painterly brush strokes, smooth volumetric rendered
shading, visible texture of digital oil paint. NOT cel-shading, NOT
flat colors, NOT anime, NOT 3D render, NOT photorealistic.

Background: dark wooden dining table surface filling the entire frame,
warm chestnut grain, slightly worn. NO walls visible, NO chairs visible,
NO human figures, NO hands, NO body — only the table top and what is
on it. The composition is impersonal — nobody is in the frame, as if
the camera is suspended above the table looking down at an unattended
dinner.

Lighting: single warm candle light from the upper-centre of the frame,
creating soft warm highlights on crockery and a long shadow toward the
bottom edge. Ambient amber fill from the right side (the dining room
lamp from Escenario_Comedor.png). Mood is intimate, slightly stale,
domestic. NO cold light, NO daylight.

Items on the table (THIS IS CRITICAL — every element must be present,
in the exact positions described, with identical proportions across
all variants of this image):

- CENTRE-LEFT: a ceramic dinner plate (about 1/3 of frame width),
  with a warm meal painterly-rendered — suggestion of stewed meat,
  vegetables, a piece of bread on the side. Faint steam rising as
  warm wisps.
- CENTRE-RIGHT: TWO IDENTICAL red wine glasses, side by side, both
  filled TWO-THIRDS FULL with the same deep ruby wine. The two glasses
  almost touch at the stems but do not. They are placed where one
  would normally be for one person — but there are clearly TWO. This
  is the visual heart of the entire image.
- UPPER-CENTRE behind the plate: a short white taper candle in a small
  brass holder, lit, flame painterly with warm bloom. The wax is at
  full height — fresh candle.
- LOWER-LEFT, adjacent to the plate: a folded cream cloth napkin,
  neatly squared.
- ABOVE the plate, parallel: a silver fork and a silver knife,
  domestic stainless steel, placed properly as in a Spanish home
  setting (fork left, knife right, blade facing the plate).
- UPPER-RIGHT edge: a small porcelain salt cellar, dark ceramic.

Composition rules: the table fills the entire frame edge-to-edge. The
candle is at the upper third. The two wine glasses are at the right
third. The plate dominates the centre-left. The napkin and cutlery
balance the lower-left. Negative space at the lower-right corner
where the napkin's edge meets the table grain.

Mood: a dinner laid out perfectly, waiting. The candle is the only
movement. There is no one eating. The scene is the SAME every night
— stilled, ceremonious without ceremony, the routine of two people
who eat together. The image must read as ABSOLUTELY STILL —
photographic stillness, not action.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D
render, children cartoon, deformed, text, watermark, logos, brand
labels, modern technology, smartphones, laptops, party setting,
restaurant setting, fancy china, gold cutlery, daylight, fluorescent
lighting, blue cold light, multiple people, human hands, body, arms,
ghost figure, second person silhouette, supernatural glow on either
glass, ONE glass only, three glasses, broken glass, spilled wine,
empty plate, raw food, fancy plating, restaurant garnish, gore, blood.
CRITICAL NEGATIVES: ONE wine glass only (must be TWO), uneven glass
sizes, only one filled glass (both must be equally filled), one
glass smaller than the other.
```

### Mesa-Hogar-Media (casos 3-5)

```
[ATTACH approved Mesa_Hogar_LLena.png as reference image]

Same scene, same camera, same lighting, same table, same plate, same
candle, same napkin, same cutlery, same salt cellar — IDENTICAL
composition. Same two wine glasses in the same positions.

The ONLY change: both wine glasses are now HALF FULL instead of two-
thirds. The wine level in each glass is identical to the other — they
must look like they have been drunk from at the same rate.

Everything else MUST be pixel-identical to the master. The candle
wax level, the plate position, the napkin folds, the cutlery angle —
all unchanged.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as master, plus: uneven wine levels between the two
glasses, one glass with lipstick mark and the other without (must be
identical), changed plate position, changed cutlery angle, melted
candle, different camera angle.
```

### Mesa-Hogar-Asimetrica (casos 6-7)

```
[ATTACH approved Mesa_Hogar_LLena.png as reference image]

Same scene, same camera, same lighting, same table, same plate, same
candle, same napkin, same cutlery, same salt cellar — IDENTICAL
composition. Same two wine glasses in the same positions.

The ONLY change in this variant: ONE of the two wine glasses is now
COMPLETELY EMPTY (just a thin red residue at the bottom), while the
OTHER glass remains TWO-THIRDS FULL. The wine glass on the LEFT (the
one closer to the plate) is the EMPTY one. The wine glass on the
RIGHT remains served.

This asymmetry is deliberate and unsettling — the player should NOT
consciously articulate why, but should feel a faint wrongness. NO
gore, NO supernatural staging. Just one empty and one full glass
where there should be two equal.

Everything else MUST be pixel-identical to the master.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as master, plus: spilled wine, broken glass, only
one glass (both must be present), both glasses empty (must be ONE
empty + ONE full), supernatural overlay on the empty glass, dramatic
lighting, horror mood.
```

### Mesa-Hogar-Ceremonial (caso 8)

```
[ATTACH approved Mesa_Hogar_LLena.png as reference image]

Same scene, same camera, same lighting, same table, same plate, same
candle, same napkin, same cutlery, same salt cellar — IDENTICAL
composition. Same two wine glasses in the same positions.

This variant restores both glasses to TWO-THIRDS FULL — same as the
master image. The visual reads identical to the LLena version,
because at the Caso 8 dinner the detective has served BOTH glasses
again in his ritual, just as he did the first night three years ago.

The only minor tells that this is the C8 version (subtle, almost
invisible, the player should not consciously notice):
- The candle wax is now slightly lower than in LLena (it has burned
  a bit more — the cumulative weight of repetition over 8 cases).
- The napkin is folded the same way but with a single small crease
  on top, as if it has been handled many times.

Everything else MUST be pixel-identical to the master. The wine
levels must be EXACTLY the same as the LLena master — this is the
visual rhyme that closes the spoiler.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as master, plus: visible decay, dramatic horror, gore,
visible bloodstains, ghost figure, supernatural manifestation,
changed object positions.
```

## 9.4 · Wiring de código (Idea 2)

### Versión con 4 variantes

```js
// cenasGlobal.js
mesaPorCaso: {
  1: 'assets/img/scenes/Mesa_Hogar_LLena.png',
  2: 'assets/img/scenes/Mesa_Hogar_LLena.png',
  3: 'assets/img/scenes/Mesa_Hogar_Media.png',
  4: 'assets/img/scenes/Mesa_Hogar_Media.png',
  5: 'assets/img/scenes/Mesa_Hogar_Media.png',
  6: 'assets/img/scenes/Mesa_Hogar_Asimetrica.png',
  7: 'assets/img/scenes/Mesa_Hogar_Asimetrica.png',
  8: 'assets/img/scenes/Mesa_Hogar_Ceremonial.png'
}
```

### Versión 1-asset

```js
mesaPorCaso: {} // sin override por caso
// y en DinnerScreen.js, hardcoded:
const mesaSrc = 'assets/img/scenes/Mesa_Hogar.png';
```

CSS y limpieza de items: igual que en la **sección 6** del doc, no
cambia. Solo cambia el contenido de `mesaPorCaso`.

## 9.5 · Comparativa con Idea 1

| Aspecto | Idea 1 (mesa evoluciona) | Idea 2 (mesa idéntica) |
|---|---|---|
| Assets a generar | 4 (+2 polish) | 4 (o 1 si se quiere mínimo) |
| Trabajo de generación | Más alto: 4 estados muy distintos, cada uno con su prompt | Más bajo: 1 maestra + 3 regeneraciones con cambio mínimo |
| Carga narrativa | Explícita: el jugador VE el deterioro | Sutil: el jugador no la nota hasta el C8 |
| Riesgo de spoiler temprano | Medio: si el jugador conecta "cigarrillos en C3-C5" con un drama personal, podría intuir | Bajo: la repetición pasa desapercibida hasta C8 |
| Anclaje del POV | Mano del detective entra por abajo del frame | Sin presencia humana — mesa "vista por nadie" |
| Continuidad del cuadro | Variable | Idéntica — esa identicidad ES la idea |
| Cómo cierra el spoiler en C8 | La cuarta mesa pone DOS copas y se entiende | La cuarta variante es IDÉNTICA a la primera — confirmando que llevaba viendo eso desde el principio |
| Tono | Más cinematográfico / dramático | Más editorial / contemplativo |

## 9.6 · Mi recomendación final

Si tuviera que elegir una de las dos:

**Idea 2 (la mesa idéntica)** por tres razones:

1. **Encaja mejor con el spoiler estructural del C8**. El game design
   ya pone el peso narrativo de la repetición en la prueba P2 ("Dos
   Copas") y en el hecho de que Elena lleva 3 años muerta sirviendo
   dos copas cada noche. La Idea 2 hace VISIBLE esa repetición durante
   las 7 cenas previas. Cuando el C8 nombra el spoiler, el jugador
   ya lo había estado mirando.

2. **Es más barato y robusto de producir**. 1 maestra + 3 variantes
   casi-idénticas = mucho menos riesgo de inconsistencia visual entre
   estados que 4 ilustraciones distintas (Idea 1).

3. **No compite con el peso emocional de Elena**. La Idea 1, con
   sus papeles, ceniceros, botellas de Cadaqués y manos del
   detective, lleva mucha carga visual a la izquierda. La derecha
   ya tiene a Elena viva ahí, hablándole. Si la izquierda también
   grita, la cena se vuelve ruidosa. La Idea 2 deja que Elena
   domine la cena emocionalmente y reserva el golpe visual de la
   izquierda para el final.

La Idea 1 es más cinematográfica y entrega un payoff inmediato. La
Idea 2 es más literaria y entrega un payoff retroactivo. Elige según
qué tipo de juego quieres rematar.

---

> Doc temporal: eliminar (o archivar) tras producir y wirear los assets
> de UNA de las dos ideas.

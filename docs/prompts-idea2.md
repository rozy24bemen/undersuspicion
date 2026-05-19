# Prompts — Idea 2: "La mesa que nunca cambia"

> Documento standalone para producir los assets del lado izquierdo de
> la cena con Elena (la "mesa de casa"). Contiene el concepto completo,
> el style guide, los 4 prompts y el wiring de código.
>
> Este doc se basa en la Idea 2 de [prompts-escena-mujer.md](prompts-escena-mujer.md)
> y la desarrolla con todo el detalle necesario para pasar al generador.

---

## 1 · Diagnóstico — lo que hay hoy

El lado izquierdo de la pantalla de cena (`.dinner-table` en
[DinnerScreen.js](../js/screens/DinnerScreen.js)) ocupa el 50% del split
y hoy es:

- Un degradado marrón CSS sin imagen
- Cinco "objetos" decorativos dibujados con CSS puro (vela, plato, copa,
  tenedor, cuchillo) que el jugador puede arrastrar pero **no hacen
  nada gameplay-wise** ([DinnerTable.js:5](../js/components/DinnerTable.js#L5)
  lo dice: *"los objetos son decorativos por ahora, se pondrán assets
  más tarde"*)
- Un label "MESA DE CASA" en la parte inferior

Frente a la derecha (Elena compositada sobre `Escenario_Comedor.png`,
cinematográfica), la izquierda parece un placeholder. El usuario lo
ha pedido cambiar.

---

## 2 · Concepto narrativo — "la mesa que nunca cambia"

### El idea en una frase

**Una sola imagen de la mesa, idéntica en las 8 cenas del juego. La
repetición misma es el spoiler.**

### Por qué este enfoque

Under Suspicion tiene un spoiler estructural muy concreto que se
revela en el Caso 8: **Elena Solana lleva tres años muerta**. Cada
noche desde 2023, el detective ha cenado solo en su salón sirviendo
**dos copas de vino**, hablándole a una alucinación de su esposa. El
forense Don Octaviano Vidal lo confirma en la prueba P1 del caso 8
([caso08.js:339-347](../js/data/caso08.js#L339-L347)) y la prueba
**P2 "Dos Copas de Vino en la Mesa"** ([caso08.js:351-358](../js/data/caso08.js#L351-L358))
es el remate: las dos copas idénticas sobre la mesa, una con huellas
de Elena de 2023 y la otra con huellas frescas del detective.

El game design ya ha decidido que el peso del spoiler vive en esa
imagen de las dos copas. **Idea 2 hace que esa imagen esté
visualmente presente desde el Caso 1**:

- En todas las cenas del juego, la mesa de la izquierda muestra el
  mismo cuadro: plato servido + **DOS copas iguales** + candela +
  servilleta + cubiertos
- El jugador la ve durante 7 cenas sin pensar. Son "dos copas en
  una mesa para dos personas — normal, ahí está su esposa al otro
  lado".
- En el Caso 8, cuando el lore revela que Elena está muerta y que
  el detective sirve dos copas cada noche, el jugador **vuelve a
  mirar la mesa** y entiende qué ha estado viendo todas las noches.
- El payoff es **retroactivo**: el spoiler estaba en pantalla desde
  el principio, solo que invisible.

### Por qué la mesa NO debería cambiar

Una mesa que cambia (cigarrillos en C3, botella en C6, etc.) le dice
al jugador "fíjate, está pasando algo". Una mesa idéntica le dice
nada — y por eso funciona como spoiler oculto a plena vista.

La quietud, la repetición, **es la denuncia visual de la alucinación**.
Tres años cenando lo mismo. Cada noche. La cámara no se mueve, la
mesa no se mueve, las copas no se mueven. Solo el nivel del vino,
sutilmente, da pistas de que sí hay un humano bebiendo (él) — pero
nunca se ve a ese humano. Tampoco a Elena. La mesa está **vista por
nadie**: como una foto fija de algo que sucede igual todas las noches.

### Sin la mano del detective en frame

A diferencia de otras propuestas (Idea 1 en el doc hermano), aquí
**no entra ninguna mano por el borde inferior**. La mesa se ve sola,
desde arriba, como un still life editorial. Razones:

1. Cualquier presencia humana rompería la sensación de
   "ritual mecanizado durante años".
2. La derecha de la pantalla ya tiene a Elena (la única "presencia"
   que el detective ve). Si la izquierda añadiera la mano del
   detective, la pantalla tendría dos personas — la mentira que él
   se cuenta. **Mostrando una mesa vacía, mostramos la verdad**: nadie
   está cenando ahí.
3. Producción más simple: sin manos, menos puntos de fallo en la
   generación.

### Variación mínima permitida

El cuadro es **idéntico en composición**. Solo cambia un detalle entre
arcos: **el nivel del vino en las dos copas**. Cuatro variantes:

| Variante | Casos | Estado de las copas | Lectura interna |
|---|---|---|---|
| **LLena** | 1-2 | Ambas a 2/3 | Recién servidas. Cena temprana |
| **Media** | 3-5 | Ambas a 1/2 | Ha bebido (él), pero "como si fueran los dos" |
| **Asimétrica** | 6-7 | Una vacía + otra a 2/3 | Ha bebido las dos por turnos. El truco se cae sin que se vea |
| **Ceremonial** | 8 | Ambas a 2/3 otra vez | El ciclo se reinicia para la última cena. Rima visual con la LLena |

El jugador no debería ser capaz de articular conscientemente
"oh, la copa de la izquierda ahora está vacía". Solo sentirlo
subconscientemente como una incomodidad. Las variantes son
**casi-invisibles** — esa sutileza es deliberada.

> **Alternativa de producción mínima**: si se quiere ahorrar tres
> generaciones, **una sola imagen** (`Mesa_Hogar.png`) usada en los 8
> casos también funciona narrativamente. Pierde el matiz progresivo
> del nivel del vino pero conserva el golpe retroactivo de la
> repetición. Decisión de presupuesto, no de diseño.

---

## 3 · Especificaciones técnicas

### Aspect ratio y dimensiones

- **1:1 (cuadrado)** — la mesa se compone en cuadrado y luego se
  recorta lateralmente al meterlo en el slot `.dinner-table` (50% del
  ancho, 100% del alto) vía `background-size: cover`. Esto permite
  reusar el mismo asset si se quiere en otros contextos (modal de
  expediente, evidencia, etc.).
- Resolución mínima: **1024×1024 px**. Recomendado: **1536×1536 px** o
  **2048×2048 px** para que aguante pantallas grandes sin pixelar.
- Formato: **PNG** (no JPG — la candela puede tener gradientes que el
  JPG arruinaría).

### Naming canónico

Sigue la convención de los escenarios (`Escenario_Comedor.png`):

```
assets/img/scenes/Mesa_Hogar_LLena.png         (casos 1-2)
assets/img/scenes/Mesa_Hogar_Media.png         (casos 3-5)
assets/img/scenes/Mesa_Hogar_Asimetrica.png    (casos 6-7)
assets/img/scenes/Mesa_Hogar_Ceremonial.png    (caso 8)
```

Versión 1-asset alternativa:

```
assets/img/scenes/Mesa_Hogar.png               (todos los casos)
```

### Coherencia visual con el resto del juego

La imagen debe leer como **continuación del Escenario_Comedor.png**
(el bg que está detrás de Elena en la derecha). En particular:

- **Misma paleta**: chestnut warm, oro mostaza, burdeos vino, sombras
  profundas. Sin tonos azules salvo el contraste con el ámbar de la
  candela.
- **Misma fuente de luz**: una candela cálida en el centro/upper-
  centre del frame. La candela del cuadro es **la misma** que se ve en
  el comedor de Elena — el mismo objeto fotografiado desde dos
  ángulos.
- **Mismo estilo de pintura**: digital oil painting Disco Elysium.
  Trazo suave, sombreado volumétrico, textura de óleo digital.
- **Mismo mantel/superficie**: madera de castaño oscuro, sin mantel.
  El comedor del piso de Hermosilla muestra la madera directamente.

---

## 4 · Style guide compartida

> Bloque común a las 4 variantes. Pegar al principio de cada prompt.

```
Still life of a domestic dinner table set for two, viewed from above
with slight high-angle perspective (camera tilted about 70 degrees
from horizontal — not pure flat-lay, but close), square 1:1 aspect
ratio.

Art style: digital oil painting illustration, semi-realistic stylized
prop / scene art for a noir detective adventure game (Disco Elysium
tradition / classic 1990s point-and-click mystery game tradition).
Soft painterly brush strokes, smooth volumetric rendered shading,
visible texture of digital oil paint. NOT cel-shading, NOT flat
colors, NOT anime, NOT manga, NOT 3D render, NOT photorealistic.

Background and surface: dark chestnut hardwood dining table filling
the entire frame edge to edge, slightly worn surface, visible warm
wood grain, no tablecloth. The wood is the same warm chestnut as the
dining room shown in Escenario_Comedor.png (continuity is critical —
this is the same table seen in the right half of the dinner screen
in the game).

NO walls visible, NO chairs visible, NO human figures, NO hands, NO
body parts, NO ghost silhouettes — only the table top and the items
placed on it. The composition is impersonal — nobody is in the frame.
The viewpoint is that of a camera suspended above the table looking
straight down with a slight tilt, photographing an unattended dinner.

Lighting: single warm candle light from the upper-centre of the
frame, creating soft warm highlights on crockery and a long shadow
sweeping toward the lower edge of the frame. Ambient amber fill from
the right side of the frame (the lamp from the dining room of the
salon, continuity with Escenario_Comedor.png). No cold light, no
daylight, no fluorescent, no blue tone anywhere except the deep
shadow under objects.

Mood: lived-in domestic intimacy, intimate, slightly stale, ritual
quality. The table looks set perfectly but unused — as if it has
been laid out for someone who never arrives. Quiet. Stilled. NOT
party setting, NOT formal restaurant, NOT fancy gourmet plating.
This is the home of a Spanish couple from the Salamanca district of
Madrid, eating at home around 10pm.

Composition rules:
- The table fills the entire frame edge to edge — no margin around
  the table, no view of the floor.
- The candle is positioned at the UPPER THIRD of the frame, slightly
  off-centre.
- The TWO wine glasses are positioned at the RIGHT THIRD, side by side.
- The dinner plate dominates the CENTRE-LEFT.
- The folded napkin balances the LOWER-LEFT.
- The cutlery (fork left, knife right) is placed parallel ABOVE the
  plate.
- A small salt cellar is at the UPPER-RIGHT edge.
- Negative space at the LOWER-RIGHT corner where wood grain dominates.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D
render, children cartoon, deformed, text on plates, watermarks, logos,
brand labels, modern technology (smartphones, laptops, flat screens),
party setting, fancy restaurant plating, gold cutlery, daylight,
fluorescent lighting, blue cold light, multiple people, human hands,
human body parts, arms, ghost figure, second person silhouette,
supernatural glow, ONE wine glass only (must be TWO equal glasses),
three or more glasses, broken glass, spilled wine (except where
specified in a variant), empty plate (food must be on the plate
except where specified), raw uncooked food, fancy garnish, gore,
blood, horror staging, dramatic noir thriller lighting.

CRITICAL: there MUST be exactly TWO identical red wine glasses,
visible as a pair, on the right side of the plate. They must be the
same size, same shape, same stem, same bowl, same content level
(except where the variant prompt specifies asymmetry).
```

---

## 5 · Los 4 prompts

> El orden recomendado de producción es: primero la maestra (LLena),
> luego las 3 variantes que la adjuntan como referencia para forzar
> idéntica composición.

### 5.1 · Mesa-Hogar-LLena (casos 1-2 · MAESTRA)

**Archivo**: `assets/img/scenes/Mesa_Hogar_LLena.png`  
**Aparece en**: cenas del Caso 1 ("El último brindis") y Caso 2
("Sin sangre").  
**Estado del vino**: ambas copas a 2/3.

> Esta es la imagen MAESTRA. Su composición se va a clonar pixel-
> identical en las otras 3 variantes — la única diferencia entre
> variantes es el nivel del vino. Producir esta primero, aprobarla
> definitivamente, y solo entonces pasar a las otras.

```
[PEGAR AQUÍ EL BLOQUE COMPLETO DE STYLE GUIDE (sección 4)]

Specific to this variant (the master):

Items on the table — all painterly, none photorealistic:

PLATE (centre-left, dominant element, occupies about 30% of frame
width):
- A round ceramic dinner plate, off-white with a thin warm-gold rim,
  classic Spanish home tableware (not luxury).
- The plate holds a warm meal: painterly suggestion of estofado
  (Spanish stew) — small chunks of dark meat in brown sauce, a few
  green vegetable shapes (peas or beans), and a small piece of crusty
  bread on the side of the plate. The food is freshly served, faint
  warm steam wisps rising from the surface (painterly, soft).

TWO WINE GLASSES (right third of frame, side by side, almost
touching at the stems):
- Two IDENTICAL red wine glasses, classic medium-sized stemware with
  thin stems and a slight bell-shape bowl, slightly old-fashioned
  (the kind a Spanish couple in their 30s/40s would have received as
  a wedding present).
- BOTH glasses filled TWO-THIRDS FULL with the same deep ruby wine.
  The wine level is exactly the same in both — they look as if they
  have just been poured by one hand, in the same motion.
- The glasses cast soft warm reflections of the candle on the wood
  surface.

CANDLE (upper-centre, slightly off-centre to the left):
- A short white taper candle in a small brass candle holder, lit. The
  flame is painterly with a warm bloom — small but bright. The wax of
  the candle is at FULL HEIGHT (fresh candle, hasn't burned down yet).
- The candle is the only direct light source in the image.

NAPKIN (lower-left, adjacent to the plate):
- A folded cream cloth napkin, neatly squared, no embroidery. Fresh,
  unused.

CUTLERY (parallel above the plate):
- A silver fork to the left, a silver knife to the right (blade
  facing the plate). Plain Spanish home flatware, slightly worn
  silver. They are placed precisely parallel to each other.

SALT CELLAR (upper-right edge of frame, mostly cropped):
- A small dark ceramic salt cellar with a tiny spoon resting in it,
  partially in frame.

Wood grain detail (lower-right corner, no items there): the warm
chestnut grain is visible, with a faint old water-ring stain (not
fresh), suggesting years of use of this same table.

Mood: a dinner laid out perfectly and waiting. The candle is the
only movement in the entire image. Nobody is eating it. The scene
is suspended in time — a routine repeated every night for fifteen
years.

NEGATIVE (additional to base): empty plate, half-eaten food, three
glasses, one glass only, single glass, glasses of unequal size or
fullness, broken glass, spilled wine, ash, cigarettes, ashtrays,
liquor bottles, shot glasses, work papers, case files, evidence
folders, modern technology, ringing telephones, gore, blood, lipstick
mark on either glass, ghost imagery, supernatural elements, human
presence of any kind.
```

---

### 5.2 · Mesa-Hogar-Media (casos 3-5)

**Archivo**: `assets/img/scenes/Mesa_Hogar_Media.png`  
**Aparece en**: cenas del Caso 3 ("El número equivocado"), Caso 4
("La piedra rota") y Caso 5 ("El cajón").  
**Estado del vino**: ambas copas a la mitad (1/2).

> Regeneración del maestro con cambio único: las dos copas a la
> mitad en lugar de a 2/3. Todo lo demás idéntico al pixel.

```
[PEGAR AQUÍ EL BLOQUE COMPLETO DE STYLE GUIDE (sección 4)]

[ATTACH approved Mesa_Hogar_LLena.png as a reference image]

This is a REGENERATION of the master image with ONE single change:
the wine level in both glasses.

Reference rules (CRITICAL — these MUST be pixel-identical to the
master image):
- Same table, same wood grain, same camera angle, same focal length,
  same lighting.
- Same plate in the same position with the same food (steaming
  estofado with bread on the side).
- Same TWO wine glasses in the same positions (right third, side by
  side, almost touching at the stems).
- Same candle in the same position with the SAME wax height (fresh,
  full height).
- Same folded napkin in the same position.
- Same cutlery angle and position above the plate.
- Same salt cellar at the upper-right edge.
- Same water ring on the wood at lower-right.
- Same mood, same lighting balance, same colour palette.

The ONLY change:
- Both wine glasses are now HALF FULL (1/2 capacity) instead of two-
  thirds. The wine level in each glass is identical to the other —
  they look as if they have been drunk from at the same rate, sip
  by sip, by the same hand alternating between them.
- The wine surface inside each glass shows the same shape and the
  same painterly reflection of the candle.

Mood: nothing has visually shifted except for the lowered wine
level. The plate is still steaming as before (food still warm). The
candle has not burned down. Time has not appeared to pass — and yet
the wine has gone down. Subtle, easy to miss.

NEGATIVE (additional to master's negatives): full wine glasses (both
must be HALF), one full and one empty, half-eaten plate (food must
remain warm and untouched), burned-down candle, fork/knife in
different positions, water ring missing, salt cellar moved.

CRITICAL: this image must read as if NOTHING IS WRONG compared to
the master — the wine level change is so subtle that the player
might not consciously notice. Achieving that subtlety is the goal.
```

---

### 5.3 · Mesa-Hogar-Asimetrica (casos 6-7)

**Archivo**: `assets/img/scenes/Mesa_Hogar_Asimetrica.png`  
**Aparece en**: cenas del Caso 6 ("Estudio Caracedo") y Caso 7 ("El
sótano").  
**Estado del vino**: una copa vacía (residuo) + otra a 2/3.

> El truco se cae sin que se vea. Las dos copas idénticas, sí — pero
> una está vacía y otra recién servida. Es imposible que una persona
> haya bebido una mientras la otra permanece llena. Y sin embargo,
> sucede. La asimetría es visualmente inquietante sin que el jugador
> sepa decir por qué.

```
[PEGAR AQUÍ EL BLOQUE COMPLETO DE STYLE GUIDE (sección 4)]

[ATTACH approved Mesa_Hogar_LLena.png as a reference image]

This is a REGENERATION of the master image with ONE single change:
the wine level becomes asymmetric — one glass empty, the other
remains served.

Reference rules (CRITICAL — same as Mesa_Hogar_Media: everything
pixel-identical to the master EXCEPT the change specified below):
- Same table, wood grain, camera angle, lighting, plate, food,
  candle, napkin, cutlery, salt cellar, water ring.

The ONLY change:
- The wine glass on the LEFT (the one CLOSER to the plate) is now
  COMPLETELY EMPTY — just a thin residue of red wine at the bottom,
  a single dried ring on the inside of the bowl where the wine used
  to be. No new pouring has refilled it.
- The wine glass on the RIGHT (further from the plate) remains
  TWO-THIRDS FULL — exactly as in the master image. Same level,
  same colour.

This asymmetry is deliberate and unsettling — the player should NOT
consciously articulate why, but should feel a faint wrongness. NO
gore, NO supernatural staging, NO dramatic shadows added. Just one
empty and one full glass where there should be two equal — the
visual rupture that the player's subconscious notices.

Mood: identical to the master in every other way. The candle still
glows the same. The food still steams (warm). The table is still
set. Only one glass is empty. Like a still life where one of the
objects has quietly become wrong overnight.

NEGATIVE (additional to master's negatives): both empty, both full,
spilled wine (must be a clean empty glass with only inner residue),
broken glass, lipstick mark on the empty glass, supernatural glow,
ghost overlay on either glass, dramatic horror lighting, gore.

CRITICAL: the empty glass must look as if it has been drunk from
NORMALLY and emptied — not knocked over, not stolen, just emptied.
The other glass must look UNTOUCHED, exactly at the master's level.
```

---

### 5.4 · Mesa-Hogar-Ceremonial (caso 8)

**Archivo**: `assets/img/scenes/Mesa_Hogar_Ceremonial.png`  
**Aparece en**: cena del Caso 8 ("La última cena") — durante toda la
fase de cena, ANTES de que se dispare la cinemática del ending.  
**Estado del vino**: ambas copas a 2/3 otra vez (rima visual con LLena).

> El cierre del bucle. La última cena se ha servido como la primera
> — dos copas iguales, ambas a 2/3. El jugador llega a esta imagen
> con la memoria reciente del nivel disparejo de la Asimetrica, y la
> ve "restituida". Si el jugador conecta los puntos, entiende algo
> mucho antes de que el lore se lo diga.

```
[PEGAR AQUÍ EL BLOQUE COMPLETO DE STYLE GUIDE (sección 4)]

[ATTACH approved Mesa_Hogar_LLena.png as a reference image]

This is a REGENERATION of the master image. The wine levels return
to the exact same state as the master (both glasses two-thirds full,
identical). This image must read visually as IDENTICAL to the master
to the casual eye.

Reference rules (CRITICAL — pixel-identical to the master except as
specified):
- Same table, wood grain, camera angle, lighting, plate, food,
  candle, napkin, cutlery, salt cellar.

Changes from the master (subtle, almost invisible — the player
should not consciously notice these, but they exist so the image
isn't a literal duplicate file):
- The candle wax has burned down VERY SLIGHTLY (about 5% shorter
  than the master). A small drop of wax has run down the side of the
  brass holder, painterly.
- The folded napkin has a SINGLE small crease across its top fold,
  as if it has been handled and refolded — but still neatly squared.
- The water ring on the wood at lower-right has a second, faintly
  overlapping ring next to it (years of repetition).

Wine levels (CRITICAL — read carefully):
- BOTH wine glasses TWO-THIRDS FULL with the same deep ruby wine,
  EXACTLY as in the master image. The wine surface in each glass
  is the same shape and the same level as in the master. This is
  the visual rhyme that closes the spoiler — the player should be
  able to lay this image and the master side by side and not
  consciously distinguish them.

Mood: a quiet ceremonial repetition. The dinner has been served
again, identical to the first night. The candle has burned a tiny
bit. Time has passed but the ritual is intact. NOT melodramatic,
NOT horror, NOT triumphant — just the same dinner as always, served
for the eight-hundredth time.

NEGATIVE (additional to master's negatives): drastically different
wine levels, one empty glass, three glasses, only one glass, visible
decay, gore, ghost imagery, supernatural manifestation, dramatic
horror lighting, broken objects, fully burned candle (only ~5%
shorter, no more), changed plate, changed cutlery.

CRITICAL: this image must achieve the paradox of being SUBSTANTIALLY
identical to the master while being technically a new asset. The
player should mistake it for the master and that mistake is the
narrative point.
```

---

## 6 · Wiring de código (qué hace falta tocar)

### 6.1 · Mapa de paths por caso

[`js/data/cenasGlobal.js`](../js/data/cenasGlobal.js): añadir junto al
mapa `tonosPorCaso` un nuevo mapa `mesaPorCaso`:

```js
US.CENAS_GLOBAL = {
  esposa: { /* ... existente ... */ },
  tonosPorCaso: { /* ... existente ... */ },

  // Mesa del comedor (lado izquierdo de la cena). La misma imagen
  // se repite con variantes mínimas (nivel del vino) para que el
  // jugador sienta la repetición ritual sin articular el porqué.
  // Ver docs/prompts-idea2.md para concepto y prompts.
  mesaPorCaso: {
    1: 'assets/img/scenes/Mesa_Hogar_LLena.png',
    2: 'assets/img/scenes/Mesa_Hogar_LLena.png',
    3: 'assets/img/scenes/Mesa_Hogar_Media.png',
    4: 'assets/img/scenes/Mesa_Hogar_Media.png',
    5: 'assets/img/scenes/Mesa_Hogar_Media.png',
    6: 'assets/img/scenes/Mesa_Hogar_Asimetrica.png',
    7: 'assets/img/scenes/Mesa_Hogar_Asimetrica.png',
    8: 'assets/img/scenes/Mesa_Hogar_Ceremonial.png'
  },
  // ... resto ...
};
```

### 6.2 · Sustituir el placeholder CSS en DinnerScreen

[`js/screens/DinnerScreen.js`](../js/screens/DinnerScreen.js): el
bloque `.dinner-table` con sus 5 divs de objeto pasa a ser un único
div con `background-image` calculado:

```js
render(container) {
  const esposa = (US.CENAS_GLOBAL && US.CENAS_GLOBAL.esposa) || { nombre: 'Ella' };
  const result = this.ui._lastResult;
  const portraits = esposa.portraits || {};
  const initialSrc = portraits.neutral || '';

  // Resolver imagen de la mesa según número de caso actual.
  const caseId = this.ui.engine.getCase().id;
  const caseNum = this._caseNumberFromId(caseId);
  const mesaSrc = (US.CENAS_GLOBAL && US.CENAS_GLOBAL.mesaPorCaso || {})[caseNum] || '';

  container.innerHTML = `
    <nav class="game-nav dinner-nav">
      <div class="game-nav__title">UNDER SUSPICION · CENA EN CASA</div>
      <div class="dinner-nav__who">CON ${this.ui._esc((esposa.nombre || '').toUpperCase())}</div>
    </nav>
    <main class="game-split dinner-split">
      <div class="dinner-table" id="dinner-table"
           ${mesaSrc ? `style="background-image: url('${this.ui._esc(mesaSrc)}');"` : ''}>
      </div>
      <div class="dinner-room">
        <!-- ... resto igual ... -->
      </div>
    </main>
  `;

  // Resto del render igual: insertar FAB, instanciar DinnerPanel.
  // YA NO se llama a DinnerTable.init() (objetos draggable eliminados).
  // ... resto del render ...
}

// Helper (similar al de DinnerPanel).
_caseNumberFromId(id) {
  const m = /caso-?0?(\d+)/i.exec(id || '');
  return m ? parseInt(m[1], 10) : null;
}
```

### 6.3 · CSS — sustituir el degradado y placeholders por bg-image

[`css/screens/dinner.css`](../css/screens/dinner.css): la regla actual
de `.dinner-table` (con degradado + pseudo-elementos para vela/plato/
copa/cubiertos) se simplifica a:

```css
.dinner-table {
  width: 50%;
  position: relative;
  background-color: #1e120a;  /* fallback color por si no carga el bg */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

/* Eliminar TODOS los selectores de objetos draggable y sus animations:
   .dinner-table::before
   .dinner-item, .dinner-item.dragging, .dinner-item--frozen
   .dinner-table__candle, .dinner-table__candle::after
   @keyframes dinner-flicker
   .dinner-table__plate, .dinner-table__food
   .dinner-table__glass, ::before, ::after
   .dinner-table__fork, .dinner-table__knife
   .dinner-table__label
*/
```

Si se quiere mantener una capa de polish encima (luz parpadeante de
candela), añadir:

```css
.dinner-table::after {
  content: '';
  position: absolute;
  /* Posición exacta de la candela del cuadro (depende del asset, se
     calibra una vez producido). Aprox: */
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: radial-gradient(ellipse at 50% 60%, rgba(255, 200, 120, 0.45) 0%, transparent 60%);
  filter: blur(1px);
  pointer-events: none;
  animation: candle-flicker 1.4s ease-in-out infinite alternate;
}

@keyframes candle-flicker {
  0%   { opacity: 0.85; transform: translateX(-50%) scale(1); }
  100% { opacity: 1;    transform: translateX(-50%) scale(1.05); }
}
```

### 6.4 · Borrar (o vaciar) DinnerTable.js

[`js/components/DinnerTable.js`](../js/components/DinnerTable.js): los
objetos draggable se eliminan. Dos opciones:

- **A**: borrar el archivo completo, quitar el `<script>` de
  [index.html:78](../index.html#L78), quitar las llamadas en
  [DinnerScreen.js:73-74](../js/screens/DinnerScreen.js#L73-L74).
- **B**: dejar el archivo pero hacer que `init()` salga si no
  encuentra `.dinner-item` en el DOM (no-op por defecto). Esto
  preserva el código por si en el futuro se reusa.

Recomendación: **opción A** (limpieza). El código no aporta nada y
el archivo añade ruido.

---

## 7 · Orden de producción recomendado

| Paso | Asset | Tiempo |
|---|---|---|
| 1 | `Mesa_Hogar_LLena.png` (maestra) | 1ª iteración. Aprobar definitivamente antes de pasar al paso 2 |
| 2 | `Mesa_Hogar_Ceremonial.png` | Es el más parecido a la maestra. Si esta sale bien, las otras 2 también saldrán |
| 3 | `Mesa_Hogar_Media.png` | Mismo cuadro, vino más bajo |
| 4 | `Mesa_Hogar_Asimetrica.png` | El más arriesgado — una copa vacía. Si el generador tiende a "rellenarla" automáticamente, regenerar con NEGATIVE más enfático |

Si vas con la versión 1-asset, basta con `Mesa_Hogar.png` (que es el
mismo prompt que LLena con el archivo renombrado).

---

## 8 · Decisiones a tomar antes de generar

| Decisión | Mi recomendación | Razón |
|---|---|---|
| ¿4 variantes o 1 sola? | **4 variantes** | La progresión del nivel del vino es un guiño narrativo barato y potente. Solo cuesta 3 regeneraciones extra |
| ¿Mantener algún objeto draggable? | **No, eliminar todos** | Nunca tuvieron función. Compiten con la ilustración |
| ¿Capa CSS de candela parpadeante encima? | **Opcional, sí si encaja** | Añade un punto de vida sin animar la imagen. Se calibra cuando el asset esté |
| ¿Aspect 1:1 o 4:5 vertical? | **1:1** | Versatilidad. El recorte lateral por `background-size: cover` no daña la composición |
| ¿Quitar el label "MESA DE CASA"? | **Sí** | La ilustración habla sola |
| ¿Mostrar la mano del detective? | **No** | Romper la idea de "mesa vista por nadie" arruina el concepto |

---

## 9 · Riesgos del enfoque y mitigaciones

| Riesgo | Mitigación |
|---|---|
| El generador no respeta "dos copas iguales" y devuelve una sola | NEGATIVE muy explícito sobre ese punto + adjuntar la maestra como referencia en las regeneraciones |
| El jugador no nota nunca las dos copas y el spoiler retroactivo no funciona | El spoiler del C8 lo dice explícitamente vía P2; la imagen es REFUERZO, no pista única. Aunque no se note, no rompe nada |
| Las 4 variantes salen visualmente desincronizadas | Producir la maestra a ALTA resolución, aprobarla con detalle, y exigir que las 3 regeneraciones la adjunten como ref con instrucciones de "pixel-identical except wine level" |
| La candela del cuadro no encaja con el `dinner-flicker` CSS | La capa CSS de candela es OPCIONAL. Si no encaja, simplemente no se aplica |

---

> Doc temporal: eliminar (o archivar) tras producir y wirear los 4
> assets de la mesa. El doc-hermano [prompts-escena-mujer.md](prompts-escena-mujer.md)
> contiene la Idea 1 (mesa que evoluciona) por si en algún momento se
> quiere reconsiderar.

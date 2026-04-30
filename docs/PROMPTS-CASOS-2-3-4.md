# PROMPTS — Casos 2, 3 y 4 (DOC TEMPORAL · eliminar tras producción)

> Documento de uso único: prompts copy-paste para generar TODOS los assets
> visuales pendientes de los Casos 2, 3 y 4 con Gemini. Formato basado en el
> v3 validado con Lourdes/Iván/Adelina (Caso 2). **Eliminar tras finalizar
> producción**.

---

## Reglas globales (leer antes de generar)

| Tipo de asset | ¿Adjuntar imagen? |
|---|---|
| Sospechoso NEUTRAL (personaje nuevo) | **NO** — sólo texto |
| Sospechoso PENSATIVO/A o NERVIOSO/A | **SÍ** — adjuntar la NEUTRAL aprobada del MISMO personaje |
| Víctima (foto carnet) | **NO** — sólo texto |
| Escenario | **NO** — sólo texto |
| Prueba (objeto / documento) | **NO** — sólo texto |

**Tamaño/aspect ratio**:
- Sospechosos y víctima: 3:4 vertical, cuerpo entero (víctima: cabeza-hombros)
- Escenarios: 16:9 horizontal
- Pruebas objeto: 1:1 cuadrado
- Pruebas documento: 4:5 vertical

**Naming al guardar**:
```
assets/img/suspects/CasoN/Sospechosos/{Nombre}-{Pose}.png
assets/img/scenes/Escenario_{Nombre}.png
assets/img/evidence/casoNN/{evidence-id}.png
```

---

# ÍNDICE

- [CASO 2 — Sin sangre (Lavapiés)](#caso-2--sin-sangre)
  - [Víctima · Salvador Cienfuegos](#salvador-cienfuegos--víctima)
  - [Escenario · Piso Lavapiés](#escenario--piso-lavapiés)
  - [Pruebas (8)](#pruebas-caso-2)
- [CASO 3 — El número equivocado (Chueca)](#caso-3--el-número-equivocado)
  - [Víctima · Carla Vinyets](#carla-vinyets--víctima)
  - [Esteban Vidal · 3 poses](#esteban-vidal)
  - [Jorge Sallén · 3 poses (CULPABLE)](#jorge-jordi-sallén-culpable)
  - [Olalla Bermejo · 3 poses](#olalla-bermejo)
  - [Bernabé Faz · 3 poses](#bernabé-faz)
  - [Escenarios (Portal Chueca · Despacho TecBaria)](#escenarios-caso-3)
  - [Pruebas (9)](#pruebas-caso-3)
- [CASO 4 — La piedra rota (Talavera de Vélez)](#caso-4--la-piedra-rota)
  - [Víctima · Andrés Solera](#andrés-solera--víctima)
  - [Joaquín Vela · 3 poses](#joaquín-vela)
  - [Mireia Solana · 3 poses](#mireia-solana)
  - [Don Eulogio Pacheco · 3 poses (CULPABLE)](#don-eulogio-pacheco-culpable)
  - [Lucía Solera · 3 poses](#lucía-solera)
  - [Escenario · Caserón Talavera](#escenario--caserón-talavera)
  - [Pruebas (8)](#pruebas-caso-4)
  - [Caja fuerte](#caja-fuerte-pivote-c4-c5)

---

# CASO 2 · Sin sangre

> Sospechosos ya producidos (Lourdes, Iván, Adelina × 3 poses). Pendientes:
> víctima, escenario y 8 pruebas.

## Salvador Cienfuegos — VÍCTIMA

```
Police archive portrait, 3:4 vertical aspect ratio, identification-card style,
frontal shot framing head and shoulders only, centered.

Art style: digital oil painting illustration, semi-realistic stylized character
art for a noir detective adventure game (Disco Elysium / classic 1990s
point-and-click mystery game tradition). Soft painterly brush strokes, smooth
volumetric rendered shading, visible texture of digital oil paint. NOT
cel-shading, NOT flat colors, NOT anime, NOT 3D, NOT photorealistic.

Background: plain muted desaturated grey-blue archival backdrop, slight vignette,
no decoration, the look of a forensic record photo from a Spanish police archive.

Lighting: even cool documentary lighting from the front, slight rim light from
behind for separation, no warm tones, no dramatic shadows.

Subject — DETAILED FACE (must NOT resemble any common illustration character,
generate a unique face):
- 67 year-old Spanish man, retired working-class resident of central Madrid
- Face: long thin face, sunken cheeks, prominent cheekbones, deep nasolabial
  folds, broken-veined ruddy nose, thin pale lips, hooded grey-blue eyes set
  deep, weathered weary expression
- Hair: sparse thin grey hair receding at the temples, combed back
- Skin: pale tired complexion with age spots and broken capillaries

Clothing: faded blue winter pyjama top with white piping at the collar, a worn
maroon-burgundy dressing gown over it slightly visible at the shoulders.

Mood: lifeless documentary tone, neutral expression, eyes open and direct, no
smile, no frown, the face of a man photographed for an ID card he never wanted.

Composition: head and shoulders centered, eyes at upper third, slight rim light
from behind for separation.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D render,
children cartoon, smile, dramatic expression, dramatic lighting, warm color
palette, full body, half body, deformed, text, logos, watermark, frame,
oversaturated, rainbow palette.
```

## Escenario — Piso Lavapiés

```
Establishing shot of a crime scene location, 16:9 horizontal aspect ratio, wide
cinematic framing, NO PEOPLE in frame, fully empty stage where characters will
be composited later.

Art style: digital oil painting illustration, semi-realistic stylized
environment art for a noir detective adventure game (Disco Elysium / classic
1990s point-and-click mystery game tradition). Soft painterly brush strokes,
smooth volumetric rendered shading, rich tonal transitions, visible texture
of digital oil paint. NOT cel-shading, NOT flat colors, NOT anime, NOT 3D,
NOT photorealistic.

Location: cramped ground-floor apartment in working-class Lavapiés, Madrid.
A single damp narrow room visible: an old enamel bathtub against the left wall
(empty, with a stained towel draped on the edge — body NOT shown, only the
suggestion that something happened here), an unmade single iron bed against
the back wall with a pillow placed too neatly at the head, a small wooden
nightstand with a glass of water and an old transistor radio, a low chest of
drawers covered with framed black-and-white photographs and a wooden box, a
faded floral wallpaper peeling in places, a window with the persian blinds
fully drawn down, a calendar pinned to the wall with one day circled in red
marker.

Lighting: damp humid atmosphere, single small yellow incandescent bulb hanging
bare from the ceiling casting weak warm light, persian blinds blocking
exterior daylight, deep ambient shadows in corners, dust motes barely visible
in the air, the bathtub area in slightly cooler dim light.

Atmosphere: claustrophobic, sad, lived-in, the quiet aftermath of something
wrong. Working-class Spanish 1980s domestic interior.

Camera: 50mm equivalent, slight wide angle, eye-level standing height,
mid-distance, capturing the room as a whole.

Composition rule: leave the upper-half of the frame visually clean (CSS
overlay will place character portraits there); place all detail in the
lower-mid frame.

Style ID: undersuspi-noir-v1.

NEGATIVE: people, characters, bodies, blood, gore, explicit corpse, modern
technology, smartphones, flat-screen TVs, cel-shading, flat colors, anime,
photorealistic, 3D render, oversaturated, rainbow palette, text, logos,
watermark, frame.
```

## Pruebas Caso 2

### P1 — Informe forense (golpe post-mortem · fibras textiles)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
document placed flat on a dark wooden desk surface, partial soft shadow from
an off-frame desk lamp falling across one corner.

Art style: digital oil painting illustration, semi-realistic stylized props
in the visual tradition of Disco Elysium and classic mystery adventure games.
Soft painterly brush strokes, painterly textures. NOT cel-shading, NOT flat,
NOT anime, NOT 3D, NOT photorealistic.

Document type: official Spanish forensic autopsy report, single page.

Visual content of the document (text MUST NOT be readable — it will be rendered
programmatically over the image):
- Typewriter-formatted official forensic header at the top with a coat-of-arms
  style emblem (illegible, painterly)
- Two columns of typed paragraphs with blurred typewriter text, no readable
  letters
- Diagrammatic black-ink sketch of a human silhouette with a small mark
  indicating a head injury (post-mortem blow)
- An official rubber stamp in faded red ink in the lower-right corner
- A signature line below with a swirling illegible signature
- A small paperclip at the top edge
- A faint coffee ring stain near one corner

Period detail: 1980s typewriter aesthetic, slightly yellowed bond paper,
period-appropriate aged feel.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, modern computer-printed font, photorealistic, 3D,
cel-shading, anime, oversaturated, multiple documents, color photographs.
```

### P2 — Almohada con cabello canoso

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from a slight top-down 30-degree angle, placed on coarse brown kraft paper
mat (mesa de evidencias).

Art style: digital oil painting illustration, semi-realistic stylized prop art
(Disco Elysium / classic mystery adventure tradition). Soft painterly brush
strokes, painterly textures. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Object: a slightly worn off-white pillow in a faded floral pillowcase, lying
flat with one corner subtly indented as if pressed down, a clear depression
visible in the fabric. A few long grey-white human hairs are visibly trapped
on the surface and along the seam — the canonical "smoking gun" of the case.
The pillow shows light wear and a small yellowed area suggesting age, but no
blood, no tears, no explicit damage.

Lighting: single side raking light from the upper-left to reveal fabric texture
and the depression in the pillow, mild shadow under the object, museum-catalog
feel, no flash glare.

Markings: a small grey forensic ruler placed NEXT TO (not on) the pillow on
the kraft paper, plus a small folded evidence tag with illegible handwriting,
faintly visible — for context only, no readable text.

Style ID: undersuspi-noir-v1.

NEGATIVE: blood, gore, modern packaging, plastic evidence bag, multiple
objects, readable text, cel-shading, flat, anime, 3D, photorealistic.
```

### P3 — CCTV portal Lavapiés (Adelina entra/sale)

```
Surveillance still evidence shot, 4:5 vertical aspect ratio, top-down flat-lay
view, a single CCTV print-out laid on a dark wooden desk surface, partial soft
shadow from an off-frame lamp.

Art style: digital oil painting illustration, semi-realistic stylized prop art
(Disco Elysium / classic mystery adventure tradition). Soft painterly brush
strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: black-and-white CCTV still photograph printed on grainy
thermal paper, slightly curled at the edges.

Visual content (text MUST NOT be readable):
- Heavy CCTV grain and scanlines characteristic of 1980s surveillance footage
- A wide-angle low-resolution view of an apartment building entrance hallway
  (the recurring Lavapiés portal style: tile floor, mailboxes on the left,
  staircase on the right)
- The figure of a woman in a flowered housecoat clearly visible mid-frame,
  walking toward the door — recognisable as Adelina Roca but rendered low-res
- An illegible timestamp burned into the upper-right corner of the still
- A rubber-stamp evidence number at the bottom edge

Period detail: aged thermal paper, blurry monochrome image, scanlines, the
look of a surveillance still printed at a 1980s commissary.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: high-resolution color photo, modern digital footage, photorealistic
sharp detail, multiple frames, color, readable timestamp, cel-shading, flat,
anime, 3D.
```

### P4 — Borrador testamento sin firmar

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
document placed flat on a dark wooden desk surface, partial soft shadow.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: handwritten draft of a last will and testament, single
yellowed sheet of bond paper.

Visual content (text MUST NOT be readable):
- Cursive handwriting in dark blue ink, shaky elderly hand, several lines
  of illegible text
- Words crossed out and rewritten in places, evidence of revision
- A sum of money-looking figure with multiple zeros visible mid-page
  (illegible but clearly a large amount)
- A signature line at the bottom that is conspicuously EMPTY — no
  signature
- A small stain at the top corner
- The corner of the page slightly torn

Period detail: aged off-white paper, blue fountain-pen ink, 1980s informal
testament feel, no official letterhead.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, typed font, official letterhead, signature on
signature line, cel-shading, flat, anime, 3D, photorealistic.
```

### P5 — Recibos del banco de Lourdes (red herring)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
several small bank receipts fanned slightly on a dark wooden desk surface,
partial soft shadow.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: a small stack of three or four narrow paper bank receipts
from a Spanish savings bank (caja de ahorros), 1980s style.

Visual content (text MUST NOT be readable):
- Each receipt narrow, monochrome with faint blue-green security pattern
  along one edge
- Dot-matrix printed columns of figures, illegible numbers
- A rubber-stamped logo of a Spanish caja in muted color at the top of each
- One receipt slightly more crumpled than the others
- A small paperclip holding two of them together
- Subtle pencil annotations in the margins (illegible)

Period detail: 1980s Spanish caja de ahorros aesthetic, dot-matrix printing,
slightly yellowed thin paper.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, modern bank receipt design, ATM receipt, modern
typography, cel-shading, flat, anime, 3D, photorealistic.
```

### P6 — Movimientos de Salvador (sisas Iván)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
a personal accounts notebook opened flat on a dark wooden desk surface,
partial soft shadow.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: a small spiral-bound personal accounts notebook (libreta de
cuentas), opened to a double page filled with handwritten entries.

Visual content (text MUST NOT be readable):
- Two pages of lined paper with neat columns of handwritten entries in blue
  ballpoint
- Dates and figures arranged in tidy columns down the page
- The most recent entries near the bottom show small irregular subtractions
  with question marks pencilled in the margin
- One column shows monthly recurring deductions of "200" highlighted faintly
  with pencil ticks
- A small stub of pencil resting beside the notebook
- The cover of the notebook visible at the edge: dark cardboard, plain

Period detail: 1980s working-class Spanish home accounting, blue ballpoint,
ruled notebook paper, frugal tidy handwriting.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, typed entries, modern spreadsheet, computer printout,
cel-shading, flat, anime, 3D, photorealistic.
```

### P7 — Caja con fotos antiguas (relación 30 años)

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from a slight top-down 30-degree angle, placed on coarse brown kraft
paper mat (mesa de evidencias).

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Object: an old rectangular shoebox-sized cardboard box with the lid placed
beside it, the box about half full of small black-and-white and faded color
photographs from the 1950s-60s. A few photos visible on top of the pile show
the corner of a young couple in summer dress, a family portrait, a beach
scene with two young people standing close — emotional intimacy implied but
no faces sharply identifiable. A worn red ribbon is loosely tied around a
sub-bundle of photos. The cardboard box itself is slightly tea-stained and
worn at the corners.

Lighting: single side raking light from the upper-left, soft shadow under the
box, museum-catalog feel.

Markings: a small grey forensic ruler placed NEXT TO the box on the kraft
paper. A small evidence tag with illegible writing.

Style ID: undersuspi-noir-v1.

NEGATIVE: modern digital photos, color polaroid, recognisable famous faces,
explicit content, sharp readable detail, cel-shading, flat, anime, 3D,
photorealistic.
```

### P8 — Calendario de pared con día rojo (sembrado meta-arco)

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from a slight top-down 30-degree angle, placed on coarse brown kraft
paper mat. Or alternatively framed as still hanging on a section of wall —
keep it 1:1 either way.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Object: a rectangular paper wall-calendar of the 1980s Spanish style,
displaying a single month grid. Above the grid, a faded color photograph of
a generic landscape (mountain or coast — illegible, painterly). The month
name and numbers are visible but rendered as generic illegible glyphs (text
must NOT be readable). One specific day-square in the grid is clearly marked
with a thick red marker circle drawn aggressively, the only red on the page.
A small thumbtack pins the calendar at the top. The paper is slightly curled
at the lower corners.

Lighting: single side raking light revealing paper texture, the red circle
slightly more saturated than anything else in the frame.

Markings: a small forensic ruler beside the calendar.

Style ID: undersuspi-noir-v1. CRITICAL: month name and numbers must NOT be
readable; only the red circle is visually decisive.

NEGATIVE: readable text, readable date, modern calendar design, digital
display, cel-shading, flat, anime, 3D, photorealistic.
```

---

# CASO 3 · El número equivocado

> Caso 3 completo: 1 víctima + 4 sospechosos × 3 poses + 2 escenarios + 9 pruebas.
> Toda la sección sigue la metodología validada en Caso 2.

## Carla Vinyets — VÍCTIMA

```
Police archive portrait, 3:4 vertical aspect ratio, identification-card style,
frontal shot framing head and shoulders only, centered.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure game tradition).
Soft painterly brush strokes, smooth volumetric shading. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Background: plain muted desaturated grey-blue archival backdrop, slight
vignette, no decoration, forensic record photo aesthetic.

Lighting: even cool documentary lighting from the front, slight rim light
from behind, no warm tones.

Subject — DETAILED FACE (must NOT resemble any common illustration character):
- 31 year-old Spanish-Catalan woman, software engineer, alive in this photo
  (taken before the case)
- Face: oval face with sharp intelligent features, defined jawline, small
  straight nose, full lips with a faint guarded half-smile, alert dark brown
  almond eyes, fair Mediterranean complexion with light freckles across the
  bridge of the nose
- Hair: dark brown, pulled back into a low ponytail, parted middle, a few
  loose strands at the temples
- Glasses: square thick black plastic frames, modern but unfussy
- Build: athletic-slim, average height (only shoulders visible)

Clothing: crisp white button-up shirt with collar visible, fitted black
blazer over it, the strap of a brown leather satchel just visible across
one shoulder.

Mood: documentary tone, neutral expression with a hint of latent warmth, eyes
open and direct, no overt smile, the look of a corporate ID photo.

Composition: head and shoulders centered, eyes upper third, slight rim light.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, dramatic expression,
warm dramatic lighting, full body, half body, deformed, text, logos,
watermark, oversaturated.
```

## Esteban Vidal

> Jefe directo. INOCENTE. Profesional con doble agenda. Confianza fingida en
> neutral, calculador en pensativo. La foto familiar con padre Guardia Civil
> le siembra como "padre del detective" sospechoso para Caso 8.

### Esteban Vidal · NEUTRAL

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed from
head to feet, occupying the central vertical axis of the image.

Art style: digital oil painting illustration, semi-realistic stylized
character art for a noir detective adventure game in the visual tradition of
Disco Elysium and classic 1990s point-and-click mystery games. Soft painterly
brush strokes, smooth volumetric rendered shading, rich tonal transitions,
visible texture of digital oil paint. NOT cel-shading, NOT flat colors,
NOT anime, NOT 3D, NOT photorealistic.

Setting (recurring stage for all suspects): the warm-lit hallway of an old
Spanish bourgeois apartment. Polished dark parquet wood floor. A patterned
oriental rug with red, blue and gold geometric motifs running under the
character. A small wooden chair against the right wall with a small dark
sculpture on it. Two or three small framed paintings on the dark warm-brown
walls. Two warm yellow pendant lamps overhead. A tiny wooden chess set on
the corner of the rug. Background slightly out of focus.

Lighting: warm overhead pendant light, soft falloff, warm noir palette of
browns, ochres, deep reds, mustard gold, deep shadows in the corners.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character, generate a unique face):
- 45 year-old Spanish man, polished and self-confident
- Face: square jaw with a faint cleft chin, prominent cheekbones, faint
  five-o'clock shadow neatly groomed, straight Roman nose, thin firm lips
  in a faint controlled smile, sharp hazel-green eyes set in a measured gaze,
  slight crow's feet, smooth tanned complexion
- Hair: dark brown styled back with hair product, salt-and-pepper temples,
  no parting visible
- Build: athletic, broad-shouldered, average-tall height, ramrod confident
  posture

Clothing:
- Charcoal grey three-piece tailored suit, well-fitted
- Crisp white shirt with cufflinks visible at the wrists
- Burgundy silk tie with a tight knot
- A small enamel lapel pin (corporate, illegible)
- Polished black oxford shoes

Pose & expression: neutral confident — standing three-quarter to camera,
weight evenly balanced on both feet, one hand in a trouser pocket with the
suit jacket pushed back slightly, the other hand resting at his side, lips
in a faint controlled half-smile, gaze direct and steady but unreadable. The
posture says "I have nothing to hide" — but the eyes say "I'm calculating
what you know".

Composition: full figure visible head-to-feet, eyes at the upper third of
the frame, hallway environment framing him on both sides.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat cel-shaded outlines, anime, manga, photorealistic,
3D render, casual wear, t-shirt, jeans, sneakers, hoodie, deformed hands,
missing fingers, half-body framing, waist-up crop, text, logos, watermark,
oversaturated.
```

### Esteban Vidal · PENSATIVO (adjuntar Esteban neutral)

```
Use the attached image as a CHARACTER reference: same face, same hairstyle,
same clothing, same body, same age. Replicate his features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes,
smooth volumetric shading. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway — parquet floor, oriental
rug, wooden chair with figurine, framed paintings, warm pendant lamps,
chess set on rug.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 45 year-old man as the reference — square jaw, dark brown hair
with grey temples, hazel-green eyes, athletic frame. Same charcoal three-piece
suit, white shirt, burgundy tie.

Pose & expression: pensive calculating — standing three-quarter to camera,
the controlled smile gone, the chin lowered slightly, one hand brought up to
the chin with the index finger lightly resting along the jawline as if
weighing something carefully, the other hand still at his side, eyes
narrowed in focused thought looking off-frame to the left, brow faintly
furrowed. He is doing math in his head and does not want you to see it.

Composition: full figure head-to-feet, eyes at upper third, the hand at
the chin clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, different person,
different face, different clothing, casual wear, deformed hands, missing
fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Esteban Vidal · NERVIOSO (adjuntar Esteban neutral)

```
Use the attached image as a CHARACTER reference: same face, same hairstyle,
same clothing, same body, same age. Replicate his features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes,
smooth volumetric shading. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 45 year-old man as the reference — same suit, tie, hair, face.

Pose & expression — CRITICAL, MUST BE VERY DIFFERENT FROM A THOUGHTFUL POSE:
this is controlled panic in a man who refuses to lose composure. Standing
three-quarter to camera, one hand raised to loosen the burgundy tie at the
collar (visibly tugging at the knot), the other hand clenched at his side,
the suit jacket buttoned but his posture noticeably rigid as if holding
himself together. Eyes hard and fixed on the viewer with a cornered look,
jaw clenched tight, a single visible bead of sweat at the temple. The
controlled smile is replaced by a thin tight line of the lips. He is fully
dressed and composed, but the body says he is one breath from breaking.

ABSOLUTE RULES:
- DO NOT place the hand on the chin or jawline (that is the pensativo pose).
- DO NOT show a calm or smiling expression.
- The hand at the tie is the unique tell of this pose.
- His clothing remains immaculate — the panic is internal, not slovenly.

Composition: full figure head-to-feet, eyes at upper third, the hand at the
tie clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: hand on chin, hand on jawline, calm expression, smile, cel-shading,
flat, anime, photorealistic, 3D, different person, different face, different
clothing, casual wear, loosened jacket, dishevelled hair, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

## Jorge "Jordi" Sallén · CULPABLE

> Compañero de trabajo. Acosador obsesivo. Sonrisa nerviosa-amable en neutral;
> nervioso = explosivo, no sutil. Gemini necesita esta dirección clara.

### Jorge Sallén · NEUTRAL

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed from
head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art for a noir detective adventure game (Disco Elysium / classic
1990s point-and-click mystery game tradition). Soft painterly brush strokes,
smooth volumetric rendered shading, visible texture of digital oil paint.
NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Setting (recurring stage): same warm-lit Spanish bourgeois apartment hallway —
parquet floor, oriental rug, wooden chair with figurine, framed paintings,
warm pendant lamps, chess set on rug. Background slightly out of focus.

Lighting: warm overhead pendant light, warm noir palette of browns, ochres,
deep reds, mustard gold, deep shadows.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character, generate a unique face):
- 29 year-old Spanish man, software engineer, awkward and overly familiar
- Face: round soft face with a slightly pudgy cheek, weak undeveloped chin,
  small close-set pale blue eyes set behind round wire-rimmed glasses, faint
  acne scars on the cheeks, thin lips pulled into an awkward forced smile
  that does not reach the eyes, pasty complexion
- Hair: light dirty-blond, slightly greasy, short with a stubborn cowlick at
  the crown, parted poorly
- Build: average-soft, slightly slouched shoulders, average height, looks
  like a man who spends his days indoors

Clothing:
- Open blue plaid flannel shirt unbuttoned over a plain white t-shirt
- Faded blue jeans, slightly baggy
- White sneakers, worn but not deliberately shabby
- A digital wristwatch with a black plastic strap

Pose & expression: neutral falsely friendly — standing three-quarter to
camera, both hands held awkwardly clasped together in front at waist height,
shoulders slightly raised, head tilted to one side as if performing
friendliness, an overlarge forced smile that shows teeth but does not reach
the small eyes, gaze fixed on the viewer with too much intensity. He is
trying very hard to seem nice and slightly failing.

Composition: full figure visible head-to-feet, eyes at the upper third of
the frame.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, formal suit, tie,
genuine warm smile, charismatic expression, deformed hands, missing fingers,
half-body, waist-up, text, logos, watermark, oversaturated.
```

### Jorge Sallén · PENSATIVO (adjuntar Jordi neutral)

```
Use the attached image as a CHARACTER reference: same face, same hairstyle,
same glasses, same clothing, same body, same age. Replicate his features
identically — only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes,
smooth volumetric shading. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 29 year-old man as the reference — same plaid shirt, same
glasses, same cowlick.

Pose & expression: pensive resentful — the forced smile is now gone, replaced
by a thin sullen line of the lips. Standing three-quarter to camera, one hand
adjusting the round glasses at the bridge of the nose (a self-soothing tic),
the other hand stuffed deep into a jeans pocket, head tilted slightly down,
gaze fixed with quiet hostility on something off-frame. The body language
says: "I am replaying a slight in my head."

Composition: full figure head-to-feet, eyes at upper third, the hand at the
glasses clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, different person,
different face, different glasses, friendly expression, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Jorge Sallén · NERVIOSO — explosivo (adjuntar Jordi neutral)

```
Use the attached image as a CHARACTER reference: same face, same hairstyle,
same glasses, same clothing, same body, same age. Replicate his features
identically — only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes,
smooth volumetric shading. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 29 year-old man as the reference — same plaid shirt, same
glasses.

Pose & expression — CRITICAL, MUST BE VERY DIFFERENT FROM PENSATIVO: this is
explosive, NOT subtle. The pretence of friendliness has cracked. Standing
three-quarter to camera, body leaning slightly FORWARD as if about to step
toward the viewer, both hands raised at chest height with fingers splayed
mid-gesture (mid-protest, mid-rant), elbows out, mouth open mid-shout
showing teeth, eyes wide and reddened with veins visible, a flush across
the cheekbones and forehead, hair in further disarray with the cowlick
worse, glasses sitting slightly askew on the nose, sweat clearly visible
on the forehead and temples. The forced smile from neutral is GONE — this
is a man whose mask has fallen.

ABSOLUTE RULES:
- DO NOT place hand at the glasses bridge (that is the pensativo).
- DO NOT show a calm or sullen expression.
- Both hands must be raised at chest height in a gesticulating posture.
- This is the most expressive pose of the case — readable instantly.

Composition: full figure head-to-feet, eyes at upper third, both raised
hands clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: hand at glasses, calm expression, sullen, cel-shading, flat, anime,
photorealistic, 3D, different person, different face, different glasses,
formal wear, deformed hands, missing fingers, half-body, waist-up, text,
logos, watermark, oversaturated.
```

## Olalla Bermejo

> Amiga íntima de Carla. INOCENTE. Dolida, leal. Las tres poses tienen
> matices de duelo distintos.

### Olalla Bermejo · NEUTRAL

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed from
head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting (recurring stage): same warm-lit Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character):
- 35 year-old Spanish woman, recently bereaved (her best friend was
  murdered), trying to hold composure
- Face: heart-shaped face tapering to a delicate chin, soft full cheeks
  flushed faintly pink from recent crying, full lips slightly tight, small
  straight nose, large grey-blue eyes red-rimmed with faint shadows
  underneath, light freckles across the bridge of the nose, fair pale-rose
  complexion
- Hair: long auburn (warm reddish-brown) hair, half tied back loosely, the
  rest falling in soft waves over one shoulder, parted slightly off-center
- Build: petite, slim, graceful, average height

Clothing:
- A thick cream-colored ribbed wool sweater, oversized, sleeves slightly
  pushed up
- Black wool tailored trousers
- A long burgundy wool coat draped loosely over the shoulders, not worn
  through the sleeves
- A long dark grey wool scarf wrapped twice around the neck
- Black ankle boots (only the upper edge visible)

Pose & expression: neutral grieving but composed — standing three-quarter
to camera, both hands clasped tightly in front at waist height, knuckles
slightly tense, lips pressed thin, gaze level and direct but glassy, the
expression of someone who has cried and stopped and may cry again. Posture
straight but not stiff.

Composition: full figure visible head-to-feet, eyes at upper third.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, smiling, cheerful
expression, formal business wear, athletic wear, deformed hands, missing
fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Olalla Bermejo · PENSATIVA (adjuntar Olalla neutral)

```
Use the attached image as a CHARACTER reference: same face, same hairstyle,
same clothing, same body, same age. Replicate her features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
(Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 35 year-old woman as the reference — auburn hair, grey-blue
eyes red-rimmed, cream sweater, burgundy coat draped over shoulders, dark
scarf, black trousers.

Pose & expression: pensive sorrowful — standing three-quarter to camera, one
hand raised holding the loose end of the scarf near her collarbone (a
self-comfort gesture), the other arm hugging her own waist as if cold, gaze
drifting to one side and slightly down, the eyes welling faintly without
tears falling, lips parted as if about to speak about a memory. Quiet,
inward.

Composition: full figure head-to-feet, eyes at upper third, the hand at the
scarf clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, different person,
different face, different clothing, smiling, cheerful, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Olalla Bermejo · NERVIOSA (adjuntar Olalla neutral)

```
Use the attached image as a CHARACTER reference: same face, same hairstyle,
same clothing, same body, same age. Replicate her features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 35 year-old woman as the reference — same clothing, hair,
eyes.

Pose & expression — CRITICAL, MUST BE VERY DIFFERENT FROM PENSATIVA: this is
nervous in the sense of overwhelmed — grief turning into anxiety. Standing
three-quarter to camera, one hand pressed flat against her own sternum (over
the sweater) as if struggling to breathe, the other hand raised covering
her mouth (fingers curled), eyes fully welling with visible tears tracking
down one cheek, eyebrows pinched up in distress, shoulders drawn together
small. The composure of the neutral pose has fully broken.

ABSOLUTE RULES:
- DO NOT place a hand on the scarf (that is the pensativa).
- The hand on the chest AND the hand at the mouth are both required.
- Tears must be visibly tracking on at least one cheek.
- Posture is small and inward.

Composition: full figure head-to-feet, eyes at upper third, both hands at
chest/mouth clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: hand on scarf, composed expression, cel-shading, flat, anime,
photorealistic, 3D, different person, different face, different clothing,
deformed hands, missing fingers, half-body, waist-up, text, logos,
watermark, oversaturated.
```

## Bernabé Faz

> Portero del bloque. INOCENTE. Vergüenza profesional (no vio entrar al
> asesino). Cuerpo rígido, manos en bolsillos en nervioso.

### Bernabé Faz · NEUTRAL

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, smooth volumetric shading. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Setting (recurring stage): same warm-lit Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character):
- 60 year-old Spanish man, building doorman (portero) of the old school
- Face: weathered ruddy complexion, deep crow's feet, heavy thick grey
  moustache covering the upper lip (the moustache is his defining feature),
  broad fleshy nose, kind warm hazel-brown eyes set deep, jowls beginning
  to form, shaving stubble visible
- Hair: thinning grey hair receding at the temples, neatly combed under
  the cap
- Build: stocky, barrel-chested, average height, the body of a man who has
  stood in a portal for decades

Clothing:
- A navy-blue uniform jacket with brass buttons down the front and a
  small embroidered crest on the chest pocket
- Navy peaked cap with a dark band, sitting squarely on the head
- A bunch of keys hanging from a leather strap at the right hip
- Dark navy uniform trousers
- Polished black leather shoes

Pose & expression: neutral dutiful — standing facing the camera squarely
(less three-quarter angle than the others, more frontal), shoulders back,
both hands clasped behind his back in a respectful guard-like posture, chin
slightly lifted, lips set in a serious neutral line under the moustache,
gaze direct and earnest. Career portero with old-fashioned manners.

Composition: full figure visible head-to-feet, eyes at upper third.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, casual wear, t-shirt,
sneakers, formal three-piece suit, smiling broadly, deformed hands, missing
fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Bernabé Faz · PENSATIVO (adjuntar Bernabé neutral)

```
Use the attached image as a CHARACTER reference: same face, same moustache,
same uniform, same cap, same body, same age. Replicate his features
identically — only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 60 year-old portero as the reference — heavy grey moustache,
navy uniform with brass buttons, peaked cap, keys at hip.

Pose & expression: pensive ashamed — standing three-quarter to camera, the
peaked cap now held in his hands at waist height in front of him (he has
removed it as a sign of respect/regret), revealing his thinning grey hair,
gaze cast downward at the cap, lips pressed tight under the moustache, brow
furrowed with self-reproach. He is replaying the moment he failed to notice
something.

Composition: full figure head-to-feet, eyes at upper third, the cap held in
hands clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cap on head, hands behind back, cel-shading, flat, anime,
photorealistic, 3D, different person, different uniform, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Bernabé Faz · NERVIOSO (adjuntar Bernabé neutral)

```
Use the attached image as a CHARACTER reference: same face, same moustache,
same uniform, same cap, same body, same age. Replicate his features
identically — only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 60 year-old portero as the reference — same moustache, navy
uniform, cap.

Pose & expression — CRITICAL, MUST BE VERY DIFFERENT FROM PENSATIVO: this is
the nervousness of a humble professional under pressure. The cap is BACK ON
his head (he has put it back on, almost as a shield). Standing three-quarter
to camera, body posture rigid and stiff like a private being addressed by an
officer, both hands stuffed deep into the trouser pockets visibly bunching
the fabric (a self-restraining gesture so they do not shake), shoulders
hunched up, eyes wide and locked on the viewer with the look of a man being
accused of something he did not do, sweat visible on the forehead under the
cap brim, mouth tight under the moustache.

ABSOLUTE RULES:
- The cap must be ON the head in this pose.
- Both hands must be IN the trouser pockets, visibly bunching the fabric.
- Posture is rigid, military-stiff.
- DO NOT show the cap held in hands (that is the pensativo).

Composition: full figure head-to-feet, eyes at upper third, both pocket
positions clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cap held in hands, hands behind back, cel-shading, flat, anime,
photorealistic, 3D, different person, different uniform, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

## Escenarios Caso 3

### Escenario · Portal calle Chueca (lluvia)

```
Establishing shot of a crime scene location, 16:9 horizontal aspect ratio,
wide cinematic framing, NO PEOPLE in frame, fully empty stage where
characters will be composited later.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, painterly textures. NOT cel-shading, NOT flat,
NOT anime, NOT 3D, NOT photorealistic.

Location: an old apartment building entrance (portal) in the Chueca
neighbourhood of central Madrid, viewed from inside looking outward through
a wrought-iron-and-glass front door. To one side: a column of brass
mailboxes set into the wall. To the other side: the bottom of a marble
staircase with an ornate balustrade leading up. In the foreground inside
the portal: a small green metal trash container with a kitchen knife
abandoned across its rim (visible but not central). A CCTV camera with a
small red status light is mounted high in one corner of the entrance.
Through the glass of the front door: a wet rainy Madrid street outside,
neon signs of late-night bars reflecting pink and red on the wet pavement,
yellow sodium streetlights, a thin sheet of light rain visible.

Lighting: damp atmospheric, mixed source — the cold sodium yellow of the
street outside coming through the glass door, a warmer dim incandescent
bulb inside the portal casting a small pool of light, neon pink reflections
on the wet asphalt outside, deep shadows in the staircase area.

Atmosphere: late-night, rainy, neon-noir, the moment after something has
happened, quiet but not safe.

Camera: 50mm equivalent, slight wide angle, eye-level standing height,
mid-distance, the trash container slightly off-center.

Composition rule: leave the upper half of the frame visually clean for
character composition.

Style ID: undersuspi-noir-v1.

NEGATIVE: people, characters, bodies, blood, gore, modern smartphones,
modern advertising, cel-shading, flat, anime, photorealistic, 3D,
oversaturated, rainbow palette, text, logos, watermark, frame.
```

### Escenario · Despacho TecBaria (open-space oficina noche)

```
Establishing shot of a crime scene location, 16:9 horizontal aspect ratio,
wide cinematic framing, NO PEOPLE in frame.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, painterly textures. NOT cel-shading, NOT flat,
NOT anime, NOT 3D, NOT photorealistic.

Location: a 1980s-90s Spanish software-engineering open-space office at
night, "TecBaria". Rows of desks with bulky beige CRT computer monitors,
cream keyboards, papers and coffee cups, low partitions between
workstations, a few rolling chairs slightly pushed back. In the
foreground left: Carla Vinyets' desk, identifiable by a small framed
photograph turned face down, a small yellow post-it note stuck to the
monitor with the number "22" hand-written on it (illegible), a paper
coffee-shop receipt, an open notebook. To the right: a glassed-in private
office with the lamp on inside (Esteban Vidal's office), a framed family
photograph on the desk visible through the glass, a tall green file
cabinet against one wall.

Lighting: dim office, the only active lights are the glow of CRT monitors
casting blue-cyan light onto desk surfaces, plus the warm yellow lamp in
the glassed-in office casting a small warm pool. The rest of the
open-space is in deep blue-grey shadow, a few fluorescent ceiling tubes
flickering faintly.

Atmosphere: late-shift abandoned office, monitors glowing, no one around,
the digital noir feel.

Camera: 50mm equivalent, slight wide angle, eye-level seated-to-standing
height, mid-distance.

Composition rule: leave the upper half of the frame visually clean.

Style ID: undersuspi-noir-v1.

NEGATIVE: people, characters, bodies, modern flat-screen monitors,
smartphones, MacBook laptops, cel-shading, flat, anime, photorealistic,
3D, oversaturated, rainbow palette, text, logos, watermark, frame.
```

## Pruebas Caso 3

> Mezcla de objeto/documento/digital. Mantener mismo estilo painterly.

### P1 — Cuchillo de cocina (arma)

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from a slight top-down 30-degree angle, placed on coarse brown kraft
paper mat (mesa de evidencias).

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Object: a kitchen chef's knife with a worn dark wooden handle and a
medium-length steel blade, the blade clean and dry (no visible blood — only
a faint reddish-brown discolouration along the cutting edge suggesting it
has been wiped). The blade catches a single sharp highlight from the side
light. The knife is generic, household-grade, slightly older.

Lighting: single side raking light from upper-left to reveal blade texture
and the discolouration, soft shadow under the knife, museum-catalog feel.

Markings: a small grey forensic ruler placed NEXT TO the knife on the kraft
paper. A small folded evidence tag with illegible writing.

Style ID: undersuspi-noir-v1.

NEGATIVE: explicit blood, gore, multiple objects, modern designer kitchen
knife, cel-shading, flat, anime, 3D, photorealistic, sharp readable text.
```

### P2 — CCTV portal Chueca

```
Surveillance still evidence shot, 4:5 vertical aspect ratio, top-down flat-lay
view, a single CCTV print-out on a dark wooden desk surface, partial soft
shadow.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: a black-and-white CCTV still photograph printed on grainy
thermal paper, slightly curled at the edges.

Visual content (text MUST NOT be readable):
- Heavy CCTV grain and scanlines
- A wide-angle low-resolution view of the Chueca portal entrance from above:
  mailboxes on one side, base of staircase on the other, the green trash
  container in the foreground
- A male figure walking toward the trash container mid-frame, low-res,
  recognisable silhouette of Jordi Sallén but blurred enough to be
  ambiguous
- An illegible timestamp burned into the upper-right corner
- A rubber-stamp evidence number at the bottom edge

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: high-resolution color photo, modern digital footage, sharp clear
faces, multiple frames, color, readable timestamp, cel-shading, flat,
anime, 3D, photorealistic.
```

### P3 — Móvil de Carla con mensajes borrados

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from a slight top-down 30-degree angle, placed on coarse brown kraft
paper mat.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Object: a small early-1990s candy-bar mobile phone with a stubby black
antenna and a tiny green-tinted LCD screen, the screen showing a generic
message-list interface with several rows of pixelated illegible glyphs and
empty slots indicating deleted entries (no readable text). The phone is
slightly worn at the edges with a few small scratches. A tangled black
phone-charm lanyard hangs from one corner.

Lighting: single side raking light revealing plastic texture, soft glow on
the LCD screen, mild shadow under the phone, museum-catalog feel.

Markings: a small grey forensic ruler placed NEXT TO the phone. Evidence
tag with illegible writing.

Style ID: undersuspi-noir-v1. CRITICAL: any LCD glyphs must be illegible.

NEGATIVE: modern smartphone, iPhone, touchscreen, readable text, modern
typography, cel-shading, flat, anime, 3D, photorealistic.
```

### P4 — Carpeta RRHH (denuncia interna por acoso)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
a manila HR folder opened on a dark wooden desk surface, partial soft shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: a manila cardboard HR folder labelled RRHH (illegible
painterly label), opened to reveal stapled internal complaint forms.

Visual content (text MUST NOT be readable):
- The folder's manila cardboard cover at the edges, slightly worn
- Two stapled pages of typed complaint form with company letterhead at top
  (illegible logo)
- Form-style fields with handwritten entries in blue ballpoint, every
  entry illegible
- A red rubber stamp marked with a vague seal in the corner of the top page
- A small paperclip holding a third page of hand-written notes
- The corner of a third document peeking out: a photocopied internal email
- A sticky note in pale yellow with a single illegible word

Period detail: 1990s Spanish corporate HR aesthetic, typed forms, rubber
stamps, internal mail folder.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, modern digital HR system, screenshot, computer
interface, cel-shading, flat, anime, 3D, photorealistic.
```

### P5 — Recibo café

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from a slight top-down 30-degree angle, placed on coarse brown kraft
paper mat.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Object: a small paper coffee-shop receipt, slightly crumpled, off-white
thermal paper, with a vague illegible header and several lines of
dot-matrix-style printed glyphs (illegible). A small handwritten note in
pen at the bottom — also illegible. The edges are curled. A small coffee
ring stain mars one corner.

Lighting: single side raking light revealing paper texture, soft shadow,
museum-catalog feel.

Markings: forensic ruler beside.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, modern coffee-chain logo, branded packaging,
cel-shading, flat, anime, 3D, photorealistic.
```

### P6 — Cuaderno con número incompleto (`6XX-X3-XX-9X`)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
a small notebook opened flat on a dark wooden desk surface, partial soft
shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: a small ruled pocket notebook (cuaderno de bolsillo), opened
to a single page.

Visual content (most text MUST NOT be readable, but ONE element must be
visible — read carefully):
- The notebook page filled with hurried handwritten ballpoint notes,
  illegible scribbles
- One line near the center is written more carefully than the rest, large
  and clear: it shows a phone-number-style sequence with several digits
  replaced by X marks, looking like "6XX-X3-XX-9X" — this MUST be visible
  and recognisable as a partial phone number (it is the only readable
  element on the page; treat the X marks as deliberate redactions painted
  in the same ballpoint pen, not legible characters)
- A bent corner of the page
- A pencil stub resting beside the notebook

Style ID: undersuspi-noir-v1. CRITICAL: only the partial phone number is
visible; all other handwriting is illegible scribbles.

NEGATIVE: fully readable text, typed entries, modern notebook design,
cel-shading, flat, anime, 3D, photorealistic.
```

### P7 — Pegatina amarilla "22" en monitor (foto detalle)

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
close-up detail.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Object: a close-up corner of a beige 1990s CRT computer monitor's plastic
bezel. Stuck to the bezel: a small bright yellow square Post-it note with
the number "22" hand-written boldly in black ballpoint (this number IS
readable — it is the key clue). The Post-it has slightly curled corners
and a faint shadow. A few generic pixels of the dark monitor screen visible
at one edge.

Lighting: single side raking light revealing plastic texture, soft shadow,
the yellow Post-it slightly glowing in the warm light.

Style ID: undersuspi-noir-v1. The number "22" IS readable; nothing else.

NEGATIVE: modern flat monitor, modern Post-it brand, multiple stickers,
readable text other than "22", cel-shading, flat, anime, 3D,
photorealistic.
```

### P8 — Mail con fragmento numérico

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
a printed-out email on a dark wooden desk surface, partial soft shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: a printout of a 1990s email (impreso con dot-matrix), single
page, slightly fan-folded along one edge from continuous-feed paper.

Visual content (text MUST NOT be readable except for one fragment):
- Header area at the top with FROM/TO/DATE/SUBJECT fields filled with
  illegible glyphs
- Body text: several short paragraphs of dot-matrix printed text, illegible
- One line in the middle is rendered slightly darker/bolder than the rest:
  a fragment of a numeric sequence ending in "...93", visible but
  contextless (this is the only readable element)
- A coffee stain mark in one corner
- The fan-fold perforated edge visible

Style ID: undersuspi-noir-v1. CRITICAL: only the "...93" fragment is
visible; all other text is illegible.

NEGATIVE: fully readable text, modern email client, screenshot, browser
window, cel-shading, flat, anime, 3D, photorealistic.
```

### P9 — Foto familiar Esteban Vidal (padre Guardia Civil)

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from a slight top-down 30-degree angle.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Object: a small framed family photograph from the late 1970s, sitting on a
dark wooden desk surface. The photograph itself shows a posed family
portrait with mild colour-fading: a younger version of Esteban Vidal as a
child standing next to a stern-looking older man wearing the dress uniform
of the Spanish Guardia Civil (tricorne hat clearly visible — this is the
key visual element), plus a woman in a 1970s dress. The frame is a simple
brass-tone 1980s standing frame. The photograph has slight scratches and
fading consistent with age.

Lighting: single side raking light revealing the photograph and frame
texture, the tricorne hat clearly highlighted as the focus of the
composition.

Markings: a small forensic ruler beside the frame.

Style ID: undersuspi-noir-v1. The Guardia Civil tricorne hat must be
clearly recognisable. No readable text.

NEGATIVE: modern police uniform, generic uniform, no tricorne, multiple
photos, cel-shading, flat, anime, 3D, photorealistic, readable text on
photo.
```

---

# CASO 4 · La piedra rota

> Caso 4 completo: 1 víctima + 4 sospechosos × 3 poses + 1 escenario + 8 pruebas
> + caja fuerte. Mismo método.

## Andrés Solera — VÍCTIMA

```
Police archive portrait, 3:4 vertical aspect ratio, identification-card
style, frontal shot framing head and shoulders only, centered.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Background: plain muted desaturated grey-blue archival backdrop, slight
vignette.

Lighting: even cool documentary lighting from the front, slight rim light
from behind.

Subject — DETAILED FACE (must NOT resemble any common illustration
character):
- 72 year-old Spanish man, retired baker (panadero), from a small rural
  town (Talavera de Vélez)
- Face: weathered kind face, permanent sun-tanned ruddy complexion from
  decades outdoors, prominent ears, deep crow's feet, broad nose with
  faint broken capillaries, kind pale-blue eyes set in a permanent slight
  squint, small thin lips with a habitual gentle expression
- Hair: full head of cottony white hair combed back simply
- Skin: soft jowly cheeks, small age spots

Clothing: a starched white shirt with a stiff old-fashioned collar buttoned
all the way up, a dark brown wool waistcoat over the shirt with small
visible buttons.

Mood: documentary tone, neutral expression with a hint of latent kindness,
eyes open and direct, no smile. The face of a quiet good man.

Composition: head and shoulders centered, eyes upper third, slight rim light.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, dramatic expression,
warm dramatic lighting, full body, half body, deformed, text, logos,
watermark, oversaturated.
```

## Joaquín Vela

> Sobrino del fallecido. INOCENTE. Rural, ligeramente intrusivo. Hombre de
> campo de los 80.

### Joaquín Vela · NEUTRAL

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, smooth volumetric shading. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Setting (recurring stage): same warm-lit Spanish bourgeois apartment hallway
— parquet floor, oriental rug, wooden chair with figurine, framed paintings,
warm pendant lamps overhead, chess set on rug.

Lighting: warm overhead pendant light, warm noir palette of browns, ochres,
deep reds, mustard gold, deep shadows.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character):
- 58 year-old Spanish rural man, lifelong farmworker
- Face: rugged sun-weathered tanned face, deeply lined, broken nose set
  slightly off-center, drooping thick brown moustache going grey at the
  edges, hooded hazel eyes set in a permanent squint from sun, broad fleshy
  nose with broken capillaries, jowly cheeks, weathered skin
- Hair: thinning brown hair, country-cut short, a few strands of grey,
  visibly combed flat by hand
- Build: stocky and barrel-chested, average-tall height, calloused thick
  hands

Clothing:
- Worn brown leather jacket, slightly oversized, unzipped
- Dark green polo shirt underneath, two top buttons open
- Faded blue jeans, worn at the knees
- Scuffed brown leather work boots
- A flat brown cloth cap held in his hands at waist height (he has removed
  it as he enters the apartment, country manners)

Pose & expression: neutral honest — standing three-quarter to camera,
weight evenly balanced, both hands holding the flat cap in front of him at
waist height (one hand inside the cap, the other gripping the brim), gaze
direct and earnest with a hint of unease at being indoors in fancy company,
mouth set neutrally under the moustache, the slight squint of a man used
to looking at horizons.

Composition: full figure visible head-to-feet, eyes at upper third, the
cap held in hands clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, formal suit, tie,
office wear, urban metropolitan style, deformed hands, missing fingers,
half-body, waist-up, text, logos, watermark, oversaturated.
```

### Joaquín Vela · PENSATIVO (adjuntar Joaquín neutral)

```
Use the attached image as a CHARACTER reference: same face, same moustache,
same clothing, same body, same age. Replicate his features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 58 year-old rural man as the reference — drooping moustache,
brown leather jacket, dark green polo, faded jeans, work boots.

Pose & expression: pensive grieving — standing three-quarter to camera, the
flat cap now CRUMPLED in one rough hand at his side, the other hand raised
slowly scratching the back of his head behind one ear (a gesture of
country-style discomfort with his own emotion), gaze drifting to the wooden
floor several feet ahead, brow furrowed deeper than in neutral, lips tight
under the moustache. He is thinking about his uncle.

Composition: full figure head-to-feet, eyes at upper third, both hands
clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: hands holding cap in front, formal pose, cel-shading, flat, anime,
photorealistic, 3D, different person, different clothing, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Joaquín Vela · NERVIOSO (adjuntar Joaquín neutral)

```
Use the attached image as a CHARACTER reference: same face, same moustache,
same clothing, same body, same age. Replicate his features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 58 year-old rural man as reference — same clothing, moustache,
weathered face.

Pose & expression — CRITICAL, MUST BE VERY DIFFERENT FROM PENSATIVO: this is
the nervousness of a country man unjustly suspected. Standing three-quarter
to camera, body posture taut and ready, the flat cap GRIPPED tightly in both
hands at waist height (knuckles visibly pale from the grip — this is the
visual tell), shoulders squared, jaw set hard under the moustache, the
permanent squint now narrowed further with anger, eyes locked on the viewer
with offended dignity, beads of sweat on the brow. He is not fleeing — he
is holding his ground.

ABSOLUTE RULES:
- The cap must be in BOTH hands, gripped tightly at waist height.
- DO NOT have one hand at the head/nape (that is the pensativo).
- Posture is squared and defiant, not slouched.
- The expression is anger held in check, not panic.

Composition: full figure head-to-feet, eyes at upper third, the gripped
cap clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cap crumpled at side, hand at head, slouched posture, cel-shading,
flat, anime, photorealistic, 3D, different person, different clothing,
deformed hands, missing fingers, half-body, waist-up, text, logos,
watermark, oversaturated.
```

## Mireia Solana

> Asistenta del caserón. INOCENTE. Discreta, sisaba pequeñas cantidades.
> Coincidencia apellido (Solana = Elena Solana) ⇒ marcar postura ambigua en
> neutral.

### Mireia Solana · NEUTRAL

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, smooth volumetric shading. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Setting (recurring stage): same warm-lit Spanish bourgeois apartment
hallway — parquet, oriental rug, wooden chair with figurine, framed
paintings, warm pendant lamps, chess set on rug.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character):
- 45 year-old Spanish woman, domestic worker (asistenta del hogar)
- Face: oval face with smooth fair-Mediterranean complexion, neat regular
  features (small straight nose, modest lips, defined cheekbones), warm
  brown almond-shaped eyes with a faint guarded look, faint laugh lines, no
  makeup, a small mole on one cheek
- Hair: long dark brown hair pulled into a single neat braid down her back
  (tail visible over the shoulder), parted in the middle, no escaping
  strands
- Build: thin, average height, modest posture

Clothing:
- A navy blue work tunic (bata de trabajo) with small embroidered detail
  in white at the chest pocket
- Plain black trousers
- White cloth clogs (zueco), only the upper edge visible
- A small simple wristwatch with a brown leather strap

Pose & expression: neutral guarded — standing three-quarter to camera,
posture deliberately modest and self-contained, both hands folded primly
together in front of her at waist height (one hand resting in the other),
chin slightly down, gaze level but slightly lowered avoiding direct eye
contact, lips set in a careful neutral line. The body language of a long-
serving employee who has learned not to draw attention. There is a faint
ambiguity: she may be hiding something small.

Composition: full figure visible head-to-feet, eyes at upper third.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, glamorous wear,
formal suit, deformed hands, missing fingers, half-body, waist-up, text,
logos, watermark, oversaturated.
```

### Mireia Solana · PENSATIVA (adjuntar Mireia neutral)

```
Use the attached image as a CHARACTER reference: same face, same braid,
same clothing, same body, same age. Replicate her features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 45 year-old domestic worker as the reference — navy work
tunic, dark braid, modest features.

Pose & expression: pensive guilty — standing three-quarter to camera, one
hand raised pressing the fingertips lightly against the lips (not covering
the mouth — just the fingertips brushing), the other arm tucked closer to
the body, gaze cast down to the floor diagonally to one side, the careful
neutral line of the mouth now slightly downturned, brow faintly knit in
quiet self-reproach. She is remembering the small things she has taken.

Composition: full figure head-to-feet, eyes at upper third, the hand at
the lips clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, different person,
different braid, different clothing, hand covering mouth fully, panicked,
deformed hands, missing fingers, half-body, waist-up, text, logos,
watermark, oversaturated.
```

### Mireia Solana · NERVIOSA (adjuntar Mireia neutral)

```
Use the attached image as a CHARACTER reference: same face, same braid,
same clothing, same body, same age. Replicate her features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 45 year-old domestic worker as the reference — same tunic,
braid, features.

Pose & expression — CRITICAL, MUST BE VERY DIFFERENT FROM PENSATIVA: this
is the nervousness of an honest person caught with a small lie. Standing
three-quarter to camera, both hands now wringing each other anxiously at
waist height (visibly twisting one hand around the other — this is the
unique tell), shoulders drawn up tense, gaze averted sharply to one side
avoiding the viewer entirely, lips pressed thin, faint flush on the
cheeks, breathing visibly held. She is bracing for an accusation about
something far worse than what she actually did.

ABSOLUTE RULES:
- Both hands wringing/twisting each other at waist height — this is the
  unique visual marker.
- DO NOT place a hand at the lips (that is the pensativa).
- Gaze averted, NOT meeting the viewer.

Composition: full figure head-to-feet, eyes at upper third, the wringing
hands clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: hand at lips, calm posture, cel-shading, flat, anime,
photorealistic, 3D, different person, different braid, different clothing,
deformed hands, missing fingers, half-body, waist-up, text, logos,
watermark, oversaturated.
```

## Don Eulogio Pacheco · CULPABLE

> Médico jubilado. CULPABLE. Patriarcal, frío, máscara perfecta. Su
> NERVIOSO **NO se nota** — la pose es prácticamente idéntica al neutral,
> sólo los ojos cambian. (Mismo principio que Adelina C2: al jugador le
> debe costar leer la pista.)

### Don Eulogio Pacheco · NEUTRAL

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, smooth volumetric shading. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Setting (recurring stage): same warm-lit Spanish bourgeois apartment
hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character, generate a unique aristocratic face — and CRITICALLY: he must
look CONTROLLED, COLD, IMPECCABLE, the patriarch of an old family):
- 78 year-old Spanish aristocrat, retired physician, ramrod-straight despite
  age
- Face: long aristocratic gaunt face, prominent aquiline (slightly hooked)
  nose, deeply set ICE-BLUE eyes (this colour is non-negotiable), thin
  bloodless lips set in a permanent firm line, sharp prominent cheekbones,
  pale almost translucent ivory complexion, heavy upper eyelids, deep
  vertical line between the brows
- Hair: full head of well-groomed pure-white hair swept back from the
  forehead, no parting visible
- Moustache: a small neatly trimmed white moustache covering only the upper
  lip
- Build: tall, lean, ramrod posture despite age, no stooping

Clothing:
- A black three-piece suit, immaculately tailored, expensive
- A black silk tie with a small tight knot
- A crisp white shirt with cufflinks
- A gold watch chain visible across the waistcoat
- A signet ring on the left pinky finger (gold with a dark stone)
- A long dark wool overcoat draped over the shoulders without arms in the
  sleeves (worn as a cape)
- A black silver-handled cane held in one hand
- Polished black oxford shoes

Pose & expression: neutral patriarchal — standing three-quarter to camera,
weight on both feet, perfectly upright, one hand resting on the silver
handle of the cane planted in front of him (the cane visibly anchored on
the floor), the other hand at his side. The mouth set in its permanent
firm line, neither smile nor frown. The ice-blue eyes fixed steadily on the
viewer with unflappable cold authority. The body language says "I have
spent decades being obeyed and you will not change that today." Aristocratic
contempt held under a perfect veneer of civility.

Composition: full figure visible head-to-feet, eyes at upper third, the
cane prominently visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, casual wear,
warm friendly expression, smile, slumped posture, weak frail elderly look,
deformed hands, missing fingers, half-body, waist-up, text, logos,
watermark, oversaturated.
```

### Don Eulogio Pacheco · PENSATIVO (adjuntar Eulogio neutral)

```
Use the attached image as a CHARACTER reference: same face, same hair,
same moustache, same suit, same overcoat-as-cape, same cane, same body,
same age. Replicate his features identically — only change the pose and
expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 78 year-old aristocratic patriarch as the reference — black
suit, overcoat draped over shoulders as cape, cane, ice-blue eyes,
ramrod posture.

Pose & expression: pensive deliberating — standing three-quarter to camera,
both hands now resting one over the other on top of the silver cane handle
(the cane planted in front of him, two-handed grip), chin lowered slightly,
gaze cast down at the floor a few feet ahead, the firm line of the mouth
slightly tightened, the deep vertical line between the brows deeper than
in neutral. He is calmly weighing how to answer.

Composition: full figure head-to-feet, eyes at upper third, the
two-handed grip on the cane handle clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, different person,
different clothing, no cane, casual wear, smile, slumped, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Don Eulogio Pacheco · NERVIOSO — la máscara perfecta (adjuntar Eulogio neutral)

> Misma filosofía que Adelina nerviosa C2 v2: pose casi idéntica al neutral,
> tres micro-tells claros (que no obvios) y la frialdad del ojo sin la
> autoridad cálida.

```
Use the attached image as a CHARACTER reference: same face, same hair, same
moustache, same suit, same overcoat-as-cape, same cane, same body, same
age, same overall ramrod-straight posture. Replicate his features
identically — change only what is described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 78 year-old aristocratic patriarch as the reference — black
three-piece suit, overcoat draped over shoulders as cape, cane in one hand,
ice-blue eyes.

Pose & expression — CRITICAL DIRECTION (this is the central pose of the
case, read carefully): the player must read this image as "he is hiding
something MASSIVE, and his discipline is hiding it almost perfectly". Body
language replicates the neutral pose almost exactly: still ramrod-straight,
still standing three-quarter to camera, still with one hand on the cane and
the other at his side. Replicate the same overall stance. The face stays
calm and impassive at first glance. THREE micro-tells must be present and
visible on close inspection but never overt:

1) THE GRIP ON THE CANE: the hand on the silver handle now grips
   noticeably tighter — the knuckles paler than in neutral, the
   fingers more bunched. The cane handle itself is unchanged but the
   strain on the hand is visible.

2) THE EYES HAVE GONE FLAT: the ice-blue gaze is still fixed on the
   viewer, but the cold AUTHORITY of the neutral pose is replaced
   by a flat HOSTILITY — the same eyes, slightly narrower, no longer
   commanding but warning. A predator's stillness.

3) THE SIGNET RING HAND HAS CLOSED: the hand at his side that hung
   loose in neutral is now subtly closed into a fist — fingers curled,
   the gold signet ring visible, knuckles paler.

Everything else: posture upright and unchanged, mouth in its firm line,
overcoat draped exactly the same. NO sweat. NO frown. NO open distress.
The CONTRAST between the unchanged dignified posture and the three tells
above IS the read.

Composition: full figure head-to-feet, eyes at upper third, the tight grip
on the cane and the closed fist at the side both clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: visible panic, sweating, frowning, looking away, hand at face,
slumped posture, defensive arms, identical hand position to neutral
(must show the strain), cel-shading, flat, anime, photorealistic, 3D,
different person, different clothing, casual wear, deformed hands, missing
fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

## Lucía Solera

> Hija del fallecido. INOCENTE. Intuitiva, dolida.

### Lucía Solera · NEUTRAL

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, smooth volumetric shading. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Setting (recurring stage): same warm-lit Spanish bourgeois apartment
hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character, and explicitly DIFFERENT from Lourdes Cienfuegos and from
Olalla Bermejo):
- 40 year-old Spanish woman, daughter of the deceased, in mourning
- Face: oval face with refined balanced features, sharp intelligent dark
  hazel-brown eyes (NOT blue, NOT green) set under defined dark
  eyebrows, straight medium nose, full lips set in quiet sorrow, fair
  Mediterranean complexion, faint dark circles under the eyes from poor
  sleep, no makeup beyond a hint of subtle darkness on the lashes
- Hair: dark brown shoulder-length straight hair, parted in the middle,
  simple and neat, no flourish
- Build: slim, average height, composed posture

Clothing:
- A knee-length black wool dress with a modest collar and long sleeves
- A grey wool overcoat worn through the sleeves, unbuttoned, hanging open
- Small pearl stud earrings
- Plain dark stockings
- Black low-heel shoes (only upper edge visible)

Pose & expression: neutral grieving and watchful — standing three-quarter
to camera, both hands clasped loosely together at waist height in front of
her, posture composed and self-contained, lips set in a quiet line, eyes
direct and intelligent meeting the viewer with the sober focus of someone
sizing up a stranger she cannot afford to trust. Sober, present, observant.

Composition: full figure visible head-to-feet, eyes at upper third.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, photorealistic, 3D, blue eyes, green
eyes, glamorous, cheerful, casual wear, athletic wear, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Lucía Solera · PENSATIVA (adjuntar Lucía neutral)

```
Use the attached image as a CHARACTER reference: same face, same hair,
same clothing, same body, same age. Replicate her features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 40 year-old grieving daughter as the reference — black
dress, grey overcoat, dark brown straight hair, hazel-brown eyes.

Pose & expression: pensive intuitive — standing three-quarter to camera,
one hand raised lightly to the underside of her own chin (thumb under the
jaw, index finger along the cheek — a contemplative supporting gesture),
the other arm folded across her body holding the opposite elbow, gaze
drifting off-frame to one side as she works something out, eyes narrowed
in focus, lips faintly parted. She is solving a quiet puzzle.

Composition: full figure head-to-feet, eyes at upper third, the hand at
the chin clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: hand on mouth, cel-shading, flat, anime, photorealistic, 3D,
different person, different hair, different clothing, deformed hands,
missing fingers, half-body, waist-up, text, logos, watermark, oversaturated.
```

### Lucía Solera · NERVIOSA (adjuntar Lucía neutral)

```
Use the attached image as a CHARACTER reference: same face, same hair,
same clothing, same body, same age. Replicate her features identically —
only change the pose and expression as described below.

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Setting: same Spanish bourgeois apartment hallway.

Lighting: warm overhead pendant light, warm noir palette, deep shadows.

Subject: same 40 year-old grieving daughter as the reference — same
clothing, hair, eyes.

Pose & expression — CRITICAL, MUST BE VERY DIFFERENT FROM PENSATIVA: this
is the nervousness of intuition turning into dread — she has just realised
who killed her father. Standing three-quarter to camera, body weight
shifted slightly back, one hand pressed flat against the centre of her
chest (over the dress, fingers spread) as if her heart has skipped, the
other hand clenched in a tight fist at her side, eyes fully widened in
realisation looking past the viewer, lips parted and breath visibly held,
brow drawn up in shock. The composure of the neutral pose has cracked.

ABSOLUTE RULES:
- The hand on the chest is the unique visual marker.
- DO NOT put a hand at the chin or cheek (that is the pensativa).
- Gaze must be wide-eyed and looking past the viewer (the moment of
  realisation), not at the viewer.

Composition: full figure head-to-feet, eyes at upper third, the hand on
the chest clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: hand at chin, calm composed expression, cel-shading, flat,
anime, photorealistic, 3D, different person, different hair, different
clothing, deformed hands, missing fingers, half-body, waist-up, text,
logos, watermark, oversaturated.
```

## Escenario · Caserón Talavera

```
Establishing shot of a crime scene location, 16:9 horizontal aspect ratio,
wide cinematic framing, NO PEOPLE in frame.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, painterly textures. NOT cel-shading, NOT flat,
NOT anime, NOT 3D, NOT photorealistic.

Location: the study (despacho-biblioteca) of a 19th-century rural Spanish
manor house in Talavera de Vélez. A large oak desk dominates the lower-mid
frame, scattered with papers, an open agenda, and a half-written letter
beside an old fountain pen. A grand stone fireplace burns warmly to one
side, the fire low. Wooden floor-to-ceiling bookshelves filled with leather-
bound volumes line the back wall. Heavy faded velvet curtains pulled half-
shut at a tall side window. A worn leather wing chair pushed back from the
desk. ON THE FLOOR near the fireplace: a fireplace stone visibly cracked
and dislodged, with a small dark stain (the murder weapon and victim's
blood — implied, not graphic). A wall-mounted painting hides what is known
to be a wall safe behind it. Dust motes float in shafts of warm
late-afternoon side light.

Lighting: warm autumnal palette dominated by amber, ochre, deep burgundy,
the fireplace casting a warm flickering glow on one side, late afternoon
sunlight cutting in low through the side window in dust-thick beams, deep
ambient shadows in the corners and behind the desk.

Atmosphere: tense, opulent, decaying-aristocratic, the silence of a room
that has just witnessed something irrevocable.

Camera: 50mm equivalent, slight wide angle, eye-level standing height,
mid-distance, the desk in the lower-third of the frame, the broken stone
visible on the floor near the fireplace.

Composition rule: leave the upper-half of the frame visually clean.

Style ID: undersuspi-noir-v1.

NEGATIVE: people, characters, bodies, explicit blood pool, gore, modern
furniture, flat-screen TV, computer, smartphones, cel-shading, flat, anime,
photorealistic, 3D, oversaturated, rainbow palette, text, logos, watermark,
frame.
```

## Pruebas Caso 4

### P1 — Piedra del fuego rota (arma)

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from a slight top-down 30-degree angle, placed on coarse brown kraft
paper mat (mesa de evidencias).

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Object: a heavy fire-blackened rectangular fireplace stone with a clear
crack running down one side, a fragment broken off at one corner. The
stone is rough granite-like, charred grey-black on most surfaces from
years of fire, but the freshly broken edge shows lighter inner stone. A
small dark reddish-brown stain (suggested blood, NOT a graphic pool) is
visible on one corner of the broken edge, dried in. The stone has the
weight of something old and unyielding.

Lighting: single side raking light from the upper-left to reveal stone
texture and the crack, soft shadow under the stone, museum-catalog feel.

Markings: a small grey forensic ruler placed NEXT TO the stone. A small
folded evidence tag with illegible writing.

Style ID: undersuspi-noir-v1.

NEGATIVE: bright red blood pool, gore, multiple objects, modern materials,
plastic, cel-shading, flat, anime, 3D, photorealistic, readable text.
```

### P2 — Informe forense (Octaviano Vidal · piedra rota)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
document on a dark wooden desk surface, partial soft shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: official Spanish forensic autopsy report, single page, with
the styling of a 1980s forensic department.

Visual content (text MUST NOT be readable):
- Typewriter-formatted official forensic header at top with a coat-of-arms
  emblem (illegible, painterly)
- Two columns of typed paragraphs with blurred typewriter text
- Diagrammatic black-ink sketch of a human silhouette with a marked area
  on the back of the skull indicating a blunt-force injury
- An official rubber stamp in faded red ink in the lower-right corner
- A signature line below with a swirling illegible signature consistent
  with an elderly man's hand (this is canonically Octaviano Vidal)
- A small paperclip at the top edge
- A coffee ring stain near one corner

Period detail: 1980s typewriter aesthetic, slightly yellowed bond paper.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, modern computer-printed font, photorealistic, 3D,
cel-shading, anime, oversaturated, multiple documents.
```

### P3 — Agenda de Andrés (anotación "Eulogio — decisión")

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
a personal agenda opened flat on a dark wooden desk surface, partial soft
shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: a leather-bound personal agenda (agenda de cuero), opened
to a double page showing a week's schedule.

Visual content (most text MUST NOT be readable, but ONE element must be
visible — read carefully):
- The agenda's leather-bound spine visible in the centre
- Two pages of pre-printed weekly schedule with thin ruled lines
- Most lines filled with handwritten entries in blue fountain-pen ink,
  illegible
- ONE specific entry on a single line is written in a slightly larger,
  more emphatic hand: the painted glyphs deliberately render the
  recognisable shape of two short words, suggesting the phrase
  "Eulogio — decisión", treated as a focused calligraphic flourish more
  than literal text. (Stylise it so a viewer reads "important name and
  word" without being able to read other entries.)
- A small slim ribbon bookmark in burgundy laid across the page
- The corner of the page slightly turned

Period detail: 1980s leather agenda, fountain-pen blue ink, elderly man's
neat handwriting.

Style ID: undersuspi-noir-v1. CRITICAL: only the focused entry is
visually parseable; all other handwriting is illegible.

NEGATIVE: fully readable text on every line, typed entries, modern
spreadsheet, computer printout, cel-shading, flat, anime, 3D,
photorealistic.
```

### P4 — Carta a medio escribir ("Querida Lucía...")

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
a half-written letter on a dark wooden desk surface beside an old fountain
pen, partial soft shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: a single sheet of cream stationery paper with a few lines
of handwritten letter, abruptly stopping mid-page.

Visual content (most text MUST NOT be readable, but ONE element must be
visible):
- Cream-coloured aged stationery paper, slightly yellowed
- A few opening lines of cursive handwritten text in dark blue
  fountain-pen ink at the top of the page
- The first two words at the very top are stylised so the viewer can
  parse the salutation "Querida Lucía" — painted as a recognisable
  elegant fountain-pen flourish more than literal text. The remainder
  of the lines are illegible cursive scribbles.
- The ink line trails off mid-sentence at about a quarter of the way
  down the page
- An old marbled fountain pen lying diagonally beside the letter, cap
  off, nib slightly damp
- A small ink-blot stain near the trailing-off line
- The unused lower three-quarters of the page blank

Period detail: 1980s personal correspondence, cream stationery, fountain
pen, elderly man's hand.

Style ID: undersuspi-noir-v1. CRITICAL: only the salutation "Querida
Lucía" is visually parseable; all other handwriting is illegible.

NEGATIVE: fully readable letter, typed letter, modern stationery, computer
printout, cel-shading, flat, anime, 3D, photorealistic.
```

### P5 — Listado de llamadas (3 llamadas Eulogio→Andrés)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
a printed phone-record document on a dark wooden desk surface, partial
soft shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: a Spanish telephone-company call record printout (listado
de llamadas), single page, dot-matrix printed on continuous-feed paper
with the perforated edges visible.

Visual content (text MUST NOT be readable):
- Telephone-company header at top with an illegible logo
- Columnar layout: date / time / number called / duration
- Multiple rows of illegible dot-matrix entries
- THREE specific rows in the middle of the table are visibly highlighted
  with a yellow marker stripe across them — these are the three calls of
  interest, but the actual contents remain illegible
- The fan-fold perforated edge visible at one side
- A small handwritten annotation in the margin in red ink (illegible)

Period detail: 1980s Spanish telephone-company aesthetic, dot-matrix
printing, continuous-feed paper.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable; only
the three highlighted rows stand out as visually distinct.

NEGATIVE: readable phone numbers, modern call log, mobile phone screen,
cel-shading, flat, anime, 3D, photorealistic.
```

### P6 — Coartadas verificables (resumen de comisaría)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
a small stack of typed police report sheets fanned slightly on a dark
wooden desk surface, partial soft shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: 4 short typed witness-statement sheets stacked and slightly
fanned (one per suspect: Joaquín, Mireia, Eulogio, Lucía).

Visual content (text MUST NOT be readable):
- Each sheet typed on bond paper with a faint police-letterhead emblem
  at the top (illegible)
- Each sheet has a typed paragraph (illegible) and a handwritten
  signature line at the bottom
- The sheets have visibly different signatures (each unique)
- A small paperclip holds the stack at the top corner
- The topmost sheet is slightly more visible than the others

Period detail: 1980s Spanish police bureaucracy, bond paper, typewriter,
ink signatures.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable; only
the visual difference between the four sheets is parseable.

NEGATIVE: readable text, modern police report design, computer printout,
cel-shading, flat, anime, 3D, photorealistic.
```

### P7 — Hojas sueltas "caso Mora del 86" + "calle Goya 14"

> Asset narrativo pivote (sembrado de Caso 8). Sólo desbloqueable tras
> contradicción cruzada en el caso.

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
two loose typed sheets on a dark wooden desk surface, slightly overlapping,
partial soft shadow.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Document type: two loose typed sheets — one looks like an old police case
summary, the other like a property-records extract. Both yellowed with age.

Visual content (most text MUST NOT be readable, but TWO key fragments must
be visible):
- The first sheet has a typed header area, with one handwritten line in
  the upper margin in red ink stylised so the viewer can parse the words
  "caso Mora del 86" — painted as a recognisable script flourish
- The second sheet has a typed address block with one address line
  stylised so the viewer can parse "calle Goya 14" — same painterly
  treatment
- All other content on both sheets is illegible typed paragraphs
- A faded official rubber stamp in faded red ink on each sheet
- A small paperclip at the corner of one sheet
- One sheet is slightly more yellowed than the other
- Coffee ring stain on one corner

Period detail: 1980s police archive paperwork, deeply aged paper.

Style ID: undersuspi-noir-v1. CRITICAL: only "caso Mora del 86" and
"calle Goya 14" are visually parseable; all other text is illegible.

NEGATIVE: fully readable documents, modern formatting, computer printout,
cel-shading, flat, anime, 3D, photorealistic.
```

### P8 — Forense Octaviano Vidal en morgue (foto referencia)

> Para cuando aparezca como evidencia visual el propio forense (puente al
> personaje recurrente).

```
Recurring character portrait, 3:4 vertical aspect ratio, half-body framing
from waist up, three-quarter angle.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium / classic mystery adventure tradition). Soft
painterly brush strokes, smooth volumetric shading. NOT cel-shading,
NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Setting: a Spanish forensic morgue / examination room. Cold blue
fluorescent lighting from above. Stainless-steel examination tables out of
focus in the background, a wall of mortuary cabinets behind, a tall
adjustable lamp pulled to one side, a clipboard hanging from a hook. The
environment cool, clinical, slightly clinical-blue tinted.

Lighting: cold blue-white overhead fluorescent light, small warmer
practical lamp casting a faint warm secondary on one side, deep clinical
shadows.

Subject — DETAILED FACE AND BODY (must NOT resemble any common illustration
character):
- 75 year-old Spanish man, veteran forensic pathologist (Don Octaviano
  Vidal), recurring character across cases 4-5-6
- Face: long thin elderly face, prominent forehead with deep lines, full
  white-grey beard neatly trimmed, full white-grey moustache, bushy grey
  eyebrows, deeply set hazel eyes behind small wire-rimmed reading glasses
  perched at the end of the nose, prominent ears, weary kind expression,
  age spots on the temples
- Hair: thinning white-grey hair combed back simply, slightly receded
- Build: tall and thin, slightly stooped at the shoulders, average to
  average-tall height

Clothing:
- A white knee-length lab coat over a grey suit visible underneath
- A dark blue or burgundy small bowtie at the collar (corbatín)
- Hands stained slightly with dark ink from documentation (visible at the
  fingertips)
- A small lapel-pin on the lab coat (illegible, painterly)
- A pen tucked into the breast pocket

Pose & expression: neutral professional — standing three-quarter to
camera, both hands held in front of him at waist height holding a small
clipboard, glasses perched on the nose, gaze raised over the tops of the
glasses to meet the viewer with the patient measuring look of a man who
has examined too many bodies. Tired but calm.

Composition: half-body waist-up framing, eyes at upper third, the clipboard
clearly visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: warm hallway setting, suspect interrogation hallway background,
the recurring oriental rug (this character belongs in the morgue, NOT the
suspect hallway), full body, cel-shading, flat, anime, photorealistic, 3D,
deformed hands, missing fingers, text, logos, watermark, oversaturated.
```

## Caja fuerte (pivote C4 → C5)

> Asset interactivo. Aparece en C4 cerrada; se abre en C5 con la
> combinación 8614.

```
Evidence object photograph, 1:1 square aspect ratio, single object
centered, shot from a slight slightly-upward angle (eye-level looking
forward) as if viewed by the player.

Art style: digital oil painting illustration (Disco Elysium tradition). Soft
painterly brush strokes. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Object: a small antique wall safe with a cast-iron face, square format,
recessed into a section of the dark wood-panelled wall of an old Spanish
manor study (matching the Caserón Talavera setting). The safe door is
CLOSED. A central rotary combination dial in brass with a clearly visible
gleaming brass arrow indicator (the markings around the dial are illegible
small numerals — text-style markings must NOT be readable). A heavy
recessed handle in cast-iron below the dial. A keyhole below that. A
discreet brand crest at the top of the door (illegible). The wall around
the safe shows the rectangular faded outline where a painting normally
hangs to conceal it (the painting has been removed and is leaning against
the wall just out of frame).

Lighting: warm side light from the left echoing the Caserón Talavera study
warm palette, a soft glint on the brass dial and handle, deep shadow in
the recess of the safe door, the wood panelling around it warmly lit.

Markings: a small forensic ruler placed beside the safe on the panelling,
no readable text.

Style ID: undersuspi-noir-v1.

NEGATIVE: digital keypad, electronic safe, modern safe design, glowing
LEDs, readable numerals on the dial, the painting in front of the safe,
cel-shading, flat, anime, 3D, photorealistic, text, logos, watermark.
```

---

# CHECKLIST FINAL

## Caso 2 — pendientes
- [ ] Salvador Cienfuegos (víctima)
- [ ] Escenario Piso Lavapiés
- [ ] 8 pruebas

## Caso 3 — completo
- [ ] Carla Vinyets (víctima)
- [ ] Esteban Vidal × 3 poses
- [ ] Jorge Sallén × 3 poses
- [ ] Olalla Bermejo × 3 poses
- [ ] Bernabé Faz × 3 poses
- [ ] Escenario Portal Chueca
- [ ] Escenario Despacho TecBaria
- [ ] 9 pruebas

## Caso 4 — completo
- [ ] Andrés Solera (víctima)
- [ ] Joaquín Vela × 3 poses
- [ ] Mireia Solana × 3 poses
- [ ] Don Eulogio Pacheco × 3 poses
- [ ] Lucía Solera × 3 poses
- [ ] Escenario Caserón Talavera
- [ ] 8 pruebas
- [ ] Caja fuerte
- [ ] Octaviano Vidal (forense recurrente, retrato morgue)

> **Total**: 1 víctima + 8 sospechosos × 3 poses + 1 escenario + 8 pruebas =
> Caso 2 (10) · Caso 3 (1+12+2+9 = 24) · Caso 4 (1+12+1+8+1+1 = 24) =
> **58 prompts**.

---

> Documento eliminable tras producción de los 58 assets. Las lecciones
> aprendidas (anclajes corporales explícitos, listas negras de poses
> prohibidas, máscara cuando el sospechoso es culpable sutil) deberían
> migrarse al `docs/ASSETS-VISUALES.md` permanente antes de borrar este.

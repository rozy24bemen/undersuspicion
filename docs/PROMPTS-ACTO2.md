# PROMPTS — Acto II · Casos 5, 6 y 7 (DOC TEMPORAL · eliminar tras producción)

> Documento de uso único: prompts copy-paste para generar TODOS los assets
> visuales de los Casos 5 ("El cajón"), 6 ("Estudio Caracedo") y 7 ("El
> sótano"). Formato validado con la v3 del style-bible (Disco Elysium /
> digital oil painting). **Eliminar tras finalizar producción**.

> ## ⚠️ CONVENCIÓN DE FRAMING (alineada con Acto 1)
>
> Todos los prompts de sospechosos en este documento generan retratos a
> **CUERPO ENTERO DE PIE** (Full-body standing, head to feet), igual que en
> Acto 1. El framing se ha unificado tras detectar que la versión inicial
> (half-body, sentados) producía sospechosos sentados, inconsistente con
> Hugo, Lucía, Marta y los demás del Acto 1.
>
> **Cuando generes**: si el modelo te devuelve un sospechoso sentado o
> recortado a la cintura, añade al final del NEGATIVE: `seated, sitting,
> chair, hands on lap, half-body framing, waist-up crop, bust crop`.
>
> Las referencias residuales a "chair" o "table" en algunas poses son
> deliberadas: el sospechoso está de pie *junto* a la mesa o *apoyado*
> en el respaldo de una silla vacía — nunca sentado.
>
> El Acto II introduce la **luz UV** (Caso 5), la **prueba plantada** (Caso 6)
> y la **tabla de argumentación** (Caso 7). Ninguno de esos sistemas necesita
> assets nuevos aparte de los prompts que figuran aquí — todo es CSS o DOM.

---

## Reglas globales (leer antes de generar)

| Tipo de asset | ¿Adjuntar imagen? |
|---|---|
| Sospechoso NEUTRAL (personaje nuevo) | **NO** — sólo texto |
| Sospechoso PENSATIVO/A o NERVIOSO/A | **SÍ** — adjuntar la NEUTRAL aprobada del MISMO personaje |
| Víctima (foto carnet) | **NO** — sólo texto |
| Escenario | **NO** — sólo texto |
| Prueba (objeto / documento) | **NO** — sólo texto |
| Icono UI | **NO** — sólo texto |

**Tamaño/aspect ratio**:
- Sospechosos y víctima: 3:4 vertical, medio cuerpo (víctima: cabeza-hombros)
- Escenarios: 16:9 horizontal
- Pruebas objeto: 1:1 cuadrado
- Pruebas documento / video CCTV: 4:5 vertical

**Naming al guardar**:
```
assets/img/suspects/Caso5/Sospechosos/{Nombre}-{Pose}.png
assets/img/suspects/Caso5/Pruebas/P{N} — {nombre}.png
assets/img/suspects/Caso5/Retrato_Victima_caso5.png
assets/img/suspects/Caso6/...     (igual estructura)
assets/img/suspects/Caso7/...     (igual estructura)
assets/img/scenes/Escenario_Salamanca.png
assets/img/scenes/Escenario_Callejon_Sagasta.png
assets/img/scenes/Escenario_Sotano_Aravaca.png
assets/img/ui/icon-uv-light.svg   (icono toolbar)
```

---

# ÍNDICE

- [CASO 5 — El cajón (Salamanca)](#caso-5--el-cajón)
  - [Víctima · Hermes Mora](#hermes-mora--víctima)
  - [Aurelia Lobera · 3 poses](#aurelia-lobera)
  - [Damián Mora · 3 poses](#damián-mora)
  - [Inés Quirós · 3 poses (CULPABLE)](#inés-quirós--culpable)
  - [Roque Vellido · 3 poses](#roque-vellido)
  - [Escenario · Piso Salamanca](#escenario--piso-salamanca)
  - [Pruebas (10)](#pruebas-caso-5)
- [CASO 6 — Estudio Caracedo (Almagro / Sagasta)](#caso-6--estudio-caracedo)
  - [Víctima · Modesto Caracedo](#modesto-caracedo--víctima)
  - [Sara Caracedo · 3 poses](#sara-caracedo)
  - [Néstor Galindo · 3 poses](#néstor-galindo)
  - [Pedro Pinhel · 3 poses (CULPABLE — cerebro)](#pedro-pinhel--culpable-cerebro)
  - [Marina Caracedo · 3 poses (CULPABLE — ejecutora)](#marina-caracedo--culpable-ejecutora)
  - [Eulogio Pacheco hijo · 3 poses](#eulogio-pacheco-hijo)
  - [Escenarios (Bufete · Callejón Sagasta)](#escenarios-caso-6)
  - [Pruebas (8)](#pruebas-caso-6)
- [CASO 7 — El sótano (Aravaca)](#caso-7--el-sótano)
  - [Víctima · Camino Quintela](#camino-quintela--víctima)
  - [Isma Quintela · 3 poses](#isma-quintela)
  - [Florinda Bárcena · 3 poses](#florinda-bárcena)
  - [Dr. Manuel Ródenas · 3 poses](#dr-manuel-ródenas)
  - [Elías Mora · 3 poses (CULPABLE)](#elías-mora--culpable)
  - [Vicente Solera · 3 poses (CULPABLE)](#vicente-solera--culpable)
  - [Escenario · Sótano Aravaca](#escenario--sótano-aravaca)
  - [Pruebas (7)](#pruebas-caso-7)
- [UI — Icono herramienta luz UV](#ui--icono-luz-uv)

---

# CASO 5 · El cajón

> Piso del barrio de Salamanca. Un hombre de 80 años ha muerto en su cama.
> El detective investiga a un pariente que apenas recuerda. La herramienta UV
> desvela una combinación de caja grabada en madera, sangre vieja en fotografías
> y el nombre "ELENA" escrito en un papel aparentemente en blanco.
> Ambientación: salón-dormitorio de un piso antiguo con fotos de toda una vida.

---

## Hermes Mora — VÍCTIMA

```
Police archive portrait, 3:4 vertical aspect ratio, identification-card style,
framing head and shoulders only, centered.

Art style: digital oil painting illustration, semi-realistic stylized character
art for a noir detective adventure game (Disco Elysium / classic 1990s
point-and-click mystery game tradition). Soft painterly brush strokes, smooth
volumetric rendered shading, visible texture of digital oil paint. NOT
cel-shading, NOT flat colors, NOT anime, NOT 3D, NOT photorealistic.

Background: plain muted desaturated grey-blue archival backdrop, slight
vignette, no decoration — forensic record from a Spanish police archive.

Lighting: even cool documentary lighting from the front, slight rim light from
behind for separation.

Subject — DETAILED FACE (must NOT resemble any common illustration character,
generate a unique original face):
- 80 year-old Spanish man, former civil servant of the Ministry of Health
- Face: deeply lined forehead, heavy jowls, prominent nose with slight
  downward curve, thin lips slightly parted in repose, hooded watery pale
  blue eyes set under sparse white eyebrows, faint age spots on the cheeks
  and forehead, sunken temples, gaunt cheekbones
- Hair: very sparse white hair combed sideways over a mostly bald crown,
  two or three thin strands, pale scalp visible
- Build: thin and frail, slightly hunched shoulders barely visible

Clothing: old-fashioned cream-coloured dress shirt with a faded brown
cardigan buttoned to the top, the look of a man who never fully retired
from formality.

Mood: lifeless documentary tone, neutral expression, eyes open and direct,
no smile, face of a man photographed for the record.

Composition: head and shoulders centered, eyes at upper third.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D render,
children cartoon, smile, warm palette, full body, deformed, text, watermark,
smile, youthful, healthy.
```

---

## Aurelia Lobera

> 75 años. Vecina del mismo rellano durante décadas. Fue la pareja secreta de
> Hermes durante veinte años. Menuda, pulcra, pelo blanco corto. Su nerviosismo
> es el de quien guarda un secreto muy íntimo, no el de quien ha matado.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background slightly out-of-focus. Warm key light
from upper-left at 45 degrees, soft falloff.

Art style: digital oil painting illustration, semi-realistic stylized character
art for a noir detective adventure game (Disco Elysium / classic 1990s
point-and-click mystery game tradition). Soft painterly brush strokes, smooth
volumetric rendered shading, visible texture of digital oil paint. NOT
cel-shading, NOT flat colors, NOT anime, NOT 3D, NOT photorealistic.

Subject — DETAILED FACE (must NOT resemble any common illustration character,
generate a unique original face):
- 75 year-old Spanish woman, retired, diminutive and immaculately neat
- Face: small oval face, fine wrinkles fanning from the corners of her
  eyes and lips, a slightly upturned nose, thin but kind lips, soft warm
  brown eyes, defined cheekbones with a touch of faded rouge, very
  slight double chin, pale Mediterranean complexion
- Hair: short white hair cut close to the head, neatly set in a classic
  older Spanish woman style, dense and clean
- Build: petite and upright, narrow shoulders, small hands

Clothing: a knee-length wool skirt in dove grey, a neat white blouse with
a small rounded collar, a cream cardigan with pearl buttons, a thin gold
chain with a small cross at the throat, small pearl stud earrings,
practical flat shoes partially visible.

Pose & expression (NEUTRAL): standing upright, weight evenly balanced on
both feet, both hands clasped in front of her body at waist height,
direct but gentle gaze, lips set in a composed line — the look of someone
accustomed to keeping things to themselves.

Composition: subject slightly off-center, eyes at upper third.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D,
children cartoon, deformed, text, watermark, revealing clothing, young,
masculine features, multiple people.
```

### Pensativa (adjuntar NEUTRAL aprobada)

```
[Same art style, same subject, same background — ATTACH approved Neutral portrait
as reference image]

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet,
three-quarter angle, same dark interrogation background.

Same subject as reference: Aurelia Lobera, 75 year-old Spanish woman, petite
and neat, short white hair, grey skirt, cream cardigan, pearl earrings.
CRITICAL: same face, same hair, same clothing as the approved Neutral.

Pose & expression (PENSATIVA / TALKING): head tilted slightly down, eyes
looking somewhere past the detective — lost in a memory she is deciding
whether to share, lips barely parted, hands clasped more tightly in front of her,
a faint shadow of grief across her brow.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral — no new clothing, no changed hair, no changed face.
```

### Nerviosa (adjuntar NEUTRAL aprobada)

```
[Same art style, same subject, same background — ATTACH approved Neutral portrait
as reference image]

Same subject as reference: Aurelia Lobera. CRITICAL: same face, same hair, same
clothing as the approved Neutral.

Pose & expression (NERVIOSA / NERVOUS): her composure has cracked — she touches
the pearl chain at her throat with one hand, the other grips the hem of her
cardigan, she looks sideways and slightly down rather than at the detective,
her lips are pressed together tightly, a thin sheen of discomfort on her
otherwise composed face — nothing dramatic, just the brittle edge of a woman
who has spent fifty years keeping one secret.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Damián Mora

> 52 años. Sobrino de Hermes, primo lejano del detective. Heredero oficial.
> Nervioso de forma crónica sin que se sepa bien por qué. Traje barato, corbata
> aflojada. Su mujer es sobrina del médico del caso 4.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background slightly out-of-focus. Warm key light
from upper-left at 45 degrees, soft falloff.

Art style: digital oil painting illustration, semi-realistic stylized character
art for a noir detective adventure game (Disco Elysium / classic 1990s
point-and-click mystery game tradition). Soft painterly brush strokes, smooth
volumetric rendered shading. NOT cel-shading, NOT flat colors, NOT anime, NOT
3D, NOT photorealistic.

Subject — DETAILED FACE (unique original face):
- 52 year-old Spanish man, middle-management office worker
- Face: rounded slightly pudgy face, receding hairline with a widow's peak,
  dark brown eyes that dart rather than hold, short flat nose, a small
  unremarkable mouth, faint stubble on the jaw from not shaving properly,
  medium olive complexion with a slightly sallow undertone — a face that
  conveys mild anxiety even in repose
- Hair: thinning dark brown hair cut short, the hairline visibly retreating,
  slightly damp at the temples
- Build: average height, slightly soft around the middle, unathletic posture

Clothing: a cheap navy-blue suit jacket, the seams slightly off at the
shoulders, a white shirt with a loose collar, a burgundy-striped tie
hanging slightly crooked and loosened — the look of a man who dressed
for something and then forgot he was dressed.

Pose & expression (NEUTRAL): standing slightly hunched forward, hands
knees, hands loosely linked, a default worried look on his face — not
frightened exactly, but perpetually braced for the next bad thing.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D,
children cartoon, deformed, text, watermark, expensive suit, calm
expression, confident posture.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Damián Mora, 52, cheap navy suit, loosened tie, thinning dark
hair. CRITICAL: same face, same clothes as approved Neutral.

Pose & expression (PENSATIVO): he is thinking through something he would
rather not have to think about — eyes focused on the middle distance, left
hand gripping the elbow of his right arm, small frown forming across his
brow, lips pressed tight, the posture of a man calculating whether the
truth or a lie is more expensive right now.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Damián Mora. CRITICAL: same face, same clothes as approved Neutral.

Pose & expression (NERVIOSO): visibly agitated — he has taken a step
back, one hand flat on the table as if to steady himself, eyes wide
and blinking rapidly, a sheen of sweat on his forehead and upper lip, mouth
half open as if caught mid-word, the collar of his shirt now noticeably damp.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Inés Quirós — CULPABLE

> 40 años. Auxiliar de geriatría, cuatro años atendiendo a Hermes dos veces
> por semana. Profesional, contenida, mide cada palabra. Llegó a las 9:15 ese
> martes. No reveló nada en el cajón: sabía exactamente lo que buscaba.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background slightly out-of-focus. Warm key light
from upper-left at 45 degrees, soft falloff.

Art style: digital oil painting illustration, semi-realistic stylized character
art for a noir detective adventure game (Disco Elysium / classic 1990s
point-and-click mystery game tradition). Soft painterly brush strokes, smooth
volumetric rendered shading. NOT cel-shading, NOT flat colors, NOT anime, NOT
3D, NOT photorealistic.

Subject — DETAILED FACE (unique original face, CULPABLE — controlled, no
dramatic villain signals; her guilt should be invisible in neutral pose):
- 40 year-old Spanish woman, geriatric care assistant
- Face: smooth oval face with a controlled symmetry, medium-set dark eyes
  that give very little away — a professional face trained to be calm near
  the sick and dying, a straight well-defined nose, thin lips that curve
  neither up nor down, light olive complexion, no visible makeup except
  a faint trace of concealer under the eyes, high cheekbones, clean jaw
- Hair: dark brown hair pulled back in a tight low bun, no stray strands,
  very neat and practical
- Build: average height, slim but not fragile, the posture of someone who
  spends long days on their feet

Clothing: dark navy clinical trousers, a white short-sleeved uniform top
with a small institutional embroidery on the chest pocket (no readable text),
a thin navy fleece zip-up open over it, practical rubber-soled shoes barely
visible, no jewellery, a plain watch on the left wrist.

Pose & expression (NEUTRAL): standing very upright, hands held flat
against the front of her thighs,
gaze direct and unreadable — the composed mask of someone who has decided
not to show anything, which itself is slightly off.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, 3D, photorealistic, villain expression,
shifty eyes, dramatic shadows, smirk, blood, nurse cap, outdated uniform.
```

### Pensativa (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Inés Quirós, 40, white clinical top, dark navy fleece, hair in
tight bun. CRITICAL: same face, same hair, same clothing.

Pose & expression (PENSATIVA): a barely perceptible recalibration — she has
just heard something she needed to process, eyes drop briefly to her hands
on her thighs, one hand curls slightly inward, her expression remains almost
neutral except for the tiniest compression of her lips and a slight stillness
— a professional who never panics, but is thinking very fast.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nerviosa (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Inés Quirós. CRITICAL: same face, same hair, same clothing.

Pose & expression (NERVIOSA): the mask has developed a hairline crack — she
has broken eye contact and is looking at a fixed point on the table, one hand
grips the other wrist, her jaw is set slightly harder than before, there is a
faint tightening around the eyes — still controlled, still not dramatic, but
the absence of movement is now a thing in itself.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral — still controlled, no wild panic, no guilty
expressions. Subtle crack, not a breakdown.
```

---

## Roque Vellido

> 66 años. Antiguo vecino de la calle Goya de hace cuarenta años. Pelo escaso,
> bigote blanco, mirada directa que no pierde contacto. Reconoce al detective
> nada más verle. Sabe cosas que nunca le han preguntado.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background slightly out-of-focus. Warm key light
from upper-left at 45 degrees, soft falloff.

Art style: digital oil painting illustration, semi-realistic stylized character
art for a noir detective adventure game (Disco Elysium / classic 1990s
point-and-click mystery game tradition). Soft painterly brush strokes, smooth
volumetric rendered shading. NOT cel-shading, NOT flat colors, NOT anime, NOT
3D, NOT photorealistic.

Subject — DETAILED FACE (unique original face):
- 66 year-old Spanish man, retired, from Guadalajara
- Face: strong-boned working-class face, pronounced jawline, a full white
  walrus moustache above thin lips, slightly bulbous nose with visible pores,
  sharp dark eyes set under heavy salt-and-pepper brows — eyes that hold
  contact and do not look away, deep lines from nose to chin, tanned
  Mediterranean complexion with weather damage from decades outdoors
- Hair: very sparse hair, close-cropped silver, a near-bald crown with a
  neat fringe remaining at the front and sides
- Build: medium-stocky, broad shoulders, the frame of a man who worked
  physically most of his life, slight belly in old age

Clothing: a dark green anorak or windcheater zip-up jacket, open at the
collar, a plain navy flannel shirt underneath, no tie, simple dark trousers,
the unpretentious clothing of a man who drove from Guadalajara and did not
dress for the police.

Pose & expression (NEUTRAL): standing with a slightly forward lean, both
hands resting on the back of an unseen chair
in front of him — open, nothing to hide — direct gaze meeting the detective's
eyes without hesitation, a stillness that comes from having already decided
to be honest.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, 3D, photorealistic, suit and tie, young,
thin moustache, nervous expression.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Roque Vellido, 66, green anorak, white moustache, near-bald.
CRITICAL: same face, same hair, same clothing.

Pose & expression (PENSATIVO): he is remembering — one hand has moved to
stroke his moustache, eyes go slightly unfocused and look to the middle
distance, the directness replaced briefly by a passage through forty years
of memory, a faint nostalgic sorrow at the corner of his mouth.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Roque Vellido. CRITICAL: same face, same clothes.

Pose & expression (NERVIOSO): he knows something important is being
approached and he is deciding how much to say — he has taken a half
step back, one hand grips the edge of the table, the jaw
tightens under the moustache, his eyes finally break contact for one
moment, looking down, before they come back up with a resolution.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Escenario — Piso Salamanca

```
Establishing shot of a crime scene location, 16:9 aspect ratio, wide cinematic
framing. NO PEOPLE in frame — fully empty stage for character compositing.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium / classic mystery adventure game tradition).
Painterly detailed background, warm atmospheric lighting, rich textures. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Location: the cluttered living room and writing desk area of a Madrid third-
floor apartment in the Salamanca neighbourhood, belonging to an 80-year-old
man who has lived there for fifty years. Every surface holds layers of a life:
framed photographs of different decades on the walls, a dark wooden desk with
a three-drawer unit, a small lamp with a yellowed shade, a velvet armchair
with a worn patch on one arm, faded floral wallpaper, thick drapes in dark
green partially drawn.

Lighting: early morning weak Madrid sunlight filtering through partially
drawn curtains, casting long warm bars of light across the parquet floor
and the desk, the rest of the room in deep amber shadow. The desk lamp is
still on from the night before, its warm yellow light competing with the
morning light.

Interactive elements visible (place naturally, do not foreground them):
- Wooden writing desk with a locked drawer visible in the lower left,
  a small brass combination padlock on the drawer handle
- Several framed black-and-white photographs on the wall above the desk
  (faces not visible or turned slightly — no readable faces)
- A calendar on the far wall, one date circled in red ink (date illegible
  but the circle is prominent)
- A medicine tray on the desk with several bottles of pills
- A half-finished glass of water on the bedside table visible through a
  doorway in the background
- A worn velvet armchair with a newspaper folded on the seat

Camera: 50mm equivalent, eye-level, mid-distance, capturing the room as a
whole. Upper half of frame should be clean for character portrait compositing.

Atmosphere: dusty, lived-in, melancholic — the home of an old man who has
been guarding something for fifty years.

Style ID: undersuspi-noir-v1.

NEGATIVE: modern minimalist interior, IKEA furniture, bright clean space,
people, text, photorealistic, anime, 3D, cel-shading, empty room, clinical
hospital setting.
```

---

## Pruebas Caso 5

### P1 — Informe Forense (inyección de barbitúrico)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
document placed flat on a dark wooden desk surface, soft shadow from off-frame
lamp.

Art style: digital oil painting illustration, semi-realistic stylized prop art
(Disco Elysium tradition). Soft painterly brush strokes. NOT cel-shading, NOT
flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: official Spanish forensic autopsy report, single A4 page,
contemporary 2020s format.

Visual content (text MUST NOT be readable):
- Modern laser-printed official forensic header with a coat-of-arms style
  emblem suggesting "Instituto de Medicina Legal" (illegible, painterly)
- Two columns of typed paragraphs, all text blurred and illegible
- A small anatomical sketch of a human arm in black ink with an arrow
  pointing to the inner forearm — indicating an injection site
- Two small arrows or callout boxes comparing two different needle sizes
  (visual annotation, no readable text)
- An official stamp in faded red ink at the lower right
- Signature line with illegible swirling signature
- Small paperclip at the top edge
- Faint coffee ring stain near a corner

Period detail: contemporary 2020s Spanish clinical aesthetic, crisp white
paper, modern official look but austere.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, photorealistic, 3D, anime, gore, body, autopsy
table, body bag, cel-shading.
```

### P2 — Cajón con Candado

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from slight top-down 30-degree angle, placed on dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a heavy dark walnut wooden desk drawer, removed from the desk and
placed flat, approximately 45cm wide by 30cm deep. On the front face of
the drawer: a small brass combination padlock with a four-digit numeric
dial. The wood is old, slightly worn at the edges, the surface has a
network of fine scratches from decades of use. The brass lock is newer
than the drawer — installed later. A small label beneath the lock is
faded and unreadable.

Lighting: single raking side light from the right, casting a long shadow
from the padlock across the wooden surface, revealing the grain and
scratches of old wood.

Markings: a small forensic evidence tag beside the object, neutral grey,
no readable text.

Style ID: undersuspi-noir-v1.

NEGATIVE: readable text, open drawer, modern plastic drawer, new furniture,
cel-shading, flat, anime, 3D, photorealistic.
```

### P3 — Fotografía de Grupo 1985

```
Evidence object photograph, 1:1 square aspect ratio, single object centered,
top-down 30-degree angle, placed on dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a framed black-and-white photograph from the mid-1980s, approximately
18×13cm in a thin dark wooden frame. The photo shows five adults gathered in
what appears to be an outdoor courtyard or garden in summer. The figures are
recognisably adults but their faces are slightly overexposed or turned at angles
that prevent identification — one figure wearing a police commissioner's uniform
(the front of the uniform visible with epaulettes and a badge, no readable text),
a woman holding a small baby, and two older individuals. The photo has the
slightly grainy, slightly overexposed quality of amateur photography from that era.
The glass of the frame has a faint fingerprint smear.

Lighting: even top-down museum lighting, slight shadow from the frame edges.

Style ID: undersuspi-noir-v1.

NEGATIVE: readable faces, readable text, modern photo, digital photo,
cel-shading, flat, anime, 3D, photorealistic, blood visible.
```

### P4 — Carta Inacabada de Hermes

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay view,
document on dark wooden desk surface, partial soft shadow.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: a single sheet of yellowish-cream writing paper, slightly
trembling handwriting in dark blue fountain pen, folded once and reopened.

Visual content (text MUST NOT be readable):
- Cursive handwriting, each letter formed slowly by an elderly hand — the
  strokes are deliberate but shaky, the pressure uneven
- The letter fills roughly two-thirds of the page before stopping abruptly
  mid-line
- The text is entirely illegible — cursive loops and strokes but no
  decipherable words
- The first line appears to be a salutation with slightly larger letters
  (a name, illegible)
- One line in the middle is written with slightly heavier pressure, as if
  that particular thing needed emphasis
- The final line trails off, the last mark being an unfinished word or a
  dropped pen
- A small blue ink blot where the pen was set down
- Slight yellowing at the edges of the paper

Period detail: contemporary (2026) but on old cream writing paper from a
notepaper block that has been in a drawer for twenty years.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, printed document, typed letter, modern paper,
cel-shading, flat, anime, 3D, photorealistic.
```

### P5 — Fotografías de Carmen Lobera

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a loose stack of seven old printed photographs from the 1980s, spread
slightly on the mat so that three or four are visible. The photographs show a
young woman in her early thirties with dark hair, in various outdoor and
indoor settings, the colour slightly faded and yellowish with age. The faces
in the photos are at angles or slightly blurred — identifiable as the same
person across the photos but not readable as a specific portrait. On the
reverse of the top photo, handwriting in faded pencil (illegible). Along the
edges and corners of two photos: dark brownish stains — dried old blood,
irregular and faint, not dramatic. The photos are held loosely together by
a strip of old tape at the top.

Lighting: single side raking light that catches the texture of the aging
photo paper and makes the stains at the edges slightly more visible.

Style ID: undersuspi-noir-v1.

NEGATIVE: readable faces, readable text, fresh blood, dramatic gore,
cel-shading, flat, anime, 3D, photorealistic.
```

### P6 — Hoja con Nombre "Elena" (bajo luz UV)

> **Nota**: generar DOS versiones: (A) versión normal — hoja en blanco
> aparentemente, y (B) versión UV — con el nombre "ELENA" en escritura
> cursiva de sangre seca marrón visible. La versión B es la que aparece
> en la pantalla cuando el jugador activa la herramienta UV.

#### P6-A · Versión normal (sin luz UV)

```
Evidence object photograph, 1:1 square aspect ratio, top-down view, dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a single plain cream paper sheet, quarter A4 size (approximately
15×10cm), completely blank. The paper has a very slight texture, slightly
yellowed at the edges, placed flat on the dark felt mat. There are no marks,
no writing, no stains visible to the naked eye. It looks like a filler sheet
between documents.

Lighting: even top-down light, the paper casting a small clean shadow on the
mat.

Style ID: undersuspi-noir-v1.

NEGATIVE: visible writing, stains, text, marks of any kind, dirty paper,
damaged paper, cel-shading, flat, anime, 3D, photorealistic.
```

#### P6-B · Versión UV (con el nombre revelado)

```
Evidence object photograph, 1:1 square aspect ratio, top-down view, dark felt
mat. IMPORTANT: This is the same paper sheet as P6-A but viewed under UV
ultraviolet light.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

The scene: the same cream paper sheet, now photographed under UV illumination.
The surrounding environment and mat are now rendered in deep blue-violet tones,
as UV light makes everything glow slightly in blue-purple.

On the paper, now visible in UV: a single word written in careful cursive
handwriting — "ELENA" — in dried old blood that appears as a dark brownish-
maroon under UV light. The letters are formed slowly, carefully, with a finger
rather than a pen — each stroke thick and slightly uneven at the edges.
The word is centered on the paper and takes up about a third of the available
space. The rest of the paper remains blank.

The UV glow: the paper fluoresces slightly in a soft blue-white, making
the blood-written name stand out in stark dark contrast.

Style ID: undersuspi-noir-v1. CRITICAL: only the word ELENA written in
dried blood should appear — no other text, no other marks.

NEGATIVE: fresh blood, bright red blood, other words, typed text, printed
letters, additional stains, cel-shading, flat, anime, 3D, photorealistic.
```

### P7 — Sobre con Dinero (membrete Estudio Caracedo)

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a standard manila envelope, approximately 22×11cm, opened but not
torn — the flap is open revealing a thick stack of euro banknotes inside,
50-euro notes in a neat bundle. The front of the envelope shows an embossed
or printed letterhead stamp in the upper-left corner: a small rectangle
suggesting a law firm's header with a simple emblem and lines of text that
are illegible but imply an address. The envelope has been handled — slight
crease on one corner, a fingerprint smudge on the paper.

Lighting: single side raking light, the bundle of notes casting a slight
shadow inside the envelope.

Style ID: undersuspi-noir-v1. CRITICAL: the letterhead text must be illegible.

NEGATIVE: readable text, readable letterhead, modern plastic envelope,
cel-shading, flat, anime, 3D, photorealistic.
```

### P8 — Movimientos Bancarios de Inés

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk surface, soft lamp shadow.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: printed bank statement, A4 page, contemporary 2020s format.

Visual content (text MUST NOT be readable):
- Standard bank statement layout: header section with logo placeholder
  (illegible) at the top, account number masked
- A table of transactions in two columns (date | amount | description),
  all text illegible
- Several rows highlighted in yellow marker, each in the same monthly
  pattern — suggesting the same amount appearing every month
- The last highlighted entry is slightly larger than the others — a
  circled annotation in red ballpoint in the margin (illegible number)
- A thick ruled line separating a final running total at the bottom
- Small official footer stamp (illegible)
- A paper evidence tag clipped to the corner

Period detail: Spanish retail bank statement, 2026 format, laser-printed,
slightly glossy paper.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable amounts, readable account number, readable bank name,
cel-shading, flat, anime, 3D, photorealistic.
```

### P9 — Calendario con Día Marcado

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a wall calendar, removed from the wall and placed flat. A standard
month-view paper calendar, showing the month of August in its classic grid
layout. The calendar is cheap and plain — black numbers on white grid, a
small generic image at the top (blurry, not relevant, perhaps a landscape
photo). All the date numbers are illegible except the visual impression of
a grid. One date in the middle of the month is circled in thick red ballpoint
ink — the circle is emphatic, drawn multiple times, the only mark on the
entire calendar. No written notes beside it.

Lighting: slight raking light from the left revealing the slight texture
of cheap calendar paper and the indentation of the red pen circle.

Style ID: undersuspi-noir-v1. CRITICAL: no readable numbers or text,
only the visual presence of the red circle.

NEGATIVE: readable dates, readable month name, readable numbers, modern
digital calendar, cel-shading, flat, anime, 3D, photorealistic.
```

### P10 — Registro del Portero

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk surface.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: a handwritten visitor log kept by a building concierge —
a small squared-paper notebook opened to a two-page spread.

Visual content (text MUST NOT be readable):
- Squared paper pages of a standard cheap notebook, opened flat
- Four or five rows of handwritten entries in blue ballpoint, each on its
  own line — the format suggesting name / floor / time of arrival / time
  of departure (columns implied by rough alignment, all text illegible)
- One entry about two-thirds down the page has a small star or asterisk
  drawn beside it in the margin
- The last entry visible appears to have been written in a slightly
  different pen (slightly finer, suggesting a different time)
- A horizontal line ruled across the page separating days
- The page has a faint grid of squares typical of French-ruled paper

Period detail: cheap Spanish concierge log notebook, 2026, unpretentious
everyday stationery.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable names, readable times, typed text, printed form,
modern digital tablet, cel-shading, flat, anime, 3D, photorealistic.
```

---
---

# CASO 6 · Estudio Caracedo

> Un abogado de 71 años ha sido apuñalado en el callejón trasero de su propio
> bufete en la calle de Almagro. Hay una pluma manchada de sangre cerca del
> cuerpo que parece acusar al socio — pero el estanquero de la esquina vio
> quién la llevó allí. Mecánica de prueba plantada.

---

## Modesto Caracedo — VÍCTIMA

```
Police archive portrait, 3:4 vertical aspect ratio, identification-card style,
framing head and shoulders only, centered.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Background: plain muted desaturated grey-blue archival backdrop, forensic
record style.

Lighting: even cool documentary front lighting, slight rim light from behind.

Subject — DETAILED FACE (unique original face):
- 71 year-old Spanish man, founding partner of a law firm
- Face: strong authoritative face beginning to sag with age — heavy jaw
  with jowls starting to form, deeply grooved nasolabial folds, straight
  broad nose, thin pursed lips of a man accustomed to saying little,
  dark hooded eyes under grey-white thick eyebrows, slight bags under
  the eyes, a strong prominent forehead, tanned complexion going grey
- Hair: silver-white hair cut short and neat, combed to the side in a
  classic lawyer's style, full hair for his age
- Build: square-shouldered but starting to shrink with age, only visible
  from the shoulders up

Clothing: a dark charcoal suit jacket, a white dress shirt with a small
formal collar, a dark tie with a very subtle pattern, a silk pocket square
barely visible. The clothes of a man who has worn this combination every
day for forty years.

Mood: lifeless documentary tone, neutral expression, eyes open and direct,
no smile, the face of a man who has kept many secrets.

Composition: head and shoulders centered, eyes at upper third.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, 3D, photorealistic, smile, wound,
blood, dramatic lighting, warm palette.
```

---

## Sara Caracedo

> 38 años. Hija de la víctima, se estaba incorporando al bufete. Elegante,
> segura de sí misma — aunque esa seguridad se resquebraja cuando se habla
> de los archivos de su padre. Coartada sólida.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light from upper-left.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face):
- 38 year-old Spanish woman, corporate lawyer in a prestigious law firm
- Face: sharp elegant face, high distinct cheekbones, defined jaw, a straight
  nose with a slight upward tilt at the tip, almond-shaped dark brown eyes
  that assess rather than emote, slightly arched brows, full lips set in
  a composed and measured line, clear olive complexion, minimal makeup —
  just the precision of someone who controls her appearance
- Hair: dark brown hair in a sleek low chignon or a precise ponytail, no
  loose strands, very controlled
- Build: lean and upright, the posture of a lawyer who grew up being
  watched in courtrooms

Clothing: a well-tailored dark navy blazer with fine pinstripe, a crisp
white shirt underneath with a small pointed collar, a thin gold bangle
barely visible at the wrist, small gold stud earrings, a quality look
that modernises the family firm without abandoning its formality.

Pose & expression (NEUTRAL): standing straight, arms folded across her
chest, controlled
posture, chin slightly elevated — a woman accustomed to being the person
asking the questions, now being asked them.

Style ID: undersuspi-noir-v1.

NEGATIVE: casual clothing, dishevelled, anime, cel-shading, flat, 3D,
photorealistic, revealing clothing, tears.
```

### Pensativa (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Sara Caracedo, 38, navy pinstripe blazer, white shirt, dark
chignon. CRITICAL: same face, same hair, same clothing.

Pose & expression (PENSATIVA): the professional mask has developed a crack —
she is looking sideways and slightly down, one hand at her temple, elbow on
the table, processing something that conflicts with what she has rehearsed,
the chin is no longer elevated, a faint furrow between the brows.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nerviosa (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Sara Caracedo. CRITICAL: same face, same hair, same clothing.

Pose & expression (NERVIOSA): she is holding together but barely — a
barely contained tension in the set of her jaw, one hand is gripping the
edge of the table, her eyes are slightly wider than controlled, the
composed mouth is pressed into a thin line, the overall impression of
someone who has just been asked the question she prepared for but hoped
would not come.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Néstor Galindo

> 50 años. Socio del bufete desde los años 90. Nervioso de forma crónica.
> Está siendo extorsionado. Su pluma de Montblanc fue robada de su despacho
> para incriminarle. Es inocente pero parece culpable.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face — must read as immediately
suspicious even when innocent):
- 50 year-old Spanish man, senior law firm partner
- Face: a permanently worried face — pronounced dark circles under small
  darting brown eyes, deep frown lines between the brows even when not
  actively frowning, a slightly too-mobile mouth that compresses and
  releases in small nervous twitches, a long narrow nose, a weak chin
  that he compensates for with a neatly trimmed short beard, thinning
  salt-and-pepper hair at the temples, pallid unhealthy complexion
  with a slight greyish undertone
- Hair: dark hair going grey at the sides, slightly too long — not styled,
  as if he forgot to get a haircut two weeks ago
- Build: lean, slightly hunched, the posture of someone who has been
  expecting bad news for years

Clothing: a slightly rumpled charcoal suit that was expensive ten years
ago, a grey tie loosened at the collar, a white shirt with the top
button undone, a faint sweat stain barely visible at the collar — the
look of a man who has been in this jacket for too many hours.

Pose & expression (NEUTRAL): standing with shoulders slightly slumped,
weight on one leg, one hand
gripping the other wrist on the table, eyes that never quite settle —
the body language of chronic anxiety that predates whatever he is being
accused of.

Style ID: undersuspi-noir-v1.

NEGATIVE: calm expression, neat appearance, cel-shading, flat, anime,
3D, photorealistic.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Néstor Galindo, 50, rumpled charcoal suit, loosened grey tie.
CRITICAL: same face, same clothes.

Pose & expression (PENSATIVO): realising something about how he is being
perceived — he is choosing his next words very carefully, the nervous energy
momentarily stilled into calculation, eyes fixed on a point in front of him,
lips slightly parted, one hand flat on the table.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Néstor Galindo. CRITICAL: same face, same clothes.

Pose & expression (NERVIOSO): barely contained panic — the evidence about
the fountain pen has just been placed in front of him, he is leaning
forward with both hands on the table, eyes wide and blinking rapidly, an
agitated half-rise from the seat, the knot of his tie is now pulled even
further down, his mouth is open mid-speech defending himself.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Pedro Pinhel — CULPABLE (cerebro)

> 65 años. Cliente histórico del bufete. Empresario inmobiliario. Bien vestido,
> educado hasta la esterilidad. El último vivo del círculo del padre del
> detective, el "cliente del 86". Su mask de respetabilidad nunca se quiebra
> del todo — incluso cuando es culpable.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face — CULPABLE but must look
completely respectable, no villain signals):
- 65 year-old Spanish man, wealthy real estate businessman, client of an
  exclusive Madrid law firm for forty years
- Face: a handsome-in-its-day face now settled into authoritative age —
  square jaw, clean-shaven with the faint blue shadow of a heavy beard
  always recently shaved, strong straight nose, thin perfectly horizontal
  lips that smile precisely when required and no more, calm steady grey
  eyes that observe more than they reveal, a broad forehead, very slight
  bags under the eyes, immaculate medium olive complexion, the face of
  a man who controls every room he enters
- Hair: thick silver-grey hair, cut and styled with care — swept back
  from a strong hairline, the hair of someone who invests in his
  appearance
- Build: tall, broad-shouldered, still physically imposing, impeccable
  posture

Clothing: a very expensive dark charcoal double-breasted suit, perfectly
cut, not a seam out of place, a silk tie in deep burgundy with a subtle
woven pattern, a white shirt with double cuffs, a silk pocket square in
cream, a signet ring on the right hand — everything speaks of old money
and precision.

Pose & expression (NEUTRAL): standing tall, weight balanced on the back
leg, shoulders relaxed,
one arm resting along the back of an empty chair, the other hand on the table,
eyes meeting the detective with absolute calm — a man who has never felt
guilty in his life.

Style ID: undersuspi-noir-v1.

NEGATIVE: villain expression, shifty eyes, nervous body language,
dishevelled appearance, cel-shading, flat, anime, 3D, photorealistic.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Pedro Pinhel, 65, double-breasted charcoal suit, burgundy
silk tie, silver hair swept back. CRITICAL: same face, same hair, same
clothing.

Pose & expression (PENSATIVO): an almost imperceptible adjustment — he
has heard something he did not expect and is calculating the response.
Nothing visible except a half-second flicker in the grey eyes and the
faintest tightening of the already minimal lips. He might be thinking
about what to have for dinner, or deciding how to destroy someone — his
expression gives no information.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Pedro Pinhel. CRITICAL: same face, same clothing.

Pose & expression (NERVIOSO): the mask remains almost intact but one
crack: he has shifted forward very slightly and his hands are now both
on the table, fingers slightly spread — a micro-aggression in his
posture, a man claiming space because he feels it being taken from him.
The eyes are still calm but the lips are fractionally compressed, and
the jaw muscle is just perceptibly tighter. The most dangerous he ever
looks is not rage — it is this.

Style ID: undersuspi-noir-v1.

NEGATIVE: panic, fear, obvious guilt, dishevelled, same as neutral.
```

---

## Marina Caracedo — CULPABLE (ejecutora)

> 28 años. Sobrina de Modesto, becaria del bufete. Joven, inteligente,
> ambiciosa en exceso. Llegó al callejón con la pluma de Néstor en la mano.
> Cuando presionas la máscara, lo que aparece no es miedo — es cálculo.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face — CULPABLE, young, must look
entirely credible as an ambitious professional, no villain markers):
- 28 year-old Spanish woman, law firm intern-trainee
- Face: sharp narrow face, high angular cheekbones giving a slightly
  feline quality, a straight pointed nose, dark eyes set close together
  that are quick and assessing, thin arched brows, well-defined lips
  with a slight natural pout, clear light olive complexion, very slight
  sharpness at the jaw — an intelligent face that can look either
  charming or calculating depending on the angle
- Hair: dark brown hair, straight, worn loose to shoulder length or in a
  low messy bun — something between professional and young
- Build: slim, angular, the energy of someone who moves quickly and
  purposefully

Clothing: a sharply cut dark wool coat open over a plain black
turtleneck, well-fitted dark trousers, minimal jewellery — a thin ring
or no jewellery at all, flat leather shoes. The look is modern, sharp,
younger than the rest of the firm but trying to read as serious.

Pose & expression (NEUTRAL): standing with weight on one leg, the other
foot slightly crossed in front,
arms crossed lightly over her chest — not defensive, but a slight barrier —
eyes level and direct, a trace of impatience in the set of the chin.

Style ID: undersuspi-noir-v1.

NEGATIVE: revealing clothing, anime, cel-shading, flat, 3D, photorealistic,
obvious villainy, smirk.
```

### Pensativa (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Marina Caracedo, 28, dark wool coat, black turtleneck, dark
loose hair. CRITICAL: same face, same hair, same clothing.

Pose & expression (PENSATIVA): she is deciding which version of the story
to tell — the arms have uncrossed, one hand is now at her chin, elbow on
the table, the eyes have gone slightly inward, calculating rather than
deflecting.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nerviosa (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Marina Caracedo. CRITICAL: same face, same hair, same clothing.

Pose & expression (NERVIOSA): caught — the sharpness is now defensive.
Both feet flat on the floor, both hands gripping the edge of the table,
chin forward, eyes slightly wider and darting between the detective and
the evidence on the table. This is not the panic of the innocent — it is
the controlled aggression of someone who knows exactly which pieces of
evidence are dangerous and is trying to stay ahead of them.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Eulogio Pacheco hijo

> 50 años. Médico de formación pero trabaja como asesor legal-médico en el
> bufete. Correcto, formal, habla poco. Es el hijo del médico del caso 4,
> condenado. Lleva quince años construyendo una carrera propia.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face):
- 50 year-old Spanish man, medically-trained legal consultant
- Face: a precise, careful face — thin lips kept deliberately still,
  medium dark eyes set behind rectangular thin-framed reading glasses,
  clean-shaven with a very faint five-o'clock shadow, high forehead,
  a straight narrow nose, slight crow's feet at the corners of the eyes,
  faint lines around the mouth from decades of careful expressions,
  medium olive complexion, the composure of a doctor accustomed to
  delivering difficult news without inflection
- Hair: dark brown hair beginning to silver at the temples, cut short and
  neat, slightly receding hairline, parted to one side with precision
- Build: medium height, lean but not athletic — a man whose physicality
  is irrelevant to how he operates

Clothing: a dark navy suit, perfectly pressed, a white shirt and a plain
dark tie — almost identical to his father's suits, whether consciously
or not. The thin-framed rectangular glasses on the nose. No jewellery
except a plain wedding band.

Pose & expression (NEUTRAL): very still, very controlled — both hands
flat on his thighs, glasses slightly adjusted with one finger, waiting
to answer precisely what is asked and not one word more.

Style ID: undersuspi-noir-v1.

NEGATIVE: animated expression, casual clothing, without glasses, anime,
cel-shading, flat, 3D, photorealistic.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Eulogio Pacheco hijo, 50, dark navy suit, white shirt, dark tie,
thin rectangular glasses, silvering temples. CRITICAL: same face, same clothes.

Pose & expression (PENSATIVO): he is choosing how much to reveal about what
he knows — one hand at his chin, index finger pressed to his lips, the glasses
catching a glint of light as he looks slightly upward, a deliberate pause before
speaking.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Eulogio Pacheco hijo. CRITICAL: same face, same clothes, same glasses.

Pose & expression (NERVIOSO): the control is still there but applied with visible
effort — he has removed his glasses and is holding them in one hand, rubbing the
bridge of his nose with the other, looking down at the table, the most exposed we
ever see him — the glasses in the hand rather than on the face, the symbolic
removal of his professional barrier.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Escenarios Caso 6

### Escenario A · Interior Estudio Caracedo (sala de interrogación del bufete)

```
Establishing shot, 16:9 aspect ratio, wide cinematic framing. NO PEOPLE.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium tradition). Painterly, rich textures. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Location: the formal meeting room of a traditional Madrid law firm in the
Almagro district, circa 2026. Dark wood panelling on the walls, a long
oval conference table in dark mahogany, leather upholstered chairs, heavy
burgundy drapes on the windows (one slightly open showing the street below
in partial darkness), a crystal chandelier casting cold white light, oil
paintings on the walls in dark frames (subjects not distinguishable), a
sideboard with a decanter and glasses.

Lighting: the chandelier provides hard cold overhead light that creates
strong shadows under the furniture and along the wall panels, giving the
room a slightly oppressive formality. One window admits a thin strip of
orange street-lamp light from outside.

Interactive elements visible (naturally placed):
- A paper document folder on the conference table, closed, with a label
  (illegible)
- A stack of files on the sideboard, one slightly open
- A crystal ashtray (empty) on the table — an old firm
- The window showing the street below at night in the background

Camera: eye-level, 50mm equivalent, capturing the full length of the
conference table. Upper half of frame clean for character portrait compositing.

Atmosphere: formal, cold, oppressive — the kind of room where decisions
have been made that no one writes down.

Style ID: undersuspi-noir-v1.

NEGATIVE: modern open-plan office, IKEA furniture, bright modern lighting,
people, text, 3D, anime, cel-shading, photorealistic.
```

### Escenario B · Callejón trasero de Sagasta (escena del crimen)

```
Establishing shot, 16:9 aspect ratio, wide cinematic framing. NO PEOPLE.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT
anime, NOT 3D, NOT photorealistic.

Location: a narrow service alley behind a traditional Madrid office building
in the Almagro neighbourhood, late night. Stone-and-brick walls on both sides,
slightly damp, green waste bins along one wall, a metal fire door to the left
(the back entrance of the law firm), a small locked gate at the far end.
Puddles on the dark flagstone ground reflecting the one working streetlamp.
A plastic evidence marker cone visible on the ground (far end, small, not
centred).

Lighting: one functioning yellow sodium streetlamp at the far end of the
alley casts a long cone of orange light that tapers into almost complete
darkness in the foreground. A faint bleed of neon light over the roofline
from the main street beyond. Wet flagstones catch and fragment the
streetlamp reflection.

Interactive elements:
- An evidence marker cone on the ground (far alley, not centre-frame)
- The metal back door of the law firm (left wall) slightly ajar
- A damp cardboard box against the right wall
- A plastic refuse bag burst open and spilling near the back door
- The gate at the far end padlocked shut

Camera: eye-level, 50mm equivalent, looking down the length of the alley
from the street entrance. Upper frame clean.

Atmosphere: oppressive, dark, confined, very wet — the kind of place
you go when you don't want to be seen.

Style ID: undersuspi-noir-v1.

NEGATIVE: busy street, daytime, clean bright alley, people, body, blood
pool, text, 3D, anime, cel-shading, photorealistic.
```

---

## Pruebas Caso 6

### P1 — Cuchillo de Cocina

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a single kitchen knife, blade approximately 22cm, a plain budget-
range chef's knife with a black plastic riveted handle, slightly wet from
being retrieved from a storm drain. The blade has been forensically cleaned
but retains faint visible residue along the spine. The tip of the blade
has a very slight bend consistent with use. On the mat beside the knife:
a small millimetre ruler (forensic-style, no readable text).

Lighting: raking side light from the left, catching the metal surface and
the slight moisture on the blade.

Style ID: undersuspi-noir-v1.

NEGATIVE: dramatic blood pool, excessive gore, ornate knife, recognisable
brand, cel-shading, flat, anime, 3D, photorealistic.
```

### P2 — Papeles Ardidos

```
Evidence object photograph, 1:1 square aspect ratio, top-down view,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a loose scatter of partially burned document pages, approximately
a dozen sheets, some reduced to crumbling black fragments, others
surviving at 30-40% with yellowed scorched edges. The surviving fragments
show fragments of text rendered illegible — dark typing against yellowed
paper, the edges curling and carbonised. One larger fragment shows what
might be a table or letterhead layout but all text is illegible and
burned beyond reading. A light scattering of fine white ash surrounds
the pile. The overall impression is of something important and
irretrievable.

Lighting: even top-down light, the ash and burned edges catching slight
reflected light.

Style ID: undersuspi-noir-v1. CRITICAL: no readable text anywhere on
any fragment.

NEGATIVE: flames, fire still burning, readable text, legible documents,
modern paper, cel-shading, flat, anime, 3D, photorealistic.
```

### P3 — Cámara de Seguridad (figura femenina 22:17h)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: a CCTV still printed on plain paper, slightly curled, placed
flat.

Visual content (text MUST NOT be readable):
- CCTV image with moderate grain and the typical slight distortion of a
  wide-angle surveillance lens
- Scene: night-time view of the entrance to a narrow alley from street
  level — wet pavement, yellow sodium light at the far end, dark walls
- The figure: a young woman in a dark coat (below the knee), visible
  from behind or in three-quarter profile as she enters the alley,
  walking briskly — her face is NOT identifiable, her features blurred
  by the low resolution, but her build and dark coat are clear
- A timestamp burned in the upper-right corner of the CCTV still —
  four digit time visible as glyphs but not readable (approximately
  "22:17" in format but numbers illegible)
- A small printed reference in the lower margin (illegible)

Period detail: modern 2020s colour CCTV aesthetic, slight grain, slightly
desaturated.

Style ID: undersuspi-noir-v1. CRITICAL: figure's face not identifiable,
text not readable.

NEGATIVE: readable face, readable timestamp, daytime, bright image,
cel-shading, flat, anime, 3D, photorealistic.
```

### P4 — Movimientos Bancarios de Pinhel

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk.

Art style: digital oil painting illustration, semi-realistic stylized prop
art. NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: printed bank statement, A4 page, contemporary Spanish bank
format.

Visual content (text MUST NOT be readable):
- Standard bank statement header with logo placeholder (illegible) and
  masked account information
- Table of transactions: each row has a date column, description column,
  and amount column — all illegible
- Three rows near the bottom of the page are highlighted in red marker —
  three withdrawals on consecutive or nearby dates
- A handwritten annotation in red in the margin beside these rows,
  with the word circled and underlined (illegible, suggests emphasis)
- The three highlighted entries are each on a different row, with a
  visual separation suggesting different dates, the same amount column
  suggesting large sums each time
- An evidence sticker attached at the top corner

Style ID: undersuspi-noir-v1. CRITICAL: text and amounts must NOT be
readable.

NEGATIVE: readable text, readable amounts, cel-shading, flat, anime,
3D, photorealistic.
```

### P5 — Mensajes en el Móvil de Marina

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk.

Art style: digital oil painting illustration, semi-realistic stylized prop
art. NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: a printed forensic phone extraction report — a printed
summary of text messages from a mobile device, contemporary format.

Visual content (text MUST NOT be readable):
- Header section with case reference and device information (illegible)
- A transcript-style layout: alternating rows of text bubbles printed
  flat — some dark (sent), some lighter (received or timestamp) — all
  text illegible, just the visual bubble-and-timestamp rhythm of a
  messaging conversation printout
- Four sent messages visible as dark rows, each with a small timestamp
  beside it, no replies in between
- The last row of messages appears shorter (a few glyphs suggesting
  a brief cryptic message)
- A yellow highlighter mark over the fourth row
- An official evidence stamp in the footer (illegible)

Style ID: undersuspi-noir-v1. CRITICAL: text and message content must
NOT be readable.

NEGATIVE: readable messages, readable names, modern phone screen, phone
handset visible, cel-shading, flat, anime, 3D, photorealistic.
```

### P6 — Pluma Estilográfica con Sangre (PRUEBA PLANTADA)

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a Montblanc Meisterstück fountain pen, approximately 15cm long,
in the classic black resin body with gold fittings — a recognisably expensive
writing instrument. The pen cap is on. On the side of the cap and the very
tip of the cap's crown, a dark reddish-brown dried blood smear, no longer
fresh — the blood is dry and slightly cracking at the edges. The pen is
lying on its side on the dark mat. Beside it, a forensic evidence tag on
a small card (no readable text). The pen is unmistakably expensive and
out-of-place.

Lighting: single raking side light from the right, catching the gold
fittings and the dried dark smear on the cap.

Style ID: undersuspi-noir-v1.

NEGATIVE: readable text on pen, excessive blood, puddle of blood,
modern plastic pen, cel-shading, flat, anime, 3D, photorealistic.
```

### P7 — Declaración del Estanquero

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk.

Art style: digital oil painting illustration, semi-realistic stylized prop
art. NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: an official Spanish police witness statement, handwritten
by an interviewing officer on a standard form.

Visual content (text MUST NOT be readable):
- A standard Spanish official form, landscape or portrait layout, with
  pre-printed fields for name, document number, date, etc. — all
  illegible except the visual structure of form fields
- The body of the statement is handwritten in blue ballpoint, several
  paragraphs of close script, entirely illegible but clearly a long
  narrative statement
- One short paragraph is marked with a blue asterisk in the margin,
  emphasising its importance
- The form has a signature line at the bottom with an illegible signature
  in blue ballpoint, and an official stamp beside it
- The paper has a very slight fold down the centre where it was folded
  for an envelope

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, modern digital form, cel-shading, flat, anime,
3D, photorealistic.
```

### P8 — Movimientos Bancarios de Néstor

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk.

Art style: digital oil painting illustration, semi-realistic stylized prop
art. NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: printed bank statement, same visual format as P4 but a
different statement.

Visual content (text MUST NOT be readable):
- Same standard statement format as P4 but clearly a different account
  (different header proportions)
- The transaction table shows a repeating monthly pattern in one column —
  the same visual row structure appearing twelve times, suggesting
  monthly transfers
- Each row in the pattern has the same amount (illegible) going in the
  same direction — outgoing (suggested by consistent row formatting)
- A red circle around one row near the top drawn in ballpoint, with a
  question mark in the margin
- An evidence tag clipped to the top corner

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: same as P4.
```

---
---

# CASO 7 · El sótano

> Camino Quintela, periodista jubilada, ha aparecido ahogada en el sótano de
> su chalet de Aravaca. Estaba preparando la segunda edición de su libro sobre
> crímenes encubiertos de la Transición. Dos hombres vinieron juntos.
> La tabla de argumentación conecta sus declaraciones con las pruebas que
> las desmienten.

---

## Camino Quintela — VÍCTIMA

```
Police archive portrait, 3:4 vertical aspect ratio, identification-card style,
head and shoulders only.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Background: plain muted desaturated grey-blue archival backdrop, forensic record.

Lighting: even cool documentary front lighting, slight rim from behind.

Subject — DETAILED FACE (unique original face):
- 60 year-old Spanish woman, retired investigative journalist
- Face: a lively intelligent face beginning to settle into age — strong
  cheekbones, lines at the corners of alert hazel-brown eyes suggesting
  decades of reading fine print and skeptical squinting, a broad straight
  nose, medium lips that in life probably talked a great deal, short grey
  streaks cutting through thick dark hair, a strong defined chin, olive
  complexion, well-earned wrinkles from outdoor reporting
- Hair: thick dark brown hair with prominent silver streaks, cut to chin
  length in a practical journalist's style, slightly pushed behind one ear
- Build: sturdy and healthy for 60, an active woman, broad shoulders

Clothing: a plain navy turtleneck jumper, no jewellery except plain stud
earrings, the clothes of a woman who never cared about fashion and always
cared about the work.

Mood: lifeless documentary tone, neutral expression, eyes open and direct —
even in archive format this was a woman who stared down difficult questions.

Style ID: undersuspi-noir-v1.

NEGATIVE: warm palette, smile, dramatic expression, cel-shading, flat,
anime, 3D, photorealistic.
```

---

## Isma Quintela

> 33 años. Hijo de Camino. Delgado, ojeroso, distante. Ruptura familiar hace
> cinco años por desacuerdo sobre el libro. Coartada sólida (hospital en
> Valencia). Parece sospechoso pero no lo es.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face — must look suspicious but
be innocent):
- 33 year-old Spanish man, hospital nurse, estranged from his mother
- Face: thin narrow face with sharp features inherited from his mother
  (slightly modified — masculine version), very dark circles under
  wary brown eyes, a thin straight nose, tight thin lips that default to
  a closed defensive line, pale olive complexion with a slightly sallow
  undertone from too many night shifts, minimal beard — a few days of
  unshaved sparse stubble
- Hair: short dark hair slightly too long to be styled but too short to
  fall, slightly unwashed-looking, pushed back with fingers
- Build: slim and slightly gaunt, narrow shoulders, the posture of
  someone who braces for impact

Clothing: a dark grey hoodie or sweatshirt, a plain T-shirt visible at
the collar, dark jeans — the clothes of someone who drove through the
night to identify his mother.

Pose & expression (NEUTRAL): arms crossed, slightly turned away from the
detective, eyes holding contact reluctantly, the closed body language
of someone who has learned that openness gets you hurt.

Style ID: undersuspi-noir-v1.

NEGATIVE: healthy appearance, well-rested, suit, anime, cel-shading,
flat, 3D, photorealistic.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Isma Quintela, 33, grey hoodie, dark jeans, thin face, dark
circles. CRITICAL: same face, same clothes.

Pose & expression (PENSATIVO): thinking about what his mother was working on
and what it cost her — the arms have uncrossed, one hand at the side of his
face, eyes distant and looking at nothing, a visible grief he has been trying
to keep at arm's length now arriving at the edges of his expression.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Isma Quintela. CRITICAL: same face, same clothes.

Pose & expression (NERVIOSO): being misread as a suspect — he has
straightened up, arms coming out to the table, eyes wide with something
between indignation and fear of not being believed, an urgency in his
posture, mouth slightly open, leaning forward.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Florinda Bárcena

> 55 años. Editora del libro de Camino, veinte años de relación profesional.
> Profesional, segura. Coartada sólida. El conflicto editorial era real pero
> no mortal — su nerviosismo es el de quien perdió su mejor autora, no el de
> quien la mató.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face):
- 55 year-old Spanish woman, senior book editor at a Madrid publishing house
- Face: a round warm face with a decisive expression — crow's feet from
  reading glasses on and off all day, bright dark eyes that are assessing
  and quick, a broad nose, full lips, a strong jaw, warm olive complexion,
  chin-length silver-streaked brown hair, reading glasses pushed up on
  her head or hanging on a chain at her chest
- Hair: medium-length, wavy, dark brown with silver streaks running
  through it, slightly unkempt in a literary-professional way
- Build: full-figured, confident posture, the physical assurance of
  a woman who has built something over thirty years

Clothing: a structured blazer in dark teal or forest green over a plain
black blouse, a silk scarf loosely knotted at the neck, reading glasses
on a thin cord around her neck, a practical quality bag strap visible
on one shoulder.

Pose & expression (NEUTRAL): standing facing the detective, in a
businesslike way — both hands flat on the table, direct gaze, the look
of someone who has dealt with difficult authors and difficult situations
and knows how to manage a room.

Style ID: undersuspi-noir-v1.

NEGATIVE: anime, cel-shading, flat, 3D, photorealistic, casual or
unkempt appearance.
```

### Pensativa (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Florinda Bárcena, 55, teal blazer, black blouse, glasses on
cord, silver-streaked hair. CRITICAL: same face, same clothes.

Pose & expression (PENSATIVA): the business composure gives way briefly
to genuine feeling — she is thinking about Camino, the glasses have come
off the cord and are being held in one hand, she is looking sideways and
down, the decisive efficiency replaced by something rawer.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nerviosa (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Florinda Bárcena. CRITICAL: same face, same clothes.

Pose & expression (NERVIOSA): being pushed about what the new chapters
contained — she has leaned slightly back, arms folding in front of her
chest, chin coming up defensively, the look of a woman who is protecting
something she considers confidential but knows she may have to give up.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Dr. Manuel Ródenas

> 67 años. Antiguo comisario de policía, retirado. Fue la fuente principal
> de Camino para el libro del 2001. Pelo blanco, pose de quien ha visto
> demasiado. Conoció al padre del detective. Cuando éste entra, le mira
> con una mezcla de pena y alivio.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face — KEY CHARACTER carrying
narrative weight, must look like someone bearing a decades-old burden):
- 67 year-old Spanish man, retired police commissioner
- Face: a heavy weathered face with a gravitas that comes from having
  seen everything — deeply lined forehead, strong prominent cheekbones,
  a broad flat nose, firm lips that say less than the eyes, deep-set
  dark eyes that carry both sadness and something like relief when they
  meet the detective's gaze, pronounced jowls, a strong jaw, deep
  nasolabial folds, tan complexion marked by outdoor decades, thick
  white brows, the face of institutional authority in retirement
- Hair: full thick white hair, swept back from a strong forehead —
  the hair of a man whose face has aged but whose hair remained
- Build: broad-chested, slightly stooped now, but the posture of an
  ex-officer still visible in the set of the shoulders

Clothing: a well-worn tweed jacket in brown-grey over a dark rollneck
sweater — retired clothes, but clean and self-respecting. No tie. A
plain watch on the left wrist. The look of a man who no longer has
anything to prove but still dresses like someone who did once.

Pose & expression (NEUTRAL): standing with a slight forward lean, hands
resting on the
table, large hands loosely clasped, looking at the detective with a
directness that has a weight to it — not intimidating, but full of
things unsaid for a very long time.

Style ID: undersuspi-noir-v1.

NEGATIVE: animated happy expression, casual tourist clothes, anime,
cel-shading, flat, 3D, photorealistic.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Manuel Ródenas, 67, brown-grey tweed jacket, dark rollneck,
white hair swept back, large hands. CRITICAL: same face, same clothes.

Pose & expression (PENSATIVO): he is forty years back — one hand at his
mouth, the big-knuckled fingers pressed over his lips, eyes unfocused and
looking far past the wall of the interrogation room, the weight of something
he has carried for a long time visible in the set of his shoulders.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Manuel Ródenas. CRITICAL: same face, same clothes.

Pose & expression (NERVIOSO): choosing to tell more than he planned — he
has unclenched his hands and one palm is now flat on the table, open, he
is leaning slightly forward, the eyes are direct and slightly pained, not
frightened — this is the nervousness of a man about to unburden himself of
something heavy, not of a man protecting himself.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Elías Mora — CULPABLE

> 45 años. Primo lejano del detective por parte paterna. Empresario en Madrid.
> Bien vestido, controlado. La publicación del libro amenazaba con destruir el
> apellido Mora públicamente. Actuó en coordinación con Vicente Solera.
> Comparte apellido con la víctima del caso 5 — es la misma familia.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face — CULPABLE but must look
entirely like a successful legitimate businessman, no villain markers):
- 45 year-old Spanish man, successful real estate entrepreneur in Madrid
- Face: a handsome composed face at the peak of its authority — square
  jaw clean-shaven, prominent straight nose, dark steady eyes that assess
  without reacting, medium-set brows, a firm well-defined mouth, slight
  lines at the corners of the eyes from squinting in meetings, very
  lightly tanned smooth Mediterranean complexion, a face that has never
  been unsure of itself
- Hair: dark hair, very slightly grey at the temples, cut with precision,
  combed to one side, immaculate
- Build: broad-shouldered, physically present, the body of a man who
  still exercises and knows how to take up space in a room

Clothing: a well-tailored charcoal grey suit, not as formally expensive
as Pinhel's but clearly quality — a plain white shirt, a dark tie, a
simple watch on the left wrist. The look of a successful Madrid businessman
on the younger, newer-money side.

Pose & expression (NEUTRAL): standing relaxed, weight on the back leg,
one arm
on the back of an empty chair, the other hand resting on the table, the confident
pose of a man who has been in difficult situations before and managed them
— controlled and slightly impatient.

Style ID: undersuspi-noir-v1.

NEGATIVE: villain signals, nervous expression, anime, cel-shading, flat,
3D, photorealistic.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Elías Mora, 45, charcoal suit, white shirt, dark tie, dark
precisely combed hair with slight grey temples. CRITICAL: same face, same
clothes.

Pose & expression (PENSATIVO): recalibrating the story — the confident
lean has shifted to a more active forward position, both elbows on the
table, fingers interlaced, the controlled expression has the slightest
edge of calculation visible, as if he is running through possibilities
and discarding them one by one.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Elías Mora. CRITICAL: same face, same clothes.

Pose & expression (NERVIOSO): the vehicle has been brought up and he
knows the camera has something — the controlled confidence is now a
controlled threat. He is still, very still, but the stillness has changed
quality — both hands flat on the table, jaw set, the eyes have narrowed
very slightly, looking directly at the detective with the beginning of
something cold in them.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral — still controlled, no panic, controlled
tension only.
```

---

## Vicente Solera — CULPABLE

> 50 años. Hermano de Lucía Solera del caso 4 — hijo de Andrés Solera, el
> panadero jubilado asesinado. Robusto, callado, con las manos de quien hace
> trabajo físico. Tiene una empresa de transportes. Vino a proteger el legado
> de su padre muerto.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet, occupying the central vertical axis of the image.
Dark interrogation room background. Warm key light.

Art style: digital oil painting illustration, semi-realistic stylized character
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (unique original face — CULPABLE with a physical
presence that is not aggressive but imposing):
- 50 year-old Spanish man, owner of a transport company, son of a village baker
- Face: a broad strong face with the marks of a physical life — wide flat
  nose, a strong square jaw with a short, neat practical beard, dark eyes
  that are watchful and unhurried, thick dark brows, slight scarring on
  the chin from old work injuries, medium olive complexion darkened by
  outdoor work, deep lines from nose to chin, a low forehead
- Hair: short dark hair cut very short, slightly receding at the temples,
  barely maintained
- Build: broad-chested, stocky, large hands visible — the hands of a man
  who has loaded and unloaded lorries, larger and rougher than those of
  the lawyers around him

Clothing: a dark navy work jacket or a practical heavy fabric jacket —
not a suit jacket, not a fashionable jacket, just a good warm jacket.
A plain dark sweater underneath. Practical dark trousers. The no-nonsense
clothes of a self-made working-class business owner.

Pose & expression (NEUTRAL): standing with arms crossed, occupying the
frame with a
physical solidity, gaze level and patient — a man who rarely speaks but
when he does, people listen. The silence itself is a kind of pressure.

Style ID: undersuspi-noir-v1.

NEGATIVE: skinny build, elegant clothing, nervous posture, anime,
cel-shading, flat, 3D, photorealistic.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Vicente Solera, 50, dark navy work jacket, plain sweater,
short near-cropped dark hair, broad-faced with short beard, large hands.
CRITICAL: same face, same clothes.

Pose & expression (PENSATIVO): thinking about his dead father — the arms
have uncrossed and one large hand rests open on the table, the head has
dropped slightly, the weight of a man carrying grief disguised as loyalty,
the quiet of someone for whom the motive was real and simple.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Same subject: Vicente Solera. CRITICAL: same face, same clothes, same
broad physical presence.

Pose & expression (NERVIOSO): the vehicle registration has been raised —
he has shifted his stance, the arms are no longer crossed but both
hands are now flat on the table, he is looking at the table surface
rather than at the detective, the jaw is set hard, a man who knows the
physical evidence places him there and is deciding in real time whether
there is any way out.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral.
```

---

## Escenario — Sótano Aravaca

```
Establishing shot, 16:9 aspect ratio, wide cinematic framing. NO PEOPLE.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium tradition). Rich textures, painterly. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Location: the basement (sótano) of a 1980s semi-detached house (chalet)
in Aravaca, a residential suburb of western Madrid. The basement has been
converted into a personal darkroom by the owner, a photographer-journalist.
Low brick ceiling, exposed pipes, the walls painted white that has yellowed
over the years. Along one wall: shelves of chemical bottles, film canisters,
boxes of photographic paper. In the centre-left: a large industrial stainless
steel developing tank / utility sink (pila industrial) — a deep square metal
basin with legs, approximately 80cm wide, filled with dark murky developing
liquid. Around the pila: traces of disturbed mud and water splashed onto
the floor. A single bare fluorescent tube above, one end flickering slightly.
Photographic prints hung on a drying line strung across the background.
A small desk with an enlarger and a red safelight lamp. Filing cabinets.

Lighting: the flickering fluorescent gives uneven cold white light, the
red safelight on the desk provides a faint deep red glow in the background,
the rest of the space is in shifting cold shadow.

Interactive elements (placed naturally):
- The pila industrial in the centre-left with dark liquid inside and water
  splashed on the floor around it
- A filing cabinet with one drawer open slightly
- Film canisters scattered on the floor near the pila
- A chair overturned near the pila
- Photographic prints on the drying line (no readable content in them,
  abstract grey tones only)
- The small desk with an enlarger silhouette in the background

Camera: 50mm equivalent, eye-level, mid-distance, capturing the full
basement space. Upper half clean for character portrait compositing.

Atmosphere: cold, damp, claustrophobic, functional — a working space
that has become a crime scene.

Style ID: undersuspi-noir-v1.

NEGATIVE: body visible, bright clean space, modern kitchen, people,
blood visible, cel-shading, flat, anime, 3D, photorealistic.
```

---

## Pruebas Caso 7

### P1 — Informe Forense (asfixia por inmersión · dos agresores)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk, soft lamp shadow.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: official Spanish forensic autopsy report, A4, contemporary.

Visual content (text MUST NOT be readable):
- Official forensic header with illegible emblem and institution name
- Two columns of typed paragraphs, all illegible
- A small anatomical sketch of the back of a human head and shoulders,
  with two opposing arrows indicating force applied from both sides of the
  neckline simultaneously — the visual key information: two attackers
- A secondary small sketch of a human arm showing resistance marks
  (illegible annotation arrows)
- Official red stamp in lower right, illegible signature below
- Paperclip at top edge, small coffee ring stain at corner

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, body depicted, gore, autopsy table, cel-shading,
flat, anime, 3D, photorealistic.
```

### P2 — Pila Industrial del Sótano

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
taken as a scene photograph rather than on a mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object / scene: a top-down view of a large stainless-steel industrial utility
sink (approximately 80×60cm), set on four legs. The interior of the sink is
filled with dark grey-brown developing solution, very slightly murky. The
interior walls of the sink are stained with years of chemical use. Around
the base of the sink on the concrete floor: water splash marks, wet footprints
(partial shoe impressions in two different sizes), and scattered film canisters.
Two yellow forensic evidence marker cones are placed near the base (no readable
numbers). A faint piece of dark hair visible on the rim of the sink.

Lighting: harsh overhead cold fluorescent light casting hard shadows under
the sink legs.

Style ID: undersuspi-noir-v1.

NEGATIVE: body visible, blood, dramatic gore, dry environment, cel-shading,
flat, anime, 3D, photorealistic.
```

### P3 — Caja de Borradores del Libro

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a grey-beige standard archive box (approximately 35×25×12cm), lid
removed and placed beside it, revealing the interior. Inside: a disordered
stack of A4 pages — some in plastic sheet protectors, some loose, some
in a manila folder. The pages are clearly printed text documents with
hand-written margin notes, but all text is entirely illegible. The box
has a handwritten label on the spine in black marker (illegible). A
Post-it note on the lid (illegible). Some pages have yellow highlighter
marks and red pen underlines visible as colour marks though the text itself
is illegible.

Lighting: side raking light revealing the texture of the paper and
the coloured mark-ups.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable text, neat organised box, cel-shading, flat, anime,
3D, photorealistic.
```

### P4 — Cuaderno de Trabajo de Camino

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a worn A5 spiral-bound journalist's notebook, opened flat. The
pages are well used — soft from handling, the edges slightly dog-eared.
The open spread shows a left page and a right page, both filled with
handwritten notes in tight cursive, illegible. The right page has:
- A clear date at the top (illegible but visually distinct — a day header)
- Below it, two names handwritten with a heavy underline (both illegible,
  but the emphasis is visual)
- Further down on the same page, a different note in slightly smaller
  writing, underlined once
The left page has older notes, crossed-out lines, arrows between entries.
A pen is tucked into the spiral binding.

Lighting: top-down even museum light.

Style ID: undersuspi-noir-v1. CRITICAL: names and text must NOT be
readable — only the visual structure of handwritten emphasis.

NEGATIVE: readable text, readable names, printed notebook, cel-shading,
flat, anime, 3D, photorealistic.
```

### P5 — Cámara Exterior del Chalet (dos hombres · 20:40h)

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: a CCTV still from an exterior residential security camera,
printed on plain paper, slightly curled.

Visual content (text MUST NOT be readable):
- Night-time colour CCTV still, moderate grain, slight fish-eye distortion
- Scene: exterior of a residential Madrid chalet driveway — gate, low
  stone wall, a parked dark grey car partially visible at the left edge
  of frame, a narrow path leading to the front door
- Two adult male figures visible mid-frame: one taller and broader-
  shouldered, one slightly shorter and leaner, both in dark jackets —
  they are walking side by side toward the front door. Their faces are
  NOT identifiable at CCTV resolution. They appear to be going in
  together, not incidentally at the same time.
- A timestamp in the upper right of the CCTV image (glyph format,
  suggesting approximately 20:40 — illegible digits)
- Evidence reference in lower margin (illegible)

Style ID: undersuspi-noir-v1. CRITICAL: faces not identifiable,
text not readable.

NEGATIVE: daytime, readable faces, readable timestamp, one figure only,
cel-shading, flat, anime, 3D, photorealistic.
```

### P6 — Mensajes del Móvil de Camino

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay, dark
wooden desk.

Art style: digital oil painting illustration, semi-realistic stylized prop
art. NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Document type: forensic phone extraction printout, same visual format as
Caso 6 P5 but a different conversation.

Visual content (text MUST NOT be readable):
- Forensic extraction header (illegible)
- Sent messages format: two groups of message rows, each group visually
  separated — the first group showing a sent message and a small read-
  receipt symbol beside it (double tick marks, no text), the second group
  the same sent message to a different thread (same structure, same
  read-receipt, no reply)
- The two groups appear structurally identical — same message sent twice
  to two different recipients on the same date (the mirroring is the
  visual point)
- A yellow highlighter mark across both groups
- Evidence stamp in footer (illegible)

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable.

NEGATIVE: readable messages, phone handset, modern phone screen,
cel-shading, flat, anime, 3D, photorealistic.
```

### P7 — Libro Original de Camino (2001)

```
Evidence object photograph, 1:1 square aspect ratio, top-down 30-degree angle,
dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized prop
art (Disco Elysium tradition). NOT cel-shading, NOT flat, NOT anime, NOT 3D.

Object: a real physical book, approximately 230 pages, standard trade
paperback size. The cover is visible: a dark-toned literary non-fiction
cover design — dark navy or charcoal background with an abstracted image
(perhaps a blurred doorway, a shadow, an empty chair) and title and author
text rendered as illegible visual blocks of type. The book has been read
and reread: the spine is cracked and shows white stress marks, several
pages have folded corners, a few sticky note tabs protrude from the top
and side edges. A pencil or pen is tucked inside the pages partway through.
The cover is slightly worn at the corners.

Lighting: slight raking side light catching the raised lettering of the
cover and the worn creases of the spine.

Style ID: undersuspi-noir-v1. CRITICAL: cover text and title must
NOT be readable — only the visual impression of a well-used investigative
journalism book.

NEGATIVE: readable title, readable author name, new pristine book,
e-reader, digital device, cel-shading, flat, anime, 3D, photorealistic.
```

---
---

# UI — Icono luz UV

> Icono para el botón de la herramienta en la toolbar del escritorio.
> Formato: SVG o PNG transparente, debe ser legible a 32px. Ver spec §7.3 G
> del ASSETS-VISUALES.md para contexto completo.

```
Minimalist editorial icon, flat 2D, mustard gold (#C9A961) on transparent
background, clean crisp linework, readable at 32px minimum, matching the
noir investigative dossier aesthetic of the Under Suspicion game.

Icon concept: a hand-held ultraviolet flashlight / UV torch — the classic
pen-torch shape, cylindrical body with a cylindrical head, a flat front
lens emitting a stylised UV beam represented as short radiating lines or
a subtle fan of light spreading forward from the front face of the torch.
The beam lines can be rendered slightly lighter or in a complementary tint
to distinguish them from the torch body.

Style: single colour (#C9A961 gold) on transparent — two-tone maximum if
the beam needs differentiation. Flat bold linework with rounded terminals,
geometric and clean. No gradients. No texture. No drop shadows.

The overall silhouette at thumbnail size should read unmistakably as
"flashlight / torch." The UV character can be suggested by the radiating
lines alone — no "UV" text label.

Size: square canvas (64×64 target, scalable SVG preferred).

Style ID: undersuspi-noir-v1.

NEGATIVE: photorealistic, gradient, multiple colors, text or letters,
watermark, overly complex detail, drop shadows, glow effects.
```

---

*Fin del documento de prompts Acto II. Eliminar tras producción.*

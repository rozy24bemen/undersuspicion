# PROMPTS — Acto III · Caso 8 "La última cena" + Elena recurrente (DOC TEMPORAL · eliminar tras producción)

> Documento de uso único: prompts copy-paste para generar TODOS los assets
> visuales del **Caso 8** (cierre del juego) y las **poses recurrentes de
> Elena Solana** que aparecen en las cenas de los 8 casos. Formato validado
> con la v3 del style-bible (Disco Elysium / digital oil painting), alineado
> con [PROMPTS-ACTO2.md](PROMPTS-ACTO2.md). **Eliminar tras finalizar producción**.

> ## ⚠️ CONVENCIÓN DE FRAMING — STANDING ONLY (alineada con Acto 1 y 2)
>
> **TODOS los prompts de sospechosos generan retratos a CUERPO ENTERO DE
> PIE** (Full-body standing, head to feet), iguales a los del Acto I/II. Si
> el generador te devuelve un sospechoso sentado, recortado a la cintura,
> apoyado en una mesa o con codo sobre la mesa, **descártala y regenera**.
>
> ### Reglas críticas para evitar la trampa "sentado":
>
> 1. **NUNCA** describas la pose con "elbow on the table", "hand on the
>    table", "leaning on the table" o "gripping the edge of the table".
>
> 2. Sustituye los gestos "de mesa" por equivalentes verticales (ver ACTO2
>    para ejemplos detallados).
>
> 3. Cada NEGATIVE debe incluir explícitamente:
>    `SEATED, SITTING, ON A CHAIR, IN A CHAIR, AT A TABLE, AT A DESK,
>    ELBOW ON TABLE, HAND ON TABLE, LEANING ON TABLE, TABLE IN FOREGROUND,
>    DESK IN FOREGROUND, HALF-BODY FRAMING, WAIST-UP CROP, BUST CROP,
>    CROPPED AT WAIST, KNEES NOT VISIBLE, FEET NOT VISIBLE`. Los prompts
>    de sospechosos en este documento ya lo llevan; respétalos al copiar.
>
> 4. En la línea inicial de framing del prompt, repite **"head to feet
>    (full body, NOT cropped at the waist)"**. La redundancia funciona.
>
> 5. En la descripción del sujeto, añade **"NO table, NO chair, NO desk
>    visible in the frame"**.
>
> ### Excepción: Elena en cenas (NO sospechosa)
>
> Elena Solana en sus poses de cena (`elena-calida`, `elena-preocupada`,
> `elena-confrontacional`, `elena-despedida`, `elena-ausente`) **sí** aparece
> en su comedor de casa, sentada a la mesa o de pie según la pose. El
> framing es **medio cuerpo (de cintura para arriba)**, 3:4 vertical,
> luz cálida de hogar. Esto es **deliberadamente distinto** del framing de
> sospechosos. La intimidad doméstica requiere otra distancia visual.
>
> El **único caso** en que Elena se renderiza a cuerpo entero es la pose
> `elena-ausente` (silueta de pie de espaldas, alejándose / desvaneciéndose
> en el final malo del Caso 8) y la pose `elena-despedida` (de pie junto a
> la puerta del salón, despidiéndose, en el final bueno).
>
> El Acto III introduce el **teléfono del propio detective** (línea 9-8-6-1-4)
> y la **acusación a uno mismo** como cuarta tarjeta condicional. Ninguno de
> esos sistemas necesita assets nuevos aparte de los prompts que figuran aquí.

---

## Reglas globales (leer antes de generar)

| Tipo de asset | ¿Adjuntar imagen? |
|---|---|
| Elena NEUTRAL recurrente (ya existe `Elena_neutral.png`) | **Referencia maestra** — adjuntar en TODAS las demás poses de Elena |
| Elena poses (cálida / preocupada / confrontacional / despedida / ausente) | **SÍ** — adjuntar `Elena_neutral.png` aprobada |
| Sospechoso NEUTRAL Caso 8 (Felipe, Octavio) | **NO** — sólo texto |
| Sospechoso PENSATIVO/A o NERVIOSO/A Caso 8 | **SÍ** — adjuntar la NEUTRAL aprobada del MISMO personaje |
| Don Eulogio Pacheco hijo (Caso 8) | **REUTILIZAR** las 3 poses ya producidas en Caso 6 — ver [ACTO2 §Eulogio Pacheco hijo](PROMPTS-ACTO2.md#eulogio-pacheco-hijo). Sólo copiar archivos a `Caso8/Sospechosos/EulogioPachecoHijo-*.png` |
| Víctima Elena Solana (foto archivo policial) | **NO** — sólo texto. **NO confundir** con las poses vivas de Elena: ésta es post-mortem, fría, formato carnet |
| Escenario — Salón del piso de Hermosilla | **NO** — sólo texto |
| Pruebas (objeto / documento) | **NO** — sólo texto |
| Pruebas con variante UV (P3 calendario, P5 fotos, P6 sofá) | **SÍ** — adjuntar la versión normal aprobada de la misma prueba |

**Tamaño/aspect ratio**:
- Elena cenas (cálida / preocupada / confrontacional): 3:4 vertical, **medio cuerpo**, fondo comedor cálido
- Elena finales C8 (despedida / ausente): 3:4 vertical, **cuerpo entero** de pie
- Elena víctima (archivo policial post-mortem): 3:4 vertical, cabeza-hombros, fondo gris azulado
- Sospechosos C8: 3:4 vertical, **cuerpo entero de pie**, fondo despacho interrogatorio
- Escenario: 16:9 horizontal
- Pruebas objeto: 1:1 cuadrado
- Pruebas documento: 4:5 vertical

**Naming al guardar**:
```
assets/img/suspects/Elena-Neutral.png                 (maestra idle — ya producida)
assets/img/suspects/Elena-Calida.png                  (idle, tono casual — ya producida)
assets/img/suspects/Elena-Preocupada.png              (idle, tono preocupada — ya producida)
assets/img/suspects/Elena-Confrontacional.png         (idle, tono confrontacional — REGENERAR: fix pelo suelto)
assets/img/suspects/Elena-Neutral-Hablando.png        (NUEVO — apertura/repaso/gancho/cierre)
assets/img/suspects/Elena-Calida-Hablando.png         (NUEVO — personal casual)
assets/img/suspects/Elena-Preocupada-Hablando.png     (NUEVO — personal preocupada)
assets/img/suspects/Elena-Confrontacional-Hablando.png (NUEVO — personal confrontacional + final C8)
assets/img/suspects/Elena-Despedida.png               (final bueno C8 — ya producida)
assets/img/suspects/Elena-Ausente.png                 (final malo C8, comedor vacío — ya producida)
assets/img/scenes/Escenario_Comedor.png               (NUEVO — bg compositado sin personajes)

assets/img/suspects/Caso8/Retrato_Victima_caso8.png          (NUEVO — víctima archivo)
assets/img/suspects/Caso8/Sospechosos/FelipeSaiz-Neutral.png
assets/img/suspects/Caso8/Sospechosos/FelipeSaiz-Pensativo.png
assets/img/suspects/Caso8/Sospechosos/FelipeSaiz-Nervioso.png
assets/img/suspects/Caso8/Sospechosos/OctavioBran-Neutral.png
assets/img/suspects/Caso8/Sospechosos/OctavioBran-Pensativo.png
assets/img/suspects/Caso8/Sospechosos/OctavioBran-Nervioso.png
assets/img/suspects/Caso8/Sospechosos/EulogioPachecoHijo-Neutral.png    (COPIAR desde Caso6)
assets/img/suspects/Caso8/Sospechosos/EulogioPachecoHijo-Pensativo.png  (COPIAR desde Caso6)
assets/img/suspects/Caso8/Sospechosos/EulogioPachecoHijo-Nervioso.png   (COPIAR desde Caso6)
assets/img/suspects/Caso8/Sospechosos/RobertoMora-Neutral.png           (NUEVO — espejo, cuarta tarjeta)
assets/img/suspects/Caso8/Sospechosos/RobertoMora-Pensativo.png         (NUEVO — espejo)
assets/img/suspects/Caso8/Sospechosos/RobertoMora-Nervioso.png          (NUEVO — espejo, momento de reconocimiento)

assets/img/suspects/Caso8/Pruebas/P1 — Informe Forense.png
assets/img/suspects/Caso8/Pruebas/P2 — Dos Copas.png
assets/img/suspects/Caso8/Pruebas/P3 — Calendario.png          (versión normal)
assets/img/suspects/Caso8/Pruebas/P3 — Calendario UV.png       (versión UV)
assets/img/suspects/Caso8/Pruebas/P4 — Grabadora.png
assets/img/suspects/Caso8/Pruebas/P5 — Fotos Cajon.png         (versión normal)
assets/img/suspects/Caso8/Pruebas/P5 — Fotos Cajon UV.png      (versión UV)
assets/img/suspects/Caso8/Pruebas/P6 — Sofa.png                (versión normal)
assets/img/suspects/Caso8/Pruebas/P6 — Sofa UV.png             (versión UV)
assets/img/suspects/Caso8/Pruebas/P7 — Alarma Vecino.png
assets/img/suspects/Caso8/Pruebas/P8 — Aire.png
assets/img/suspects/Caso8/Pruebas/P9 — Certificado.png

assets/img/scenes/Escenario_Hermosilla.png         (NUEVO — salón de Elena/detective)
```

---

# ÍNDICE

- [ELENA — Personaje recurrente (cenas)](#elena--personaje-recurrente)
  - [Elena NEUTRAL · maestra (REGENERAR — sustituye al actual)](#elena--neutral-regenerar--sustituye-al-actual)
  - [Elena Cálida (tono casual)](#elena-cálida--tono-casual)
  - [Elena Preocupada (tono preocupada)](#elena-preocupada--tono-preocupada)
  - [Elena Confrontacional (tono confrontacional)](#elena-confrontacional--tono-confrontacional)
  - [Elena Hablando · 4 variantes (Neutral/Cálida/Preocupada/Confrontacional)](#elena--variantes-hablando--sensación-de-conversación)
  - [Escenario Comedor (bg sin personajes)](#escenario--comedor-de-elena-sin-personajes--bg-compositado)
  - [Elena Despedida (final bueno C8)](#elena-despedida--final-bueno-c8)
  - [Elena Ausente (final malo C8)](#elena-ausente--final-malo-c8)
- [CASO 8 — La última cena](#caso-8--la-última-cena)
  - [Víctima · Elena Solana](#elena-solana--víctima-archivo-policial)
  - [Felipe Saiz · 3 poses](#felipe-saiz)
  - [Octavio Brán · 3 poses](#octavio-brán)
  - [Don Eulogio Pacheco hijo · reutilizar Caso 6](#don-eulogio-pacheco-hijo--reutilizar-caso-6)
  - [Roberto Mora · 3 poses (cuarta tarjeta C8 — espejo del recibidor)](#roberto-mora--detective-cuarta-tarjeta-c8--espejo-del-recibidor)
  - [Escenario · Salón Hermosilla](#escenario--salón-hermosilla)
  - [Pruebas (9 + 3 variantes UV)](#pruebas-caso-8)

---

# ELENA — Personaje recurrente

> **Esposa del detective.** Aparece en las cenas tras cada caso (1-8) como
> encarnación de la conciencia del protagonista. **Spoiler estructural**:
> Elena está muerta desde el 9 de septiembre de 2023; el detective la ve
> como alucinación protectora. El jugador no lo sabe hasta el Caso 8.
>
> **Por tanto, las poses 1-3 (cálida / preocupada / confrontacional) deben
> renderizar a Elena como una mujer viva, real, cariñosa, cálida**. NO
> debe haber ningún signo visual de fantasma, transparencia, palidez
> sobrenatural ni iluminación fría. La iluminación es **cálida de hogar**,
> tonos miel / ámbar, exactamente como la noche en que cualquier matrimonio
> cena en casa.
>
> Las poses 4-5 (despedida / ausente) **sí** rompen esta regla: la luz
> cambia, Elena se aleja, la silla queda vacía. Son los únicos momentos
> en que el juego visualmente "rompe" la alucinación.
>
> **Referencia maestra**: `Elena_neutral.png`. **El asset actual NO sirve**
> (pelirroja en estudio negro con vaqueros — fuera de canon). Hay que
> regenerarla con la pose maestra del bloque siguiente, y a partir de ahí
> todas las demás poses la adjuntan como `[ATTACH approved Elena_neutral.png
> as reference image]`. Cara, peinado, pendientes y complexión idénticos en
> TODAS las poses.
>
> ### ⚠️ WARDROBE LOCK — vestuario INMUTABLE en las 5 poses
>
> Las 5 poses de Elena (neutral / cálida / preocupada / confrontacional /
> despedida) llevan **EXACTAMENTE el mismo vestuario**:
>
> - **Cuello vuelto de lana granate (burgundy / deep wine red)**, textura
>   de punto a mano visible, mangas completas a la muñeca
> - **Falda lápiz de lana gris antracita (charcoal grey)**, talle alto
> - **Pendientes perla pequeños** en las dos orejas
> - **Alianza de oro fina** en el anular izquierdo
> - **Pelo castaño chocolate** ondas media melena, suelto
> - Sin collares, sin pañuelos, sin pulseras, sin cárdigans encima
>
> Razón: en las cenas con tonos mixtos (casos 3-7), el motor cambia la pose
> de Elena pregunta a pregunta según el tono. Si cada pose tuviera vestuario
> distinto, Elena se cambiaría de ropa mid-conversación — efecto cómico que
> rompe la inmersión. Además, en términos narrativos, **el vestuario
> inmutable a lo largo de 8 casos es un guiño visual a la alucinación**:
> Elena lleva 3 años muerta y el detective la ve siempre igual. Que jamás
> se cambie de ropa es un síntoma sutil del spoiler estructural.
>
> Lo que SÍ cambia entre poses:
> - **Expresión facial**: cálida-sonrisa pequeña / preocupada-frunce sutil
>   / confrontacional-labios apretados sin parpadear / despedida-sonrisa
>   triste que llega a los ojos
> - **Posición y gesto de manos**: mano sobre clavícula + copa / manos
>   entrelazadas frotándose pulgares / manos sobre respaldo de silla /
>   palma alzada en despedida
> - **Postura del cuerpo**: relajada y angulada / peso en una pierna /
>   hombros cuadrados / en el umbral medio girada
> - **Atmósfera y luz**: ámbar cálido y suave / ámbar denso / luz más
>   esculpida y candela más viva / luz dorada irreal trasera
> - **Detalles del fondo**: copa servida / copa intacta / copa servida y
>   candela central / sin copas, puerta dorada al pasillo
>
> Sólo la pose `ausente` rompe esta regla (no hay personaje en el frame —
> mesa vacía, silla retirada). Y la víctima archivo policial es un retrato
> aparte que no se rige por estas reglas.

---

## Elena — NEUTRAL (REGENERAR — sustituye al actual)

> **Esta pose sustituye al `Elena_neutral.png` actual** (pelirroja en estudio
> negro con vaqueros, fuera de canon). Es la referencia maestra: toda la
> cadena de poses la adjunta como referencia. Genera primero esta y, una
> vez aprobada, las demás se enganchan limpiamente.
>
> Tono visual: **neutral acogedor**. No sonríe como la cálida ni se preocupa
> como la preocupada; te mira con la atención cálida de quien acaba de
> abrir la puerta y se alegra de que hayas vuelto, sin decir nada todavía.
> Es la "página en blanco" emocional de Elena.

```
Half-body portrait, 3:4 vertical aspect ratio, character framed from
mid-thigh to top of head, occupying the central vertical axis of the
image. Background: warm dimly-lit dining room of a Madrid bourgeois
apartment — out-of-focus glimpse of a wooden dining table corner with
a candle, the suggestion of a kitchen doorway with warm yellow light
behind. Soft amber key light from upper-right at 30 degrees, very
soft falloff, golden-hour interior glow. NO black studio background,
NO neutral grey backdrop — this is a home.

Art style: digital oil painting illustration, semi-realistic stylized
character art for a noir detective adventure game (Disco Elysium /
classic 1990s point-and-click mystery game tradition). Soft painterly
brush strokes, smooth volumetric rendered shading, visible texture of
digital oil paint. NOT cel-shading, NOT flat colors, NOT anime, NOT 3D,
NOT photorealistic, NOT commercial-catalogue stock-illustration polish.

Subject — DETAILED FACE (unique original face, NOT a stock-illustration
cheerful redhead, NOT a magazine catalogue model, NOT a fashion editorial
shot — this is a Spanish literature teacher in her own home):
- 38 year-old Spanish woman, literature teacher at the Instituto
  Cervantes in Madrid, daughter of a middle-class Salamanca family,
  married fifteen years to a homicide inspector — kindness has settled
  into her face like weather settles into a stone
- Face shape: gentle oval, soft cheekbones, slightly rounded chin, the
  proportions of a face that aged into warmth rather than into beauty
  — fine smile lines fanning at the corners of the eyes, very faint
  vertical line between the brows from years of careful listening, a
  small kind upturned nose, full but not exaggerated lips
- Skin: light olive-Mediterranean complexion with subtle warmth across
  the cheeks, NOT pale, NOT tanned, NOT made-up — the complexion of a
  woman who walks home from teaching and reads in the evening light
- Eyes: medium-set warm HAZEL-BROWN eyes (NOT green, NOT blue, NOT
  pale), soft and direct, eyes that meet the detective's without
  performance and that the player will later remember when shown the
  corpse photograph — these eyes are the emotional anchor of the
  entire game
- Hair: shoulder-length CHESTNUT BROWN hair with soft natural waves,
  parted slightly off-centre, loose and worn down, one strand falling
  gently in front of the right ear, slightly tucked behind the left.
  NOT bright red, NOT copper, NOT auburn-fiery, NOT blonde, NOT
  platinum, NOT pixie-cut, NOT updone, NOT salon-styled — the hair of
  a schoolteacher who washes it and lets it dry naturally
- Build: average height, naturally proportioned slim frame, soft
  shoulders, hands soft from holding paperbacks rather than weight

Clothing: a BURGUNDY (deep wine-red) wool TURTLENECK SWEATER, hand-
knitted texture clearly visible in the painterly rendering, sleeves
worn at full length to the wrists. Paired with a high-waisted
charcoal-grey wool PENCIL SKIRT that ends just below mid-thigh in
the framing of this shot (full skirt continues out of frame). Small
PEARL STUD EARRINGS in both ears, prominent enough to be a recurring
identifying detail in every pose. A thin gold WEDDING BAND on the
left ring finger, visible where her hands rest. NO scarf, NO
necklace, NO bracelets, NO casual blouse, NO jeans, NO denim, NO
floral prints — this is the wardrobe of a literature teacher having
a quiet dinner with her husband at home, NEVER noir, NEVER stark,
NEVER fashionable.

Pose & expression (NEUTRAL MASTER REFERENCE): standing relaxed, weight
even on both feet, body angled five degrees toward the camera. Both
hands held loosely at the front of her body at waist height, one
hand gently resting over the back of the other, fingers relaxed, the
gold wedding band visible. Head tilted very slightly to the right
(about 5 degrees), eyes meeting the camera directly with calm
welcoming attention, lips composed in a soft neutral line — NOT
smiling broad, NOT half-smiling, NOT worried, NOT confrontational,
NOT sad, NOT seductive — the face she shows her husband when she
opens the door and is glad he is home but has not yet said anything.
A reference face that other poses can deviate from without losing
identity.

Atmosphere: warm domestic intimacy, the gold-amber glow of a single
wall lamp from the upper right, the deep wine of the sweater echoing
the dining room's burgundy upholstery in the soft-focus background.
This is the visual master of all five other Elena dinner poses —
every other Elena prompt will attach THIS image as reference.

Composition: subject slightly off-center to the right, eyes at the
upper third, the warm dining-room background occupying the upper-left
third behind her with a candle visible just over her left shoulder.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D
render, children cartoon, deformed, text, watermark, REDHEAD, RED
HAIR, GINGER, COPPER HAIR, AUBURN HAIR, FIERY HAIR, BRIGHT RED HAIR,
BLONDE, PLATINUM, PIXIE CUT, UPDONE, SALON STYLED, JEANS, DENIM,
CASUAL BLOUSE, FLORAL BLOUSE, FLORAL PRINT, BLACK STUDIO BACKGROUND,
NEUTRAL GREY BACKDROP, STOCK-ILLUSTRATION POLISH, MAGAZINE CATALOGUE
POSE, HANDS IN POCKETS, COMMERCIAL CHEERFUL POSE, COLD LIGHTING,
FLUORESCENT LIGHTING, NOIR LIGHTING, BLUE TONE, smiling broad,
laughing, sad, fearful, accusatory, seductive, revealing clothing,
multiple people, masculine features, elderly woman, teenager,
transparent, ghostly, halo, angel wings, religious iconography,
blood, scars, makeup heavy, lipstick visible.
```

---

## Elena — Cálida · tono casual

> Cenas 1 y 2 (tutorial y "Sin sangre"). Elena está viva, cariñosa, alegre.
> Te recibe en casa después del turno con una sonrisa pequeña y cansada.
> Es el momento más luminoso del juego — el jugador todavía no sospecha
> que esta mujer no existe. Iluminación cálida del comedor.

```
[ATTACH approved Elena_neutral.png as reference image]

Half-body portrait, 3:4 vertical aspect ratio, character framed from
mid-thigh to top of head, occupying the central vertical axis of the
image. Background: warm dimly-lit dining room of a Madrid bourgeois
apartment — out-of-focus glimpse of a wooden dining table corner with
a candle, a half-poured glass of red wine, the suggestion of a kitchen
doorway with warm yellow light behind. Soft amber key light from
upper-right at 30 degrees, very soft falloff, golden-hour interior glow.

Art style: digital oil painting illustration, semi-realistic stylized
character art for a noir detective adventure game (Disco Elysium /
classic 1990s point-and-click mystery game tradition). Soft painterly
brush strokes, smooth volumetric rendered shading, visible texture of
digital oil paint. NOT cel-shading, NOT flat colors, NOT anime, NOT 3D,
NOT photorealistic.

Subject (same as reference Elena_neutral.png — CRITICAL: same face,
same hair, same earrings, same complexion):
- 38 year-old Spanish woman, literature teacher
- Face: oval face, soft cheekbones, warm hazel-brown eyes, straight
  small nose, full but not exaggerated lips, faint smile lines at the
  corners of the eyes — a face that has learned to be patient
- Hair: shoulder-length chestnut brown hair with soft waves, loose
  and worn down naturally, slightly tucked behind one ear, NOT
  styled, NOT updone — domestic intimacy
- Build: average height, slim but not fragile, soft shoulders

Clothing: a burgundy wool turtleneck sweater, hand-knitted texture,
sleeves pushed up to mid-forearm, no jewellery visible except a thin
gold wedding band on the left hand and small pearl stud earrings —
NEVER noir, NEVER black, NEVER stark. Domestic warmth.

Pose & expression (CÁLIDA / WARM-CASUAL): head tilted very slightly
to the right, soft small smile that reaches the eyes, gaze gently
meeting the detective's, one hand holding the stem of a wine glass
at chest height with relaxed fingers, the other hand resting open on
her own collarbone — the body language of someone fully at ease in
her own home, welcoming her husband back from a long shift, not
asking too many questions yet.

Atmosphere: warm domestic intimacy, the gold-amber glow of a lamp,
the faint reflection of candlelight on the wine glass. The world
outside this room does not exist.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D
render, children cartoon, deformed, text, watermark, ghostly,
transparent, pale, sickly, cold lighting, blue lighting, fluorescent
lighting, noir lighting, dark clothing, black clothing, mourning
clothing, sad expression, fearful expression, accusatory expression,
seductive pose, revealing clothing, multiple people, masculine
features, young teenager, elderly woman.
```

---

## Elena — Preocupada · tono preocupada

> Cenas 3, 4, 5 y 7 (el grueso del juego). Elena empieza a notar que
> algo no va bien con el detective: bebe más, duerme peor, habla solo
> en sueños. Su preocupación es la de quien quiere ayudar pero no
> sabe cómo. Misma cálida iluminación de hogar, pero con un punto de
> tensión: la sonrisa ya no llega a los ojos. **Sigue viva, sigue
> real para el detective.**

```
[ATTACH approved Elena_neutral.png as reference image]

Half-body portrait, 3:4 vertical aspect ratio, character framed from
mid-thigh to top of head. Same warm dining room background as
Elena_calida (consistency CRITICAL across poses), but the wine glass
on the table behind her is now untouched, and the kitchen light in
the background is dimmer. Soft amber key light from upper-right,
slightly cooler than the casual pose, slight gradient toward cooler
shadow on the left side of her face.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes,
smooth volumetric rendered shading. NOT cel-shading, NOT flat, NOT
anime, NOT 3D, NOT photorealistic.

Subject (same as reference Elena_neutral.png — CRITICAL: same face,
same hair, same earrings, same complexion as the cálida pose):
- 38 year-old Spanish woman, same Elena Solana
- Hair: shoulder-length chestnut brown waves, same as cálida, but now
  one strand has fallen forward across her cheek — she has not bothered
  to push it back, a small sign of being absent in her own kitchen
- Skin: same warm Mediterranean complexion, but the area under her
  eyes is just slightly darker — she also is not sleeping well

Clothing (WARDROBE LOCK — identical to cálida/neutral master):
the SAME burgundy (deep wine red) wool turtleneck sweater as the
neutral master and cálida pose, hand-knitted texture, sleeves at
full length to the wrist. The SAME high-waisted charcoal-grey wool
pencil skirt. The SAME small pearl stud earrings in both ears. The
SAME thin gold wedding band on the left ring finger. NO scarf, NO
necklace, NO bracelets, NO cardigan over the turtleneck — strictly
the same outfit as the master Elena. CRITICAL: do NOT add a mustard
blouse, a yellow top, an open collar, a gold chain at the neck or
any other variation. The wardrobe of Elena is FROZEN across all
five dinner poses by design.

Pose & expression (PREOCUPADA / WORRIED): standing with weight on
her left leg, body angled slightly toward the detective but the head
turned just two degrees away — a posture of careful approach. Both
hands clasped loosely in front of her at waist height, fingers
intertwined and gently rubbing one thumb against the other. Eyes
soft but searching, brows pulled in very slightly, lips set in a
neutral line that wants to ask something but holds back. The look
of a woman who has noticed every change in her husband for months
and has not yet found the right night to bring it up.

Atmosphere: same warm domestic amber, but the air is denser, the
silence between two people who love each other and one of whom is
disappearing slowly.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as cálida — no ghostly, no transparent, no pale, no
cold lighting, no dramatic crying, no makeup running, no horror,
no accusatory finger pointing, no shouting expression.
```

---

## Elena — Confrontacional · tono confrontacional

> Cenas 6, 7 y 8. Elena ya no puede más. Ha encontrado la botella en
> el armario. Ha llamado a comisaría y el detective no estaba donde
> dijo que estaría. Ha decidido que esta noche se habla en serio. Sigue
> siendo cálida — no es ira, es **firmeza** —, pero por primera vez
> sostiene la mirada sin parpadear y la mesa entre ellos está puesta
> como un campo de batalla doméstico.

```
[ATTACH approved Elena_neutral.png as reference image]

Half-body portrait, 3:4 vertical aspect ratio, character framed from
mid-thigh to top of head. Same dining room background, but now the
candle on the table is more central in the framing behind her,
casting a sharper edge of light along her shoulder. The kitchen
doorway behind is dark. The lamp is set lower than in cálida and
preocupada — only the candle and a single side lamp light her face.
Warm key light from upper-right is harder, more directional, with a
slightly cooler shadow on the left side of the face.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes.
NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Subject (same as reference Elena_neutral.png — CRITICAL: same face,
same hair, same earrings, same complexion):
- 38 year-old Spanish woman, Elena Solana
- Hair: shoulder-length chestnut brown with soft natural waves,
  IDENTICAL to the neutral / cálida / preocupada poses — loose and
  worn down, parted slightly off-centre, one strand falling gently
  in front of the right ear, slightly tucked behind the left. CRITICAL:
  do NOT pull her hair back behind both ears, do NOT tie it up, do
  NOT bun, do NOT change the hairstyle between poses. The hair stays
  CONSTANT across all dinner poses by the wardrobe lock — the
  emotional shift is in posture and gaze, not in styling
- Skin: same complexion, but a faint flush on the cheekbones — controlled
  emotion, not anger; her eyes are slightly redder than usual along
  the lower lid, as if she has cried earlier in the evening and washed
  her face

Clothing (WARDROBE LOCK — identical to cálida/neutral master):
the SAME burgundy (deep wine red) wool turtleneck sweater, hand-
knitted texture, sleeves at full length to the wrist. The SAME high-
waisted charcoal-grey wool pencil skirt. The SAME small pearl stud
earrings, the SAME thin gold wedding band visible on the left ring
finger. CRITICAL: do NOT add a cardigan over the turtleneck, do
NOT replace with an off-white blouse, do NOT add a scarf, do NOT
add additional jewellery. The wardrobe is the SAME outfit Elena
wore at the start of the dinner — what has changed is her body
language and her gaze, NOT her clothes. The formality of this
scene comes from her POSTURE (shoulders squared, torso facing him
fully, hands flat on the back of the chair, mouth composed in a
firm neutral line), NOT from a wardrobe change and NOT from
re-styling her hair. The hair stays loose chestnut waves as in
the master and all other poses.

Pose & expression (CONFRONTACIONAL / DIRECT): standing very upright,
shoulders squared toward the detective for the first time in any pose,
both hands resting on the back of an unseen chair in front of her
(NOT leaning, NOT gripping — just resting flat, fingers spread for
balance), torso facing him fully. Eyes locked on his without looking
away, brows level, lips slightly compressed but not pursed — the
expression of someone about to say "We need to talk about this. Now."
Calm, sober, ready. There is no anger. There is also no escape.

Atmosphere: same warm interior palette as the other Elena poses,
DELIBERATELY NOT colder, NOT noir — but the lighting is more
sculpted, the shadows are deeper around the eye sockets, and the
candle is alive. This is still her house, still her husband. The
warmth has not gone. It has only sharpened.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, 3D, photorealistic, cartoon,
shouting, finger pointing, raised hand, raised eyebrows, dramatic
fury, mouth wide open, tears running, smeared makeup, cold lighting,
blue light, fluorescent, noir-thriller mood, ghostly, transparent,
pale-ill, multiple people, seductive pose, revealing clothing, hair
pulled back, hair tied behind ears, updo, bun, ponytail.
```

---

## Elena — Variantes "Hablando" · sensación de conversación

> ## ⚠️ POR QUÉ EXISTEN ESTAS VARIANTES
>
> Convención de aventura gráfica (igual que los sospechosos del juego, que
> alternan Neutral ↔ Pensativo cuando hablan): cada tono de Elena necesita
> **dos variantes**, una *idle* (escuchando, calladita) y una *hablando*
> (boca a media frase). DinnerPanel alterna entre las dos según el estado:
> cuando se muestra una línea de Elena → variante **hablando**; cuando
> aparecen los botones de respuesta del jugador → variante **idle**.
>
> ### Reglas comunes a las 4 variantes Hablando
>
> 1. **Wardrobe lock vigente**: cuello vuelto granate + falda lápiz
>    antracita + perlas + alianza + pelo castaño chocolate ondas media
>    melena suelto. **NO** se cambia ropa, **NO** se cambia peinado.
> 2. **Mismo fondo y misma luz** que la variante idle correspondiente
>    (mismo comedor cálido — sirve para que rembg recorte limpio luego).
> 3. **Misma cara** y misma identidad — usar la idle como `[ATTACH]`.
> 4. **Lo único que cambia**:
>    - **Boca a media frase**: ligeramente entreabierta (NO grito, NO
>      sonrisa amplia), labios separados unos milímetros mostrando
>      un destello de dientes superiores en algunas variantes
>    - **Sutil micro-gesto de mano** que sugiere expresividad de
>      hablar: una mano subida unos centímetros desde la idle, con
>      la palma ligeramente abierta hacia el detective como
>      acompañando la frase
>    - **Mirada idéntica** o muy parecida a la idle del mismo tono
> 5. **Sutileza**: el cambio entre idle y hablando debe ser perceptible
>    pero discreto. NO debe parecer otra mujer ni otra escena — es la
>    misma Elena en el segundo de medio en que pronuncia una palabra.

### Neutral-Hablando (apertura / repaso / gancho / cierre — fases neutras)

```
[ATTACH approved Elena-Neutral.png as reference image]

Half-body portrait, 3:4 vertical aspect ratio, character framed from
mid-thigh to top of head. SAME warm dimly-lit dining room background
as the neutral master pose. SAME soft amber key light from upper-
right at 30 degrees. CRITICAL: identical framing, identical
composition, identical background to the approved Elena-Neutral.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes,
smooth volumetric rendered shading. NOT cel-shading, NOT flat, NOT
anime, NOT 3D, NOT photorealistic.

Subject (CRITICAL: same as Elena-Neutral master):
- 38 year-old Spanish woman, Elena Solana, same face, same hazel-
  brown eyes, same complexion
- Hair: IDENTICAL to neutral master — shoulder-length chestnut brown
  loose natural waves, parted slightly off-centre, one strand in
  front of the right ear, tucked behind the left
- Build: same proportions

Clothing (WARDROBE LOCK — identical to neutral master and all other
Elena poses): SAME burgundy wool turtleneck, SAME charcoal-grey
pencil skirt, SAME pearl studs, SAME gold wedding band. NO changes.

Pose & expression (NEUTRAL — HABLANDO / SPEAKING): she is in the
middle of saying a calm domestic sentence — something like
"¿Qué tal el turno?" or "Te he calentado la cena". Mouth is
SLIGHTLY OPEN at mid-syllable, lips parted about three millimetres,
showing only the faintest hint of upper teeth (NOT grinning, NOT
smiling broadly, NOT shouting). Head tilted the same five degrees
to the right as the idle. ONE hand has lifted very slightly from
the clasped waist position — the right hand now resting palm-half-
open at chest height in a soft "talking" gesture, fingers relaxed
and curved, accompanying the word she is saying. The left hand
stays where it was in the idle. Eyes meet the camera with the same
calm warmth as the idle.

Atmosphere: same warm domestic intimacy as the idle. The shift is
purely in the mouth and in the right hand — everything else is
identical to the master.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, 3D, photorealistic, cartoon,
shouting, screaming, broad smile, full teeth grin, both hands raised,
finger pointing, hair pulled back, hair tied, changed hairstyle,
changed outfit, different background, different lighting, different
woman, exaggerated expression, mouth wide open, laughing, crying.
```

### Cálida-Hablando (tono casual — cenas 1-2)

```
[ATTACH approved Elena-Calida.png as reference image]

Half-body portrait, 3:4 vertical aspect ratio. SAME warm dining room
background, SAME amber key light, SAME framing as the cálida idle.

Art style: same as cálida idle — digital oil painting illustration,
Disco Elysium tradition. Soft painterly brush strokes. NOT cel-
shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Subject (CRITICAL: same as Elena-Calida master):
- 38 year-old Elena Solana, same face, same hazel-brown eyes
- Hair: IDENTICAL to cálida idle — loose chestnut chocolate waves,
  one strand in front of the right ear, tucked behind the left
- Wardrobe lock vigente: same burgundy turtleneck, same charcoal
  pencil skirt, same pearl studs, same wedding band

Pose & expression (CÁLIDA — HABLANDO / SPEAKING): she is in the
middle of saying something warm — a small affectionate sentence
like "Cómo no, mi amor" or "¿Qué te pongo?". Mouth SLIGHTLY OPEN
mid-word with a soft small smile that still reaches the eyes,
lips parted gently, the faintest hint of upper teeth visible.
Head tilted same as the idle (slight right tilt). Gesture: the
hand that holds the wine glass remains at chest height with the
glass; the OTHER hand, previously resting on her own collarbone
in the idle, has now lifted very slightly outward — palm open
toward the detective in a soft welcoming-gesture, fingers relaxed
and slightly spread, accompanying her words. Eyes meeting the
detective's with the same warmth as the idle.

Atmosphere: same warm golden interior intimacy as the cálida idle.
The mouth and the open palm are the only differences.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as cálida idle, plus: NO broad grin, NO laughter,
NO raised palm pointing accusatively, NO sad expression, NO worry
(this is the casual pose), hair pulled back, hair tied, changed
hairstyle, changed outfit, different background.
```

### Preocupada-Hablando (tono preocupada — cenas 3-7)

```
[ATTACH approved Elena-Preocupada.png as reference image]

Half-body portrait, 3:4 vertical aspect ratio. SAME warm dining room
background, slightly cooler shadow on the left side of the face same
as the preocupada idle. SAME framing.

Art style: same as preocupada idle — digital oil painting
illustration, Disco Elysium tradition. Soft painterly brush strokes.
NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Subject (CRITICAL: same as Elena-Preocupada master):
- 38 year-old Elena Solana, same face, same eyes
- Hair: IDENTICAL to preocupada idle — loose chestnut chocolate
  waves, one strand fallen forward across her cheek, NOT pushed
  back, NOT tied
- Wardrobe lock vigente: same burgundy turtleneck, same charcoal
  pencil skirt, same pearl studs, same wedding band

Pose & expression (PREOCUPADA — HABLANDO / SPEAKING): she is in
the middle of asking a concerned question — something like "¿Por
qué no me lo cuentas?" or "¿Estás durmiendo bien?". Mouth
SLIGHTLY OPEN mid-syllable, lips parted softly, NO smile, brows
still pulled in faintly (worry is preserved), the question is
sincere. Head turned the same two degrees away as the idle.
Gesture change: the previously clasped hands at her waist have
separated by a small distance — one hand has lifted up about
ten centimetres and opened palm-up in a soft questioning gesture,
fingers slightly curled, while the other hand remains at her own
collarbone or just below it (touching the neckline of the
turtleneck for self-comfort). Eyes searching the detective's face
with the same soft concern as the idle, but a fraction more open
because she is asking.

Atmosphere: same warm interior tone with the slight density of
unspoken worry as the preocupada idle.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as preocupada idle, plus: NO smile, NO laughter,
NO cheerful expression, NO confrontational stare, NO dramatic
crying, NO accusatory finger, hair pulled back, hair tied, changed
hairstyle, changed outfit, different background.
```

### Confrontacional-Hablando (tono confrontacional — cenas 6-8 + final C8)

```
[ATTACH approved Elena-Confrontacional.png as reference image]

Half-body portrait, 3:4 vertical aspect ratio. SAME warm dining room
background, SAME more sculpted lighting from the candle and side lamp,
SAME framing as the confrontacional idle.

Art style: same as confrontacional idle — digital oil painting
illustration, Disco Elysium tradition. Soft painterly brush strokes.
NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Subject (CRITICAL: same as Elena-Confrontacional master, with the
corrected loose-hair fix already applied):
- 38 year-old Elena Solana, same face, same eyes
- Hair: IDENTICAL to confrontacional idle (and to all other Elena
  poses) — loose chestnut chocolate waves, parted slightly off-
  centre, one strand falling in front of the right ear, tucked
  behind the left. CRITICAL: NOT pulled back, NOT tied — the
  wardrobe lock and hair lock are absolute
- Wardrobe lock vigente: same burgundy turtleneck, same charcoal
  pencil skirt, same pearl studs, same wedding band

Pose & expression (CONFRONTACIONAL — HABLANDO / SPEAKING): she is
in the middle of saying a firm but calm sentence — something like
"Tenemos que hablar" or "Mírame, Roberto". Mouth SLIGHTLY OPEN
mid-word, lips parted with a firm precise shape (NO yelling, NO
trembling), brows level (NOT furrowed in anger). The expression
is the same firmness as the idle — only the mouth has moved.
Gesture: the body stays squared as in the idle (shoulders facing
the detective fully). ONE hand still rests on the back of the
unseen chair as in the idle; the OTHER hand has lifted very
slightly off the chair back and is now angled palm-half-open
toward the detective at chest height, fingers spread for clarity
of speech, accompanying her words. Eyes locked on his without
looking away, brows level.

Atmosphere: same sculpted warm-with-shadow as the confrontacional
idle. The candle behind her shoulder still alive. NOT colder, NOT
noir.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as confrontacional idle, plus: NO shouting, NO
yelling, NO furrowed angry brows, NO finger pointing, NO raised
fist, NO trembling lips, NO tears, NO weakness — this is firm
direct speech, NOT anger and NOT distress. Hair pulled back, hair
tied, changed hairstyle, changed outfit, different background.
```

---

## Escenario — Comedor de Elena (sin personajes — bg compositado)

> Asset 16:9 que va de `background-image` en `.dinner-room__scene`
> debajo de los retratos transparentes de Elena (tras pasarlos por
> `rembg`). Es el comedor del piso de Hermosilla **sin nadie**: la
> mesa puesta para dos, candela viva, puerta de cocina iluminada al
> fondo, todo cálido. Es el mismo comedor que se ve borroso detrás
> de los retratos idle de Elena, pero ahora **nítido y completo** y
> sin personaje, porque Elena se compositará encima en runtime.
>
> Naming: `assets/img/scenes/Escenario_Comedor.png` (NUEVO).
>
> CSS objetivo (lo cableo yo después):
> ```css
> .dinner-room__scene {
>   background-image: url('../../assets/img/scenes/Escenario_Comedor.png');
>   background-size: cover;
>   background-position: center;
> }
> ```

```
Establishing shot of a domestic dining-room interior, 16:9 aspect
ratio, wide cinematic framing. NO PEOPLE in frame — fully empty
stage for character compositing.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium / classic mystery adventure game
tradition). Painterly detailed background, warm atmospheric lighting,
rich textures, soft focus on background depth. NOT cel-shading, NOT
flat, NOT anime, NOT 3D, NOT photorealistic.

Location: the dining room of Elena Solana and Roberto Mora's
apartment in the Salamanca district of Madrid (calle de Hermosilla),
exactly the same room that appears softly out of focus behind every
Elena dinner pose. This time the camera pulls back: we see the full
room cleanly.

Furniture (place naturally, painterly soft focus):
- CENTRE of the frame: a dark wooden rectangular dining table set
  for two, photographed at a slight angle from the LEFT side of
  the table so that the chair on the RIGHT is the natural slot
  where Elena will be composited in runtime. On the table: two
  identical red wine glasses (both with a small amount of wine
  visible), two ceramic plates (one with food, one empty), a low
  half-melted candle in a small brass holder at centre lit and
  alive (warmest light source in the room), two folded cream cloth
  napkins
- BEHIND the table, slightly off-centre to the right: a wide
  doorway leading to the KITCHEN, the kitchen lit by a warm
  yellow ceiling lamp, suggestion of dishes on a counter,
  glimpse of a stovetop and cupboards in soft focus, NO PEOPLE
  in the kitchen
- LEFT side of the frame: a wooden sideboard with framed family
  photographs (faces not readable, painterly), a small ceramic
  vase with no flowers, soft amber wall lamp above the
  sideboard providing ambient fill
- RIGHT side of the frame: an old burgundy velvet sofa partially
  visible at the edge, the corner of a coffee table, a folded
  newspaper
- BACK WALL behind the kitchen doorway: faint floral wallpaper
  in deep burgundy and gold, slightly faded, lived-in
- The wooden floor reflects the warm candle light gently

Lighting: the centre table candle is the warm focal point. A
secondary warm amber wall lamp on the left-side sideboard provides
ambient fill. The kitchen doorway at the back-right glows with
warm yellow light spilling into the dining room. There is NO cold
moonlight from a window (NOT in this scene — this is the warm,
intimate version of the room). All tones are amber, gold, deep
burgundy, soft brown. Lived-in domestic warmth.

Atmosphere: warm domestic intimacy, the soft glow of a couple's
dining room set for two in the early evening. Cosy, slightly aged,
faintly dusty in a homely way. NO ominous mood, NO noir shadows,
NO ghost atmosphere — this is the "happy memory" version of the
room that the detective sees every night when his alucinación
puts Elena across the table.

Camera: 50mm equivalent, eye-level, mid-distance. Framing leaves
the RIGHT THIRD of the frame relatively unoccupied at human-
torso height so the compositing of an Elena portrait (3:4
vertical, half-body) sits naturally over that area. The left
side of the frame holds the sideboard for visual balance.

Style ID: undersuspi-noir-v1.

NEGATIVE: modern minimalist interior, IKEA furniture, bright clean
showroom, people, human figures, silhouettes, ghosts, supernatural
effects, glowing apparitions, blood, gore, crime scene tape,
police presence, daylight, cold moonlight, blue lighting, kitchen
drama, party setting, romance movie aesthetic, multiple table
settings beyond two, modern technology (laptops, mobile phones,
smart TVs, flat screens), text on walls or items, cartoon,
children illustration.
```

---

## Elena — Despedida · final bueno C8

> Cena final del Caso 8, rama bueno (lucidez≥60, integridad≥60, ≥5
> flags clave, acusarse a sí mismo). Elena se despide. Le ha pedido
> al detective que llame y se entregue, y él lo hace. Esta es la
> última vez que la verá. **Aquí la imagen sí puede empezar a
> insinuar que ella no es del todo del mundo de los vivos**: luz
> dorada irreal por la espalda, ligera transparencia del contorno,
> pero la cara sigue siendo nítida y cálida. NO miedo, NO horror.
> Liberación.

```
[ATTACH approved Elena_neutral.png as reference image]

Full-body standing portrait, 3:4 vertical aspect ratio, character
framed from head to feet, occupying the central vertical axis of
the image. Background: the same Madrid dining room, but now seen
slightly wider — to her right, a doorway leading to a corridor with
soft golden backlight pouring through it as if from a window that
shouldn't be open. The wooden floor beyond the doorway is brighter
than the room itself. The dining table is empty of the wine
glasses for the first time.

Lighting: warm key light from upper-right (the dining room candle
still alive), AND a soft golden rim light coming from behind her,
through the doorway — the two lights meet on her shoulders. The
rim light is unrealistic, almost gentle film-fade gold, marking
that this is a goodbye scene, not a normal dinner.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes,
smooth volumetric rendered shading. NOT cel-shading, NOT flat, NOT
anime, NOT 3D, NOT photorealistic. NO HALOS, NO SUPERNATURAL HALOS,
NO ANGEL WINGS, NO RELIGIOUS SYMBOLS.

Subject (same as reference Elena_neutral.png — CRITICAL: same face,
same hair, same earrings):
- 38 year-old Elena Solana, same Mediterranean complexion, same
  chestnut waves, same pearl studs
- The face is fully solid and clear — NOT transparent, NOT pale,
  NOT ghostly in the cheap horror sense
- ONLY the very outer contour of her body (along the edges of her
  turtleneck shoulders and hair) shows the faintest soft fade into
  the golden backlight — like a person photographed against a
  window at sunset whose silhouette dissolves at the edges only

Clothing (WARDROBE LOCK — identical to cálida/neutral/preocupada/
confrontacional master): the SAME burgundy (deep wine red) wool
turtleneck sweater, hand-knitted texture, sleeves at full length
to the wrist. The SAME high-waisted charcoal-grey wool pencil
skirt. The SAME small pearl stud earrings, the SAME thin gold
wedding band visible on the left ring finger. CRITICAL: do NOT
add a cardigan, do NOT change to a goodbye-dress, do NOT swap to
funeral attire — visually anchoring this as the SAME woman she has
been across all eight dinners. The departure is in her face and
her gesture, not in her clothes.

Pose & expression (DESPEDIDA / GOODBYE): standing in the doorway
to the corridor, one foot already across the threshold, body
half-turned toward the detective for the last look back. Right hand
raised gently at chest height in a small open palm — neither
waving nor reaching — the kind of "I am going now, and that is
all right" gesture. Head turned over the shoulder, eyes meeting
the detective's directly, a faint sad smile that does reach the
eyes for the first and last time in the game. No tears. The look
of a woman who has been waiting three years to be allowed to leave.

Atmosphere: warm, melancholic, dignified. There is no violence
in this image. There is no fear. There is only the soft truth
that something has finally been said out loud and now both people
can rest.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, 3D, photorealistic, cartoon,
horror, scary ghost, white sheet ghost, decaying, zombie, skull,
bloody, transparent body, see-through torso, halo, wings, religious
iconography, angel, demon, multiple people, cold blue light, white
clinical lighting, mourning veil, funeral attire, weeping.
```

---

## Elena — Ausente · final malo C8

> Cena final del Caso 8, rama mala (cualquier otra combinación de
> ejes y flags). El detective vuelve a la mesa y Elena no está. La
> silla del otro lado está vacía. La grabadora reproduce su propia
> voz hablando solo. Se suicida. **Esta es la única pose en que
> Elena NO aparece en el frame** — el asset es el comedor sin ella,
> con marcas de su ausencia: la silla vacía, el plato sin servir,
> y la silueta proyectada en la pared del fondo (no de Elena, sino
> del detective solo). Render como "comedor abandonado".

```
NO subject portrait — this is an EMPTY-ROOM TABLEAU asset.

Wide cinematic interior shot, 16:9 horizontal aspect ratio,
establishing-shot framing of the dining room of a Madrid bourgeois
apartment, NO PEOPLE visible in the frame.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium / classic mystery adventure game
tradition). Painterly detailed background, warm-cold contrast
atmospheric lighting, rich textures. NOT cel-shading, NOT flat, NOT
anime, NOT 3D, NOT photorealistic.

Location: the same dining room used for Elena's other poses, but
DELIBERATELY EMPTY OF HER. Two wooden chairs face each other across
a small dark wooden table set for two: two plates (one with a half-
served portion of food now cold, one untouched), two wine glasses
(one half full, the other completely full and untouched), a candle
burnt very low at its centre, a folded napkin on each side. The
chair on the FAR side of the table (Elena's side) is slightly pulled
back at an angle — recently vacated. The chair on the NEAR side
(detective's side) is empty too, the napkin crumpled on the seat.

On the back wall: a framed wedding photograph from 2014 hanging
crooked. On the floor near Elena's chair: a single pearl earring
catching the candlelight.

Lighting: the candle on the table is the warm centre. The lamp by
the kitchen door has been turned off — the kitchen is now in
darkness. Cool moonlight comes in from a balcony window on the left
side of the frame, creating a cold-blue counterlight that crosses
the warm candle light in the middle of the table — visual conflict
between the warm "domestic life that was" and the cold "reality that
is".

On the wall directly behind Elena's empty chair: ONE long thin
shadow projected high — the shadow of a man hanging by the neck
from a beam (a beam visible in the corner of the ceiling at the
top of the frame). The shadow is rendered as a near-silhouette,
NOT graphic, NOT explicit — only the long vertical line, the slight
sway, and the limp shape at the top suggest what it is. The body
itself is OFFSCREEN, only the shadow on the wall is visible. This
must be unmistakable to an adult player but never gore.

Atmosphere: utter silence, the last second after a life ended,
warm-cold collision, melancholy without melodrama. The wedding
photograph and the single pearl earring are the only soft notes.

Camera: 50mm equivalent, eye-level, medium-wide, capturing the
whole table and one of the chairs. The shadow on the wall is in
the upper third of the frame, the table in the middle third, the
floor and earring in the lower third.

Style ID: undersuspi-noir-v1. CRITICAL: NO body visible, only the
shadow. NO blood. NO face of corpse. NO graphic violence. This is
a literary image, not a horror image.

NEGATIVE: cel-shading, flat, anime, 3D render, photorealistic,
gore, blood, visible corpse, visible body, dead face, hanging body
fully shown, rope details, neck details, graphic violence, horror
movie aesthetic, jump-scare composition, multiple people, daylight,
clinical light, cartoon, children illustration.
```

---

# CASO 8 · La última cena

> Madrid, 9 de noviembre de 2026. El detective recibe un aviso del
> comisario Beltrán: cuerpo de mujer en un piso de la calle de
> Hermosilla. Cuando llega, la dirección es la suya y el cuerpo es
> el de su esposa. El forense Don Octaviano dice que el cuerpo lleva
> meses muerto, no horas. Los tres sospechosos visibles (vecino,
> conserje, médico-abogado) son testigos honestos. El cuarto sospechoso
> es el propio detective, solo desbloqueable si los ejes acumulados
> en las cenas previas lo permiten.
>
> Ambientación: salón de un piso burgués del barrio de Salamanca
> (Madrid) habitado por un solo hombre durante tres años. Olor a
> humedad y a polvo. Calendario del 86 colgado en la pared.

---

## Elena Solana — VÍCTIMA (archivo policial)

> ⚠️ **DIFERENCIACIÓN OBLIGATORIA respecto a las poses vivas de
> Elena** (cálida / preocupada / confrontacional / despedida).
>
> Esta NO es Elena en la cena. Es Elena post-mortem, fotografía de
> archivo policial añadida al expediente del Caso 8 esta misma
> noche. La iluminación es fría, documental, gris azulada. La
> expresión es neutra muerta — ojos cerrados, no abiertos. Esta
> imagen contradice visualmente las cenas, y esa contradicción es
> el corazón del caso.
>
> Misma cara, mismo pelo, mismos pendientes que la Elena viva —
> para que el jugador lo reconozca a primera vista —, pero la piel
> tiene un tono ceroso ligeramente verde-grisáceo, los labios sin
> color, los ojos cerrados, ningún gesto. Tres años en el sofá.

```
Police archive portrait, 3:4 vertical aspect ratio, identification-card
style, framing head and shoulders only, centered.

Art style: digital oil painting illustration, semi-realistic stylized
character art for a noir detective adventure game (Disco Elysium /
classic 1990s point-and-click mystery game tradition). Soft painterly
brush strokes, smooth volumetric rendered shading, visible texture of
digital oil paint. NOT cel-shading, NOT flat colors, NOT anime, NOT
3D, NOT photorealistic.

Background: plain muted desaturated grey-blue archival backdrop,
slight vignette, no decoration — forensic record from a Spanish
police archive, identical aesthetic to other archive portraits in
the game (Hermes Mora, Salvador Cienfuegos, Camino Quintela, etc).

Lighting: even cool documentary lighting from the front, faint cold
rim from behind for separation, NO warmth, NO domestic glow.

Subject — DETAILED FACE (must be UNMISTAKABLY recognisable as the
SAME Elena Solana that appears in the dinner poses — same face, same
hair, same earrings — so that the player feels the gut punch of
seeing the woman from the dinners as a corpse photograph):
- 38 year-old Spanish woman, literature teacher
- Face shape: same oval face from Elena_neutral, same cheekbones,
  same nose, same lip shape — CRITICAL identity continuity
- Hair: same shoulder-length chestnut brown waves, falling naturally
  but slightly flatter than in the dinner poses — slightly matted at
  the temple, the hair of a body that has been still for a long time
- Skin: HERE THE CONTRAST — the warm Mediterranean complexion of the
  dinner poses is replaced by a waxy pale-greyish tone with a faint
  green-grey undertone in the temples and around the mouth. NOT
  gore, NOT decomposed-looking, NOT zombie — just the colour of a
  body recovered after a long period in a still room. No external
  injuries visible
- Lips: completely uncoloured, almost the same tone as the rest of
  the face, slightly parted, dry
- Eyes: CLOSED — eyelids gently shut, dark eyelashes resting on the
  pale cheekbones, no movement, no expression
- Earrings: the same small pearl studs from the dinner poses, present
  on both ears, an identifying detail that crushes the player when
  they recognise it

Clothing: not visible — only the upper hint of a plain grey forensic
sheet covering everything below the collarbone, photographed
respectfully, no skin below the neck visible

Mood: lifeless documentary tone, neutral expression, peaceful but
unmistakably gone. The dignity of a real police archive photograph.

Composition: head and slight upper-shoulders centered, eyes (closed)
at upper third, slight cold rim light from behind for separation.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D
render, children cartoon, smile, warm palette, full body, deformed,
text, watermark, eyes open, awake expression, gore, blood, decay,
maggots, zombie, horror makeup, smeared makeup, visible injury,
visible neck wound, strangulation marks (NO marks visible —
narratively important, the player should not see them), bruises,
green slime, white-eyed corpse, dramatic violence.
```

---

## Felipe Saiz

> 46 años. Vecino del rellano del detective desde hace 8 años. Hombre
> tímido, mira al suelo, pequeño, de barrio. Trabaja en una gestoría.
> Lleva tres años durmiendo mal por lo que oyó la noche del 9 de
> septiembre de 2023. Su nerviosismo es el del testigo culpable de
> no haber denunciado, no el del agresor. **NO confundir con Octavio
> Brán**: Felipe es más pequeño, más limpio, mira al suelo. Octavio
> es cuadrado, manos grandes, mira al detective.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet (full body, NOT cropped at the waist), occupying the
central vertical axis of the image. Dark interrogation room background
slightly out-of-focus. Warm key light from upper-left at 45 degrees,
soft falloff. NO table, NO chair, NO desk visible in the frame.

Art style: digital oil painting illustration, semi-realistic stylized
character art for a noir detective adventure game (Disco Elysium /
classic 1990s point-and-click mystery game tradition). Soft painterly
brush strokes, smooth volumetric rendered shading, visible texture of
digital oil paint. NOT cel-shading, NOT flat colors, NOT anime, NOT 3D,
NOT photorealistic.

Subject — DETAILED FACE (must NOT resemble any common illustration
character, generate a unique original face; the subject must look
distinctly DIFFERENT from any other suspect in the game — see
differentiation notes below):
- 46 year-old Spanish man, modest paper-shuffling office worker
  (gestoría) in the Salamanca district, has lived on the same
  landing for eight years
- Face shape: NARROW oval, slightly thin cheekbones, pointed chin,
  recessed jaw — a face that physically apologises before speaking
- Skin: pale Mediterranean complexion with a slight pallor from
  bad sleep, faint dark circles under the eyes, NO weathering, NO
  sun damage — an indoor man
- Eyes: medium-small, soft dark brown, behind a pair of plain
  rectangular silver-rim glasses, eyes that look DOWN by default, NOT
  at the detective — the gaze of a man habitually addressing the floor
- Glasses: clear thin rectangular silver-rim, sitting properly on the
  nose, slightly smudged
- Hair: short dark brown hair, neatly combed but starting to thin at
  the temples, mostly intact, no styling product
- Build: short to medium height, narrow shoulders, thin build, not
  athletic, slightly stooped posture even when standing upright

Clothing: a dull olive-green zip-up windbreaker over a beige plain
button-down shirt buttoned to the top, NO tie, dark grey corduroy
trousers slightly worn at the knees, brown lace-up shoes — a man
who put on his "I'm visiting the police" clothes from the back of
the wardrobe.

Pose & expression (NEUTRAL): standing slightly forward of balance,
hands clasped in front of his body at waist height, fingers
interlaced and thumbs gently rubbing together once every few seconds.
Head bowed about ten degrees forward, eyes lowered, looking somewhere
on the floor between himself and the detective. Mouth set in a faint
apologetic line. The posture of someone who has waited three years
to be asked.

Composition: subject slightly off-center to the right, eyes at upper
third.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D,
children cartoon, deformed, text, watermark, smiling, confident, broad
shoulders, square jaw, athletic build, expensive suit, gold jewellery,
sunburn, working-class outdoor look, white moustache, beard, bald,
heavy-set, tall imposing posture, SEATED, SITTING, ON A CHAIR, IN A
CHAIR, AT A TABLE, AT A DESK, ELBOW ON TABLE, HAND ON TABLE, LEANING
ON TABLE, TABLE IN FOREGROUND, DESK IN FOREGROUND, HALF-BODY FRAMING,
WAIST-UP CROP, BUST CROP, CROPPED AT WAIST, KNEES NOT VISIBLE, FEET
NOT VISIBLE.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet,
three-quarter angle, same dark interrogation background.

Same subject as reference: Felipe Saiz, 46 year-old Spanish Madrid
office worker, olive windbreaker, beige shirt, silver-rim glasses,
thinning dark hair, slim narrow build. CRITICAL: same face, same
hair, same clothing as the approved Neutral.

Pose & expression (PENSATIVO / TALKING): he has just said something
he has been holding inside for three years. His head is now tilted
slightly UP from its usual bowed position — he is finally meeting
the detective's eyes, or trying to. His mouth is open about a
centimetre, mid-sentence. One hand has lifted from the clasped
waist position to rest open against his own chest, just above the
heart, as if to verify that he is the one speaking. The other hand
still holds the cuff of the opposite sleeve. The expression is not
fearful — it is relieved-painful, the look of a man who has been
allowed to speak for the first time in years.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral — no new clothing, no changed hair, no
changed face, no aggressive expression, no shouting, SEATED, AT A
TABLE, ELBOW ON TABLE, HALF-BODY CROP.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet,
same dark interrogation background.

Same subject as reference: Felipe Saiz. CRITICAL: same face, same
hair, same clothing.

Pose & expression (NERVIOSO / NERVOUS): pressure is on him. His
right hand has gone up to grip the strap of his glasses where it
meets the temple, pushing the glasses slightly off-axis but not
removing them — a self-soothing gesture. The other hand grips his
own opposite wrist tightly. He has taken a half-step backward
without lifting his feet — the weight has shifted to his heels.
Eyes wide and blinking more often than normal, glistening but NOT
crying. Mouth half open, breathing visibly faster. The collar of
his beige shirt is now slightly damp at the neck. He is not lying
— he is overwhelmed by being heard.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral — no anger, no aggression, no fists, no
shouting, no broken posture, no fainting, SEATED, ON A CHAIR, AT A
TABLE, ELBOW ON TABLE, HALF-BODY CROP, WAIST CROP.
```

---

## Octavio Brán

> 58 años. Conserje del bloque desde hace 22 años. Hombre cuadrado,
> manos grandes, frente baja, mirada que no aguanta la del detective.
> Trabajó en la construcción antes de la portería. Perdió un hijo
> hace cinco años. Es quien ayudó al detective a la mañana del 9 de
> septiembre de 2023, sin saber del todo qué cargaba. **NO confundir
> con Felipe Saiz**: Octavio es ANCHO, FUERTE, con manos manchadas
> de trabajo; Felipe es estrecho y de oficina.

### Neutral

```
Full-body standing portrait, 3:4 vertical aspect ratio, character framed
from head to feet (full body, NOT cropped at the waist), occupying the
central vertical axis of the image. Dark interrogation room background
slightly out-of-focus. Warm key light from upper-left at 45 degrees,
soft falloff. NO table, NO chair, NO desk visible in the frame.

Art style: digital oil painting illustration, semi-realistic stylized
character art for a noir detective adventure game (Disco Elysium /
classic 1990s point-and-click mystery game tradition). Soft painterly
brush strokes, smooth volumetric rendered shading. NOT cel-shading,
NOT flat colors, NOT anime, NOT 3D, NOT photorealistic.

Subject — DETAILED FACE (unique original face; differentiation
critical against Felipe Saiz):
- 58 year-old Spanish man, building doorman (conserje) for 22 years
  in the Salamanca district, prior career in construction, working-
  class background, lost a son five years ago
- Face shape: SQUARE wide jaw, broad forehead, low brow, large
  rounded nose with visible pores, deep nasolabial lines, heavy
  jowls starting to form, thick neck — a face built like a block,
  the opposite of Felipe's narrow apologetic face
- Skin: tanned olive Mediterranean complexion with sun-weathered
  texture on the forehead and back of neck, faint old scar across
  one eyebrow from a building-site accident decades ago
- Eyes: small dark brown eyes set deep under heavy salt-and-pepper
  brows, eyes that DO look at the detective directly but with the
  visible reluctance of a man who knows what he is going to be
  asked, NOT shifty — uncomfortable but honest
- Glasses: NONE
- Hair: thick grey-and-black hair, swept back without product,
  slightly receding at the temples but full on top, slightly
  unruly from being run through with his hand many times
- Build: broad shoulders, thick chest, the upper body of a man
  who lifted things for a living, large hands with visible
  knuckles and old calluses — these hands are the most
  important detail of the character, they must read as
  WORKING HANDS

Clothing: a dark navy-blue zip-up uniform polo shirt with a tiny
embroidered logo over the chest pocket (illegible, painterly), a
dark grey work cardigan unzipped over it, plain dark trousers,
black sturdy work shoes. The cardigan has a small rip near the
hem on one side, never repaired.

Pose & expression (NEUTRAL): standing with weight evenly on both
feet, broad shoulders relaxed but slightly forward — protective
posture. Both hands hanging at his sides, palms slightly open,
the large rough working hands fully visible. Head straight,
slightly bowed forward, eyes meeting the detective's only to
quickly look away to a point on the wall. Mouth set in a careful
straight line, jaw tense. The posture of a big strong man bracing
to be asked something he has carried alone for three years.

Composition: subject central, eyes at upper third, the large hands
hanging visibly in the lower third of the frame.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, manga, photorealistic, 3D,
children cartoon, deformed, text, watermark, glasses, eyeglasses,
slim build, narrow shoulders, office shirt, business suit, tie,
moustache (NO moustache — that's Roque Vellido / Salvador), beard
(NO beard), bald (NO — full grey hair), young, athletic gym-shaped
body, designer clothing, jewellery, gold chain, SEATED, SITTING, ON
A CHAIR, IN A CHAIR, AT A TABLE, AT A DESK, ELBOW ON TABLE, HAND ON
TABLE, LEANING ON TABLE, TABLE IN FOREGROUND, DESK IN FOREGROUND,
HALF-BODY FRAMING, WAIST-UP CROP, BUST CROP, CROPPED AT WAIST,
KNEES NOT VISIBLE, FEET NOT VISIBLE.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet,
same dark interrogation background.

Same subject as reference: Octavio Brán, 58 year-old Spanish doorman,
broad shoulders, dark navy uniform polo, grey cardigan, full grey-
black hair, large working hands. CRITICAL: same face, same hair,
same clothing.

Pose & expression (PENSATIVO / TALKING): something has loosened
inside him. He is remembering the morning of 9 September 2023 —
the rain, the call from the upstairs intercom, the detective crying
like a child. His head is bowed about twenty degrees, eyes lowered
to the floor between his own feet. One large hand has come up to
cover his own mouth from below, the thumb pressing against the
underside of his chin, the index finger across the upper lip —
the gesture of an honest man censoring himself one last time
before speaking. The other hand grips his own opposite forearm
tightly. The shoulders have slumped forward and inward, smaller
than in the neutral.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral — no aggressive expression, no rage, no
fists, SEATED, AT A TABLE, ELBOW ON TABLE, HALF-BODY CROP, no
weeping, no kneeling.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Full-body standing portrait, 3:4 vertical aspect ratio, head to feet,
same dark interrogation background.

Same subject as reference: Octavio Brán. CRITICAL: same face, same
hair, same clothing.

Pose & expression (NERVIOSO / NERVOUS): the wall has come down. He
has straightened up to his full height — taller than Felipe by a
visible margin — and both his large hands are now pressed flat
against his own face, fingers spread, palms covering his eyes and
upper cheeks. Only his mouth and the line of his jaw are visible
through the gap. He has not crouched, has not flinched — he is
standing fully upright, taking the weight of finally speaking it.
His shoulders rise and fall once visibly with a long breath. The
posture of a big man crying without making it look like he is
crying. Eyes hidden. Mouth slightly open.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as neutral — no fists raised, no anger, no shouting,
no kneeling, no collapse, no fainting, no actual tears running
visibly (his hands cover the eyes — keep dignified), SEATED, ON A
CHAIR, AT A TABLE, ELBOW ON TABLE, HALF-BODY CROP.
```

---

## Don Eulogio Pacheco hijo · REUTILIZAR Caso 6

> Don Eulogio Pacheco hijo es el **mismo personaje** que aparece en
> el Caso 6 ("Estudio Caracedo"). Sus tres poses ya están producidas
> en [PROMPTS-ACTO2.md §Eulogio Pacheco hijo](PROMPTS-ACTO2.md#eulogio-pacheco-hijo)
> y guardadas en `assets/img/suspects/Caso6/Sospechosos/`.
>
> **Acción**: copiar los tres ficheros (Neutral, Pensativo, Nervioso)
> a `assets/img/suspects/Caso8/Sospechosos/`. NO regenerar. La
> continuidad visual es importante: aparece como "el amigo de la
> familia" del detective, no como personaje nuevo.
>
> Si por algún motivo se requiere una pose ADICIONAL para C8 (por
> ejemplo, un Eulogio "ya muy mayor, ya cansado, en el sofá de su
> consulta entregando voluntariamente el certificado del 2023"),
> entonces sí regenerar con framing especial — pero por defecto no
> hace falta: las tres poses de Caso 6 sirven al 100%.

```
# Comando de copia (PowerShell):
Copy-Item assets/img/suspects/Caso6/Sospechosos/EulogioPachecoHijo-Neutral.png   assets/img/suspects/Caso8/Sospechosos/EulogioPachecoHijo-Neutral.png
Copy-Item assets/img/suspects/Caso6/Sospechosos/EulogioPachecoHijo-Pensativo.png assets/img/suspects/Caso8/Sospechosos/EulogioPachecoHijo-Pensativo.png
Copy-Item assets/img/suspects/Caso6/Sospechosos/EulogioPachecoHijo-Nervioso.png  assets/img/suspects/Caso8/Sospechosos/EulogioPachecoHijo-Nervioso.png
```

---

## Roberto Mora — DETECTIVE (cuarta tarjeta C8 — espejo del recibidor)

> El propio detective. Hasta ahora invisible: durante los 7 primeros casos
> el canon visual ([ASSETS-VISUALES.md:49](../docs/ASSETS-VISUALES.md#L49))
> dice "**no se ve la cara directamente**: silueta, manos, primer plano del
> bloc. Su retrato sólo aparece en C8 como 'cuarta tarjeta'". El cuarto
> sospechoso de C8 es él, y se desbloquea sólo si los ejes y flags de cenas
> previas lo permiten ([caso08.js:56-66](../js/data/caso08.js#L56-L66)).
>
> **Concepto de framing — ESPEJO DEL RECIBIDOR**: el rostro del detective
> no se renderiza nunca en plano frontal directo. Las tres poses son **el
> mismo hombre mirándose en el espejo del recibidor de su propia casa**,
> el mismo espejo en el que [caso08.js:299](../js/data/caso08.js#L299) dice
> *"El detective se sienta frente a su propio reflejo en el espejo del
> recibidor"*. La cara se revela siempre **a través del reflejo**, no
> directamente. Esto refuerza la disociación: durante el caso 8, su mente
> le mira desde fuera.
>
> Estructura visual común a las 3 poses:
> - Plano vertical 3:4, **medio cuerpo** (no full-body — esta vez es una
>   excepción al standing-only convencional; el espejo lo justifica)
> - **El espejo ocupa el tercio superior y medio del frame**: marco
>   dorado antiguo (gusto de Elena, de cuando lo eligieron juntos), óvalo
>   o rectangular ornamentado
> - **En el reflejo del espejo se ve la cara del detective de frente**:
>   primer plano cara-y-hombros
> - **Fuera del espejo, en primer plano de la imagen real (no reflejo)**:
>   la nuca y los hombros del detective de espaldas a la cámara, más
>   borrosos / desenfocados, anclando que es un reflejo
> - Una **consola del recibidor** debajo del espejo: madera oscura, con
>   un cuenco para las llaves, un teléfono fijo (el del juego), y según
>   la pose un vaso/botella
> - **Iluminación**: una sola lámpara de pared cálida amarilla a un lado
>   del espejo. Detrás del detective (al fondo del recibidor) se ve la
>   entrada al salón con la mesa puesta para dos en luz cálida — un
>   recordatorio visual de Elena al fondo
>
> Esto es nuevo respecto al canon original (que decía "silueta"), y es
> intencional: la **silueta seguía vigente para Resolución de los 7 casos
> anteriores**, pero en C8 la cuarta tarjeta SÍ enseña su cara — porque
> la confesión exige verse.

### Roberto Mora — Características físicas canónicas

> Ancladas a [ASSETS-VISUALES.md:49](../docs/ASSETS-VISUALES.md#L49) y a
> los diálogos del juego:
> - Hombre español, 45 años (canon "~45"), inspector de Homicidios de
>   Madrid, lleva 18 años en el cuerpo
> - **Cara**: fuerte mandíbula bajo barba de tres días sin afeitar
>   uniformemente, ojos oscuros profundamente cansados con bolsas
>   marcadas (no duerme bien desde 2023), pómulos ligeramente hundidos,
>   nariz recta, frente ancha, labio inferior más grueso que el superior
>   — una cara que fue capaz y se ha ido erosionando
> - **Pelo**: castaño oscuro corto a los lados, ligeramente más largo y
>   despeinado por arriba, **canas marcadas en las sienes**, peinado sin
>   producto, mechón cayendo a veces sobre la frente
> - **Complexión**: complexión mediterránea con palidez de oficina y
>   alcohol, cierto enrojecimiento facial sutil bajo los ojos por noches
>   sin dormir y por la botella de licor de Cadaqués que ha vaciado de
>   más
> - **Construcción**: 1,80m aproximadamente, hombros anchos pero
>   ligeramente caídos por el peso de tres años, complexión normal sin
>   ser atlética
> - **Ropa fija** (canon ASSETS-VISUALES): gabardina gris oscura **sobre
>   los hombros sin abrochar** (acaba de llegar al piso desde la
>   comisaría), debajo traje gris con **corbata negra fina aflojada**,
>   camisa blanca arrugada con primer botón desabrochado, **reloj de
>   cuerda** mecánico en muñeca izquierda visible
> - **Nunca lleva** insignia visible, placa colgando, pistola
>   reglamentaria a la vista — esto es su casa, no la comisaría

### Neutral

```
Half-body portrait, 3:4 vertical aspect ratio, character framed from
mid-chest to top of frame, through a MIRROR REFLECTION composition.

Art style: digital oil painting illustration, semi-realistic stylized
character art for a noir detective adventure game (Disco Elysium /
classic 1990s point-and-click mystery game tradition). Soft painterly
brush strokes, smooth volumetric rendered shading, visible texture of
digital oil paint. NOT cel-shading, NOT flat colors, NOT anime, NOT
3D, NOT photorealistic.

Composition (CRITICAL — read carefully):
- Foreground in front of the viewer: the BACK of the detective's head
  and shoulders, slightly out of focus, occupying the lower-third of
  the frame, partially silhouetted against the warm light. We see the
  back of his neck, his dark hair, the dark grey trench coat over his
  shoulders. He is facing AWAY from the camera, INTO the mirror.
- Middle/upper two-thirds of the frame: an ANTIQUE GILDED MIRROR
  hanging on a wall, oval or rectangular with ornate gold frame
  (Elena's taste, chosen together in 2014). The mirror DOMINATES the
  upper portion of the composition.
- INSIDE THE MIRROR REFLECTION: the DETECTIVE'S FACE seen frontally,
  half-body, mid-chest up. This is the first time the player sees
  Roberto Mora's face in the entire game — through the reflection,
  not directly.
- Below the mirror, on a dark walnut hallway console table: a small
  ceramic bowl with house keys, a polished brass landline telephone
  (the in-game telephone), and an envelope with handwritten
  Spanish address (illegible, painterly)
- Behind the detective (visible in the mirror's reflection, far
  background): the open doorway to the salon with the dining table
  set for two, warm candle glow at distance — Elena's domain
  glimpsed in the reflection behind him.

Subject in the mirror (FRONTAL — this is the face reveal):
- 45 year-old Spanish man, Roberto Mora, homicide inspector
- Face: strong jaw under three-day uneven stubble, dark tired brown
  eyes with marked under-eye bags, slightly hollow cheekbones,
  straight nose, broad forehead, fuller lower lip — a face that was
  capable and has eroded across three years
- Skin: warm Mediterranean complexion with the dullness of bad sleep
  and habitual drink, faint redness under the eyes, NOT ruddy, NOT
  pale-ill — just worn
- Hair: dark brown short on the sides, slightly longer and
  unstyled-tousled on top, MARKED GREY AT THE TEMPLES, one strand
  fallen across the forehead, no product
- Build: 1.80m approx, broad-shouldered but slightly slumped, normal
  build neither athletic nor soft

Clothing visible in the reflection:
- Dark grey wool trench coat draped over the shoulders unbuttoned,
  not worn through the sleeves — just arrived home from the precinct
- Underneath: grey suit jacket with a THIN BLACK TIE LOOSENED at the
  collar, WHITE WRINKLED SHIRT with top button undone
- Wrist visible in the mirror: a vintage mechanical wristwatch with
  a brown leather strap on the left wrist
- NO visible badge, NO visible gun, NO holster — this is his home

Pose & expression (NEUTRAL): standing motionless in front of the
mirror, both hands resting flat on the edge of the console table
below the mirror (visible in the lower-third foreground from behind).
In the mirror reflection: he stares directly at his own eyes with a
blank, unreadable expression — neither sad nor angry nor frightened.
The face of a man who has just come home from a case and has not yet
processed what he saw on his own sofa upstairs. The blankness is
itself the emotion: pre-recognition, dissociated stillness.

Lighting: a single warm amber wall sconce mounted to the right of
the mirror, casting hard warm light across half of his face in the
reflection (right side of his face warmly lit, left side in soft
shadow). The salon at the back in the reflection glows with a deeper
amber. The foreground (back of his head) is in cooler shadow because
the lamp is behind him from the camera's viewpoint.

Atmosphere: silent, suspended, the moment before everything starts
collapsing. The mirror is the focal anchor — the player understands
intuitively that this man is looking at someone he does not yet
recognise.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat colors, anime, manga, photorealistic, 3D
render, children cartoon, deformed, text, watermark, NO MIRROR (the
mirror is the whole point), full-body, athletic-hero pose, smiling,
laughing, holding a gun, holding a badge, uniformed police, modern
LED lighting, fluorescent lighting, cold blue clinical light, multiple
people in the mirror, ghostly reflection of someone else, two
different faces (his reflection must be HIS face, just shown
frontally), bloody face, scarred face, action-movie aesthetic,
crime-scene gore.
```

### Pensativo (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Half-body portrait, 3:4 vertical aspect ratio, same mirror-reflection
composition as Neutral, same antique gilded mirror, same hallway
console table, same back-of-head foreground.

Same subject as reference: Roberto Mora, 45 year-old Spanish homicide
inspector, dark grey trench coat over shoulders, grey suit, thin black
tie loosened, white wrinkled shirt, dark hair with grey temples,
three-day stubble. CRITICAL: same face, same hair, same clothing as
the approved Neutral. Same mirror, same hallway.

Pose & expression (PENSATIVO / TALKING): the blankness has cracked.
In the foreground from behind: he has leaned slightly closer to the
mirror, his hands now gripping the edge of the console table more
firmly (knuckles whitening, painterly suggestion). In the mirror's
reflection: his brows are pulled down into a faint frown, eyes have
narrowed and dropped from his own gaze to somewhere lower on the
reflected face (he is looking at his own mouth, his own jaw, as if
they are someone else's). Lips are slightly compressed. The
expression is that of a man being told something difficult by his
own face — like he has caught a stranger making a confession in his
voice. Still calm, but no longer blank.

A small detail change: a TUMBLER GLASS with two fingers of amber
liquor has appeared on the console table next to the bowl of keys —
he poured himself one between the Neutral and this pose. The bottle
of Cadaqués liqueur (mentioned in [caso08.js:313](../js/data/caso08.js#L313))
is visible at the edge of the console, half empty.

Lighting: same warm wall sconce, but the salon at the back of the
reflection is now slightly dimmer, as if a candle there is starting
to burn down. The contrast on his face is sharper, the shadow side
deeper.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as Neutral — no fists raised, no shouting, no anger,
no tears running, no full-body, no different face, no second person
visible in the mirror, the mirror remains the focal device.
```

### Nervioso (adjuntar NEUTRAL aprobada)

```
[ATTACH approved Neutral as reference image]

Half-body portrait, 3:4 vertical aspect ratio, same mirror-reflection
composition as Neutral and Pensativo, same antique gilded mirror,
same hallway console table.

Same subject as reference: Roberto Mora. CRITICAL: same face, same
hair, same clothing as the approved Neutral. Same mirror, same
hallway.

Pose & expression (NERVIOSO / NERVOUS — THE MOMENT OF RECOGNITION):
the wall has come down. In the foreground from behind: he has taken
half a step BACK from the console, one hand has come up to grip the
back of his own neck (gesture of self-restraint), the other hand
remains flat on the console but visibly trembles — the painterly
suggestion of a slight blur on that hand. In the mirror's reflection:
his eyes are WIDE OPEN and locked on his own eyes for the first time
fully, his mouth is slightly open as if mid-breath, no shouting, no
expressive horror — just the controlled-thunderclap recognition of a
man who has just understood, in his own reflected face, that the
killer he was looking for in the case file is himself. The expression
is **adult horror**, not jump-scare horror. Quiet. Unshareable. The
moment of internal collapse.

Detail changes: the TUMBLER GLASS on the console is now empty,
tipped on its side, a small amber puddle visible on the dark walnut.
The bottle of Cadaqués liqueur is also visible, FULLY empty. The
brass landline telephone receiver has been LIFTED off its cradle and
laid on the console next to it (he was about to call Beltrán to turn
himself in, and the recognition just hit him mid-gesture). The
envelope on the console has fallen to the floor.

Lighting: the warm wall sconce flickers slightly (painterly
suggestion of an unstable lamp), and the salon at the back of the
mirror's reflection has gone almost dark — only a single candle
flame still visible on the dining table. The shadow on the left side
of his reflected face has DEEPENED noticeably, the warm side of his
face is more orange than amber now. The mirror frame catches a sharp
gold reflection on its upper edge.

Atmosphere: the apartment has stopped pretending. The detective is
seeing himself for the first time in three years. Nothing dramatic
happens visually — but the painterly weight of the image must make
the player understand that this is the moment.

Style ID: undersuspi-noir-v1.

NEGATIVE: same as Neutral — NO scream, NO open-mouth shout, NO
crying, NO blood on the face, NO action-movie collapse, NO sweat
beads photorealistic, NO body horror, NO mirror cracking (the mirror
stays intact — the breaking happens inside the man), NO second
person visible, NO ghost of Elena in the mirror behind him (she is
NOT in this image — that is the point), full-body, supernatural
imagery, gore.
```

---

## Escenario — Salón Hermosilla

> El salón del piso de la calle de Hermosilla. Es **la casa del
> propio detective y la cripta no oficial de Elena Solana**. Una
> habitación que un solo hombre ha habitado durante tres años
> creyendo que cenaba con su esposa cada noche. La mesa está siempre
> puesta para dos. El sofá tiene una mancha invisible que sólo se
> revela bajo UV. El olor que el detective no nota es viejo y
> persistente.
>
> Esta es la **escena principal del juego**: aparece en la pantalla
> de juego (lado izquierdo del split) durante todo el Caso 8 y en
> la cena final. El escenario `scene-caso8` lo invoca por su
> `cssClass`. **CRÍTICO**: debe leer como una casa habitada por
> alguien que ya no está allí del todo. Cálida y enferma a la vez.

```
Establishing shot of a domestic interior, 16:9 aspect ratio, wide
cinematic framing. NO PEOPLE in frame — fully empty stage for
character compositing and dialogue overlay.

Art style: digital oil painting illustration, semi-realistic stylized
environment art (Disco Elysium / classic mystery adventure game
tradition). Painterly detailed background, warm atmospheric lighting,
rich textures. NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT
photorealistic.

Location: the living-and-dining room of a Madrid third-floor
bourgeois apartment in the Salamanca district (calle de Hermosilla),
inhabited by a single forty-year-old man for the past three years
who believes he still lives there with his wife. The room is
furnished by a couple in 2014 and has not been redecorated since.

Furniture (place naturally, do not foreground them):
- Centre of the frame: a dark wooden rectangular dining table set
  for two, centred on a worn dark-red rug. Two old-fashioned wooden
  chairs face each other across the table. On the table: two
  identical red wine glasses (both with wine), two plates (one with
  food going cold, one untouched), a low half-melted candle in a
  small brass holder, two folded cloth napkins, a porcelain salt
  cellar.
- To the LEFT of the table: an old velvet sofa in dark burgundy,
  facing the right wall, with a single dent on the left cushion as
  if someone has been resting there a long time. Above the sofa: a
  framed black-and-white wedding photograph hanging slightly
  crooked.
- To the RIGHT of the table: a sideboard with framed family
  photographs (faces not readable, painterly), a small Sanyo
  cassette tape recorder visible on the corner of the sideboard,
  a glass of water half-drunk next to it.
- BACK WALL: a large vintage 1986 wall calendar still hanging,
  with the page open on August 1986. One day (14 August) circled
  in thick red ink, clearly visible from across the room.
- LEFT WALL: a tall narrow window with heavy dark-green velvet
  curtains, partially drawn. The sliver of night sky beyond is
  dark blue with a faint streetlamp glow from below.
- KITCHEN DOORWAY at the back-right: warm yellow light spilling
  through. Suggestion of dishes on a counter beyond. No people.
- HALLWAY DOORWAY at the back-left: dark, leading into a corridor
  where a console table holds a single brass landline telephone.
  The drawer of the console table is slightly open.
- A faint cobweb in one upper corner where the wall meets the
  ceiling, almost invisible.

Lighting: a single warm table candle in the centre of the table is
the strongest light source — small but golden. A secondary warm
amber wall lamp by the sideboard at upper-right provides ambient
fill. The kitchen doorway light at the back-right gives a soft
golden rim along that side of the table. The window at the left
admits a cold faint blue moonlight that crosses the warm tones
without overpowering them — a quiet visual conflict between warm
"home" and cold "outside". The wedding photograph above the sofa
catches a small reflection of the candle.

Atmosphere: warm but stale. Lived in by ONE person for years.
Slight dustiness in the air, slightly stale wine smell suggested
in the visual texture, faded carpet edges, the impression of a
home where everything is exactly where the wife left it three
years ago. Cosy and wrong at the same time. NOT haunted-house
aesthetic, NOT spooky lighting — just a room that has been the
same too long.

Camera: 50mm equivalent, eye-level, mid-distance, capturing the
table centred with the sofa on the left and the sideboard on the
right. Upper half of frame relatively clean for character portrait
compositing (Elena's seat across the table is the natural
right-side compositing slot).

Style ID: undersuspi-noir-v1.

NEGATIVE: modern minimalist interior, IKEA furniture, bright clean
showroom, people, text, photorealistic, anime, 3D, cel-shading,
ghosts visible, supernatural effects, glowing apparitions, blood,
gore, crime scene tape, police presence, daylight, kitchen drama,
party setting, romance movie aesthetic, multiple table settings,
modern technology (laptops, mobile phones, smart TVs), cartoon,
children illustration.
```

---

## Pruebas Caso 8

### P1 — Informe Forense

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay
view, document placed flat on a dark wooden desk surface, soft
shadow from off-frame lamp.

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes.
NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: official Spanish forensic autopsy report, single
A4 page, contemporary 2026 format, signed by the senior forensic
pathologist of the Centro district.

Visual content (text MUST NOT be readable except for the handwritten
note at the bottom, which should be SUGGESTIBLE but still painterly):
- Modern laser-printed official forensic header with a coat-of-arms
  style emblem suggesting "Instituto Anatómico Forense — Madrid"
  (illegible, painterly)
- Two columns of typed paragraphs, all text blurred and illegible
- A small anatomical diagram of a HUMAN BODY IN SUPINE POSITION on
  the right side of the page, with arrows pointing to several
  areas (chest, hands, neck), suggesting examination notes — NOT
  graphic, no organs, just outline diagram
- An emphasis box around the typed line "TIEMPO DE FALLECIMIENTO"
  with an alarming highlight (yellow marker streak across the box,
  painterly) and approximate visible characters that suggest "24 — 36
  meses" but remain ARTISTICALLY UNREADABLE
- At the BOTTOM of the page: a HANDWRITTEN NOTE in dark blue
  fountain pen ink, slightly tilted, suggesting urgency: the words
  "INSPECTOR MORA" partially visible at the start, then a wave of
  unreadable cursive ending with the initials "O.V." (signature) —
  the handwriting must read as a personal note from one professional
  to another, NOT a hostile document
- An official stamp in faded red ink at the lower right
- A small paperclip at the top edge
- A faint coffee ring stain near a corner

Period detail: contemporary 2026 Spanish clinical aesthetic, crisp
white paper, modern official look but austere.

Style ID: undersuspi-noir-v1. CRITICAL: typed text NOT readable.
Handwritten note SUGGESTIBLE but still painterly, NOT clean lettering.

NEGATIVE: readable text, photorealistic, 3D, anime, gore, body parts,
visible organs, autopsy table, body bag, cel-shading, comic-book
typography, modern smartphone app interface, photographs of corpses.
```

### P2 — Dos Copas

```
Evidence object photograph, 1:1 square aspect ratio, two objects
centred together, shot from slight top-down 30-degree angle, placed
on dark felt mat.

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Object: TWO identical red wine glasses standing side by side on a
dark felt evidence mat. Both glasses are the same model — classic
medium-sized red wine glasses with thin stems and a slight bell
shape, slightly old-fashioned. BOTH glasses contain red wine to
approximately the same level (half full). They are positioned so
that they almost touch at the stems but do not — a couple's
glasses placed by one hand.

KEY VISUAL DIFFERENCE between the two glasses (this is the heart of
the evidence — must be obvious to a careful player but not jump-
scare obvious):
- The LEFT glass has very faint old fingerprints visible along
  the curve of the bowl, slightly dusty-looking, with a thin film
  along the inside that suggests the wine has been there a long
  time but the glass itself has not been touched in years
- The RIGHT glass has FRESH fingerprints clearly visible (smudges
  reflective and clean) along the same curve, and the wine surface
  on this side has the faint mark of a recent sip-line

Lighting: single raking warm side light from the right, casting
two long stem-shadows across the dark felt surface, revealing the
texture of the wine and the difference in the fingerprint patterns
through reflection.

Markings: a small neutral grey forensic evidence tag at the bottom-
right of the frame, no readable text.

Style ID: undersuspi-noir-v1.

NEGATIVE: readable text, ONE glass only, three glasses, broken
glass, spilled wine, blood instead of wine, modern stemless
glasses, plastic cups, cel-shading, flat, anime, 3D, photorealistic
photograph of real glasses, identical glasses with no fingerprint
difference (the difference is the entire point), party setting,
champagne flutes, beer glasses.
```

### P3 — Calendario (versión normal)

```
Evidence object photograph, 1:1 square aspect ratio, single object
centred, shot frontally as if photographed on the wall where it
hangs (slight 5-degree angle for depth), placed against a dark
plastered wall background.

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Object: a vintage Spanish wall calendar from the year 1986, slightly
yellowed with age, hanging from a nail on a section of cream-yellow
plastered wall with old paint cracks. The calendar is open at the
month of AUGUST 1986. Top half: a faded photograph of a Spanish
coastal village (Cadaqués-like, but unspecific) with whitewashed
houses and a blue sea, the colours muted by 40 years of sunlight.
Bottom half: the standard grid of 31 days, single-row weekday
abbreviations in old print, the typography clearly 1980s Spanish
office calendar style.

KEY VISUAL DETAIL: the day "14" (Thursday in August 1986) is
circled with a thick red ink ring drawn carelessly by hand — NOT
neat, slightly oblique, the kind of mark a sleep-deprived man
would make in the middle of the night. The red ink is faded but
clearly red, and the circle goes slightly outside the box of the
day. NO other days are marked.

Lighting: warm overhead key light from above-front, the paper of
the calendar shows its texture, slight curl at the bottom corners
from age, soft shadow against the wall behind it.

Composition: calendar fills approximately 70% of the frame, the
"14 August" circle is positioned in the lower-right quadrant of
the frame for natural reading.

Style ID: undersuspi-noir-v1. CRITICAL: 1986 year visible on the
header, August month, day 14 circled in red. No other text
readable.

NEGATIVE: modern 2020s calendar, smartphone calendar, digital
screen, multiple circled days, no circled days, blood-like red ink
that reads as gore, clean unstained paper, broken wall, photograph
of a real calendar, cel-shading, flat, anime, 3D, photorealistic,
cartoon.
```

### P3 — Calendario UV (adjuntar versión normal aprobada)

```
[ATTACH approved P3 Calendario (normal version) as reference image]

Same object, same framing, same calendar — UV reveal variant.

The lighting changes: now the scene is lit by a handheld UV blacklight
torch held by the off-frame detective. The wall around the calendar
takes on a slight violet-blue glow. The paper of the calendar fluoresces
faintly white. The red ink ring around the "14" is now darker,
desaturated to brown under UV.

KEY UV REVEAL: directly OVER the red-circled day "14", spanning
across the date box and out across the surrounding three or four
days, appears the handwritten word "perdón" written in OLD DRIED
BLOOD that under UV appears as a dark brown-black mark with a faint
fluorescent edge. The writing is sloppy, urgent, in lowercase cursive
Spanish handwriting, the same hand that drew the red circle. The
word fits within the lower half of the calendar page and is clearly
unreadable under normal light but fully visible under UV.

The colour palette is dominated by deep violets, indigo, and the
fluorescent off-white of the paper. The handwritten "perdón" is the
darkest mark in the frame.

Style ID: undersuspi-noir-v1. CRITICAL: same calendar as the normal
version (same August 1986, same 14 circled), only the UV reveal is
new. The word "perdón" must be SUGGESTIBLE in handwriting style
but painterly (NOT crisp lettering).

NEGATIVE: same as normal P3, plus: no clean printed letters, no
glowing neon green text, no horror-movie UV effects, no skull
imagery, no demonic symbols, no blood splatter (the writing is
small, deliberate, anguished — not a horror scene).
```

### P4 — Grabadora

```
Evidence object photograph, 1:1 square aspect ratio, single object
centred, shot from slight top-down 30-degree angle, placed on dark
felt mat.

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Object: a vintage Japanese cassette tape recorder, brand SANYO
(slightly visible illegible logo in painterly form), model from
approximately 1992. The body is a dull grey-beige plastic with a
brushed metal panel along the top. Visible controls: a row of large
rectangular buttons (PLAY, REC, FF, REW, STOP, PAUSE) with a small
red dot light next to REC, the red LED is currently LIT, indicating
the machine is currently recording or recently was. A small built-in
microphone grille at the top-left. A circular tape-counter dial in
the centre. A single black dial knob on the right for volume. The
cassette compartment is visible through a small clear plastic window
on top — a cassette tape is inserted, but the window shows the tape
is on its very last reel (one full spool, the other almost empty,
suggesting hours of recording have already played).

Wear: the corners of the device are slightly scuffed, the plastic
casing has a faint yellow tint from age, a fingerprint smudge is
visible on the brushed metal panel. The power cord disappears off-
frame to the right. The whole device looks alive — not a museum
piece, but a working machine being used right now.

Lighting: a single warm key light from the upper-left, slight rim
from the right, casting a long shadow of the device to the lower-
right of the frame. The red REC LED glows softly.

Markings: a small neutral grey forensic evidence tag at the lower-
right, no readable text.

Style ID: undersuspi-noir-v1.

NEGATIVE: readable text, modern digital recorder, smartphone, USB
recorder, broken device, opened cassette compartment with tape
hanging out, multiple recorders, blood, cel-shading, flat, anime,
3D, photorealistic, cartoon.
```

### P5 — Fotos Cajón (versión normal)

```
Evidence object photograph, 1:1 square aspect ratio, multiple objects
arranged together, shot top-down flat-lay view, placed on dark felt
mat.

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Object: three wedding photographs from the year 2014, laid out on
the dark felt as if recently removed from a drawer. The photos are
overlapping slightly but the main one is the largest and most
prominent in the centre-front.

THE MAIN PHOTO (front and largest, roughly 15×20cm):
- A wedding photograph from 2014, San Sebastián, vintage
  semi-formal style (the kind a Spanish couple in their late 20s
  would have taken)
- Foreground: the bride (Elena Solana — same face as the dinner
  poses, same chestnut hair but in a soft updo, white wedding
  dress with lace shoulders, small white flowers in the hair, a
  faint smile) in centre, slightly to the left
- Behind her, also visible but slightly out of focus and darker in
  the lighting: the groom (Roberto Mora, 30 years old version, dark
  suit, no clear face — face deliberately rendered as obscured /
  slightly turned away / shadowed, so the player does not yet see
  the detective's face clearly)
- Background: a coastal Basque landscape, white wall, blue sea,
  evening light

THE TWO BACKGROUND PHOTOS (smaller, partially visible behind the
main one):
- One showing the same couple at a table at the wedding reception,
  laughing
- One showing the couple walking by the sea

All three photos are slightly faded, slight finger-grip marks on the
edges showing they have been handled many times. No frames — these
were stored loose in a drawer.

Lighting: single warm overhead light, soft shadows, the dark felt
beneath the photos has the faint impression of a drawer's velvet
lining (suggesting they were just removed).

Markings: a small neutral grey forensic evidence tag at the lower-
right of the frame, no readable text.

Style ID: undersuspi-noir-v1. CRITICAL: Elena's face in the main
wedding photo must read clearly as the SAME Elena from the dinner
poses. The groom's face must be deliberately obscured / shadowed —
the player should not yet recognise the detective's face.

NEGATIVE: readable text, single photo only, modern digital prints,
glossy magazine quality, blood on the photos, torn photographs,
crime scene gore, the groom's face fully visible and clearly
detailed (must be obscured), cel-shading, flat, anime, 3D,
photorealistic photograph of real prints.
```

### P5 — Fotos Cajón UV (adjuntar versión normal aprobada)

```
[ATTACH approved P5 Fotos Cajon (normal version) as reference image]

Same three wedding photographs, same arrangement, same dark felt mat
— UV reveal variant.

The lighting changes: now lit by a handheld UV blacklight torch held
off-frame. The dark felt around the photos turns deep violet. The
photographic paper fluoresces faintly white-blue. The colours of the
images go cold, the bride's white dress goes glaringly fluorescent.

KEY UV REVEAL ON THE MAIN PHOTO (the largest, centre-front):
- BEHIND Elena (the bride) in the foreground, BETWEEN her and the
  groom, a SECOND SILHOUETTE that was completely invisible under
  normal light now appears clearly visible — drawn on the photo
  with UV-reactive ink that has been added in recent months (NOT
  part of the original print)
- This second silhouette is the figure of a man — the same figure
  as the groom but rendered slightly larger, slightly closer to
  Elena, and crucially: this added silhouette is holding in his
  right hand a cylindrical object — a glass liqueur bottle, empty,
  unmistakable in shape
- The added silhouette is rendered in fluorescent violet-blue ink
  that glows brightly against the cold-toned photograph
- The face of the added figure is also obscured / shadowed (the
  player still does not see the detective's face — but they see
  the BOTTLE clearly, and they understand)

The two background photos do not show any UV reveal — only the
main photo has been UV-manipulated.

Style ID: undersuspi-noir-v1. CRITICAL: the UV-revealed silhouette
must read clearly as a HUMAN FIGURE WITH A CYLINDRICAL OBJECT IN
HAND, positioned behind Elena, distinct from the original groom.
The bottle shape is the focal evidence.

NEGATIVE: same as normal P5, plus: no clean printed text revealed,
no glowing skull, no horror imagery, no demonic shape, no blood,
the silhouette is anguished but not a monster — a man with a
bottle, that is all.
```

### P6 — Sofá (versión normal)

```
Evidence object photograph, 1:1 square aspect ratio, single object
filling most of the frame, shot from a slight low angle as if a
forensic photographer kneeling beside it, placed in situ in the
living room (NOT removed from the apartment).

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Object: a three-seater sofa in dark burgundy velvet, slightly worn,
the velvet flattened along the LEFT cushion where a body has clearly
rested over many years. The seat cushions are dented and slightly
sunken on that side. The right cushion is comparatively untouched
and still relatively plump. The backrest cushions are likewise
worn on the left side only. The wooden feet of the sofa are
slightly scuffed.

Surrounding context (suggested by edges of frame): a dark wooden
floor with an edge of a red-burgundy rug visible at the bottom, a
small side table at the right of the frame holding a half-drunk
glass of water with a faint film over it, the faint suggestion of
the dining table further back in soft focus.

Lighting: warm domestic lamp light from above-right, naturalistic
domestic light — NOT forensic floodlights. Under this normal warm
light, the sofa upholstery looks completely CLEAN. There is no
visible stain, no visible blood, no visible damage. This is
important: the human eye sees nothing wrong.

Markings: a small forensic evidence tag (neutral grey, no readable
text) placed in the lower-right corner of the frame on the floor.

Style ID: undersuspi-noir-v1. CRITICAL: this is the "CLEAN" version
under normal light — sofa looks fine. No visible stains. The
contrast with the UV version is the whole point.

NEGATIVE: readable text, visible blood, visible stains, gore,
broken sofa, modern minimalist sofa, IKEA aesthetic, cel-shading,
flat, anime, 3D, photorealistic real-photograph, leather sofa,
white sofa, brand-new appearance, body visible on the sofa.
```

### P6 — Sofá UV (adjuntar versión normal aprobada)

```
[ATTACH approved P6 Sofa (normal version) as reference image]

Same sofa, same framing, same room context — UV reveal variant.

The lighting changes: now the room is lit only by the off-frame UV
blacklight torch held by the detective. The warm domestic lamp is
off. The wooden floor and walls take on a deep violet-blue tone.
The velvet of the sofa fluoresces with a cold near-white glow on
the right (untouched) cushion.

KEY UV REVEAL: across the LEFT side of the sofa (the worn side),
massive dark stains become visible under UV — old blood that has
been deeply absorbed into the velvet fibres years ago, never fully
cleaned. The stains appear:
- One large primary stain covering most of the left seat cushion,
  with a roughly oval shape, slightly darker at the centre, where
  most of the bleeding occurred
- Spreading down the front of the cushion into the seam
- Faint splatter pattern on the left backrest cushion, smaller,
  fewer drops, the kind of secondary stain consistent with a
  movement
- Multiple "ghost rings" of slightly different shades around the
  primary stain, visible as faint outlines — the marks of THREE
  separate cleanings done with different methods on different
  occasions, each one removing some but not all of the stain.
  The ghost rings overlap like tree rings, telling the story

The right side of the sofa remains visually clean under UV — only
the left side has been used and stained.

Style ID: undersuspi-noir-v1. CRITICAL: this is HORROR THROUGH
SUGGESTION, not gore. No visible body, no fresh blood, no liquid
running — only the deep old stained patterns from years ago.
Painterly, not photorealistic.

NEGATIVE: fresh blood, liquid blood, body visible, gore, splatter
across the whole frame, dripping, modern crime-scene-photograph
aesthetic, horror movie style, glowing skull, jump-scare lighting,
clean sofa (the stains are the whole point), cel-shading, flat,
anime, 3D, real photograph of furniture.
```

### P7 — Alarma Vecino

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay
view, document placed flat on a dark wooden desk surface, soft
shadow from off-frame lamp.

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes.
NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: an automated print-out from a Spanish domestic security
company (ProSec), single thermal-printed A4 sheet with the company
logo at the top, listing the events log for a specific apartment
address for the date 9 November 2026.

Visual content (text MUST NOT be readable, but structure is
suggestive):
- Top of page: ProSec company logo (illegible, painterly, suggesting
  a stylised security badge in dark navy and red)
- Below the logo: a printed header block with three lines suggesting
  the customer name, the address (calle de Hermosilla — illegible),
  and the date (09/11/2026 — illegible but suggestive)
- Below that: a TABLE OF EVENTS in tabular format, multiple rows,
  each row containing what appears to be a time stamp on the left
  and an event description on the right. The text in each row is
  blurred and illegible EXCEPT for:
  - ONE row near the middle of the table is highlighted in pale
    yellow marker (handpainted highlight effect), with the time
    "18:42h" suggested in the left column and what appears to be
    "APERTURA PUERTA" in the right column — SUGGESTIBLE but
    painterly, not crisp print
  - The next 30+ rows are filled with the same illegible "EVENTOS
    SIN ACTIVIDAD" — empty surveillance hours
  - The LAST row before the page footer has another marker
    highlight, this time PALE BLUE, with what suggests "23:11h"
    and "ALERTA POLICIAL" — the call to the police that opens the
    case

- Bottom-right corner: an official red company stamp, partial date
  visible (illegible), with the signature of an automated system —
  small printed letters reading something machine-like

- Faint coffee ring at the bottom-left corner

- A small paperclip at the top-left corner

Period detail: contemporary 2026 Spanish security company aesthetic,
crisp thermal paper print, dot-matrix-style typography for the table
rows, slightly modern-corporate appearance.

Style ID: undersuspi-noir-v1. CRITICAL: typed text NOT clearly
readable except for the two highlighted suggestible time-stamps.

NEGATIVE: readable text, modern smartphone app screenshot, modern
digital tablet display, photorealistic, 3D, anime, gore, blood, cel-
shading, no highlighting marks (the markers are key), entirely
illegible (the structure must suggest a time log).
```

### P8 — Aire

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay
view, document placed flat on a dark wooden desk surface, soft
shadow from off-frame lamp.

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: a forensic environmental analysis report — a single
A4 page output from a portable forensic air-sampling instrument,
contemporary 2026 format.

Visual content (text MUST NOT be readable):
- Top of page: header block with stylised emblem suggesting "Análisis
  Ambiental — Equipo Forense Centro" (illegible, painterly)
- Centre-top: a small line GRAPH spanning the upper third of the
  page, showing TWO overlapping curves on a time axis — one curve
  flat near zero (the BASELINE, expected for a normal room), the
  other a steady plateau several units higher (the MEASURED VALUES
  for this apartment). The two curves are visibly different and
  the measured curve is clearly above the baseline across the
  entire graph. NO axis labels readable, only the visual contrast.
- Below the graph: a few lines of typed Spanish text, blurred but
  suggesting a paragraph of analytical commentary
- A small TABLE of approximately six rows in the lower-middle of
  the page, with what appears to be chemical compound names in
  the left column and concentration values in the right — all
  blurred and illegible except for one row that has been
  underlined in red marker by hand, the row's content suggestible
  as a compound name beginning with "P-" or "C-" (decomposition
  marker compound — painterly suggestion only)
- Bottom of the page: a handwritten note in blue ink, three or
  four words long, ending with the initials "O.V." (signature)
  — same forensic pathologist as P1
- Standard official stamp in faded red at the lower-right
- Small paperclip at the top, faint coffee ring

Period detail: contemporary 2026 Spanish clinical aesthetic.

Style ID: undersuspi-noir-v1. CRITICAL: text NOT readable; the
GRAPH is the dominant visual, and the contrast between the
baseline curve and the measured curve is the focal point.

NEGATIVE: readable text, modern smartphone screen, digital tablet
interface, photorealistic, 3D, anime, gore, blood, body parts,
medical organs, cel-shading, flat, no graph (the graph is the
whole point), cartoon.
```

### P9 — Certificado

```
Document evidence shot, 4:5 vertical aspect ratio, top-down flat-lay
view, document placed flat on a dark wooden desk surface, soft
shadow from off-frame lamp.

Art style: digital oil painting illustration, semi-realistic stylized
prop art (Disco Elysium tradition). Soft painterly brush strokes. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Document type: a Spanish official death certificate from 2023, three-
year-old document slightly yellowed at the edges, never filed with
the civil registry — kept in a drawer for three years.

Visual content (text MUST NOT be readable except where noted):
- Top of page: official Spanish state coat-of-arms in faded form
  (suggestive, illegible), with the printed words "CERTIFICADO DE
  DEFUNCIÓN" suggestible across the upper banner in a slightly
  archaic official Spanish typography
- Below the header: pre-printed form fields with handwritten
  answers in dark blue fountain pen ink. The handwriting is
  educated, careful, slightly old-fashioned — the writing of a
  doctor of the previous generation
  - One field clearly suggests the deceased's name with the
    initial letters "E S—" visible (Elena Solana, the painterly
    suggestion of the name without full readability)
  - Another field shows a date written in numerals "09/09/2023"
    (suggestible, painterly, but legible enough that the player
    catches THE DATE — this is critical)
  - Another field with handwritten cause of death, suggestible as
    "Muerte súbita ..." (the rest illegible, suggesting "por
    enfermedad cardíaca no diagnosticada" but blurred)
- Lower section: a signature line with an elaborate handwritten
  signature, looped and confident, ending with the printed letters
  "Dr. Eulogio Pacheco" suggestible in small print below the
  signature line
- Stamp: an official red doctor's stamp in the lower-right
- The paper itself shows three years of being folded and unfolded
  — a faint fold line crosses the centre horizontally, and the
  upper-right corner has a slight curl

- The page rests on the dark wooden desk surface alongside an
  open manila folder where it was just removed from. Small detail:
  the folder is empty otherwise — this is the only paper Don
  Eulogio kept

Period detail: 2023 Spanish official medical document, slight
aging from drawer storage.

Style ID: undersuspi-noir-v1. CRITICAL: the date "09/09/2023" must
be legibly suggestible (the date is the whole bombshell). The
name "E S—" partially suggestible. Everything else painterly-
blurred.

NEGATIVE: fully readable text, modern digital signature, electronic
medical record, computer screen, photorealistic, 3D, anime, gore,
blood, body, autopsy, cel-shading, flat, brand-new paper without
aging, multiple sheets, cartoon.
```

---

# FINALES — 4 cinemáticas (16 escenas, 4×4)

> **REFACTOR EN CURSO.** Las antiguas `endings.good` / `endings.bad` del
> caso 8 (paradigma binario) están migrando a **4 finales** definidos
> por una matriz 2×2:
>
> ```
>                  BUENAS MÉTRICAS              MALAS MÉTRICAS
> TE ENTREGAS    │  A. Despedida              │  B. Cobardía creepy   │
> NO TE ENTREGAS │  C. Te pillan igual        │  D. No pudiste más    │
> ```
>
> Cada final son **4 escenas** (imagen + texto bajo botón CONTINUAR),
> 16 escenas en total. Las poses ya existentes de Elena
> (`Elena_despedida`, `Elena_ausente`) **se siguen usando** en A y D
> respectivamente. **B y C requieren imágenes nuevas o reusan
> Elena_confrontacional / Elena_ausente con composiciones distintas**.
>
> Aspect ratio común: **16:9 horizontal** (cinemática, NO retrato).
> Naming sugerido: `assets/img/endings/{A1..A4, B1..B4, C1..C4, D1..D4}.png`.
> Style ID común: `undersuspi-noir-v1`.

---

## FINAL A · DESPEDIDA · entrega + buenas métricas

> **Función narrativa:** el único final donde el jugador entiende **todo
> el lore real** (madre muerta en parto, padre roto pero inocente que
> se suicidó, hijo nacido muerto, paralelismo generacional como
> alucinación). Elena pregunta en oblicuo, el detective verbaliza.
> Tono: doloroso, lúcido, soportable. Cierre con despedida real.

### A1 — La cena lúcida

> **Texto bajo la imagen:**
> *Elena:* "Empieza por tu madre. Cuéntamela como nunca me la has contado."
> *Detective:* "Murió cuando yo nací. Mi padre me dijo toda la vida que se sacrificó por mí. Yo lo creí. Crecí debiéndole una vida que no le pedí."

```
Cinematic establishing shot, 16:9 horizontal aspect ratio. Wide
two-shot of a man and a woman sitting across a vintage wooden dining
table in a Salamanca-district Madrid apartment, viewed from the side
so both faces are visible in three-quarter profile.

Background: heavy dark green wallpaper, framed black-and-white family
photos slightly out of focus on the back wall, a sideboard with a
half-drunk bottle of red wine, an unlit standing lamp in the corner.
The dining table is set for two: two filled red wine glasses, bread,
a pot of stew already going cold.

Lighting: one warm pendant lamp above the table casting a tight circle
of amber light over the wood, the rest of the room sinking into deep
brown shadow. Practical lamp source visible. No fill from outside.

Art style: digital oil painting illustration, semi-realistic stylized
character art (Disco Elysium tradition). Soft painterly brush strokes,
smooth volumetric rendered shading. NOT cel-shading, NOT flat, NOT
anime, NOT 3D, NOT photorealistic.

Subjects:
- Roberto Mora (detective), early 40s, worn dark wool coat over an
  open-collar shirt, three-day stubble, eyes bloodshot but lucid for
  the first time. Body leaning slightly forward over the table.
- Elena Solana (same face as Elena_neutral.png — CRITICAL), 38, same
  chestnut waves, same charcoal cardigan and off-white blouse as
  Elena_confrontacional, hands folded on the table, listening.

Atmosphere: intimate, heavy, the moment before something irreversible
is finally said out loud. No fear. No anger. Just weight.

Style ID: undersuspi-noir-v1.

NEGATIVE: cel-shading, flat, anime, 3D, photorealistic, cartoon, horror,
ghost effects, transparency, halos, supernatural lighting, blood,
weapons visible, multiple extra people, modern smartphone, modern
laptop, bright clinical lighting, daylight, sunny scene.
```

### A2 — El cuarto del fondo

> **Texto bajo la imagen:**
> *Elena:* "Y tu padre."
> *Detective:* "Mi padre era un hombre bueno. Una mañana se metió en el coche en el garaje cerrado. Yo tenía once años. Nunca me echó la culpa con la boca. Pero la cara era una sola pregunta."
> *Elena (más bajo):* "El cuarto del fondo."
> *Detective:* "Nuestro hijo. Nació muerto. Te dije que una madre de verdad nunca habría dejado morir a su hijo. Te dije con tu cara la misma frase que mi padre me dijo a mí sin decirla nunca. Y después llegó el 9 de septiembre."

```
Cinematic still life shot, 16:9 horizontal aspect ratio. Empty corridor
of the same Madrid apartment seen from the dining room threshold. NO
people in frame. The camera sits at eye level just inside the dining
room arch, looking down a long hallway toward a closed wooden door at
the far end.

Background: parquet floor, dark wood wainscoting waist-high, family
photographs in mismatched frames hung slightly crooked along both walls,
a faded runner rug along the centerline, a single brass coat hook
holding nothing.

Composition: strong central perspective, all lines converging on the
closed door. The door is plain dark wood with a brass handle.

Lighting: warm tungsten light from a wall sconce halfway down the
corridor, AND a thin band of pale warm light bleeding from under the
closed door at the far end as if the room behind it were lit (it is
not). Dust suspended in the air, catching the amber light.

Art style: digital oil painting illustration, semi-realistic, Disco
Elysium tradition. Soft painterly brush strokes, smooth volumetric
rendered shading. NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT
photorealistic.

Atmosphere: melancholic stillness, the weight of something behind the
closed door that has not been opened in three years.

Style ID: undersuspi-noir-v1.

NEGATIVE: people, characters, figures, faces, hands, horror, blood,
ghost, supernatural, halo, transparency, bright daylight, neon,
modern decor, sci-fi elements, fantasy elements.
```

### A3 — La mano fría

> **Texto bajo la imagen:**
> *Elena:* "Tu padre era inocente, Roberto. Llevas treinta años creyendo que hizo lo que tú hiciste para que tu crimen no fuera solo tuyo. Pero es solo tuyo."
> *Detective:* "Lo sé. Ya lo sé."
> [Le coges la mano. Está fría. La sostienes mucho tiempo.]
> *Elena:* "Llama. Diles que vas tú."

```
Extreme close-up cinematic detail shot, 16:9 horizontal aspect ratio.
Two hands meeting on the dark wooden dining table, shallow depth of
field. NO faces in frame.

Subjects (hands only):
- A man's hand (Roberto's), worn knuckles, a thin scar across the
  middle finger, slight tremor visible in the wrist, warm skin tone,
  gently cupping the woman's hand from above and around.
- A woman's hand (Elena's), pale, almost bluish-grey under the warm
  light, completely still, fingers limp, gold wedding band visible on
  the ring finger.

Background: blurred edge of one wine glass on the right, blurred
wooden table grain falling out of focus behind, almost completely
dark in the upper third.

Lighting: warm amber lamp from above-left grazing across the table
surface, picking out the grain. The contrast between his warm-toned
living hand and her cold pale hand is the entire emotional point of
the frame — make it visible without exaggerating.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes, smooth volumetric
rendered shading. NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT
photorealistic.

Atmosphere: profound quiet intimacy, the moment of acceptance.

Style ID: undersuspi-noir-v1.

NEGATIVE: faces visible, full bodies, ghost effect, transparency,
gore, blood, wounds, horror, bright lighting, daylight, neon,
multiple hands beyond two, gloves, jewelry beyond a single thin gold
wedding band, painted nails, cartoon.
```

### A4 — La copa que se evapora

> **Texto bajo la imagen:**
> *Detective al teléfono:* "Soy el inspector Roberto Mora. Vengo a entregarme. Maté a mi mujer hace tres años. Estaré esperando en la puerta del portal."
> [Cuando cuelgas, una de las dos copas se evapora bajo tu mirada. Te queda la tuya. Llaman al telefonillo.]
> **UNDER SUSPICION — Final 1 / 4 · "Despedida"**

```
Cinematic static frontal shot, 16:9 horizontal aspect ratio. Wide
shot of the dining table at first dawn light. NO people in frame.

Composition: dead-center frontal symmetry. One filled wine glass on
the near side of the table solid and sharp. A second wine glass on
the far side mid-dissolve into rising soft mist, faint enough that
the silhouette is still readable as a wine glass but transparent
enough that the wallpaper behind it is partially visible through it.
The wooden chair across the table empty and very slightly pushed back.

Background: same dining room as A1, sideboard, family photos, but
now bathed in two competing light sources crossing each other.

Lighting: cold pale blue dawn light streaming horizontally from a
window on the left, AND lingering warm tungsten lamp from above
catching the table from the right. The two lights cross over the
dissolving glass at the center of the frame. The mist where the
glass dissolves catches BOTH lights, picking up gold and blue.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes. NOT cel-shading, NOT
flat, NOT anime, NOT 3D, NOT photorealistic.

Atmosphere: melancholic but peaceful. The end of the night. Something
has been let go.

Style ID: undersuspi-noir-v1.

NEGATIVE: people, characters, hands, faces, horror, gore, blood,
weapons, supernatural halos, ghost faces in the mist, religious
iconography, bright sunshine, midday, neon, modern objects, smartphones.
```

---

## FINAL B · COBARDÍA CREEPY · entrega + malas métricas

> **Función narrativa:** terror psicológico. Elena ya no es la mujer de
> la cena — es la culpa con su cara, hostil, en bucle. El detective
> intenta matarse, no le da el valor, y marca el 091 en pánico para
> que paren las voces. La entrega como huida, no como duelo.
> Tono: claustrofóbico, asfixiante, voces solapadas.

### B1 — La voz detrás de la nuca

> **Texto bajo la imagen:**
> Elena no se sienta. Se queda de pie detrás de tu silla. Habla muy bajo. No respira entre frases.
> *Elena:* "No me has dejado dormir en tres años. No me has dejado irme. No me has dejado decirte adiós. Solo querías que viniera a cenar y a callarme la boca."

```
Cinematic psychological horror shot, 16:9 horizontal aspect ratio.
Low-angle close-up from behind a seated man's head and shoulders at
a dining table. The back of his neck and skull in sharp focus showing
visible tension.

Composition: man's head occupies the lower-left third in sharp focus.
A blurred female silhouette stands impossibly close behind his chair,
out of focus but unmistakable — only her PALE HAND visible in mid
focus resting on the wooden backrest of his chair, fingers slightly
too long, knuckles slightly too still. No face visible. The body of
the woman dissolves into the dark background.

Background: same dining room as A1 but the lighting has gone wrong:
the warm lamp now sickly yellow, the room beyond drained of color,
shadows on the back wall reaching outward in shapes that are not
quite right.

Lighting: harsh cold blue source from one side (window, off-camera,
unrealistic intensity), sickly yellow tungsten from above, the two
sources never resolving. The female hand on the chair is lit from
beneath as if by a light that should not exist.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic, but with deliberately unsettling exaggeration of
proportion and shadow. NOT cel-shading, NOT flat, NOT anime, NOT 3D,
NOT photorealistic.

Atmosphere: claustrophobic dread. The viewer should not feel safe
behind the camera.

Style ID: undersuspi-noir-v1.

NEGATIVE: jump-scare face, screaming face, blood on hand, decaying
flesh, zombie skin, white sheet ghost, halo, religious imagery,
photorealistic horror, cheap jumpscare, gore, weapons drawn,
multiple ghosts, transparent body fully visible.
```

### B2 — Las tres voces tuyas

> **Texto bajo la imagen:**
> La grabadora se enciende sola. Empieza a reproducir tu voz. Tres bucles distintos a la vez.
> *Elena (en bucle, distintos volúmenes):* "Una madre de verdad. Una madre de verdad. Una madre de verdad."
> [El cuchillo del pan está en la mesa. Lo miras mucho rato. La mano no se mueve.]

```
Macro cinematic close-up, 16:9 horizontal aspect ratio. Tabletop level,
shallow depth of field. NO people in frame.

Composition: a vintage 1990s Sanyo cassette recorder occupies the
center of the frame, two reels spinning rapidly and slightly
asymmetrically. Foreground left: a bread knife lying across a smear
of dark red wine on the wood (NOT blood — wine, the texture and
color must read as wine). Background right: a wine bottle and one
of the two filled glasses partially in frame, out of focus.

Lighting: one harsh overhead light source creating high-contrast
shadows that fall at slightly wrong angles, as if the lamp were
swinging gently. The reels catch reflective glints that pulse with
the implied audio loop. Dust visible in the air.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes but with sharper grain
on the recorder casing to convey deteriorating physical reality. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Atmosphere: oppressive, ringing-in-the-ears horror. The viewer should
hear the loop without sound.

Style ID: undersuspi-noir-v1.

NEGATIVE: blood (the red is WINE), human gore, modern Bluetooth speaker,
smartphone, laptop, digital screen, cartoon, anime, bright lighting,
people, hands.
```

### B3 — La mano que no se mueve

> **Texto bajo la imagen:**
> *Detective:* "No puedo. No puedo. No puedo."
> [Marcas el 091 con dedos que tiemblan tanto que tienes que reintentar tres veces.]
> *Detective al teléfono:* "Vengan ya. Por favor. Vengan ya. Hagan que pare. Hagan que pare. La he matado yo. Vengan a por mí. Por favor."

```
Wide cinematic shot, 16:9 horizontal aspect ratio. The detective alone
on the floor.

Composition: Roberto Mora, early 40s in dark coat and rumpled shirt,
sitting on the wooden parquet floor of the living room, his back
pressed flat against a wall, knees pulled up. Right hand turned palm
up on his lap, empty, fingers curled slightly. Left hand limp on the
floor next to him. The corded telephone receiver is on the floor
beside him off the hook, still connected. His face is half in shadow,
mouth slightly open, eyes lost.

Background: the dining table for two visible across the room in
mid-ground, the two filled glasses still on it, the cassette
recorder spinning faintly. Empty bottle on the floor near him.

Lighting: harsh moonlight from a window on the left creating cold
blue bands across the floor. ONE dim lamp on the dining table giving
sickly amber to the table area. The detective sits in the seam
between the two — half cold blue, half amber. The body itself is
the boundary.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT
photorealistic.

Atmosphere: broken, desolate, the body of a man who has tried to do
something and could not.

Style ID: undersuspi-noir-v1.

NEGATIVE: blood, wounds, knife in hand, gun in hand, suicide depiction,
graphic gore, multiple people, ghost overlays, screaming face,
photorealism, neon, modern smartphone in hand (it MUST be a 1990s
corded receiver), daylight.
```

### B4 — La voz dentro del coche patrulla

> **Texto bajo la imagen:**
> Estás esposado en el asiento trasero. La sirena suena. La voz de Elena sigue dentro. Va a seguir contigo en el calabozo. Va a seguir contigo siempre.
> **UNDER SUSPICION — Final 2 / 4 · "Las voces te trajeron"**

```
Cinematic noir exterior night shot, 16:9 horizontal aspect ratio.
Street level, slightly low angle. Wet Madrid street at night.

Composition: medium close-up on a Spanish national police patrol car
(Policía Nacional livery, dark blue with the standard chevrons),
the rear passenger window in sharp focus. Behind the rain-streaked
glass: Roberto Mora handcuffed in the back seat, forehead pressed
against the window from the inside, eyes closed. His lips slightly
parted as if still hearing a voice no one else can hear. Out-of-focus
silhouette of a uniformed officer in the front seat.

Background: blurred Salamanca-district building façades, ornate iron
balconies, wet asphalt reflecting alternating red and blue patrol
strobes. The whole street drained of warm light — only police lights
and a distant streetlamp.

Lighting: alternating red and blue strobes from atop the patrol car
washing across Roberto's face in slow rhythm. Wet reflections
multiplying the lights on the road. NO neon signs, NO commercial
lighting beyond the street.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic, with rain texture rendered as soft painterly
streaks not photographic droplets. NOT cel-shading, NOT flat, NOT
anime, NOT 3D, NOT photorealistic.

Atmosphere: defeated, oppressive, the noise inside his head louder
than the sirens.

Style ID: undersuspi-noir-v1.

NEGATIVE: American police uniforms, American police car, NYPD style,
neon Las Vegas lighting, daylight, sunny, multiple suspects in the
car, blood on his face, visible weapon, photorealistic raindrops,
cartoon, anime.
```

---

## FINAL C · TE PILLAN IGUAL · no entrega + buenas métricas

> **Función narrativa:** acusas a otro pero las pruebas son
> demoledoras. Don Octaviano (forense) lleva el informe a Beltrán
> (jefe). Te detienen al amanecer con prensa en el portal. La
> acusación falsa a un inocente añade cargos (acusación falsa +
> encubrimiento) → **prisión permanente revisable**. Tono:
> humillación, justicia inevitable, ironía.

### C1 — La cena tras cerrar mal el caso

> **Texto bajo la imagen:**
> Las cuatro de la mañana. La mesa puesta. Te sientas. La silla de enfrente no se mueve. Elena no aparece.
> *Elena (off, voz lejana sin imagen):* "El cuarto del fondo se queda cerrado, Roberto. Como dijimos. Lo demás lo decides tú solo desde ahora."

```
Symmetrical cinematic frontal shot, 16:9 horizontal aspect ratio.
Wide medium shot, dead-center composition.

Composition: Roberto Mora, early 40s in dark coat, sitting ALONE at
a dining table set for two. The wooden chair across from him is
empty. On his side: a filled red wine glass and a plate of food
untouched. On the empty side: a second wine glass turned BOWL-DOWN
on its rim. His hands rest flat on the table. He stares forward
into nothing. The frame is perfectly symmetrical around the empty
chair across from him — the lonely composition is the entire shot.

Background: same dining room as A1, but the warm lamp now feels too
small, the room too large, deep brown shadows pressing in from the
edges.

Lighting: single overhead amber lamp creating a perfect circle of
light around the table while the rest of the room sinks into deep
brown shadow. No moonlight. No competing sources. Just the lamp and
the dark.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes. NOT cel-shading, NOT
flat, NOT anime, NOT 3D, NOT photorealistic.

Atmosphere: austere, lonely, the silence of having been told goodbye
and not having done anything with it.

Style ID: undersuspi-noir-v1.

NEGATIVE: Elena visible, ghost effects, transparent woman, halos,
horror, blood, weapons, modern smartphones, multiple people,
daylight, neon, bright lighting, cartoon, anime.
```

### C2 — Beltrán en la puerta

> **Texto bajo la imagen:**
> Las siete de la mañana. Llaman. Es tu jefe. Detrás, dos uniformados. Detrás, dos cámaras de prensa que ya estaban abajo cuando llegaron.
> *Beltrán:* "Roberto. El forense me ha pasado el informe a las cinco. He estado leyéndolo dos horas. Acompáñanos."

```
Cinematic interior shot, 16:9 horizontal aspect ratio. Camera placed
inside the apartment looking outward through the open front door
toward the building stairwell.

Composition: in the doorway frame, a grey-haired man in his late
50s (Comisario Beltrán) wearing a long dark wool coat, regretful but
firm expression, lower jaw set, hands in his pockets. Behind him in
the stairwell, two uniformed Spanish national police officers
standing slightly apart with hands resting on their duty belts.
Behind the officers, the suggestion of a stairwell landing.

Background: the apartment interior on this side of the camera is
in lingering warm tungsten light, deep brown shadows. The stairwell
behind the men is lit by cold pale morning daylight from a stairwell
window — the threshold of the doorway is the boundary between two
worlds.

Lighting: warm amber from the apartment side (camera side), cold
blue dawn from the stairwell side. The figures are silhouetted at
the boundary, their faces lit by the cold side.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes. NOT cel-shading, NOT
flat, NOT anime, NOT 3D, NOT photorealistic.

Atmosphere: the weight of inevitability. Nobody raises their voice
in this image because nobody needs to.

Style ID: undersuspi-noir-v1.

NEGATIVE: SWAT team gear, raised firearms, drawn weapons, American
police uniforms, NYPD style, broken door, violence, blood, multiple
suspects, daylight outside the stairwell, cartoon, anime, civilians
visible.
```

### C3 — El portal con prensa

> **Texto bajo la imagen:**
> Te esposan en el rellano. Felipe abre su puerta, te ve, cierra. Bajas las escaleras escoltado. Abajo, Octavio espera también esposado por la acusación falsa que has firmado. Os cruzáis la mirada. Él baja la cara primero.

```
Cinematic high-angle shot, 16:9 horizontal aspect ratio. Top-down
oblique angle looking down the main staircase of a grand 19th-century
Madrid apartment building.

Composition: ornate iron banister in the foreground curving down.
Mid-frame: a handcuffed Roberto Mora descending the marble steps
flanked by two uniformed Spanish national police officers. Lower
mid-frame: at the lobby landing, an older handcuffed man in his
late 50s (Octavio Brán, the building's concierge) standing with his
head bowed, hands cuffed in front, accompanied by one officer.
Lower right edge of frame: through the open street door, a glimpse
of two press photographers' cameras with flash and one boom microphone.

Background: marble steps, ornate iron-and-brass railing scrolling
down, period wallpaper, a single hanging brass lamp.

Lighting: harsh white morning daylight flooding in from the street
door at the bottom, washing out the lobby. Warmer interior light
on the upper landings from old building sconces. The two light
worlds meet on the staircase. Roberto is descending from warmth
into harshness.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes. NOT cel-shading, NOT
flat, NOT anime, NOT 3D, NOT photorealistic.

Atmosphere: public humiliation, the irony of a public servant being
walked through the public space he was supposed to protect.

Style ID: undersuspi-noir-v1.

NEGATIVE: SWAT team, drawn weapons, gunfire, helicopter, modern
glass-and-steel staircase, generic American precinct, blood, gore,
violence, multiple uniformed officers beyond three, cartoon, anime,
night scene, neon.
```

### C4 — La cuenta de los días

> **Texto bajo la imagen:**
> *(Titular en negro, fundido lento):* "Inspector de homicidios detenido por el asesinato de su mujer hace tres años y por intentar inculpar al conserje del edificio. La Audiencia Nacional pedirá prisión permanente revisable."
> [Celda. Catre. Pared. Te ofrecen un abogado. No lo coges. Encima de la pared, sin que tú hayas pegado nada, la cuenta de los días empieza a la una.]
> **UNDER SUSPICION — Final 3 / 4 · "Te pillaron igual"**

```
Cinematic frontal static shot, 16:9 horizontal aspect ratio. Wide
shot of a stark Spanish prison cell at midday.

Composition: dead-center symmetry. Narrow metal cot bolted to the
left wall with a thin grey wool blanket. Roberto Mora, early 40s,
sitting upright on the edge of the cot, back perfectly straight, in
grey-blue Spanish prison clothes, hands folded between his knees.
He stares at the bare grey concrete wall directly across from him,
where a single scratched mark — a vertical line, "I" — has just
appeared etched into the concrete. NO other objects in the cell.
NO window. NO bars in frame (the door is behind camera).

Background: grey concrete walls on three sides, lightly textured.
A drain in the floor. A single ventilation grille high on the back
wall.

Lighting: harsh greenish-white fluorescent ceiling light creating
flat, sterile, shadowless illumination. The kind of light that does
not flatter anything. No warmth anywhere in the frame.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes but with deliberately
reduced color saturation to convey institutional sterility. NOT
cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Atmosphere: terminal stillness. The first day of a very long sentence.

Style ID: undersuspi-noir-v1.

NEGATIVE: American prison orange jumpsuit (must be Spanish prison
grey-blue), bars in frame, prison yard, multiple inmates, violence,
blood, suicide depiction, religious iconography, halos, ghost overlays,
cartoon, anime, warm lighting, daylight through window.
```

---

## FINAL D · NO PUDISTE AGUANTARLO · no entrega + malas métricas

> **Función narrativa:** la culpa y las voces ganan. No se acusa, no
> se entrega, se mata. El más simple y el más oscuro. **Reusa
> conceptualmente la `endings.bad` anterior** pero con cuatro escenas
> en lugar de una cinemática lineal.

### D1 — La cara que grita sin sonido

> **Texto bajo la imagen:**
> La cena se vuelve agresiva. Elena, sentada enfrente, abre la boca como si gritara. No sale sonido. Los ojos vacíos. Te tapas los oídos. Las voces siguen dentro.

```
Cinematic psychological horror close-up, 16:9 horizontal aspect ratio.
Asymmetric two-shot, Elena dominant in frame.

Composition: Elena (same face as Elena_neutral.png — CRITICAL) in
sharp focus on the right side of frame, looking directly at the
camera. Her mouth is slightly open as if mid-scream BUT COMPLETELY
SILENT — no extension of jaw, no exaggerated horror-mouth, just a
slack opening as if the scream is happening inside her head not
hers. Her eyes are vacant, almost glassy, emotionless. Pale skin
slightly grey. In the blurred left foreground, the back of
Roberto's head with both hands pressed flat against his ears.

Background: the same dining room as A1, but the single hanging
overhead lamp is swinging slightly, creating shifting bands of light
and shadow across Elena's face mid-frame. The wallpaper behind her
seems to ripple.

Lighting: hard top-down light from the swinging lamp, creating
unstable shadows that move across Elena's face. The shadow bars
should be the only visible motion in the otherwise still frame.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic, with deliberately destabilized geometry around Elena
to convey that the viewer is inside Roberto's collapsing perception.
NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT photorealistic.

Atmosphere: psychological horror. The viewer should feel that the
silence in the image is louder than any scream.

Style ID: undersuspi-noir-v1.

NEGATIVE: stretched mouth, demon mouth, fangs, black eyes, white
contacts, ghost effects, transparency, blood from mouth, gore,
photorealistic horror, cheap jumpscare, multiple Elenas, halo, religious
iconography, cartoon, anime, bright lighting.
```

### D2 — La cuerda

> **Texto bajo la imagen:**
> Te levantas. Llevas una silla debajo de la viga del techo del salón. Sigues sin entender que es tu mano la que ata el nudo. Crees que la mirada de reproche de Elena viene de fuera.

```
Low-angle cinematic shot, 16:9 horizontal aspect ratio. Camera placed
at floor level looking up.

Composition: Roberto Mora in silhouette, standing on a wooden dining
chair in the middle of the living room, arms raised tying a rope
to an exposed dark wooden ceiling beam directly overhead. His face
is in deep shadow, only his silhouette readable against the single
hanging lamp. The rope is plain hemp. In the blurred foreground
mid-ground: the dining table for two with two filled red wine
glasses still untouched. Slightly visible in the background to
the right: the cassette recorder on the table with its small red
recording light glowing.

Background: living room walls in deep shadow, the exposed wooden
ceiling beam dominating the upper third of frame.

Lighting: the single hanging lamp creates a hard backlight on
Roberto, leaving him as a silhouette. The dining table is lit by
the residual lamp light. NO other sources. Strong chiaroscuro.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes but with deep deep
shadows. NOT cel-shading, NOT flat, NOT anime, NOT 3D, NOT
photorealistic.

Atmosphere: fated, horrified-but-restrained. The act is being shown
in preparation, NOT in completion. No graphic horror.

Style ID: undersuspi-noir-v1.

NEGATIVE: completed hanging shown explicitly, face in close-up,
crying face, screaming face, gore, blood, multiple ropes, multiple
nooses, religious iconography, halo, ghost overlay, multiple bodies,
cartoon, anime, daylight, neon.
```

### D3 — Plano fijo

> **Texto bajo la imagen:**
> Cámara estática. La silueta cuelga de la viga. La silla volcada. La grabadora encendida en la mesa.
> *Grabadora (en bucle):* "Mañana hablamos, Elena. Mañana hablamos. Mañana hablamos…"

```
Static wide cinematic shot, 16:9 horizontal aspect ratio. Locked-off
camera, no motion implied. Restrained, NOT graphic.

Composition: full living room visible. In the upper-center of the
frame, the silhouette of a hanging man from the dark wooden ceiling
beam — IN DEEP SHADOW, suggested by shape only, NO graphic detail,
NO visible face, NO visible neck detail, just the suspended dark
shape. Beneath him, an overturned wooden chair on the parquet floor.
In the mid-ground: the dining table for two still intact, both red
wine glasses still full, untouched. On the table: the cassette
recorder with its small red light glowing. NO other figures in frame.

Background: deep shadow on all walls, the wallpaper barely readable.

Lighting: ONE single overhead lamp from above the table, illuminating
the table and the floor immediately beneath it. Everything above
the lamp falls into total shadow — including the hanging silhouette,
which is silhouetted by ambient bleed only. The viewer reads the
shape but never the detail. This is the entire ethical/visual
constraint of the frame: tell the truth without spectacle.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic, restrained painterly approach. NOT cel-shading, NOT
flat, NOT anime, NOT 3D, NOT photorealistic. NO body horror.

Atmosphere: terminal silence. The viewer should feel the room hold
its breath.

Style ID: undersuspi-noir-v1.

NEGATIVE: detailed face of the hanged man, visible eyes of the hanged
man, blood, distended limbs, gore, autopsy details, multiple bodies,
religious iconography, halos, ghost effects, cartoon, anime, bright
clinical lighting, daylight, neon, horror-genre exaggeration.
```

### D4 — Amanecer sin nadie

> **Texto bajo la imagen:**
> Las primeras horas de la mañana. La mesa sigue puesta. Las dos copas siguen llenas. Elena nunca estuvo esta noche. Elena nunca estuvo desde hace tres años.
> **UNDER SUSPICION — Final 4 / 4 · "No pudiste aguantarlo"**

```
Static wide cinematic shot, 16:9 horizontal aspect ratio. Same camera
position as D3 but at first dawn light. NO people in frame. The
ceiling beam itself is now OUT OF FRAME above — only the table area
and floor are visible.

Composition: dining table for two intact in mid-ground with both red
wine glasses still full and untouched. In the foreground, on the
parquet floor: the overturned wooden chair from D3. The cassette
recorder on the table is now silent, its red light dark.

Background: same living room as D3, walls now lit by cold pale
horizontal dawn light streaming in from a window on the left out of
frame.

Lighting: cold pale blue dawn light coming horizontally across the
parquet floor from the left, casting long thin shadows of the
overturned chair across the room. The warm overhead lamp from D3
is OFF. The light has changed completely. Morning has arrived
without an observer.

Art style: digital oil painting illustration, Disco Elysium tradition,
semi-realistic. Soft painterly brush strokes. NOT cel-shading, NOT
flat, NOT anime, NOT 3D, NOT photorealistic.

Atmosphere: abandoned aftermath. The room continues without anyone
in it. The world did not stop.

Style ID: undersuspi-noir-v1.

NEGATIVE: any body in the frame, any hanging silhouette in the frame,
shadow of a hanging body, blood, gore, police tape, forensic markers,
multiple people, ghost overlays, religious iconography, daylight
sunny, neon, cartoon, anime.
```

---

## Naming + orden de prioridad de los 16

```
assets/img/endings/A1.png  ·  La cena lúcida
assets/img/endings/A2.png  ·  El cuarto del fondo (sin personas)
assets/img/endings/A3.png  ·  La mano fría (detalle de manos)
assets/img/endings/A4.png  ·  La copa que se evapora (sin personas)

assets/img/endings/B1.png  ·  La voz detrás de la nuca
assets/img/endings/B2.png  ·  Las tres voces (grabadora close-up)
assets/img/endings/B3.png  ·  La mano que no se mueve
assets/img/endings/B4.png  ·  La voz dentro del coche patrulla

assets/img/endings/C1.png  ·  La cena tras cerrar mal el caso
assets/img/endings/C2.png  ·  Beltrán en la puerta
assets/img/endings/C3.png  ·  El portal con prensa
assets/img/endings/C4.png  ·  La cuenta de los días (celda)

assets/img/endings/D1.png  ·  La cara que grita sin sonido
assets/img/endings/D2.png  ·  La cuerda
assets/img/endings/D3.png  ·  Plano fijo (silueta colgada — RESTRAINED)
assets/img/endings/D4.png  ·  Amanecer sin nadie
```

**Orden de prioridad de producción** (si hay que cortar):
1. **A4, D4** — los dos planos finales icónicos (copa que se evapora vs amanecer sin nadie). Son los frames que el jugador "se lleva" como recuerdo del juego.
2. **A1, D3** — los dos pivotes narrativos (cena lúcida vs silueta colgada). Son los que cierran la historia emocionalmente.
3. **C3, B4** — los dos finales "mecánicos" (portal con prensa vs coche patrulla). Si faltan, el jugador necesita entender visualmente la consecuencia.
4. **B1, D1** — las dos imágenes de Elena hostil/silenciosa. Son las que más se desvían del style-bible amable de Elena, requieren más iteración.
5. **A2, A3, B2, B3, C1, C2, C4, D2** — el resto.

**Reusos posibles:**
- `Elena_despedida.png` puede inspirar la pose de Elena en A1 (sentada en lugar de de pie).
- `Elena_ausente.png` puede inspirar D4 (cuerpo en silueta — descartar para D3 que es solo silueta sin detalle).
- `Elena_confrontacional.png` puede inspirar la pose hostil de B1 (vista desde detrás solo) y el rostro vacío de D1.

---

## Orden de prioridad de generación

Si el tiempo es limitado, generar en este orden de impacto narrativo:

### Pendiente actual (después del primer batch de Elena)

0a. **Elena-Confrontacional.png (REGENERAR)** — el actual lleva el pelo recogido tras las orejas (cambio brusco respecto a las otras poses). El prompt ya está corregido para forzar pelo suelto idéntico a las demás. Sustituir el archivo.
0b. **Escenario_Comedor.png** — bg 16:9 sin personajes; bloqueador del refactor a CSS-composite. Sin esto los retratos transparentes no tendrían escenario.
0c. **Elena-Calida-Hablando.png / Elena-Preocupada-Hablando.png / Elena-Confrontacional-Hablando.png / Elena-Neutral-Hablando.png** — 4 nuevas variantes "Hablando" que el motor alternará con las idle para dar sensación de conversación. Sin estas la cena se siente rígida.

### Ya producido (no tocar)

1. **Elena_neutral.png (REGENERAR maestra)** — bloqueador absoluto. Toda la cadena de poses la adjunta como referencia, así que el actual (pelirroja en estudio negro) debe sustituirse antes que ninguna otra cosa.
2. **Elena_preocupada.png** — es el tono que aparece en MÁS cenas (casos 3, 4, 5, 7). Sin esta imagen, la mayoría del juego va con la Elena neutral.
3. **Elena_confrontacional.png** — domina las últimas tres cenas, incluida la del Caso 8.
4. **Retrato_Victima_caso8.png** — sin esta imagen el Caso 8 abre sin gancho visual.
5. **FelipeSaiz, OctavioBran (Neutral × 2)** — los dos sospechosos nuevos del Caso 8 necesitan al menos la pose Neutral para que la pantalla del juego no quede vacía.
6. **RobertoMora-Neutral.png (espejo)** — sin esto, la cuarta tarjeta del Caso 8 queda sin retrato. Es la única vez en todo el juego que se ve la cara del detective. Pensativo/Nervioso pueden venir después.
7. **Escenario_Hermosilla.png** — el salón del Caso 8 (CSS class `scene-caso8`). Reusable de `Escenario_Salon.png` como fallback mientras se produce.
8. **Pruebas Caso 8 (P1 a P9)** — orden por importancia: P2 dos copas, P3 calendario, P6 sofá, P5 fotos cajón, P1 forense, P4 grabadora, P9 certificado, P8 aire, P7 alarma.
9. **Pensativo/Nervioso de Felipe, Octavio y Roberto Mora** — segunda tanda, una vez aprobadas las Neutrales.
10. **Elena_calida.png** — refuerza tono casual de cenas 1 y 2 (las cenas tutorial).
11. **Elena_despedida.png** y **Elena_ausente.png** — finales del Caso 8. Importantes pero sólo se ven en los dos finales — si falta, fallback a Elena_neutral / pantalla negra con texto.
12. **Variantes UV (P3, P5, P6)** — al final, ya con las versiones normales aprobadas.

## Lo que NO hay que producir aún

- Las 3 poses de Don Eulogio Pacheco hijo en `Caso8/Sospechosos/` — son **copias** de las del Caso 6. No regenerar.
- El retrato de la **víctima Elena post-mortem** NO debe confundirse con las poses vivas: son archivos distintos en paths distintos. Ver "Naming al guardar" arriba.
- **Rostro del detective en los 7 primeros casos**: NO se produce. El canon de los Actos I-II ([ASSETS-VISUALES.md:49](../docs/ASSETS-VISUALES.md#L49)) sigue vigente — silueta, manos, primer plano del bloc. **Sólo el Caso 8** revela su cara, y exclusivamente a través del espejo del recibidor (las 3 poses Roberto Mora — ver sección dedicada arriba). No usar esas imágenes como retrato del detective en ninguna otra pantalla del juego.

## Wiring de código pendiente (NO toca a este doc, se hace después)

Cuando las imágenes de Elena estén producidas, hay que tocar dos archivos para que el juego las consuma:

1. [`js/data/cenasGlobal.js`](../js/data/cenasGlobal.js) — convertir `esposa.portrait` (actualmente `null`) en un objeto `{ casual, preocupada, confrontacional, despedida, ausente }` con los paths a cada pose.
2. [`js/screens/DinnerScreen.js`](../js/screens/DinnerScreen.js) — en `render()`, en lugar de leer `esposa.portrait` plano, elegir la pose según el tono activo de la pregunta meta en curso (con fallback a `Elena_neutral.png`).
3. [`js/data/caso08.js`](../js/data/caso08.js) — en los `endings.bueno` / `endings.malo`, marcar los beats de cena final con un campo nuevo `elenaPose: 'despedida' | 'ausente'` que `DinnerScreen` pueda leer.
4. [`js/data/caso08.js:281`](../js/data/caso08.js#L281) — el sospechoso `detective` tiene hoy `portraits: { neutral: '', talking: '', nervous: '' }` (placeholders vacíos). Una vez generadas las 3 poses Roberto Mora, rellenar con:
   ```js
   portraits: {
     neutral:  'assets/img/suspects/Caso8/Sospechosos/RobertoMora-Neutral.png',
     talking:  'assets/img/suspects/Caso8/Sospechosos/RobertoMora-Pensativo.png',
     nervous:  'assets/img/suspects/Caso8/Sospechosos/RobertoMora-Nervioso.png'
   }
   ```
   Esto activa la cuarta tarjeta visualmente en `ResolutionScreen` cuando el `gateUnlock` se cumple.

Estos cambios son aparte del trabajo de prompts y se hacen en otra sesión.

# Under Suspicion — Metodología de trabajo

> Documento operativo del equipo. Define cómo se reparte el trabajo entre el equipo
> humano y los LLMs, cómo se cura lo que el LLM produce, cómo se valida con
> jugadores, y cómo se generan y persisten los assets visuales.
>
> **Si los demás docs entran en conflicto con este, los demás docs ganan en su
> dominio** (`HISTORIA` en narrativa, `METAARCO` en mecánica de cena, etc.). Este
> doc define el **proceso**, no el **contenido**.

---

## 0. TL;DR

- Equipo: Aaron, David, Roman. Decisiones colectivas, voto 2/3.
- LLM produce → equipo cura por bloques grandes (caso entero) → playtest valida.
- Entorno: **VSCode + extensión Claude Code** con el repo abierto.
- Imágenes: **Gemini 2.5 Flash Image** (gratis), persistencia por character sheet
  con la imagen `neutral` como referencia.
- Telemetría **obligatoria** desde el caso 1.
- Dos niveles de playtest: barato/interno tras Acto I, pagado/serio tras Acto II
  y tras juego completo.

---

## 1. Filosofía

Tres personas, narrativa muy ambiciosa (8 casos, ~30 sembrados cruzados, 4 ejes
persistentes, dos finales), ejecución técnica acotada (vanilla JS, sin framework).

Para que el plan sea factible:

- **Lo delegable se delega**. Generación de narrativa, código boilerplate, datos
  de casos, prompts de assets, primera pasada de testing.
- **Lo no delegable lo hacemos nosotros**. Dirección, decisiones de tono,
  validación con jugadores reales, filtrado de calidad, juicio creativo,
  reclutamiento de testers, interpretación de resultados.

Regla operativa: **el LLM produce, el equipo decide**. El equipo no escribe —
selecciona, rechaza, reorienta.

---

## 2. Toma de decisiones

- **Todo colectivo**. No hay roles fijos por área. Cualquiera de los tres puede
  encargarse de cualquier tarea.
- **Voto 2/3** para aprobar/rechazar bloques de trabajo.
- **No hay último-decisor**. Si los tres no se ponen de acuerdo en algo crítico,
  se aparca y se trae más información (otra propuesta del LLM, una muestra
  visual, datos de playtest) antes de votar de nuevo.
- **Quórum**: las votaciones requieren los tres. Si uno no está disponible, se
  pospone o el ausente delega explícitamente su voto a otro.

---

## 3. Entorno técnico

| Función | Herramienta |
|---------|-------------|
| Generación de narrativa y código | **Claude Code** (extensión VSCode), Opus 4.7 |
| Generación de imágenes | **Gemini 2.5 Flash Image** (Nano Banana) vía AI Studio / chat web |
| Versionado | git, repo único |
| Persistencia de partida | `localStorage` del navegador (`undersuspi.meta`, `undersuspi.telemetry`) |
| Distribución para playtest | navegador local servido por el playtester, build estático |

El LLM tiene acceso al repo entero. Antes de escribir cualquier caso, debe leer:

- `SOUL.md` (mapa mental)
- `docs/HISTORIA-MODO-HISTORIA.md` (canon narrativo)
- `docs/METAARCO-CENAS.md` (mecánica de cena, incluyendo el giro)
- `docs/SISTEMA-DIFICULTAD.md` (palancas de interrogatorio)
- `docs/TOOLS-ARCHITECTURE.md` (herramientas)
- Los `casoNN.js` previos al que va a generar.

Esto minimiza el drift entre sesiones — el LLM no parte de memoria, parte del
estado actual del repo.

---

## 4. Loop de trabajo narrativo

### Unidad de generación: el caso entero

El LLM genera un caso completo de una vez (sospechosos + evidencias +
contradicciones + sembrados recogidos + sembrados plantados + cena específica).
El equipo cura por bloques grandes, no frase a frase.

### Pasos por caso

1. **Briefing al LLM**. El equipo abre Claude Code, le indica el caso a
   generar y le recuerda que lea los docs canónicos.
2. **Generación**. El LLM produce `js/data/casoNN.js` completo. Si añade
   preguntas/flags al banco global, edita también `cenasGlobal.js`. Si toca
   un doc canónico, lo hace en commit separado para revisión previa.
3. **Lectura de los tres**. Los tres leen el caso entero. Cada uno apunta
   notas (líneas que no le encajan, sembrados débiles, voz floja, etc.).
4. **Voto**. Aceptar entero / Rechazar entero / Aceptar con notas.
5. **Si "Aceptar con notas"**: el LLM aplica los cambios. Si los cambios son
   menores no hace falta segunda ronda de voto. Si son mayores, vuelta al paso 3.
6. **Integración**. Cuando los tres lo dan por bueno, se commitea.

### Reglas duras del LLM

- **Leer antes de escribir**. No partir de memoria.
- **No inventar canon**. Personajes recurrentes, flags y sembrados nuevos requieren
  actualizar `HISTORIA-MODO-HISTORIA.md` o `METAARCO-CENAS.md` en commit aparte
  ANTES del caso que los usa.
- **Verificar sembrados**. Cada caso lista al final qué sembrados recoge de casos
  previos y cuáles planta. Si un sembrado plantado en caso N no se recoge en
  ningún caso N+1..8, el LLM lo señala como "huérfano" y el equipo decide.
- **Respetar el contrato de docs**. `HISTORIA` manda en narrativa, `METAARCO` en
  mecánica de cena, `SISTEMA-DIFICULTAD` en interrogatorio, `TOOLS-ARCHITECTURE`
  en herramientas, este doc en proceso. Si conflicto: gana el doc del dominio.

---

## 5. Sistema de playtest

### Nivel 1 — Barato e interno

| Campo | Valor |
|-------|-------|
| Cuándo | Tras Acto I (casos 1-4 implementados) y tras cada caso del Acto II |
| Quién | Los tres + 1-2 amigos no pagados |
| Duración | ≤30 min por sesión |
| Objetivo | Detectar bugs, problemas de claridad, fricción de UI |
| **No valida** | El giro Elena, los umbrales del final bueno |
| Coste | Cero |

### Nivel 2 — Pagado y serio

| Campo | Valor |
|-------|-------|
| Cuándo | Tras Acto II completo (caso 7) y tras juego completo (caso 8) |
| Quién | 5-10 testers **vírgenes** que no han leído ningún doc ni jugado versiones previas |
| Reclutamiento | Amigos / compañeros, **pagados** |
| Duración | Hasta 2-3 horas por sesión (los 30 min son del Nivel 1) |
| Una pasada por tester | Una vez sabe el giro, no se le repite |
| Objetivo | Validar el giro Elena, calibrar umbrales del final bueno, medir si los sembrados son "ignorables en primera, obvios en relectura" |

### Pool de testers

- Lista cerrada de 5-10 personas dispuestas. Cada persona se "gasta" una sola vez.
- **No se quema en playtests baratos**. Si un amigo participa en un playtest
  barato, queda automáticamente fuera del pool serio (ya conoce mecánica básica).
- Apuntar en `docs/PLAYTESTERS.md` (privado) quién se ha usado, en qué caso, qué
  versión.

### Telemetría — obligatoria desde el caso 1

Todo el código del juego registra acciones del jugador en un buffer de eventos
en `localStorage` bajo la clave `undersuspi.telemetry`. Al final de la partida,
un botón "Exportar partida" en el menú genera un JSON descargable que el
playtester nos envía.

#### Eventos a registrar (mínimo)

```js
{ caseId, action: 'case-start', timestamp }
{ caseId, suspectId, action: 'ask',         questionId, pressureBefore, pressureAfter, timestamp }
{ caseId, suspectId, action: 'present',     evidenceId, timestamp }
{ caseId,            action: 'evidence-clicked',     evidenceId, timestamp }  // qué miró
{ caseId,            action: 'contradiction-detected', contradictionId, timestamp }
{ caseId,            action: 'tool-used',            toolId, evidenceId, timestamp }
{ caseId,            action: 'accuse',               who, how, why, correct, timestamp }
{ caseId,            action: 'dinner-choice',        phase, optionId, axisDeltas, flagsDispatched, timestamp }
{ caseId,            action: 'case-end',             durationMs, timestamp }
{ caseId,            action: 'meta-snapshot',        sinceridad, integridad, lucidez, memoria, usedLines, timestamp }
```

#### API mínima

```js
US.Telemetry.log(eventType, payload)   // añade evento al buffer
US.Telemetry.export()                   // devuelve JSON para descarga
US.Telemetry.clear()                    // resetea (al empezar partida nueva)
```

Implementación: ~30 líneas. Persistido en `localStorage`. **Sin envío a servidor**
— el playtester nos pasa el fichero por su cuenta.

#### Por qué la telemetría es crítica

Para el giro Elena en concreto, la entrevista del playtester es **datos pobres**:

- Entrevista: *"creo que sospeché de Elena hacia el caso 7"*.
- Telemetría: *"hizo clic en la foto del cajón en el caso 5 pero no usó UV;
  no marcó el número 9-8-6-14 en el caso 8; acusó a Octavio en lugar de a sí
  mismo; cerró con `lucidez=42, integridad=51, 3 flags clave`"*.

Lo segundo nos dice qué falló y qué calibrar.

---

## 6. Sistema de assets visuales

### Modelo elegido — Gemini 2.5 Flash Image (Nano Banana)

- Gratis vía AI Studio / chat web.
- Mejor opción gratuita actual para consistencia de personajes.
- Funciona en español.
- Soporta **imagen de referencia adjunta** — clave para persistencia.

### Método de persistencia — character sheet

Por cada personaje (sospechoso, víctima, recurrente):

1. **Generar pose `neutral`** primero, iterando hasta que los tres aceptemos.
2. La pose `neutral` aprobada se vuelve **referencia canónica del personaje**
   en el repo.
3. **Generar `talking` y `nervous`** pasando siempre la `neutral` como imagen
   adjunta + el JSON-prompt convertido a prompt natural en español.
4. Si las poses 2 o 3 derivan (otra cara, otro pelo, otra ropa), rehacer
   adjuntando la `neutral` y siendo más explícito en el prompt.

**Regla dura**: ninguna generación de pose 2 o 3 se hace sin adjuntar la
`neutral`. Cada personaje, en cada sesión nueva, parte de su `neutral` ya
aprobada.

Para personajes recurrentes en múltiples casos (Elena, detective, Beltrán,
Octaviano Vidal): la **misma `neutral` aprobada** se usa como referencia en
todos los casos. Si una sesión tarda meses, da igual — la imagen está en el
repo y siempre se reusa.

### Schema del JSON-prompt

Un fichero JSON por asset, junto a la imagen final, mismo basename.

```
assets/img/suspects/
  hugo-neutral.png
  hugo-neutral.json
  hugo-talking.png
  hugo-talking.json
  hugo-nervous.png
  hugo-nervous.json
```

#### Schema completo

```json
{
  "asset_id": "hugo-nervous",
  "asset_type": "suspect-portrait",
  "case_id": "caso-01",
  "character": {
    "id": "hugo",
    "name": "Hugo Delmar",
    "age": 38,
    "description": "chef del restaurante La Estrella, complexión media, pelo oscuro corto, barba de tres días, chaquetilla blanca de chef abierta sobre camiseta gris",
    "reference_image": "assets/img/suspects/hugo-neutral.png"
  },
  "pose": {
    "id": "nervous",
    "description": "encuadre frontal de medio cuerpo, mirada esquiva hacia abajo a la izquierda, mandíbula tensa, una mano cerca del cuello tirando del collarín, ceño ligeramente fruncido, sudoración apenas visible en la frente"
  },
  "style_id": "undersuspi-noir-v1",
  "framing": {
    "aspect_ratio": "3:4",
    "shot": "medio cuerpo",
    "background": "fondo neutro oscuro de despacho de interrogatorio"
  },
  "output": {
    "path": "assets/img/suspects/hugo-nervous.png",
    "format": "png"
  },
  "status": "approved",
  "model": "gemini-2.5-flash-image",
  "history": [
    { "date": "2026-04-28", "action": "generated", "by": "Roman" },
    { "date": "2026-04-28", "action": "approved", "by": "vote-3-0" }
  ]
}
```

#### Cómo se usa

1. El LLM (en Claude Code) lee el JSON y lo convierte a un prompt natural en
   español listo para pegar en Gemini.
2. La persona pega el prompt en el chat de Gemini.
3. Adjunta `reference_image` (la `neutral` aprobada) si la pose no es `neutral`.
4. Itera hasta que la salida sea aceptable a ojo.
5. Guarda el PNG en `output.path`.
6. Actualiza `status` (`draft` → `approved` tras voto) y añade entrada al
   `history`.

Estados posibles: `pending` (aún no generado), `draft` (generado pero no
aprobado), `approved` (aprobado por voto 2/3), `rejected` (rechazado, conservado
para historial).

### Style bible

Los style params viven en `assets/style-bible.json`. **Todos los JSON-prompts
referencian su `style_id` y heredan los parámetros de aquí**.

```json
{
  "style_id": "undersuspi-noir-v1",
  "version": 1,
  "base_prompt": "ilustración estilo Cluedo moderno, trazo limpio definido, paleta noir cálida con acentos rojo sangre y oro mostaza, iluminación cinematográfica de claroscuro con luz lateral cálida, época atemporal años 80-90, lente equivalente 50mm, grano sutil de papel, sin fotorrealismo, sin anime, sin 3D",
  "params": {
    "palette": ["#1a1a1a", "#3a2820", "#8B0000", "#C9A961", "#e8d8b0"],
    "lighting": "claroscuro, luz lateral cálida, sombras profundas",
    "era": "atemporal años 80-90",
    "rendering": "ilustración 2D editorial, no fotorrealista, no anime, no 3D, no cartoon infantil",
    "linework": "trazo limpio, contornos definidos, sombreado por bloques"
  },
  "negative": "anime, manga, fotorrealista, 3D, render, cartoon infantil, deforme, texto, logos, watermark, marco, firma de artista"
}
```

Si tras Acto I o II decidimos cambiar de estilo, **se incrementa la versión**
(`undersuspi-noir-v2`), se vuelven a aprobar las `neutral` de los personajes
recurrentes, y se regeneran las dependientes con la nueva referencia. Las
versiones antiguas se mantienen en git por si volvemos atrás.

### Manifest global

`assets/manifest.json` — single source of truth. Lista todos los assets que el
juego necesita, su estado, y apunta a sus JSON individuales.

```json
{
  "version": 1,
  "style_id": "undersuspi-noir-v1",
  "assets": [
    {
      "id": "hugo-neutral",
      "type": "suspect-portrait",
      "case": "caso-01",
      "prompt_file": "assets/img/suspects/hugo-neutral.json",
      "image_file": "assets/img/suspects/hugo-neutral.png",
      "status": "approved",
      "is_reference": true
    },
    {
      "id": "hugo-talking",
      "type": "suspect-portrait",
      "case": "caso-01",
      "prompt_file": "assets/img/suspects/hugo-talking.json",
      "image_file": "assets/img/suspects/hugo-talking.png",
      "status": "approved",
      "depends_on": "hugo-neutral"
    }
  ]
}
```

Regla: **un asset que no esté en el manifest no existe**. Si el juego carga una
imagen no listada, es bug.

### Tipos de asset y aspect ratios

| Tipo | Aspect ratio | Notas |
|------|--------------|-------|
| `suspect-portrait` | 3:4 | 3 moods por sospechoso (neutral / talking / nervous) |
| `victim-portrait` | 3:4 | 1 imagen, foto de carnet o de archivo |
| `recurring-character` | 3:4 | Elena, detective, Beltrán, Octaviano, Vidal — referenciados en múltiples casos |
| `evidence-physical` | 1:1 | objetos sobre fondo neutro |
| `evidence-document` | 4:5 | papeles, fotos, cartas |
| `scene-establishing` | 16:9 | localización del crimen, fondos de transición |
| `ui-icon` | 1:1 | íconos de herramientas, botones |

---

## 7. Anti-drift

Riesgos específicos de tener todo el contenido generado por LLM, y cómo los
contenemos.

| Riesgo | Mitigación |
|--------|------------|
| **Voz uniforme y reconocible-LLM** | Pasada humana de "voz" sobre los diálogos del detective y de Elena en cada caso. Nadie aprueba un caso sin haber leído los diálogos a viva voz. |
| **Sobre-sistematización** (rationalizar todo) | El equipo identifica explícitamente los huecos productivos del juego — cosas que NO se explican. Las protege en el voto. |
| **Inflado por caso** (cada caso quiere añadir 1 sospechoso más, 1 sembrado más) | El doc `HISTORIA` fija el reparto. El LLM no añade sembrados nuevos sin actualizar `HISTORIA` en commit aparte ANTES. |
| **Drift entre sesiones del LLM** | El LLM siempre lee los docs canónicos antes de escribir. Antes de generar caso N, lee casos 1..N-1. |
| **Drift visual entre assets** | Style bible obligatoria + reference image obligatoria + manifest único. |
| **El LLM cree su propio giro como "sutil"** | Solo el playtest pagado valida la sutileza. La opinión del LLM sobre si un sembrado se nota o no, **no cuenta**. |

---

## 8. Calendario y hitos

| Hito | Trigger |
|------|---------|
| Caso 2 generado y aprobado | Voto 2/3 mínimo |
| Caso 3 ídem (incluye herramienta `desk-phone`) | Voto + revisión de la nueva tool |
| Caso 4 ídem (pivote Acto I) | Voto |
| **Playtest barato Acto I** | Casos 1-4 jugables end-to-end |
| Decisión: avanzar / iterar / pivotar | Tras playtest barato |
| Casos 5-7 (Acto II, incluye `uv-light`) | Generación + curaduría iterativa |
| **Playtest pagado tras Acto II** | Casos 1-7 jugables. Pool de testers vírgenes |
| Decisión: avanzar al final / repensar | Tras playtest pagado |
| Caso 8 + dos finales | Generación + curaduría intensa |
| **Playtest pagado final** | Juego completo. Resto del pool de testers |
| Lanzamiento o iteración | Voto final |

Cada hito desbloquea el siguiente. Si un playtest revela problemas estructurales
(ej: ningún tester pilla el giro), se pausa y se replantea — no se avanza al
siguiente acto con un problema sabido.

---

## 9. Lo que sigue siendo humano (siempre)

Pase lo que pase, estas decisiones nunca las toma el LLM:

- Aceptar o rechazar un caso entero.
- Aceptar o rechazar un asset visual.
- Reclutar testers y gestionar el pool.
- Interpretar resultados de playtest (entrevista cualitativa).
- Decidir si un cambio de estilo justifica regenerar toda la galería visual.
- Decidir si un sembrado quedó "ignorable en primera, obvio en segunda" — eso
  es juicio basado en datos del playtest, no en la opinión del LLM que lo escribió.
- Decidir si seguir, pivotar o cancelar el proyecto.
- Cualquier decisión con implicación ética (representación de suicidio en final
  malo, etc.) o comercial (precio, plataforma, distribución).

---

## 10. Checklist mínima antes de empezar el caso 2

- [ ] `assets/style-bible.json` creado y aprobado por voto.
- [ ] `assets/manifest.json` creado con los assets actuales del caso 1 listados.
- [ ] JSON-prompts retroactivos para los assets del caso 1 ya generados (para
      poder regenerarlos si cambia el estilo).
- [ ] `US.Telemetry` implementada y enganchada a las acciones del juego.
- [ ] Botón "Exportar partida" añadido al menú.
- [ ] `docs/PLAYTESTERS.md` creado (puede empezar vacío).
- [ ] Este doc leído y entendido por los tres.

Hasta que la checklist esté completa, el caso 2 no se genera.

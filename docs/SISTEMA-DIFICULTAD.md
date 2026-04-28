# Under Suspicion — Sistema de Dificultad Progresiva

> Documento de diseño con ideas y mecánicas para escalar la dificultad a lo largo de los 8 casos del Modo Historia.
>
> **Alcance**: este doc cubre las **palancas internas del sistema de interrogatorio**
> (ambigüedad de pruebas, presión, contradicciones, sospechosos, etc.). Las
> **herramientas de escritorio** (luz UV, teléfono, etc.) viven en
> `TOOLS-ARCHITECTURE.md`. El **reparto narrativo** (qué caso introduce qué palanca y
> qué herramienta) vive en `HISTORIA-MODO-HISTORIA.md`. Si los tres entran en
> conflicto, **`HISTORIA-MODO-HISTORIA.md` es la fuente de verdad** para el reparto.
>
> **Numeración**: caso 1 = tutorial. Casos 2-8 = los siete casos restantes,
> agrupados en tres actos (Acto I: 2-4, Acto II: 5-7, Acto III: 8).

---

## 1. Análisis del caso actual (Caso 1 — Tutorial)

El caso "El Último Brindis" funciona como tutorial porque:

- **Pruebas directas**: La "copa de vino con rodenticida" revela directamente el método. Los registros financieros + carta manuscrita apuntan al motivo. La cámara + camarero señalan al culpable.
- **Un solo culpable obvio**: Hugo es el único que se pone nervioso, suda, evita la mirada, y sus tres contradicciones apuntan a él.
- **Contradicciones fáciles**: Basta con preguntar algo y presentar la prueba obvia para desbloquearlas.
- **Pistas falsas mínimas**: Solo hay una (la ausencia de Lucía en el hotel), y se descarta fácilmente.

Esto es **perfecto como tutorial**, ya que enseña al jugador todas las mecánicas: interrogar, presentar pruebas, detectar contradicciones, y resolver. La dificultad debe subir a partir de aquí.

---

## 2. Las 7 palancas de dificultad

### 🔧 PALANCA 1 — Ambigüedad de las pruebas

**Tutorial (actual):** "Copa de vino con trazas de rodenticida" → te dice el método directamente.

**Dificultad media:** Las pruebas son más ambiguas y podrían apuntar a varios métodos.
- Ejemplo: "El análisis toxicológico encontró niveles anómalos de potasio en sangre". Esto podría ser una sobredosis de medicación, un envenenamiento, o una condición médica previa. El jugador necesita cruzar datos.

**Dificultad alta:** Las pruebas técnicas requieren interpretación.
- Ejemplo: Un informe forense indica "petequias en conjuntivas" (asfixia), pero el sospechoso principal tiene coartada y otro sospechoso tiene acceso al lugar. Las pruebas médicas no dicen quién, solo insinúan cómo.

**Implementación técnica:**
- Campo nuevo en `evidence`: `ambiguity: 'low' | 'medium' | 'high'`
- Descripciones más técnicas en `fullDesc` con jerga que el jugador debe interpretar
- Añadir más opciones en `howOptions` que sean plausibles dadas las pruebas

---

### 🔧 PALANCA 2 — Sospechosos con pruebas cruzadas (pistas rojas)

**Tutorial (actual):** Las pruebas solo comprometen al culpable. Los inocentes tienen coartadas claras.

**Dificultad media:** Pruebas que apuntan a un inocente de forma convincente.
- Un sospechoso inocente tiene motivo real (herencia, venganza, deudas).
- Pruebas físicas lo colocan cerca de la escena.
- Pero al interrogar más a fondo, su coartada se sostiene y el verdadero culpable queda expuesto.

**Dificultad alta:** Múltiples sospechosos parecen culpables simultáneamente.
- Dos o más sospechosos tienen motivo, oportunidad, y pruebas en su contra.
- El jugador necesita encontrar LA contradicción específica que descarta a uno y confirma a otro.
- Ejemplo: Sospechoso A fue visto cerca de la escena (cámara) y tenía motivo (deudas), pero su "contradicción" resulta ser un malentendido que se aclara al presentar una prueba concreta; mientras Sospechoso B parecía inocente pero su coartada se desmonta con una prueba oculta.

**Implementación técnica:**
- Más `contradictions` con `isRedHerring: true` para inocentes
- Campo nuevo: `contradiction.clarification` — texto que explica por qué la contradicción aparente no es real
- Más preguntas por sospechoso para que el jugador tenga que buscar más

---

### 🔧 PALANCA 3 — Profundidad del motivo

**Tutorial (actual):** "Encubrir un desfalco" — la carta manuscrita literalmente lo dice.

**Dificultad media:** El motivo real está oculto detrás de un motivo aparente.
- Ejemplo: Todo apunta a que el motivo es dinero (hay una herencia), pero el verdadero motivo es una venganza personal que solo se descubre al interrogar profundamente con las preguntas correctas.

**Dificultad alta:** El motivo es emocional/psicológico y no hay prueba directa.
- El jugador debe deducirlo por la acumulación de testimonios y comportamientos.
- Las opciones de "por qué" incluyen motivos que suenan igual de razonables.
- Ejemplo: Cuatro opciones de motivo todas plausibles; solo combinando lo que dijeron los 3 sospechosos sobre la vida de la víctima se puede eliminar las falsas.

**Implementación técnica:**
- `whyOptions` con 5-6 opciones en lugar de 4, todas plausibles
- Respuestas a interrogatorios que contienen fragmentos del motivo real dispersos entre los sospechosos
- Campo nuevo en preguntas: `clueType: 'motive' | 'method' | 'opportunity' | 'red-herring'` para que el diseñador controle qué información da cada pregunta

---

### 🔧 PALANCA 4 — Presión como recurso limitado

**Tutorial (actual):** La presión sube poco a poco y hay margen suficiente para preguntar todo.

**Dificultad media:** Costes de presión más altos; el jugador no puede preguntar todo.
- `pressureCost` más elevados (15-20 en lugar de 8-12)
- El jugador debe elegir qué preguntas hacer y a quién interrogar primero
- Las preguntas clave cuestan más presión

**Dificultad alta:** Presión compartida o eventos de presión.
- Mecánica nueva: **"Presión global"** — ciertos errores del jugador aumentan la presión de TODOS los sospechosos (ej: presentar una prueba a quien no corresponde).
- El sospechoso culpable se cierra antes (límite de presión más bajo, ej: 80 en vez de 100)
- Preguntas "trampa" que queman mucha presión sin dar información útil

**Implementación técnica:**
- Campo `maxPressure` por sospechoso (en lugar del fijo 100)
- Campo `globalPressureCost` en ciertas acciones erróneas
- Método nuevo en GameEngine: `addGlobalPressure(amount)`

---

### 🔧 PALANCA 5 — Contradicciones ocultas y encadenadas

**Tutorial (actual):** Las contradicciones saltan automáticamente (pregunta + prueba = pop-up).

**Dificultad media:** Contradicciones que requieren una cadena de 2 pasos.
- Primero necesitas hacer 2 preguntas específicas a distintos sospechosos, luego presentar la prueba.
- Ejemplo: Sospechoso A dice "nunca vi a B esa noche", Sospechoso B dice "estuve con A toda la noche" → solo al tener ambos testimonios + presentar la prueba del CCTV salta la contradicción.

**Dificultad alta:** Contradicciones cruzadas entre sospechosos.
- Lo que dice Sospechoso A contradice a Sospechoso B, pero solo lo detectas si preguntaste cosas específicas a ambos.
- **Contradicciones "fantasma"**: No saltan automáticamente; el jugador debe elegir manualmente en la pantalla de resolución "qué testimonio contradice qué prueba".

**Implementación técnica:**
- Ampliar `contradiction.questionIds` para que pueda requerir preguntas de DISTINTOS sospechosos
- Campo nuevo: `contradiction.requiredFromSuspects: ['marta', 'hugo']`
- Modo avanzado: `contradiction.autoDetect: false` → no salta pop-up, el jugador debe encontrarla solo
- Nueva pantalla o sección: "Tabla de argumentación" donde el jugador conecta pistas manualmente

---

### 🔧 PALANCA 6 — Número y complejidad de sospechosos

**Tutorial (actual):** 3 sospechosos, 1 culpable, roles claros.

**Dificultad media:** 4 sospechosos. Uno tiene coartada muy sólida (fácil de descartar), dos parecen sospechosos, y uno es culpable.

**Dificultad alta:** 5 sospechosos con:
- **Cómplices**: Un sospechoso ayudó al culpable (sabe la verdad pero miente para protegerle). Detectar al cómplice da puntos extra.
- **Testigos poco fiables**: Un sospechoso miente, pero no porque sea culpable, sino por otro secreto personal (infidelidad, drogas, corrupción menor). Sus mentiras confunden.
- **Dos culpables**: En algún caso avanzado, el crimen fue cometido por dos personas trabajando juntas.

**Implementación técnica:**
- Campo nuevo en sospechoso: `role: 'guilty' | 'accomplice' | 'unreliable-witness' | 'innocent'`
- Campo `secretMotiveForLying`: explica por qué un inocente miente
- En `solution`: permitir `who: ['hugo', 'marta']` (array para varios culpables)
- Preguntas extra tipo `'confrontation'` donde enfrentas declaraciones de dos sospechosos

---

### 🔧 PALANCA 7 — Pruebas ocultas y desbloqueables

**Tutorial (actual):** Todas las pruebas están en la mesa desde el inicio.

**Dificultad media:** Algunas pruebas están bloqueadas hasta que el jugador haga algo.
- Ejemplo: La "Declaración del vecino" solo aparece si le preguntas a Sospechoso A sobre sus movimientos esa noche (la respuesta menciona al vecino, y eso desbloquea la prueba).

**Dificultad alta:** Pruebas encadenadas.
- Prueba A desbloquea Prueba B, que desbloquea Prueba C (la clave).
- El jugador puede terminar el caso sin haber encontrado pruebas cruciales.
- **Prueba "red herring" elaborada**: Una prueba falsa que fue plantada por el culpable para incriminar a otro.

**Implementación técnica:**
- Campo nuevo en `evidence`: `locked: true`, `unlockCondition: { type: 'question', id: 'marta-v2' }`
- Posibles tipos de desbloqueo: `'question'` (preguntar algo), `'evidence'` (presentar otra prueba), `'contradiction'` (detectar una contradicción)
- Método nuevo en GameEngine: `checkUnlocks()` llamado después de cada acción
- Indicador visual en el escritorio: icono de candado sobre la carta de prueba bloqueada

---

## 3. Tabla de progresión por caso

La tabla cruza dos columnas independientes:

- **Palanca interna**: mecánica del sistema de interrogatorio que escala la
  dificultad sin UI nueva (ver palancas 1-7 de la sección anterior).
- **Herramienta de escritorio**: nueva pieza de UI según `TOOLS-ARCHITECTURE.md`.

Un caso puede introducir solo una, ambas, o ninguna (caso pivote / caso final).

| Caso | Acto | Dificultad | Palanca interna nueva | Herramienta nueva | Sospechosos | Pruebas | Contrad. | Pruebas ocultas | Pistas rojas | Presión |
|------|------|-----------|------------------------|---------------------|-------------|---------|----------|------------------|--------------|---------|
| 1 (Tutorial) | — | ★☆☆☆☆ | Todas las base | — | 3 | 8 | 3+1 | 0 | 1 simple | Normal |
| 2 | I | ★★☆☆☆ | **Pistas falsas / red herrings con `clarification`** | — | 3 | 9 | 4 | 1 | 2-3 | Normal |
| 3 | I | ★★★☆☆ | Pruebas desbloqueables encadenadas | **`desk-phone`** (teléfono) | 3-4 | 10 | 4 | 2 | 2 | Medio |
| 4 | I — pivote | ★★★☆☆ | Contradicciones cruzadas entre sospechosos | — | 4 | 10 | 5 | 2 | 3 | Medio |
| 5 | II | ★★★★☆ | (a definir tras retrospectiva del Acto I) | **`uv-light`** (luz UV) | 4 | 11 | 6 | 3 | 4 | Alto |
| 6 | II | ★★★★☆ | (a definir) | — | 5 | 12 | 7 | 3 | 4 | Alto |
| 7 | II | ★★★★★ | (a definir) | — | 5 | 12 | 8 | 4 | 5 | Muy alto |
| 8 | III — final | ★★★★★ | **TODAS las palancas combinadas** | **TODAS las herramientas obligatorias en combinación** | 4-5 | 14+ | 9+ | 5+ | 6+ | Extremo |

---

## 4. Mecánicas adicionales para casos avanzados

### 4.1. Sistema de tiempo (Casos 5+)
- Un temporizador opcional que limita el tiempo de investigación.
- No es un countdown agresivo, sino que al pasar cierto tiempo, algunas pruebas "desaparecen" (la escena del crimen se limpia, un testigo se marcha).
- **Implementación**: Campo `timeLimit` en el caso, con eventos programados tipo `{ at: 300, action: 'lockEvidence', evidenceId: 'x' }`.

### 4.2. Sistema de reputación (Transversal)
- La puntuación de cada caso afecta la "reputación" del detective.
- Con buena reputación, los sospechosos cooperan más (revelan más info con menos presión).
- Con mala reputación, los sospechosos son más cerrados (más presión necesaria, menos preguntas disponibles).
- **Implementación**: Variable global `reputation` que modifica `pressureCost` con un multiplicador.

### 4.3. Pistas del entorno (Casos 3+)
- Además de las pruebas de la mesa y las preguntas, hay elementos interactivos en la escena.
- Ejemplo: Hacer clic en un detalle del retrato del sospechoso revela información (un tatuaje, una marca, un objeto en su bolsillo).
- **Implementación**: Añadir `interactiveElements` al caso, con zonas clicables en el área del retrato.

### 4.4. Confrontación directa (Casos 4+)
- Nueva pestaña "CONFRONTAR" en el panel de preguntas.
- Permite enfrentar a un sospechoso con la declaración de otro.
- Ejemplo: "Hugo dice que nunca salió de la cocina. Sin embargo, Marta asegura haberlo visto en el pasillo. ¿Qué tiene que decir?"
- Requiere haber hecho las preguntas relevantes a ambos sospechosos.
- **Implementación**: Nuevo tipo `confrontation` en las preguntas, con campo `requires: [{ suspect: 'marta', questionId: 'marta-c2' }]`.

### 4.5. Segunda ronda de interrogatorio (Casos 5+)
- Tras detectar X contradicciones, se desbloquea una "segunda ronda" con nuevas preguntas más directas.
- Las preguntas de la segunda ronda son más agresivas y revelan más, pero cuestan más presión.
- **Implementación**: Nuevo campo en sospechoso `questions.round2` que se desbloquea al cumplir una condición.

### 4.6. Pruebas que cambian según tus acciones (Casos 6+)
- Si presentas una prueba a un sospechoso, otro sospechoso cambia su respuesta a la misma prueba (porque le avisaron).
- Simula que los sospechosos se comunican entre ellos.
- **Implementación**: Campo `conditionalResponse` en `evidenceResponses` que se activa si otra prueba ya fue presentada a otro sospechoso.

### 4.7. Diario secreto del culpable (Bonus)
- Al completar un caso con rango S, se desbloquea un "diario" escrito desde la perspectiva del culpable.
- Motivación extra para rejugar y mejorar la puntuación.
- No afecta la dificultad, pero añade profundidad narrativa.

---

## 5. Resumen de campos nuevos necesarios en el motor

```javascript
// Nuevos campos en CaseData (caso)
difficulty: 1-5,
timeLimit: null | seconds,

// Nuevos campos en Evidence
locked: false,
unlockCondition: null | { type: 'question'|'evidence'|'contradiction', id: 'xxx' },
isPlanted: false,  // prueba falsa plantada por el culpable

// Nuevos campos en Suspect
maxPressure: 100,
role: 'guilty' | 'accomplice' | 'unreliable-witness' | 'innocent',
secretMotiveForLying: null | string,
questions.confrontation: [],
questions.round2: [],

// Nuevos campos en Contradiction
requiredFromSuspects: [],  // IDs de sospechosos cuyas preguntas son necesarias
autoDetect: true | false,
clarification: null | string,  // si es red herring, el texto que lo aclara

// Nuevos campos en EvidenceResponse
conditionalResponse: null | { ifPresented: 'evId', toSuspect: 'sId', newResponse: '...' },

// Nuevos campos globales (GameEngine)
reputation: 50,
globalPressure: 0
```

---

## 6. Ejemplo práctico: Cómo se vería el Caso 2 (pistas falsas)

El caso 2 es el primer caso real del modo historia (post-tutorial) y el que
introduce la palanca de **pistas falsas** sin meter herramienta nueva. Esquema:

- **3 sospechosos**: el culpable real + dos inocentes que mienten por motivos no
  relacionados con el crimen.
- **Mentira inocente A**: un sospechoso oculta una infidelidad (su coartada real es
  legítima pero comprometedora; su mentira parcial le hace parecer culpable).
- **Mentira inocente B**: otro sospechoso está cometiendo un fraude menor sin
  conexión con el homicidio (por ejemplo, sisar de la caja del trabajo); cuando se
  le presiona suficiente, la contradicción salta y abre una `clarification` que
  revela el fraude pero descarta su implicación en el crimen.
- **Mentira culpable**: el verdadero culpable miente sobre **el crimen mismo**.
  Su contradicción **no** tiene `clarification` que lo libere — solo cierra el
  caso.
- **Pista física ambigua**: una prueba en la escena que apunta inicialmente a uno
  de los inocentes (huella, colilla, hilo de ropa) y que solo en interrogatorio
  profundo se ata al culpable.
- **Eco con caso 1**: la víctima del caso 2 comparte un detalle con Diego Varela
  (mismo barrio, misma generación o misma profesión cercana). Sembrado para la
  metaarco — no se enfatiza en pantalla.

#### Implementación de las pistas falsas en datos
```js
// En las contradictions del sospechoso inocente:
{
  id: 'c-fraude-cajera',
  isRedHerring: true,
  clarification: 'La sospechosa no estaba en la escena del crimen — estaba en su
                  trabajo, falsificando un cierre de caja. Confirmado por las
                  cámaras del local. Su contradicción se aclara: mintió sobre el
                  fraude, no sobre el homicidio.'
}
```

El jugador que acuse a esta sospechosa por su contradicción se equivoca; el motor
acepta la acusación pero el resultado en pantalla (y la cena posterior) reflejan
el error.

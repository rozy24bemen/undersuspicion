# Under Suspicion — Metaarco: Las Cenas con Elena

> Documento de diseño del subsistema narrativo central del Modo Historia.
> Cada caso del modo historia termina con una cena entre el detective y su mujer
> Elena que sustituye a la pantalla de resultado tradicional. Las decisiones del
> jugador en estas cenas alimentan cuatro ejes persistentes que determinan el final
> del juego.

> **AVISO DE SPOILER**: este documento contiene el giro final del Modo Historia.
> Solo lo deben leer los miembros del equipo de desarrollo. La sección 8 ("La verdad
> sobre Elena") debe permanecer fuera de cualquier material de marketing, demo
> pública o transcripción que pueda filtrarse.

---

## 1. Premisa del subsistema

El detective tiene un pasado enterrado. Cada caso del modo historia, sin que él lo
sepa, lo acerca a ese pasado: las víctimas comparten rasgos con él, los modus
operandi le resultan familiares, los lugares le evocan algo sin saber qué.
**Elena**, su mujer, nota el patrón antes que él, y tira del hilo durante las cenas
que comparten al final de cada caso.

La cena no es relleno: es una segunda capa de juego con scoring narrativo real. Lo
que el detective elige decir o callar en esas cenas queda registrado y modifica
mecánicamente el caso final.

---

## 2. Reemplazo de ResultScreen

`DinnerScreen` sustituye por completo a la antigua `ResultScreen`. El veredicto del
caso (acertó / falló / a quién acusó / qué contradicciones detectó) se comunica
**por boca de Elena** — su tono y la línea de cierre cambian según el resultado —
en lugar de una tarjeta tradicional con rangos S/A/B/C/F.

Flujo: `GameScreen → ResolutionScreen → DinnerScreen → MenuScreen`.

---

## 3. Las dos fases de la cena

### Fase 1 — Repaso del caso
Líneas de Elena generadas a partir del resultado del caso (`_lastResult`):
acertó/falló, a quién acusó, qué contradicciones detectó. Las decisiones del jugador
en esta fase alimentan principalmente el eje `integridad`.

### Fase 2 — Preguntas personales
Preguntas meta de Elena que no tienen relación directa con el caso. Alimentan
`sinceridad`, `lucidez` y flags de memoria. El tono escala con el número de caso
(ver sección 6).

---

## 4. Los 4 ejes

Persistidos en `localStorage` bajo la clave `undersuspi.meta`. Tres son sliders
0-100, el cuarto es un conjunto de flags discretas.

| Eje | Rango | Qué mide | Pago en el caso final |
|-----|-------|----------|------------------------|
| `sinceridad` | 0–100 | Cuánto cuenta de verdad sobre el trabajo y sobre sí mismo | Alta = Elena le entrega información crítica que ningún testigo le va a dar. Baja = pistas que él nunca recibió. |
| `integridad` | 0–100 | Cómo justifica sus errores. Alta = los reconoce. Baja = los desplaza. | Puerta dura para el final bueno. Por debajo de umbral, ese final queda cerrado. |
| `lucidez` | 0–100 | Desgaste mental: bebida, sueño, irritabilidad, paranoia | Umbral bajo bloquea opciones de acusación reales en el caso final. Mecánica, no solo narrativa. |
| `memoria` | flags | Discretas, no slider. Cada flag es un recuerdo desbloqueado | Cada flag desbloquea una pista, una pregunta o una evidencia concreta del caso final que no existe sin la flag. |

Las flags actuales del banco global (`cenasGlobal.js`):

```
oculta_insomnio, bebe_de_mas, recuerda_padre, bloqueo_padre,
miente_sobre_martes, fotos_en_cajon, oculta_cajon, cajon_prohibido,
promete_contar_todo, calla_por_proteccion, rechaza_recordar,
curioso_por_suenos
```

**Además, cada caso aporta flags propias** definidas en su `casoNN.js` (en el
`repasoPool` y el `ganchoMemoria`). Por ejemplo, el caso 1 añade
`oculta_recuerdo_estrella`, `duda_estrella_12y` y `rechaza_estrella` (las tres
en torno al restaurante "La Estrella" como sembrado de aniversario hacia el
caso 8). Para casos futuros se prevén `recuerda_calle_goya` y
`reconocio_forense` (caso 4), entre otras.

**Regla anti-huérfanas**: toda flag plantada en un caso N debe ser recogida
(usada como `requiere` o como condición de desbloqueo de pista/pregunta) en
algún caso N+1..8. Si no se recoge, se replantea o se elimina. La lista
completa de flags por caso vive en cada `casoNN.js`; el reparto de recogidas
se documenta en `HISTORIA-MODO-HISTORIA.md` por caso.

---

## 5. Anti-repetición — tres capas

Para que ninguna cena se sienta repetida en los 8 casos:

### Capa 1 — Específico del caso (`casoNN.js`)
Cada archivo de caso aporta **solo lo único** del caso, en una sección `cena`:
- `apertura`: 1 línea de Elena que ancla el caso (no genérica).
- `repasoPool`: 4–5 intercambios sobre el caso. El engine elige 2.
- `ganchoMemoria`: 1 intercambio que dispara la flag clave de la metaarco para ese
  caso.

### Capa 2 — Banco global (`cenasGlobal.js`)
~25–30 preguntas meta y 6–8 cierres compartidos entre todos los casos. Cada entrada
está tagueada con `tono` (`casual`/`preocupada`/`confrontacional`), `requiere`
(condiciones de eje o flag) y `excluye` (no aparece si otra ya está usada).

El engine elige 2–3 por cena filtrando por condiciones, marcando como usadas en
`MetaStore.usedLines` para que no se repitan en cenas posteriores.

### Capa 3 — Arco de tonos por número de caso
El tono permitido escala con el número de caso, **independientemente** de los ejes
(decisión de diseño: predecible narrativamente, no errático).

---

## 6. Arco de tonos por número de caso

| Caso | Tonos permitidos |
|------|------------------|
| 1 | casual |
| 2 | casual |
| 3 | casual, preocupada |
| 4 | casual, preocupada |
| 5 | casual, preocupada |
| 6 | preocupada, confrontacional |
| 7 | preocupada, confrontacional |
| 8 | confrontacional |

La tabla concreta vive en `cenasGlobal.tonosPorCaso`.

---

## 7. Fallback si las condiciones filtran demasiado

Si tras filtrar por tono y condiciones quedan menos de 2 preguntas meta disponibles,
se acorta la fase personal a 1 pregunta esa noche. **Nunca se repite** una pregunta
ya marcada como usada — antes que repetir, la cena es más corta esa noche.

---

## 8. La verdad sobre Elena (SPOILER — caso 8)

**Elena no existe.** Es una alucinación del detective.

El detective mató a su mujer en algún momento del pasado, probablemente bajo los
efectos del alcohol, en un episodio que su mente ha enterrado. Las cenas que el
jugador ha jugado durante los 8 casos son conversaciones del detective consigo mismo:
Elena es la voz que su subconsciente ha mantenido viva para no enfrentarse a lo que
hizo.

Esto explica retroactivamente toda la mecánica:

- **Por qué Elena "sabe" cosas antes que él**: porque ES él. Su subconsciente
  reconstruye lo que se niega a recordar.
- **Por qué cada caso le suena familiar**: porque su psique procesa, caso a caso,
  fragmentos del crimen real.
- **Por qué el tono escala con el número de caso**: porque su negación se está
  agrietando.
- **Por qué `lucidez` cae con el alcohol y el insomnio**: porque la lucidez es
  literalmente su capacidad para distinguir alucinación de realidad.
- **Por qué las flags de memoria existen**: son recuerdos reprimidos volviendo a la
  superficie. Cada flag = un pedazo del crimen real desenterrado.

### 8.1 Los dos finales

#### Final bueno
**Requiere**: alta `lucidez` + alta `integridad` + suficientes flags de memoria.

Durante la última cena, Elena le habla por última vez. El detective entiende lo que
hizo: que la mujer con la que ha cenado durante todo el juego está muerta y que la
mató él. Es un momento emotivo: ella ya no le acusa, no le condena; le da permiso
para dejarla ir. Se despiden con cariño. Cuando ella desaparece, él descuelga el
teléfono y se entrega a la policía. **Tiene la conciencia limpia por primera vez en
años.**

#### Final malo
**Requiere**: cualquier otra combinación de ejes.

En la última cena Elena, en apariencia, pierde la paciencia y le mata. La cámara
sugiere que ella le ha agredido fatalmente — el jugador puede pensar que el final
es "ella era la asesina, no tú". Corte. Plano fijo: la silueta del detective
ahorcado en la sala vacía. Elena nunca estuvo ahí. **La alucinación ganó: él se ha
suicidado solo.**

### 8.2 Cómo se siembra el giro sin spoilearlo

A lo largo de los 8 casos hay que dejar indicios sutiles, leíbles solo en relectura,
que el jugador puede no notar la primera partida pero que justifican el giro:

- Elena nunca aparece en cámaras de seguridad cuando una escena las tiene de fondo.
- Algunos diálogos de Elena reusan literalmente frases que un sospechoso del caso
  acaba de decir (su subconsciente las recicla).
- Nadie más interactúa con Elena. Cuando una escena permitiría a un colega o vecino
  saludarla, la escena corta.
- El cajón con `fotos_en_cajon` muestra fotos *recientes* de Elena en la primera
  mitad del juego, pero retratos *antiguos* y polvorientos en la segunda mitad.
- El detective bebe dos copas en cada cena, pero solo se ve servir una.
- En algún caso intermedio, un sospechoso menciona "el inspector que vive solo".
  Sin énfasis. Es él.

Lista no cerrada — más sembrados se añadirán durante el diseño detallado de cada
caso. **Norma**: cada sembrado debe ser ignorable en primera partida y obvio en la
segunda.

---

## 9. Estructura técnica

### Archivos
```
js/
├── components/
│   ├── DinnerPanel.js     ← UI principal de la cena
│   ├── DinnerTable.js     ← composición visual de la mesa
│   └── MetaStore.js       ← persistencia de los 4 ejes y las flags
├── data/
│   └── cenasGlobal.js     ← banco compartido de preguntas y cierres
└── screens/
    └── DinnerScreen.js    ← orquesta las dos fases
```

### Datos por caso
Cada `casoNN.js` añade un bloque `cena` con `apertura`, `repasoPool`,
`ganchoMemoria`. El resto (preguntas personales, cierre) viene del banco global
filtrado por tono y condiciones.

### Persistencia
`MetaStore` lee/escribe en `localStorage` bajo `undersuspi.meta`. Estructura:

```js
{
  sinceridad: 50,
  integridad: 50,
  lucidez: 50,
  memoria: { recuerda_padre: true, oculta_insomnio: true, /* ... */ },
  usedLines: ['cas_dormir', 'pre_callado', /* ... */ ]
}
```

### Reset
El banco de cenas y los ejes se resetean al empezar una partida nueva. **No se
resetean entre casos** — el progreso de los 8 casos se acumula.

---

## 10. Contrato con HISTORIA-MODO-HISTORIA.md

Este documento describe **el subsistema** (cómo funcionan las cenas, los ejes y las
flags). El reparto narrativo concreto (qué flag dispara qué caso, qué arquetipo de
crimen toca cada caso, qué herramienta de escritorio se introduce cuándo) vive en
`HISTORIA-MODO-HISTORIA.md`.

Si los dos documentos entran en conflicto, **`HISTORIA-MODO-HISTORIA.md` es la
fuente de verdad para el contenido narrativo** y este doc lo es para la mecánica.

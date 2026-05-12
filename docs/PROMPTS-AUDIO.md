# Prompts — Audio del juego (música y SFX)

## Contexto

Under Suspicion es un thriller policial noir cinematográfico ambientado en Madrid,
años 80-90 estilizados. El audio debe acompañar tres contextos:

1. **Menú principal** — melancólico, establece el tono antes de entrar al juego.
2. **Pantalla de juego** (mesa + interrogatorio en split-view siempre visibles)
   — tensión sostenida, atmosférica, sin melodía marcada para que no canse en
   sesiones largas. Es UN solo loop, no dos: mesa y sospechoso conviven en pantalla.
3. **Cena con Elena** (íntimo, después de cada caso) — piano nocturno, melancolía cálida.

Sobre la música base se superponen **stingers/SFX puntuales** para momentos
narrativos (contradicción descubierta, candado abierto, UV activada). Estos
NO sustituyen la música — suenan encima.

Todo el audio debe ser **loopable sin click** (corte limpio al inicio y fin) y
mezclado a **−18 LUFS** aproximadamente para que la voz interna del jugador y
los SFX no queden ahogados.

---

## Herramientas recomendadas

| Tipo | Herramienta | Plan recomendado | Licencia comercial |
|---|---|---|---|
| **Música** | [Suno v4+](https://suno.com) | Pro ($10/mes) | ✅ Sí, en Pro |
| **Música alternativa** | [Udio](https://udio.com) | Standard ($10/mes) | ✅ Sí |
| **Loops ambient infinitos** | [Mubert](https://mubert.com) | Creator ($14/mes) | ✅ Sí |
| **SFX cortos** | [ElevenLabs Sound Effects](https://elevenlabs.io/sound-effects) | Creator ($22/mes) | ✅ Sí |
| **SFX gratis (CC0)** | [freesound.org](https://freesound.org) | Gratis | ✅ Sí (filtrar por CC0) |

**Importante sobre licencias**: si el juego es portfolio/académico, los planes
gratuitos de Suno/Udio dan licencia de uso personal — suficiente para enseñar
el trabajo. Si en algún momento se publica comercialmente, **suscribir al plan
de pago durante el mes que generas el audio final** y guardar los archivos +
captura de pantalla del plan activo como prueba de licencia.

---

## Parámetros de estilo base (audio style bible)

Copiar el bloque de contexto en cada prompt de música:

```
Género: noir jazz / dark ambient cinemático
Referencia: estilo Cliff Martinez en Drive, Trent Reznor en Mindhunter,
            David Holmes en Killing Eve
Instrumentación principal: contrabajo, piano vertical, cuerdas frotadas,
                          synths analógicos suaves (Juno-60), brushes en caja
Tempo: 60-75 BPM
Tonalidad: menor (Re menor o Sol menor preferidos)
Mezcla: −18 LUFS, sin transientes duros, headroom para SFX encima
Loop: corte limpio sin reverb residual al final (para encadenar sin click)
Duración: 90-120 segundos por loop
Negativo: percusión electrónica moderna, vocales, EDM, orquestal épico,
          synth-wave 80s tipo Stranger Things, hip-hop, glitch
```

---

# Sección 1 — Música (4 piezas)

---

### 1. Tema del menú principal

**Archivo:** `theme-menu.mp3`
**Duración:** 90-120 seg, loopable
**Cuándo suena:** pantalla de menú, selección de caso, intro del juego.

**Prompt (Suno):**
> Slow melancholic noir jazz instrumental, 65 BPM, D minor, solo upright bass
> walking softly with a sparse piano theme on top, occasional muted brass swell
> in the distance, brushes on snare very low in the mix, rain ambience texture
> very subtle in background. Cinematic, smoky, like a Madrid detective bar at
> 2am. No vocals, no drums other than soft brushes, no electronic elements. Loop
> friendly, clean ending. Reference: Cliff Martinez "Drive" main theme but more
> understated.

**Iteración si no sale bien:**
- Si suena demasiado triste/lloroso → añadir "more restrained, less emotional"
- Si tiene melodía demasiado marcada → "minimal melody, more atmospheric"
- Si entra batería completa → "no drum kit, only brushes on rim"

---

### 2. Loop de investigación (toda la pantalla de juego)

**Archivo:** `loop-investigacion.mp3`
**Duración:** 90-120 seg, loopable
**Cuándo suena:** durante toda la pantalla de juego — mesa de pruebas (izquierda)
y sala de interrogatorio (derecha) son visibles a la vez, así que **un único
loop** cubre ambas mitades. El jugador puede pasar 5-15 min aquí por caso.

Por eso el loop debe ser **atmosférico, sin melodía marcada y sin progresión
emocional**: tiene que aguantar repeticiones largas sin cansar y servir tanto
para "estoy mirando las pruebas tranquilamente" como para "estoy presionando
al sospechoso". Los stingers (#3 más abajo, candado, UV, etc.) son los que
inyectan dinamismo emocional cuando hace falta.

**Prompt (Suno):**
> Dark ambient noir cinematic underscore, 62 BPM, G minor, slow evolving analog
> synth pad (Juno-60 warmth) as the base layer, an upright bass holding a low
> drone note that pulses very softly every 4 beats, occasional muted piano single
> notes (1-2 per minute, no melody) drifting in and out, brushes on rim very
> faintly in the background. Faint vinyl crackle texture. Mood: a detective's
> office at 2am, evidence on the table, a suspect in the next room — both
> realities at once, observed quietly. Cinematic, atmospheric, patient. No vocals,
> no rhythm pattern, no chord progression, no climax. Static atmosphere that
> doesn't fatigue on loop. Loop perfectly without click. Reference: Trent Reznor
> "Mindhunter" interrogation cues + Cliff Martinez "Solaris" pads.

**Iteración si no sale bien:**
- Si suena a horror → "less horror, more contemplative noir"
- Si tiene melodía → "drone-based only, no melodic motif, no chord changes"
- Si suena demasiado plano → "add subtle bass pulse every 4 bars and a piano
  note every 30 seconds"
- Si entra batería → "no drums, optional brushes on rim only, extremely quiet"
- Si cansa en loop → "more static, no emotional arc, just texture"

---

### 3. Sting de contradicción / revelación

**Archivo:** `sting-revelacion.mp3`
**Duración:** 4-6 segundos, NO loop (one-shot)
**Cuándo suena:** cuando el jugador conecta una prueba con una contradicción
de un sospechoso (overlay de contradicción se abre).

**Prompt (Suno o ElevenLabs SFX):**
Short cinematic noir music sting, 5 seconds total. Starts with a sudden contrabass low note hit with reverb, then a brief piano descending phrase (3 notes, D-A-F), ends on a sustained string chord that fades out. Mood: "the detective just figured it out". Tense, dramatic, but elegant — not horror, not jump-scare. Cinematic noir. No vocals, no drums other than the initial bass hit. Reference: Howard Shore "Se7en" reveal moments.

**Iteración si no sale bien:**
- Si suena demasiado largo → recortar a 4 seg en post (Audacity)
- Si suena a thriller barato → "more elegant, less melodramatic"

---

### 4. Loop de cena con Elena (intimate)

**Archivo:** `loop-cena.mp3`
**Duración:** 90-120 seg, loopable
**Cuándo suena:** al final de cada caso, durante la conversación cena-Elena.
Es el único momento "cálido" del juego — la música debe contrastar con la
investigación.

**Prompt (Suno):**
> Slow intimate piano-led noir nocturne, 60 BPM, F minor, solo upright piano playing a simple recurring 4-note motif very softly, occasional muted cello note holding underneath, faint clinking-glass-and-distant-rain ambience.
Mood: a couple having dinner at home late at night, candle on the table, something unspoken between them, the city muffled outside. Tender, melancholic, but warm. NOT sad — restrained. Cinematic. No vocals, no other instruments, no drums. Loop-friendly. Reference: Nils Frahm "Says" but slower and more understated.

**Iteración si no sale bien:**
- Si suena demasiado triste → "warmer, less mournful, more comfortable"
- Si tiene demasiados instrumentos → "solo piano with optional cello drone only"
- Si entra batería → "no drums at all"

---

# Sección 2 — Efectos de sonido (12 SFX)

Todos los SFX son **one-shot** (no loop), formato **OGG** preferiblemente (mejor
para web), 44.1 kHz, mono o estéreo según se indica. Duración total típica:
0.1-2 segundos.

---

### 5. Clic en tarjeta de prueba

**Archivo:** `sfx-card-click.ogg`
**Duración:** 0.15 seg, mono
**Cuándo:** el jugador hace clic en una desk-card para abrir el modal.

**Prompt (ElevenLabs Sound Effects):**
> A short crisp click sound, like a single playing card being tapped on a wooden table. Dry, no reverb, no music, no echo. 150 milliseconds. Subtle, not loud.

**Alternativa freesound:** buscar `card click wooden` filtrando CC0.

---

### 6. Arrastrar tarjeta sobre la mesa

**Archivo:** `sfx-card-drag.ogg`
**Duración:** 0.4 seg, mono, **loopable mientras se arrastra**
**Cuándo:** mientras el jugador arrastra una desk-card con el ratón.

**Prompt (ElevenLabs):**
> A continuous very soft paper-on-felt sliding sound, like a card moving across a poker table. Subtle texture, no impact, no clicks. 400 milliseconds, can loop seamlessly. Very quiet, ambient.

---

### 7. Apertura de modal de evidencia

**Archivo:** `sfx-modal-open.ogg`
**Duración:** 0.6 seg, estéreo
**Cuándo:** el modal con la foto grande de la prueba aparece.

**Prompt (ElevenLabs):**
> A soft cinematic swell — a brief whoosh of air with a low piano-string resonance underneath. Like a slow reveal. 600 milliseconds. Atmospheric, not dramatic. Ends with the resonance fading naturally.

---

### 8. Contradicción descubierta (impact)

**Archivo:** `sfx-contradiction-hit.ogg`
**Duración:** 1.2 seg, estéreo
**Cuándo:** el overlay rojo de contradicción aparece en pantalla. Es el momento
"AHA" del juego, debe sonar a impacto controlado.

**Prompt (ElevenLabs):**
> A short dramatic hit: a single deep contrabass pluck (low D note) followed immediately by a soft string tremolo crescendo lasting 1 second, then fading.
Cinematic noir reveal. 1.2 seconds total. Not a horror stinger, not a jumpscare, just a controlled "the truth is out" hit. Reference: NCIS scene transition sound but more elegant.

**Nota**: si el sting #4 de la sección de música funciona bien, este SFX podría
ser una versión más corta y desnuda del mismo. Decisión post-generación.

---

### 9. Cerradura desbloqueada (Caso 5)

**Archivo:** `sfx-lock-open.ogg`
**Duración:** 1.5 seg, mono
**Cuándo:** el jugador introduce la combinación `8614` correcta en el cajón.

**Prompt (ElevenLabs):**
> A vintage padlock unlocking: three quick metallic tumbler clicks followed by
> a heavy clunk as the lock opens, then a brief drawer creaking open faintly.
> 1.5 seconds total. Mechanical, satisfying, no music. Old-fashioned feel.

---

### 10. Linterna UV encendida (Caso 5+)

**Archivo:** `sfx-uv-on.ogg`
**Duración:** 0.8 seg + loop ambient 2 seg
**Cuándo:** el jugador activa la herramienta de luz UV. El primer one-shot es
el "encender"; opcionalmente puede haber un loop muy sutil mientras está activa.

**Prompt (ElevenLabs, dos archivos):**
> 1) `sfx-uv-on.ogg`: A soft electrical fluorescent buzz starting up — a brief rising electrical hum lasting 800 milliseconds, ends on a steady tone.
> 2) `sfx-uv-loop.ogg`: A very faint continuous fluorescent bulb hum, like a mid-1980s lamp in a dim room. 2 seconds, loopable seamlessly. Very low volume.

---

### 11. Pregunta hecha al sospechoso

**Archivo:** `sfx-question-typed.ogg`
**Duración:** 0.5 seg, mono
**Cuándo:** el jugador hace clic en una pregunta del panel de interrogatorio.

**Prompt (ElevenLabs):**
> Five quick typewriter key strikes on an old mechanical typewriter, no carriage
> return, just the staccato of the keys. 500 milliseconds. Dry, no reverb.
> Mid-century feel.

---

### 12. Cambio de pantalla (transición)

**Archivo:** `sfx-screen-transition.ogg`
**Duración:** 0.7 seg, estéreo
**Cuándo:** transiciones entre pantallas (menú → intro → juego → resolución).

**Prompt (ElevenLabs):**
> A subtle cinematic swoosh — a low filtered noise sweep panning slightly,
> ending with a soft thud. 700 milliseconds. Smooth, not aggressive. Like a
> film cut between scenes.

---

### 13. Hover de botón

**Archivo:** `sfx-button-hover.ogg`
**Duración:** 0.08 seg, mono
**Cuándo:** ratón sobre un botón importante (acusar, abrir expediente).

**Prompt (ElevenLabs):**
> A very short, very subtle tick — like a tiny paper rustle. 80 milliseconds.
> Almost inaudible, just a presence cue. No music, no melody.

---

### 14. Clic de botón

**Archivo:** `sfx-button-click.ogg`
**Duración:** 0.12 seg, mono
**Cuándo:** clic en cualquier botón.

**Prompt (ElevenLabs):**
> A crisp wooden tap, like a typewriter return key being pressed. 120 milliseconds.
> Dry, satisfying, no echo.

---

### 15. Apertura de libreta del detective

**Archivo:** `sfx-notebook-open.ogg`
**Duración:** 0.6 seg, mono
**Cuándo:** el panel lateral de la libreta se abre.

**Prompt (ElevenLabs):**
> A leather notebook being opened: a quick muffled flap with a soft creak.
> 600 milliseconds. Vintage, tactile, no music.

---

### 16. Cierre de caso (caso resuelto)

**Archivo:** `sfx-case-closed.ogg`
**Duración:** 2 seg, estéreo
**Cuándo:** una sola vez, cuando el caso se resuelve y se pasa a la cena con
Elena. Es el "puente" sonoro entre investigación y cena.

**Prompt (Suno o ElevenLabs):**
> A short closing music stinger: a sustained low contrabass note with a single
> piano note descending over it, ending in silence with a slight reverb tail.
> 2 seconds total. Mood: a chapter closing, dignified, slightly melancholic.
> No drums, no orchestral hit. Reference: end of a chapter in Mindhunter.

---

# Convenciones de archivo

| Aspecto | Convención |
|---|---|
| **Carpeta destino** | `assets/audio/` (crear si no existe) |
| **Formato música** | `.mp3` a 192 kbps (compromiso peso/calidad para web) |
| **Formato SFX** | `.ogg` Vorbis a 128 kbps (mejor compresión web, soportado por todos los navegadores modernos) |
| **Naming** | `theme-*.mp3` para temas largos, `loop-*.mp3` para loops, `sting-*.mp3` para stings, `sfx-*.ogg` para efectos |
| **Sample rate** | 44.1 kHz |
| **Mezcla** | −18 LUFS música, −12 LUFS SFX |
| **Loop edit** | si la IA no genera loops perfectos, recortar en [Audacity](https://www.audacityteam.org) (gratis) con fade in/out de 50ms y verificar que no hay click al unir final + inicio |

---

# Estrategia de iteración

1. **Empezar por los 3 loops principales** (menú, investigación, cena) — son los
   que más tiempo van a sonar. Si estos tres funcionan, el juego ya tiene
   atmósfera completa.
2. **Generar 3-4 variaciones de cada prompt** en la IA. Quedarse con la mejor.
3. **No buscar perfección** en primera iteración — si suena 70% bien, integrar
   en el juego, probar in-context (los SFX y la música se modifican entre sí),
   ajustar después.
4. **Los SFX cortos pueden esperar** — el juego sigue jugable sin ellos. Música
   primero, SFX en una segunda pasada.
5. **freesound.org** es viable para todos los SFX si no quieres pagar ElevenLabs.
   Buscar con tag `cc0` y validar la licencia en cada descarga.

---

# Integración técnica (qué hará Claude cuando recibas los archivos)

Cuando tengas al menos `theme-menu.mp3` + `loop-investigacion.mp3` + `loop-cena.mp3`,
crear:

- **`js/components/AudioManager.js`** — clase única con `playLoop(name)`, `stopLoop()`,
  `playSFX(name)`, `setMusicVolume(v)`, `setSfxVolume(v)`, `setMuted(bool)`. Maneja
  crossfades de 1.5 seg entre loops y precarga los archivos al iniciar.
- **`css/components/audio-controls.css`** — botón mute (icono altavoz) + slider
  de volumen oculto en hover, en la esquina superior derecha del juego.
- **localStorage** para persistir volumen y estado mute entre sesiones.
- **Hooks** en eventos existentes ya emitidos por el GameEngine y screens:
  `menu-shown` → theme-menu, `caseLoaded` → loop-investigacion (durante toda
  la pantalla de juego), `contradiction-revealed` → sting + sfx,
  `lock-opened` → sfx-lock-open, `case-resolved` → sfx-case-closed → loop-cena, etc.

Esto son ~150-200 líneas de código limpio, sin dependencias externas. HTML5 Audio
API nativo.

---

# Checklist de entrega (cuando tengas los audios)

Para que la integración sea sencilla, al entregarme los archivos pásame:

- [ ] Los archivos en `assets/audio/` con los nombres exactos del doc
- [ ] Confirmación de qué plan de IA generó cada uno (para la licencia)
- [ ] Si reemplazas algún nombre o saltas algún SFX, una nota breve
- [ ] Idealmente, ya recortados a la duración objetivo (si no, los recorto yo)

Con eso enchufo el AudioManager y queda integrado.

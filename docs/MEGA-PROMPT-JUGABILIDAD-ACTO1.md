# MEGA-PROMPT — Implementación jugabilidad Acto I (Casos 2, 3, 4)

> Documento de uso único: pégalo entero en un nuevo chat de Claude Code para que
> implemente la jugabilidad de los casos 2, 3 y 4. Está pensado para que el
> agente del nuevo chat **no necesite explorar el repo desde cero** — toda la
> arquitectura clave está aquí inline.

---

## CONTEXTO DEL PROYECTO

**Under Suspicion** es un juego web (HTML/CSS/JS vanilla, sin build) de detective
noir-narrativo. El jugador investiga 8 casos. Cada caso tiene 3-5 sospechosos,
8-14 pruebas, contradicciones detectables y una resolución (quién/cómo/por qué).

**Stack**: HTML + CSS + JS vanilla (sin npm). Se sirve como sitio estático. No
hay bundler. Todo se carga vía `<script>` en `index.html` en orden.

**Estado actual**:
- Caso 1 ("El Último Brindis") está completamente jugable: tutorial guiado,
  3 sospechosos, 8 pruebas, 4 contradicciones, cena meta-narrativa con Elena al
  final. Es el **template canónico** que hay que replicar.
- Casos 2, 3, 4: **toda la narrativa está diseñada en docs**, **todos los
  assets visuales están producidos en disco** (retratos sin fondo + escenarios
  + pruebas), pero **la jugabilidad no está implementada**: no hay
  `caso02.js` / `caso03.js` / `caso04.js`, no hay flujo de selección de caso
  en el menú, no hay clases CSS para los nuevos escenarios.

---

## ARQUITECTURA — LO MÍNIMO QUE NECESITAS SABER

### Carga de scripts (orden importa)

`index.html` carga en este orden:

1. **CSS** — base, componentes (modal, contradiction, notebook, tutorial),
   pantallas (menu, intro, game, resolution, dinner), responsive.
2. **Datos** — `js/data/caso01.js`, `js/data/cenasGlobal.js`. Cada archivo de
   datos solo registra en `US.CASES['caso-XX'] = {...}` (caso) o
   `US.CENAS_GLOBAL = {...}` (cena meta). Inmutables en runtime.
3. **Telemetry** (`js/components/Telemetry.js`).
4. **Engine** (`js/GameEngine.js`).
5. **Screens** (Menu / Intro / Game / Resolution / Dinner).
6. **Components** (Desk, Modal, Notebook, Question, MetaStore, Dinner*,
   Tutorial).
7. **`js/UIController.js`** — coordinador de UI.
8. **`js/app.js`** — bootstrap.

Para añadir un caso nuevo basta con añadir su archivo `caso0N.js` antes de
`Telemetry` y todo lo demás funciona — el motor es genérico.

### Forma de los datos de un caso (`US.CASES['caso-XX']`)

`js/data/caso01.js` es la referencia. Campos:

```js
{
  id: 'caso-XX',
  title: '...',
  subtitle: 'Caso Nº ...',
  intro: 'Texto de briefing que aparece en IntroScreen.',

  victim: {
    name, age, occupation,
    portrait: 'assets/img/suspects/CasoN/Retrato_Victima_casoN.png'
  },

  scene: { location, date, timeOfDeath },

  suspects: [
    {
      id: 'kebab-id',           // único
      name, age, role, description,
      isGuilty: bool,
      portraits: {
        neutral: 'assets/img/suspects/CasoN/Sospechosos/X-Neutral.png',
        talking: 'assets/img/suspects/CasoN/Sospechosos/X-Pensativo.png',
        nervous: 'assets/img/suspects/CasoN/Sospechosos/X-Nervioso.png'
      },
      questions: {
        vinculo:  [ { id, text, response, pressureCost }, ... ],   // 3 ítems
        coartada: [ { id, text, response, pressureCost }, ... ]    // 3 ítems
      },
      evidenceResponses: {
        '<evidenceId>': { response, pressureCost }, ...   // una entrada por cada prueba del caso
      }
    },
    ...
  ],

  evidence: [
    {
      id: 'kebab-id',
      title, type, icon,
      imagePath: 'assets/img/suspects/CasoN/Pruebas/PX — Nombre.png',
      shortDesc, fullDesc,
      metadata: { fecha, fuente, ref }
    },
    ...
  ],

  contradictions: [
    {
      id, suspectId,
      questionIds: [...],     // disparan al haber preguntado al menos UNA
      evidenceId,             // y haber presentado esta prueba al sospechoso
      statement, proof,
      suspicionBonus: number,
      isRedHerring?: bool,    // opcional — pista falsa
      clarification?: string  // opcional — texto que aclara la mentira inocente
    },
    ...
  ],

  solution: { who: 'suspectId', how: 'optionId', why: 'optionId' },
  howOptions: [ { id, text }, ... ],
  whyOptions: [ { id, text }, ... ],
  correctExplanation: '...',
  wrongExplanation:   '...',

  cena: {
    apertura: '...',
    repasoPool: [ { id, linea: { default, acusoIncorrecto? },
                    respuestas: [ { id, texto, efecto, replica }, ... ] }, ... ],
    ganchoMemoria: { id, linea, respuestas: [...] }
  }
}
```

### Cómo lo consume el motor

`js/GameEngine.js`:
- `loadCase(caseId)` lee `US.CASES[caseId]` y resetea estado.
- `askQuestion(qId)`, `presentEvidence(evId)` actualizan presión / sospecha
  por sospechoso, registran nota en libreta, y disparan
  `_checkContradictions()` que cruza `questionIds` con `presentedEvidence`.
- `resolveCase(who, how, why)` puntúa y devuelve rating S/A/B/C/F.

`js/UIController.js` + `js/screens/*` + `js/components/*` se encargan del DOM.
**No hay nada hardcodeado al caso 1 en el motor ni en la UI** salvo:

1. **`js/screens/MenuScreen.js`**: el botón "MODO HISTORIA" hace
   `this.engine.loadCase('caso-01')` directamente. Habrá que evolucionar esto
   a un selector / flujo lineal de progresión.
2. **`js/components/TutorialOverlay.js`**: el tutorial guiado está hardcodeado
   al caso 1 (busca al sospechoso "hugo", la prueba "camara", etc.). **NO
   tocar para casos 2-4** — el tutorial solo se dispara la primera vez y se
   marca en localStorage, así que en el caso 1 sigue funcionando y en los
   demás no se dispara.
3. **CSS** (`css/screens/game.css`): `.scene-interrogatorio2` define el
   `background-image` del escenario. Está hardcodeado en
   `UIController._renderRoom()` con `scene.classList.add('scene-interrogatorio2')`.
   **Habrá que evolucionar esto** para que cada caso pinte su propio escenario.

---

## ASSETS DISPONIBLES EN DISCO (no hace falta generar nada)

Estructura ya producida (verificable con `ls assets/img/suspects/CasoN/`):

### Caso 2 — "Sin sangre" (Lavapiés, Madrid)
- Víctima: `assets/img/suspects/Caso2/Retrato_Victima_caso2.png`
- Escenario: `assets/img/suspects/Caso2/Escenario/Escenario_Caso2.png`
- Sospechosos (3 personajes × 3 poses, todos sin fondo):
  - `Caso2/Sospechosos/AdelinaRoca-Neutral.png` · `-Pensativa.png` · `-Nerviosa.png`
  - `Caso2/Sospechosos/IvánCienfuegos-Neutral.png` · `-Pensativo.png` · `-Nervioso.png`
  - `Caso2/Sospechosos/LourdesCienfuegos-Neutral.png` · `-Pensativa.png` · `-Nerviosa.png`
- Pruebas (8 imágenes en `Caso2/Pruebas/P1 — ... .png` ... `P8 — ...`).

### Caso 3 — "El número equivocado" (Chueca, Madrid)
- Víctima: `Caso3/Retrato_Victima_caso3.png`
- Escenarios (2): `Caso3/Escenario/Escenario-Despacho TecBaria.png` y
  `Caso3/Escenario/Escenario-Portal calle Chueca.png`.
- Sospechosos (4 personajes × 3 poses):
  - BernabéFaz, EstebanVidal, JorgeSallén (con sufijo `NerviosoExplosivo` en
    nervous), OlallaBermejo. Todos sin fondo.
- Pruebas (9 imágenes `P1` ... `P9`).

### Caso 4 — "La piedra rota" (Talavera de Vélez, ficticio)
- Víctima: `Caso4/Retrato_Victima_caso4.png`
- Escenario: `Caso4/Escenario/Escenario-Caserón Talavera.png`
- Caja fuerte: `Caso4/CajaFuerte-Caso4-5.png` (queda como hilo abierto, se
  abrirá en caso 5; en caso 4 puede integrarse como prueba bloqueada).
- Sospechosos (4): DonEulogioPacheco, JoaquínVela, LucíaSolera, MireiaSolana.
- Pruebas (8).

> ⚠️ Los nombres de archivo contienen **tildes y espacios**. Funcionan en
> navegadores modernos pero hay que codificarlos correctamente en el JS
> (los strings se sirven como atributos `src` y el navegador hace el escape;
> con `_esc()` del UIController es suficiente). **Verificar carga en Chrome
> antes de dar por bueno cada caso.**

> ⚠️ Sufijo de poses: el manifest del caso 1 mapea
> `talking → -Pensativa/o.png` y `nervous → -Nerviosa/o.png`. Mantener ese
> mapeo para casos 2-4. Si el género del personaje cambia el sufijo, la ruta
> también — confirmar siempre con `ls`.

---

## NARRATIVA DETALLADA DE LOS 3 CASOS

**Fuente única de verdad**: `docs/HISTORIA-MODO-HISTORIA.md` líneas 216-587.

Lectura obligatoria para entender:

- **Caso 2** (líneas 216-333): culpable Adelina Roca; Lourdes/Iván son red
  herrings con `clarification`. Mecánica: pistas falsas. Sin herramienta nueva.
- **Caso 3** (líneas 335-456): culpable Jorge "Jordi" Sallén; Esteban Vidal y
  Bernabé Faz son red herrings; Olalla inocente sin mentira. Mecánica nueva
  pensada: número de teléfono fragmentado (herramienta `desk-phone` definida
  en `docs/TOOLS-ARCHITECTURE.md`). **Si el agente lo decide, puede
  posponer la herramienta `desk-phone` a una segunda iteración** y resolver
  el caso 3 con la mecánica base (pruebas + contradicciones); la grabación
  del 653-422-9847 puede modelarse temporalmente como una prueba más
  (`evidence` con `imagePath: '...phone-recording.png'` o un placeholder).
  **Discutirlo con el usuario antes de implementar — no asumir**.
- **Caso 4** (líneas 459-587): culpable Don Eulogio Pacheco; Mireia Solana es
  red herring (sisaba); Joaquín Vela y Lucía Solera tienen coartadas
  verificables (no mienten). Mecánica nueva pensada: contradicciones cruzadas
  entre sospechosos (campo `requiredFromSuspects` en SISTEMA-DIFICULTAD.md).
  La caja fuerte se queda como hilo abierto al caso 5 — **no se abre en este
  caso**.

Para la **cena posterior** (`cena`) de cada caso, leer también
`docs/METAARCO-CENAS.md` (define los 4 ejes — sinceridad, integridad, lucidez,
memoria — y el arco de tonos por caso) y la sección "Tono cena" de cada caso
en HISTORIA-MODO-HISTORIA.md.

---

## TAREA — QUÉ TIENES QUE HACER

### Objetivo

Implementar la jugabilidad completa de los **3 casos del Acto I** (2, 3, 4)
para que el usuario pueda jugarlos de principio a fin: intro → interrogatorio
+ pruebas + contradicciones → resolución → cena con Elena.

### Fases sugeridas (DISCUTIR PLAN CON EL USUARIO ANTES DE CODIFICAR NADA)

**Fase 0 — Auditoría rápida** (≤15 min)
1. `ls` recursivo de `assets/img/suspects/Caso{2,3,4}/` para validar nombres
   exactos de archivo. Apuntar discrepancias (espacios, tildes, género).
2. Leer `js/data/caso01.js` íntegro para tener el shape memorizado.
3. Leer las secciones de Caso 2/3/4 en `docs/HISTORIA-MODO-HISTORIA.md`.
4. Releer `docs/SISTEMA-DIFICULTAD.md` § 6 (ejemplo de caso 2 con red
   herrings).

**Fase 1 — Caso 2** (más sencillo, sin herramienta nueva)
1. Crear `js/data/caso02.js` siguiendo el shape exacto de caso01:
   - 3 sospechosos × (3 vinculo + 3 coartada) = 18 preguntas con `response`
     escrito **en voz del personaje**, manteniendo el tono noir del caso 1.
   - 8 pruebas con `metadata`, `shortDesc`, `fullDesc`.
   - 24 `evidenceResponses` (3 sospechosos × 8 pruebas).
   - 4 contradicciones: 1 al culpable (Adelina, sin clarification) + 1 cada
     una a Lourdes e Iván (con `isRedHerring: true` y `clarification`).
   - `solution`, `howOptions`, `whyOptions`, `correctExplanation`,
     `wrongExplanation`.
   - `cena.apertura`, `cena.repasoPool` (4-5 entradas), `cena.ganchoMemoria`.
2. Añadir `<script src="js/data/caso02.js"></script>` en `index.html` antes
   de Telemetry.
3. Añadir clase CSS `.scene-caso2` en `css/screens/game.css` con
   `background-image: url('../../assets/img/suspects/Caso2/Escenario/Escenario_Caso2.png')`
   (cuidado con el escape de espacios — funciona sin entrecomillar el path
   en CSS pero verificar).
4. Refactorizar `UIController._renderRoom()`: reemplazar
   `scene.classList.add('scene-interrogatorio2')` por una lectura del
   caso activo (`this.engine.getCase().scene.cssClass` o equivalente). Añadir
   campo `scene.cssClass` a los datos del caso (caso01 → `'scene-interrogatorio2'`,
   caso02 → `'scene-caso2'`, etc.). Quitar la clase del caso anterior antes
   de añadir la nueva para que no se acumulen.
5. **Probar en navegador**: arrancar servidor (`python -m http.server 8000`
   o equivalente), forzar carga del caso 2 (puede modificarse temporalmente
   `MenuScreen` para `loadCase('caso-02')`), verificar:
   - retratos cargan en las 3 poses
   - escenario de fondo se ve
   - las 8 pruebas se renderizan en la mesa
   - las contradicciones disparan correctamente
   - red herrings con `clarification` se muestran de forma distinta a la
     contradicción real (ver punto 6).
6. **`clarification` no existe aún en `ModalManager.showContradiction()`.**
   Si la mecánica de pistas falsas requiere mostrar al jugador el texto de
   `clarification` (cuando es red herring), añadirlo al modal sin romper el
   flujo del caso 1. Sugerencia: si `c.clarification` existe, mostrar un
   bloque adicional "Pero esto no es lo que parece..." con el texto.
7. Telemetría: el motor ya loguea `contradiction-detected` con
   `isRedHerring`. No tocar.

**Fase 2 — Caso 3**
1. Repetir el patrón con 4 sospechosos. Decidir con el usuario si
   `desk-phone` se implementa ya o si la grabación se modela como evidencia
   estática para esta primera iteración.
2. Caso 3 tiene **2 escenarios** (Despacho TecBaria + Portal Chueca). Hay
   varias opciones — discutir con el usuario:
   - (a) Una sola clase CSS que use uno de ellos como background principal
     (más simple).
   - (b) Cambiar el escenario según el sospechoso activo (ej: Esteban Vidal
     en TecBaria, Jorge Sallén en TecBaria, Bernabé Faz en Portal Chueca).
     Requiere campo `suspect.cssClass` o lookup en UIController.
3. CSS class nueva: `.scene-caso3-despacho` y/o `.scene-caso3-portal`.

**Fase 3 — Caso 4**
1. 4 sospechosos. La caja fuerte (`CajaFuerte-Caso4-5.png`) queda como
   prueba bloqueada (`locked: true`) — no se abre en este caso.
2. Mecánica de **contradicciones cruzadas** (Eulogio dice X, Mireia dice Y,
   solo se detecta cruzando): añadir campo `requiredFromSuspects: [...]` en
   contradicción y evolucionar `GameEngine._checkContradictions()` para
   que también valide que se han hecho preguntas al **otro** sospechoso.
   No romper compatibilidad con caso 1/2/3.

**Fase 4 — Selección de caso desde el menú**
1. Cambiar `MenuScreen` "MODO HISTORIA" para que muestre los casos
   disponibles (1, 2, 3, 4) en orden. Persistir progreso en MetaStore o
   localStorage para que solo aparezcan casos desbloqueados (caso N+1 se
   desbloquea al completar caso N).
2. Mantener compatibilidad: una partida nueva siempre arranca en caso 1 y
   muestra tutorial.
3. La cena (`DinnerScreen`) se ejecuta entre caso N y caso N+1. Tras la cena
   del caso N, el flujo debería volver al menú o cargar directamente caso
   N+1 (decidir con el usuario).

### Criterios de aceptación

- [ ] Los 3 casos cargan sin errores en consola del navegador.
- [ ] Cada caso muestra retrato del sospechoso activo sobre escenario propio.
- [ ] Las contradicciones disparan correctamente, incluyendo `clarification`
  visualizada para red herrings.
- [ ] La resolución (`who/how/why`) funciona y puntúa S/A/B/C/F.
- [ ] La cena posterior carga, los ejes se actualizan en MetaStore, las
  flags se persisten.
- [ ] El tutorial **solo** se muestra en caso 1, primera partida.
- [ ] Ningún assert: `imagePath` apunta a un archivo que no existe en disco
  (se rompería sin error visible — verificar manualmente todos los paths).

### Reglas de oro

1. **NO inventar texto narrativo.** Toda voz de sospechoso, cada respuesta,
   cada `correctExplanation`, sale del documento `HISTORIA-MODO-HISTORIA.md`
   o se discute con el usuario. Si una pregunta o `evidenceResponse` no está
   especificada en docs, **proponerla al usuario antes de escribirla** — el
   tono y la voz son críticos en este juego.
2. **NO refactorizar código del caso 1.** Solo extender lo necesario para
   que la generalización funcione (ej: campo `scene.cssClass`). El caso 1
   ya está validado por playtest, no romperlo.
3. **NO tocar el TutorialOverlay.** Está hardcodeado al caso 1 a propósito.
4. **NO crear assets nuevos.** Si falta algo visual, parar y preguntar.
5. **Verificar en navegador** después de cada caso, no al final. Caso 2
   funcionando antes de empezar caso 3.
6. **Plan antes que código**: usar `ExitPlanMode` o equivalente para
   acordar el plan con el usuario antes de generar las ~3000 líneas de
   datos JS. El usuario aprobará caso a caso.

---

## REFERENCIAS RÁPIDAS

| Archivo | Función |
|---|---|
| `js/data/caso01.js` | Template canónico — copiar shape literal |
| `js/data/cenasGlobal.js` | Banco de preguntas meta de Elena (tonos por caso) |
| `js/GameEngine.js` | Motor — `loadCase`, `askQuestion`, `presentEvidence`, `resolveCase`, `_checkContradictions` |
| `js/UIController.js` | UI coordinator — `_renderRoom`, `_renderPortrait`, `_handleAskQuestion`, `_handlePresentEvidence` |
| `js/components/ModalManager.js` | Modal de prueba + overlay de contradicción (aquí se añadiría `clarification`) |
| `js/components/TutorialOverlay.js` | Tutorial — **NO tocar** |
| `js/screens/MenuScreen.js` | Aquí se evolucionaría la selección de caso |
| `js/screens/IntroScreen.js` | Genérico, ya funciona para cualquier caso |
| `js/screens/ResolutionScreen.js` | Genérico — usa `solution` / `howOptions` / `whyOptions` del caso |
| `js/screens/DinnerScreen.js` | Genérico — usa `cena` del caso |
| `css/screens/game.css` | Aquí van las nuevas `.scene-casoN` (ver línea 279) |
| `assets/manifest.json` | Inventario de assets — actualizar al final con los nuevos casos |
| `docs/HISTORIA-MODO-HISTORIA.md` (216-587) | Narrativa fuente |
| `docs/SISTEMA-DIFICULTAD.md` (§6) | Detalle de red herrings caso 2 |
| `docs/METAARCO-CENAS.md` | Sistema de cenas y ejes |
| `docs/TOOLS-ARCHITECTURE.md` | Especificación del sistema de herramientas (UV/teléfono) |

---

## INSTRUCCIÓN INICIAL PARA EL NUEVO CHAT

Pega el documento entero, y al final añade:

> "Has leído el contexto. Empieza por la Fase 0 (auditoría) y luego propón
> un plan detallado para la Fase 1 (Caso 2 íntegro). NO escribas código
> hasta que apruebe el plan. Prepárate para que validemos caso a caso, no
> los tres a la vez. Trabajamos en español."

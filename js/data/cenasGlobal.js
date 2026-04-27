/**
 * CENAS_GLOBAL — Banco compartido para la fase personal y el cierre de la cena.
 *
 * Preguntas con `tono` (casual|preocupada|confrontacional) y filtros `requiere`/`excluye`.
 * El engine filtra por tono permitido según nº de caso y por condiciones de estado,
 * marca usadas en MetaStore.usedLines para que no se repitan a lo largo de los 8 casos.
 */
var US = US || {};

US.CENAS_GLOBAL = {

  // Identidad de la mujer (usar placeholder hasta que haya retrato).
  esposa: {
    nombre: 'Elena',
    portrait: null
  },

  // Tonos permitidos por nº de caso (1–8). Arco narrativo.
  tonosPorCaso: {
    1: ['casual'],
    2: ['casual'],
    3: ['casual', 'preocupada'],
    4: ['casual', 'preocupada'],
    5: ['casual', 'preocupada'],
    6: ['preocupada', 'confrontacional'],
    7: ['preocupada', 'confrontacional'],
    8: ['confrontacional']
  },

  // Cuántas preguntas meta por cena (ideal). Si filtrado deja menos, se acorta.
  preguntasPorCena: 3,

  // ───────────────────────────────────────
  // PREGUNTAS META
  // ───────────────────────────────────────
  // efecto: { sinceridad: +N, integridad: +N, lucidez: +N, flags: [...] }
  // requiere: { flags: [...], sinceridad: {gt|lt: N}, ... } — todas deben cumplirse
  // excluye:  [ids] — no aparece si alguna de esas ya está marcada como usada
  metaPreguntas: [

    // ── CASUAL ──────────────────────────────────────
    {
      id: 'cas_comida',
      tono: 'casual',
      linea: 'Apenas has tocado la comida. ¿No te gusta?',
      respuestas: [
        { id: 'a', texto: 'Está buenísima. Es que vengo lleno del turno.',
          efecto: { sinceridad: -5 },
          replica: 'Ya. Eso mismo dijiste el lunes.' },
        { id: 'b', texto: 'No tengo hambre. Lo siento.',
          efecto: { lucidez: -3, sinceridad: +4 },
          replica: 'Te caliento otra cosa si quieres.' },
        { id: 'c', texto: 'Está perfecta. Siéntate y come conmigo.',
          efecto: { sinceridad: +6 },
          replica: 'Eso está mejor.' }
      ]
    },

    {
      id: 'cas_dormir',
      tono: 'casual',
      linea: '¿Has dormido bien esta semana?',
      respuestas: [
        { id: 'a', texto: 'Como un tronco.',
          efecto: { sinceridad: -8, flags: ['oculta_insomnio'] },
          replica: 'Qué suerte tienes.' },
        { id: 'b', texto: 'Regular. Algún sueño raro.',
          efecto: { sinceridad: +5, lucidez: -3 },
          replica: '¿Sueño raro de qué?' },
        { id: 'c', texto: 'No. Llevo semanas sin pegar ojo del todo.',
          efecto: { sinceridad: +10, lucidez: -5 },
          replica: 'Pídele algo al médico. Por favor.' }
      ]
    },

    {
      id: 'cas_madre',
      tono: 'casual',
      linea: 'Tu madre llamó otra vez. Dice que no le coges el teléfono.',
      respuestas: [
        { id: 'a', texto: 'Mañana la llamo sin falta.',
          efecto: {},
          replica: 'Eso dijiste la semana pasada.' },
        { id: 'b', texto: 'No tengo cabeza para ella ahora.',
          efecto: { sinceridad: +4, lucidez: -2 },
          replica: 'Pues díselo tú, no yo.' },
        { id: 'c', texto: 'Llámala tú si tanto te preocupa.',
          efecto: { sinceridad: -6, integridad: -4 },
          replica: '...vale.' }
      ]
    },

    {
      id: 'cas_finde',
      tono: 'casual',
      linea: '¿Qué te parece si este finde nos escapamos un día a la costa?',
      respuestas: [
        { id: 'a', texto: 'Me encantaría. De verdad.',
          efecto: { sinceridad: +6 },
          replica: 'Pues reservo algo.' },
        { id: 'b', texto: 'No sé si podré. El caso viene pesado.',
          efecto: { sinceridad: +3, lucidez: -2 },
          replica: 'Tú avisas.' },
        { id: 'c', texto: 'Otro día, ¿vale? Prometido.',
          efecto: { sinceridad: -5 },
          replica: 'Vale. Otro día.' }
      ]
    },

    {
      id: 'cas_copa',
      tono: 'casual',
      linea: '¿Te pongo otra copa?',
      respuestas: [
        { id: 'a', texto: 'Venga, una más.',
          efecto: { lucidez: -4, flags: ['bebe_de_mas'] },
          replica: 'La última, ¿eh?' },
        { id: 'b', texto: 'No, mejor no. Mañana madrugo.',
          efecto: { lucidez: +5, integridad: +3 },
          replica: 'Bien hecho.' },
        { id: 'c', texto: 'Agua mejor.',
          efecto: { lucidez: +6 },
          replica: 'Te la lleno.' }
      ]
    },

    {
      id: 'cas_novios',
      tono: 'casual',
      linea: '¿Te acuerdas de cuando fuimos a Cadaqués? Aquel verano.',
      respuestas: [
        { id: 'a', texto: 'Cómo olvidarlo. El mejor verano.',
          efecto: { sinceridad: +7 },
          replica: 'A veces pienso que ese fue el último de verdad.' },
        { id: 'b', texto: 'Creo que sí. Fue hace mucho, ¿no?',
          efecto: { sinceridad: -4, lucidez: -2 },
          replica: 'Diez años. Solo diez.' },
        { id: 'c', texto: 'Deberíamos volver.',
          efecto: { sinceridad: +5 },
          replica: 'Pues vamos. Cuando quieras.' }
      ]
    },

    // ── PREOCUPADA ──────────────────────────────────
    {
      id: 'pre_callado',
      tono: 'preocupada',
      linea: 'Últimamente te noto más callado. ¿Pasa algo?',
      respuestas: [
        { id: 'a', texto: 'Todo bien. Cansancio.',
          efecto: { sinceridad: -8 },
          replica: 'Eso no es una respuesta.' },
        { id: 'b', texto: 'Los casos se me meten dentro. No sé sacármelos.',
          efecto: { sinceridad: +10, lucidez: -4 },
          replica: 'Cuéntamelos. Déjame ayudar.' },
        { id: 'c', texto: 'No es nada que puedas arreglar.',
          efecto: { sinceridad: +3, integridad: -3 },
          replica: 'Déjame intentarlo al menos.' }
      ]
    },

    {
      id: 'pre_suenos',
      tono: 'preocupada',
      linea: 'Anoche hablaste en sueños. Dijiste un nombre que no conozco.',
      requiere: {},
      respuestas: [
        { id: 'a', texto: '¿Qué nombre?',
          efecto: { sinceridad: +4, flags: ['curioso_por_suenos'] },
          replica: 'No lo entendí bien. Empezaba por R.' },
        { id: 'b', texto: 'Serían cosas del trabajo.',
          efecto: { sinceridad: -6 },
          replica: 'No parecía del trabajo.' },
        { id: 'c', texto: 'No quiero saberlo.',
          efecto: { sinceridad: -10, lucidez: -4, flags: ['rechaza_recordar'] },
          replica: '...vale.' }
      ]
    },

    {
      id: 'pre_beber',
      tono: 'preocupada',
      linea: 'Encontré la botella del armario. Está por la mitad. La compraste el martes.',
      respuestas: [
        { id: 'a', texto: 'Una copa por la noche no le hace mal a nadie.',
          efecto: { sinceridad: -7, lucidez: -5 },
          replica: 'No es una copa.' },
        { id: 'b', texto: 'Tienes razón. Lo dejo.',
          efecto: { sinceridad: +6, integridad: +5, lucidez: +4 },
          replica: 'Gracias.' },
        { id: 'c', texto: 'No empieces con eso ahora.',
          efecto: { sinceridad: -10, integridad: -5 },
          replica: 'Es que siempre es "ahora no".' }
      ]
    },

    {
      id: 'pre_miedo',
      tono: 'preocupada',
      linea: 'A veces me das un poco de miedo. Cuando vuelves así.',
      respuestas: [
        { id: 'a', texto: 'Perdóname. No quiero que te sientas así.',
          efecto: { sinceridad: +8, integridad: +4 },
          replica: 'Ya lo sé.' },
        { id: 'b', texto: 'No es para tanto.',
          efecto: { sinceridad: -8, integridad: -5 },
          replica: 'Para mí sí.' },
        { id: 'c', texto: 'Dime cuándo y me voy.',
          efecto: { sinceridad: +5, lucidez: -6 },
          replica: 'No quiero que te vayas.' }
      ]
    },

    {
      id: 'pre_padre',
      tono: 'preocupada',
      linea: 'Tu padre. ¿Sigues sin querer hablar de él?',
      respuestas: [
        { id: 'a', texto: 'No hay nada que hablar.',
          efecto: { sinceridad: -6, flags: ['bloqueo_padre'] },
          replica: 'Vale.' },
        { id: 'b', texto: 'Esta semana he pensado en él. No sé por qué.',
          efecto: { sinceridad: +7, flags: ['recuerda_padre'] },
          replica: '¿Qué has pensado?' },
        { id: 'c', texto: 'Pregúntame otro día.',
          efecto: { sinceridad: -3 },
          replica: 'Vale.' }
      ]
    },

    // ── CONFRONTACIONAL ─────────────────────────────
    {
      id: 'con_mentira_martes',
      tono: 'confrontacional',
      linea: 'El martes no estuviste en comisaría. Llamé. ¿Dónde estabas?',
      respuestas: [
        { id: 'a', texto: 'Salí a despejarme. No quería preocuparte.',
          efecto: { sinceridad: +8, integridad: +3 },
          replica: 'Me preocupa más que me mientas.' },
        { id: 'b', texto: 'Estaría en otra gestión. No lo recuerdo.',
          efecto: { sinceridad: -12, lucidez: -3, flags: ['miente_sobre_martes'] },
          replica: 'No te creo.' },
        { id: 'c', texto: 'Eso no te incumbe.',
          efecto: { sinceridad: -15, integridad: -8 },
          replica: 'Entendido.' }
      ]
    },

    {
      id: 'con_ultimatum',
      tono: 'confrontacional',
      linea: 'Llevas meses así. O me cuentas qué está pasando, o esto no sigue.',
      respuestas: [
        { id: 'a', texto: 'Te lo cuento. Todo. Solo dame esta noche.',
          efecto: { sinceridad: +15, integridad: +5, flags: ['promete_contar_todo'] },
          replica: 'Te escucho.' },
        { id: 'b', texto: 'No puedo contártelo. Créeme.',
          efecto: { sinceridad: +5, lucidez: -5, flags: ['calla_por_proteccion'] },
          replica: 'Pues créeme tú cuando te digo que no aguanto más.' },
        { id: 'c', texto: 'Haz lo que tengas que hacer.',
          efecto: { sinceridad: -10, integridad: -10, lucidez: -6 },
          replica: '...' }
      ]
    },

    {
      id: 'con_cajon',
      tono: 'confrontacional',
      linea: 'Ayer cerraste el cajón del escritorio en cuanto entré. ¿Qué guardas?',
      respuestas: [
        { id: 'a', texto: 'Fotos viejas. Las estaba mirando.',
          efecto: { sinceridad: +6, flags: ['fotos_en_cajon'] },
          replica: '¿Me las enseñas?' },
        { id: 'b', texto: 'Papeles del trabajo. Nada importante.',
          efecto: { sinceridad: -8, flags: ['oculta_cajon'] },
          replica: 'Siempre "nada importante".' },
        { id: 'c', texto: 'No te acerques a ese cajón.',
          efecto: { sinceridad: -12, integridad: -6, flags: ['cajon_prohibido'] },
          replica: 'Tomo nota.' }
      ]
    },

    {
      id: 'con_quien_eres',
      tono: 'confrontacional',
      linea: 'Mírame. ¿Quién eres tú ahora mismo? Porque yo ya no te reconozco.',
      respuestas: [
        { id: 'a', texto: 'El mismo que siempre. Solo estoy cansado.',
          efecto: { sinceridad: -10, integridad: -5 },
          replica: 'No. No eres el mismo.' },
        { id: 'b', texto: 'No lo sé. Hace tiempo que no lo sé.',
          efecto: { sinceridad: +12, lucidez: -8, integridad: +6 },
          replica: 'Gracias por decirlo.' },
        { id: 'c', texto: 'Alguien que intenta no mirarse demasiado.',
          efecto: { sinceridad: +10, integridad: +8, lucidez: -4 },
          replica: 'Pues mírate. Aquí estoy yo.' }
      ]
    }
  ],

  // ───────────────────────────────────────
  // CIERRES — se elige la primera regla cuyo umbral se cumpla.
  // Evaluadas en orden.
  // ───────────────────────────────────────
  cierres: [
    { si: { lucidez:    { lt: 25 } },                        linea: 'Prométeme que mañana pides cita con alguien. Lo que sea.' },
    { si: { sinceridad: { lt: 25 } },                        linea: '...buenas noches.' },
    { si: { integridad: { lt: 25 } },                        linea: 'Algún día te vas a tener que mirar al espejo, ¿sabes?' },
    { si: { sinceridad: { gt: 75 }, integridad: { gt: 70 } }, linea: 'Ven aquí. No digas nada. Solo ven aquí.' },
    { si: { sinceridad: { gt: 65 } },                        linea: 'Gracias por hablar conmigo esta noche.' },
    { si: { lucidez:    { gt: 70 } },                        linea: 'Se te ve mejor esta semana. Me alegro.' },
    { default: true,                                          linea: 'Duerme bien. Aquí estoy.' }
  ]
};

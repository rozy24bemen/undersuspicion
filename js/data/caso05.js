/**
 * CASO 05: "El cajón"
 * Acto II — Inicio. Herramientas nuevas: luz UV. Mecánica nueva: cómplice
 * (ejecutor + cerebro). La primera vez que el apellido Mora aparece como
 * víctima directa. El detective investiga a su propio tío segundo.
 *
 * Culpable ejecutora: Inés Quirós (auxiliar de geriatría).
 * Cerebro: bufete desconocido — sembrado Estudio Caracedo (caso 6).
 * Inocentes: Aurelia Lobera (vecina), Damián Mora (sobrino/primo del detective),
 *            Roque Vellido (vecino antiguo de calle Goya).
 *
 * Mecánica UV: foto de grupo 1985, cajón abierto con hoja "Elena" en sangre,
 *              fotos de Carmen Lobera.
 * Sembrado clave: nombre "Elena" escrito con sangre seca en papel del cajón.
 *                Combinación 8614 recogida del caso 4.
 */
var US = US || {};
US.CASES = US.CASES || {};

US.CASES['caso-05'] = {
  id: 'caso-05',
  title: 'El cajón',
  subtitle: 'Caso Nº 2026-0718',
  intro: 'Hermes Mora, jubilado de 80 años, pariente lejano del detective —un tío segundo al que apenas recuerda—, ha aparecido muerto en la cama de su piso del barrio de Salamanca. Cianosis facial. Estaba enfermo desde hace meses y su médico lo firmará como muerte natural. La autopsia ha llegado esta mañana con una nota diferente: hay una marca de inyección adicional en el antebrazo izquierdo, de aguja distinta a la de su medicación habitual. La sustancia es un barbitúrico de alta concentración. Alguien le ayudó a morir. El comisario Beltrán ha sido el primero en decirlo en voz alta: "Es tu tío, Mora. Si quieres pasarlo, lo entiendo." "No. Ya estoy aquí."',

  victim: {
    name: 'Hermes Mora',
    age: 80,
    occupation: 'Jubilado — antiguo funcionario de Sanidad',
    portrait: 'assets/img/suspects/Caso5/Retrato_Victima_caso5.png'
  },

  scene: {
    location: 'Calle de Hermosilla — Piso 3ºB, Salamanca (Madrid)',
    date: '18 de julio de 2026',
    timeOfDeath: 'Entre las 9:00 y las 11:00h del día anterior',
    cssClass: 'scene-caso5'
  },

  // Luz UV disponible en este caso. El botón aparece en TODAS las pruebas:
  // las que tengan `toolData['uv-light']` revelan algo (con imagen UV o
  // texto narrativo); el resto muestran "sin hallazgos" — para que el
  // jugador tenga que investigar pista por pista. Sin toolbar de mesa: la
  // herramienta vive dentro de cada modal. Ver ModalManager.showEvidence.
  uvLightAvailable: true,

  suspects: [
    // ──────────────── AURELIA LOBERA ────────────────
    {
      id: 'aurelia',
      name: 'Aurelia Lobera',
      age: 75,
      role: 'Vecina del rellano y antigua amante de Hermes',
      description: 'Menuda, pulcra, pelo blanco corto. Lleva años viviendo en el mismo rellano. Le ayudaba con la compra, le cocinaba alguna vez. Lo que no ha contado es que durante veinte años fueron algo más que vecinos. El apellido Lobera es el mismo de la madre del detective.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso5/Sospechosos/AureliaLobera-Neutral.png',
        talking:  'assets/img/suspects/Caso5/Sospechosos/AureliaLobera-Pensativa.png',
        nervous:  'assets/img/suspects/Caso5/Sospechosos/AureliaLobera-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'aurelia-v1',
            text: '¿Cómo era su relación con Hermes?',
            response: '"Éramos vecinos de muchos años, inspector. Hermes era un hombre bueno. Algo difícil, a veces. Pero bueno. Le ayudaba con lo que podía: la compra, alguna visita cuando estaba peor. Los viejos nos necesitamos entre nosotros."',
            pressureCost: 8
          },
          {
            id: 'aurelia-v2',
            text: '¿Tenía familia cercana que le visitara?',
            response: '"Su sobrino Damián venía. No mucho, pero venía. Y usted ya sé quién es. Hermes me habló de usted, ¿sabe? Decía que tenía un sobrino lejano en la policía. Que un día iba a llamarle. Que necesitaba contarle ciertas cosas."',
            pressureCost: 10
          },
          {
            id: 'aurelia-v3',
            text: '¿Sabía que Hermes estaba pensando en reabrir algo del pasado?',
            response: '"Últimamente recuperaba recuerdos de cuando era joven. La demencia le devolvía los de hace cincuenta años y le borraba los de ayer. Me contaba cosas de su hermano, del padre de usted, de aquellos años. Yo escuchaba. Eso es lo que hacemos los viejos: escuchar."',
            pressureCost: 12
          }
        ],
        coartada: [
          {
            id: 'aurelia-c1',
            text: '¿Dónde estaba la mañana del martes entre las 9 y las 11?',
            response: '"En mi piso. Dormía. Me despierto tarde desde que me jubilé. Llamé a Hermes a las 11 para ver si quería que le bajara el periódico. No cogió. A las 11 y media empecé a preocuparme y llamé al portero."',
            pressureCost: 8
          },
          {
            id: 'aurelia-c2',
            text: '¿Había alguien más en su piso que pueda confirmarlo?',
            response: '"No. Vivo sola desde que murió mi marido en el 2017. El teléfono del fijo tiene registro de la llamada a Hermes. Eso lo pueden comprobar."',
            pressureCost: 8
          },
          {
            id: 'aurelia-c3',
            text: '¿Sabe si Hermes tenía enemigos o alguien que le quisiera mal?',
            response: '"Hermes no era de enemigos. Pero últimamente recibía llamadas que le ponían nervioso. No quería decirme de qué eran. Solo decía que había cosas que tenían que salir a la luz antes de que fuera demasiado tarde."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'forense':         { response: '"¿Una inyección extra? Dios mío. Inés venía dos veces por semana a ponerle la cortisona. Pero yo no estaba nunca cuando ella venía, por la mañana temprano."', pressureCost: 6 },
        'cajon_cerrado':   { response: '"Ese cajón... Hermes me dijo una vez que ahí guardaba las cosas importantes. No me dejó verlo nunca. Decía que eran papeles de familia."', pressureCost: 8 },
        'foto_1985':       { response: '"Esa foto... [silencio largo] Sí, yo estaba ese día. Era el cumpleaños de Hermes. El padre de usted estaba de muy buen humor esa tarde. Su madre era guapísima. Qué pena lo del infarto. Una mujer tan joven."', pressureCost: 10 },
        'carta_hermes':    { response: '"¿Le escribió una carta? [voz quebrada] Le dije que lo llamara, que no dependiera de los papeles. Pero él decía que quería que quedara escrito."', pressureCost: 8 },
        'fotos_carmen':    { response: '"[silencio largo, los ojos se le humedecen] Esas fotos son de mi hermana Carmen. Era cinco años mayor que yo. La perdimos en el ochenta y seis. ¿Por qué tienen sangre en los bordes? [pausa] Hermes nunca me dijo que las guardaba. Nunca."', pressureCost: 14 },
        'hoja_elena':      { response: '"¿Elena? [se queda muy quieta] No conozco a ninguna Elena. Aquí en el barrio no había Elenas en aquellos años. Pregunte a Roque, él anda mejor de memoria que yo para los nombres."', pressureCost: 10 },
        'sobre_dinero':    { response: '"¿Un sobre con dinero en el bolso de Inés? Eso no lo entiendo. Inés era una chica seria. O al menos eso parecía."', pressureCost: 10 },
        'movimientos_ines':{ response: '"No sé nada de eso. Lo que sé es que Hermes confiaba en ella. Y eso que Hermes no confiaba en nadie."', pressureCost: 8 },
        'calendario':      { response: '"El 14 de agosto. Hermes también lo tenía marcado. Me preguntó una vez si yo sabía qué pasó esa noche. Le dije que no. Y era verdad."', pressureCost: 12 }
      }
    },

    // ──────────────── DAMIÁN MORA ────────────────
    {
      id: 'damian',
      name: 'Damián Mora',
      age: 52,
      role: 'Sobrino de Hermes — primo lejano del detective',
      description: 'Traje barato, corbata aflojada, nervioso sin que se sepa bien por qué. Es el heredero oficial único de Hermes. Vive del alquiler del piso de su tío desde hace años. Su mujer es sobrina de Don Eulogio Pacheco, el médico del caso 4.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso5/Sospechosos/DamiánMora-Neutral.png',
        talking:  'assets/img/suspects/Caso5/Sospechosos/DamiánMora-Pensativo.png',
        nervous:  'assets/img/suspects/Caso5/Sospechosos/DamiánMora-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'damian-v1',
            text: '¿Con qué frecuencia visitaba a su tío?',
            response: '"Una vez al mes, más o menos. Él no pedía mucho. A veces le llevaba fruta, a veces nada. La verdad es que últimamente lo veía peor. Iba perdiendo la cabeza, ¿sabe? Contaba cosas que no tenían sentido."',
            pressureCost: 8
          },
          {
            id: 'damian-v2',
            text: '¿Sabía que era el heredero único?',
            response: '"Sí, me lo dijo hace unos años. No es que haya mucho que heredar: el piso y cuatro cosas. Pero el piso aquí en Hermosilla vale lo suyo ahora. [pausa] No me mire así, que yo no lo maté."',
            pressureCost: 12
          },
          {
            id: 'damian-v3',
            text: '¿Qué cosas contaba Hermes que "no tenían sentido"?',
            response: '"Cosas del pasado. Del padre de usted, de su madre, de unos papeles que tenía guardados. Decía que iba a hacer algo importante antes de morirse. No le presté mucha atención, le seré sincero."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'damian-c1',
            text: '¿Dónde estaba el martes entre las 9 y las 11 de la mañana?',
            response: '"En la oficina. Entro a las 8:30. Tenemos fichaje. Lo pueden comprobar en RRHH."',
            pressureCost: 8
          },
          {
            id: 'damian-c2',
            text: '¿Conocía a Inés Quirós, la auxiliar de su tío?',
            response: '"La vi un par de veces. Una chica seria, eficiente. Mi tío la apreciaba. Decía que le explicaba bien los medicamentos."',
            pressureCost: 8
          },
          {
            id: 'damian-c3',
            text: '¿Su mujer conocía a la familia Pacheco?',
            response: '"[pausa] Sí, es sobrina de Don Eulogio, el médico de Talavera. El que estuvo preso, el del caso ese. Son primos lejanos. ¿Eso tiene algo que ver? Porque mi mujer no tiene nada que ver con nada."',
            pressureCost: 14
          }
        ]
      },
      evidenceResponses: {
        'forense':         { response: '"¿Una inyección adicional? Entonces fue Inés. Tiene que haber sido Inés. ¿O no?"', pressureCost: 5 },
        'cajon_cerrado':   { response: '"No sé la combinación. Mi tío nunca me la dio. Decía que era para \'cuando llegara el momento\'."', pressureCost: 8 },
        'foto_1985':       { response: '"No reconozco a todas las personas. Esa creo que es mi tío joven. Y ese hombre de uniforme... no sé quién es."', pressureCost: 8 },
        'carta_hermes':    { response: '"¿Le escribió a usted? [sorprendido] Nunca me escribió a mí. Solo me llamaba para los recibos del piso."', pressureCost: 10 },
        'fotos_carmen':    { response: '"¿Carmen? Eso es la hermana de Aurelia, la vecina del rellano. Murió hace mucho, antes de que yo tuviera memoria. Lo de la sangre... no sé. Pregúntele a ella."', pressureCost: 8 },
        'hoja_elena':      { response: '"¿Elena? Pues... ¿no se llama así su mujer? [se rasca la nuca] No sé qué pinta su mujer en los papeles de mi tío. Yo no me meto en eso."', pressureCost: 10 },
        'sobre_dinero':    { response: '"Cinco mil euros en efectivo en el bolso de la enfermera... eso no es normal. Eso no es normal en absoluto."', pressureCost: 8 },
        'movimientos_ines':{ response: '"Ingresos de cinco mil euros al mes. Eso no es el sueldo de una auxiliar de geriatría. Alguien la estaba pagando."', pressureCost: 8 },
        'calendario':      { response: '"El 14 de agosto. Sí, mi tío siempre lo marcaba. Decía que era un día importante. No sé más."', pressureCost: 6 }
      }
    },

    // ──────────────── INÉS QUIRÓS ────────────────
    {
      id: 'ines',
      name: 'Inés Quirós',
      age: 40,
      role: 'Auxiliar de geriatría — visitaba a Hermes dos veces por semana',
      description: 'Profesional, contenida, mide cada palabra. Lleva cuatro años atendiendo a Hermes. Sabe exactamente qué medicación tiene y a qué hora. Llegó a las 9:15 ese martes, según el portero del bloque.',
      isGuilty: true,
      portraits: {
        neutral:  'assets/img/suspects/Caso5/Sospechosos/InésQuirós-Neutral.png',
        talking:  'assets/img/suspects/Caso5/Sospechosos/InésQuirós-Pensativa.png',
        nervous:  'assets/img/suspects/Caso5/Sospechosos/InésQuirós-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'ines-v1',
            text: '¿Cómo era Hermes Mora como paciente?',
            response: '"Un señor mayor con mucha cabezonería. Le costaba tomar los medicamentos, siempre tenía una excusa. Pero me respetaba. Llevábamos cuatro años trabajando juntos."',
            pressureCost: 8
          },
          {
            id: 'ines-v2',
            text: '¿Notó algún cambio en él en las últimas semanas?',
            response: '"Sí. Empezó a hablar mucho del pasado. Cosas que no tenían mucho sentido para mí: nombres, fechas, un médico de pueblo. Yo escuchaba y seguía con mi trabajo."',
            pressureCost: 10
          },
          {
            id: 'ines-v3',
            text: '¿Sabía quién le estaba pagando fuera de su nómina habitual?',
            response: '"[pausa larga] No sé de qué habla. Tengo una nómina normal, como todo el mundo."',
            pressureCost: 16
          }
        ],
        coartada: [
          {
            id: 'ines-c1',
            text: '¿A qué hora llegó al piso de Hermes el martes?',
            response: '"A las 9 y veinte, como siempre los martes. Le puse la inyección de cortisona, le comprobé la tensión, me fui a las diez menos cuarto."',
            pressureCost: 8
          },
          {
            id: 'ines-c2',
            text: '¿Tenía Hermes buen aspecto cuando se fue?',
            response: '"Estaba dormido cuando me fui. A veces le daba sueño después de la inyección. Era habitual."',
            pressureCost: 10
          },
          {
            id: 'ines-c3',
            text: '¿Hay alguien que pueda confirmar que salió del bloque a las 9:45?',
            response: '"El portero me vio salir. Y el CCTV del portal, supongo."',
            pressureCost: 8
          }
        ]
      },
      evidenceResponses: {
        'forense':         { response: '"¿Una inyección adicional? Eso no es posible. Yo solo le puse la cortisona, nada más."', pressureCost: 8 },
        'cajon_cerrado':   { response: '"No sé nada de ningún cajón. Yo iba al dormitorio, hacía mi trabajo y me iba."', pressureCost: 6 },
        'foto_1985':       { response: '"No conozco a esas personas. No sé qué tiene que ver esa foto conmigo."', pressureCost: 6 },
        'carta_hermes':    { response: '"Una carta para... [traga saliva] No sé nada de eso. Hermes escribía muchas cosas cuando estaba con los recuerdos."', pressureCost: 10 },
        'fotos_carmen':    { response: '"[mantiene los ojos en la mesa] Yo no he tocado nunca esas fotos. No sé de qué manchas me habla. No reconozco a esa mujer."', pressureCost: 18 },
        'hoja_elena':      { response: '"[pausa breve, la voz controlada] Una hoja en blanco. Yo no he visto eso. No sé quién es Elena."', pressureCost: 14 },
        'sobre_dinero':    { response: '"[silencio] Ese sobre... yo no tengo que explicar lo que hay en mi bolso."', pressureCost: 20 },
        'movimientos_ines':{ response: '"[pausa muy larga] Tengo una razón para ese dinero. No es lo que parece. No puedo decirle más sin hablar con un abogado."', pressureCost: 22 },
        'calendario':      { response: '"El calendario de Hermes no es asunto mío. Yo venía a cuidarle, no a mirar sus paredes."', pressureCost: 6 }
      }
    },

    // ──────────────── ROQUE VELLIDO ────────────────
    {
      id: 'roque',
      name: 'Roque Vellido',
      age: 66,
      role: 'Antiguo vecino de calle Goya — vino a despedirse de Hermes',
      description: 'Pelo escaso, bigote blanco, mirada directa que no pierde contacto. Conoció a Hermes en los años 80, cuando vivían en la misma calle. Se reconoce al detective nada más verle. Sabe cosas que nunca le han preguntado.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso5/Sospechosos/RoqueVellido-Neutral.png',
        talking:  'assets/img/suspects/Caso5/Sospechosos/RoqueVellido-Pensativo.png',
        nervous:  'assets/img/suspects/Caso5/Sospechosos/RoqueVellido-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'roque-v1',
            text: '¿Cuánto tiempo hacía que conocía a Hermes?',
            response: '"Cuarenta años. Vivíamos en la misma calle, calle Goya. Cuatro portales de distancia. Los hijos jugaban juntos, los padres se saludaban en la escalera. Así eran los barrios entonces."',
            pressureCost: 8
          },
          {
            id: 'roque-v2',
            text: '¿Por qué vino a verle ahora?',
            response: '"Me llamó hace tres semanas. Me dijo que estaba recordando cosas viejas y que quería verme antes de que ninguno de los dos se fuera. Vine el lunes por la tarde. Lo encontré bien, animado incluso. [pausa] Y ayer me entero de esto."',
            pressureCost: 10
          },
          {
            id: 'roque-v3',
            text: '¿Conoció al padre del detective?',
            response: '"Al Comisario Mora. Sí, inspector. Tú eres el hijo del comisario Mora, ¿no? El que se quedó solo aquella noche en casa del tío en Talavera. Yo conocí a tu madre. Era una santa. Lástima. Una lástima muy grande."',
            pressureCost: 14
          }
        ],
        coartada: [
          {
            id: 'roque-c1',
            text: '¿Dónde estaba usted el martes por la mañana?',
            response: '"En Guadalajara. Vivo allí. Vine a Madrid el lunes, me quedé en casa de mi hija en Moratalaz, y volví el martes por la tarde. Mi hija puede confirmarlo."',
            pressureCost: 8
          },
          {
            id: 'roque-c2',
            text: '¿Sabe si Hermes recibía visitas de alguien más además de los habituales?',
            response: '"Me dijo que una chica venía a ponerle inyecciones. Y que había empezado a recibir cartas. Cartas sin remitente, me dijo. Que lo ponían nervioso."',
            pressureCost: 10
          },
          {
            id: 'roque-c3',
            text: '¿Qué le contó Hermes de las "cosas viejas" que recordaba?',
            response: '"Que tenía pruebas de lo que pasó aquella noche. De la noche del 14 de agosto del 86. Que lo tenía todo guardado en un cajón con cerradura. Que iba a entregárselo todo a la persona correcta."',
            pressureCost: 16
          }
        ]
      },
      evidenceResponses: {
        'forense':         { response: '"Alguien le inyectó algo. Hermes sabía demasiado para morir de natural ahora, con lo que iba a hacer."', pressureCost: 6 },
        'cajon_cerrado':   { response: '"Ese cajón. Hermes me lo mencionó. Dijo que la combinación la tenía el que tuviera que tenerla."', pressureCost: 10 },
        'foto_1985':       { response: '"[reconoce la foto inmediatamente] Esa foto es del 85. Ese soy yo, ese es Hermes, ese es el Comisario Mora con el uniforme. Y esa mujer de al lado... esa es tu madre, inspector. Carmen. Una mujer maravillosa."', pressureCost: 12 },
        'carta_hermes':    { response: '"¿Una carta sin terminar? Hermes siempre dejaba las cosas a medias. Pero la intención era buena. Quería que su sobrino supiera."', pressureCost: 8 },
        'fotos_carmen':    { response: '"[se queda mirando las fotos en silencio] Carmen. Su madre, inspector. Las manchas son de aquella noche, ¿verdad? Hermes las guardó así. No tuvo el valor de limpiarlas. Yo tampoco lo habría tenido."', pressureCost: 14 },
        'hoja_elena':      { response: '"Elena... [pausa] Hubo una Elena en aquellos años, sí. La hija menor del comisario Mora. Era una niña entonces. Si ahora aparece su nombre escrito así, en sangre, en los papeles de Hermes... pregúntele a su mujer, inspector. Pregúntele desde cuándo se llama Elena."', pressureCost: 18 },
        'sobre_dinero':    { response: '"Cinco mil euros. Alguien le pagó para callarlo antes. Lo que no supieron es que Hermes no se callaba aunque le pagaran."', pressureCost: 10 },
        'movimientos_ines':{ response: '"La enfermera cobraba de alguien. Alguien que tenía mucho que perder si Hermes hablaba."', pressureCost: 8 },
        'calendario':      { response: '"El 14 de agosto de 1986. Sí. Yo también lo tengo marcado, inspector. Por razones distintas a las tuyas. O quizás no tan distintas."', pressureCost: 14 }
      }
    }
  ],

  evidence: [
    {
      id: 'forense',
      title: 'Informe Forense',
      type: 'documento',
      icon: '📋',
      iconPath: 'assets/img/icons/Pruebas/icon_informe.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P1 — Informe Forense.png',
      shortDesc: 'Marca de inyección adicional. Barbitúrico de alta concentración.',
      fullDesc: 'Don Octaviano Vidal certifica que la causa de muerte es sobredosis de barbitúrico de administración parenteral. La marca de inyección en el antebrazo izquierdo es de calibre 0,7mm, distinta a la aguja habitual de 0,5mm usada para la cortisona. El nivel en sangre indica inyección entre 9:00 y 10:30h del martes. Octaviano evita la mirada del detective durante todo el informe.',
      metadata: { fecha: '18-07-2026', fuente: 'Forense Don Octaviano Vidal', ref: 'FOR-05-001' }
    },
    {
      id: 'cajon_cerrado',
      title: 'Cajón con Candado',
      type: 'objeto',
      icon: '🔒',
      iconPath: 'assets/img/icons/Pruebas/icon_candado.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P2 — Cajón con Candado.png',
      shortDesc: 'Cajón del escritorio con candado numérico. Combinación desconocida.',
      fullDesc: 'Cajón de madera en el escritorio del dormitorio. Candado numérico de cuatro dígitos. La combinación no figura en ningún papel visible del piso. Lucía Solera (caso 4) no la conoce. Los papeles del caserón de Talavera mencionaban "agosto 1986, calle Goya 14". La combinación podría ser 8614.',
      metadata: { fecha: '18-07-2026', fuente: 'Inspección del piso de Hermes', ref: 'OBJ-05-002' },
      lock: {
        digits: 4,
        combination: '8614',
        prompt: 'Candado numérico de 4 dígitos. Introduce la combinación.',
        success: 'El cajón se abre. Dentro: papeles que Hermes guardaba para ti.',
        failure: 'La combinación no abre el candado.',
        unlocksMessage: 'Has abierto el cajón de Hermes. Tres pruebas nuevas se han añadido a la mesa.'
      },
      toolData: {
        'uv-light': {
          reveals: 'COMBINACIÓN 8614 grabada en la madera bajo el cajón con tinta invisible. Agosto 1986, calle Goya 14.',
          uvImagePath: 'assets/img/suspects/Caso5/Pruebas/P2-UV — Cajón con Combinación bajo UV.png',
          contradictionId: 'c05-cajon-uv'
        }
      }
    },
    {
      id: 'foto_1985',
      title: 'Fotografía de Grupo — 1985',
      type: 'objeto',
      icon: '📷',
      iconPath: 'assets/img/icons/Pruebas/icon_foto_grupo.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P3 — Fotografía Grupo 1985.png',
      shortDesc: 'Foto enmarcada en el salón. Cinco personas, verano de 1985.',
      fullDesc: 'Fotografía en blanco y negro algo amarillenta. Cinco personas en un jardín o terraza. Hermes, más joven. Un hombre con uniforme de Comisario. Una mujer joven con un bebé en brazos. Aurelia Lobera reconocible. La cara del hombre de uniforme está sobreexpuesta por el sol.',
      metadata: { fecha: '18-07-2026', fuente: 'Salón del piso de Hermes', ref: 'OBJ-05-003' },
      toolData: {
        'uv-light': {
          reveals: 'Bajo la luz UV: mancha de sangre seca sobre la figura del hombre de uniforme (el Comisario Mora). El bebé en brazos de la mujer lleva un traje de punto idéntico al de una foto del detective de niño en sus propios documentos.',
          uvImagePath: 'assets/img/suspects/Caso5/Pruebas/P3-UV — Foto de Grupo 1985 con Sangre bajo UV.png',
          contradictionId: null
        }
      }
    },
    {
      id: 'carta_hermes',
      title: 'Carta Inacabada de Hermes',
      type: 'documento',
      icon: '✉️',
      iconPath: 'assets/img/icons/Pruebas/icon_carta.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P4 — Carta Inacabada.png',
      shortDesc: '"Querido sobrino Roberto..." — carta sin terminar en el cajón.',
      fullDesc: '"Querido sobrino Roberto, llevo tiempo queriendo decirte algunas cosas sobre tu padre y sobre tu madre. Antes de que sea demasiado tarde para los dos. Tu padre era un hombre con un peso que no supo llevar. Aquella noche de agosto..." La carta se interrumpe. Es la primera vez que el nombre "Roberto" aparece dirigido directamente al detective. Letra temblorosa pero determinada. Tinta azul reciente.',
      metadata: { fecha: '18-07-2026', fuente: 'Cajón abierto con combinación 8614', ref: 'DOC-05-004' },
      unlockedByLock: 'cajon_cerrado'
    },
    {
      id: 'fotos_carmen',
      title: 'Fotografías de Carmen Lobera',
      type: 'objeto',
      icon: '🖼️',
      iconPath: 'assets/img/icons/Pruebas/icon_fotos.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P5 — Fotos Carmen Lobera.png',
      shortDesc: 'Paquete de fotografías antiguas de una mujer joven. Cajón de Hermes.',
      fullDesc: 'Siete fotografías en papel fotográfico de los años 80. Una mujer joven, morena, de unos 30 años. Algunas en exterior, algunas en un piso. En el reverso de dos de ellas: "Carmen, verano 84". Hay manchas amarronadas en los bordes de tres fotos. A simple vista parecen manchas de agua.',
      metadata: { fecha: '18-07-2026', fuente: 'Cajón abierto con combinación 8614', ref: 'OBJ-05-005' },
      toolData: {
        'uv-light': {
          reveals: 'Las manchas amarronadas en las fotos de Carmen son sangre seca antigua. No hay rastro de herida en las fotos. La sangre es exterior a las imágenes: alguien las manejó con manos con sangre.',
          uvImagePath: 'assets/img/suspects/Caso5/Pruebas/P5-UV — Fotos de Carmen Lobera con Sangre bajo UV.png',
          contradictionId: 'c05-fotos-uv'
        }
      },
      unlockedByLock: 'cajon_cerrado'
    },
    {
      id: 'hoja_elena',
      title: 'Hoja con Nombre "Elena"',
      type: 'documento',
      icon: '📄',
      iconPath: 'assets/img/icons/Pruebas/icon_documentos.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P6 — Hoja Elena.png',
      shortDesc: 'Hoja en blanco en el cajón. Nada visible a simple vista.',
      fullDesc: 'Hoja de papel en blanco, tamaño cuartilla, en el fondo del cajón. No hay texto visible. Parece una hoja de relleno entre las fotografías. El detective la mira y la devuelve al cajón.',
      metadata: { fecha: '18-07-2026', fuente: 'Cajón abierto con combinación 8614', ref: 'DOC-05-006' },
      toolData: {
        'uv-light': {
          reveals: 'Bajo la luz UV aparece un nombre escrito en sangre seca casi invisible: "ELENA". En letra cursiva, cuidadosa, como si alguien la hubiera escrito con un dedo mojado en sangre hace años. El detective observa el nombre. "Habrá muchas Elenas en el mundo. ¿Qué relación tiene mi mujer con los papeles de mi tío?"',
          uvImagePath: 'assets/img/suspects/Caso5/Pruebas/P6-UV — Hoja Elena UV.png',
          contradictionId: null
        }
      },
      unlockedByLock: 'cajon_cerrado'
    },
    {
      id: 'sobre_dinero',
      title: 'Sobre con Dinero — Bolso de Inés',
      type: 'objeto',
      icon: '💰',
      iconPath: 'assets/img/icons/Pruebas/icon_dinero.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P7 — Sobre con Dinero.png',
      shortDesc: '5.000€ en efectivo. Membrete del Estudio Caracedo. Hallado en el bolso de Inés.',
      fullDesc: 'Sobre de papel manila, sin remitente escrito. Interior: 5.000€ en billetes de 50€ sin marcar. En el ángulo superior izquierdo, un membrete de sello en relieve: "Estudio Caracedo — Consultores y Representación Legal — Calle de Almagro 12, Madrid". El sobre estaba en el bolso lateral de Inés Quirós cuando fue retenida para declarar.',
      metadata: { fecha: '18-07-2026', fuente: 'Bolso de Inés Quirós', ref: 'OBJ-05-007' }
    },
    {
      id: 'movimientos_ines',
      title: 'Movimientos Bancarios de Inés',
      type: 'documento',
      icon: '💳',
      iconPath: 'assets/img/icons/Pruebas/icon_banco.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P8 — Movimientos Bancarios Inés.png',
      shortDesc: 'Ingresos mensuales de 5.000€ no justificados desde hace 6 meses.',
      fullDesc: 'Extracto bancario de la cuenta corriente de Inés Quirós, obtenido por orden judicial. Ingresos mensuales de exactamente 5.000€ en efectivo, iniciados hace 6 meses. Procedencia: siempre efectivo en ventanilla, en sucursales distintas de Madrid. No coincide con ninguna nómina o contrato registrado. El mes anterior al crimen: ingreso de 8.000€.',
      metadata: { fecha: '18-07-2026', fuente: 'Banco — orden judicial', ref: 'DOC-05-008' }
    },
    {
      id: 'calendario',
      title: 'Calendario con Día Marcado',
      type: 'objeto',
      icon: '📅',
      iconPath: 'assets/img/icons/Pruebas/icon_calendario.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P9 — Calendario.png',
      shortDesc: 'Calendario de pared. El 14 de agosto marcado en rojo.',
      fullDesc: 'Calendario de pared en la cocina. El mes de agosto tiene un único día marcado con un círculo en rojo: el 14. Sin nota adicional, sin nombre. El mismo marcado que aparecía en los escritorios de los casos 1 y 2.',
      metadata: { fecha: '18-07-2026', fuente: 'Cocina del piso de Hermes', ref: 'OBJ-05-009' }
    },
    {
      id: 'registro_portero',
      title: 'Registro del Portero',
      type: 'documento',
      icon: '🏠',
      iconPath: 'assets/img/icons/Pruebas/icon_registro_porteria.png',
      imagePath: 'assets/img/suspects/Caso5/Pruebas/P10 — Registro Portero.png',
      shortDesc: 'Inés Quirós: entrada 9:15, salida 9:47. Ningún otro visitante esa mañana.',
      fullDesc: 'El portero del bloque lleva un registro manuscrito de visitas a los pisos del 3º. El martes: Inés Quirós a las 9:15 sube al 3ºB, sale a las 9:47. Aurelia Lobera llamó al portero a las 11:30 preocupada por Hermes. Damián Mora no figura. Roque Vellido figura el lunes a las 16:00, salida 17:20.',
      metadata: { fecha: '18-07-2026', fuente: 'Portero del bloque calle Hermosilla', ref: 'DOC-05-010' }
    }
  ],

  contradictions: [
    {
      id: 'c05-ines-negacion',
      suspectId: 'ines',
      questionIds: ['ines-c1', 'ines-c2'],
      evidenceId: 'forense',
      statement: 'Inés Quirós declara que solo administró la inyección de cortisona habitual y que Hermes estaba dormido cuando salió.',
      proof: 'El forense certifica que la marca adicional es de una aguja distinta a la de cortisona. El nivel de barbitúrico en sangre coincide con la ventana en que Inés estaba en el piso.',
      suspicionBonus: 30,
      isRedHerring: false
    },
    {
      id: 'c05-ines-sobre',
      suspectId: 'ines',
      questionIds: ['ines-v3'],
      evidenceId: 'sobre_dinero',
      statement: 'Inés Quirós niega recibir pagos fuera de su nómina habitual.',
      proof: 'Se ha hallado un sobre con 5.000€ en efectivo en su bolso con membrete del Estudio Caracedo. Los movimientos bancarios confirman 5.000€ mensuales durante 6 meses, siempre en efectivo.',
      suspicionBonus: 35,
      isRedHerring: false
    },
    {
      id: 'c05-cajon-uv',
      suspectId: 'ines',
      questionIds: ['ines-c1'],
      evidenceId: 'cajon_cerrado',
      statement: 'Inés niega saber nada del cajón ni de papeles de familia.',
      proof: 'La combinación 8614 —visible solo bajo luz UV grabada en la madera— abre el cajón con los documentos que Hermes iba a entregar al detective. El cajón contiene pruebas directas del crimen del 86 que alguien quería destruir.',
      suspicionBonus: 25,
      isRedHerring: false
    },
    {
      id: 'c05-fotos-uv',
      suspectId: 'ines',
      questionIds: ['ines-v2'],
      evidenceId: 'fotos_carmen',
      statement: 'Inés dice que Hermes recordaba "cosas viejas sin sentido para ella".',
      proof: 'Las fotos de Carmen Lobera con sangre seca revelan bajo UV que alguien las manipuló con manos ensangrentadas. Estas fotos eran parte del material que Hermes quería usar para reabrir el caso del 86. Alguien había revisado el cajón antes que el detective.',
      suspicionBonus: 20,
      isRedHerring: false
    }
  ],

  // Mecánica de cómplice: ejecutora + cerebro desconocido
  solution: {
    who:  'ines',
    who2: 'desconocido-bufete',
    how:  'inyeccion',
    why:  'silenciar_hermes'
  },

  // Opciones del segundo culpable (el cerebro aún no identificado)
  who2Options: [
    { id: 'desconocido-bufete',  name: 'Desconocido — bufete legal relacionado', role: 'Cerebro — pagó a la ejecutora' },
    { id: 'damian',              name: 'Damián Mora',    role: 'Sobrino — heredero' },
    { id: 'aurelia',             name: 'Aurelia Lobera', role: 'Vecina' },
    { id: 'roque',               name: 'Roque Vellido',  role: 'Antiguo vecino' }
  ],

  howOptions: [
    { id: 'inyeccion',           text: 'Inyección de barbitúrico de alta concentración' },
    { id: 'envenenamiento_oral', text: 'Envenenamiento oral mezclado con medicación' },
    { id: 'asfixia',             text: 'Asfixia mecánica simulando muerte natural' },
    { id: 'muerte_natural',      text: 'Muerte natural — fallo cardíaco' }
  ],

  whyOptions: [
    { id: 'silenciar_hermes',    text: 'Silenciar a Hermes antes de que reabriera el caso del 86 con sus documentos' },
    { id: 'herencia',            text: 'Cobrar la herencia del piso de Salamanca' },
    { id: 'venganza_familia',    text: 'Venganza personal por agravios de la familia Mora' },
    { id: 'contrato_laboral',    text: 'Conflicto con Hermes por el contrato de cuidados' }
  ],

  correctExplanation: 'Inés Quirós, auxiliar de geriatría contratada por el Estudio Caracedo como ejecutora, aprovechó su visita rutinaria del martes para inyectar a Hermes Mora un barbitúrico de alta concentración en el antebrazo izquierdo, distinto a su aguja habitual de cortisona. Hermes llevaba semanas recordando, gracias a su demencia paradójica, los detalles del crimen del 86 y había preparado documentos en el cajón —abierto con la combinación 8614— para entregárselos al detective. El Estudio Caracedo, bufete histórico vinculado al encubrimiento del 86, contrató a Inés para silenciarlo. El sobre con 5.000€ y sus movimientos bancarios la delatan. El cerebro del encargo —el bufete— permanece en la sombra.',

  wrongExplanation: 'La ejecutora era Inés Quirós, auxiliar de geriatría que aprovechó su visita del martes para inyectar a Hermes un barbitúrico letal. El Estudio Caracedo le pagaba 5.000€ mensuales para vigilar al anciano y actuar cuando fuera necesario. Los documentos del cajón (combinación 8614, deducida de "agosto 1986, calle Goya 14") contenían pruebas del crimen del 86 que el bufete quería destruir. La luz UV revela la combinación del cajón, la sangre en las fotos de Carmen y el nombre "Elena" escrito en una hoja en blanco.',

  // ═══════════════════════════════════════════════════
  // CENA EN CASA — Tras resolver el caso
  // ═══════════════════════════════════════════════════
  cena: {
    apertura: 'Has tardado. Son las dos de la mañana. [pausa] ¿Has comido algo?',

    repasoPool: [
      {
        id: 'c05_tio',
        linea: {
          default: 'El muerto era un pariente tuyo, ¿no? Un tío segundo. ¿Lo conocías?',
          acusoIncorrecto: 'El caso de tu tío. No lo resolviste bien, ¿verdad? ¿Cómo estás?'
        },
        respuestas: [
          { id: 'a', texto: 'No le recordaba. Nos separaban demasiados años y demasiada distancia.',
            efecto: { sinceridad: +6, lucidez: -4 },
            replica: 'Qué triste eso. La familia que no se conoce.' },
          { id: 'b', texto: 'Le conocí hoy, cuando ya estaba muerto.',
            efecto: { sinceridad: +10, lucidez: -6 },
            replica: '[larga pausa] Ven. Come algo.' },
          { id: 'c', texto: 'No quiero hablar del caso esta noche.',
            efecto: { sinceridad: -8 },
            replica: 'Está bien. Pero tienes que comer algo de todas formas.' }
        ]
      },
      {
        id: 'c05_cajon',
        linea: {
          default: '¿Encontraste algo importante en ese piso? Se te ve en la cara que sí.',
          acusoIncorrecto: '¿Qué encontraste en el piso que te tiene así?'
        },
        respuestas: [
          { id: 'a', texto: 'Fotos de mi padre. Y de mi madre. Fotos que no había visto nunca.',
            efecto: { sinceridad: +14, flags: ['fotos_en_cajon'] },
            replica: '...¿de tu madre? [silencio] Cuéntame cuando estés listo.' },
          { id: 'b', texto: 'Documentos viejos. Nada que importe ahora.',
            efecto: { sinceridad: -8, flags: ['cajon_prohibido'] },
            replica: 'Te pones rígido cuando mientes, ¿lo sabes?' },
          { id: 'c', texto: 'Una carta sin terminar para mí. No la he terminado de leer.',
            efecto: { sinceridad: +10, lucidez: -5, flags: ['fotos_en_cajon'] },
            replica: 'Cuando la leas, si quieres... aquí estoy.' }
        ]
      },
      {
        id: 'c05_lucidez',
        linea: {
          default: 'No me estás mirando a los ojos desde que llegaste. ¿Qué está pasando?',
          acusoIncorrecto: '¿Qué está pasando de verdad? Llevas meses así.'
        },
        respuestas: [
          { id: 'a', texto: 'Es un caso duro. Me afecta más de lo que debería.',
            efecto: { sinceridad: +6, lucidez: -5 },
            replica: 'Claro que te afecta. Es tu familia.' },
          { id: 'b', texto: 'Estoy bien. Solo cansado.',
            efecto: { sinceridad: -6, lucidez: -8 },
            replica: '[no responde, le sirve más vino sin mirarle]' },
          { id: 'c', texto: 'No sé. Hay cosas que no entiendo aún sobre mi familia.',
            efecto: { sinceridad: +10, integridad: +4 },
            replica: 'Eso es lo más honesto que me has dicho en semanas.' }
        ]
      }
    ],

    ganchoMemoria: {
      id: 'c05_memoria_nombre_elena',
      linea: 'Oye... ¿alguna vez te he preguntado cómo nos conocimos tú y yo? De verdad, desde el principio.',
      respuestas: [
        { id: 'a', texto: 'En el instituto. Tú dabas clase de literatura. Yo andaba siempre con el bloc de notas.',
          efecto: { sinceridad: +8, flags: ['recuerda_elena_bien'] },
          replica: 'Sí. [sonríe] Y siempre llegabas tarde.' },
        { id: 'b', texto: 'No sé por qué preguntas eso ahora.',
          efecto: { sinceridad: -6, lucidez: -5, flags: ['bloquea_elena'] },
          replica: 'Por nada. Olvidalo.' },
        { id: 'c', texto: '[silencio largo] A veces no recuerdo bien algunas cosas.',
          efecto: { lucidez: -10, flags: ['lucidez_baja'] },
          replica: '[se levanta y recoge los platos sin decir nada más]' }
      ]
    }
  }
};

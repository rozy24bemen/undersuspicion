/**
 * CASO 08: "La última cena"
 * Acto III — Final. Caso culminante.
 *
 * Víctima: Elena Solana (35). El cuerpo es el de la "mujer del detective".
 * El forense dice que lleva meses, no horas. El detective lo niega.
 *
 * Sospechosos visibles: Felipe Saiz (vecino), Octavio Brán (conserje).
 * Sospechoso siempre acusable: EL PROPIO DETECTIVE — sin gate de ejes ni
 *                    flags; aparece desde el principio como cuarta opción
 *                    en el dropdown de Resolución. La decisión moral es del
 *                    jugador, no una puerta cerrada por mecánicas.
 *
 * Mecánica: las tres herramientas (UV + teléfono + lectura de pistas falsas)
 * son necesarias en combinación. Sembrados de los 7 casos anteriores se
 * recogen aquí. La verdad sobre el padre del detective (inocente del crimen
 * del 86) ha sido revelada en el caso 7 por Manuel Ródenas.
 *
 * Cuatro finales (matriz 2x2 — acusación × métricas con Elena):
 *   - A. Despedida (entrega + buenas) — revelación completa del lore.
 *   - B. Cobardía creepy (entrega + malas) — entrega como huida del terror.
 *   - C. Te pillan igual (no entrega + buenas) — prisión permanente.
 *   - D. No pudiste aguantarlo (no entrega + malas) — suicidio.
 *
 * Ver docs/HISTORIA-MODO-HISTORIA.md (Acto III) y docs/METAARCO-CENAS.md (sección 8).
 */
var US = US || {};
US.CASES = US.CASES || {};

US.CASES['caso-08'] = {
  id: 'caso-08',
  title: 'La última cena',
  subtitle: 'Caso Nº 2026-1109',
  intro: 'Aviso de Beltrán en plena noche. Cuerpo de mujer en un piso de la calle de Hermosilla. La dirección le suena al detective antes de leerla del todo: es su propia casa. Cuando llega, sus compañeros le miran extraño y alguno le pide en voz baja que se aparte. No es un caso que le toca: es el caso por el que ha venido el juego. En el salón, sobre el sofá, el cuerpo de Elena Solana. Sobre la mesa, dos copas de vino servidas. En la pared, el calendario marcado en rojo. Un olor que el detective lleva años sin reconocer.',

  victim: {
    name: 'Elena Solana',
    age: 35,
    occupation: 'Profesora de literatura — Instituto Cervantes (Madrid)',
    portrait: 'assets/img/suspects/Caso8/Retrato_Victima_caso8.png'
  },

  scene: {
    location: 'Salón del piso — Calle de Hermosilla, Salamanca (Madrid)',
    date: '9 de noviembre de 2026',
    timeOfDeath: 'El forense dice "hace meses". El detective insiste en "esta noche, entre las 21 y las 23".',
    cssClass: 'scene-caso8'
  },

  // Todas las herramientas habilitadas: el caso lo exige.
  uvLightAvailable: true,

  // ─────────────────────────────────────────────────────────────────
  // SIN gateUnlock: los cuatro sospechosos (Felipe, Octavio, detective)
  // aparecen siempre en el dropdown de Resolución. La acusación al
  // detective es decisión moral del jugador, no condicional a ejes ni
  // flags. Las métricas de las cenas con Elena modulan el TIPO de final
  // (matriz 2x2 evaluada en DinnerPanel._pickEnding), no el acceso al
  // cuarto sospechoso. Ver docs/PROMPTS-ACTO3.md § FINALES.
  // ─────────────────────────────────────────────────────────────────

  suspects: [
    // ──────────────── FELIPE SAIZ ────────────────
    {
      id: 'felipe_saiz',
      name: 'Felipe Saiz',
      age: 46,
      role: 'Vecino del rellano del detective',
      description: 'Hombre tímido, mira al suelo. Vive enfrente desde hace ocho años. Recuerda haber oído "discusiones violentas" en el piso del detective durante meses, hasta una noche en que cesaron. No quiere meterse, pero quiere decir lo que sabe. Su coartada es una alarma doméstica.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso8/Sospechosos/FelipeSaiz-Neutral.png',
        talking:  'assets/img/suspects/Caso8/Sospechosos/FelipeSaiz-Pensativo.png',
        nervous:  'assets/img/suspects/Caso8/Sospechosos/FelipeSaiz-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'felipe-v1',
            text: '¿Cuánto tiempo lleva siendo vecino del piso?',
            response: '"Ocho años, inspector. Nos saludábamos en el ascensor. Mi mujer y la señora Solana hablaban a veces en el portal. Mi mujer la tenía aprecio."',
            pressureCost: 6
          },
          {
            id: 'felipe-v2',
            text: '¿Cuándo fue la última vez que vio a Elena Solana?',
            response: '"[pausa muy larga, mira al inspector con incomodidad] Hace tres años, inspector. En septiembre del 23. La vi salir con la bolsa de la compra una mañana. Después... ya no la vi más. Pensé que se habrían divorciado ustedes. Yo... yo no quería preguntar."',
            pressureCost: 16
          },
          {
            id: 'felipe-v3',
            text: '¿Oyó algo aquella noche del 9 de septiembre de 2023?',
            response: '"[traga saliva] Discusiones. Llevaban meses. Esa noche fue distinta. Hubo un golpe seco y luego silencio durante muchas horas. Yo... no llamé a la policía. Pensé que era cosa de matrimonio. Pensé que me equivocaba. He vivido con eso tres años."',
            pressureCost: 20
          }
        ],
        coartada: [
          {
            id: 'felipe-c1',
            text: '¿Dónde estaba esta noche entre las 21 y las 23?',
            response: '"En mi casa, en el rellano de enfrente. Tengo una alarma doméstica que registra apertura de puerta. No he salido de mi piso en toda la tarde. Pueden comprobarlo con la empresa de seguridad."',
            pressureCost: 6
          },
          {
            id: 'felipe-c2',
            text: '¿Por qué denunciar ahora y no entonces?',
            response: '"[silencio largo] Porque alguien tiene que decirlo. Llevo tres años cruzándome con usted en el ascensor y saludándole como si nada. Y usted siempre solo. Siempre solo. Hoy me han llamado los suyos y por primera vez he podido hablar."',
            pressureCost: 18
          },
          {
            id: 'felipe-c3',
            text: '¿Está acusándome de algo, señor Saiz?',
            response: '"[le mira directamente, ya sin miedo] No le acuso de nada, inspector. Solo digo lo que vi y lo que oí. Lo demás lo deciden ustedes."',
            pressureCost: 22
          }
        ]
      },
      evidenceResponses: {
        'forense_elena':     { response: '"¿Meses? Eso es lo que yo digo. Lleva meses sin verse en este edificio."', pressureCost: 12 },
        'dos_copas':         { response: '"Dos copas. Siempre vi entrar a una persona, inspector. Solo una."', pressureCost: 14 },
        'calendario_rojo':   { response: '"Ese calendario lleva años colgado igual. Lo veo cuando se abre la puerta del rellano. Siempre marcado en el mismo día."', pressureCost: 10 },
        'grabadora':         { response: '"Esa voz... es usted, ¿no? Es usted hablándole a ella como si estuviera ahí."', pressureCost: 16 },
        'fotos_cajon':       { response: '"Las fotos de su boda. Las teníamos también nosotros. Mi mujer guarda una de ese día, cuando bajaron al portal."', pressureCost: 10 },
        'mancha_sofa':       { response: '"Yo no entro en su salón, inspector. Pero si la luz UV dice que la sangre es vieja, la sangre es vieja."', pressureCost: 12 },
        'alarma_vecino':     { response: '"La alarma confirma que no he salido. La empresa puede certificarlo en cinco minutos."', pressureCost: 5 },
        'olor_descomposicion': { response: '"Lo he olido en el rellano alguna vez. No quería pensar lo que pensaba. Lo siento."', pressureCost: 14 },
        'excedencia_laboral': { response: '"Recuerdo aquel septiembre. Usted estuvo cuatro meses sin pisar la calle. Cuando volvió, otro hombre. Nos dijo a mi mujer y a mí en el ascensor que la señora se había ido al sur. Le dimos el pésame por el divorcio y no preguntamos más. Cuántas veces habrá maldito uno la educación, inspector."', pressureCost: 16 }
      }
    },

    // ──────────────── OCTAVIO BRÁN ────────────────
    {
      id: 'octavio_bran',
      name: 'Octavio Brán',
      age: 58,
      role: 'Conserje del bloque desde hace 22 años',
      description: 'Hombre cuadrado, manos grandes, mirada que no aguanta la del detective. Lleva 22 años atendiendo el bloque. Sabe quién entra y quién sale, quién recoge cartas y quién no. Lo que cargó la mañana del 9 de septiembre de 2023 al sótano del bloque pesa más que cualquier mueble.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso8/Sospechosos/OctavioBran-Neutral.png',
        talking:  'assets/img/suspects/Caso8/Sospechosos/OctavioBran-Pensativo.png',
        nervous:  'assets/img/suspects/Caso8/Sospechosos/OctavioBran-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'octavio-v1',
            text: '¿Cuánto tiempo lleva como conserje del bloque?',
            response: '"Veintidós años, inspector. He visto entrar y salir a todos los inquilinos. A su mujer también la vi entrar muchas veces. Y a usted. A los dos."',
            pressureCost: 6
          },
          {
            id: 'octavio-v2',
            text: '¿Recuerda la mañana del 9 de septiembre de 2023?',
            response: '"[la mirada cambia, baja al suelo] Sí, inspector. La recuerdo. Llovía. Usted me llamó al telefonillo a las seis de la mañana. Me pidió ayuda para bajar... algo al sótano. Yo subí. [silencio muy largo] Le ayudé. Que Dios me perdone. Le ayudé."',
            pressureCost: 24
          },
          {
            id: 'octavio-v3',
            text: '¿Por qué me ayudó, señor Brán?',
            response: '"Porque usted lloraba como un niño y me dijo que se le había escapado. Yo había perdido un hijo dos años antes y entendía a un hombre que perdía algo y no podía con ello. Pero entendí mal, inspector. Aquello no fue lo que usted me dijo. Llevo tres años pensándolo."',
            pressureCost: 26
          }
        ],
        coartada: [
          {
            id: 'octavio-c1',
            text: '¿Dónde estaba esta noche entre las 21 y las 23?',
            response: '"En la garita del portal. Hasta las 22. Después en mi piso del primero. No me he movido."',
            pressureCost: 8
          },
          {
            id: 'octavio-c2',
            text: '¿Puede llevarnos al sótano del bloque ahora?',
            response: '"[mira al detective, asiente sin palabras]. Sí, inspector. Puedo. Llevo tres años esperando que alguien me lo pida. Si quiere, vamos."',
            pressureCost: 28
          },
          {
            id: 'octavio-c3',
            text: '¿Sabe quién mató a Elena Solana?',
            response: '"[silencio] Yo solo le ayudé a bajarla. No estuve cuando pasó. Y lo que pasó arriba esa noche... [pausa] No lo sé, inspector. Pero usted estaba solo en el piso con ella. Yo solo se lo digo porque tengo que decirlo."',
            pressureCost: 30
          }
        ]
      },
      evidenceResponses: {
        'forense_elena':     { response: '"El forense dice meses. Yo bajé el cuerpo hace tres años. Las dos cosas pueden ser verdad si lo piensa, inspector."', pressureCost: 16 },
        'dos_copas':         { response: '"En este bloque solo una persona ha entrado a ese piso en tres años, inspector. Usted. Las dos copas las llena usted."', pressureCost: 20 },
        'calendario_rojo':   { response: '"Ese calendario es del 86. Mi madre tenía uno igual. El día rojo es el del día en que su padre se mató, ¿verdad? Mi mujer me contó esa historia hace años. Una pena terrible para un niño tan pequeño."', pressureCost: 16 },
        'grabadora':         { response: '"Esa grabadora la trajo usted del trabajo hace un año. Se la dejaba encendida en la mesa. La voz es la suya, inspector. Hablándole a una mujer que no está."', pressureCost: 22 },
        'fotos_cajon':       { response: '"Esas fotos las tenían ustedes en el comedor. Cuando le ayudé a... a aquello, las quité de la pared y las puse en el cajón. Era lo único que sabía hacer."', pressureCost: 24 },
        'mancha_sofa':       { response: '"En el sofá. Lo limpiamos juntos, ¿se acuerda? Tres veces. Aún así la luz UV lo dice. La sangre no se va."', pressureCost: 22 },
        'alarma_vecino':     { response: '"Felipe es buen hombre. Si dice que lo oyó, lo oyó."', pressureCost: 10 },
        'olor_descomposicion': { response: '"Llevo tres años oliéndolo cada vez que paso por su rellano. Pensé que me lo imaginaba."', pressureCost: 18 },
        'excedencia_laboral': { response: '"Cuatro meses sin verle. Cuando volvió, dijo que la señora se había ido a Cádiz. Yo sabía que no, inspector. Lo sabía. Pero ya le había ayudado a bajar las cosas y guardé silencio. Eso me ha pesado más que cualquier mueble."', pressureCost: 20 }
      }
    },

    // ──────────────── EL PROPIO DETECTIVE ────────────────
    // Siempre acusable: el dropdown lo muestra desde el principio. La
    // decisión de acusarse o no es del jugador, no condicional a ejes.
    {
      id: 'detective',
      name: 'Roberto Mora',
      age: 41,
      role: 'Inspector de Homicidios — el que está investigando',
      description: 'Tú. El detective. La silueta sin rostro porque hace años que no se mira al espejo. Cuando los testigos le miran a los ojos, le hablan a él directamente. Cuando él mira las pruebas, las pruebas hablan de él. La cuarta tarjeta solo está disponible si la lucidez y la integridad acumuladas en las cenas lo permiten.',
      isGuilty: true,
      portraits: { neutral: '', talking: '', nervous: '' },
      questions: {
        vinculo: [
          {
            id: 'detective-v1',
            text: '¿Cuándo fue la última vez que vio a Elena con vida?',
            response: '"[silencio muy largo] La veo todas las noches. Cenamos. Me pregunta por el trabajo. Yo le contesto. Le sirvo vino. Le contesto otra vez. [pausa] El forense dice que lleva meses muerta. No puede ser. La vi anoche."',
            pressureCost: 26
          },
          {
            id: 'detective-v2',
            text: '¿Recuerda el 9 de septiembre de 2023?',
            response: '"[silencio] Recuerdo una discusión. Recuerdo haber bebido. Recuerdo que me dolían las manos al día siguiente y no sabía por qué. Recuerdo haber llamado a Octavio temprano. No recuerdo lo del medio. Llevo tres años con un hueco en la cabeza ese día."',
            pressureCost: 30
          },
          {
            id: 'detective-v3',
            text: '¿Por qué Elena no aparece en ninguna cámara desde hace tres años?',
            response: '"[silencio enorme. El detective se sienta frente a su propio reflejo en el espejo del recibidor] Porque no está, ¿verdad? Porque ya no está. Llevo tres años haciéndome la pregunta y dándome la respuesta yo solo."',
            pressureCost: 36
          }
        ],
        coartada: [
          {
            id: 'detective-c1',
            text: '¿Dónde estaba esta noche entre las 21 y las 23?',
            response: '"En casa. Cenando con ella. Como cada noche desde hace tres años. Si la cámara de la escalera mostrara mi entrada, mostraría solo a un hombre. La cena la pongo yo. Las dos copas las lleno yo."',
            pressureCost: 28
          },
          {
            id: 'detective-c2',
            text: '¿Bebió usted aquella noche del 9 de septiembre de 2023?',
            response: '"Más de la cuenta. Mucho más. Es la única cosa que recuerdo con nitidez. Vacié media botella de licor de Cadaqués mientras le gritaba. Después... después está el hueco."',
            pressureCost: 32
          },
          {
            id: 'detective-c3',
            text: '¿Quién mató a Elena Solana?',
            response: '"[mira la silueta del espejo] Yo. Lo dije por primera vez en voz alta. Yo maté a mi mujer. No recuerdo cómo. Pero fui yo. Es la única explicación que cuadra con todo lo que he encontrado en este piso esta noche."',
            pressureCost: 50
          }
        ]
      },
      evidenceResponses: {
        'forense_elena':     { response: '"Octaviano nunca se equivoca con las horas. Lo he dicho mil veces. Si dice meses, son meses. Yo lo sabía."', pressureCost: 22 },
        'dos_copas':         { response: '"Las llené yo. Las dos. Cada noche. Le contaba el día y le respondía con la voz que recordaba."', pressureCost: 24 },
        'calendario_rojo':   { response: '"El 14 de agosto. El día en que mi padre se metió en el coche en el garaje. Yo tenía once años. Llevaba toda la vida creyendo que se mató por culpa de algo que hizo. Ayer un viejo me dijo que no. Que se mató porque no podía con la vida sin mi madre y conmigo. Esa fecha la marqué yo. No recuerdo cuándo."', pressureCost: 26 },
        'grabadora':         { response: '"La grabadora la encendí yo. Hace meses. Me dejé un mensaje a mí mismo y luego lo olvidé. Esa voz suplicándome que me acordara es la mía."', pressureCost: 30 },
        'fotos_cajon':       { response: '"En la foto de la boda hay una sombra detrás de Elena. Bajo UV se ve quién era. Era yo. Con algo en la mano. Aquella foto la mandé revelar yo mismo aquel mes."', pressureCost: 30 },
        'mancha_sofa':       { response: '"En el sofá. Donde la dejé. Llevamos tres años limpiando lo que no se limpia."', pressureCost: 30 },
        'alarma_vecino':     { response: '"Felipe oyó lo que ocurrió. Le pido perdón por haberle dejado vivir tres años con ese silencio encima."', pressureCost: 18 },
        'olor_descomposicion': { response: '"Lo bloqueé. Eso es lo que hace la mente con lo que no puede aguantar. Lo bloquea."', pressureCost: 24 },
        'excedencia_laboral': { response: '"Pedí cuatro meses. Cuando volví dije a Beltrán que Elena se había ido a Cádiz. Nadie preguntó. Nadie subió a casa. La asistenta la despedí esa misma semana. He vivido tres años en un piso sin que nadie entre. Esa es la única razón por la que el cuerpo sigue donde está."', pressureCost: 32 }
      }
    }
  ],

  evidence: [
    {
      id: 'forense_elena',
      title: 'Informe Forense de Don Octaviano Vidal',
      type: 'documento',
      icon: '📋',
      iconPath: 'assets/img/icons/Pruebas/icon_informe.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P1 — Informe Forense.png',
      shortDesc: 'El cuerpo lleva meses, no horas. Don Octaviano firma con nota: "este cuerpo lleva muerto entre dos y tres años".',
      fullDesc: 'Don Octaviano Vidal, forense del distrito Centro, certifica que el cuerpo de Elena Solana presenta signos de momificación parcial avanzada compatible con un periodo de fallecimiento de "no menos de 24 meses, probablemente más de 30". El informe añade en nota manuscrita: "INSPECTOR MORA: lo siento. Lo digo lo más claro que puedo. Este cuerpo no es de esta noche. Yo no firmo otra cosa. — O.V."',
      metadata: { fecha: '09-11-2026', fuente: 'Forense Don Octaviano Vidal', ref: 'FOR-08-001' }
    },
    {
      id: 'dos_copas',
      title: 'Dos Copas de Vino en la Mesa',
      type: 'objeto',
      icon: '🍷',
      iconPath: 'assets/img/icons/Pruebas/icon_copa.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P2 — Dos Copas.png',
      shortDesc: 'Mesa con dos copas servidas. Una con huellas de Elena del 2023. La otra con huellas recientes del detective.',
      fullDesc: 'La mesa del salón está puesta para dos personas. Dos copas idénticas de vino tinto. La copa de la izquierda tiene huellas dactilares de Elena Solana, datadas mediante restos orgánicos de antes de 2023, sin nuevas huellas posteriores. La copa de la derecha tiene huellas recientes del detective. El vino en ambas es del mismo lote y de hace una semana. Quien sirve las dos copas es el detective. Quien bebe ambas, también.',
      metadata: { fecha: '09-11-2026', fuente: 'Mesa del salón del piso', ref: 'OBJ-08-002' }
    },
    {
      id: 'calendario_rojo',
      title: 'Calendario de Pared Marcado en Rojo',
      type: 'objeto',
      icon: '📅',
      iconPath: 'assets/img/icons/Pruebas/icon_calendario.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P3 — Calendario.png',
      shortDesc: 'Calendario del 86 colgado en la pared. El 14 de agosto marcado en rojo. Bajo UV: la palabra "perdón" en sangre seca.',
      fullDesc: 'Calendario antiguo, año 1986, colgado en la pared del salón. El 14 de agosto está marcado con un círculo rojo de tinta gruesa. La fecha es el aniversario del suicidio del padre del detective (Comisario Esteban Mora, 14 de agosto de 1988, dos años después de la muerte de la mujer en el parto). Bajo luz UV, sobre la propia fecha y atravesando el círculo rojo, aparece escrita en sangre seca y oscurecida por el tiempo la palabra "perdón". La caligrafía es la del propio detective.',
      metadata: { fecha: '09-11-2026', fuente: 'Pared del salón — junto a la ventana', ref: 'OBJ-08-003' },
      toolData: {
        'uv-light': {
          reveals: 'Bajo UV, sobre el día marcado en rojo, aparece escrita en sangre seca la palabra "perdón". La caligrafía es la del propio detective. Llevaba años escrita ahí, invisible a simple vista.'
        }
      }
    },
    {
      id: 'grabadora',
      title: 'Grabadora Antigua sobre la Mesa',
      type: 'objeto',
      icon: '🎙️',
      iconPath: 'assets/img/icons/Pruebas/icon_grabadora.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P4 — Grabadora.png',
      shortDesc: 'Grabadora encendida sin cinta visible. Al reproducirse: la voz del propio detective hablando solo a "Elena".',
      fullDesc: 'Grabadora analógica marca Sanyo, modelo de los años 90. Está encendida con cinta interna. Al reproducir la última grabación se oye la voz del propio detective, grabada hace meses, hablando solo en este mismo salón: "Ya. Otro día más. Mañana hablamos, Elena. Mañana hablamos. Yo te quiero. Te quiero mucho. Mañana hablamos." La grabación se interrumpe sola. No hay segunda voz en la cinta.',
      metadata: { fecha: '09-11-2026', fuente: 'Mesa del salón — junto al cenicero', ref: 'OBJ-08-004' }
    },
    {
      id: 'fotos_cajon',
      title: 'Fotos del Cajón del Recibidor',
      type: 'objeto',
      icon: '🖼️',
      iconPath: 'assets/img/icons/Pruebas/icon_fotos.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P5 — Fotos Cajon.png',
      shortDesc: 'Fotos de boda guardadas en el cajón. Bajo UV en la foto principal: una sombra detrás de Elena con un objeto en la mano.',
      fullDesc: 'Las mismas fotos del caso 5 (las del cajón del detective), guardadas ahora en el cajón del recibidor. Tres fotos de la boda de Roberto Mora y Elena Solana (2014, San Sebastián). La foto principal muestra a la novia en primer plano y al detective en un segundo plano más oscuro. Bajo luz UV, en la foto principal, detrás de Elena, se distingue una segunda silueta más cercana y más nítida que la del propio novio: es el detective tres años después, sosteniendo en la mano algo cilíndrico. La fotografía ha sido manipulada con tinta UV reciente. La manipuló él mismo, sin recordarlo, hace meses.',
      metadata: { fecha: '09-11-2026', fuente: 'Cajón del recibidor del propio detective', ref: 'OBJ-08-005' },
      toolData: {
        'uv-light': {
          reveals: 'Bajo UV, en la foto de boda, detrás de Elena aparece nítida la silueta del propio detective con un objeto cilíndrico en la mano (la botella de licor de Cadaqués vacía). La manipulación de la foto la hizo él mismo con tinta UV hace meses, en uno de sus episodios. No lo recuerda hasta verlo ahora.'
        }
      }
    },
    {
      id: 'mancha_sofa',
      title: 'Sofá del Salón — Manchas Bajo UV',
      type: 'objeto',
      icon: '🛋️',
      iconPath: 'assets/img/icons/Pruebas/icon_sofa.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P6 — Sofa.png',
      shortDesc: 'Sofá donde está el cuerpo. Bajo UV: manchas de sangre antiguas, de hace años, no de hoy.',
      fullDesc: 'El sofá del salón, donde reposa el cuerpo "encontrado" esta noche. A simple vista, limpio. Bajo luz UV, todo el respaldo y el cojín del lado izquierdo presentan manchas de sangre antigua, fijadas en la tela desde hace al menos dos años, parcialmente lavadas tres veces (se aprecian capas distintas de limpieza). La sangre coincide con la del cuerpo. El cuerpo no llegó esta noche al sofá. Lleva en el sofá desde la primera mancha.',
      metadata: { fecha: '09-11-2026', fuente: 'Sofá del salón', ref: 'OBJ-08-006' },
      toolData: {
        'uv-light': {
          reveals: 'Bajo UV, el sofá entero está manchado de sangre fijada desde hace dos o tres años, con tres capas de limpieza superpuestas. La sangre coincide con la del cuerpo. El cuerpo lleva en este sofá desde el principio.'
        }
      }
    },
    {
      id: 'alarma_vecino',
      title: 'Registro de Alarma Doméstica de Felipe Saiz',
      type: 'documento',
      icon: '🚨',
      iconPath: 'assets/img/icons/Pruebas/icon_alarma.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P7 — Alarma Vecino.png',
      shortDesc: 'La alarma del vecino no se ha activado en toda la tarde. Felipe no ha salido del piso.',
      fullDesc: 'Registro electrónico de la empresa de seguridad ProSec para el piso de Felipe Saiz (rellano enfrente del detective). Última apertura de puerta a las 18:42h (entrada de Felipe). No hay nuevas activaciones hasta el aviso a la policía (23:11h). Felipe Saiz no ha salido de su domicilio en toda la tarde-noche. Coartada incontrovertible.',
      metadata: { fecha: '09-11-2026', fuente: 'Empresa ProSec — registro automático', ref: 'DOC-08-007' }
    },
    {
      id: 'olor_descomposicion',
      title: 'Análisis del Aire del Salón',
      type: 'documento',
      icon: '🌫️',
      iconPath: 'assets/img/icons/Pruebas/icon_aire.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P8 — Aire.png',
      shortDesc: 'Análisis del aire: descomposición orgánica vieja. Compatible con un cuerpo presente desde hace 24+ meses.',
      fullDesc: 'Análisis ambiental rápido encargado por Don Octaviano. Marcadores de descomposición de tejido humano en concentraciones bajas pero estables, compatibles con un cuerpo presente en la habitación durante un periodo superior a 24 meses. La ventilación del piso, encendida los últimos años con regularidad, ha mitigado el olor pero no lo ha eliminado. El detective ha dejado de percibirlo. Felipe Saiz declara haberlo notado "alguna vez en el rellano".',
      metadata: { fecha: '09-11-2026', fuente: 'Análisis ambiental — equipo forense', ref: 'DOC-08-008' }
    },
    {
      id: 'excedencia_laboral',
      title: 'Expediente Laboral del Inspector Mora',
      type: 'documento',
      icon: '📂',
      iconPath: 'assets/img/icons/Pruebas/icon_carpeta.png',
      imagePath: 'assets/img/suspects/Caso8/Pruebas/P9 — Excedencia Laboral.png',
      shortDesc: 'Excedencia voluntaria entre sep 2023 y ene 2024. Reincorporación con la versión: "Elena se ha ido a vivir con su madre a Cádiz".',
      fullDesc: 'Expediente de Recursos Humanos del Cuerpo Nacional de Policía sobre el inspector Roberto Mora. Solicitud de excedencia voluntaria firmada el 10 de septiembre de 2023 (día siguiente al crimen), motivo declarado: "asuntos personales graves". Aprobada sin más preguntas. Reincorporación el 15 de enero de 2024 con una nota del propio Mora ante el comisario Beltrán: "Elena se ha ido a vivir con su madre a Cádiz. Prefiero no hablar del tema. Estoy listo para volver al trabajo." Desde esa fecha: cero visitas al piso de Hermosilla por parte de compañeros, cero llamadas familiares devueltas, cero contactos sociales. Nadie volvió a preguntar por Elena. Octavio Brán (conserje) declara que la asistenta del piso fue despedida la misma semana del 9 de septiembre de 2023. El aislamiento social del detective ha sido total y deliberado. Por eso, durante tres años, nadie pudo certificar nada: nadie supo nada.',
      metadata: { fecha: '09-11-2026', fuente: 'Recursos Humanos CNP — expediente personal', ref: 'DOC-08-009' }
    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // NÚMEROS DE TELÉFONO descubribles con el teléfono de escritorio.
  // El número clave es 9-8-6-1-4 + 4 últimos dígitos del propio número
  // del detective: al marcarlo, el propio teléfono del despacho suena.
  // La grabación es la voz del propio detective dejándose un aviso.
  // ─────────────────────────────────────────────────────────────────
  phoneNumbers: [
    {
      id: 'octavio_garita',
      number: '915 78 02 91',
      source: 'Telefonillo de la garita del bloque',
      response: {
        content: 'Suena largo. Lo coge Octavio Brán desde su piso del primero. "Inspector. Llevo tres años esperando esta llamada. Estoy en casa. No me voy a mover."'
      }
    },
    {
      id: 'prosec_alarma',
      number: '900 30 47 00',
      source: 'Empresa de seguridad ProSec — tarjeta junto al telefonillo de Felipe',
      response: {
        content: 'Atención al cliente de ProSec confirma que la alarma del piso de Felipe Saiz no ha registrado aperturas desde las 18:42h. La coartada del vecino es incontrovertible.'
      }
    },
    {
      id: 'el_propio_telefono',
      number: '9 8 6 1 4',
      source: 'No te lo dice nadie. Solo lo compones tú si recuerdas la fecha de la pared (14 de agosto del 86 — el día en que tu padre se mató).',
      response: {
        content: 'Suena el propio teléfono del despacho del detective. Al descolgar la línea entrante, una grabación antigua reproduce la voz del propio Roberto Mora dejándose un mensaje a sí mismo hace meses: "Roberto. Roberto, escúchame. Acuérdate. Acuérdate de lo que pasó la noche del 9 de septiembre. No te lo cuentes otra vez como si Elena estuviera de viaje. Acuérdate, por favor."'
      },
      gameplayEffect: {
        setFlags: ['detective_se_oye_a_si_mismo']
      }
    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // CONTRADICCIONES — Las de los dos sospechosos visibles son red
  // herrings honestas (clarification): los dos dicen verdad. El caso
  // está diseñado para que el jugador NO encuentre culpable visible
  // si lee bien las pistas. La cuarta opción (el detective) siempre
  // está disponible en el dropdown de Resolución: la decisión de
  // acusarse o no es moral, no condicional.
  // ─────────────────────────────────────────────────────────────────
  contradictions: [
    {
      id: 'c08-felipe-aparente',
      suspectId: 'felipe_saiz',
      questionIds: ['felipe-v3'],
      evidenceId: 'alarma_vecino',
      statement: 'Felipe dice haber oído violencia en el piso del detective la noche del 9 de septiembre de 2023.',
      proof: 'La alarma doméstica de Felipe confirma que esta noche del 9 de noviembre no ha salido del piso. Su testimonio sobre 2023 es voluntario y verídico. Si el jugador se cierra sobre él, está acusando al testigo honesto.',
      suspicionBonus: 0,
      isRedHerring: true,
      clarification: 'Felipe Saiz es testigo, no agresor. Su alarma incontrovertible confirma que no ha estado esta noche en el piso del detective. Su confesión sobre 2023 es la primera grieta del muro, no una acusación contra él mismo.'
    },
    {
      id: 'c08-octavio-aparente',
      suspectId: 'octavio_bran',
      questionIds: ['octavio-v2'],
      evidenceId: 'olor_descomposicion',
      statement: 'Octavio admite haber bajado "algo" al sótano del bloque la mañana del 9 de septiembre de 2023.',
      proof: 'El análisis del aire confirma que un cuerpo lleva más de 24 meses en este piso, no enterrado en ningún sótano. Octavio bajó algo, pero el cuerpo de Elena nunca salió del sofá. Octavio cargó cajas con ropa y enseres de ella, no su cuerpo: el detective lo confundió en su memoria con un entierro.',
      suspicionBonus: 0,
      isRedHerring: true,
      clarification: 'Octavio es cómplice del encubrimiento parcial, no del crimen. La cara mecánica de su pista falsa es esta: el detective recuerda haber enterrado algo y proyecta sobre Octavio una culpa que no le corresponde. El cuerpo está en el sofá. Octavio lo sabe y lleva tres años queriendo decirlo.'
    },
    {
      id: 'c08-detective-verdadera',
      suspectId: 'detective',
      questionIds: ['detective-v1', 'detective-c2'],
      evidenceId: 'forense_elena',
      statement: 'El detective dice haber cenado con Elena anoche y haberla visto con vida.',
      proof: 'El forense Don Octaviano Vidal certifica que el cuerpo lleva entre 24 y 36 meses muerto. Las dos copas de la mesa están llenadas por el detective. La grabadora reproduce su propia voz hablando solo. La alarma del vecino confirma que el único que ha entrado al piso esta noche es él. El sofá tiene sangre vieja bajo UV. Las fotos del cajón le sitúan detrás de Elena con un objeto cilíndrico en la mano. El propio detective, marcando 9-8-6-1-4, se oye a sí mismo pidiéndose que se acuerde. Todo apunta a una sola persona.',
      suspicionBonus: 40,
      isRedHerring: false
    }
  ],

  solution: {
    who:  'detective',
    how:  'estrangulamiento_alcohol',
    why:  'perdida_alcohol_negacion'
  },

  howOptions: [
    { id: 'estrangulamiento_alcohol', text: 'Estrangulamiento en arrebato, bajo efecto extremo del alcohol' },
    { id: 'envenenamiento',           text: 'Envenenamiento con sustancia en el vino' },
    { id: 'caida_accidental',         text: 'Caída accidental durante una discusión' },
    { id: 'muerte_natural',           text: 'Muerte natural — el cuerpo lleva años por simple olvido' }
  ],

  whyOptions: [
    { id: 'perdida_alcohol_negacion', text: 'Una discusión bajo alcohol, un arrebato, y tres años de negación posterior' },
    { id: 'celos',                    text: 'Celos hacia una relación de Elena con un tercero' },
    { id: 'herencia_economica',       text: 'Disputa económica sobre bienes familiares' },
    { id: 'duelo_hijo_no_nacido',     text: 'La pérdida del hijo nacido muerto, vivida como traición y proyectada en ella' }
  ],

  correctExplanation: 'Tú mataste a Elena Solana la noche del 9 de septiembre de 2023, en un arrebato bajo el efecto del alcohol, en este mismo sofá. La discusión empezó por algo pequeño y se fue al fondo: el hijo que habíais perdido meses antes, nacido muerto. Le dijiste que una madre de verdad nunca habría dejado morir a su hijo — la misma estructura que tu padre te dejó dicha durante toda la infancia sin pronunciarla en voz alta. Tu mente bloqueó lo que vino después para que pudieras seguir viviendo. Octavio Brán te ayudó a la mañana siguiente a bajar cajas con la ropa y los enseres de Elena — no su cuerpo, que jamás salió del sofá. Pediste excedencia laboral cuatro meses y volviste con la versión de que Elena se había mudado a Cádiz. Nadie cuestionó nada. Has vivido tres años en aislamiento total, cenando con una alucinación que respondía con la voz que recordabas. Cada caso de este verano ha sido tu propia mente sacando fragmentos del recuerdo — y el caso 7 te entregó la verdad final que tu psicosis sostenía como excusa: tu padre era inocente del crimen del 86. No hay patrón generacional. Tu crimen es solo tuyo. Esta noche, con las pruebas en la mano, has podido nombrarte por primera vez.',

  wrongExplanation: 'El culpable eras tú. Tú mataste a Elena Solana hace tres años en este mismo sofá, bajo el efecto del alcohol, en una discusión que se fue al fondo: la pérdida del hijo nacido muerto, que volcaste sobre ella con la misma frase con la que tu padre te marcó durante toda la infancia. Tu mente lo enterró para poder seguir viviendo y construyó la alucinación de Elena para que cada noche el silencio no te aplastara. Los dos sospechosos visibles son testigos honestos: Felipe oyó, Octavio cargó cajas. Ninguno mató. La acusación contra cualquiera de ellos es la última coartada que tu mente buscaba para no enfrentarse al espejo. Has fallado el caso porque has fallado lo que las cenas con Elena llevaban siete casos pidiéndote: la lucidez para verlo y la integridad para decirlo.',

  // ═══════════════════════════════════════════════════
  // CENA EN CASA — La última cena con Elena
  // ═══════════════════════════════════════════════════
  cena: {
    apertura: '[Estás en el salón. La mesa está puesta para dos. Elena está sentada al otro lado. No ha tocado el vino. Te mira en silencio durante muchos segundos antes de hablar.] Ya estás aquí. Sabía que vendrías esta noche. Llevo mucho tiempo esperándote.',

    repasoPool: [
      {
        id: 'c08_cuerpo',
        linea: {
          default: 'Tu forense ha dicho que el cuerpo lleva meses. ¿Le has escuchado?',
          acusoIncorrecto: 'El forense te lo dijo. Y tú acusaste a otro. ¿Por qué?'
        },
        respuestas: [
          { id: 'a', texto: 'Le he escuchado. Pero no he querido entender lo que decía.',
            efecto: { sinceridad: +14, lucidez: +6, integridad: +8 },
            replica: '[asiente lentamente] Ahora sí lo entiendes.' },
          { id: 'b', texto: 'Octaviano se equivoca con las horas. Siempre.',
            efecto: { sinceridad: -16, lucidez: -10, integridad: -10, flags: ['niega_forense_final'] },
            replica: 'No, no se equivoca. Lo sabes. Llevas años sabiéndolo.' },
          { id: 'c', texto: '[silencio]',
            efecto: { lucidez: -8 },
            replica: 'El silencio también es una respuesta, Roberto.' }
        ]
      },
      {
        id: 'c08_dos_copas',
        linea: {
          default: 'Llevamos años cenando así. Dos copas. ¿Cuándo fue la última vez que yo bebí una?',
          acusoIncorrecto: 'Las dos copas. Las has servido tú esta noche también. ¿Has bebido las dos?'
        },
        respuestas: [
          { id: 'a', texto: 'Hace tres años. La noche del 9 de septiembre.',
            efecto: { sinceridad: +16, lucidez: +8, integridad: +10, flags: ['nombra_la_fecha'] },
            replica: '[muy quieta] Sí. Esa noche. Llevabas tres años sin poder decirla en voz alta.' },
          { id: 'b', texto: 'Anoche. Anoche bebiste media copa y dejaste el resto.',
            efecto: { sinceridad: -18, lucidez: -12, flags: ['niega_la_fecha'] },
            replica: 'Roberto. Mírame. Mírame de verdad. No estuve aquí anoche.' },
          { id: 'c', texto: 'No me hagas esa pregunta. Por favor.',
            efecto: { sinceridad: +6, lucidez: -6 },
            replica: 'Te la voy a hacer hasta que la respondas. Es lo único que puedo hacer por ti.' }
        ]
      },
      {
        id: 'c08_recuerdas',
        linea: {
          default: '¿Te acuerdas de la noche del 9 de septiembre? La del licor de Cadaqués.',
          acusoIncorrecto: '¿Te acuerdas, Roberto? ¿De verdad? Porque has acusado a otro hoy.'
        },
        respuestas: [
          { id: 'a', texto: 'Me acuerdo de gritar. Me acuerdo de beber. Lo del medio me falta.',
            efecto: { sinceridad: +14, lucidez: +6, integridad: +6, flags: ['recuerda_la_noche'] },
            replica: 'El hueco eres tú llenándolo con la versión que pudieras soportar.' },
          { id: 'b', texto: 'No pasó nada esa noche. Acabamos de cenar como siempre.',
            efecto: { sinceridad: -16, integridad: -12, lucidez: -10, flags: ['rechaza_recordar'] },
            replica: '[larga pausa] Entonces todavía no podemos despedirnos.' },
          { id: 'c', texto: 'Recuerdo despertarme con las manos doliéndome y no saber por qué.',
            efecto: { sinceridad: +12, lucidez: +4, integridad: +8, flags: ['recuerda_la_noche'] },
            replica: 'Las manos sabían antes que tú.' }
        ]
      }
    ],

    ganchoMemoria: {
      id: 'c08_ultima_pregunta',
      linea: '[Elena se inclina hacia ti, sobre la mesa. Habla muy bajo y muy claro.] Roberto. La pregunta es solo una. Y ya la sabes. ¿Quién me mató?',
      respuestas: [
        { id: 'a', texto: 'Fui yo. Te maté yo.',
          efecto: { sinceridad: +20, integridad: +20, lucidez: +14, flags: ['acepta_culpa', 'promete_contar_todo'] },
          replica: '[silencio enorme. Te mira con algo parecido a alivio.] Gracias por decírmelo. Llevaba tres años esperándolo.' },
        { id: 'b', texto: 'Fue Octavio. O Felipe. Alguien que sigue libre por estas calles.',
          efecto: { sinceridad: -22, integridad: -20, lucidez: -16, flags: ['calla_por_proteccion', 'rechaza_recordar'] },
          replica: '[te mira durante mucho tiempo en silencio. Luego, muy despacio, niega con la cabeza una sola vez.]' },
        { id: 'c', texto: '[silencio. No puedes decirlo.]',
          efecto: { lucidez: -18, integridad: -10, flags: ['rechaza_recordar'] },
          replica: '[se levanta de la mesa. Camina hacia ti. La cámara se acerca.]' }
      ]
    }
  },

  // ═══════════════════════════════════════════════════
  // FINALES — 4 CINEMÁTICAS (matriz 2x2)
  //
  // Eje X (acusación):   detective sí / no
  // Eje Y (métricas):    buenas / malas — "buenas" si los 3 ejes ≥ 60
  //                      O ≥4 flags clave (evaluado en DinnerPanel).
  //
  //                BUENAS MÉTRICAS              MALAS MÉTRICAS
  // ENTREGAS   │  A. Despedida              │  B. Cobardía creepy   │
  // NO         │  C. Te pillan igual        │  D. No pudiste más    │
  //
  // Cada final son 4 escenas (kind: 'scene'): imagen + texto bajo un
  // botón CONTINUAR. Los blocks legacy (narration/dialogue/credit)
  // siguen soportados por DinnerPanel para compatibilidad.
  // ═══════════════════════════════════════════════════
  endings: {
    A: {
      id: 'ending-A-despedida',
      title: 'DESPEDIDA',
      subtitle: 'Final 1 / 4 · Conciencia limpia',
      match: { accuseDetective: true, metrics: 'good' },
      blocks: [
        {
          kind: 'scene',
          image: 'assets/img/endings/A1.png',
          text: '[La cena lúcida. Elena al otro lado de la mesa. Por primera vez en años la ves de verdad.]\n\nELENA — "Empieza por tu madre. Cuéntamela como nunca me la has contado."\n\nDETECTIVE — "Murió cuando yo nací. Mi padre me dijo toda la vida que se sacrificó por mí. Yo lo creí. Crecí debiéndole una vida que no le pedí."'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/A2.png',
          text: '[El cuarto del fondo.]\n\nELENA — "Y tu padre."\n\nDETECTIVE — "Mi padre era un hombre bueno. Una mañana se metió en el coche en el garaje cerrado. Yo tenía once años. Nunca me echó la culpa con la boca. Pero la cara era una sola pregunta."\n\nELENA (más bajo) — "El cuarto del fondo."\n\nDETECTIVE — "Nuestro hijo. Nació muerto. Te dije que una madre de verdad nunca habría dejado morir a su hijo. Te dije con tu cara la misma frase que mi padre me dijo a mí sin decirla nunca. Y después llegó el 9 de septiembre."'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/A3.png',
          text: '[La mano fría.]\n\nELENA — "Tu padre era inocente, Roberto. Llevas treinta años creyendo que hizo lo que tú hiciste para que tu crimen no fuera solo tuyo. Pero es solo tuyo."\n\nDETECTIVE — "Lo sé. Ya lo sé."\n\n[Le coges la mano. Está fría. La sostienes mucho tiempo.]\n\nELENA — "Llama. Diles que vas tú."'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/A4.png',
          text: 'DETECTIVE (al teléfono) — "Soy el inspector Roberto Mora. Vengo a entregarme. Maté a mi mujer hace tres años. Estaré esperando en la puerta del portal."\n\n[Cuando cuelgas, una de las dos copas se evapora bajo tu mirada. Te queda la tuya. Llaman al telefonillo.]\n\nUNDER SUSPICION — Final 1 / 4 · "Despedida"'
        }
      ]
    },

    B: {
      id: 'ending-B-cobardia',
      title: 'LAS VOCES TE TRAJERON',
      subtitle: 'Final 2 / 4 · Cobardía',
      match: { accuseDetective: true, metrics: 'bad' },
      blocks: [
        {
          kind: 'scene',
          image: 'assets/img/endings/B1.png',
          text: '[Elena no se sienta. Se queda de pie detrás de tu silla. Habla muy bajo. No respira entre frases.]\n\nELENA — "No me has dejado dormir en tres años. No me has dejado irme. No me has dejado decirte adiós. Solo querías que viniera a cenar y a callarme la boca."'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/B2.png',
          text: '[La grabadora se enciende sola. Empieza a reproducir tu voz. Tres bucles distintos a la vez.]\n\nELENA (en bucle, distintos volúmenes) — "Una madre de verdad. Una madre de verdad. Una madre de verdad."\n\n[El cuchillo del pan está en la mesa. Lo miras mucho rato. La mano no se mueve.]'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/B3.png',
          text: 'DETECTIVE — "No puedo. No puedo. No puedo."\n\n[Marcas el 091 con dedos que tiemblan tanto que tienes que reintentar tres veces.]\n\nDETECTIVE (al teléfono) — "Vengan ya. Por favor. Vengan ya. Hagan que pare. Hagan que pare. La he matado yo. Vengan a por mí. Por favor."'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/B4.png',
          text: '[Estás esposado en el asiento trasero. La sirena suena. La voz de Elena sigue dentro. Va a seguir contigo en el calabozo. Va a seguir contigo siempre.]\n\nUNDER SUSPICION — Final 2 / 4 · "Las voces te trajeron"'
        }
      ]
    },

    C: {
      id: 'ending-C-detenido',
      title: 'TE PILLARON IGUAL',
      subtitle: 'Final 3 / 4 · Prisión permanente',
      match: { accuseDetective: false, metrics: 'good' },
      blocks: [
        {
          kind: 'scene',
          image: 'assets/img/endings/C1.png',
          text: '[Las cuatro de la mañana. La mesa puesta. Te sientas. La silla de enfrente no se mueve. Elena no aparece.]\n\nELENA (off, voz lejana sin imagen) — "El cuarto del fondo se queda cerrado, Roberto. Como dijimos. Lo demás lo decides tú solo desde ahora."'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/C2.png',
          text: '[Las siete de la mañana. Llaman. Es tu jefe. Detrás, dos uniformados. Detrás, dos cámaras de prensa que ya estaban abajo cuando llegaron.]\n\nBELTRÁN — "Roberto. El forense me ha pasado el informe a las cinco. He estado leyéndolo dos horas. Acompáñanos."'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/C3.png',
          text: '[Te esposan en el rellano. Felipe abre su puerta, te ve, cierra. Bajas las escaleras escoltado. Abajo, Octavio espera también esposado por la acusación falsa que has firmado. Os cruzáis la mirada. Él baja la cara primero.]'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/C4.png',
          text: '[Titular en negro, fundido lento:]\n\n"Inspector de homicidios detenido por el asesinato de su mujer hace tres años y por intentar inculpar al conserje del edificio. La Audiencia Nacional pedirá prisión permanente revisable."\n\n[Celda. Catre. Pared. Te ofrecen un abogado. No lo coges. Encima de la pared, sin que tú hayas pegado nada, la cuenta de los días empieza a la una.]\n\nUNDER SUSPICION — Final 3 / 4 · "Te pillaron igual"'
        }
      ]
    },

    D: {
      id: 'ending-D-suicidio',
      title: 'NO PUDISTE AGUANTARLO',
      subtitle: 'Final 4 / 4 · Suicidio',
      match: { accuseDetective: false, metrics: 'bad' },
      blocks: [
        {
          kind: 'scene',
          image: 'assets/img/endings/D1.png',
          text: '[La cena se vuelve agresiva. Elena, sentada enfrente, abre la boca como si gritara. No sale sonido. Los ojos vacíos. Te tapas los oídos. Las voces siguen dentro.]'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/D2.png',
          text: '[Te levantas. Llevas una silla debajo de la viga del techo del salón. Sigues sin entender que es tu mano la que ata el nudo. Crees que la mirada de reproche de Elena viene de fuera.]'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/D3.png',
          text: '[Cámara estática. La silueta cuelga de la viga. La silla volcada. La grabadora encendida en la mesa.]\n\nGRABADORA (en bucle) — "Mañana hablamos, Elena. Mañana hablamos. Mañana hablamos…"'
        },
        {
          kind: 'scene',
          image: 'assets/img/endings/D4.png',
          text: '[Las primeras horas de la mañana. La mesa sigue puesta. Las dos copas siguen llenas. Elena nunca estuvo esta noche. Elena nunca estuvo desde hace tres años.]\n\nUNDER SUSPICION — Final 4 / 4 · "No pudiste aguantarlo"'
        }
      ]
    }
  }
};

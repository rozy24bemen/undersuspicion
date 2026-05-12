/**
 * CASO 07: "El sótano"
 * Acto II — Cierre. Mecánica nueva: dos culpables + tabla de argumentación manual.
 * Sin herramienta nueva.
 *
 * Culpables: Elías Mora (primo lejano del detective) + Vicente Solera (hermano
 *            de Lucía Solera del caso 4). Ambos descendientes de las dos familias
 *            del 86 que colaboraron para proteger el legado de sus padres.
 *
 * Víctima: Camino Quintela (60), periodista jubilada que preparaba la segunda
 *          edición de su libro sobre crímenes encubiertos de la Transición.
 *
 * Sembrado decisivo para el caso 8:
 * - El manuscrito menciona "la mujer del inspector M." sin aparecer en redes
 *   desde hace tres años.
 * - El cuaderno de Camino tiene la dirección de la calle Hermosilla subrayada.
 * - Manuel Ródenas: "Hombres que llevan algo dentro hasta que se les sale."
 */
var US = US || {};
US.CASES = US.CASES || {};

US.CASES['caso-07'] = {
  id: 'caso-07',
  title: 'El sótano',
  subtitle: 'Caso Nº 2026-1020',
  intro: 'Camino Quintela, periodista jubilada de 60 años, ha aparecido muerta en el sótano de su chalet de Aravaca. Ahogada en la pila industrial donde revelaba fotografías analógicas. Estaba preparando la segunda edición de su libro sobre crímenes encubiertos en la Transición española. El libro original, publicado en los 2000, incluía una mención al "caso Mora del 86". Alguien pensó que lo que iba a publicar en la nueva edición era demasiado.',

  victim: {
    name: 'Camino Quintela',
    age: 60,
    occupation: 'Periodista jubilada — autora de libro sobre crímenes encubiertos',
    portrait: 'assets/img/suspects/Caso7/Retrato_Victima_caso7.png'
  },

  scene: {
    location: 'Sótano del chalet — Aravaca (Madrid)',
    date: '20 de octubre de 2026',
    timeOfDeath: 'Entre las 21:00 y las 22:00h',
    cssClass: 'scene-caso7'
  },

  // Mecánica: la tabla de argumentación se activa antes de la acusación
  argumentationMode: true,

  suspects: [
    // ──────────────── ISMA QUINTELA ────────────────
    {
      id: 'isma',
      name: 'Isma Quintela',
      age: 33,
      role: 'Hijo de Camino — sin contacto desde hace años',
      description: 'Delgado, ojeroso, distante. Tuvo una ruptura familiar hace cinco años por una disputa con su madre sobre el libro original. Vivía en otra ciudad. Tiene coartada sólida pero su distancia y la disputa lo hacen sospechoso en primera instancia.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso7/Sospechosos/IsmaQuintela-Neutral.png',
        talking:  'assets/img/suspects/Caso7/Sospechosos/IsmaQuintela-Pensativo.png',
        nervous:  'assets/img/suspects/Caso7/Sospechosos/IsmaQuintela-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'isma-v1',
            text: '¿Cuándo fue la última vez que habló con su madre?',
            response: '"Hace ocho meses. Llamé para su cumpleaños. Fue una conversación de cinco minutos. Nuestra relación era complicada desde el libro."',
            pressureCost: 8
          },
          {
            id: 'isma-v2',
            text: '¿Cuál era el origen de la disputa con ella?',
            response: '"Mi madre publicó cosas sobre familias sin pedirles permiso. Cosas de personas que aún vivían. Yo pensé que eso era cruel. Ella pensó que era periodismo. Nunca lo resolvimos."',
            pressureCost: 10
          },
          {
            id: 'isma-v3',
            text: '¿Sabía que preparaba una segunda edición?',
            response: '"Me enteré hace tres meses. Llamé para pedirle que no lo hiciera. Me dijo que no era cosa mía. Fue la última conversación."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'isma-c1',
            text: '¿Dónde estaba el martes 20 entre las 21 y las 22?',
            response: '"En Valencia. Mi trabajo. Estaba en guardia nocturna en el hospital donde trabajo como enfermero. Hay registro y doce compañeros."',
            pressureCost: 6
          },
          {
            id: 'isma-c2',
            text: '¿Conoce a alguien que pudiera querer hacerle daño a su madre por el libro?',
            response: '"A las familias del libro. Mi madre recibió llamadas amenazantes en el 2001 cuando publicó la primera edición. Las ignoró. Con la nueva edición... imagínese."',
            pressureCost: 10
          },
          {
            id: 'isma-c3',
            text: '¿Conocía a Elías Mora o a Vicente Solera?',
            response: '"Los nombres me suenan del libro de mi madre. Son hijos o nietos de personas que aparecen en el libro. No los conozco personalmente."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'forense':           { response: '"Ahogada. Alguien la sumergió. Mi madre no se suicidaría nunca."', pressureCost: 5 },
        'pila_industrial':   { response: '"Yo conocía ese sótano. Mi madre revelaba fotos ahí desde que yo era pequeño."', pressureCost: 6 },
        'caja_manuscrito':   { response: '"El libro nuevo. Eso es lo que alguien quería destruir. El libro."', pressureCost: 10 },
        'cuaderno_camino':   { response: '"El cuaderno de trabajo de mi madre. Tenía siempre uno encima para anotarlo todo."', pressureCost: 8 },
        'camara_exterior':   { response: '"Dos hombres. No soy yo. Yo estaba en Valencia."', pressureCost: 6 },
        'movil_camino':      { response: '"Citó a Elías Mora y a Vicente Solera juntos. Mi madre no hacía las cosas sin pensar. Sabía con quién se reunía."', pressureCost: 10 },
        'libro_original':    { response: '"Ese libro le costó amenazas, insultos y cinco años sin hablarme a mí. Y aun así iba a publicar otro."', pressureCost: 8 }
      }
    },

    // ──────────────── FLORINDA BÁRCENA ────────────────
    {
      id: 'florinda',
      name: 'Florinda Bárcena',
      age: 55,
      role: 'Editora del libro de Camino',
      description: 'Profesional, segura. Lleva veinte años siendo la editora de Camino. Quería relanzar la segunda edición con material nuevo, pero Camino había decidido añadir capítulos que la editorial no aprobaba. Conflicto editorial real, pero no mortal.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso7/Sospechosos/FlorindaBárcena-Neutral.png',
        talking:  'assets/img/suspects/Caso7/Sospechosos/FlorindaBárcena-Pensativa.png',
        nervous:  'assets/img/suspects/Caso7/Sospechosos/FlorindaBárcena-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'florinda-v1',
            text: '¿En qué estado estaba el proyecto de la segunda edición?',
            response: '"Camino tenía tres capítulos terminados y dos en borrador. Yo quería publicar en enero. Pero en septiembre me dijo que quería añadir material nuevo que yo no había autorizado. Material más explosivo. Había tensión entre nosotras."',
            pressureCost: 10
          },
          {
            id: 'florinda-v2',
            text: '¿Sabía qué tipo de material nuevo quería añadir?',
            response: '"Me habló de documentos nuevos sobre un caso de Madrid de los 80. Un comisario, una muerte tapada. Yo le dije que no podía publicar acusaciones graves sin documentación jurídicamente sólida. Ella insistió."',
            pressureCost: 12
          },
          {
            id: 'florinda-v3',
            text: '¿La editorial tenía algo que perder si se publicaba el libro?',
            response: '"Económicamente, sí. Un libro así puede generar demandas. Yo quería proteger el proyecto. Pero matar a mi autora no es el modo en que las editoriales protegen sus proyectos, inspector."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'florinda-c1',
            text: '¿Dónde estaba el martes 20 entre las 21 y las 22?',
            response: '"En la presentación del catálogo otoñal de la editorial, en el Círculo de Bellas Artes. Cuarenta personas y las fotos de la prensa cultural lo confirman."',
            pressureCost: 6
          },
          {
            id: 'florinda-c2',
            text: '¿Sabe si Camino había contactado a personas que aparecen en el libro?',
            response: '"Para la segunda edición estaba entrevistando a familiares de las personas del libro original. Eso me preocupaba legalmente pero ella lo consideraba periodismo de investigación."',
            pressureCost: 10
          },
          {
            id: 'florinda-c3',
            text: '¿Cuándo fue la última vez que habló con Camino?',
            response: '"El jueves pasado. Discutimos por teléfono sobre los nuevos capítulos. Me colgó. No la volví a llamar."',
            pressureCost: 8
          }
        ]
      },
      evidenceResponses: {
        'forense':           { response: '"Ahogada. No puedo creerlo."', pressureCost: 5 },
        'pila_industrial':   { response: '"Camino revelaba fotos en ese sótano. Una mujer con esa vida acabando ahogada entre sus negativos. Es horrible."', pressureCost: 6 },
        'caja_manuscrito':   { response: '"Esos son los borradores de los nuevos capítulos. Quiero leer qué había escrito."', pressureCost: 10 },
        'cuaderno_camino':   { response: '"¿Elías Mora y Vicente Solera anotados? Esos dos eran nuevas fuentes de Camino."', pressureCost: 10 },
        'camara_exterior':   { response: '"Dos hombres. Ninguno soy yo."', pressureCost: 5 },
        'movil_camino':      { response: '"Les citó a los dos. Y los dos vinieron. Eso confirma que tenían motivo para estar ahí."', pressureCost: 10 },
        'libro_original':    { response: '"El libro original fue un escándalo controlado. La segunda edición iba a ser mucho peor para algunas familias."', pressureCost: 8 }
      }
    },

    // ──────────────── MANUEL RÓDENAS ────────────────
    {
      id: 'manuel_rodenas',
      name: 'Dr. Manuel Ródenas',
      age: 67,
      role: 'Antiguo comisario retirado — fuente original de Camino para el libro',
      description: 'Pelo blanco, pose de quien ha visto demasiado. Fue la fuente principal de Camino para el libro del 2001. Conoció al padre del detective y tiene palabras que llevan años esperando ser dichas en voz alta. Cuando el detective entra a la sala, Manuel le mira con una mezcla de pena y alivio.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso7/Sospechosos/ManuelRódenas-Neutral.png',
        talking:  'assets/img/suspects/Caso7/Sospechosos/ManuelRódenas-Pensativo.png',
        nervous:  'assets/img/suspects/Caso7/Sospechosos/ManuelRódenas-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'manuel-v1',
            text: '¿Qué información aportó usted al libro original de Camino?',
            response: '"Conocía el caso Mora del 86 de primera mano. Trabajé con el Comisario Mora durante cuatro años. Un hombre brillante en el trabajo. Y también, claramente, un hombre con un peso que no supo llevar."',
            pressureCost: 10
          },
          {
            id: 'manuel-v2',
            text: '¿Sabe por qué alguien querría impedir la segunda edición?',
            response: '"Porque la primera edición era vaga en los nombres. La segunda era concreta. Camino tenía documentos nuevos. Documentos que probaban lo que el primero solo insinuaba. Para ciertas familias eso es suficiente para perderlo todo."',
            pressureCost: 10
          },
          {
            id: 'manuel-v3',
            text: '¿Usted trabajó con el padre del detective?',
            response: '"[te mira a los ojos] Trabajé con tu padre. Tú deberías saberlo todo, ¿no? ¿Por qué no lo sabes, muchacho? Eras pequeño aquella noche, supongo que lo bloqueaste. Tu padre era una buena persona. Hasta una noche. Pasa más a menudo de lo que crees. Hombres que van por la vida sin saber lo que llevan dentro hasta que se les sale."',
            pressureCost: 16
          }
        ],
        coartada: [
          {
            id: 'manuel-c1',
            text: '¿Dónde estaba el martes 20 entre las 21 y las 22?',
            response: '"En casa de mi hija en Pozuelo. Cena familiar. Mis nietos pueden confirmarlo."',
            pressureCost: 6
          },
          {
            id: 'manuel-c2',
            text: '¿Sabía que Camino iba a citar a Elías Mora y a Vicente Solera?',
            response: '"Me lo dijo. Le advertí que eso era peligroso. Que los Mora y los Solera no son familias que acepten bien que le recuerden sus muertos. No me hizo caso."',
            pressureCost: 12
          },
          {
            id: 'manuel-c3',
            text: '¿Conoce a Elías Mora o a Vicente Solera personalmente?',
            response: '"A Elías le conozco de vista. Es el tipo de hombre que protege el apellido como si fuera el apellido lo que le diera vida. Vicente Solera... el hijo del Andrés Solera del 86. Otro que vive con un muerto encima."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'forense':           { response: '"La ahogaron. Alguien la sujetó en esa pila. Tuvo que ser dos personas: Camino era fuerte."', pressureCost: 6 },
        'pila_industrial':   { response: '"La ahogaron en su propio sótano. Entre sus propios negativos. Hay algo especialmente cruel en eso."', pressureCost: 6 },
        'caja_manuscrito':   { response: '"Los borradores nuevos. Si Camino tenía documentos probatorios en esa caja, alguien los habrá buscado."', pressureCost: 10 },
        'cuaderno_camino':   { response: '"Elías Mora y Vicente Solera. La noche del crimen. [pausa] Eso lo dice todo."', pressureCost: 12 },
        'camara_exterior':   { response: '"Dos hombres. Las horas encajan. Entraron juntos, salieron juntos. Eso no es casualidad."', pressureCost: 8 },
        'movil_camino':      { response: '"Les citó a los dos. Camino no sabía que vendrían juntos. O quizás sí y pensó que podría manejarlo."', pressureCost: 10 },
        'libro_original':    { response: '"Este libro le costó la vida. El primero le costó el sueño. El segundo, ya ves."', pressureCost: 8 }
      }
    },

    // ──────────────── ELÍAS MORA ────────────────
    {
      id: 'elias_mora',
      name: 'Elías Mora',
      age: 45,
      role: 'Primo lejano del detective — empresario en Madrid',
      description: 'Bien vestido, controlado. Primo lejano del detective por parte paterna. La publicación del libro amenazaba con destruir el apellido Mora públicamente. Actuó en coordinación con Vicente Solera para silenciar a Camino.',
      isGuilty: true,
      portraits: {
        neutral:  'assets/img/suspects/Caso7/Sospechosos/ElíasMora-Neutral.png',
        talking:  'assets/img/suspects/Caso7/Sospechosos/ElíasMora-Pensativo.png',
        nervous:  'assets/img/suspects/Caso7/Sospechosos/ElíasMora-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'elias-v1',
            text: '¿Cómo conoció a Camino Quintela?',
            response: '"Me llamó para entrevistarme para su nuevo libro. Yo le dije que no tenía nada que decir sobre el caso que ella investigaba. Le pedí que no mencionara el apellido Mora."',
            pressureCost: 10
          },
          {
            id: 'elias-v2',
            text: '¿Qué amenazaba publicar sobre su familia?',
            response: '"Nada que sea cierto. Esa mujer iba a hundir el apellido de mi familia basándose en rumores y en documentos que ella misma no entendía. Era una amenaza sin fundamento."',
            pressureCost: 14
          },
          {
            id: 'elias-v3',
            text: '¿Conocía a Vicente Solera antes de este asunto?',
            response: '"Le conozco de negocios de familia desde hace años. Compartimos algunas inversiones. Es una relación profesional."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'elias-c1',
            text: '¿Dónde estaba el martes 20 entre las 21 y las 22?',
            response: '"En casa. Solo. Había quedado con un cliente que canceló a última hora. No tengo coartada."',
            pressureCost: 14
          },
          {
            id: 'elias-c2',
            text: '¿Fue a Aravaca esa noche?',
            response: '"No. No he estado en Aravaca en meses."',
            pressureCost: 16
          },
          {
            id: 'elias-c3',
            text: '¿Tiene un vehículo gris matriculado a su nombre?',
            response: '"[pausa] Tengo un vehículo de empresa. Gris oscuro."',
            pressureCost: 18
          }
        ]
      },
      evidenceResponses: {
        'forense':           { response: '"Una muerte terrible. No tengo nada que ver con eso."', pressureCost: 6 },
        'pila_industrial':   { response: '"No conozco ese sótano."', pressureCost: 6 },
        'caja_manuscrito':   { response: '"Lo que hubiera en esos borradores no era de mi incumbencia."', pressureCost: 10 },
        'cuaderno_camino':   { response: '"[ve su nombre anotado] Camino anotaba todo. No significa que yo estuviera ahí."', pressureCost: 16 },
        'camara_exterior':   { response: '"Esa cámara no me reconoce a mí. Hay muchos vehículos grises en Madrid."', pressureCost: 18 },
        'movil_camino':      { response: '"Me citó, sí. Le dije que no podía ir. Al final no fui."', pressureCost: 20 },
        'libro_original':    { response: '"Ese libro daña a mi familia injustamente. Pero no maté a nadie."', pressureCost: 12 }
      }
    },

    // ──────────────── VICENTE SOLERA ────────────────
    {
      id: 'vicente_solera',
      name: 'Vicente Solera',
      age: 50,
      role: 'Hermano de Lucía Solera (caso 4) — hijo de Andrés Solera',
      description: 'Robusto, callado, con las manos de quien hace trabajo físico. Es el hermano de Lucía Solera, la hija del panadero del caso 4. Su padre Andrés Solera fue testigo del encubrimiento del 86. El libro de Camino iba a publicar ese testimonio. Actuó junto a Elías para proteger el legado de su padre.',
      isGuilty: true,
      portraits: {
        neutral:  'assets/img/suspects/Caso7/Sospechosos/VicenteSolera-Neutral.png',
        talking:  'assets/img/suspects/Caso7/Sospechosos/VicenteSolera-Pensativo.png',
        nervous:  'assets/img/suspects/Caso7/Sospechosos/VicenteSolera-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'vicente-v1',
            text: '¿Cómo entró en contacto con Camino Quintela?',
            response: '"Me llamó. Dijo que tenía documentos sobre mi padre que iba a publicar. Quería darme la oportunidad de responder. No quise responder."',
            pressureCost: 10
          },
          {
            id: 'vicente-v2',
            text: '¿Qué decían esos documentos sobre su padre?',
            response: '"Que mi padre firmó como testigo de algo que no debía firmar. Hace cuarenta años. Mi padre ya no está para defenderse. Eso no es periodismo, es ensañamiento."',
            pressureCost: 14
          },
          {
            id: 'vicente-v3',
            text: '¿Su hermana Lucía sabe algo de esto?',
            response: '"Mi hermana no tiene nada que ver. Ella vive en Madrid, hace su vida. Esto era entre Camino y yo. Eso es todo lo que diré."',
            pressureCost: 12
          }
        ],
        coartada: [
          {
            id: 'vicente-c1',
            text: '¿Dónde estaba el martes 20 entre las 21 y las 22?',
            response: '"Conduciendo de vuelta a Toledo. Tengo una empresa de transportes. Salí de Madrid a las nueve y media."',
            pressureCost: 14
          },
          {
            id: 'vicente-c2',
            text: '¿Fue a Aravaca esa noche?',
            response: '"No. Salí por la A-5, dirección Toledo."',
            pressureCost: 16
          },
          {
            id: 'vicente-c3',
            text: '¿El vehículo gris grabado por la cámara del chalet coincide con el suyo?',
            response: '"[pausa] Hay muchos vehículos grises de empresa en Madrid."',
            pressureCost: 18
          }
        ]
      },
      evidenceResponses: {
        'forense':           { response: '"Terrible. No sé quién haría algo así."', pressureCost: 5 },
        'pila_industrial':   { response: '"No conozco ese chalet."', pressureCost: 6 },
        'caja_manuscrito':   { response: '"¿Qué decía sobre mi padre?"', pressureCost: 12 },
        'cuaderno_camino':   { response: '"[ve su nombre y el de Elías] Ella apuntaba con quién quedaba. No significa nada."', pressureCost: 16 },
        'camara_exterior':   { response: '"Un vehículo gris. No es único ese color."', pressureCost: 16 },
        'movil_camino':      { response: '"Me citó. No fui."', pressureCost: 18 },
        'libro_original':    { response: '"Ese libro manchó el nombre de mi padre. El nuevo lo habría destruido."', pressureCost: 14 }
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
      imagePath: 'assets/img/suspects/Caso7/Pruebas/P1 — Informe Forense.png',
      shortDesc: 'Asfixia por inmersión. La posición indica que fue sujetada por dos personas.',
      fullDesc: 'Don Octaviano Vidal certifica asfixia por inmersión en agua sucia. El ángulo de fuerza aplicado en los hombros y la nuca indica que fueron necesarias dos personas para sujetar a Camino, que ofreció resistencia. Señales de lucha en el brazo derecho. Hora de muerte: entre 21:00 y 22:00h.',
      metadata: { fecha: '20-10-2026', fuente: 'Forense Don Octaviano Vidal', ref: 'FOR-07-001' }
    },
    {
      id: 'pila_industrial',
      title: 'Pila Industrial del Sótano',
      type: 'objeto',
      icon: '🪣',
      iconPath: 'assets/img/icons/Pruebas/icon_cubo.png',
      imagePath: 'assets/img/suspects/Caso7/Pruebas/P2 — Pila Industrial.png',
      shortDesc: 'Pila llena de agua sucia. Señales de lucha alrededor. Cabello de Camino flotando.',
      fullDesc: 'La pila industrial donde Camino revelaba fotografías analógicas. Agua de revelar oscura. Señales de golpes en el borde: desconchones frescos. Cabello de Camino flotando en la superficie. Huellas parciales de dos calzados masculinos diferentes en el barro junto a la pila.',
      metadata: { fecha: '20-10-2026', fuente: 'Sótano del chalet de Aravaca', ref: 'OBJ-07-002' }
    },
    {
      id: 'caja_manuscrito',
      title: 'Caja de Borradores del Libro',
      type: 'documento',
      icon: '📦',
      iconPath: 'assets/img/icons/Pruebas/icon_caja.png',
      imagePath: 'assets/img/suspects/Caso7/Pruebas/P3 — Caja Borradores.png',
      shortDesc: 'Capítulos nuevos del libro. Menciona "la mujer del inspector M." sin aparecer en redes desde hace 3 años.',
      fullDesc: 'Caja de archivo con borradores de los nuevos capítulos. Un capítulo titulado "Los hijos del crimen — sobre el cuerpo de la mujer del inspector M." incluye la frase: "El inspector M. de Madrid sigue ejerciendo. Su mujer no aparece en redes sociales desde hace tres años. Conviene preguntar." El detective lee la frase. Se ríe: "Manías de periodista." Y cierra el cuaderno.',
      metadata: { fecha: '20-10-2026', fuente: 'Sótano del chalet — estantería de archivo', ref: 'DOC-07-003' }
    },
    {
      id: 'cuaderno_camino',
      title: 'Cuaderno de Trabajo de Camino',
      type: 'documento',
      icon: '📓',
      iconPath: 'assets/img/icons/Pruebas/icon_cuaderno.png',
      imagePath: 'assets/img/suspects/Caso7/Pruebas/P4 — Cuaderno de Camino.png',
      shortDesc: 'Nombres de Elías Mora y Vicente Solera anotados para la reunión del martes. Dirección: "Hermosilla — preguntar".',
      fullDesc: 'Cuaderno de notas abierto sobre la mesa del sótano. En la página del martes 20: "21:00 — Elías Mora + Vicente Solera (¡juntos!). Confirmar testimonio." Y más abajo, en otra página, una anotación suelta con la dirección "Hermosilla" subrayada y la nota "preguntar — ¿vive solo? ¿dónde está la mujer?".',
      metadata: { fecha: '20-10-2026', fuente: 'Mesa del sótano del chalet', ref: 'DOC-07-004' }
    },
    {
      id: 'camara_exterior',
      title: 'Cámara Exterior del Chalet',
      type: 'video',
      icon: '📹',
      iconPath: 'assets/img/icons/Pruebas/icon_cctv_video.png',
      imagePath: 'assets/img/suspects/Caso7/Pruebas/P5 — Cámara Exterior.png',
      shortDesc: 'Dos hombres entran al chalet a las 20:40. Salen a las 21:30. Vehículo gris aparcado.',
      fullDesc: 'Cámara de seguridad exterior del chalet. A las 20:40: dos hombres adultos entran. A las 21:30: los mismos dos salen. Vehículo gris oscuro aparcado enfrente a las 20:35, se va a las 21:32. La matrícula es parcialmente visible: Madrid, terminación en "7K". Cruzar con el padrón municipal de vehículos de empresa de ambos sospechosos.',
      metadata: { fecha: '20-10-2026', fuente: 'Cámara exterior del chalet de Aravaca', ref: 'VID-07-005' }
    },
    {
      id: 'movil_camino',
      title: 'Mensajes del Móvil de Camino',
      type: 'documento',
      icon: '📱',
      iconPath: 'assets/img/icons/Pruebas/icon_movil.png',
      imagePath: 'assets/img/suspects/Caso7/Pruebas/P6 — Mensajes Camino.png',
      shortDesc: 'Mensajes separados a Elías Mora y Vicente Solera citándoles para el martes a las 21h "para hablar del libro".',
      fullDesc: 'Extracción del móvil de Camino Quintela. Un mensaje a Elías Mora (lunes 19): "Mañana a las 21, chalet de Aravaca. Quiero darte la oportunidad de responder antes de publicar." Un mensaje idéntico a Vicente Solera (lunes 19). Los dos leyeron el mensaje: confirmado por los ticks de lectura. Ninguno respondió.',
      metadata: { fecha: '20-10-2026', fuente: 'Móvil de Camino Quintela — orden judicial', ref: 'DOC-07-006' }
    },
    {
      id: 'libro_original',
      title: 'Libro Original de Camino (2001)',
      type: 'objeto',
      icon: '📚',
      iconPath: 'assets/img/icons/Pruebas/icon_libros.png',
      imagePath: 'assets/img/suspects/Caso7/Pruebas/P7 — Libro Original.png',
      shortDesc: 'Libro publicado en 2001 sobre crímenes encubiertos. Capítulo 7: "El caso Mora del 86."',
      shortDesc: 'Libro publicado en 2001 sobre crímenes encubiertos. Capítulo 7 menciona el "caso Mora del 86" sin nombrar al detective.',
      fullDesc: 'Ejemplar del libro "Crímenes de familia, silencios de Estado" (2001, Editorial Nácar). El capítulo 7 se titula "Los guardianes del secreto" y narra el caso Mora del 86 con nombres ficcionalizados pero detalles reconocibles. El libro fue un escándalo menor cuando se publicó. Ninguna familia denunció por miedo a que un juicio hiciera más pública la historia.',
      metadata: { fecha: '20-10-2026', fuente: 'Estantería del sótano del chalet', ref: 'OBJ-07-007' }
    }
  ],

  // Tabla de argumentación manual: el jugador conecta declaraciones con pruebas
  argumentationTable: [
    {
      statementId: 'arg-elias-coartada',
      evidenceId:  'camara_exterior',
      suspectId:   'elias_mora',
      statement:   'Elías Mora dice que no fue a Aravaca esa noche y que no tiene coartada porque su cita se canceló.',
      proof:       'La cámara exterior del chalet capta dos hombres entrando a las 20:40 y un vehículo gris de empresa saliendo a las 21:32.'
    },
    {
      statementId: 'arg-elias-no-contacto',
      evidenceId:  'movil_camino',
      suspectId:   'elias_mora',
      statement:   'Elías Mora dice que no fue a la cita que Camino le propuso.',
      proof:       'El móvil de Camino confirma que le envió un mensaje el lunes que Elías leyó (ticks de lectura confirmados) y no respondió — pero la cámara demuestra que apareció.'
    },
    {
      statementId: 'arg-vicente-coartada',
      evidenceId:  'pila_industrial',
      suspectId:   'vicente_solera',
      statement:   'Vicente Solera dice que salió de Madrid por la A-5 dirección Toledo a las 21:30.',
      proof:       'La cámara exterior registra a los dos hombres saliendo a las 21:30. Las huellas de dos calzados masculinos distintos rodean la pila. No hay tiempo material para estar en dos sitios.'
    },
    {
      statementId: 'arg-vicente-no-conoce',
      evidenceId:  'cuaderno_camino',
      suspectId:   'vicente_solera',
      statement:   'Vicente Solera dice que no fue a la cita y que Camino le llamó pero no atendió.',
      proof:       'El cuaderno de Camino tiene anotado "Elías Mora + Vicente Solera (¡juntos!)" para esa noche. Camino sabía que los dos vendrían juntos.'
    }
  ],

  contradictions: [
    {
      id: 'c07-elias-camara',
      suspectId: 'elias_mora',
      questionIds: ['elias-c2'],
      evidenceId: 'camara_exterior',
      statement: 'Elías Mora niega haber estado en Aravaca esa noche.',
      proof: 'La cámara exterior registra a dos hombres entrando al chalet de Aravaca a las 20:40h. El vehículo gris oscuro aparcado coincide con el vehículo de empresa registrado a nombre de Elías Mora (matrícula parcial "7K").',
      suspicionBonus: 28,
      isRedHerring: false
    },
    {
      id: 'c07-vicente-huellas',
      suspectId: 'vicente_solera',
      questionIds: ['vicente-c2'],
      evidenceId: 'pila_industrial',
      statement: 'Vicente Solera niega haber estado en Aravaca y dice que salió por la A-5 a las 21:30.',
      proof: 'Las huellas de dos calzados masculinos distintos en el barro junto a la pila confirman dos agresores. El forense certifica que fue necesaria la fuerza de dos personas para sujetar a Camino. La cámara muestra dos hombres, no uno.',
      suspicionBonus: 28,
      isRedHerring: false
    },
    {
      id: 'c07-cuaderno',
      suspectId: 'elias_mora',
      questionIds: ['elias-v3'],
      evidenceId: 'cuaderno_camino',
      statement: 'Elías dice que su relación con Vicente Solera es "solo profesional" y que no fueron juntos a ninguna cita con Camino.',
      proof: 'El cuaderno de Camino tiene anotado "Elías Mora + Vicente Solera (¡juntos!)" para esa noche, demostrando que los dos acudieron coordinados.',
      suspicionBonus: 20,
      isRedHerring: false
    }
  ],

  solution: {
    who:  'elias_mora',
    who2: 'vicente_solera',
    how:  'ahogamiento',
    why:  'proteger_honra'
  },

  who2Options: [
    { id: 'vicente_solera',  name: 'Vicente Solera',    role: 'Co-culpable' },
    { id: 'isma',            name: 'Isma Quintela',     role: 'Hijo de la víctima' },
    { id: 'florinda',        name: 'Florinda Bárcena',  role: 'Editora' },
    { id: 'manuel_rodenas',  name: 'Manuel Ródenas',    role: 'Antiguo comisario retirado' }
  ],

  howOptions: [
    { id: 'ahogamiento',          text: 'Ahogamiento en la pila industrial del sótano (dos agresores)' },
    { id: 'golpe_y_inmersion',    text: 'Golpe en la cabeza seguido de inmersión' },
    { id: 'envenenamiento',       text: 'Envenenamiento previo antes de caer al agua' },
    { id: 'accidente',            text: 'Accidente — caída involuntaria en la pila' }
  ],

  whyOptions: [
    { id: 'proteger_honra',       text: 'Silenciar la publicación que destruiría el legado de sus familias' },
    { id: 'herencia_libro',       text: 'Disputar los derechos del libro antes de la publicación' },
    { id: 'venganza_libro',       text: 'Venganza personal por el daño del libro original de 2001' },
    { id: 'chantaje_previo',      text: 'Respuesta a un chantaje que Camino ejercía sobre las familias' }
  ],

  correctExplanation: 'Elías Mora y Vicente Solera acudieron juntos al chalet de Camino en Aravaca la noche del martes, coordinando su actuación para silenciar la segunda edición del libro antes de que se publicara. Los dos tenían el mismo motivo: proteger el legado de sus respectivos padres, implicados en el encubrimiento del 86. La fuerza de dos personas era necesaria, como certifica el forense. La cámara exterior los identifica. El cuaderno de Camino los nombra juntos. La tabla de argumentación conecta cada declaración contradictoria con la prueba que la desmiente.',

  wrongExplanation: 'Los culpables eran Elías Mora y Vicente Solera, que actuaron juntos para impedir que la segunda edición del libro de Camino revelara la implicación de sus familias en el crimen del 86. El forense confirma que fue necesaria la fuerza de dos personas. La cámara exterior los registra entrando y saliendo. El cuaderno de Camino los nombra juntos para esa noche. Las huellas de dos calzados distintos rodean la pila. La mecánica de la tabla de argumentación requería conectar las declaraciones contradictorias de cada uno con las pruebas concretas que las desmontaban.',

  // ═══════════════════════════════════════════════════
  // CENA EN CASA — Tras resolver el caso
  // ═══════════════════════════════════════════════════
  cena: {
    apertura: '[Silencio cuando entras. Elena está sentada en la mesa. No ha servido nada todavía.] Llevas meses así. No duermo bien cuando tardas. Y cada vez tardas más.',

    repasoPool: [
      {
        id: 'c07_libro',
        linea: {
          default: 'El caso era por un libro. Un libro que nadie quería que saliera. ¿Qué decía?',
          acusoIncorrecto: 'El caso del libro. No lo cerraste bien. ¿Qué decía ese libro?'
        },
        respuestas: [
          { id: 'a', texto: 'Decía que hay familias en Madrid que llevan cuarenta años con un muerto encima que nadie ha nombrado.',
            efecto: { sinceridad: +10, lucidez: -6 },
            replica: '...cuarenta años. Eso es mucho tiempo cargando con algo.' },
          { id: 'b', texto: 'Cosas de la Transición. Crímenes de otro tiempo.',
            efecto: { sinceridad: -4 },
            replica: 'Tú no hablas así normalmente.' },
          { id: 'c', texto: 'El libro mencionaba a una mujer que nadie ha visto en tres años.',
            efecto: { sinceridad: +14, lucidez: -10, flags: ['lee_manuscrito'] },
            replica: '[pausa muy larga] ¿Qué mujer?' }
        ]
      },
      {
        id: 'c07_rodriguez',
        linea: {
          default: '¿Hubo alguien que te dijera algo importante en este caso?',
          acusoIncorrecto: '¿Algo o alguien que te llamara la atención?'
        },
        respuestas: [
          { id: 'a', texto: 'Un comisario retirado. Dijo que hay hombres que llevan algo dentro hasta que se les sale.',
            efecto: { sinceridad: +12, lucidez: -8, flags: ['recuerda_padre'] },
            replica: '[larga pausa] ¿Y tú qué piensas de eso?' },
          { id: 'b', texto: 'Nadie especial. El caso era claro al final.',
            efecto: { sinceridad: -6 },
            replica: 'Te pones rígido cuando mientes.' },
          { id: 'c', texto: 'Alguien que conocía a mi padre. Me habló de él.',
            efecto: { sinceridad: +10, flags: ['recuerda_padre'] },
            replica: '¿Qué te dijo?' }
        ]
      }
    ],

    ganchoMemoria: {
      id: 'c07_ultimatum',
      linea: 'Llevas meses así. No sé qué está pasando. Te lo pregunto una vez más y si no me dices algo real, no sé si puedo seguir aquí. ¿Qué está pasando de verdad?',
      respuestas: [
        { id: 'a', texto: 'Hay cosas del pasado que están saliendo. Cosas que no entiendo aún. Necesito tiempo.',
          efecto: { sinceridad: +14, integridad: +6, flags: ['promete_contar_todo'] },
          replica: '[larga pausa] Bien. Te doy tiempo. Pero solo un poco más.' },
        { id: 'b', texto: 'Estoy bien. Es el trabajo. Pasará.',
          efecto: { sinceridad: -12, integridad: -8, flags: ['calla_por_proteccion'] },
          replica: '[se levanta] Haz lo que tengas que hacer. [sale de la habitación]' },
        { id: 'c', texto: '[silencio largo]',
          efecto: { lucidez: -14, flags: ['rechaza_recordar'] },
          replica: '[te mira, coge los platos, se va]' }
      ]
    }
  }
};

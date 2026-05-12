/**
 * CASO 06: "Estudio Caracedo"
 * Acto II — Caso central. Mecánica nueva: prueba falsa plantada.
 * Sin herramienta nueva.
 *
 * Culpable cerebro: Pedro Pinhel (cliente histórico del bufete).
 * Culpable ejecutora: Marina Caracedo (sobrina, becaria).
 * Inocentes: Sara Caracedo (hija), Néstor Galindo (socio extorsionado),
 *            Eulogio Pacheco hijo (médico-abogado del bufete).
 *
 * Trampa: pluma con sangre apunta a Néstor (plantada por Pinhel + Marina).
 * Para detectar el engaño: cruzar los movimientos bancarios de Pinhel
 * con el testimonio del estanquero que vio a Marina entrar con la pluma.
 *
 * Sembrado: nombre "Elena Solana" en papeles ardidos + hoja 2023 firmada
 *           "R. Mora". Eulogio hijo es médico, no abogado.
 */
var US = US || {};
US.CASES = US.CASES || {};

US.CASES['caso-06'] = {
  id: 'caso-06',
  title: 'Estudio Caracedo',
  subtitle: 'Caso Nº 2026-0905',
  intro: 'Modesto Caracedo, 71 años, abogado fundador del bufete Estudio Caracedo, ha aparecido apuñalado en el callejón trasero de su propio edificio en la calle de Almagro. Salió solo esa noche, algo poco habitual en él. Cerca del cuerpo: una bolsa de papeles parcialmente ardidos y, a tres metros, una pluma estilográfica de marca cara manchada de sangre. El bufete lleva décadas operando con una reputación que en los círculos judiciales se describe como "discreta y eficaz en asuntos delicados". El mismo bufete cuyos sobres de pago se encontraron en el bolso de Inés Quirós.',

  victim: {
    name: 'Modesto Caracedo',
    age: 71,
    occupation: 'Abogado fundador del Estudio Caracedo',
    portrait: 'assets/img/suspects/Caso6/Retrato_Victima_caso6.png'
  },

  scene: {
    location: 'Callejón trasero — Calle de Sagasta (detrás del Estudio Caracedo, Almagro, Madrid)',
    date: '5 de septiembre de 2026',
    timeOfDeath: 'Entre las 22:00 y las 23:00h',
    cssClass: 'scene-caso6'
  },

  suspects: [
    // ──────────────── SARA CARACEDO ────────────────
    {
      id: 'sara',
      name: 'Sara Caracedo',
      age: 38,
      role: 'Hija de la víctima — se incorporaba al bufete',
      description: 'Elegante, segura de sí misma, aunque la seguridad se resquebraja cuando se habla de los archivos viejos de su padre. Quería modernizar el bufete y tenía un conflicto documentado con Modesto sobre la dirección del negocio. Coartada sólida.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso6/Sospechosos/SaraCaracedo-Neutral.png',
        talking:  'assets/img/suspects/Caso6/Sospechosos/SaraCaracedo-Pensativa.png',
        nervous:  'assets/img/suspects/Caso6/Sospechosos/SaraCaracedo-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'sara-v1',
            text: '¿Cómo era su relación profesional con su padre?',
            response: '"Difícil. Mi padre llevaba el bufete como en 1978. Yo quería renovarlo, traer clientes nuevos, olvidar algunos de los viejos. Teníamos desacuerdos serios sobre el rumbo. Pero era mi padre. Eso no cambia."',
            pressureCost: 8
          },
          {
            id: 'sara-v2',
            text: '¿Qué sabe de los archivos que su padre estaba destruyendo?',
            response: '"Sí, lo vi. Estaba quemando papeles en el contenedor del callejón tres noches antes. Le pregunté qué hacía y me dijo que era "limpieza de casos cerrados". No insistí. [pausa] Quizás debería haberlo hecho."',
            pressureCost: 14
          },
          {
            id: 'sara-v3',
            text: '¿Conocía a Pedro Pinhel, el cliente histórico?',
            response: '"Lo he visto en el bufete desde que era niña. Un señor discreto, bien vestido, siempre con la misma cara de no decir nada. Mi padre le tenía un respeto especial que nunca entendí del todo."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'sara-c1',
            text: '¿Dónde estaba la noche del crimen entre las 22 y las 23?',
            response: '"En una cena de trabajo con clientes del nuevo proyecto de la firma. En el restaurante Baluarte, calle del Marqués de Villamagna. Hay doce personas que pueden confirmarlo."',
            pressureCost: 6
          },
          {
            id: 'sara-c2',
            text: '¿Sabe si su padre tenía previsto salir solo esa noche?',
            response: '"No habitual. Mi padre era precavido. Que saliera solo al callejón trasero a esas horas... alguien tuvo que llamarle o pedirle que saliera."',
            pressureCost: 10
          },
          {
            id: 'sara-c3',
            text: '¿Sabía usted que los archivos que destruía incluían documentos del año 2023?',
            response: '"¿Del 2023? No. Yo pensé que eran de los 80 y los 90. ¿Qué había del 2023?"',
            pressureCost: 12
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':         { response: '"Ese cuchillo no es del bufete ni de ningún despacho profesional. Es de cocina. Lo trajo alguien de fuera."', pressureCost: 6 },
        'papeles_ardidos':  { response: '"Los papeles ardidos... [pausa] ¿Cuántos casos tiene ese bufete enterrados en esas hojas?"', pressureCost: 10 },
        'camara_calle':     { response: '"Una figura femenina joven. No soy yo. Yo tenía doce testigos en ese restaurante a esa hora."', pressureCost: 6 },
        'movimientos_pinhel':{ response: '"50.000€ en efectivo dos días antes. Eso no es un pago de asesoría legal. Eso es un encargo."', pressureCost: 10 },
        'mensajes_marina':  { response: '"¿Marina escribiéndole a Pinhel? Marina es mi prima. Nunca pensé que pudiera... [no termina]"', pressureCost: 12 },
        'pluma_sangre':     { response: '"Esa pluma es de Néstor. La reconozco, es la que él usa. Pero Néstor no... él no haría esto."', pressureCost: 8 },
        'estanquero':       { response: '"¿El estanquero del quiosco la vio entrar con la pluma en la mano? Entonces Marina la llevó ella. La pluma es un anzuelo."', pressureCost: 12 },
        'movimientos_nestor':{ response: '"Néstor tiene problemas. Lo sé. Pero sus problemas son de otro tipo."', pressureCost: 8 }
      }
    },

    // ──────────────── NÉSTOR GALINDO ────────────────
    {
      id: 'nestor',
      name: 'Néstor Galindo',
      age: 50,
      role: 'Socio del bufete desde los años 90',
      description: 'Nervioso de forma crónica. Lleva décadas junto a Modesto y conoce todos los secretos del bufete. Su nerviosismo tiene una causa: está siendo extorsionado por un cliente antiguo que amenaza con revelar su participación en casos poco limpios. La pluma manchada de sangre es suya.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso6/Sospechosos/NéstorGalindo-Neutral.png',
        talking:  'assets/img/suspects/Caso6/Sospechosos/NéstorGalindo-Pensativo.png',
        nervous:  'assets/img/suspects/Caso6/Sospechosos/NéstorGalindo-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'nestor-v1',
            text: '¿Cómo era su relación con Modesto Caracedo?',
            response: '"Éramos socios desde el 94. Veintidós años. Le debiéndole mucho profesionalmente. Muchas de las cosas en las que he participado no habría podido hacerlas sin él."',
            pressureCost: 8
          },
          {
            id: 'nestor-v2',
            text: '¿Sabía que Modesto estaba destruyendo archivos del bufete?',
            response: '"Sí. Y me lo dijo. Dijo que era una "limpieza preventiva". Yo le pedí que me dijera exactamente qué estaba quemando. No me lo dijo. Eso me preocupó."',
            pressureCost: 12
          },
          {
            id: 'nestor-v3',
            text: '¿Está siendo extorsionado por alguien?',
            response: '"[pausa muy larga] Sí. Hay alguien que me tiene cogido por los... que me amenaza con hacer públicas ciertas cosas de ciertos casos del bufete. Estoy pagando. Eso es lo que hay."',
            pressureCost: 22,
            isRedHerring: true,
            clarification: 'La extorsión de Néstor es real pero no tiene relación con el crimen. El extorsionador es un cliente de los 80 al que Néstor ayudó a ocultar irregularidades fiscales. Néstor es víctima paralela, no asesino.'
          }
        ],
        coartada: [
          {
            id: 'nestor-c1',
            text: '¿Dónde estaba entre las 22 y las 23 del viernes?',
            response: '"En mi despacho del bufete. Trabajando solo. No hay nadie que pueda confirmarlo."',
            pressureCost: 14
          },
          {
            id: 'nestor-c2',
            text: '¿Esa pluma es suya?',
            response: '"Sí. Es mía. Pero yo no la tenía esa noche. Me la robaron del despacho hace tres días. Puse una nota a los de limpieza pero no le di más importancia."',
            pressureCost: 18
          },
          {
            id: 'nestor-c3',
            text: '¿Sabe quién pudo entrar a su despacho a robar la pluma?',
            response: '"Cualquiera con llave del bufete. Sara, Marina, Pinhel cuando viene a reuniones. Los de limpieza. No lo sé."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':          { response: '"Ese cuchillo no lo he visto en mi vida."', pressureCost: 5 },
        'papeles_ardidos':   { response: '"Esos papeles... hay cosas de las que no me enorgullezco. Pero están quemadas. Ya no importan."', pressureCost: 12 },
        'camara_calle':      { response: '"No soy yo esa figura. Soy demasiado alto y esa figura es claramente una mujer."', pressureCost: 6 },
        'movimientos_pinhel':{ response: '"¿Pinhel sacó 50.000€ en efectivo? Ese dinero no es para mí. Pinhel me extorsiona, no al revés."', pressureCost: 14 },
        'mensajes_marina':   { response: '"Marina y Pinhel. Eso sí que no lo sabía. ¿De qué hablaban?"', pressureCost: 10 },
        'pluma_sangre':      { response: '"Mi pluma. Me la robaron. Le juro que me la robaron hace tres días."', pressureCost: 20 },
        'estanquero':        { response: '"El estanquero la vio entrar a Marina con la pluma. Entonces fue Marina quien la robó. Alguien me tendió una trampa."', pressureCost: 8 },
        'movimientos_nestor':{ response: '"Esos movimientos son los pagos al extorsionador. No al revés."', pressureCost: 16 }
      }
    },

    // ──────────────── PEDRO PINHEL ────────────────
    {
      id: 'pedro_pinhel',
      name: 'Pedro Pinhel',
      age: 65,
      role: 'Cliente histórico del bufete — empresario inmobiliario',
      description: 'Bien vestido, educado hasta la esterilidad. Lleva décadas siendo cliente de Caracedo para asuntos "delicados". Es el último vivo del círculo del padre del detective, el "cliente del 86". Sabe exactamente por qué Modesto estaba destruyendo archivos y qué papeles pensaba entregar a la policía.',
      isGuilty: true,
      portraits: {
        neutral:  'assets/img/suspects/Caso6/Sospechosos/PedroPinhel-Neutral.png',
        talking:  'assets/img/suspects/Caso6/Sospechosos/PedroPinhel-Pensativo.png',
        nervous:  'assets/img/suspects/Caso6/Sospechosos/PedroPinhel-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'pinhel-v1',
            text: '¿Cuánto tiempo llevaba siendo cliente del bufete?',
            response: '"Desde los años 80. Modesto era el mejor abogado para ciertos asuntos que requerían... discreción. Confié en él durante cuarenta años."',
            pressureCost: 8
          },
          {
            id: 'pinhel-v2',
            text: '¿Sabía que Modesto pensaba entregar documentos a la policía?',
            response: '"Eso es una suposición suya, inspector. Modesto estaba ordenando sus archivos para la transición a su hija. Nada más."',
            pressureCost: 14
          },
          {
            id: 'pinhel-v3',
            text: '¿Qué tipo de asuntos "delicados" gestionaba Caracedo para usted?',
            response: '"Todo legal. Operaciones inmobiliarias en zonas con complejidades administrativas. El tipo de cosas que requieren un abogado experto y discreto. Nada que le incumba a la policía."',
            pressureCost: 12
          }
        ],
        coartada: [
          {
            id: 'pinhel-c1',
            text: '¿Dónde estaba entre las 22 y las 23 del viernes?',
            response: '"En mi domicilio. Solo. Tenía dolor de espalda y me quedé en casa."',
            pressureCost: 10
          },
          {
            id: 'pinhel-c2',
            text: '¿Sacó usted 50.000€ en efectivo dos días antes del crimen?',
            response: '"Hago movimientos de esa cantidad con cierta regularidad. Es dinero de operaciones inmobiliarias."',
            pressureCost: 16
          },
          {
            id: 'pinhel-c3',
            text: '¿Conocía a Marina Caracedo, la becaria del bufete?',
            response: '"La conozco de verla en el bufete. No tengo relación personal con ella."',
            pressureCost: 14
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':          { response: '"Ese cuchillo no lo he visto nunca."', pressureCost: 5 },
        'papeles_ardidos':   { response: '"No sé qué había en esos papeles. No voy a comentar los archivos internos de mi abogado."', pressureCost: 8 },
        'camara_calle':      { response: '"Una figura femenina. Claramente no soy yo."', pressureCost: 6 },
        'movimientos_pinhel':{ response: '"Ya le he explicado que son movimientos habituales de mi actividad empresarial."', pressureCost: 14 },
        'mensajes_marina':   { response: '"¿Mensajes de Marina a mí? No sé de qué habla. Quizás me preguntaba por un asunto del bufete."', pressureCost: 20 },
        'pluma_sangre':      { response: '"La pluma es de Néstor Galindo. Yo no tengo nada que ver con eso."', pressureCost: 8 },
        'estanquero':        { response: '"[pausa] El estanquero puede haberse confundido. La calle estaba oscura."', pressureCost: 22 },
        'movimientos_nestor':{ response: '"No sé nada de los movimientos de Néstor. Cada uno gestiona su dinero como puede."', pressureCost: 10 }
      }
    },

    // ──────────────── MARINA CARACEDO ────────────────
    {
      id: 'marina',
      name: 'Marina Caracedo',
      age: 28,
      role: 'Sobrina de Modesto — becaria del bufete',
      description: 'Joven, inteligente, ambiciosa en exceso. Es sobrina de Modesto, no hija. Su carrera dependía del bufete. Cuando Pinhel le dijo que Modesto iba a "quemar el negocio" denunciando casos antiguos, eligió el dinero y su futuro sobre la familia. Llegó al callejón con la pluma de Néstor en la mano.',
      isGuilty: true,
      portraits: {
        neutral:  'assets/img/suspects/Caso6/Sospechosos/MarinaCaracedo-Neutral.png',
        talking:  'assets/img/suspects/Caso6/Sospechosos/MarinaCaracedo-Pensativa.png',
        nervous:  'assets/img/suspects/Caso6/Sospechosos/MarinaCaracedo-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'marina-v1',
            text: '¿Cuál era su relación con Modesto Caracedo?',
            response: '"Era mi tío. Me dio la beca y me enseñó el oficio. Le debo mucho profesionalmente."',
            pressureCost: 8
          },
          {
            id: 'marina-v2',
            text: '¿Sabía que los archivos que destruía podían afectar a su carrera?',
            response: '"Todo lo que afecte al bufete me afecta a mí. Llevo dos años construyendo aquí mi futuro."',
            pressureCost: 12
          },
          {
            id: 'marina-v3',
            text: '¿Tiene relación con Pedro Pinhel fuera del bufete?',
            response: '"Solo le conozco de verle llegar a reuniones. No tengo relación personal con él."',
            pressureCost: 14
          }
        ],
        coartada: [
          {
            id: 'marina-c1',
            text: '¿Dónde estaba entre las 22 y las 23 del viernes?',
            response: '"En el bufete. Trabajando hasta tarde. Tenía un informe pendiente."',
            pressureCost: 10
          },
          {
            id: 'marina-c2',
            text: '¿El estanquero del quiosco de la esquina la vio entrar al callejón con una pluma en la mano. ¿Cómo explica eso?',
            response: '"El estanquero se confunde. Yo entré al callejón a buscar mi paraguas, que creí haber dejado allí. No llevaba ninguna pluma."',
            pressureCost: 24
          },
          {
            id: 'marina-c3',
            text: '¿Cómo fue posible que Pinhel le ofreciera 50.000€?',
            response: '"No sé de qué habla. No he recibido ningún dinero de Pinhel."',
            pressureCost: 20
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':          { response: '"No sé nada de ese cuchillo."', pressureCost: 5 },
        'papeles_ardidos':   { response: '"Esos papeles los estaba quemando mi tío antes de morir. No sé qué tenían."', pressureCost: 8 },
        'camara_calle':      { response: '"Esa figura podría ser cualquiera. Hay varias mujeres jóvenes que trabajan en el edificio."', pressureCost: 14 },
        'movimientos_pinhel':{ response: '"Los movimientos de Pinhel no son asunto mío."', pressureCost: 8 },
        'mensajes_marina':   { response: '"Le pregunté por el estado de ciertos asuntos del bufete. Nada más."', pressureCost: 20 },
        'pluma_sangre':      { response: '"Esa pluma es de Néstor. Yo no tengo esa pluma."', pressureCost: 10 },
        'estanquero':        { response: '"El estanquero está equivocado. No sé qué más decir."', pressureCost: 22 },
        'movimientos_nestor':{ response: '"No sé nada de Néstor y su dinero."', pressureCost: 8 }
      }
    },

    // ──────────────── EULOGIO PACHECO HIJO ────────────────
    {
      id: 'eulogio_hijo',
      name: 'Eulogio Pacheco (hijo)',
      age: 50,
      role: 'Médico-abogado del bufete — hijo del Don Eulogio del caso 4',
      description: 'Correcto, formal, habla poco. Es médico de formación pero trabaja como asesor legal-médico en el Estudio Caracedo, una combinación rara que le permite firmar documentos en los dos ámbitos. Es el hijo del médico del pueblo del caso 4.',
      isGuilty: false,
      portraits: {
        neutral:  'assets/img/suspects/Caso6/Sospechosos/EulogioPachecoHijo-Neutral.png',
        talking:  'assets/img/suspects/Caso6/Sospechosos/EulogioPachecoHijo-Pensativo.png',
        nervous:  'assets/img/suspects/Caso6/Sospechosos/EulogioPachecoHijo-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'eulogio_hijo-v1',
            text: '¿Qué función ejercía usted en el Estudio Caracedo?',
            response: '"Asesoría legal-médica. Modesto me contrató hace quince años porque algunos casos del bufete requerían criterio clínico. Certificaciones, informes periciales, ese tipo de trabajo."',
            pressureCost: 8
          },
          {
            id: 'eulogio_hijo-v2',
            text: '¿Su padre fue condenado en el caso de Talavera?',
            response: '"[breve pausa] Sí. Mi padre cometió un error hace muchos años. Yo no tengo nada que ver con eso. Llevo quince años construyendo mi propia carrera al margen de lo que hizo él."',
            pressureCost: 12
          },
          {
            id: 'eulogio_hijo-v3',
            text: '¿Firmó usted alguna vez documentos relacionados con la familia Mora?',
            response: '"[pausa larga] Modesto me pidió alguna vez firmar certificaciones de asuntos que él consideraba cerrados. Firmas médicas sobre estados de salud. No recuerdo todos los detalles."',
            pressureCost: 16
          }
        ],
        coartada: [
          {
            id: 'eulogio_hijo-c1',
            text: '¿Dónde estaba entre las 22 y las 23 del viernes?',
            response: '"En casa. Mi mujer puede confirmarlo."',
            pressureCost: 8
          },
          {
            id: 'eulogio_hijo-c2',
            text: '¿Tenía acceso a la llave del despacho de Néstor Galindo?',
            response: '"Todos los que trabajamos en el bufete tenemos llave del pasillo principal. No del despacho concreto de Néstor."',
            pressureCost: 10
          },
          {
            id: 'eulogio_hijo-c3',
            text: '¿Sabe por qué Modesto estaba destruyendo documentos de 2023?',
            response: '"No tengo información sobre eso. Mi trabajo es muy específico y no tenía acceso a todos los archivos del bufete."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':          { response: '"No lo había visto antes."', pressureCost: 4 },
        'papeles_ardidos':   { response: '"Si había un nombre en esos papeles de 2023... Modesto tenía asuntos que yo no conocía en su totalidad."', pressureCost: 10 },
        'camara_calle':      { response: '"No soy yo. Soy hombre y esa figura es femenina."', pressureCost: 4 },
        'movimientos_pinhel':{ response: '"50.000€ en efectivo. No sé para qué."', pressureCost: 8 },
        'mensajes_marina':   { response: '"Marina y Pinhel en contacto. Eso no lo sabía."', pressureCost: 10 },
        'pluma_sangre':      { response: '"La pluma es de Néstor. Lo sé porque la he visto en su escritorio muchas veces."', pressureCost: 8 },
        'estanquero':        { response: '"Si el estanquero vio a Marina entrar con esa pluma, entonces Marina la robó del despacho de Néstor."', pressureCost: 10 },
        'movimientos_nestor':{ response: '"Néstor tiene problemas financieros desde hace tiempo. No sé el origen exacto."', pressureCost: 8 }
      }
    }
  ],

  evidence: [
    {
      id: 'cuchillo',
      title: 'Cuchillo de Cocina',
      type: 'objeto',
      icon: '🔪',
      iconPath: 'assets/img/icons/Pruebas/icon_cuchillo.png',
      imagePath: 'assets/img/suspects/Caso6/Pruebas/P1 — Cuchillo de Cocina.png',
      shortDesc: 'Cuchillo de cocina de 22cm. Encontrado en alcantarilla cercana. Sin huellas.',
      fullDesc: 'Cuchillo de cocina de hoja ancha, marca genérica. Hallado en una alcantarilla a 40 metros del cuerpo. Las huellas dactilares están borradas (agua de la alcantarilla). El análisis de sangre confirma que es el arma homicida: tipo sanguíneo coincide con la víctima.',
      metadata: { fecha: '05-09-2026', fuente: 'Inspección callejón y alcantarilla', ref: 'OBJ-06-001' }
    },
    {
      id: 'papeles_ardidos',
      title: 'Papeles Ardidos',
      type: 'documento',
      icon: '🔥',
      iconPath: 'assets/img/icons/Pruebas/icon_papeles_ardidos.png',
      imagePath: 'assets/img/suspects/Caso6/Pruebas/P2 — Papeles Ardidos.png',
      shortDesc: 'Bolsa con documentos parcialmente quemados. Mencionan "caso Mora del 86" y un nombre: Elena Solana (2023).',
      fullDesc: 'Bolsa de papel con documentos quemados al 70%. El 30% rescatable incluye: fragmentos de varios expedientes de los años 80-90 con referencias al "caso Mora del 86", y una hoja con fecha 2023 que menciona el nombre "Elena Solana" en el encabezado y las iniciales "R. Mora" como firmante al pie. El detective la lee. "Habrá muchas Elena Solana en este país. ¿Qué relación tiene mi mujer con un bufete de abogados?"',
      metadata: { fecha: '05-09-2026', fuente: 'Junto al cuerpo en el callejón', ref: 'DOC-06-002' }
    },
    {
      id: 'camara_calle',
      title: 'Cámara de Seguridad',
      type: 'video',
      icon: '📹',
      iconPath: 'assets/img/icons/Pruebas/icon_cctv_video.png',
      imagePath: 'assets/img/suspects/Caso6/Pruebas/P3 — Cámara Calle.png',
      shortDesc: 'Figura femenina joven entrando al callejón a las 22:17h. Sale a las 22:41h.',
      fullDesc: 'Cámara de la calle de Sagasta. Imagen de baja resolución. Una figura femenina joven, entre 25 y 35 años, entra al callejón trasero del bufete a las 22:17h. Sale sola a las 22:41h, sin la bolsa que llevaba al entrar. La entrada de Modesto al callejón no queda registrada en esta cámara (entró por otro extremo).',
      metadata: { fecha: '05-09-2026', fuente: 'Cámara calle Sagasta', ref: 'VID-06-003' }
    },
    {
      id: 'movimientos_pinhel',
      title: 'Movimientos de Pinhel',
      type: 'documento',
      icon: '💳',
      iconPath: 'assets/img/icons/Pruebas/icon_banco.png',
      imagePath: 'assets/img/suspects/Caso6/Pruebas/P4 — Movimientos Bancarios Pinhel.png',
      shortDesc: '50.000€ retirados en efectivo dos días antes del crimen.',
      fullDesc: 'Extracto bancario de Pedro Pinhel (orden judicial). Dos días antes del crimen: retirada de 50.000€ en efectivo en tres sucursales distintas de Madrid. No corresponde a ninguna operación inmobiliaria registrada. Es el pago acordado con Marina Caracedo para ejecutar el plan.',
      metadata: { fecha: '05-09-2026', fuente: 'Banco — orden judicial', ref: 'DOC-06-004' }
    },
    {
      id: 'mensajes_marina',
      title: 'Mensajes en el Móvil de Marina',
      type: 'documento',
      icon: '📱',
      iconPath: 'assets/img/icons/Pruebas/icon_movil.png',
      imagePath: 'assets/img/suspects/Caso6/Pruebas/P5 — Mensajes Marina.png',
      shortDesc: '"Necesito hablar contigo" — Marina a Pinhel, 4 mensajes en la semana anterior.',
      fullDesc: 'Extracción del teléfono de Marina Caracedo. Cuatro mensajes enviados a Pedro Pinhel en los siete días anteriores al crimen: "Necesito hablar contigo", "¿Cuándo podemos vernos?", "Mi tío está tomando una decisión que nos destruye a los dos", "Confirma la cantidad". Pinhel no respondió nunca por escrito.',
      metadata: { fecha: '05-09-2026', fuente: 'Móvil de Marina Caracedo — orden judicial', ref: 'DOC-06-005' }
    },
    {
      id: 'pluma_sangre',
      title: 'Pluma Estilográfica con Sangre',
      type: 'objeto',
      icon: '🖊️',
      iconPath: 'assets/img/icons/Pruebas/icon_pluma.png',
      imagePath: 'assets/img/suspects/Caso6/Pruebas/P6 — Pluma con Sangre.png',
      shortDesc: 'Pluma cara con sangre. Encontrada a 3 metros del cuerpo. ES LA PRUEBA PLANTADA.',
      fullDesc: 'Pluma estilográfica de marca Montblanc, modelo Meisterstück. Sangre de la víctima en la capucha. Hallada cerca del cuerpo, visible, como olvidada. La pluma PERTENECE A NÉSTOR GALINDO (confirmado por él mismo y por otros testigos del bufete). PERO: el estanquero del quiosco de la esquina vio a una figura femenina joven entrar al callejón con una pluma en la mano esa noche. Marina robó la pluma del despacho de Néstor tres días antes para plantarla en la escena.',
      metadata: { fecha: '05-09-2026', fuente: 'Escena del crimen — callejón Sagasta', ref: 'OBJ-06-006' }
    },
    {
      id: 'estanquero',
      title: 'Declaración del Estanquero',
      type: 'documento',
      icon: '🏪',
      iconPath: 'assets/img/icons/Pruebas/icon_declaracion.png',
      imagePath: 'assets/img/suspects/Caso6/Pruebas/P7 — Declaración Estanquero.png',
      shortDesc: 'Vio a una mujer joven entrar al callejón con "una pluma o bolígrafo largo" en la mano derecha a las 22:14h.',
      fullDesc: 'El estanquero del quiosco de la esquina de Sagasta con Almagro declara: "A las diez y cuarto más o menos vi a una chica joven, morena, con abrigo oscuro, entrar por el callejón de atrás del bufete. Llevaba algo largo en la mano derecha, parecía una pluma de esas de lujo. Lo recuerdo porque pensé que era raro llevarlo así, apretado en el puño." Esta declaración es clave: la pluma no estaba ya en el callejón cuando llegó Marina. Ella la llevó consigo para plantarla.',
      metadata: { fecha: '05-09-2026', fuente: 'Declaración voluntaria del estanquero', ref: 'TEST-06-007' }
    },
    {
      id: 'movimientos_nestor',
      title: 'Movimientos Bancarios de Néstor',
      type: 'documento',
      icon: '💰',
      iconPath: 'assets/img/icons/Pruebas/icon_banco.png',
      imagePath: 'assets/img/suspects/Caso6/Pruebas/P8 — Movimientos Néstor.png',
      shortDesc: 'Transferencias irregulares: Néstor paga 3.000€ mensuales a una cuenta opaca.',
      fullDesc: 'Extracto de Néstor Galindo. Transferencias mensuales de 3.000€ a una cuenta registrada en Malta. Sin concepto. Néstor explica que es el pago a su extorsionador. Las transferencias son en dirección contraria a lo que una investigación de homicidio requeriría (Néstor paga, no cobra): confirma que Néstor es víctima de extorsión, no asesino.',
      metadata: { fecha: '05-09-2026', fuente: 'Banco — orden judicial', ref: 'DOC-06-008' }
    }
  ],

  contradictions: [
    {
      id: 'c06-marina-camara',
      suspectId: 'marina',
      questionIds: ['marina-c1'],
      evidenceId: 'camara_calle',
      statement: 'Marina dice estar en el bufete trabajando entre las 22 y las 23.',
      proof: 'La cámara de Sagasta registra una figura femenina joven entrando al callejón a las 22:17h y saliendo a las 22:41h. El acceso al callejón es exclusivo por la entrada trasera del bufete.',
      suspicionBonus: 25,
      isRedHerring: false
    },
    {
      id: 'c06-marina-pluma',
      suspectId: 'marina',
      questionIds: ['marina-c2'],
      evidenceId: 'estanquero',
      statement: 'Marina niega llevar ninguna pluma cuando entró al callejón y niega relación con la pluma de Néstor.',
      proof: 'El estanquero la vio entrar con la pluma en la mano a las 22:14h. La pluma pertenece a Néstor, quien confirmó que desapareció de su despacho tres días antes. Marina robó la pluma del despacho de Néstor para plantarla junto al cuerpo.',
      suspicionBonus: 35,
      isRedHerring: false
    },
    {
      id: 'c06-pinhel-marina',
      suspectId: 'pedro_pinhel',
      questionIds: ['pinhel-c3', 'pinhel-v2'],
      evidenceId: 'mensajes_marina',
      statement: 'Pinhel niega tener relación personal con Marina Caracedo.',
      proof: 'Los mensajes del móvil de Marina muestran cuatro mensajes enviados a Pinhel en la semana anterior, incluyendo "Confirma la cantidad". Pinhel retiró 50.000€ en efectivo dos días después.',
      suspicionBonus: 30,
      isRedHerring: false
    },
    {
      id: 'c06-nestor-pluma',
      suspectId: 'nestor',
      questionIds: ['nestor-c2'],
      evidenceId: 'pluma_sangre',
      statement: 'Néstor niega haber estado en el callejón y dice que la pluma le fue robada del despacho.',
      proof: 'La pluma es suya pero el estanquero vio a una mujer joven (no a Néstor) entrar con ella. Los movimientos bancarios confirman que Néstor paga a alguien, no cobra: es víctima de extorsión, no asesino.',
      suspicionBonus: 0,
      isRedHerring: true,
      clarification: 'Néstor es inocente del crimen. Su pluma fue robada por Marina para incriminarlo. La extorsión que sufre es real pero no relacionada con el homicidio. Acusar a Néstor por la pluma es caer exactamente en la trampa que prepararon Pinhel y Marina.'
    }
  ],

  solution: {
    who:  'marina',
    who2: 'pedro_pinhel',
    how:  'apunalamiento',
    why:  'destruir_documentos'
  },

  who2Options: [
    { id: 'pedro_pinhel',  name: 'Pedro Pinhel',   role: 'Cerebro — pagó a la ejecutora' },
    { id: 'nestor',        name: 'Néstor Galindo',  role: 'Socio del bufete' },
    { id: 'eulogio_hijo',  name: 'Eulogio Pacheco (hijo)', role: 'Médico-abogado' },
    { id: 'sara',          name: 'Sara Caracedo',   role: 'Hija de la víctima' }
  ],

  howOptions: [
    { id: 'apunalamiento',          text: 'Apuñalamiento con cuchillo de cocina en el callejón' },
    { id: 'envenenamiento',         text: 'Envenenamiento con sustancia añadida a la bebida' },
    { id: 'golpe_contundente',      text: 'Golpe contundente en la cabeza' },
    { id: 'disparo',                text: 'Disparo de arma de fuego' }
  ],

  whyOptions: [
    { id: 'destruir_documentos',    text: 'Impedir que Modesto entregara documentos comprometedores a la policía' },
    { id: 'herencia_bufete',        text: 'Hacerse con el control del bufete antes de la transición a Sara' },
    { id: 'venganza_personal',      text: 'Venganza personal por años de maltrato profesional' },
    { id: 'deudas_laborales',       text: 'Disputa por honorarios no pagados' }
  ],

  correctExplanation: 'Pedro Pinhel, último vivo del círculo del 86, sabía que Modesto Caracedo iba a entregar documentación comprometedora a la policía —incluyendo pruebas del "caso Mora del 86" y otros asuntos del bufete que implicaban a Pinhel directamente—. Pinhel contactó a Marina Caracedo, sobrina-becaria del bufete, y le ofreció 50.000€ para evitarlo. Marina robó la pluma de Montblanc del despacho de Néstor tres días antes, la llevó al callejón y apuñaló a su tío. La pluma fue plantada deliberadamente junto al cuerpo para incriminar a Néstor. La prueba decisiva es el estanquero: vio a Marina ENTRAR con la pluma, no encontrarla allí.',

  wrongExplanation: 'Los culpables eran Marina Caracedo (ejecutora) y Pedro Pinhel (cerebro). Marina robó la pluma de Néstor para crear un culpable falso y apuñaló a su tío en el callejón. Pinhel pagó 50.000€ en efectivo, confirmados por sus movimientos bancarios y los mensajes de Marina ("Confirma la cantidad"). La prueba decisiva para romper el engaño de la pluma era el estanquero, que vio a Marina LLEVAR la pluma al callejón —no estaba ya allí—. Néstor Galindo, aunque su pluma fue plantada, solo era víctima de extorsión.',

  // ═══════════════════════════════════════════════════
  // CENA EN CASA — Tras resolver el caso
  // ═══════════════════════════════════════════════════
  cena: {
    apertura: 'El martes no estuviste en comisaría. Llamé. Dijeron que habías salido a las dos. ¿Dónde estabas?',

    repasoPool: [
      {
        id: 'c06_bufete',
        linea: {
          default: 'El bufete Caracedo. Eso sale en las noticias. ¿Qué tenía ese bufete, exactamente?',
          acusoIncorrecto: 'No lo resolviste bien, ¿verdad? ¿Qué pasó con ese bufete?'
        },
        respuestas: [
          { id: 'a', texto: 'Papeles de cuarenta años de casos que alguien quería enterrar para siempre.',
            efecto: { sinceridad: +8, lucidez: -4 },
            replica: 'Cuarenta años. Eso es mucho tiempo cargando con algo.' },
          { id: 'b', texto: 'Un bufete que operaba en zonas grises. Nada que no exista en todos los barrios.',
            efecto: { sinceridad: -6, integridad: -4 },
            replica: 'Qué cínico. No siempre eres así.' },
          { id: 'c', texto: 'Entre esos papeles había un nombre que me detuvo un momento.',
            efecto: { sinceridad: +12, flags: ['papeles_elena'] },
            replica: '¿Qué nombre?' }
        ]
      },
      {
        id: 'c06_nombre_elena',
        linea: {
          default: '¿Caracedo? Suena familiar, pero no consigo ubicarlo. ¿Hemos tenido algo que ver con ese bufete alguna vez?',
          acusoIncorrecto: '¿Algo en esos papeles te llamó la atención?'
        },
        respuestas: [
          { id: 'a', texto: 'Tu nombre aparecía en un papel. Con fecha de 2023. Seguro que no es nada.',
            efecto: { sinceridad: +10, lucidez: -8, flags: ['papeles_elena'] },
            replica: '[larga pausa] ¿Mi nombre? ¿En un bufete de abogados? No... no recuerdo nada de eso.' },
          { id: 'b', texto: 'No. Probablemente coincidencia de nombres.',
            efecto: { sinceridad: -8, flags: ['cajon_prohibido'] },
            replica: 'Seguramente. [cambia de tema]' },
          { id: 'c', texto: 'Nada importante. El bufete tenía muchos clientes.',
            efecto: { sinceridad: -6 },
            replica: 'Está bien.' }
        ]
      },
      {
        id: 'c06_martes',
        linea: {
          default: 'Te hago la pregunta otra vez: ¿dónde estabas el martes por la tarde?',
          acusoIncorrecto: 'El martes. ¿Dónde estabas?'
        },
        respuestas: [
          { id: 'a', texto: 'En el bufete, en el callejón, entre los papeles ardidos. Revisando.',
            efecto: { sinceridad: +12, integridad: +5 },
            replica: '[asiente] Gracias por decírmelo.' },
          { id: 'b', texto: 'Seguía el caso. No puedo darte los detalles.',
            efecto: { sinceridad: -4, flags: ['miente_sobre_martes'] },
            replica: 'Llevo semanas sin detalles, ¿sabes?' },
          { id: 'c', texto: 'En comisaría. Habrán confundido los registros.',
            efecto: { sinceridad: -12, integridad: -8, flags: ['miente_sobre_martes'] },
            replica: '[te mira un momento] Está bien.' }
        ]
      }
    ],

    ganchoMemoria: {
      id: 'c06_memoria_papeles',
      linea: 'Prométeme algo. Si alguna vez hay algo sobre los dos que no entiendes, me lo cuentas. ¿Puedes prometerme eso?',
      respuestas: [
        { id: 'a', texto: 'Te lo prometo.',
          efecto: { sinceridad: +12, integridad: +6, flags: ['promete_contar_todo'] },
          replica: '[pausa] Bien. Ahora come.' },
        { id: 'b', texto: 'Haré lo que pueda.',
          efecto: { sinceridad: +5 },
          replica: 'Eso no es una promesa, pero es algo.' },
        { id: 'c', texto: 'Hay cosas que es mejor no saber.',
          efecto: { sinceridad: -10, integridad: -8, flags: ['calla_por_proteccion'] },
          replica: '[silencio muy largo] Está bien. Como quieras.' }
        ]
    }
  }
};

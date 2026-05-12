/**
 * CASO 01: "El Último Brindis"
 * Datos puros de definición del caso. Inmutables en runtime.
 */
var US = US || {};
US.CASES = US.CASES || {};

US.CASES['caso-01'] = {
  id: 'caso-01',
  title: 'El Último Brindis',
  subtitle: 'Caso Nº 2026-0314',
  intro: 'Diego Varela, de 52 años, propietario del prestigioso restaurante "La Estrella", ha sido encontrado muerto en su despacho privado tras una cena exclusiva. La autopsia preliminar indica envenenamiento. Tres personas presentes aquella noche despiertan sospechas. Revise las pruebas, interrogue a los sospechosos, y resuelva el caso antes de que sea demasiado tarde.',

  victim: {
    name: 'Diego Varela',
    age: 52,
    occupation: 'Propietario de "La Estrella"',
    portrait: 'assets/img/suspects/Caso1/Retrato_Victima_casotutorial.png'
  },

  scene: {
    location: 'Restaurante "La Estrella" — Despacho privado',
    date: '14 de marzo de 2026',
    timeOfDeath: 'Entre las 22:00 y las 23:00h',
    cssClass: 'scene-interrogatorio2'
  },

  suspects: [
    // ──────────────── MARTA REQUENA ────────────────
    {
      id: 'marta',
      name: 'Marta Requena',
      age: 45,
      role: 'Socia de negocios (40%)',
      description: 'Fría, calculadora, cooperativa. Muestra poco pesar por la muerte de Diego.',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso1/Sospechosos/martaneutral-withoutbg.png',
        talking: 'assets/img/suspects/Caso1/Sospechosos/martapensativa-withoutbg.png',
        nervous: 'assets/img/suspects/Caso1/Sospechosos/martanerviosa-withoutbg.png'
      },
      questions: {
        vinculo: [
          {
            id: 'marta-v1',
            text: '¿Cuál era tu relación con Diego Varela?',
            response: '"Era mi socio de negocios. Abrimos La Estrella juntos hace 8 años. Él tenía el 60%, yo el 40%. Una relación profesional, nada más."',
            pressureCost: 8
          },
          {
            id: 'marta-v2',
            text: '¿Cómo describirías vuestra relación últimamente?',
            response: '"Tensa, lo admito. Diego quería comprar mi parte del negocio a un precio ridículo. Estaba hablando con mi abogado sobre opciones legales. Pero de ahí a matarlo... eso es absurdo."',
            pressureCost: 10
          },
          {
            id: 'marta-v3',
            text: '¿Conocías a los demás invitados de la cena?',
            response: '"Claro. Hugo es el chef, lleva años en el restaurante. A Lucía la conozco del divorcio, venía a buscar dinero regularmente. No me inspira confianza ninguno de los dos."',
            pressureCost: 8
          }
        ],
        coartada: [
          {
            id: 'marta-c1',
            text: '¿Dónde estabas entre las 22:00 y las 23:00?',
            response: '"En el salón del restaurante, hablando por teléfono con mi abogado, Fernando Ríos. Fue una llamada larga, sobre el tema de las participaciones. Pueden comprobarlo."',
            pressureCost: 10
          },
          {
            id: 'marta-c2',
            text: '¿Entraste en el despacho de Diego esa noche?',
            response: '"No. No tenía razón para hacerlo. Estaba centrada en mi llamada y en disfrutar de la cena."',
            pressureCost: 8
          },
          {
            id: 'marta-c3',
            text: '¿Alguien puede confirmar dónde estabas?',
            response: '"Mi abogado, Fernando Ríos. La llamada duró de las 21:45 a las 22:30. También el camarero Tomás me vio en el salón."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'autopsia':  { response: '"¿Envenenamiento? Dios mío... ¿Quién haría algo así? Yo apenas toqué la comida esa noche, estaba pendiente de la llamada."', pressureCost: 6 },
        'finanzas':  { response: '"¿Desfalco? No tenía ni idea... Yo me ocupo de la parte comercial, no de las cuentas del día a día. Eso lo llevaba Diego con Hugo."', pressureCost: 6 },
        'camara':    { response: '"Ese es Hugo, claramente. Dijo que no salió de la cocina... Interesante. Yo estaba en el salón, como dije."', pressureCost: 5 },
        'carta':     { response: '"No sabía que Hugo le había escrito eso a Diego. Pero no me sorprende, Hugo siempre fue de los que suplican antes de actuar."', pressureCost: 6 },
        'copa':      { response: '"Yo pedí vino blanco. Diego bebía tinto. No toqué su copa en ningún momento."', pressureCost: 5 },
        'telefono':  { response: '"Exacto, eso confirma lo que dije. Estuve al teléfono durante todo ese período. Mi coartada es sólida."', pressureCost: 5 },
        'camarero':  { response: '"¿Hugo sirvió personalmente la copa de Diego? Eso es muy raro. Hugo nunca salía de la cocina para servir, tiene camareros para eso."', pressureCost: 5 },
        'hotel':     { response: '"Así que Lucía se ausentó del bar... No me sorprende que mienta. Siempre fue así. Aunque 10 minutos no son mucho tiempo."', pressureCost: 5 }
      }
    },

    // ──────────────── LUCÍA VARELA ────────────────
    {
      id: 'lucia',
      name: 'Lucía Varela',
      age: 48,
      role: 'Ex-esposa de la víctima',
      description: 'Emocional, a la defensiva. Parece ocultar algo, pero ¿el crimen o un secreto personal?',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso1/Sospechosos/lucianeutral-withoutbg.png',
        talking: 'assets/img/suspects/Caso1/Sospechosos/luciapensativa-withoutbg.png',
        nervous: 'assets/img/suspects/Caso1/Sospechosos/lucianerviosa-withoutbg.png'
      },
      questions: {
        vinculo: [
          {
            id: 'lucia-v1',
            text: '¿Cómo era tu relación con Diego?',
            response: '"Fue mi marido durante 15 años. Nos divorciamos hace uno. No fue amistoso, no. Pero no le guardo rencor... ya no."',
            pressureCost: 8
          },
          {
            id: 'lucia-v2',
            text: '¿Por qué mantuviste contacto con él después del divorcio?',
            response: '"Había asuntos financieros pendientes. Y... sigo siendo beneficiaria de su seguro de vida. No voy a mentir sobre eso, sé cómo suena."',
            pressureCost: 12
          },
          {
            id: 'lucia-v3',
            text: '¿Qué opinas de Hugo Delmar?',
            response: '"Hugo siempre fue amable conmigo. Un buen cocinero. Pero últimamente parecía nervioso, como si algo le preocupase. No sé qué."',
            pressureCost: 8
          }
        ],
        coartada: [
          {
            id: 'lucia-c1',
            text: '¿Dónde estabas entre las 22:00 y las 23:00?',
            response: '"En el bar del Hotel Ritz, a unos 15 minutos del restaurante. Estuve allí toda la noche. Hay cámaras que lo pueden confirmar."',
            pressureCost: 10
          },
          {
            id: 'lucia-c2',
            text: '¿No saliste del bar en ningún momento?',
            response: '"No... bueno... fui al baño un momento sobre las diez. Pero no salí del hotel, desde luego."',
            pressureCost: 10
          },
          {
            id: 'lucia-c3',
            text: '¿Con quién estabas en el hotel?',
            response: '"Sola. Bueno... [pausa] ...estaba esperando a alguien. Un... amigo. Pero eso no tiene nada que ver con esto."',
            pressureCost: 12
          }
        ]
      },
      evidenceResponses: {
        'autopsia':  { response: '"¿Veneno? [se lleva la mano a la boca] Oh Dios... Es horrible. ¿Quién podría...? Yo no sé nada de venenos, se lo juro."', pressureCost: 6 },
        'finanzas':  { response: '"¿Alguien robaba del restaurante? Diego era muy meticuloso con las cuentas. Si lo descubrió, seguro que estaba furioso."', pressureCost: 6 },
        'camara':    { response: '"¿Ese es Hugo? ¿Junto al despacho de Diego? Pero él dijo que no salió de la cocina..."', pressureCost: 5 },
        'carta':     { response: '"Hugo le suplicaba que no fuera a la policía... Entonces Hugo tenía un motivo real. Dios mío."', pressureCost: 6 },
        'copa':      { response: '"¿La copa de Diego? Yo no estuve ni en el restaurante esa noche. No pude tocar ninguna copa."', pressureCost: 5 },
        'telefono':  { response: '"Eso demuestra que Marta estaba en el salón, ¿no? Al menos ella tiene coartada clara."', pressureCost: 5 },
        'camarero':  { response: '"¿Hugo sirvió la copa personalmente? Eso es... eso es sospechoso. ¿Por qué haría el chef eso?"', pressureCost: 5 },
        'hotel':     { response: '"Vale, sí, me levanté un momento. Fui al baño, ¿de acuerdo? ¡Solo fueron 10 minutos! No me dio tiempo ni de salir del hotel."', pressureCost: 8 }
      }
    },

    // ──────────────── HUGO DELMAR (CULPABLE) ────────────────
    {
      id: 'hugo',
      name: 'Hugo Delmar',
      age: 38,
      role: 'Chef principal de "La Estrella"',
      description: 'Nervioso, intenta aparentar calma. Suda. Sus respuestas son cada vez más evasivas.',
      isGuilty: true,
      portraits: {
        neutral: 'assets/img/suspects/Caso1/Sospechosos/hugoneutral-withoutbg.png',
        talking: 'assets/img/suspects/Caso1/Sospechosos/hugopensativo-removebg.png',
        nervous: 'assets/img/suspects/Caso1/Sospechosos/hugonervioso-removebg.png'
      },
      questions: {
        vinculo: [
          {
            id: 'hugo-v1',
            text: '¿Cómo era tu relación con Diego Varela?',
            response: '"Buena. Normal. Era mi jefe. Llevaba 5 años aquí. Me... me dio una oportunidad cuando nadie más lo hizo."',
            pressureCost: 8
          },
          {
            id: 'hugo-v2',
            text: '¿Es cierto que Diego iba a despedirte?',
            response: '"¿Qué? No... bueno, habíamos tenido algunas diferencias sobre el menú, pero nada grave. Diego valoraba mi trabajo." [se limpia el sudor de la frente]',
            pressureCost: 12
          },
          {
            id: 'hugo-v3',
            text: '¿Qué relación tenías con las finanzas del restaurante?',
            response: '"Ninguna. Yo cocino, no llevo las cuentas. Eso es cosa de Diego y Marta. Yo solo necesito mi presupuesto para ingredientes."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'hugo-c1',
            text: '¿Dónde estabas entre las 22:00 y las 23:00?',
            response: '"En la cocina. Toda la noche. Preparando el menú de degustación. Es un servicio largo, no pude moverme de ahí."',
            pressureCost: 10
          },
          {
            id: 'hugo-c2',
            text: '¿Saliste de la cocina en algún momento?',
            response: '"No. Bueno, quizás al almacén un momento. Pero no subí al despacho de Diego, si es lo que insinúa."',
            pressureCost: 12
          },
          {
            id: 'hugo-c3',
            text: '¿Serviste personalmente algún plato o bebida esa noche?',
            response: '"No, para eso están los camareros. Yo me quedo en mi cocina." [evita mirar a los ojos]',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'autopsia':  { response: '"¿Envenenamiento? Eso es... terrible. Pero en mi cocina no hay venenos, solo ingredientes de primera calidad."', pressureCost: 6 },
        'finanzas':  { response: '"¿Registros financieros? Yo no sé nada de eso. Ya le dije, yo no toco las cuentas." [mira hacia otro lado]', pressureCost: 8 },
        'camara':    { response: '"Eso... eso debe ser un error. O era otro momento. Quizás fui a buscar algo al almacén y pasé por ahí. No fui al despacho." [empieza a sudar visiblemente]', pressureCost: 10 },
        'carta':     { response: '"Eso... [pausa larga] ...Esa carta... Mire, las cosas no son como parecen. Diego exageraba, yo solo... [se calla abruptamente]"', pressureCost: 12 },
        'copa':      { response: '"Yo... yo no puse nada en esa copa. Esto es una locura. [aprieta los puños] Quiero un abogado."', pressureCost: 10 },
        'telefono':  { response: '"Bien por Marta. Entonces ella no fue. Deberían estar mirando a Lucía, la ex-mujer siempre quiso su dinero."', pressureCost: 6 },
        'camarero':  { response: '"¡Tomás exagera! Yo... quizás le acerqué UNA copa a Diego, como gesto. Era una cena especial. No es nada raro." [se pone muy rojo]', pressureCost: 10 },
        'hotel':     { response: '"¿Lo ve? Lucía se ausentó del hotel. Ella pudo haber venido aquí en esos minutos. ¡Compruébenlo!"', pressureCost: 5 }
      }
    }
  ],

  evidence: [
    {
      id: 'autopsia',
      title: 'Informe de Autopsia',
      type: 'documento',
      icon: '📋',
      iconPath: 'assets/img/icons/Pruebas/icon_informe.png',
      imagePath: 'assets/img/suspects/Caso1/Pruebas/P1 — Informe de Autopsia.png',
      shortDesc: 'Muerte por envenenamiento con rodenticida ingerido en bebida.',
      fullDesc: 'Causa de muerte: envenenamiento por rodenticida (brodifacoum). El tóxico fue ingerido por vía oral, mezclado con una bebida alcohólica. Hora estimada del fallecimiento: entre las 22:00 y las 23:00h del 14 de marzo de 2026.',
      metadata: { fecha: '15/03/2026', fuente: 'Dra. Alicia Moreno — Forense', ref: 'AUT-2026-0314' }
    },
    {
      id: 'finanzas',
      title: 'Registros Financieros',
      type: 'documento',
      icon: '💰',
      iconPath: 'assets/img/icons/Pruebas/icon_dinero.png',
      imagePath: 'assets/img/suspects/Caso1/Pruebas/P2 — Registros Financieros.png',
      shortDesc: 'Desvío de 47.000€ en 8 meses hacia la cuenta de Hugo Delmar.',
      fullDesc: 'Auditoría interna de "La Estrella" realizada por Diego Varela. Muestra desvíos de fondos durante 8 meses, por un total de 47.000€. Los desvíos se destinaron a una cuenta bancaria perteneciente a Hugo Delmar.',
      metadata: { fecha: '10/03/2026', fuente: 'Auditoría interna — Diego Varela', ref: 'FIN-2026-0310' }
    },
    {
      id: 'camara',
      title: 'Cámara de Seguridad',
      type: 'fotografía',
      icon: '📸',
      iconPath: 'assets/img/icons/Pruebas/icon_cctv_foto.png',
      imagePath: 'assets/img/suspects/Caso1/Pruebas/P3 — Cámara de Seguridad.png',
      shortDesc: 'Hugo Delmar junto al despacho de Diego a las 22:15h.',
      fullDesc: 'Imagen de la cámara de seguridad del pasillo del primer piso. Se observa a Hugo Delmar caminando hacia el despacho de Diego Varela a las 22:15h del 14 de marzo. Hugo declaró no haber salido de la cocina.',
      metadata: { fecha: '14/03/2026 — 22:15h', fuente: 'Cámara CCTV — Pasillo 1er piso', ref: 'CAM-2026-0314-A' }
    },
    {
      id: 'carta',
      title: 'Carta Manuscrita',
      type: 'documento',
      icon: '✉️',
      iconPath: 'assets/img/icons/Pruebas/icon_carta.png',
      imagePath: 'assets/img/suspects/Caso1/Pruebas/P4 — Carta Manuscrita.png',
      shortDesc: 'Hugo suplica a Diego que no le denuncie por el desfalco.',
      fullDesc: '"Diego, por favor, no vayas a la policía. Puedo devolver todo el dinero. Dame tiempo. Te lo suplico. Lo que hice estuvo mal, lo sé, pero no me arruines la vida. — Hugo". Encontrada en el cajón del escritorio de Diego Varela.',
      metadata: { fecha: 'Sin fecha — Manuscrita', fuente: 'Cajón del escritorio de Diego', ref: 'DOC-2026-0314-B' }
    },
    {
      id: 'copa',
      title: 'Copa de Vino Analizada',
      type: 'objeto',
      icon: '🍷',
      iconPath: 'assets/img/icons/Pruebas/icon_copa.png',
      imagePath: 'assets/img/suspects/Caso1/Pruebas/P5 — Copa de Vino Analizada.png',
      shortDesc: 'Copa de Diego con trazas de rodenticida. Demás copas limpias.',
      fullDesc: 'La copa de vino tinto de Diego contenía trazas de rodenticida (brodifacoum), el mismo agente que causó su muerte. Las demás copas de la mesa estaban limpias. Se encontró un frasco vacío de raticida comercial en el cubo de basura de la cocina.',
      metadata: { fecha: '15/03/2026', fuente: 'Laboratorio Forense Nacional', ref: 'LAB-2026-0315-C' }
    },
    {
      id: 'telefono',
      title: 'Registro Telefónico',
      type: 'documento',
      icon: '📞',
      iconPath: 'assets/img/icons/Pruebas/icon_telefono_registro.png',
      imagePath: 'assets/img/suspects/Caso1/Pruebas/P6 — Registro Telefónico.png',
      shortDesc: 'Marta al teléfono con su abogado de 21:45 a 22:30. Coartada sólida.',
      fullDesc: 'Registro de la operadora que confirma que Marta Requena mantuvo una llamada con Fernando Ríos (abogado) desde las 21:45 hasta las 22:30 del 14 de marzo. La señal se originó en las inmediaciones de La Estrella.',
      metadata: { fecha: '16/03/2026', fuente: 'Operadora Movistar — Registro CDR', ref: 'TEL-2026-0316' }
    },
    {
      id: 'camarero',
      title: 'Declaración del Camarero',
      type: 'testimonio',
      icon: '👤',
      iconPath: 'assets/img/icons/Pruebas/icon_declaracion.png',
      imagePath: 'assets/img/suspects/Caso1/Pruebas/P7 — Declaración del Camarero.png',
      shortDesc: 'Tomás vio a Hugo servir personalmente la copa de vino a Diego.',
      fullDesc: 'Declaración jurada de Tomás Heredia, camarero de La Estrella: "Vi al chef Hugo salir de la cocina con una copa de vino tinto y servírsela personalmente a Don Diego. Me pareció raro porque eso siempre lo hacemos nosotros. Nunca había visto a Hugo servir la mesa."',
      metadata: { fecha: '15/03/2026', fuente: 'Tomás Heredia — Camarero', ref: 'DEC-2026-0315-D' }
    },
    {
      id: 'hotel',
      title: 'CCTV del Hotel Ritz',
      type: 'vídeo',
      icon: '🎥',
      iconPath: 'assets/img/icons/Pruebas/icon_cctv_video.png',
      imagePath: 'assets/img/suspects/Caso1/Pruebas/P8 — CCTV del Hotel Ritz.png',
      shortDesc: 'Lucía ausente del bar 10 min (22:00-22:10). Confirmado: fue al baño.',
      fullDesc: 'Las cámaras del Hotel Ritz muestran a Lucía Varela en el bar durante toda la noche, EXCEPTO una ausencia de 10 minutos entre las 22:00 y las 22:10. El hotel está a 15 min en coche del restaurante. La cámara del pasillo confirma que fue al baño del vestíbulo.',
      metadata: { fecha: '16/03/2026', fuente: 'CCTV Hotel Ritz — Cámaras bar y pasillo', ref: 'VID-2026-0316-E' }
    }
  ],

  contradictions: [
    {
      id: 'c1',
      suspectId: 'hugo',
      questionIds: ['hugo-c1'],
      evidenceId: 'camara',
      statement: '"Estuve en la cocina toda la noche. No pude moverme de ahí."',
      proof: 'La cámara de seguridad muestra a Hugo en el pasillo del despacho a las 22:15h.',
      suspicionBonus: 15
    },
    {
      id: 'c2',
      suspectId: 'hugo',
      questionIds: ['hugo-v3'],
      evidenceId: 'carta',
      statement: '"Yo cocino, no llevo las cuentas. No sé nada de las finanzas."',
      proof: 'La carta manuscrita de Hugo suplica a Diego que no le denuncie por el desfalco, demostrando que SÍ sabía.',
      suspicionBonus: 20
    },
    {
      id: 'c3',
      suspectId: 'hugo',
      questionIds: ['hugo-c3'],
      evidenceId: 'camarero',
      statement: '"No serví personalmente ningún plato ni bebida. Para eso están los camareros."',
      proof: 'El camarero Tomás declaró bajo juramento que Hugo sirvió la copa de vino tinto a Diego personalmente.',
      suspicionBonus: 20
    },
    {
      id: 'c4',
      suspectId: 'lucia',
      questionIds: ['lucia-c1'],
      evidenceId: 'hotel',
      statement: '"Estuve en el bar del Hotel Ritz toda la noche."',
      proof: 'El CCTV muestra una ausencia de 10 minutos (22:00-22:10), aunque fue al baño (pista falsa).',
      suspicionBonus: 5,
      isRedHerring: true
    }
  ],

  solution: {
    who: 'hugo',
    how: 'envenenamiento',
    why: 'encubrir-desfalco'
  },

  howOptions: [
    { id: 'envenenamiento', text: 'Envenenamiento (rodenticida en la copa de vino)' },
    { id: 'apunalamiento', text: 'Apuñalamiento con arma blanca' },
    { id: 'asfixia', text: 'Asfixia / Estrangulamiento' },
    { id: 'disparo', text: 'Disparo con arma de fuego' }
  ],

  whyOptions: [
    { id: 'encubrir-desfalco', text: 'Encubrir un desfalco (evitar la denuncia policial)' },
    { id: 'herencia', text: 'Cobrar la herencia / seguro de vida' },
    { id: 'venganza', text: 'Venganza personal por el divorcio' },
    { id: 'negocio', text: 'Tomar el control del negocio' }
  ],

  correctExplanation: 'Hugo Delmar, desesperado al saber que Diego Varela iba a denunciarle por desfalcar 47.000€ del restaurante durante 8 meses, decidió envenenarlo. Aprovechó la cena privada para mezclar rodenticida en la copa de vino tinto de Diego, sirviéndola personalmente —algo que nunca hacía—. La cámara de seguridad lo captó saliendo de la cocina hacia el despacho, la carta manuscrita demuestra que sabía del desfalco, y el testimonio del camarero confirma que sirvió la copa. Hugo Delmar es culpable del asesinato de Diego Varela.',

  wrongExplanation: 'El verdadero culpable era Hugo Delmar, el chef. Diego había descubierto que Hugo llevaba meses desviando fondos del restaurante (47.000€). Ante la amenaza de denuncia, Hugo envenenó la copa de vino de Diego con rodenticida durante la cena, sirviéndola personalmente. Las pruebas clave eran: la cámara de seguridad, la carta suplicando clemencia, y el testimonio del camarero.',

  // ═══════════════════════════════════════════════════
  // HERRAMIENTAS DE MESA — Teléfono
  //
  // DESACTIVADO en el Acto 1: los números existen como datos pero no hay
  // ningún hook narrativo que se los revele al jugador (ni en respuestas,
  // ni en evidencias, ni en libreta). Marcarlos a ciegas no es jugable.
  // Para reactivar: descomentar el bloque y añadir los puntos donde el
  // jugador descubre cada dígito (p.ej. respuesta de pregunta que mencione
  // el número, anotación automática en libreta al disparar un trigger).
  // ═══════════════════════════════════════════════════
  /* phoneNumbers: [
    {
      id: 'phone-001',
      number: '555-0142',
      source: 'marta-c1 (Abogado Fernando Ríos)',
      description: 'Número de Fernando Ríos, abogado de Marta',
      unlockCondition: 'marta-c1 pregunta hecha',
      response: {
        type: 'text',
        content: 'Llamadas realizadas a este número: 21:45-22:30 (Marta Requena). La llamada fue verificada. Coartada CONFIRMADA para Marta.'
      },
      gameplayEffect: {
        type: 'confirmAlibi',
        target: 'marta'
      }
    },
    {
      id: 'phone-002',
      number: '555-0289',
      source: 'marta-c3 (Camarero Tomás)',
      description: 'Número del camarero del restaurante',
      unlockCondition: 'marta-c3 pregunta hecha',
      response: {
        type: 'text',
        content: 'Hola, soy Tomás. Sí, vi a Marta en el salón toda la noche. Estaba hablando por teléfono. No entró al despacho.'
      },
      gameplayEffect: {
        type: 'addNotebook',
        target: 'testimonio-camarero'
      }
    },
    {
      id: 'phone-003',
      number: '555-9876',
      source: 'Recibo de hotel (evidencia)',
      description: 'Hotel Costa Dorada - recepción',
      unlockCondition: 'hotel evidencia presentada',
      response: {
        type: 'text',
        content: 'Hotel Costa Dorada. ¿Preguntas sobre Lucía Varela? No, no se hospedaba aquí. Nadie con ese nombre en nuestros registros.'
      },
      gameplayEffect: {
        type: 'revealContradiction',
        target: 'lucia-false-alibi'
      }
    },
    {
      id: 'phone-004',
      number: '555-0555',
      source: 'Carta de Hugo (evidencia)',
      description: 'Línea directa del despacho de Diego (escritorio)',
      unlockCondition: 'carta evidencia presentada',
      response: {
        type: 'text',
        content: 'Llamada entrante perdida. Registro de llamadas: 22:15 - Hugo Delmar. Duración: 1 minuto. Diego no respondió.'
      },
      gameplayEffect: {
        type: 'addNotebook',
        target: 'llamada-hugo-perdida'
      }
    }
  ], */

  // ═══════════════════════════════════════════════════
  // CENA EN CASA — Tras resolver el caso
  // ═══════════════════════════════════════════════════
  cena: {
    apertura: 'Salió en las noticias. El envenenamiento del restaurante. ¿Era el tuyo?',

    repasoPool: [
      {
        id: 'c01_marta',
        linea: {
          default: 'La socia, Marta... ¿la descartaste pronto o te dio que pensar?',
          acusoIncorrecto: 'Acusaste a {nombreAcusado}, ¿no? De verdad pensabas que era ella.'
        },
        respuestas: [
          { id: 'a', texto: 'Todo apuntaba a ella al principio. El tema de las participaciones.',
            efecto: { integridad: -3 },
            replica: 'Ya. Pero "apuntar" no es "ser".' },
          { id: 'b', texto: 'Me equivoqué con ella más rato del que debería.',
            efecto: { integridad: +10, sinceridad: +4 },
            replica: 'Reconocerlo ya es algo.' },
          { id: 'c', texto: 'Prefiero no hablar de las pistas que no llevaron a nada.',
            efecto: { sinceridad: -8 },
            replica: 'Como quieras.' }
        ]
      },

      {
        id: 'c01_lucia',
        linea: {
          default: 'Y la ex-mujer. ¿Te dio pena interrogarla?',
          acusoIncorrecto: 'Acusaste a {nombreAcusado}... ¿De verdad pensabas que había cruzado la ciudad para envenenarlo?'
        },
        respuestas: [
          { id: 'a', texto: 'Un poco. Había perdido a alguien, aunque estuvieran divorciados.',
            efecto: { sinceridad: +6 },
            replica: 'A veces me olvido de que aún sientes cosas por la gente.' },
          { id: 'b', texto: 'Mintió sobre su coartada. La pena se le pasa pronto a uno cuando miente.',
            efecto: { integridad: +4 },
            replica: 'Frío.' },
          { id: 'c', texto: 'No. Hago mi trabajo.',
            efecto: { sinceridad: -5, integridad: -3 },
            replica: '...' }
        ]
      },

      {
        id: 'c01_carta',
        linea: {
          default: 'Lo de la carta del chef suplicando... ¿la encontraste pronto?'
        },
        respuestas: [
          { id: 'a', texto: 'No. Estaba en el cajón del muerto. Tardé más de lo que me gusta admitir.',
            efecto: { sinceridad: +8, integridad: +5 },
            replica: 'Ahí está. Eso es hablar.' },
          { id: 'b', texto: 'Enseguida. Encajé las piezas rápido.',
            efecto: { sinceridad: -8, integridad: -5 },
            replica: 'Ajá.' },
          { id: 'c', texto: 'Todas las cartas aparecen cuando tienen que aparecer.',
            efecto: { sinceridad: +2 },
            replica: 'Qué poético te pones.' }
        ]
      },

      {
        id: 'c01_camarero',
        linea: {
          default: 'El camarero que vio al chef servir la copa... ¿se atrevió a declarar sin más?'
        },
        respuestas: [
          { id: 'a', texto: 'Le costó. Tiene hijos, necesita el trabajo.',
            efecto: { sinceridad: +5 },
            replica: 'La gente normal siempre tiene más que perder.' },
          { id: 'b', texto: 'Declaró enseguida. Gente honrada todavía queda.',
            efecto: { integridad: +3 },
            replica: 'Ojalá fuera tan fácil.' },
          { id: 'c', texto: 'Le apreté un poco. No mucho. Lo justo.',
            efecto: { sinceridad: +8, integridad: -4 },
            replica: '...cuánto es "lo justo"?' }
        ]
      },

      {
        id: 'c01_sentir',
        linea: {
          default: '¿Y cómo te sientes? De haberlo cerrado.',
          acusoIncorrecto: '¿Y cómo te sientes? Aunque no lo cerraras del todo.'
        },
        respuestas: [
          { id: 'a', texto: 'Bien. Justicia hecha.',
            efecto: { sinceridad: -5 },
            replica: 'Ya.' },
          { id: 'b', texto: 'Regular. El hombre sigue muerto.',
            efecto: { sinceridad: +8, lucidez: -3 },
            replica: 'Sí.' },
          { id: 'c', texto: 'Cansado. Solo cansado.',
            efecto: { sinceridad: +6, lucidez: -4 },
            replica: 'Come algo.' }
        ]
      }
    ],

    // Gancho de memoria: planta una flag del metaarco.
    // "La Estrella" es el restaurante del caso 01. La mujer recuerda haber ido años atrás.
    ganchoMemoria: {
      id: 'c01_memoria_estrella',
      linea: '¿El restaurante se llamaba La Estrella? Creo que estuvimos allí una vez. Hace doce años, igual. Nuestro aniversario, ¿no?',
      respuestas: [
        { id: 'a', texto: 'No me suena. No creo.',
          efecto: { sinceridad: -8, flags: ['oculta_recuerdo_estrella'] },
          replica: 'Qué raro. Yo lo tengo clavado.' },
        { id: 'b', texto: 'Ahora que lo dices... puede ser. No estoy seguro.',
          efecto: { sinceridad: +4, flags: ['duda_estrella_12y'] },
          replica: 'Ya me acordaré de algún detalle y te lo cuento.' },
        { id: 'c', texto: 'No quiero pensar en ese sitio ahora. No esta noche.',
          efecto: { lucidez: -4, flags: ['rechaza_estrella'] },
          replica: 'Vale. Lo dejo.' }
      ]
    }
  }
};

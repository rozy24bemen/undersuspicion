/**
 * CASO 02: "Sin sangre"
 * Acto I — Caso 1 post-tutorial. Mecánica nueva: pistas falsas (red herrings)
 * con clarification. Sin herramienta nueva.
 *
 * Culpable: Adelina Roca (vecina del rellano, pareja secreta de 30 años).
 * Red herrings: Lourdes (oculta affaire), Iván (oculta sisado de la pensión).
 */
var US = US || {};
US.CASES = US.CASES || {};

US.CASES['caso-02'] = {
  id: 'caso-02',
  title: 'Sin sangre',
  subtitle: 'Caso Nº 2026-0414',
  intro: 'Salvador Cienfuegos, jubilado de 67 años, ha aparecido muerto en la bañera de su piso de Lavapiés. La primera intervención lo dio por caída fortuita. La autopsia llegó hoy a comisaría: el golpe en la nuca es post-mortem. La causa real es asfixia. Tres personas le visitaban con regularidad. Ninguna parece tener motivo. Todas mienten en algo. Tu trabajo es separar las mentiras útiles de las mentiras de vergüenza.',

  victim: {
    name: 'Salvador Cienfuegos',
    age: 67,
    occupation: 'Jubilado',
    portrait: 'assets/img/suspects/Caso2/Retrato_Victima_caso2.png'
  },

  scene: {
    location: 'Calle de Argumosa — Piso bajo, Lavapiés (Madrid)',
    date: '14 de abril de 2026',
    timeOfDeath: 'Entre las 18:00 y las 19:30h',
    cssClass: 'scene-caso2'
  },

  suspects: [
    // ──────────────── LOURDES CIENFUEGOS ────────────────
    {
      id: 'lourdes',
      name: 'Lourdes Cienfuegos',
      age: 61,
      role: 'Hermana mayor de la víctima',
      description: 'Áspera, defensiva. Tiene la llave del piso. Dice no llevarse especialmente bien con su hermano, pero no lo abandona. Algo le incomoda más allá del crimen.',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso2/Sospechosos/LourdesCienfuegos-Neutral.png',
        talking: 'assets/img/suspects/Caso2/Sospechosos/LourdesCienfuegos-Pensativa.png',
        nervous: 'assets/img/suspects/Caso2/Sospechosos/LourdesCienfuegos-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'lourdes-v1',
            text: '¿Cómo era su relación con Salvador?',
            response: '"Era mi hermano pequeño. Le llevaba seis años. Nos veíamos los lunes, por costumbre. Tampoco le voy a engañar: no éramos uña y carne. Pero la familia es la familia. Subía, le hacía la compra grande, le dejaba la nevera lista para la semana."',
            pressureCost: 8
          },
          {
            id: 'lourdes-v2',
            text: '¿Iba a heredar usted?',
            response: '"Sí. La mitad. La otra mitad mi sobrino Iván. La casa, los ahorros, el coche viejo que ya ni arrancaba. Salvador era ahorrador, sí. ¿Insinúa algo?"',
            pressureCost: 12
          },
          {
            id: 'lourdes-v3',
            text: '¿Sabía que su hermano tenía una vecina muy cercana?',
            response: '"¿Adelina? Sí, le subía la compra cuando llovía, le hacía un caldo si tenía catarro. Buena mujer. Salvador siempre decía que era \'como otra hermana\'. ¿Por qué pregunta?"',
            pressureCost: 8
          }
        ],
        coartada: [
          {
            id: 'lourdes-c1',
            text: '¿Dónde estaba entre las 18:00 y las 19:30?',
            response: '"En mi casa. Descansando. Llevaba un día largo."',
            pressureCost: 10
          },
          {
            id: 'lourdes-c2',
            text: '¿Hubo alguien con usted que pueda confirmar dónde estaba?',
            response: '"No. Vivo sola, inspector. ¿Quiere también el detalle del programa de televisión que vi? No tengo coartada de cine. Y no llamé a nadie. Lo siento."',
            pressureCost: 12
          },
          {
            id: 'lourdes-c3',
            text: '¿Cuándo fue la última vez que entró al piso de Salvador?',
            response: '"El lunes pasado. Le llené la nevera y me fui. Salvador no era de visitas largas. Hablamos diez minutos del tiempo y de mi rodilla. Ya."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'forense':         { response: '"¿Asfixia? Por Dios. ¿Quién haría algo así a un viejo solo? Pensaba que se había caído."', pressureCost: 5 },
        'almohada':        { response: '"Una almohada... [pausa] Adelina iba todos los días. Pregúntele a ella, yo no entro al dormitorio de mi hermano desde hace meses."', pressureCost: 8 },
        'cctv':            { response: '"Las cámaras del portal. Las puse yo, ¿sabe? Me costó tres reuniones de comunidad. Pues ahí lo tienen, mírenlas todas."', pressureCost: 6 },
        'testamento':      { response: '"¿80.000€ para Adelina? Pero si era solo la vecina. Salvador no me había dicho nada de eso. [pausa] La verdad es que tampoco hablábamos de cuentas."', pressureCost: 10 },
        'banco_lourdes':   { response: '"[silencio largo] Esos recibos... no son lo que parecen. No vienen del piso de mi hermano, le aseguro que no."', pressureCost: 16 },
        'cuenta_salvador': { response: '"¿Alguien le sisaba? [respira hondo] Tendrá que ser Iván, no se puede ser tan caradura. Pero matar al tío no, eso no lo veo. No mi sobrino."', pressureCost: 8 },
        'fotos':           { response: '"¿Estas fotos? No las había visto en mi vida. ¿Salvador y Adelina? [pausa larga] Mi madre estaría revolviéndose en la tumba. Treinta años con la vecina y nadie nos lo dijo."', pressureCost: 10 },
        'calendario':      { response: '"Mi hermano marcaba siempre el aniversario de la muerte de nuestra madre. Será eso. O algún cumpleaños. No sabría decirle."', pressureCost: 6 }
      }
    },

    // ──────────────── IVÁN CIENFUEGOS ────────────────
    {
      id: 'ivan',
      name: 'Iván Cienfuegos',
      age: 38,
      role: 'Sobrino de la víctima',
      description: 'Inquieto, mal vestido, ojeras. Hijo de un hermano fallecido. Coheredero. Tiene deudas. Se nota que esconde algo, aunque parezca demasiado torpe para haberlo hecho.',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso2/Sospechosos/IvánCienfuegos-Neutral.png',
        talking: 'assets/img/suspects/Caso2/Sospechosos/IvánCienfuegos-Pensativo.png',
        nervous: 'assets/img/suspects/Caso2/Sospechosos/IvánCienfuegos-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'ivan-v1',
            text: '¿Cómo era tu relación con tu tío?',
            response: '"Mi tío era buena gente. Yo no le veía mucho, soy más de mi tía. Pero le tenía aprecio, sí. Las pocas veces que íbamos al fútbol los dos juntos, se reía como un crío."',
            pressureCost: 8
          },
          {
            id: 'ivan-v2',
            text: '¿Heredas?',
            response: '"La mitad. La otra mitad mi tía. Pero no contaba con esto, joder. Mi tío se cuidaba, comía sano, andaba todos los días por el barrio. Pensaba que iba a enterrarnos a todos."',
            pressureCost: 12
          },
          {
            id: 'ivan-v3',
            text: '¿Tienes deudas?',
            response: '"Algunas. ¿Quién no? Pero de ahí a... no, ni de coña. Mi tío no. Ni se me pasaría por la cabeza."',
            pressureCost: 14
          }
        ],
        coartada: [
          {
            id: 'ivan-c1',
            text: '¿Dónde estabas entre las 18:00 y las 19:30?',
            response: '"En una sala de apuestas. Spotbet, en Sol. Tienen cámaras y registro de jugadas. Estuve toda la tarde. Si lo prefiere, le doy el resguardo del traspaso a un caballo que perdió a las siete menos cuarto. La Garra. Buen nombre, mal animal."',
            pressureCost: 8
          },
          {
            id: 'ivan-c2',
            text: '¿Cuándo fue la última vez que entraste al piso de tu tío?',
            response: '"No sé... un mes, mes y medio. Le bajé unas medicinas de la farmacia de Tribunal. No iba mucho, no le gusta... le gustaba la gente en casa."',
            pressureCost: 12
          },
          {
            id: 'ivan-c3',
            text: '¿Le pediste dinero alguna vez?',
            response: '"Una vez. Hace dos años, cuando me echaron del taller. Me ayudó. Lo devolví como pude. Ya está."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'forense':         { response: '"Joder. ¿Le mataron? Pensaba que se había caído en la bañera, lo del golpe. Eso me dijeron en el primer parte."', pressureCost: 6 },
        'almohada':        { response: '"Una almohada. Eso es saña, eso no es de robar. Eso es alguien con cabreo encima."', pressureCost: 8 },
        'cctv':            { response: '"No estuve allí. Ya se lo he dicho. Y tengo cámara y resguardo de Spotbet, no es que me haya inventado la coartada."', pressureCost: 6 },
        'testamento':      { response: '"¿Adelina? ¿La vecina? ¿80.000€? [pausa] No tenía ni idea. Mi tía tampoco lo sabía, supongo. Mi tío era reservado para sus cosas. Pero, oiga, si lo tachó... tampoco se lo iba a dar al final, ¿no?"', pressureCost: 10 },
        'banco_lourdes':   { response: '"Mi tía sabrá lo suyo. Yo no me meto en la economía de mi tía."', pressureCost: 5 },
        'cuenta_salvador': { response: '"[muy nervioso, mira al suelo] Eso... eso lo puedo explicar. No es lo que parece, ¿vale? Mi tío me dejaba coger algo de pasta a veces. No le sisaba, qué dice. Eran préstamos."', pressureCost: 16 },
        'fotos':           { response: '"¿Mi tío estaba liado con la vecina? [risa nerviosa] Madre mía. Mi madre se muere otra vez. Mi tío era un cachondo, fíjate."', pressureCost: 8 },
        'calendario':      { response: '"Sería el aniversario de la abuela. Mi tío era de esas cosas. Se acordaba de fechas que nadie más recuerda."', pressureCost: 6 }
      }
    },

    // ──────────────── ADELINA ROCA (CULPABLE) ────────────────
    {
      id: 'adelina',
      name: 'Adelina Roca',
      age: 54,
      role: 'Vecina del rellano',
      description: 'Amable, atenta. Va al piso de Salvador todos los días. La menos sospechosa a primera vista. Habla con dulzura pero, conforme avanzan las preguntas, las pausas se alargan.',
      isGuilty: true,
      portraits: {
        neutral: 'assets/img/suspects/Caso2/Sospechosos/AdelinaRoca-Neutral.png',
        talking: 'assets/img/suspects/Caso2/Sospechosos/AdelinaRoca-Pensativa.png',
        nervous: 'assets/img/suspects/Caso2/Sospechosos/AdelinaRoca-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'adelina-v1',
            text: '¿Cuál era su relación con Salvador?',
            response: '"Éramos vecinos de toda la vida. Cuarenta años en este edificio. Le bajaba la compra los días de lluvia, le hacía la cena cuando le dolía la cadera. Casi como un hermano para mí."',
            pressureCost: 8
          },
          {
            id: 'adelina-v2',
            text: '¿Sabía algo de su testamento?',
            response: '"Salvador no era de hablar de esas cosas conmigo. Eso era de la familia, de Lourdes y del sobrino. Yo era solo la vecina."',
            pressureCost: 12
          },
          {
            id: 'adelina-v3',
            text: '¿Discutieron alguna vez?',
            response: '"¿Discutir? No, hijo. ¿Cómo iba a discutir con un hombre tan bueno? La última vez le hice yo un caldo, hace tres días. Le dejé la tarrina en la nevera."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'adelina-c1',
            text: '¿Dónde estaba entre las 18:00 y las 19:30?',
            response: '"En mi casa, en el rellano. Aquí mismo. Vi por la mirilla a la portera bajar la basura sobre las siete. Salvador no quería visita esa tarde, dormía la siesta. Y yo no le molesto cuando duerme."',
            pressureCost: 10
          },
          {
            id: 'adelina-c2',
            text: '¿Entró al piso de Salvador esa tarde?',
            response: '"No. ¿Para qué? Ya le digo que dormía. Yo respeto los horarios."',
            pressureCost: 12
          },
          {
            id: 'adelina-c3',
            text: '¿Cuándo cenó Salvador la última vez con usted?',
            response: '"Hace... una semana, igual. Le hice rape al horno. Le gustaba mucho cómo lo hacía yo. Ahora ya..."',
            pressureCost: 8
          }
        ]
      },
      evidenceResponses: {
        'forense':         { response: '"¿Asfixia? Pero si decían que se había caído... Pobre hombre. Eso no se le hace a nadie, y menos a Salvador."', pressureCost: 6 },
        'almohada':        { response: '"La almohada... habrá sido al moverlo, supongo. Cuando lo encontraron y lo levantaron de la bañera. Estas cosas pasan, los cuerpos manchan."', pressureCost: 8 },
        'cctv':            { response: '"[se ajusta el pañuelo] Sí, claro, entré. Le había bajado una tarrina de caldo, ya se lo dije. Me crucé con él en la entrada, hablamos cinco minutos. A las siete y media yo ya estaba en mi casa otra vez. Si he dicho que no entré es porque yo lo entiendo como una visita, una conversación de café. Bajar caldo no es entrar."', pressureCost: 12 },
        'testamento':      { response: '"[pausa larga] ¿Que iba a reconocerme con 80.000€? No sabía nada de eso, hijo. [silencio] Salvador me dijo, sí, la semana pasada me dijo que se lo había pensado mejor. Por la familia. Por la familia siempre."', pressureCost: 16 },
        'banco_lourdes':   { response: '"Yo de las cuentas no sé nada. Pregunte a Lourdes. Cada uno con sus cosas."', pressureCost: 5 },
        'cuenta_salvador': { response: '"¿Le robaban a Salvador? Pero qué horror. Pobre hombre, encima eso. Sería el sobrino, ese siempre andaba mal de pasta."', pressureCost: 5 },
        'fotos':           { response: '"[silencio muy largo] Esas fotos... [voz distinta] son de hace mucho. Salvador y yo éramos novios, sí. Treinta años. Pero queríamos mantenerlo en privado. Le daba vergüenza con la familia, con la hermana, ya sabe cómo es ella. ¿Y qué más da ya, inspector? Está muerto."', pressureCost: 18 },
        'calendario':      { response: '"El día rojo... un aniversario, supongo. Salvador era de marcar fechas. No sé qué fecha era esa concretamente. Tendrá que preguntar a la hermana."', pressureCost: 6 }
      }
    }
  ],

  evidence: [
    {
      id: 'forense',
      title: 'Informe forense',
      type: 'documento',
      icon: '🩺',
      iconPath: 'assets/img/icons/Pruebas/Informes _Documentos/Icon_Informe.png',
      imagePath: 'assets/img/suspects/Caso2/Pruebas/P1 — Informe forense.png',
      shortDesc: 'Asfixia con almohada. El golpe en la nuca es POST-mortem.',
      fullDesc: 'Causa de muerte: asfixia mecánica por oclusión de vías respiratorias. Hora aproximada del fallecimiento: entre las 18:00 y las 19:30 del 14 de abril de 2026. El golpe en la nuca, presentado en el atestado inicial como caída fortuita en la bañera, se produjo entre 30 y 60 minutos después del fallecimiento. Fibras textiles de plumón en mucosa nasal compatibles con almohada doméstica.',
      metadata: { fecha: '15/04/2026', fuente: 'Dr. Octaviano Vidal — Forense', ref: 'AUT-2026-0414' }
    },
    {
      id: 'almohada',
      title: 'Almohada con cabello canoso',
      type: 'objeto',
      icon: '🛏️',
      iconPath: 'assets/img/icons/Pruebas/EvidenciasFísicas/Icon_ROCK.png',
      imagePath: 'assets/img/suspects/Caso2/Pruebas/P2 — Almohada con cabello canoso.png',
      shortDesc: 'Cabello de Salvador en pliegue central. Compatible con asfixia, no con dormir.',
      fullDesc: 'Almohada de la cama de Salvador, recogida intacta tras el levantamiento. Fibras de cabello canoso concentradas en zona céntrica de uno de los pliegues, compatibles con presión bucal-nasal sostenida. La distribución NO es la de un cabello que reposa al dormir. Posición de la almohada al llegar la unidad: anormalmente bien colocada al pie de la cama.',
      metadata: { fecha: '14/04/2026', fuente: 'UCI Lavapiés — Recogida en escena', ref: 'INV-2026-0414-A' }
    },
    {
      id: 'cctv',
      title: 'CCTV portal Lavapiés',
      type: 'vídeo',
      icon: '📸',
      iconPath: 'assets/img/icons/Pruebas/Comunicaciones _Tecnología/Icon_CAM.png',
      imagePath: 'assets/img/suspects/Caso2/Pruebas/P3 — CCTV portal Lavapiés.png',
      shortDesc: 'Adelina entra a las 18:02 con bolsa, sale a las 19:34 con las manos vacías.',
      fullDesc: 'Cámara del portal de la calle de Argumosa. Adelina Roca entra al edificio a las 18:02 con una bolsa de plástico al brazo. Sale a las 19:34, con las manos vacías. Ningún otro vecino entra durante esa franja salvo el del 1ºA, que se queda en su piso (verificado por radio y consumo eléctrico). La hora de muerte cae íntegra dentro de su visita.',
      metadata: { fecha: '14/04/2026', fuente: 'Comunidad de propietarios — DVR portal', ref: 'CAM-2026-0414' }
    },
    {
      id: 'testamento',
      title: 'Borrador de testamento sin firmar',
      type: 'documento',
      icon: '📜',
      iconPath: 'assets/img/icons/Pruebas/Informes _Documentos/Icon_Informe.png',
      imagePath: 'assets/img/suspects/Caso2/Pruebas/P4 — Borrador testamento sin firmar.png',
      shortDesc: 'Salvador iba a legar 80.000€ a Adelina. Tachado a mano. Sin firmar.',
      fullDesc: 'Borrador manuscrito en cuartillas, fechado siete días antes del crimen. Reconoce a Adelina Roca un legado de 80.000€ en metálico y derecho de uso del piso vitalicio. La página está rasgada en su esquina inferior y el nombre de Adelina aparece tachado con bolígrafo distinto al del cuerpo del documento. No fue firmado nunca. Encontrado en el cajón superior del escritorio de Salvador.',
      metadata: { fecha: '07/04/2026', fuente: 'Cajón del escritorio de Salvador', ref: 'DOC-2026-0414-B' }
    },
    {
      id: 'banco_lourdes',
      title: 'Recibos del banco de Lourdes',
      type: 'documento',
      icon: '💳',
      iconPath: 'assets/img/icons/Pruebas/Registros _Listas/Icon_lista.png',
      imagePath: 'assets/img/suspects/Caso2/Pruebas/P5 — Recibos del banco de Lourdes.png',
      shortDesc: 'Pagos en Hostal Argüelles los lunes. Incluye el día y hora del crimen.',
      fullDesc: 'Extracto bancario de Lourdes Cienfuegos. Pagos recurrentes de 95€ en el Hostal Argüelles los lunes por la tarde durante los últimos seis meses. Incluye un pago el día del crimen, a las 18:11. El hostal queda a 35 minutos del piso de Salvador en Lavapiés.',
      metadata: { fecha: '15/04/2026', fuente: 'Banco Cooperativo — Extracto solicitado', ref: 'BAN-2026-0415-C' }
    },
    {
      id: 'cuenta_salvador',
      title: 'Movimientos de Salvador',
      type: 'documento',
      icon: '💰',
      iconPath: 'assets/img/icons/Pruebas/Registros _Listas/Icon_lista.png',
      imagePath: 'assets/img/suspects/Caso2/Pruebas/P6 — Movimientos de Salvador.png',
      shortDesc: 'Faltan ~200€ cada quincena durante 2 años. Coincide con visitas de Iván.',
      fullDesc: 'Movimientos de la cuenta de pensión de Salvador Cienfuegos. Retiradas de entre 180€ y 220€ aproximadamente cada quince días desde hace dos años. Patrón irregular para un jubilado con consumo doméstico modesto. Las fechas de las retiradas coinciden con visitas de Iván Cienfuegos al portal según el DVR del edificio.',
      metadata: { fecha: '15/04/2026', fuente: 'Banco Cooperativo — Histórico 24 meses', ref: 'BAN-2026-0415-D' }
    },
    {
      id: 'fotos',
      title: 'Caja con fotos antiguas (relación 30 años)',
      type: 'objeto',
      icon: '📷',
      iconPath: 'assets/img/icons/Pruebas/EvidenciasFísicas/Icon_ROCK.png',
      imagePath: 'assets/img/suspects/Caso2/Pruebas/P7 — Caja con fotos antiguas (relación 30 años).png',
      shortDesc: 'Salvador y Adelina como pareja. Tres décadas. Cartas firmadas "tuya, A.".',
      fullDesc: 'Caja de zapatos encontrada en el armario del dormitorio de Salvador. Contiene fotografías de Salvador y Adelina como pareja en distintas etapas a lo largo de tres décadas: viajes, cumpleaños, una fotografía con dos amigos en lo que parece la playa con el sol bajo (uno de los amigos con la cara borrada por sobreexposición). Cartas manuscritas firmadas "tuya, A.". Un anillo grueso, sin grabar, en una caja vieja de joyería.',
      metadata: { fecha: '14/04/2026', fuente: 'Recogida en escena — Armario dormitorio', ref: 'INV-2026-0414-E' }
    },
    {
      id: 'calendario',
      title: 'Calendario de pared con día rojo',
      type: 'objeto',
      icon: '📅',
      iconPath: 'assets/img/icons/Pruebas/Notas _Escritos/Icon_Carta.png',
      imagePath: 'assets/img/suspects/Caso2/Pruebas/P8 — Calendario de pared con día rojo.png',
      shortDesc: 'Un día marcado en rojo. Sin nota. El mismo día que en el caso del restaurante.',
      fullDesc: 'Calendario de pared en la cocina de Salvador. Un día marcado con un círculo rojo grueso, sin nota ni nombre. La fecha coincide con el círculo rojo observado en el calendario del despacho de Diego Varela durante la investigación del caso 2026-0314. Detalle catalogado por orden del comisario, sin línea de investigación abierta por ahora.',
      metadata: { fecha: '14/04/2026', fuente: 'Recogida en escena — Cocina', ref: 'INV-2026-0414-F' }
    }
  ],

  contradictions: [
    {
      id: 'c2-adelina-cctv',
      suspectId: 'adelina',
      questionIds: ['adelina-c2'],
      evidenceId: 'cctv',
      statement: '"No entré al piso de Salvador esa tarde. Respeto sus horarios."',
      proof: 'El CCTV del portal muestra a Adelina entrando a las 18:02 con una bolsa y saliendo a las 19:34 con las manos vacías. La franja contiene íntegramente la hora estimada del fallecimiento.',
      suspicionBonus: 22
    },
    {
      id: 'c2-adelina-fotos',
      suspectId: 'adelina',
      questionIds: ['adelina-v1', 'adelina-v2'],
      evidenceId: 'fotos',
      statement: '"Éramos vecinos. Yo era solo la vecina. Salvador no me hablaba de testamentos."',
      proof: 'La caja de fotos del armario demuestra una relación sentimental de tres décadas, con cartas y un anillo. El borrador del testamento iba a reconocerla con 80.000€ — y fue tachado siete días antes del crimen.',
      suspicionBonus: 25
    },
    {
      id: 'c2-lourdes-banco',
      suspectId: 'lourdes',
      questionIds: ['lourdes-c1', 'lourdes-c2'],
      evidenceId: 'banco_lourdes',
      statement: '"Estuve en mi casa esa tarde. Sola. Descansando."',
      proof: 'Los extractos bancarios de Lourdes registran un pago en el Hostal Argüelles a las 18:11 del día del crimen. Y otros 23 pagos del mismo importe los lunes anteriores.',
      suspicionBonus: 5,
      isRedHerring: true,
      clarification: 'Cuando se la confronta, Lourdes admite que mantiene una relación con un hombre casado desde hace dos años. Su pareja, Don Felipe Casaus, vecino de la calle Argüelles y huésped fijo del hostal los lunes, confirma que estuvo con ella desde las 17:50 hasta las 21:00. Mintió por vergüenza ante la familia, no por el crimen.'
    },
    {
      id: 'c2-ivan-cuenta',
      suspectId: 'ivan',
      questionIds: ['ivan-c2'],
      evidenceId: 'cuenta_salvador',
      statement: '"No iba al piso de mi tío desde hace un mes. No tengo nada que ver con sus cuentas."',
      proof: 'Los movimientos de la cuenta de Salvador muestran retiradas regulares de ~200€ cada quincena durante dos años, con fechas que coinciden exactamente con las visitas de Iván registradas en el DVR del portal.',
      suspicionBonus: 5,
      isRedHerring: true,
      clarification: 'Iván admite, presionado, que llevaba dos años sisando dinero a su tío en visitas que ocultó. Robo menor, sostenido. Pero las cámaras de la sala de apuestas Spotbet (Sol) y el resguardo de un traspaso a un caballo a las 18:48 confirman que estuvo allí toda la tarde del crimen. Inocente del homicidio.'
    }
  ],

  solution: {
    who: 'adelina',
    how: 'asfixia',
    why: 'despecho'
  },

  howOptions: [
    { id: 'asfixia',         text: 'Asfixia con almohada (escenificación de caída en bañera)' },
    { id: 'envenenamiento',  text: 'Envenenamiento (con la comida que le llevaban)' },
    { id: 'caida',           text: 'Caída fortuita en la bañera' },
    { id: 'robo_violento',   text: 'Robo violento (alguien externo)' }
  ],

  whyOptions: [
    { id: 'despecho',        text: 'Despecho — Salvador retiró el reconocimiento del testamento' },
    { id: 'herencia',        text: 'Cobrar la herencia familiar (mitad para hermana, mitad para sobrino)' },
    { id: 'silenciar_robo',  text: 'Silenciar el sisado de la cuenta de pensión' },
    { id: 'tapar_affaire',   text: 'Tapar una infidelidad descubierta' }
  ],

  correctExplanation: 'Adelina Roca, vecina del rellano y pareja secreta de Salvador Cienfuegos durante treinta años, entró al piso a las 18:02 con la excusa de bajarle un caldo. Salvador acababa de comunicarle, una semana antes, que finalmente no la reconocería con 80.000€ en su testamento por vergüenza social ante la familia. Adelina lo asfixió con la almohada de la cama y, cuando estuvo bien muerto, golpeó su nuca con el borde de la bañera para simular una caída. Salió del portal a las 19:34 con las manos vacías. Tres pruebas la sitúan: el CCTV (su negación de haber entrado), la caja de fotos del armario (su negación de la relación sentimental), y el borrador del testamento tachado (el motivo). Lourdes mentía sobre un affaire con un hombre casado; Iván mentía sobre un sisado de dos años. Ninguno mintió sobre el crimen.',

  wrongExplanation: 'La verdadera culpable era Adelina Roca, la vecina del rellano. Su relación secreta con Salvador, oculta durante treinta años, salió a la luz al inspeccionar el armario del dormitorio. Salvador iba a reconocerla con 80.000€ en su testamento, pero retiró la promesa la semana antes del crimen por vergüenza social. Adelina lo asfixió con la almohada y simuló una caída en la bañera. Las pruebas clave eran el CCTV del portal (entró a las 18:02 con bolsa, salió a las 19:34 con las manos vacías), la caja de fotos del armario, y el borrador del testamento tachado. Lourdes mintió sobre dónde estaba (era un affaire) e Iván mintió sobre sus visitas (sisaba dinero), pero ninguno de los dos tenía relación con el homicidio.',

  // ═══════════════════════════════════════════════════
  // CENA EN CASA — Tras resolver el caso
  // ═══════════════════════════════════════════════════
  cena: {
    apertura: 'Salió en las noticias también, el viejo de Lavapiés. Un piso bajo de Argumosa. ¿Era el tuyo?',

    repasoPool: [
      {
        id: 'c02_lourdes',
        linea: {
          default: 'La hermana mintió sobre dónde estaba esa tarde, ¿no? ¿Te dio mucho que pensar?',
          acusoIncorrecto: 'Acusaste a {nombreAcusado}. Lo pensaste de verdad, ¿no?'
        },
        respuestas: [
          { id: 'a', texto: 'Mintió, sí, pero por vergüenza. Por un hombre casado. Nada que ver.',
            efecto: { sinceridad: +6, integridad: +3 },
            replica: 'Pobre mujer. La sociedad sigue siendo cruel para esas cosas.' },
          { id: 'b', texto: 'Estuve a punto de cerrarle el caso encima.',
            efecto: { sinceridad: +8, integridad: -3 },
            replica: 'Te pillan rápido, ¿eh? Eso es bueno y malo.' },
          { id: 'c', texto: 'Fue colaboradora cuando le ofrecí salida.',
            efecto: { integridad: +5 },
            replica: 'Eso está bien. No siempre eres así.' }
        ]
      },

      {
        id: 'c02_ivan',
        linea: {
          default: 'Y el sobrino. Sisaba a su tío durante dos años. ¿Te lo creíste?',
          acusoIncorrecto: 'El sobrino sisaba a su tío. Acusaste a {nombreAcusado} por el robo, ¿no es así?'
        },
        respuestas: [
          { id: 'a', texto: 'Le creí. La cara que puso cuando vio los movimientos era de bochorno, no de miedo.',
            efecto: { sinceridad: +6, lucidez: +3 },
            replica: 'Tienes ojo para eso.' },
          { id: 'b', texto: 'Tuve dudas hasta que vi las cámaras de la sala de apuestas.',
            efecto: { sinceridad: +5 },
            replica: 'Honestidad de detective, esa.' },
          { id: 'c', texto: 'Que sisara dos años a su tío me cabreó más que el crimen mismo.',
            efecto: { integridad: -4, sinceridad: +6 },
            replica: 'A ti te cabrea todo lo de las familias.' }
        ]
      },

      {
        id: 'c02_adelina',
        linea: {
          default: 'Y la vecina. La que le bajaba el caldo. ¿Te llevó tiempo verlo?',
          acusoIncorrecto: 'La vecina llevaba treinta años con él. Y se te escapó. ¿Cómo la viste?'
        },
        respuestas: [
          { id: 'a', texto: 'Sí. La caja de fotos del armario me partió la cara. No la vi venir.',
            efecto: { sinceridad: +10, integridad: +4 },
            replica: 'A veces vemos a quien menos queremos ver.' },
          { id: 'b', texto: 'Lo vi rápido. Es siempre el que parece más bueno.',
            efecto: { sinceridad: -6, integridad: +2 },
            replica: 'Qué cínico te has vuelto.' },
          { id: 'c', texto: 'Me dio pena cuando se le quebró la voz hablando del rape.',
            efecto: { sinceridad: +8, lucidez: -3 },
            replica: 'A mí también me daría pena. Aún así lo hizo.' }
        ]
      },

      {
        id: 'c02_almohada',
        linea: {
          default: 'Lo de la almohada bien colocada al pie de la cama... eso lo daban los de la primera unidad por bueno, ¿no?'
        },
        respuestas: [
          { id: 'a', texto: 'Sí. Se les escapó. Si no es por el forense, lo cerramos como caída.',
            efecto: { sinceridad: +8, lucidez: +3 },
            replica: 'Menos mal que el forense tiene buenos ojos.' },
          { id: 'b', texto: 'Nos pasa cada vez más. La gente joven no mira esas cosas.',
            efecto: { integridad: -3 },
            replica: 'Tú también fuiste joven una vez.' },
          { id: 'c', texto: 'Prefiero no hablar de los cabos sueltos del trabajo.',
            efecto: { sinceridad: -6 },
            replica: 'Como quieras.' }
        ]
      },

      {
        id: 'c02_sentir',
        linea: {
          default: '¿Y cómo te sientes? Tras éste.',
          acusoIncorrecto: '¿Y cómo te sientes? Aunque no terminaras de acertarlo.'
        },
        respuestas: [
          { id: 'a', texto: 'Bien. Una vecina sola va a la cárcel y tres familias respiran.',
            efecto: { sinceridad: -4, integridad: +2 },
            replica: 'Suena más cínico de lo que crees.' },
          { id: 'b', texto: 'Raro. Treinta años queriéndose y un viernes lo asfixia. Eso me deja torcido.',
            efecto: { sinceridad: +10, lucidez: -4 },
            replica: 'A mí también me deja torcida que me cuentes eso.' },
          { id: 'c', texto: 'Cansado. Como siempre.',
            efecto: { sinceridad: +5, lucidez: -5 },
            replica: 'Come algo. Hay sopa.' }
        ]
      }
    ],

    // Gancho de memoria: el barrio. Lavapiés es el barrio donde el detective
    // NO creció — siembra contraste para calle Goya (caso 4) y Talavera.
    ganchoMemoria: {
      id: 'c02_memoria_lavapies',
      linea: 'Lavapiés. Yo de joven nunca pisé ese barrio. Mi madre decía que era "de los otros". ¿Tú habías estado antes ahí por trabajo?',
      respuestas: [
        { id: 'a', texto: 'Alguna vez. No es mi sitio. Demasiada gente, demasiado ruido.',
          efecto: { sinceridad: +3, flags: ['rechaza_lavapies'] },
          replica: 'Yo creo que es bonito. Tendrías que volver alguna vez sin caso.' },
        { id: 'b', texto: 'Hoy he pensado en mi padre. No sé por qué. El piso me ha recordado al suyo.',
          efecto: { sinceridad: +10, flags: ['recuerda_padre'] },
          replica: '...¿a tu padre? Vale. Cuéntame cuando puedas.' },
        { id: 'c', texto: 'No quiero hablar de barrios esta noche.',
          efecto: { sinceridad: -5, lucidez: -3, flags: ['rechaza_lavapies'] },
          replica: 'Vale. Lo dejo.' }
      ]
    }
  }
};

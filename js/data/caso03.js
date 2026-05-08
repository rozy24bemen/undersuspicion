/**
 * CASO 03: "El número equivocado"
 * Acto I — Caso 2 post-tutorial. Sigue introduciendo pistas falsas; introduce
 * un caso con cuatro sospechosos y dos escenarios visuales (despacho TecBaria
 * para Esteban Vidal, portal de la calle de la Reina para los demás).
 *
 * Culpable: Jorge "Jordi" Sallén (compañero de equipo, acoso documentado).
 * Red herrings: Esteban Vidal (sondeo profesional con la competencia),
 * Bernabé Faz (veía partido en el móvil en lugar de la radio).
 * Olalla Bermejo: inocente sin red herring (coartada sólida y testimonio útil).
 *
 * La herramienta desk-phone planeada en TOOLS-ARCHITECTURE queda aplazada;
 * la grabación con Carla pidiendo ayuda nominando a Jordi se documenta en
 * correctExplanation y se infiere desde las pruebas digitales del cuaderno,
 * la pegatina y el mail externo.
 */
var US = US || {};
US.CASES = US.CASES || {};

US.CASES['caso-03'] = {
  id: 'caso-03',
  title: 'El número equivocado',
  subtitle: 'Caso Nº 2026-0521',
  intro: 'Carla Vinyets, ingeniera de software de 31 años, ha aparecido apuñalada en el portal de su edificio en la calle de la Reina, Chueca, anoche a las 22:30. Una figura encapuchada se ve en las cámaras del portal detrás de ella. El cuchillo de cocina apareció en un contenedor a 200 metros, sin huellas útiles. En la oficina queda una denuncia formal por acoso de RRHH, abierta hace dos días. Y un cuaderno con un número de teléfono incompleto. Cuatro personas la rodeaban en su día a día. Tres mienten. Una mata.',

  victim: {
    name: 'Carla Vinyets',
    age: 31,
    occupation: 'Ingeniera de software — TecBaria S.A.',
    portrait: 'assets/img/suspects/Caso3/Retrato_Victima_caso3.png'
  },

  scene: {
    location: 'Portal de la calle de la Reina nº14 — Chueca (Madrid)',
    date: '21 de mayo de 2026',
    timeOfDeath: '22:28h',
    cssClass: 'scene-caso3-portal'
  },

  suspects: [
    // ──────────────── BERNABÉ FAZ ────────────────
    {
      id: 'bernabe',
      name: 'Bernabé Faz',
      age: 60,
      role: 'Portero del edificio',
      description: 'Mayor, cansado, evita la mirada cuando habla del momento del crimen. Conoce a todos los vecinos. Dice que tenía la radio puesta y no oyó nada relevante.',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso3/Sospechosos/BernabéFaz-Neutral.png',
        talking: 'assets/img/suspects/Caso3/Sospechosos/BernabéFaz-Pensativo.png',
        nervous: 'assets/img/suspects/Caso3/Sospechosos/BernabéFaz-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'bernabe-v1',
            text: '¿Cómo era Carla como vecina?',
            response: '"Una de las buenas. Saludaba siempre. Siempre. Y eso ya no se ve. Subía con prisa pero con un \'buenas noches, Bernabé\'. Pagó el extra del DVR del portal de su bolsillo, ¿sabe? Por la comunidad."',
            pressureCost: 8
          },
          {
            id: 'bernabe-v2',
            text: '¿Notaba algo raro en ella últimamente?',
            response: '"La acompañaba más una amiga que ella sola. Y de día venían dos o tres veces a buscarla en coche. Yo no me meto en la vida de los vecinos. Pero llevaba unas semanas más callada al subir."',
            pressureCost: 10
          },
          {
            id: 'bernabe-v3',
            text: '¿Recuerda alguna visita inusual de un compañero de trabajo?',
            response: '"A los compañeros no los conozco. Pero a uno sí lo había visto. Joven. Vino una vez en una Vespa azul a buscarla y se quedaron hablando diez minutos en el portal. No subió. Ella le hablaba seria, no contenta."',
            pressureCost: 12
          }
        ],
        coartada: [
          {
            id: 'bernabe-c1',
            text: '¿Dónde estaba a las 22:30 de anoche?',
            response: '"En la garita. Donde estoy todas las noches. Hago el turno hasta las once, las once y media a veces, y luego me retiro al piso pequeño que la comunidad me deja ahí abajo."',
            pressureCost: 10
          },
          {
            id: 'bernabe-c2',
            text: '¿Vio u oyó algo en el portal entre las 22:00 y las 23:00?',
            response: '"Tenía la radio puesta. Carrusel deportivo. No oí nada hasta que un vecino del 4ºB bajó en bata y me dijo \'Bernabé, baja, hay alguien tirado\'. Bajé corriendo."',
            pressureCost: 12
          },
          {
            id: 'bernabe-c3',
            text: '¿Vio entrar o salir a alguien por el portal antes del crimen?',
            response: '"A Carla volver de la oficina, sobre las diez y diez, diez y cuarto. Y nada más. La calle estaba tranquila. Llovía. La gente no sale a pasear con lluvia."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':       { response: '"Yo no tengo cuchillos en la garita. No me venga con ésas."', pressureCost: 6 },
        'cctv':           { response: '"Esa figura no la conozco. Si pasa frente a la garita, yo le veo. Habrá entrado por el patio interior, por la puerta de servicio. Yo no estaba mirando ahí, ya le digo, tenía la radio."', pressureCost: 14 },
        'movil_carla':    { response: '"Carla siempre estaba con el móvil en la mano. Yo no soy de móviles, ni los míos sé bien."', pressureCost: 5 },
        'rrhh':           { response: '"¿La acosaban en la oficina? [silencio largo] Pobre. Algo me decía a mí que algo pasaba. Pero yo no soy nadie para entrometerme."', pressureCost: 8 },
        'recibo_cafe':    { response: '"Pues será del bar de abajo, La Fontana. Carla iba mucho a por café antes de subir. Pero ese recibo es de su despacho, no del bar. Lo trajeron al despacho, mire la dirección."', pressureCost: 6 },
        'cuaderno':       { response: '"Eso no lo había visto. Si lo apuntaba a mano es que no se lo sabía, o no quería tenerlo en el móvil. Curioso."', pressureCost: 6 },
        'pegatina_22':    { response: '"Esas pegatinas las tenía por toda la mesa. Las usaba para todo. Yo no me fijo en esas cosas, la veía a la entrada por la mañana, no en su despacho."', pressureCost: 5 },
        'mail_fragmento': { response: '"Yo de mails no sé nada, ya le dije. ¿Tiene relación con el cuaderno? Porque a mí me parece que sí."', pressureCost: 8 },
        'foto_vidal':     { response: '"Ése es Esteban Vidal, el jefe. Lo vi una vez aparcado enfrente del edificio. No bajaba a buscarla, miraba desde el coche. Raro, ¿no? Y eso fue hace dos meses, justo cuando ella empezó a venir más callada."', pressureCost: 10 }
      }
    },

    // ──────────────── ESTEBAN VIDAL ────────────────
    {
      id: 'esteban',
      name: 'Esteban Vidal',
      age: 45,
      role: 'Jefe directo de Carla — Director de equipo, TecBaria S.A.',
      description: 'Trajeado, frío, mide cada palabra. Carla lo había denunciado por trato hostil dos meses antes. La denuncia seguía abierta cuando ella murió.',
      isGuilty: false,
      // Cuando este sospechoso es el activo, el escenario cambia al despacho
      // de TecBaria en lugar del portal del crimen. El motor lo aplica
      // automáticamente desde UIController._applySceneClass().
      sceneCssClass: 'scene-caso3-despacho',
      portraits: {
        neutral: 'assets/img/suspects/Caso3/Sospechosos/EstebanVidal-Neutral.png',
        talking: 'assets/img/suspects/Caso3/Sospechosos/EstebanVidal-Pensativo.png',
        nervous: 'assets/img/suspects/Caso3/Sospechosos/EstebanVidal-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'esteban-v1',
            text: '¿Cuál era su relación profesional con Carla?',
            response: '"Yo dirigía el equipo, ella formaba parte. Brillante ingeniera. Tuvimos diferencias técnicas. Y otras menos técnicas, no le voy a mentir. Pero todo dentro del trabajo."',
            pressureCost: 8
          },
          {
            id: 'esteban-v2',
            text: 'Carla había puesto una denuncia interna por trato hostil. ¿Lo confirma?',
            response: '"Lo confirmo. Y le diré más: no era infundada. Yo presioné demasiado en una entrega, hace dos meses. Pedí disculpas, RRHH lo medió, seguíamos hablando del tema. La denuncia estaba en proceso de archivarse, según RRHH. Carla y yo habíamos pasado página."',
            pressureCost: 14
          },
          {
            id: 'esteban-v3',
            text: '¿Quién más tenía relación cercana con ella en el equipo?',
            response: '"Olalla Bermejo, amiga personal y del entorno técnico. Y Jorge Sallén, compañero. A Jorge lo aguantaba a duras penas estos últimos meses. Algo había. No sabría decirle qué exactamente."',
            pressureCost: 12
          }
        ],
        coartada: [
          {
            id: 'esteban-c1',
            text: '¿Dónde estaba a las 22:30 de anoche?',
            response: '"En mi casa, en el barrio de Salamanca. Cené pronto y trabajé en el portátil hasta tarde."',
            pressureCost: 10
          },
          {
            id: 'esteban-c2',
            text: '¿Alguien le vio o puede confirmar dónde estaba?',
            response: '"[pausa breve] Vivo solo. Pero el portero de mi edificio puede confirmar a qué hora llegué. Sobre las nueve."',
            pressureCost: 12
          },
          {
            id: 'esteban-c3',
            text: '¿Se conectó al sistema de la empresa esa noche?',
            response: '"Sí, varias veces. Mi VPN deja registro. Pueden comprobarlo. Si lo hacen, sabrán que estuve trabajando hasta cerca de la una."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':       { response: '"Cuchillo de cocina. Eso no me dice nada, salvo que el asesino no preparó esto bien."', pressureCost: 6 },
        'cctv':           { response: '"No es mi figura, si es lo que insinúa. Mido casi 1.90 y la suya no llega al 1.80."', pressureCost: 8 },
        'movil_carla':    { response: '"Mensajes borrados localmente. Eso es información que ya no se puede recuperar fácil. Habría que pedir a la operadora una orden adicional. \'JS\' como contacto. Las iniciales están claras."', pressureCost: 10 },
        'rrhh':           { response: '"Mi nombre está ahí, sí. Y no es el nombre del asesino, inspector. La denuncia de Carla contra mí estaba al cierre. La de Carla contra Sallén estaba abierta hacía dos días. Eso ya lo sabe."', pressureCost: 12 },
        'recibo_cafe':    { response: '"Carla bajaba a por café tarde si tenía pendientes. La he visto hacerlo cien veces. Las 21:00 era una hora razonable para ella en una tarde de entrega."', pressureCost: 6 },
        'cuaderno':       { response: '"Curioso. Si lo necesitaba, ¿por qué no lo guardaba en el móvil? A no ser que no quisiera que se viera en su móvil. Eso son seis dígitos visibles de nueve. Habrá que reconstruir."', pressureCost: 10 },
        'pegatina_22':    { response: '"Era su sistema. Veintidós era una cifra que utilizaba mucho últimamente. No le sabría decir por qué. No era nuestro número de proyecto. Pregunte a Olalla, era su amiga."', pressureCost: 8 },
        'mail_fragmento': { response: '"[pausa] Ese mail no lo habíamos visto antes. Esa firma no es de TecBaria. Es de fuera. Y, mire... esa dirección, asistenciamujer.es... [silencio] sí, conozco el dominio. Pero por motivos profesionales, no por Carla. Le explico cuando me presione más."', pressureCost: 14 },
        'foto_vidal':     { response: '"Ese es mi padre. Sirvió en la Guardia Civil. En Talavera de Vélez, en los ochenta. Allí conoció a un comisario que vino de Madrid... un Mora. ¿Le suena el apellido, inspector? Mi padre hablaba mucho de él."', pressureCost: 12 }
      }
    },

    // ──────────────── OLALLA BERMEJO ────────────────
    {
      id: 'olalla',
      name: 'Olalla Bermejo',
      age: 35,
      role: 'Amiga íntima de Carla — Compañera del entorno técnico',
      description: 'Llorosa pero coherente. Recogía a Carla del trabajo varias noches por preocupación. Coartada sólida (cumpleaños familiar). Pieza clave del testimonio.',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso3/Sospechosos/OlallaBermejo-Neutral.png',
        talking: 'assets/img/suspects/Caso3/Sospechosos/OlallaBermejo-Pensativa.png',
        nervous: 'assets/img/suspects/Caso3/Sospechosos/OlallaBermejo-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'olalla-v1',
            text: '¿Cómo conociste a Carla?',
            response: '"En la universidad, hace doce años. Las dos haciendo la rama de inteligencia artificial. Ella era... era de las que llegaba la primera y se iba la última. Todavía no me cabe en la cabeza."',
            pressureCost: 8
          },
          {
            id: 'olalla-v2',
            text: '¿Por qué la recogías del trabajo últimamente?',
            response: '"Porque tenía miedo de salir sola. Llevaba meses así. Le insistí mil veces para que pidiera ayuda formal. Cuando por fin lo hizo, le dije: \'avísame siempre cuando salgas tarde, voy yo a buscarte\'. Anoche llegué demasiado tarde."',
            pressureCost: 12
          },
          {
            id: 'olalla-v3',
            text: '¿De quién tenía miedo Carla?',
            response: '"Ella nunca quiso decirme un nombre claro. Decía \'es alguien del trabajo, no quiero que tu opinión cambie sobre nadie\'. Pero por cómo hablaba, era cercano. No el jefe. Otro. Le iba a sacar el nombre esta semana, fijo."',
            pressureCost: 14
          }
        ],
        coartada: [
          {
            id: 'olalla-c1',
            text: '¿Dónde estabas anoche entre las 22:00 y las 23:00?',
            response: '"En el cumpleaños de mi madre, en su casa de Móstoles. Treinta personas alrededor de la mesa. Hay fotos y vídeos. Salí a las once y media para ir a buscar a Carla — habíamos quedado — y me llamó la policía cuando bajaba al coche."',
            pressureCost: 10
          },
          {
            id: 'olalla-c2',
            text: '¿Habías quedado en buscarla esa noche?',
            response: '"Sí. A las once y cuarto. Ella ya me había escrito: \'Estoy saliendo de la oficina, te veo en mi portal en quince minutos\'. Su último mensaje. Llegué demasiado tarde."',
            pressureCost: 14
          },
          {
            id: 'olalla-c3',
            text: '¿Conoces a Jorge Sallén?',
            response: '"Sí. Compañero de equipo de Carla, despacho contiguo al suyo. Educado, simpático en distancias cortas. Carla me dijo una vez: \'Olalla, no me deja en paz. Le doy la mano y se cree que le doy el brazo\'. No me dio detalles. Yo se lo conté a RRHH cuando puse la denuncia con ella."',
            pressureCost: 12
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':       { response: '"Un cuchillo de cocina. Cualquiera tiene uno en su casa. El asesino no quiso usar nada que se le pudiera rastrear."', pressureCost: 5 },
        'cctv':           { response: '"Esa figura puede ser cualquiera, pero la altura encaja con un hombre joven, normal, no muy corpulento. Como Jorge."', pressureCost: 10 },
        'movil_carla':    { response: '"Los mensajes borrados deben ser los suyos. \'JS\'. Iniciales de Jorge Sallén. Me apuesto lo que quiera. Ella los borraba cuando volvía a casa, lo hacía cada noche por seguridad."', pressureCost: 12 },
        'rrhh':           { response: '"[respira hondo] Por fin. Por fin se ve negro sobre blanco. Pero esto debería haber pasado hace un año, no hace dos días. Si la denuncia hubiera entrado antes... [silencio]"', pressureCost: 10 },
        'recibo_cafe':    { response: '"Café tardío en la oficina. Eso me sonaba a tarde de entrega cerrada. Si ella iba a quedarse hasta las diez, yo lo sabía. Pero ese día no me avisó porque pensaba salir antes. Acabó saliendo más tarde."', pressureCost: 8 },
        'cuaderno':       { response: '"Conozco la letra. Es suya. Si lo apuntaba a mano es que iba a llamar fuera. Para no dejar registro digital. Estaba pidiendo ayuda en algún sitio. Una asociación, seguro. [pausa] El número... lo dictó en voz alta una vez para memorizarlo. Repetía \'noventa y ocho\' al final, como un mantra. Y un dos en el medio que decía como un puente entre los grupos. No sé por qué se me ha quedado."', pressureCost: 10 },
        'pegatina_22':    { response: '"Veintidós es el número del despacho de Jorge Sallén en la planta cuarta. Carla lo apuntaba en sus notas para acordarse de no pasar por allí cuando él estuviese. Era su sistema."', pressureCost: 14 },
        'mail_fragmento': { response: '"Esa firma no la conozco. ¿Algún número de teléfono? Si Esteban dice que es de fuera, será de fuera. Pero el dominio... \'asistenciamujer.es\'. Eso es lo que estaba haciendo Carla. Llamando."', pressureCost: 10 },
        'foto_vidal':     { response: '"Ese es el padre de Esteban. La tuvo en su despacho desde que entró en la empresa. No sé qué relación tendrá con Carla. Ninguna, supongo."', pressureCost: 6 }
      }
    },

    // ──────────────── JORGE "JORDI" SALLÉN (CULPABLE) ────────────────
    {
      id: 'jorge',
      name: 'Jorge "Jordi" Sallén',
      age: 29,
      role: 'Compañero de equipo de Carla — Despacho contiguo (nº22)',
      description: 'Joven, sonriente, exceso de cortesía. Sus respuestas son rápidas pero nunca exactas. Lleva dos años al lado de Carla. Su despacho es el contiguo: el número 22.',
      isGuilty: true,
      portraits: {
        neutral: 'assets/img/suspects/Caso3/Sospechosos/JorgeSallén-Neutral.png',
        talking: 'assets/img/suspects/Caso3/Sospechosos/JorgeSallén-Pensativo.png',
        nervous: 'assets/img/suspects/Caso3/Sospechosos/JorgeSallén-NerviosoExplosivo.png'
      },
      questions: {
        vinculo: [
          {
            id: 'jorge-v1',
            text: '¿Cuál era tu relación con Carla?',
            response: '"Compañeros desde hace dos años. Buena gente. Brillante. Casi una hermana mayor para mí en el equipo. Habíamos pasado muchas tardes en pareja programando, cenando rápido en la oficina, riéndonos."',
            pressureCost: 8
          },
          {
            id: 'jorge-v2',
            text: '¿Carla te había pedido alguna vez que dejaras de buscarla?',
            response: '"[pausa] Una vez. Hace meses. Estaba estresada con un proyecto. Me dijo \'dame aire\'. Yo le di aire. Eso fue todo."',
            pressureCost: 14
          },
          {
            id: 'jorge-v3',
            text: '¿Qué sabías de la denuncia que había puesto Carla en RRHH?',
            response: '"Nada. Ahora me lo decís vosotros. Si la puso por Vidal, me cuadra: él la presionaba mucho. Si la puso por otra cosa, ni idea."',
            pressureCost: 14
          }
        ],
        coartada: [
          {
            id: 'jorge-c1',
            text: '¿Dónde estabas a las 22:30 de anoche?',
            response: '"En mi casa. Calle Augusto Figueroa, a tres calles del portal de Carla. Lo digo por transparencia. Cené, vi una serie, dormí. Vivo solo."',
            pressureCost: 10
          },
          {
            id: 'jorge-c2',
            text: '¿Saliste de tu casa entre las 21:00 y la medianoche?',
            response: '"[pausa] No. Tampoco bajé a la basura ni nada. Es noche de no salir. Llovía, además."',
            pressureCost: 14
          },
          {
            id: 'jorge-c3',
            text: '¿Qué número tiene tu despacho en la planta?',
            response: '"El 22. Sí. Junto al de Carla, el 21. ¿Por qué?"',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'cuchillo':       { response: '"Cualquiera tiene un cuchillo así en su cocina. La huella parcial sin coincidencia es lo que cuenta, ¿no?"', pressureCost: 8 },
        'cctv':           { response: '"[pausa] Esa figura podría ser cualquiera. Sudadera, capucha, complexión normal. La hora de mi calle a la suya son seis minutos andando. Sí. Pero no fui yo."', pressureCost: 14 },
        'movil_carla':    { response: '"Si los mensajes los borró ella, será que no quería que se vieran. Eso no me señala a mí. \'JS\' son las iniciales de mucha gente, hay un tal Javier Solís en marketing."', pressureCost: 12 },
        'rrhh':           { response: '"[muy nervioso] No... no había escuchado nada de eso. ¿Yo? Pero si éramos amigos, joder. Esto es un error de RRHH. ¡Una venganza por algo que no sé!"', pressureCost: 18 },
        'recibo_cafe':    { response: '"Sí, ese café lo pedí yo. Nos lo trajo el chico de La Fontana al despacho. Estábamos los dos en la oficina hasta tarde. Lo de los recibos no quiere decir nada."', pressureCost: 14 },
        'cuaderno':       { response: '"Carla apuntaba números en cualquier sitio. No es indicio de nada que me señale a mí."', pressureCost: 8 },
        'pegatina_22':    { response: '"[pausa larga] Eso es el número de mi despacho. Sí. Estábamos al lado, era normal que ella pusiera notas relacionadas con asuntos de despachos. Cosas de logística interna."', pressureCost: 16 },
        'mail_fragmento': { response: '"No conozco esa firma. No es de aquí. Que se lo pregunten a Esteban, él trataba con clientes externos."', pressureCost: 8 },
        'foto_vidal':     { response: '"Ese es el padre de Esteban Vidal. ¿Y qué? Mi familia también ha tenido militares, pero yo no llevo fotos al trabajo."', pressureCost: 6 }
      }
    }
  ],

  evidence: [
    {
      id: 'cuchillo',
      title: 'Cuchillo de cocina',
      type: 'objeto',
      icon: '🔪',
      iconPath: 'assets/img/icons/Pruebas/EvidenciasFísicas/ICON_KNIFE.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P1 — Cuchillo de cocina.png',
      shortDesc: 'Arma del crimen. Contenedor a 200m. Huellas parciales sin coincidencia.',
      fullDesc: 'Cuchillo de cocina, hoja de 18cm, modelo común de marca blanca disponible en grandes superficies. Encontrado en el contenedor amarillo de la calle Hortaleza, a 200 metros del portal del crimen. Huellas parciales en el mango sin coincidencia con bases policiales. El análisis hematológico confirma que es el arma. Mango limpiado parcialmente con un trapo de algodón.',
      metadata: { fecha: '22/05/2026', fuente: 'UCI Chueca — Recogida en escena ampliada', ref: 'INV-2026-0521-A' }
    },
    {
      id: 'cctv',
      title: 'CCTV portal Chueca',
      type: 'vídeo',
      icon: '📸',
      iconPath: 'assets/img/icons/Pruebas/Comunicaciones _Tecnología/Icon_CAM.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P2 — CCTV portal Chueca.png',
      shortDesc: 'Figura encapuchada a 22:28 sigue a Carla. El portero ilumina su rostro con un móvil.',
      fullDesc: 'Cámara del portal del nº14 de la calle de la Reina. A las 22:28 se ve a Carla Vinyets cruzar el portal, seguida cinco segundos después por una figura encapuchada de altura 1.75-1.80, complexión media. La figura encapuchada huye por la calle Augusto Figueroa. La cámara secundaria de la garita registra simultáneamente al portero Bernabé Faz con el rostro iluminado por la pantalla de un móvil — no por la luz analógica de la radio que dice tener encendida.',
      metadata: { fecha: '22/05/2026', fuente: 'Comunidad Calle Reina 14 — DVR portal y garita', ref: 'CAM-2026-0521' }
    },
    {
      id: 'movil_carla',
      title: 'Móvil de Carla con mensajes borrados',
      type: 'objeto',
      icon: '📱',
      iconPath: 'assets/img/icons/Pruebas/Comunicaciones _Tecnología/Icon_MOV.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P3 — Móvil de Carla con mensajes borrados.png',
      shortDesc: 'Hilo con contacto "JS": últimos 47 mensajes borrados. Operadora pendiente.',
      fullDesc: 'Móvil de Carla Vinyets, desbloqueado por orden judicial. Hilo de mensajes con un contacto guardado como "JS" — los últimos 47 mensajes han sido borrados localmente. Operadora no permite recuperación parcial sin orden adicional. Último mensaje no borrado, dos semanas atrás: "déjame en paz, te lo pido por favor".',
      metadata: { fecha: '22/05/2026', fuente: 'UCI Chueca — Móvil retenido', ref: 'TEL-2026-0521-B' }
    },
    {
      id: 'rrhh',
      title: 'Carpeta de RRHH',
      type: 'documento',
      icon: '🗂️',
      iconPath: 'assets/img/icons/Pruebas/Informes _Documentos/Icon_Informe.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P4 — Carpeta RRHH.png',
      shortDesc: 'Denuncia formal de acoso. Denunciado: Jorge Sallén. Abierta hace 2 días.',
      fullDesc: 'Carpeta de RRHH de TecBaria S.A. con denuncia formal por acoso laboral interpuesta por Carla Vinyets el 19 de mayo (dos días antes del crimen). Denunciado: Jorge Sallén. Documenta seis meses de comportamiento descrito como "presión sentimental no deseada, entradas no autorizadas en su despacho, regalos repetidos tras rechazos, mensajes fuera del horario laboral en exceso documentado". RRHH había convocado a Sallén para el 22 de mayo a las 11:00 de la mañana — el día siguiente al crimen.',
      metadata: { fecha: '19/05/2026', fuente: 'Departamento RRHH TecBaria S.A.', ref: 'RRHH-2026-0519' }
    },
    {
      id: 'recibo_cafe',
      title: 'Recibo café (Cafetería La Fontana)',
      type: 'documento',
      icon: '☕',
      iconPath: 'assets/img/icons/Pruebas/Registros _Listas/Icon_lista.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P5 — Recibo café.png',
      shortDesc: 'Cafetería La Fontana, 21:00. Pedido entregado en el despacho de Carla.',
      fullDesc: 'Recibo de la cafetería La Fontana, calle Augusto Figueroa nº22, fechado el 21 de mayo a las 21:00. Pedido: dos cafés americanos, entregados en la oficina de TecBaria S.A. (planta 4ª, despacho de Carla Vinyets). El recibo encontrado en su escritorio. Sallén ha confirmado que él pidió ese café.',
      metadata: { fecha: '21/05/2026', fuente: 'Cafetería La Fontana — Tique conservado', ref: 'COM-2026-0521-C' }
    },
    {
      id: 'cuaderno',
      title: 'Cuaderno con número incompleto',
      type: 'documento',
      icon: '📓',
      iconPath: 'assets/img/icons/Pruebas/Notas _Escritos/Icon_Cuaderno.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P6 — Cuaderno con número incompleto.png',
      shortDesc: '"Llamar al 6XX-X3-XX-9X para que me ayuden con esto." Letra de Carla.',
      fullDesc: 'Cuaderno tamaño cuartilla en el primer cajón del escritorio de Carla. Última anotación, fechada el 18 de mayo (tres días antes del crimen): "Llamar al 6XX-X3-XX-9X para que me ayuden con esto". Letra confirmada como suya. La anotación está hecha con bolígrafo distinto al resto de la página — añadida en momento posterior y, al parecer, con prisa.',
      metadata: { fecha: '18/05/2026', fuente: 'Recogida en escena — Despacho Carla', ref: 'INV-2026-0521-D' }
    },
    {
      id: 'pegatina_22',
      title: 'Pegatina amarilla 22 en monitor',
      type: 'objeto',
      icon: '🟨',
      iconPath: 'assets/img/icons/Pruebas/Notas _Escritos/Icon_Carta.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P7 — Pegatina amarilla 22 en monitor.png',
      shortDesc: 'Post-it con "22" pegado en monitor. Coincide con número de despacho de Sallén.',
      fullDesc: 'Post-it amarillo cuadrado adherido a la parte inferior derecha del monitor principal de Carla Vinyets. Texto único: "22" en bolígrafo rojo. Coincide con el número del despacho contiguo al suyo en la planta 4ª: el de Jorge Sallén. Olalla Bermejo confirma en su declaración que Carla utilizaba ese sistema de notas para acordarse de no pasar por delante del despacho cuando Sallén estuviera dentro.',
      metadata: { fecha: '22/05/2026', fuente: 'Recogida en escena — Despacho Carla', ref: 'INV-2026-0521-E' }
    },
    {
      id: 'mail_fragmento',
      title: 'Mail con fragmento numérico',
      type: 'documento',
      icon: '📧',
      iconPath: 'assets/img/icons/Pruebas/Comunicaciones _Tecnología/Icon_MOV.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P8 — Mail con fragmento numérico.png',
      shortDesc: 'Mail externo a Carla. Asociación de asistencia. Servidor coincide con oficina de Vidal.',
      fullDesc: 'Mail recibido en la cuenta personal de Carla Vinyets el 16 de mayo desde una dirección externa, "informa@asistenciamujer.es". El cuerpo es genérico ("respondemos a su consulta del 14 de mayo"); la firma muestra un teléfono parcialmente legible — algunos caracteres se han corrompido en el reenvío automático: "[...] línea de atención 24h: 665-X3-47-9X [...]". Origen verificado: una asociación de asistencia jurídica a víctimas de acoso, sede en Madrid centro. Detalle colateral: la dirección IP del envío sitúa al servidor en el mismo edificio que la oficina paralela de la calle Sagasta donde Esteban Vidal acudió entre los días 17 y 21 de mayo según logs de su VPN personal.',
      metadata: { fecha: '16/05/2026', fuente: 'Cuenta personal Carla Vinyets', ref: 'TEL-2026-0521-F' }
    },
    {
      id: 'foto_vidal',
      title: 'Foto familiar Esteban Vidal',
      type: 'objeto',
      icon: '🖼️',
      iconPath: 'assets/img/icons/Pruebas/EvidenciasFísicas/Icon_ROCK.png',
      imagePath: 'assets/img/suspects/Caso3/Pruebas/P9 — Foto familiar Esteban Vidal.png',
      shortDesc: 'Foto enmarcada en el despacho de Vidal. "Talavera de Vélez, 1986. Padre y Comisario Mora".',
      fullDesc: 'Foto enmarcada sobre la estantería del despacho de Esteban Vidal. Hombre con uniforme de la Guardia Civil junto a un Citroën GS de los años 80. Inscripción al dorso, manuscrita: "Talavera de Vélez, 1986. Mi padre y el Comisario Mora". Vidal menciona, sin que se le pregunte, que su padre y un comisario apellidado Mora trabajaron juntos en aquel pueblo. Catalogado como referencia colateral; sin línea de investigación abierta.',
      metadata: { fecha: '22/05/2026', fuente: 'Despacho Esteban Vidal — TecBaria S.A.', ref: 'INV-2026-0521-G' }
    }
  ],

  // ═══════════════════════════════════════════════════
  // HERRAMIENTAS DE MESA — Teléfono
  //
  // El número 665-23-47-98 corresponde a la línea 24h de la Asociación de
  // Asistencia Jurídica a Víctimas de Acoso. Carla intentó llamar el 18
  // de mayo y dejó un buzón decisivo nombrando a Jorge Sallén.
  //
  // Fragmentos repartidos por las pruebas para que el jugador reconstruya
  // el número:
  //   - Cuaderno (P6):     6XX-X3-XX-9X        → posiciones 1, 5, 8
  //   - Mail asociación:    665-X3-47-9X        → posiciones 1-3, 5, 6-7, 8
  //   - Respuesta de Olalla al cuaderno:        → posición 4 (el "dos del
  //     medio") y posición 9 (el "ocho" final)
  //   - Pegatina "22":      es el despacho de Sallén, NO un fragmento del
  //     teléfono. Sirve de pista hacia el sospechoso, no hacia el número.
  // ═══════════════════════════════════════════════════
  phoneNumbers: [
    {
      id: 'phone-asistencia',
      number: '665-23-47-98',
      source: 'Asociación de Asistencia Jurídica a Víctimas de Acoso',
      description: 'Línea 24h de la asociación. Carla intentó llamar el 18 de mayo.',
      unlockCondition: 'Reunir los fragmentos: cuaderno + mail + respuesta de Olalla al cuaderno',
      response: {
        type: 'text',
        content: '*Tono de marcado · contestador automático*\n\n"Ha llamado a la línea 24h de la Asociación de Asistencia Jurídica a Víctimas de Acoso. Si su llamada es urgente, puede dejar un mensaje tras la señal."\n\n*pi*\n\n*Mensaje guardado · 18 de mayo, 23:14 · entrante de número con prefijo 91:*\n\n"Hola, soy Carla Vinyets. Trabajo en TecBaria, calle Sagasta. Necesito ayuda urgente. Hay un compañero, Jorge Sallén, que lleva meses persiguiéndome. Le he puesto la denuncia formal en RRHH hace dos días. Pero él se ha enterado y le tengo miedo. Salgo tarde del despacho casi todas las noches. Por favor, llámenme. Mi número está en el formulario que les mandé. Por favor."\n\n*fin del mensaje*'
      },
      gameplayEffect: {
        type: 'addNotebook',
        target: 'mensaje-carla-asociacion'
      }
    }
  ],

  contradictions: [
    {
      id: 'c3-jorge-rrhh',
      suspectId: 'jorge',
      questionIds: ['jorge-v1', 'jorge-v2', 'jorge-v3'],
      evidenceId: 'rrhh',
      statement: '"Éramos compañeros, casi como hermanos. No había nada raro. Carla solo me pidió aire una vez, hace meses, por estrés."',
      proof: 'La carpeta de RRHH documenta seis meses de comportamiento descrito como acoso. La denuncia formal se interpuso el 19 de mayo, dos días antes del crimen. RRHH había convocado a Sallén al día siguiente del homicidio, a las 11:00.',
      suspicionBonus: 22
    },
    {
      id: 'c3-jorge-cctv',
      suspectId: 'jorge',
      questionIds: ['jorge-c1', 'jorge-c2'],
      evidenceId: 'cctv',
      statement: '"No salí de casa entre las nueve y la medianoche. Es noche de no salir. Llovía."',
      proof: 'El CCTV del portal de la víctima muestra una figura encapuchada de altura y complexión compatible con Sallén siguiendo a Carla a las 22:28. La figura huye por la calle Augusto Figueroa, en dirección al domicilio de Sallén — a seis minutos andando.',
      suspicionBonus: 20
    },
    {
      id: 'c3-bernabe-radio',
      suspectId: 'bernabe',
      questionIds: ['bernabe-c2'],
      evidenceId: 'cctv',
      statement: '"Tenía la radio puesta. Carrusel deportivo. No oí nada."',
      proof: 'La cámara secundaria de la garita captura el rostro de Bernabé Faz iluminado por la pantalla de un móvil durante la franja horaria del crimen, no por la luz analógica de la radio.',
      suspicionBonus: 5,
      isRedHerring: true,
      clarification: 'Bernabé Faz, presionado, admite que estaba viendo la repetición del partido en el móvil sin permiso de la propiedad. Vergüenza profesional. Su atención estaba en la pantalla, no en el portal — pero no en el crimen.'
    },
    {
      id: 'c3-esteban-coartada',
      suspectId: 'esteban',
      questionIds: ['esteban-c1', 'esteban-c2'],
      evidenceId: 'mail_fragmento',
      statement: '"Estuve en mi casa toda la noche. Mi VPN tiene registro."',
      proof: 'El servidor del mail "asistenciamujer.es" se aloja en el mismo edificio de la calle Sagasta donde la VPN personal de Vidal registra conexiones nocturnas durante los días 17 al 21 de mayo. La coartada doméstica no encaja con su ubicación digital.',
      suspicionBonus: 5,
      isRedHerring: true,
      clarification: 'Vidal admite que estaba sondeando irse a la competencia con clientes desde la oficina paralela de Sagasta, en horario que ocultaba a TecBaria. Mintió por temor a represalias laborales, no por el homicidio. El registro de la VPN externa y el resguardo del taxi de las 23:15 confirman su coartada esa noche.'
    }
  ],

  solution: {
    who: 'jorge',
    how: 'apunalamiento',
    why: 'acoso_denunciado'
  },

  howOptions: [
    { id: 'apunalamiento',  text: 'Apuñalamiento con cuchillo doméstico' },
    { id: 'envenenamiento', text: 'Envenenamiento (durante la última cena en la oficina)' },
    { id: 'atropello',      text: 'Atropello encubierto en el portal' },
    { id: 'empujon',        text: 'Empujón mortal por las escaleras del portal' }
  ],

  whyOptions: [
    { id: 'acoso_denunciado', text: 'Despecho y miedo a la denuncia formal de RRHH' },
    { id: 'venganza_laboral', text: 'Venganza laboral del jefe directo' },
    { id: 'silenciar',        text: 'Silenciar el sondeo del acuerdo no autorizado' },
    { id: 'robo_idea',        text: 'Robo de propiedad intelectual del equipo' }
  ],

  correctExplanation: 'Jorge "Jordi" Sallén, compañero de equipo de Carla Vinyets, llevaba seis meses ejerciendo presión sentimental sobre ella. Tras rechazos repetidos, Carla formalizó la denuncia ante RRHH el 19 de mayo. Sallén lo supo el 21 de mayo, día del crimen, cuando RRHH le convocó para el día siguiente a las 11:00. Esa noche siguió a Carla desde la oficina hasta su portal de la calle de la Reina, en Chueca, y la apuñaló a las 22:28. Tres pruebas lo atan: la denuncia formal de RRHH (motivo y mentira sobre la "amistad"), el CCTV del portal (figura encapuchada huyendo hacia la calle Augusto Figueroa donde vive), y el post-it con "22" en el monitor de Carla — sistema documentado por Olalla Bermejo para evitar pasar por su despacho. La grabación que Carla había buscado en la asociación de asistencia jurídica nombra a Sallén con apellido completo. Bernabé Faz, el portero, mintió sobre la radio para ocultar que veía un partido en el móvil. Esteban Vidal, el jefe, mintió sobre su coartada para ocultar un sondeo profesional con la competencia. Ninguno mintió por el crimen.',

  wrongExplanation: 'El verdadero culpable era Jorge "Jordi" Sallén, compañero de equipo de Carla. Llevaba seis meses presionándola sentimentalmente. Carla formalizó la denuncia ante RRHH el 19 de mayo. Sallén lo supo el 21 de mayo y la siguió desde la oficina hasta su portal en Chueca, apuñalándola a las 22:28. Las pruebas clave eran la carpeta de RRHH, el CCTV del portal mostrando una figura encapuchada huyendo hacia su calle, y el post-it con "22" en el monitor (el número del despacho contiguo, el de Sallén). Bernabé Faz mintió sobre la radio (veía un partido en el móvil) y Esteban Vidal mintió sobre su coartada (tenía un sondeo no autorizado con la competencia), pero ninguno tenía relación con el homicidio.',

  // ═══════════════════════════════════════════════════
  // CENA EN CASA — Tras resolver el caso
  // ═══════════════════════════════════════════════════
  cena: {
    apertura: 'La ingeniera de Chueca. Salió en El País esta mañana, en la portada digital. ¿Era el tuyo?',

    repasoPool: [
      {
        id: 'c03_jorge_acoso',
        linea: {
          default: 'El compañero, el que la acosaba durante meses... ¿le viste rápido?',
          acusoIncorrecto: 'El verdadero culpable la acosaba durante meses. Acusaste a {nombreAcusado}, no a él. ¿Cómo te lo explicas?'
        },
        respuestas: [
          { id: 'a', texto: 'Cuando vi la denuncia de RRHH se me cayó el alma al cuerpo. Llegó tarde por dos días.',
            efecto: { sinceridad: +10, integridad: +5, lucidez: -3 },
            replica: 'Dos días. Joder. La burocracia mata.' },
          { id: 'b', texto: 'Le vi al primer interrogatorio. Sonríe demasiado para ser inocente.',
            efecto: { sinceridad: +4, integridad: +2 },
            replica: 'Tu olfato no falla, parece.' },
          { id: 'c', texto: 'Tarde. Casi me lleva la coartada del jefe por delante.',
            efecto: { sinceridad: +8, lucidez: -4 },
            replica: 'Reconocer eso ya es algo.' }
        ]
      },

      {
        id: 'c03_esteban_oficinas',
        linea: {
          default: 'El jefe. Mintió sobre dónde estaba esa noche, ¿no? Eso te debió tener un rato pensando.'
        },
        respuestas: [
          { id: 'a', texto: 'Sí. Y mientras pensaba en él, el otro respiraba tranquilo. Casi pierdo el caso por mirar al jefe.',
            efecto: { sinceridad: +10, integridad: +3, lucidez: -3 },
            replica: 'A la próxima abre el abanico antes.' },
          { id: 'b', texto: 'Le pillé enseguida. La gente que tiene un buen traje también miente, ya lo sabía.',
            efecto: { sinceridad: -5, integridad: +2 },
            replica: 'Qué cínico. Pero al menos no perdiste el rumbo.' },
          { id: 'c', texto: 'El jefe es un cobarde. Pero un cobarde no es un asesino.',
            efecto: { sinceridad: +6, lucidez: +3 },
            replica: 'Buena distinción. Tendría que aprender de ti.' }
        ]
      },

      {
        id: 'c03_bernabe_movil',
        linea: {
          default: 'El portero del edificio. ¿De verdad mentía solo por el partido?'
        },
        respuestas: [
          { id: 'a', texto: 'Sí. Vergüenza profesional. Llevaba treinta años en esa garita y casi le cuesta la jubilación.',
            efecto: { sinceridad: +6, integridad: +2 },
            replica: 'Pobre hombre. Hay vergüenzas que cuesta más arrastrar que un crimen.' },
          { id: 'b', texto: 'Le creí enseguida. La gente que miente por orgullo se pilla rápido.',
            efecto: { integridad: +3 },
            replica: 'Tú también mientes por orgullo, ¿eh?' },
          { id: 'c', texto: 'Le solté un sermón yo, no le hizo falta el comisario.',
            efecto: { integridad: -4, sinceridad: +5 },
            replica: 'Ni falta hacía. Pero allá tú.' }
        ]
      },

      {
        id: 'c03_denuncia_tarde',
        linea: {
          default: 'La denuncia llegó dos días antes del crimen. ¿Eso ayudó o complicó?'
        },
        respuestas: [
          { id: 'a', texto: 'Las dos cosas. Sin la denuncia el motivo no se ve. Con la denuncia él entró en pánico y por eso mató.',
            efecto: { sinceridad: +10, lucidez: -3 },
            replica: 'Eso es de las cosas que no me dejan dormir bien.' },
          { id: 'b', texto: 'Si la denuncia hubiera entrado antes, ella estaría viva. RRHH se duerme.',
            efecto: { integridad: +5, sinceridad: +6 },
            replica: 'Habría que escribirles. En serio.' },
          { id: 'c', texto: 'Lo que ayudó fue la pegatina del 22. Eso me lo dio una amiga, no la denuncia.',
            efecto: { lucidez: +5 },
            replica: 'Las amigas hacen más que los papeles, casi siempre.' }
        ]
      },

      {
        id: 'c03_sentir',
        linea: {
          default: '¿Y cómo estás tras éste?',
          acusoIncorrecto: '¿Y cómo estás tras éste? Aunque no lo cerraras del todo.'
        },
        respuestas: [
          { id: 'a', texto: 'Me ha dejado torcido. Tres mentiras a la vez y solo una mata. Eso lo doy de los que no se olvidan.',
            efecto: { sinceridad: +10, lucidez: -5 },
            replica: 'Yo tampoco lo olvido. Has llegado tarde a casa toda la semana.' },
          { id: 'b', texto: 'Bien. La denuncia ya no se quedará en un cajón.',
            efecto: { integridad: +4, sinceridad: -3 },
            replica: 'Ojalá fuera tan limpio el sistema.' },
          { id: 'c', texto: 'Cansado. Tres días sin dormir bien.',
            efecto: { sinceridad: +8, lucidez: -6 },
            replica: 'Come algo. Y vente a la cama.' }
        ]
      }
    ],

    // Gancho de memoria: la mención que Vidal hace del "Comisario Mora" en
    // el caso. Carga el sembrado del padre del detective, que reaparecerá
    // con peso en caso 4.
    ganchoMemoria: {
      id: 'c03_memoria_padre',
      linea: 'Por cierto. El jefe ese, Vidal, te dijo algo de su padre y un Comisario Mora en Talavera. Te conozco la cara cuando te callas. ¿Qué fue eso?',
      respuestas: [
        { id: 'a', texto: 'No me acuerdo bien. Algún Mora habrá habido.',
          efecto: { sinceridad: -10, flags: ['bloqueo_padre'] },
          replica: 'Vale. Lo dejo.' },
        { id: 'b', texto: 'Lo dejé pasar. No quería abrir esa puerta delante de un sospechoso.',
          efecto: { sinceridad: +6, integridad: +4, flags: ['recuerda_padre'] },
          replica: 'Gracias por contármelo. ¿Quieres hablar de tu padre alguna noche?' },
        { id: 'c', texto: 'Le mentí. Le dije que no me sonaba el apellido.',
          efecto: { sinceridad: +12, integridad: -3, flags: ['miente_sobre_padre'] },
          replica: 'Mi amor. ¿Por qué no me cuentas qué pasa con tu padre, de una vez?' }
      ]
    }
  }
};

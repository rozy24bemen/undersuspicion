/**
 * CASO 04: "La piedra rota"
 * Acto I — caso pivote. Mecánica nueva: contradicciones cruzadas entre
 * sospechosos (campo `requiredFromSuspects`). Sin herramienta nueva.
 *
 * Culpable: Don Eulogio Pacheco (médico jubilado, amigo de la víctima).
 * Red herring: Mireia Solana (sisado de productos durante años, testimonio
 * sobre el coche de Eulogio sigue siendo válido).
 * Inocentes con coartada: Joaquín Vela (gasolinera), Lucía Solera (casa rural).
 *
 * Pivote del Acto I: las hojas sueltas sobre "el caso Mora del 86" siembran
 * el primer reconocimiento explícito del pasado del padre del detective.
 * La cena con Elena al final del caso es la primera confrontación directa
 * sobre ese pasado.
 */
var US = US || {};
US.CASES = US.CASES || {};

US.CASES['caso-04'] = {
  id: 'caso-04',
  title: 'La piedra rota',
  subtitle: 'Caso Nº 2026-0612',
  intro: 'Andrés Solera, panadero jubilado de 72 años, ha aparecido muerto en el despacho de su caserón antiguo de la plaza Mayor de Talavera de Vélez. Golpe en la nuca con una piedra del fuego del propio despacho — la que él tenía como tope de los troncos. La piedra está rota y manchada. Cuatro personas le rodeaban en sus últimos días: un sobrino, una hija, una asistenta, y un viejo amigo médico. Tres dicen no haber estado allí. Una sí estuvo. El detective creció en este pueblo. Sus apellidos están escritos en algún papel que Andrés guardaba.',

  victim: {
    name: 'Andrés Solera',
    age: 72,
    occupation: 'Panadero jubilado — antigua tahona del pueblo',
    portrait: 'assets/img/suspects/Caso4/Retrato_Victima_caso4.png'
  },

  scene: {
    location: 'Caserón siglo XIX — Plaza Mayor, Talavera de Vélez (Toledo)',
    date: '12 de junio de 2026',
    timeOfDeath: 'Entre las 13:50 y las 14:30h',
    cssClass: 'scene-caso4'
  },

  suspects: [
    // ──────────────── JOAQUÍN VELA ────────────────
    {
      id: 'joaquin',
      name: 'Joaquín Vela',
      age: 58,
      role: 'Sobrino de la víctima — Madrid (vino al pueblo el día del crimen)',
      description: 'Cara de no haber dormido. Vivía en Madrid. Llegó al caserón demasiado tarde — la Guardia Civil ya estaba dentro. Co-heredero de la mitad del caserón.',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso4/Sospechosos/JoaquínVela-Neutral.png',
        talking: 'assets/img/suspects/Caso4/Sospechosos/JoaquínVela-Pensativo.png',
        nervous: 'assets/img/suspects/Caso4/Sospechosos/JoaquínVela-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'joaquin-v1',
            text: '¿Cuál era tu relación con Andrés?',
            response: '"Era mi tío, hermano de mi padre. Yo crecí en Madrid, pero veníamos al pueblo cada dos por tres. Mi tío me hacía magdalenas en su tahona hasta los veinte. Después la cerró. Nunca le tomó cariño al horno panificadora."',
            pressureCost: 8
          },
          {
            id: 'joaquin-v2',
            text: '¿Vas a heredar?',
            response: '"La tahona, que ya no es tahona, es un local cerrado. Y la mitad del caserón. La otra mitad es de mi prima Lucía, su hija. Tampoco hay para tirar cohetes, esto no se vende fácil en este pueblo. Una casa de mil metros sin compradores."',
            pressureCost: 12
          },
          {
            id: 'joaquin-v3',
            text: '¿Tu familia tiene relaciones por Lavapiés, en Madrid?',
            response: '"Mi madre era una Cienfuegos. Prima lejana de un Salvador Cienfuegos que vivía en Argumosa. Murió hace dos meses, lo leí en el periódico. Familias chicas, mundos chicos."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'joaquin-c1',
            text: '¿Dónde estabas el día del crimen?',
            response: '"Vine al pueblo a primera hora a ver a mi tío. Pero llegué tarde para encontrármelo vivo. Paré antes en la gasolinera de la entrada, repostando. El registro de mi tarjeta es de las 13:47. Cuando llegué al caserón a las 14:25, ya estaba la Guardia Civil."',
            pressureCost: 10
          },
          {
            id: 'joaquin-c2',
            text: '¿Por qué venías ese día concreto?',
            response: '"Mi tío me había llamado anoche. Me dijo \'Joaquín, mañana paso a hablar con Eulogio y luego quiero hablar contigo\'. Ahora me pesa no haber salido más temprano. No puedo dejar de pensarlo."',
            pressureCost: 12
          },
          {
            id: 'joaquin-c3',
            text: '¿Conoces a Don Eulogio Pacheco?',
            response: '"Toda la vida. Médico del pueblo. Él me curó la varicela cuando tenía siete años. Era amigo cercano de mi tío de antes de yo nacer. Cenaban juntos los domingos hasta hace no mucho."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'piedra':    { response: '"Esa piedra del fuego la conocía yo desde niño. Mi tío la usaba como tope para los troncos. La rompió el bestia que lo mató."', pressureCost: 6 },
        'forense':   { response: '"El doctor Vidal era forense en Madrid. ¿Por qué firma él un caso del pueblo? Habrá venido por algún protocolo. Si Octaviano Vidal está aquí, inspector, es porque alguien se lo pidió."', pressureCost: 8 },
        'agenda':    { response: '"Esa anotación... \'Eulogio decisión hablar con Lucía\'. Mi tío iba a contarle algo a su hija. Algo importante. Eso me lo había advertido por teléfono anoche."', pressureCost: 10 },
        'carta':     { response: '"\'Querida Lucía, hay cosas que un padre debe contar a su hija antes de morir...\'. Joder. La estaba acabando. Por eso me había llamado a mí también, para que le acompañara o para que escuchara después. No lo sé."', pressureCost: 12 },
        'llamadas':  { response: '"¿Eulogio llamó tres veces el día anterior? Eso no es de quien queda a comer. Eso es de quien está nervioso por algo. Mi tío y él se llamaban una vez al mes, máximo."', pressureCost: 10 },
        'coartadas': { response: '"Mi coartada está. La de Lucía también — pueden mirar en la casa rural de Cercedilla. Pueden mirar el ticket de la gasolinera de las 13:47."', pressureCost: 6 },
        'hojas':     { response: '"\'Caso Mora del 86\'... \'calle Goya 14\'. Eso son del archivo personal de mi tío. Yo no entré nunca a esos papeles. Mi tío era reservado. Pero ahora me cuadra que llevaba meses revolviendo esa caja vieja del armario."', pressureCost: 14 },
        'morgue':    { response: '"El doctor Vidal me reconoció cuando entré a la sala. Me dijo \'tu madre era Carmen, ¿no?\'. Mi madre se llamaba Margarita, le corregí. Le pasaba algo al doctor, evitaba mirarle a usted, inspector. Vergüenza, igual."', pressureCost: 10 }
      }
    },

    // ──────────────── MIREIA SOLANA ────────────────
    {
      id: 'mireia',
      name: 'Mireia Solana',
      age: 45,
      role: 'Asistenta del caserón — dos veces por semana',
      description: 'Doce años en la casa. Tiene llaves. Cocina los lunes y jueves, limpia los miércoles. Coincidencia narrativa: el apellido Solana es también el de Elena, la mujer del detective.',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso4/Sospechosos/MireiaSolana-Neutral.png',
        talking: 'assets/img/suspects/Caso4/Sospechosos/MireiaSolana-Pensativa.png',
        nervous: 'assets/img/suspects/Caso4/Sospechosos/MireiaSolana-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'mireia-v1',
            text: '¿Cuánto tiempo llevabas trabajando para Andrés?',
            response: '"Doce años. Vine al caserón cuando el señor Solera enviudó. Cocinaba para él los lunes y jueves. La casa la limpiaba en profundidad los miércoles. Nunca un mal gesto en doce años."',
            pressureCost: 8
          },
          {
            id: 'mireia-v2',
            text: '¿Te llevabas bien con él?',
            response: '"Sí. Era un señor de los antiguos. Me trataba con respeto, pagaba puntual. Me echo a llorar y todo, oiga. Dos hijos llevo en casa, mi marido en paro, y este señor era una bendición."',
            pressureCost: 10
          },
          {
            id: 'mireia-v3',
            text: '¿Conocías a Don Eulogio Pacheco?',
            response: '"Claro. Médico del pueblo, viejo amigo del señor Solera. Cenaban juntos los domingos. La última cena fue hace tres semanas. Las preparaba siempre yo. Codornices al horno y tarta de Santiago de postre. Repetían."',
            pressureCost: 10
          }
        ],
        coartada: [
          {
            id: 'mireia-c1',
            text: '¿Dónde estabas la mañana del crimen?',
            response: '"En el caserón, limpiando. Hasta las once y media. Después bajé a la plaza a tomarme un café antes de irme a casa."',
            pressureCost: 10
          },
          {
            id: 'mireia-c2',
            text: '¿Viste algo extraño esa mañana o tarde?',
            response: '"[pausa] Vi el coche de Don Eulogio aparcado enfrente del caserón a las dos y diez de la tarde. Yo estaba bajando a la plaza. Don Eulogio nunca aparca ahí, siempre deja el coche en su consulta. Me extrañó. Pero ya estaba fuera del trabajo."',
            pressureCost: 14
          },
          {
            id: 'mireia-c3',
            text: '¿Tienes coartada para esa tarde?',
            response: '"[nerviosa] Yo... estaba en mi casa. Mi marido lo puede confirmar. Y si miran las facturas que les enseñé, también. Las facturas del caserón demuestran que la mañana estuve aquí."',
            pressureCost: 14
          }
        ]
      },
      evidenceResponses: {
        'piedra':    { response: '"Esa piedra la limpiaba yo todos los miércoles. Nunca la moví. Ahora ya no se va a limpiar más."', pressureCost: 6 },
        'forense':   { response: '"El forense viene de Madrid, ¿verdad? Aquí no tenemos uno propio. Octaviano Vidal, así se llama. Estuvo ayer en la sala. Me reconoció al verme."', pressureCost: 8 },
        'agenda':    { response: '"Esa letra es del señor. Lo de Eulogio... no me extraña que se hablaran. Pero \'decisión\'... eso suena a algo gordo. Llevaba semanas raro. Más callado en el desayuno."', pressureCost: 10 },
        'carta':     { response: '"Esa carta no la había visto. El señor era muy reservado con los papeles personales. La caja del armario la tenía cerrada con llave."', pressureCost: 8 },
        'llamadas':  { response: '"Tres llamadas el día antes. Don Eulogio era de pasarse, no de telefonear. Algo le incomodaba mucho. Yo le abrí la puerta dos veces esa semana, las dos en mañanas."', pressureCost: 10 },
        'coartadas': { response: '"Mi coartada... [silencio, mira a sus manos] mire, lo de las facturas no se sostiene si las cruzan con los movimientos del banco. Le voy a contar la verdad antes de que la encuentren ustedes."', pressureCost: 16 },
        'hojas':     { response: '"¿Caso Mora? ¿Calle Goya? Eso son del archivo personal del señor. Yo no entraba a sus papeles. Pero la caja la tenía sobre la mesa esta semana, abierta. Lo recuerdo."', pressureCost: 12 },
        'morgue':    { response: '"Don Octaviano. Estuvo aquí ayer. Le saludé al entrar a la sala. Me reconoció: \'tú eres la señora del pueblo de Andrés, ¿no?\'. Como si me hubiera visto antes en alguna jornada o algo así."', pressureCost: 8 }
      }
    },

    // ──────────────── DON EULOGIO PACHECO (CULPABLE) ────────────────
    {
      id: 'eulogio',
      name: 'Don Eulogio Pacheco',
      age: 78,
      role: 'Médico jubilado del pueblo — amigo íntimo de la víctima',
      description: 'Pelo blanco, traje gris, mirada calma. Cincuenta años de amistad con Andrés. Sigue pasando consulta tres días por semana sin nómina. Habla muy bajito.',
      isGuilty: true,
      portraits: {
        neutral: 'assets/img/suspects/Caso4/Sospechosos/DonEulogioPacheco-Neutral.png',
        talking: 'assets/img/suspects/Caso4/Sospechosos/DonEulogioPacheco-Pensativo.png',
        nervous: 'assets/img/suspects/Caso4/Sospechosos/DonEulogioPacheco-Nervioso.png'
      },
      questions: {
        vinculo: [
          {
            id: 'eulogio-v1',
            text: '¿Cuál era su relación con Andrés Solera?',
            response: '"Amigos desde niños. Cincuenta años de amistad, inspector. Yo le saqué adelante a su hija de un parto difícil hace cuarenta años. Le había guardado las espaldas mil veces. Y él a mí. Esto es lo más cercano a perder a un hermano."',
            pressureCost: 8
          },
          {
            id: 'eulogio-v2',
            text: '¿Sabe algo del archivo personal que Andrés guardaba en su caserón?',
            response: '"[pausa breve] Sé que conservaba documentos antiguos. Cosas de su padre, del abuelo. Cartas. Andrés era de los que guarda papeles. Nada concreto, nada importante. Habrá fotos del pueblo de cuando éramos críos."',
            pressureCost: 12
          },
          {
            id: 'eulogio-v3',
            text: '¿Le había llamado los días previos al crimen?',
            response: '"Una vez, sí. Para confirmar la cena del domingo siguiente. Eso fue todo, inspector. Charla breve, de viejos amigos."',
            pressureCost: 14
          }
        ],
        coartada: [
          {
            id: 'eulogio-c1',
            text: '¿Dónde estaba el día del crimen, por la mañana?',
            response: '"En la consulta del pueblo, toda la mañana. Sigo pasando consulta tres días por semana, aunque esté jubilado oficialmente. Es vocacional ya, sin nómina. Tengo el libro de visitas firmado por once pacientes."',
            pressureCost: 10
          },
          {
            id: 'eulogio-c2',
            text: '¿Y a primera hora de la tarde?',
            response: '"En mi casa, comiendo. Como cualquier día de pueblo, sale uno de la consulta a las dos y se va a comer. Vivo solo, esposa fallecida hace cinco años. Sopa, ensalada, fruta. No puedo testificar conmigo mismo, ya me lo imagino."',
            pressureCost: 14
          },
          {
            id: 'eulogio-c3',
            text: '¿Volvió a salir a la calle esa tarde?',
            response: '"Sobre las cinco, sí. Salí a dar un paseo por la plaza, como hago cada tarde. Saludé a tres o cuatro vecinos. La señora Marcos del estanco, el cartero, los chicos de la peña."',
            pressureCost: 10
          }
        ]
      },
      evidenceResponses: {
        'piedra':    { response: '"Esa piedra la conocía. Andrés siempre se quejaba de que se balanceaba. Le decía a Mireia que la calzara mejor. Trágico que haya sido eso lo que..."', pressureCost: 8 },
        'forense':   { response: '"Octaviano Vidal. Médico forense respetable. Lo conozco de las jornadas anuales de medicina rural, de hace treinta años. Buen profesional."', pressureCost: 8 },
        'agenda':    { response: '"\'Eulogio decisión hablar con Lucía\'. Pues claro: Andrés iba a hablar con Lucía de la herencia, de cómo iba a partir el caserón. Yo le había aconsejado que no vendiera. Eso es lo que íbamos a discutir."', pressureCost: 12 },
        'carta':     { response: '"Esa carta es íntima, inspector. Andrés tenía el corazón blando para su hija. Me parece feo leerla. ¿Hay que leerla aquí?"', pressureCost: 14 },
        'llamadas':  { response: '"Tres llamadas el día anterior, sí, ahora que las veo. Una para la cena, otra para preguntar la dosis de la pastilla de la hipertensión, y la tercera... la tercera no me acuerdo. Cosas de viejos amigos. Charlábamos de cualquier cosa."', pressureCost: 16 },
        'coartadas': { response: '"Mi coartada es la consulta, donde me vieron once pacientes. Y mi paseo de las cinco, donde me vieron media plaza. La hora de la comida no la puedo demostrar. Vivo solo."', pressureCost: 10 },
        'hojas':     { response: '"[pausa larga] ¿Hojas sueltas? \'Caso Mora del 86\'... \'calle Goya 14\'... no sé de qué me habla, inspector. Andrés tenía papeles de su padre, ya le digo. Yo no hablo de un caso del 86, en mi vida he firmado un papel de un caso así."', pressureCost: 18 },
        'morgue':    { response: '"Don Octaviano vino a hacer el levantamiento. Estuvimos hablando un rato en la puerta de la morgue, antes de que entrara usted. Se quedó pensativo cuando le dije su nombre, inspector Mora. Me dijo: \'¿el hijo del Comisario Mora?\'. No le respondí. No es asunto mío."', pressureCost: 12 }
      }
    },

    // ──────────────── LUCÍA SOLERA ────────────────
    {
      id: 'lucia_s',
      name: 'Lucía Solera',
      age: 40,
      role: 'Hija única de la víctima — vive en Madrid',
      description: 'Vino el viernes por la noche a una casa rural de Cercedilla con su pareja. Tenía previsto subir al pueblo el domingo. La llamada de la Guardia Civil llegó el lunes por la mañana.',
      isGuilty: false,
      portraits: {
        neutral: 'assets/img/suspects/Caso4/Sospechosos/LucíaSolera-Neutral.png',
        talking: 'assets/img/suspects/Caso4/Sospechosos/LucíaSolera-Pensativa.png',
        nervous: 'assets/img/suspects/Caso4/Sospechosos/LucíaSolera-Nerviosa.png'
      },
      questions: {
        vinculo: [
          {
            id: 'lucia_s-v1',
            text: '¿Cuál era tu relación con tu padre?',
            response: '"La que tiene cualquier hija con un padre de pueblo y una vida en Madrid. Hablábamos cada domingo. Yo subía dos fines de semana al mes. Le llevaba a mi pareja las pocas veces que él aceptaba — era de los antiguos en eso."',
            pressureCost: 8
          },
          {
            id: 'lucia_s-v2',
            text: '¿Por qué subiste este fin de semana?',
            response: '"Mi padre me había dicho \'hija, tengo algo importante que contarte. Algo de la familia\'. Iba a subir el sábado por la noche. Me adelanté, llegué a Cercedilla el viernes. Pensaba ir al pueblo el domingo. No llegué a tiempo."',
            pressureCost: 12
          },
          {
            id: 'lucia_s-v3',
            text: '¿Sabes qué quería contarte?',
            response: '"No exactamente. Sé que llevaba meses dándole vueltas a algo del archivo personal. Algo de los años ochenta. Una vez me dijo, hace dos semanas, frase exacta: \'hay cosas que un padre debe contarle a su hija antes de morir, Lucía\'."',
            pressureCost: 14
          }
        ],
        coartada: [
          {
            id: 'lucia_s-c1',
            text: '¿Dónde estabas el día del crimen?',
            response: '"En una casa rural en Cercedilla, con mi pareja. Reservamos el viernes por la tarde, llegamos a las siete. Salimos del lote el lunes por la mañana, después de la llamada de la Guardia Civil. Hay cuatro testigos al menos."',
            pressureCost: 10
          },
          {
            id: 'lucia_s-c2',
            text: '¿Tu pareja puede confirmar la coartada?',
            response: '"Sí, su nombre y teléfono ya los tienen. Y los dueños de la casa rural, que nos hicieron la cena del sábado. Y dos amigos que vinieron a tomar café el sábado por la mañana."',
            pressureCost: 10
          },
          {
            id: 'lucia_s-c3',
            text: '¿Tu padre te había hablado de Don Eulogio Pacheco últimamente?',
            response: '"Toda mi vida, médico del pueblo, amigo cercano. Cenaban los domingos. La última vez que mi padre me lo mencionó fue diciéndome \'Eulogio sabe cosas. Tenemos que hablar él y yo. Y luego quiero hablar contigo\'. Eso fue hace dos semanas."',
            pressureCost: 14
          }
        ]
      },
      evidenceResponses: {
        'piedra':    { response: '"Esa piedra la habrá usado el bestia que entró en la casa. Mi padre la tenía como decoración del despacho. Recuerdo verla de pequeña."', pressureCost: 6 },
        'forense':   { response: '"Don Octaviano Vidal. Le conocía. Vino una vez a casa hace años. Ahora me da la sensación de que le mira a usted, inspector, con tristeza. Como si supiera algo de usted que usted no sabe."', pressureCost: 12 },
        'agenda':    { response: '"Esa nota \'Eulogio decisión hablar con Lucía\'. Mi padre iba a hablar con él primero. Y luego conmigo. Y entre medias lo mataron. ¿Casualidad?"', pressureCost: 12 },
        'carta':     { response: '"Esa carta es para mí. La estaba escribiendo mi padre cuando le interrumpieron — la tinta fresca lo demuestra. Quiero leerla en privado, si me lo permite."', pressureCost: 12 },
        'llamadas':  { response: '"Tres llamadas. Don Eulogio nunca llamaba tres veces para nada. Algo le tenía nervioso. Mi padre no le habría devuelto las tres si fueran cosas de cena."', pressureCost: 10 },
        'coartadas': { response: '"Mi coartada está en la casa rural de Cercedilla. La de mi primo Joaquín está en la gasolinera de la entrada del pueblo. Verificadas las dos. La de Mireia, pregúntele a Mireia."', pressureCost: 6 },
        'hojas':     { response: '"Estas hojas las saqué yo del bolsillo de mi padre antes de que llegaran ustedes, inspector. Lo confieso. \'Caso Mora del 86\'... \'calle Goya 14\'. Mi padre tenía algo entre manos. Algo viejo. Lo que iba a contarme. Tienen su firma — y la de Don Eulogio como testigo."', pressureCost: 16 },
        'morgue':    { response: '"Don Octaviano evita mirar al inspector. Lo notó usted, ¿no? Algo sabe. Cuando le menté el apellido Mora, ni parpadeó. Eso no es no saber, eso es saber demasiado."', pressureCost: 12 }
      }
    }
  ],

  evidence: [
    {
      id: 'piedra',
      title: 'Piedra del fuego rota',
      type: 'objeto',
      icon: '🪨',
      imagePath: 'assets/img/suspects/Caso4/Pruebas/P1 — Piedra del fuego rota.png',
      shortDesc: 'Sillar suelto del despacho. Sangre y cabello de Andrés. Arma del crimen.',
      fullDesc: 'Sillar de granito que servía como tope de los troncos en la chimenea del despacho. Roto en dos por el impacto. Sangre y cabello de la víctima en la arista superior. La fractura sugiere golpe único, fuerte, descendente. La piedra estaba al alcance de quien estuviera junto a la chimenea — no fue traída de fuera del despacho.',
      metadata: { fecha: '12/06/2026', fuente: 'UCI Talavera — Recogida en escena', ref: 'INV-2026-0612-A' }
    },
    {
      id: 'forense',
      title: 'Informe forense',
      type: 'documento',
      icon: '🩺',
      imagePath: 'assets/img/suspects/Caso4/Pruebas/P2 — Informe forense.png',
      shortDesc: 'Hora de muerte: 13:50-14:30. Golpe único. Forense: Octaviano Vidal.',
      fullDesc: 'Informe del Dr. Octaviano Vidal, médico forense desplazado desde Madrid expresamente para este caso. Causa de muerte: traumatismo craneoencefálico por golpe contundente único, descendente, con la piedra del fuego del propio despacho. Hora aproximada del fallecimiento: entre las 13:50 y las 14:30. No hay signos de defensa. La víctima estaba sentada en su escritorio cuando recibió el impacto desde detrás. Conocía a su agresor.',
      metadata: { fecha: '12/06/2026', fuente: 'Dr. Octaviano Vidal — Forense (Madrid)', ref: 'AUT-2026-0612' }
    },
    {
      id: 'agenda',
      title: 'Agenda de Andrés',
      type: 'documento',
      icon: '📔',
      imagePath: 'assets/img/suspects/Caso4/Pruebas/P3 — Agenda de Andrés.png',
      shortDesc: 'Anotación reciente y subrayada: "Eulogio — decisión — hablar con Lucía".',
      fullDesc: 'Agenda de mesa de Andrés Solera, abierta sobre el escritorio. Anotación del día del crimen, manuscrita y subrayada dos veces: "Eulogio — decisión — hablar con Lucía". El bolígrafo es el mismo que el de la carta a medio escribir hallada en el cajón. Anotaciones anteriores rutinarias (consulta veterinario, encargo panadería, pago contribución).',
      metadata: { fecha: '12/06/2026', fuente: 'Recogida en escena — Despacho Andrés', ref: 'INV-2026-0612-B' }
    },
    {
      id: 'carta',
      title: 'Carta a medio escribir',
      type: 'documento',
      icon: '✉️',
      imagePath: 'assets/img/suspects/Caso4/Pruebas/P4 — Carta a medio escribir.png',
      shortDesc: '"Querida Lucía, hay cosas que un padre debe contar...". Tinta fresca. Inacabada.',
      fullDesc: 'Carta manuscrita en el escritorio de Andrés Solera, dirigida a su hija Lucía. Tinta fresca confirmada por análisis. Texto inicial: "Querida Lucía, hay cosas que un padre debe contar a su hija antes de morir. Llevo años cargando con esto y no es justo que lo cargue ya yo solo. Lo que quiero contarte tiene que ver con el 86, con calle Goya, y con el padre del inspector Mora — el chico de los Mora, ¿te acuerdas de aquel niño que se quedó solo en casa de su tío...". La frase se interrumpe.',
      metadata: { fecha: '12/06/2026', fuente: 'Recogida en escena — Despacho Andrés', ref: 'DOC-2026-0612-C' }
    },
    {
      id: 'llamadas',
      title: 'Listado de llamadas',
      type: 'documento',
      icon: '📞',
      imagePath: 'assets/img/suspects/Caso4/Pruebas/P5 — Listado de llamadas.png',
      shortDesc: 'Eulogio llamó a Andrés 3 veces el día anterior. Eulogio dice que solo una.',
      fullDesc: 'Registro de la operadora del fijo de la consulta de Don Eulogio Pacheco. El día anterior al crimen, tres llamadas al fijo de Andrés Solera, espaciadas a las 09:14, 13:32 y 17:45. La primera dura un minuto; la segunda once minutos; la tercera dieciséis minutos. Don Eulogio declara haber llamado solo una vez, "para la cena del domingo".',
      metadata: { fecha: '13/06/2026', fuente: 'Operadora Movistar — Registro CDR consulta Pacheco', ref: 'TEL-2026-0613' }
    },
    {
      id: 'coartadas',
      title: 'Coartadas verificables',
      type: 'documento',
      icon: '📎',
      imagePath: 'assets/img/suspects/Caso4/Pruebas/P6 — Coartadas verificables.png',
      shortDesc: 'Joaquín: gasolinera 13:47. Lucía: casa rural Cercedilla. Mireia: facturas dudosas.',
      fullDesc: 'Resumen de coartadas verificadas por la unidad. Joaquín Vela: ticket de gasolinera de la entrada del pueblo a las 13:47, vídeo del surtidor. Lucía Solera: estancia en casa rural de Cercedilla del viernes a las 19:00 al lunes por la mañana, cuatro testigos. Mireia Solana: declara haber estado limpiando el caserón hasta las 11:30 y luego en su casa con su marido — facturas que aporta no encajan al cruzarse con los movimientos del banco del señor Solera durante los últimos años.',
      metadata: { fecha: '13/06/2026', fuente: 'UCI Talavera — Verificación testigos', ref: 'INV-2026-0613-D' }
    },
    {
      id: 'hojas',
      title: 'Hojas sueltas (caso Mora del 86 · calle Goya 14)',
      type: 'documento',
      icon: '📄',
      imagePath: 'assets/img/suspects/Caso4/Pruebas/P7 — Hojas sueltas caso Mora del 86 y calle Goya 14.png',
      shortDesc: 'Sacadas del bolsillo de Andrés. Mencionan el caso del 86 y la firma de Eulogio.',
      fullDesc: 'Tres hojas sueltas, dobladas, sacadas del bolsillo interior de la chaqueta de Andrés Solera. Lucía las extrajo antes de la llegada de la unidad y lo confiesa. Las hojas son fotocopias de un certificado médico firmado en agosto de 1986, expediente "calle Goya 14, Madrid". El nombre de la fallecida: Carmen Lobera. Causa registrada en el certificado: "infarto fulminante". Firma del médico que emite el certificado: Don Eulogio Pacheco. Testigo del certificado: Andrés Solera. Una nota manuscrita reciente, en margen, escrita por Andrés: "Esto le tengo que contar a Lucía. Y al chico, si vuelve por aquí".',
      metadata: { fecha: '12/06/2026', fuente: 'Bolsillo interior chaqueta Andrés Solera (extraído por hija)', ref: 'DOC-2026-0612-E' }
    },
    {
      id: 'morgue',
      title: 'Forense Octaviano Vidal en morgue',
      type: 'fotografía',
      icon: '🕯️',
      imagePath: 'assets/img/suspects/Caso4/Pruebas/P8 — Forense Octaviano Vidal en morgue.png',
      shortDesc: 'El forense reconoció al inspector. Apellido Mora. Evita mirarle el resto del caso.',
      fullDesc: 'Fotografía de la sala de la morgue del hospital comarcal. Don Octaviano Vidal, forense, con bata blanca, recibe al equipo de la unidad. Al ver al inspector, lo identifica sin que nadie se lo presente: "¿No serás tú el chico de los Mora? Si has crecido. Igualito a tu padre". A partir de ese momento, Vidal evita activamente el contacto visual con el inspector durante el resto del caso. Don Eulogio Pacheco, presente cuando ocurrió este reconocimiento, reaccionó endureciendo la mandíbula sin decir palabra.',
      metadata: { fecha: '12/06/2026', fuente: 'Hospital comarcal Talavera — Sala forense', ref: 'INV-2026-0612-F' }
    }
  ],

  contradictions: [
    // 1) CONTRADICCIÓN CRUZADA — requiere preguntas a Mireia para disparar.
    //    Eulogio dice que estuvo en casa comiendo solo a la hora del crimen.
    //    Mireia ha declarado haber visto su coche aparcado frente al caserón.
    {
      id: 'c4-eulogio-coche',
      suspectId: 'eulogio',
      questionIds: ['eulogio-c2'],
      evidenceId: 'coartadas',
      requiredFromSuspects: ['mireia'],
      statement: '"Comí en mi casa, solo. No salí a la calle hasta las cinco de la tarde."',
      proof: 'Mireia Solana, asistenta del caserón, ha declarado haber visto el coche de Don Eulogio aparcado frente al caserón a las 14:10 — coincidiendo con la franja horaria del fallecimiento.',
      suspicionBonus: 25
    },
    // 2) Llamadas al fijo de Andrés. Eulogio dice una; el listado registra tres.
    {
      id: 'c4-eulogio-llamadas',
      suspectId: 'eulogio',
      questionIds: ['eulogio-v3'],
      evidenceId: 'llamadas',
      statement: '"Le llamé una sola vez. Para la cena del domingo."',
      proof: 'El listado de llamadas registra tres llamadas desde el fijo de la consulta de Don Eulogio al de Andrés Solera el día anterior al crimen, espaciadas en ocho horas, con duraciones de 1, 11 y 16 minutos.',
      suspicionBonus: 22
    },
    // 3) Eulogio niega conocer el caso del 86. Las hojas demuestran su firma.
    {
      id: 'c4-eulogio-hojas',
      suspectId: 'eulogio',
      questionIds: ['eulogio-v2'],
      evidenceId: 'hojas',
      statement: '"No sé de qué me habla. Andrés tenía papeles de su padre, eso es todo. En mi vida he firmado un papel de un caso así."',
      proof: 'Las hojas sueltas extraídas del bolsillo de Andrés Solera incluyen un certificado de defunción de 1986 (Carmen Lobera, calle Goya 14, Madrid, "infarto fulminante") firmado por Don Eulogio Pacheco como médico emisor y Andrés Solera como testigo.',
      suspicionBonus: 22
    },
    // 4) RED HERRING — Mireia y el sisado.
    {
      id: 'c4-mireia-facturas',
      suspectId: 'mireia',
      questionIds: ['mireia-c3'],
      evidenceId: 'coartadas',
      statement: '"Estuve en mi casa esa tarde con mi marido. Las facturas que les he enseñado lo demuestran."',
      proof: 'El cruce de las facturas que aporta Mireia con los movimientos bancarios y el inventario del caserón revela un sisado sostenido durante años: artículos cobrados que después no aparecen en la despensa.',
      suspicionBonus: 5,
      isRedHerring: true,
      clarification: 'Mireia, presionada, admite que llevaba años inflando las facturas del caserón y revendiendo productos. Robo sostenido sin relación con el homicidio. Su declaración sobre haber visto el coche de Don Eulogio aparcado frente al caserón a las 14:10 sigue siendo válida.'
    }
  ],

  solution: {
    who: 'eulogio',
    how: 'golpe_piedra',
    why: 'silenciar_archivo'
  },

  howOptions: [
    { id: 'golpe_piedra',    text: 'Golpe en la nuca con la piedra del fuego del despacho' },
    { id: 'envenenamiento',  text: 'Envenenamiento durante una visita reciente' },
    { id: 'asfixia',         text: 'Asfixia con un paño de cocina' },
    { id: 'caida',           text: 'Caída fortuita por las escaleras del caserón' }
  ],

  whyOptions: [
    { id: 'silenciar_archivo', text: 'Silenciar un secreto antiguo del archivo personal de Andrés' },
    { id: 'herencia',          text: 'Disputa por la herencia del caserón' },
    { id: 'celos_amistad',     text: 'Celos por una vieja amistad rota' },
    { id: 'robo_sisado',       text: 'Encubrir un sisado prolongado en el caserón' }
  ],

  correctExplanation: 'Don Eulogio Pacheco, médico jubilado y amigo de Andrés Solera desde hacía cincuenta años, mató a Andrés en el despacho del caserón con la piedra del fuego, entre las 13:50 y las 14:30 del 12 de junio. Eulogio había firmado en agosto de 1986 el certificado de defunción falso de Carmen Lobera — esposa del Comisario Esteban Mora, padre del inspector que ahora investigaba el caso. La causa real de la muerte de Carmen Lobera nunca llegó al certificado. Andrés Solera firmó como testigo. Cuarenta años después, Andrés había decidido contárselo todo a su hija Lucía, que estaba a punto de vender el caserón y exponer el archivo familiar. La carta inacabada en el escritorio empezaba: "Querida Lucía, hay cosas que un padre debe contar a su hija antes de morir... lo que quiero contarte tiene que ver con el 86, con calle Goya, y con el padre del inspector Mora". Eulogio le llamó tres veces el día antes para disuadirlo. Cuando supo que era inútil, fue al caserón después de comer y le golpeó por la espalda. Tres pruebas lo atan: el listado de llamadas (mintió sobre el número de veces que llamó), las hojas sueltas extraídas del bolsillo de Andrés por Lucía (su firma como médico emisor), y el testimonio de Mireia Solana — que vio su coche aparcado frente al caserón a las 14:10. Mireia Solana mintió sobre un sisado prolongado en el caserón, pero su testimonio sobre el coche de Eulogio es válido. Joaquín Vela y Lucía Solera tienen coartadas verificables. Don Eulogio Pacheco es culpable del asesinato de Andrés Solera.',

  wrongExplanation: 'El verdadero culpable era Don Eulogio Pacheco, médico jubilado y amigo de Andrés desde hacía cincuenta años. Eulogio había firmado un certificado de defunción falso en 1986 — caso Carmen Lobera, calle Goya 14 — en el que Andrés figuraba como testigo. El certificado vinculaba directamente al padre del inspector. Andrés iba a contárselo todo a su hija Lucía, que estaba a punto de vender el caserón y exponer el archivo. Eulogio le llamó tres veces el día antes y, al no convencerle, fue al caserón después de comer y le golpeó con la piedra del fuego. Las pruebas clave eran el listado de llamadas (mintió sobre cuántas veces llamó), el testimonio de Mireia Solana (vio su coche aparcado frente al caserón a las 14:10), y las hojas sueltas que Lucía sacó del bolsillo de su padre, mencionando el caso del 86 con la firma de Eulogio. Mireia mintió sobre un sisado en el caserón, pero su testimonio sobre el coche es válido. Joaquín Vela y Lucía Solera tienen coartadas verificables.',

  // ═══════════════════════════════════════════════════
  // CENA EN CASA — Tras resolver el caso
  // Pivote del Acto I. Elena confronta directamente sobre el padre.
  // ═══════════════════════════════════════════════════
  cena: {
    apertura: 'Has tardado mucho en volver. Has estado en Talavera, ¿verdad? Y no me lo has querido decir.',

    repasoPool: [
      {
        id: 'c04_eulogio_amigo',
        linea: {
          default: 'Cincuenta años de amistad y le abre la cabeza con la piedra de la chimenea. ¿Cómo se sostiene eso?',
          acusoIncorrecto: 'Cincuenta años de amistad y se le escapó. Acusaste a {nombreAcusado}, ¿no?'
        },
        respuestas: [
          { id: 'a', texto: 'Cuando el secreto es del 86, los años no protegen. Al contrario.',
            efecto: { sinceridad: +10, lucidez: -3 },
            replica: 'Esa frase la voy a recordar.' },
          { id: 'b', texto: 'No lo sostengo. Por eso me cuesta dormir desde anteayer.',
            efecto: { sinceridad: +12, lucidez: -6 },
            replica: 'Lo notaba. Me alegra que lo digas.' },
          { id: 'c', texto: 'Hay amistades que sirven hasta que dejan de servir.',
            efecto: { sinceridad: -4, integridad: -3 },
            replica: 'Qué cínico te has vuelto desde marzo.' }
        ]
      },

      {
        id: 'c04_mireia_facturas',
        linea: {
          default: 'La asistenta. Robó productos al señor durante años. Pero su declaración sobre el coche del médico fue la clave, ¿no?'
        },
        respuestas: [
          { id: 'a', texto: 'Sí. La gente que miente por una cosa puede decir la verdad sobre otra. No siempre es todo o nada.',
            efecto: { sinceridad: +8, integridad: +4, lucidez: +3 },
            replica: 'Eso lo aprendiste tarde, pero lo aprendiste.' },
          { id: 'b', texto: 'Casi la descarto entera. Y por poco no veo el coche aparcado.',
            efecto: { sinceridad: +10, lucidez: -3 },
            replica: 'Por suerte lo viste a tiempo.' },
          { id: 'c', texto: 'Robar al jefe durante años, eso no se le perdona.',
            efecto: { integridad: -4 },
            replica: 'Tú juzgas todo con la misma vara, ¿eh?' }
        ]
      },

      {
        id: 'c04_coartada_lucia',
        linea: {
          default: 'La hija llegó tarde. Sacó papeles del bolsillo de su padre antes de que llegara la Guardia Civil. ¿La trataste con cuidado?'
        },
        respuestas: [
          { id: 'a', texto: 'Sí. Lo había perdido todo en una mañana. Le dejé leer la carta antes que yo.',
            efecto: { sinceridad: +8, integridad: +6 },
            replica: 'Eso me reconcilia con tu trabajo, ¿sabes?' },
          { id: 'b', texto: 'Le hice las preguntas que tenía que hacerle. Ella las contestó como una santa.',
            efecto: { integridad: +3 },
            replica: 'Mira que eras tú parco antes. Has cambiado.' },
          { id: 'c', texto: 'Le presioné para que confesara lo de las hojas. Era importante.',
            efecto: { sinceridad: +8, integridad: -5 },
            replica: 'Ya. ¿Y necesitabas presionarla a ella?' }
        ]
      },

      {
        id: 'c04_forense_octaviano',
        linea: {
          default: 'Y el forense. Octaviano Vidal. Te reconoció al entrar a la sala. ¿Te incomodó?'
        },
        respuestas: [
          { id: 'a', texto: 'Mucho. Sabe algo, evitaba mirarme. Voy a tener que ir a verle, sin caso de por medio.',
            efecto: { sinceridad: +12, lucidez: -4, flags: ['recuerda_padre'] },
            replica: 'Cuando vayas, dime cuándo y a qué hora. No quiero estar despierta sin saber por qué tardas.' },
          { id: 'b', texto: 'No. La gente vieja del oficio te reconoce, eso pasa.',
            efecto: { sinceridad: -8, flags: ['bloqueo_padre'] },
            replica: 'Vale.' },
          { id: 'c', texto: 'Me llamó "el chico de los Mora". Me llevaba años sin oírlo.',
            efecto: { sinceridad: +10, lucidez: -5, flags: ['recuerda_padre'] },
            replica: '¿Y desde entonces?' }
        ]
      },

      {
        id: 'c04_sentir',
        linea: {
          default: '¿Y cómo estás? Porque te he visto entrar como nunca te había visto.',
          acusoIncorrecto: '¿Y cómo estás? Aunque no lo cerraras del todo.'
        },
        respuestas: [
          { id: 'a', texto: 'Mal. He vuelto al pueblo donde fui niño y tres viejos sabían más de mi vida que yo.',
            efecto: { sinceridad: +15, lucidez: -8, flags: ['recuerda_padre'] },
            replica: 'Ven aquí. Te ayudo a contártelo a ti mismo, si quieres.' },
          { id: 'b', texto: 'Cansado. Solo cansado.',
            efecto: { sinceridad: +5, lucidez: -5 },
            replica: 'Come. Y luego ven. No me sirve "cansado" esta noche.' },
          { id: 'c', texto: 'Bien. Justicia hecha. Eulogio confesó al final.',
            efecto: { sinceridad: -10, integridad: +2 },
            replica: 'No te creo. No con esa cara.' }
        ]
      }
    ],

    // GANCHO DE MEMORIA — pivote del Acto I.
    // Por primera vez, Elena confronta directamente sobre el padre del
    // detective. El jugador puede mentir, prometer hablar mañana, o vaciarlo
    // todo de una.
    ganchoMemoria: {
      id: 'c04_memoria_padre',
      linea: 'Esta noche es distinta. Talavera. Calle Goya 14. Mora. La carta inacabada del señor Solera estaba dirigida a su hija pero hablaba de ti, ¿no? ¿Vas a contarme de una vez quién era tu padre?',
      respuestas: [
        { id: 'a', texto: '...esta noche tampoco.',
          efecto: { sinceridad: -15, integridad: -8, flags: ['miente_sobre_padre', 'rechaza_calle_goya'] },
          replica: 'Vale. Vale. Buenas noches.' },
        { id: 'b', texto: 'Sí. Pero no esta noche. Mañana, cuando haya dormido. Te lo prometo.',
          efecto: { sinceridad: +8, integridad: -2, flags: ['promete_contar_todo', 'recuerda_padre'] },
          replica: 'Mañana, entonces. Voy a aguantarte la palabra. Lo digo en serio.' },
        { id: 'c', texto: 'Mi padre mató a mi madre en 1986. Eulogio firmó el certificado falso. Andrés era testigo. Por eso lo mató Eulogio cuarenta años después. Por mí.',
          efecto: { sinceridad: +20, integridad: +5, lucidez: -8, flags: ['recuerda_padre', 'recuerda_calle_goya'] },
          replica: '[silencio largo] Ven aquí. Ven aquí. No digas nada más. Solo ven aquí.' }
      ]
    }
  }
};

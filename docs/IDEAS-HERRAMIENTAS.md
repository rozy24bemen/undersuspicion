# Ideas de Herramientas y Mecánicas

Brainstorm de herramientas y mecánicas para añadir profundidad al juego más allá del
sistema de interrogatorio. Organizadas por categoría con notas sobre por qué funcionan
(o no) como mecánicas de juego.

---

## Herramientas de análisis físico

### Estación de huellas dactilares
Encuentras una huella (con UV u otro método). Luego pides voluntariamente la huella de
cada sospechoso para comparar. La comparación podría ser un mini-puzzle visual.
Mecánicamente satisfactorio porque *tú haces el proceso*, no solo ves el resultado.

### Reactivos químicos
Testea evidencias para detectar sustancias: somníferos en una copa, acelerante en ropa,
sangre en un objeto. El jugador elige qué reactivo aplicar a qué evidencia — decisiones
activas, no solo clicks.

### Lupa / análisis de detalle
Sobre cualquier evidencia abre una vista ampliada con detalles ocultos: un número escrito
a lápiz, una fecha casi borrada, una marca de fabricante en un objeto. Simple pero efectivo.

### Luz ultravioleta
Se superpone visualmente sobre las tarjetas de evidencia. Revela huellas, manchas o
marcas invisibles a simple vista. Conecta con la estación de huellas.

---

## Herramientas de comunicación

### Teléfono de sobremesa
Marcas un número encontrado en las evidencias. Más allá de "qué pasa si llamo a X",
lo más interesante es el **registro de llamadas**: ves quién llamó a quién y cuándo,
lo que puede contradecir una coartada sin que el sospechoso sepa que lo sabes.

### Ordenador / portátil
Accede a emails, calendario, historial de navegación. Permites descubrir cosas que los
sospechosos nunca revelarían voluntariamente, haciendo las preguntas posteriores
mucho más cargadas de significado.

### Contestador automático
Mensajes de voz que revelan relaciones entre personajes. Pasivo pero útil para construir
el cuadro completo sin depender del interrogatorio.

---

## Herramientas de deducción visual

### Tablero de conexiones (corcho + hilos)
El jugador arrastra evidencias, fotos de sospechosos y notas al tablero y traza
conexiones manualmente. No es solo decorativo si **desbloquea cosas**: conectar X con Y
revela una nueva pregunta disponible, o completar la cadena A→B→C desbloquea la acusación.
Convierte la deducción en acción concreta.

### Línea temporal
Los sospechosos dan coartadas con horas. El jugador las coloca en una línea de tiempo.
El sistema detecta automáticamente cuando dos coartadas son físicamente imposibles
(persona A dice que estaba con B a las 23h, pero B dice que estaba solo desde las 22h).
Saca las contradicciones del sistema de "pregunta exacta + evidencia exacta" y las hace
emerger del razonamiento espaciotemporal.

---

## Mecánicas de acceso y desbloqueo

### Caja fuerte / objetos cerrados
La combinación se deduce de pistas dispersas entre las evidencias. No es un puzzle de
habilidad sino de información: primero tienes que *encontrar* los fragmentos.
Crea un objetivo secundario muy satisfactorio.

### Sistema de orden de investigación
Ciertas herramientas o preguntas solo se desbloquean cuando tienes suficiente información.
Ejemplo: no puedes pedir el registro de llamadas hasta haber encontrado el número en otra
evidencia. Crea progresión natural y evita que el jugador lo resuelva todo en el primer minuto.

### Autorización / orden judicial
Para acceder al ordenador de un sospechoso necesitas una "orden" que se obtiene acumulando
sospecha suficiente. Crea tensión: ¿investigas más antes de pedir acceso, o actúas con lo
que tienes y arriesgas no poder acceder?

---

## Mecánicas que añaden dimensión humana

### Análisis de grafología
Comparas escritura de notas anónimas con muestras de escritura de los sospechosos.
Mini-puzzle visual de comparación.

### Lenguaje corporal
En lugar de solo el medidor de presión, algunas preguntas revelan gestos específicos
("evitó el contacto visual", "tocó su cuello") que son pistas de comportamiento, no de
hechos. Añade ambigüedad — el jugador interpreta, no solo acumula datos.

### Testigos secundarios
Personas que no son sospechosos pero pueden ser contactadas (por teléfono o en persona).
Corroboran o desmienten coartadas. Añade profundidad sin complicar la estructura principal.

---

## Descartadas (por ahora)

| Idea | Motivo |
|------|--------|
| Minijuegos de habilidad (gestos precisos, etc.) | Rompen el ritmo y frustran sin añadir valor narrativo |
| Inventario físico del detective | Complejidad sin recompensa en este género |
| Presión temporal | Va en contra de la meditación que caracteriza el género |

---

## Priorización (post-decisión narrativa)

> **Esto era un brainstorm.** El reparto real de herramientas por caso del Modo
> Historia se decidió en `HISTORIA-MODO-HISTORIA.md` y el plan de implementación
> técnico vive en `TOOLS-ARCHITECTURE.md` sección 9. Esta tabla refleja **lo que
> efectivamente se va a construir**, no la priorización original abstracta.

| Orden | Herramienta | Caso de introducción | Notas |
|-------|-------------|----------------------|-------|
| 1 | **Teléfono + caja fuerte (combinados)** | Caso 3 (Acto I) | El número del teléfono es el "código" de la caja fuerte: dígitos fragmentados entre pruebas. Una sola UI cubre las dos ideas con menos código. |
| 2 | **Luz ultravioleta** | Caso 5 (Acto II) | Sobre material físico viejo (fotos, cartas) para conectar con la metaarco del pasado. |
| 3 | (Pendiente) | Acto II (5-7) | Posible: lupa o reactivos químicos según necesidades del Acto II tras retrospectiva. |

### Herramientas descartadas (por ahora)

| Herramienta | Motivo |
|-------------|--------|
| Tablero de conexiones | Demasiado peso de UI para el alcance del proyecto. La deducción se canaliza ya por el sistema de contradicciones + pantalla de resolución. |
| Línea temporal | Ídem. Las coartadas se gestionan con contradicciones cruzadas (palanca interna del interrogatorio, no UI nueva). |
| Análisis de huellas / grafología | Mini-puzzles que rompen el ritmo. La luz UV cubre el descubrimiento físico oculto con menos fricción. |

Estas pueden reconsiderarse en un Acto II o III si la retrospectiva muestra que
hace falta más profundidad, pero **no son base del plan actual**.

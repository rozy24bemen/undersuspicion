# Under Suspicion — Inventario Visual y Guía de Generación

> Documento maestro de **todos los elementos visuales necesarios** para los 6 sprints de
> esta fase + roadmap de la fase 2 (casos 5-8). Incluye la guía de prompts canónica
> para enviar a una IA generadora de imágenes con resultados consistentes.

> **Style canon**: [`assets/style-bible.json`](../assets/style-bible.json) (`undersuspi-noir-v1`).
> Cualquier asset generado debe heredar `style_id`, paleta, framing y reglas de
> consistencia. **La pose `neutral` aprobada de cada personaje es la referencia
> maestra**: las poses `talking`/`nervous` deben adjuntar la `neutral` al prompt.

---

## Índice

1. [Distribución por Sprint](#0--distribución-sugerida-por-sprint)
2. [Personajes](#1--personajes)
3. [Escenarios](#2--escenarios-backgrounds)
4. [Pruebas / Evidencias](#3--pruebas--evidencias)
5. [Sugerencias de diseño extra](#4--sugerencias-de-diseño-assets-que-se-os-escapan)
6. [Requisitos técnicos](#5--requisitos-técnicos)
7. [Roadmap visual Fase 2](#6--roadmap-visual-fase-2-casos-5-8--fuera-de-los-6-sprints)
8. [Guía de prompts para IA generadora de imágenes](#7--guía-de-prompts-para-ia-generadora-de-imágenes)

---

## 0 · Distribución sugerida por Sprint

| Sprint | Foco | Cobertura visual | Estado |
|--------|------|------------------|--------|
| **S1** | Núcleo UI + Caso 1 base | Marta · Lucía · Hugo · Diego · Escenario interrogatorio · 8 pruebas Caso 1 | ✅ Producido |
| **S2** | Cena meta + tutorial | Elena (neutral) · Salón · Cocina · UI tutorial | 🟡 Parcial (falta Elena talking/nervous, falta cena con poses) |
| **S3 (actual)** | Tutorial guiado · Cierre Caso 1 polish | Iconografía tutorial · estados de presión · libreta polish | 🟡 En curso |
| **S4** | **Caso 2 — "Sin sangre"** + tools registry | 3 sospechosos + víctima + escenario Lavapiés + 8 pruebas | ⬜ Pendiente |
| **S5** | **Caso 3 — "El número equivocado"** + Tool: teléfono | 4 sospechosos + víctima + portal Chueca + 9 pruebas + UI teléfono | ⬜ Pendiente |
| **S6** | **Caso 4 — "La piedra rota"** + cierre Acto I | 4 sospechosos + víctima + caserón Talavera + 8 pruebas + caja fuerte | ⬜ Pendiente |

> Acto II y III (Casos 5-8) quedan fuera de esta tanda de 6 sprints; ver
> [Roadmap Fase 2](#6--roadmap-visual-fase-2-casos-5-8--fuera-de-los-6-sprints).

---

## 1 · Personajes

### 1.1 — Personajes recurrentes (presentes en TODOS o varios sprints)

| Sprint | Personaje | Edad | Perfil psicológico | Vestimenta noir moderna | Notas de pose |
|--------|-----------|------|--------------------|-------------------------|---------------|
| S1+ | **Detective protagonista (Roberto Mora — sin nombre hasta C8)** | ~45 | Inspector competente; vida personal deshilachada; bebe, duerme mal | Gabardina gris oscura, traje gris con corbata negra fina, camisa blanca arrugada, reloj de cuerda | **No se ve la cara directamente** los 7 primeros casos: silueta, manos, primer plano del bloc. Su retrato sólo aparece en C8 como "cuarta tarjeta" |
| S2+ | **Elena Solana** | 38 | Profesora literatura; cariñosa→preocupada→confrontacional según eje | Jerséis cuello vuelto granate/mostaza, falda lápiz, pendientes pequeños perla. **Nunca de noir explícito**: ella es la calidez del hogar | 3 poses + variante 4ª (silenciosa/desaparecida) para C8. Iluminación cálida del comedor |
| S2+ | **Comisario Beltrán** | 62 | Paternal-cínico; sin agenda oculta | Traje marrón cruzado, chaleco, corbata granate, gafas montura metálica, anillo de boda visible | Aparece en briefing inicial + cierre. Suficiente con neutral + pensativo |
| S4-S5-S6 | **Forense Don Octaviano Vidal** | 75 | Veterano forense; en C4 reconoce al detective y empieza a evitarlo | Bata blanca sobre traje gris perla, pajarita oscura, gafas leer, manos manchadas de tinta | Pose neutral en morgue (luz fría azulada); pose **incómoda** (mirada esquiva) reservada para C5+ |

> **Producción crítica**: Elena necesita las 3 poses ya (sólo hay `Elena_neutral.png`).
> Detective: producir set de manos y silueta abstracta (no rostro).

### 1.2 — Caso 1 "El Último Brindis" (S1) — ✅ ya producido

| Personaje | Edad | Rol | Perfil psicológico | Vestimenta | Pose Neutral | Pose Pensativo | Pose Nervioso |
|-----------|------|-----|---------------------|------------|--------------|-----------------|----------------|
| **Marta Requena** | 45 | Socia (40%) — INOCENTE | Fría, calculadora, cooperativa, poco pesar | Blusa de seda blanca, americana negra entallada, falda de tubo gris oscuro, collar de perlas pequeñas. Recogido tirante | Brazos cruzados, mirada al frente | Mano en barbilla, ceja levemente arqueada | Mirada al lateral, dedos juntos sobre el regazo |
| **Lucía Sandoval/Varela** | 29-48 | Amante reciente / ex-esposa — INOCENTE | Emocional, defensiva, oculta algo personal | Vestido vino tinto cuello pico, abrigo camel sobre hombros, pendientes largos | Postura erguida, labios apretados | Mirada baja, mano al cuello | Cubre boca con mano, ojos brillantes |
| **Hugo Delmar** | 38 | Chef — **CULPABLE** | Suda, evasivo, desesperado | Chaquetilla blanca de cocinero (manga remangada), pantalón pied de poule, delantal manchado, gota de sudor en la sien | Frente plana, postura rígida | Frunce ceño, aprieta mandíbula | Suda visible, evita mirada, puños cerrados |

> **Asset existente** en `assets/img/suspects/` — versiones `*neutral`, `*pensativa/o`,
> `*nerviosa/o` con variantes `withoutbg` (recorte) y `cutout/background`. Hugo tiene
> la versión más completa con fondo integrado.

### 1.3 — Caso 2 "Sin sangre" (S4) — ⬜ por producir

| Personaje | Edad | Rol | Perfil | Vestimenta noir | Notas de poses |
|-----------|------|-----|--------|-----------------|-----------------|
| **Salvador Cienfuegos** (víctima) | 67 | Jubilado de Lavapiés | — | Pijama de invierno azul descolorido, bata granate raída | Sólo retrato tipo carnet/foto archivo |
| **Lourdes Cienfuegos** | 61 | Hermana — INOCENTE | Reservada, vergüenza por affaire | Vestido camisero lana gris, rebeca abotonada, medias gruesas, pelo cortado-cardado, broche oscuro | Neutral defensiva · Pensativo culpable · Nervioso humillado |
| **Iván Cienfuegos** | 38 | Sobrino — INOCENTE | Atribulado, deudas | Cazadora vaquera, sudadera oscura bajo, vaqueros gastados, deportivas baratas, mochila al hombro | Postura encorvada, ojos huidizos en las 3 |
| **Adelina Roca** | 54 | Vecina — **CULPABLE** | Maternal en apariencia, despechada | Bata floreada sobre vestido casero, mandil con bolsillos, zapatillas de andar por casa, pelo recogido moño bajo | **Su nervioso es el más sutil**: sigue pareciendo amable. Sólo el ojo se enfría |

> Posibles candidatos para los 3 retratos ya generados (`Patricia-Costal`,
> `Ramon-Villalba`, `Sofia-Marques`): comprobar si encajan; si no, reasignar a otros casos.

### 1.4 — Caso 3 "El número equivocado" (S5) — ⬜ por producir

| Personaje | Edad | Rol | Perfil | Vestimenta noir |
|-----------|------|-----|--------|-----------------|
| **Carla Vinyets** (víctima) | 31 | Ingeniera SW (TecBaria) | — | Camisa blanca, americana negra entallada, vaqueros, zapatillas blancas, gafas de pasta. Bolso bandolera de cuero |
| **Esteban Vidal** | 45 | Jefe directo — INOCENTE | Profesional, doble agenda | Traje gris marengo, corbata burdeos, gemelos, pin solapa. Confianza fingida en neutral, calculador en pensativo |
| **Jorge "Jordi" Sallén** | 29 | Compañero — **CULPABLE** | Acosador, obsesivo | Camisa cuadros azul abierta sobre camiseta lisa, vaqueros, gafas redondas, pelo despeinado. Sonrisa nerviosa-amable en neutral; nervioso = explosivo |
| **Olalla Bermejo** | 35 | Amiga íntima — INOCENTE | Dolida, leal | Jersey grueso lana cruda, pantalón paño negro, abrigo paño granate, bufanda larga. Tres poses con tonos de duelo |
| **Bernabé Faz** | 60 | Portero — INOCENTE | Vergüenza profesional | Uniforme azul marino, gorra, llaves al cinturón, bigote canoso. Cuerpo de pie rígido, manos en bolsillos en nervioso |

### 1.5 — Caso 4 "La piedra rota" (S6) — ⬜ por producir

| Personaje | Edad | Rol | Perfil | Vestimenta noir |
|-----------|------|-----|--------|-----------------|
| **Andrés Solera** (víctima) | 72 | Panadero jubilado, Talavera de Vélez | — | Camisa blanca cuello duro, chaleco lana, pantalón paño marrón, alpargatas |
| **Joaquín Vela** | 58 | Sobrino — INOCENTE | Rural, ligeramente intrusivo | Cazadora de cuero gastada, polo oscuro, vaqueros, botas camperas, gorra en mano |
| **Mireia Solana** | 45 | Asistenta — INOCENTE | Discreta, sisa | Bata azul marino con bordado pequeño, pantalón negro, zueco blanco, pelo trenzado. Coincidencia apellido ⇒ marcar postura ambigua en neutral |
| **Don Eulogio Pacheco** | 78 | Médico jubilado — **CULPABLE** | Patriarcal, frío | Traje 3 piezas oscuro, corbata negra, bastón con empuñadura plata, anillo sello, abrigo paño largo. Pose nerviosa **NO se nota**: máscara perfecta |
| **Lucía Solera** | 40 | Hija — INOCENTE | Intuitiva, dolida | Vestido lana negro hasta rodilla, abrigo gris, pendientes pequeños, maquillaje sobrio |

---

## 2 · Escenarios (Backgrounds)

| Sprint | Escenario | Atmósfera/Iluminación | Elementos interactivos clave | Estado |
|--------|-----------|------------------------|------------------------------|--------|
| **S1** | **Sala de interrogatorio** (genérica) | Luz cenital cálida sobre la mesa, resto en penumbra. Persianas venecianas que filtran luz lateral | Mesa de interrogatorio, dos sillas, espejo unidireccional, lámpara de techo bajo | ✅ `Escenario_interrogatorio1/2.png` + `interrogation-room.svg` |
| **S2** | **Despacho de Diego Varela** (Caso 1 — escena del crimen) | Cálida pero opresiva: vinos en estantería, lámpara verde de despacho, cortina granate | Escritorio caoba, **calendario marcado en rojo**, copa de vino tinto, botellero, libros en pared, foto enmarcada | ✅ `Escenario_Salon.png` (validar si coincide) |
| **S2** | **Cocina de "La Estrella"** | Fluorescente blanco, acero inoxidable, brillo metálico, vapor en cazuelas | Cazuelas, encimera, frasco de raticida en cubo basura, copa de vino servida sobre bandeja | ✅ `Escenario_cocina.png` |
| **S2** | **Comedor del detective (cena con Elena)** | Lámpara baja amarilla sobre mesa, resto del piso en sombra azulada. Cálido pero solitario | Mesa con dos copas y dos platos, vitrina con fotos antiguas, ventana con persiana bajada | ⬜ Por producir |
| **S4** | **Piso planta baja Lavapiés (Caso 2)** | Húmedo, persianas bajadas, luz amarillenta de bombilla pequeña | Bañera con cuerpo (silueta sugerida, no explícita), almohada bien colocada en cama, calendario marcado, caja con fotos antiguas | ⬜ |
| **S5** | **Portal calle Chueca (Caso 3)** | Lluvia ligera, neón rosa de cartelería rebotando en charcos, luz sodio amarillenta | Contenedor con cuchillo abandonado, cámara CCTV visible, buzones, escalera | ⬜ |
| **S5** | **Despacho TecBaria (Carla)** | Oficina open-space en sombra; sólo brillo monitores azules | Escritorio Carla con post-it amarillo "22", recibo café, monitor encendido, foto enmarcada con padre Guardia Civil (en despacho Vidal) | ⬜ |
| **S6** | **Caserón siglo XIX, Talavera de Vélez (Caso 4)** | Cálido-otoñal, chimenea encendida, polvo flotando en haces de luz lateral por ventanal | Despacho biblioteca, escritorio roble, **piedra del fuego rota con sangre**, agenda abierta, **caja fuerte de pared cerrada** (combinación 8614), carta a medio escribir | ⬜ |

> **Plantilla**: aspect ratio 16:9, framing `scene_establishing` del style-bible. Sin
> personajes en el escenario base — los retratos se sobreponen vía CSS variant `cutout`.

---

## 3 · Pruebas / Evidencias

> Spec por prueba: aspect ratio 1:1 (objetos físicos) o 4:5 (documentos), fondo papel
> estraza o fieltro oscuro de mesa de evidencias.

### 3.1 — Caso 1 (S1) — ✅ ya en datos, falta arte real (placeholders emoji actuales)

| ID | Título | Tipo | Icono actual | Por qué importa |
|----|--------|------|-------|------------------|
| `autopsia` | Informe de Autopsia | Documento | 📋 | Confirma envenenamiento por rodenticida en bebida |
| `finanzas` | Registros Financieros | Documento | 💰 | Desfalco 47.000€ por Hugo |
| `camara` | Cámara de Seguridad | Foto CCTV | 📸 | **Contradicción c1**: Hugo en pasillo cuando dijo estar en cocina |
| `carta` | Carta Manuscrita | Documento | ✉️ | **Contradicción c2**: Hugo conocía las cuentas |
| `copa` | Copa de Vino Analizada | Objeto | 🍷 | Trazas rodenticida sólo en copa Diego |
| `telefono` | Registro Telefónico | Documento | 📞 | Coartada Marta confirmada |
| `camarero` | Declaración del Camarero | Testimonio | 👤 | **Contradicción c3**: Hugo sirvió personalmente |
| `hotel` | CCTV del Hotel Ritz | Vídeo | 🎥 | Lucía 10 min ausente (red herring) |

> **Producción real (no emoji)**: 8 ilustraciones a 1:1/4:5 según tipo. Plus:
> thumbnail vintage para mesa + scan/foto de detalle para modal.

### 3.2 — Caso 2 (S4) — ⬜ por producir

| Prueba | Tipo | Relevancia |
|--------|------|-------------|
| Informe forense (golpe post-mortem, fibras textiles en mucosa) | Documento | Mecánica del crimen |
| Almohada con cabello canoso en posición inconsistente | Objeto | Arma real |
| CCTV del portal (Adelina entra 18:00, sale 19:30) | Vídeo | Coloca a Adelina en escena |
| Borrador de testamento sin firmar (legado 80.000€ a Adelina) | Documento | **Móvil despecho** |
| Recibos del banco de Lourdes (red herring affaire) | Documento | Aparenta cómplice — `clarification` |
| Movimientos de Salvador (200€/mes desaparecidos) | Documento | Iván sisaba — `clarification` |
| Caja con fotos antiguas (relación 30 años) | Objeto | Vínculo oculto Adelina |
| **Calendario de pared día rojo** | Objeto | **Sembrado meta-arco — réplica del C1** |

### 3.3 — Caso 3 (S5) — ⬜ por producir

Cuchillo de cocina · CCTV portal · Móvil de Carla con mensajes borrados · Carpeta
RRHH (denuncia) · Recibo café · Cuaderno con número incompleto (`6XX-X3-XX-9X`) ·
Pegatina amarilla "22" en monitor · Mail con fragmento numérico · Foto familiar
Esteban Vidal (padre Guardia Civil — sembrado padre detective).

### 3.4 — Caso 4 (S6) — ⬜ por producir

Piedra del fuego rota (arma) · Forense Octaviano Vidal · Agenda de Andrés (anotación
"Eulogio — decisión") · Carta a medio escribir ("Querida Lucía...") · Listado
llamadas (3 llamadas Eulogio→Andrés) · **Caja fuerte de pared cerrada** (combinación
8614 abre en C5) · Coartadas verificables · **Hojas sueltas con "caso Mora del 86" +
"calle Goya 14"** (desbloqueables tras contradicción cruzada).

---

## 4 · Sugerencias de diseño (assets que se os escapan)

### 4.1 — Iconografía y estados

| Asset | Por qué es necesario | Sprint sugerido |
|-------|----------------------|-----------------|
| **Indicador de presión** (icónico) | Ahora es sólo barra %; añadir icono de "tensión" (pulso, vena, gota sudor) que cambia según umbral 0/70/100% | S3 (polish) |
| **Estado del sospechoso en thumb** (badge) | Pequeño icono en la esquina del retrato: 🔒 (no interrogado), 💬 (preguntado), ⚠️ (contradicción detectada), 🛑 (presión máx) | S3 |
| **"Sello CONFIDENCIAL/CASE CLOSED"** | Para portada del caso resuelto y el dossier exportable. Tipo *rubber stamp* tinta roja | S3 |
| **Iconos de pestañas Q-tabs** (VÍNCULO/COARTADA/PRUEBA) | Hoy son sólo texto. Añadir glifo: 🔗 / ⏰ / 🔍 | S3 |

### 4.2 — Libreta (Notebook)

| Asset | Detalle |
|-------|---------|
| **Página de libreta papel manila** (textura) | Background del panel notebook con líneas finas y manchas de café. Reemplazar fondo plano actual |
| **Tipos de entrada con iconografía propia** | 📌 Briefing · ❓ Pregunta · 🔍 Prueba · ⚠️ Contradicción · 🍷 Cena · cada uno con micro-icono pegado al margen |
| **Línea separadora "DÍA / FECHA"** | Tipográfica con sello `2026-03-14` |
| **Paperclips, post-its, anotaciones a mano** | Decoración no funcional pero brutal para inmersión |

### 4.3 — Transiciones y feedback

| Asset | Uso |
|-------|------|
| **Animación "CONTRADICCIÓN DETECTADA"** | Hoy hay overlay estático. Añadir flash blanco breve + zoom shake + sello rojo *cae* en pantalla. Audio sugerido: golpe seco + papel arrugándose |
| **Transición CASO → CENA** | Fade a negro con sonido de llaves, puerta, *"ya estoy en casa"*. Aparece comedor con Elena |
| **Animación "TUTORIAL COMPLETADO"** | Sello dorado "CASO 0 — TUTORIAL · APROBADO" con grano + chispa. Marca el rite of passage |
| **Pantalla de Resolución (acertar/fallar)** | Variantes visuales: PORTADA DE PERIÓDICO si aciertas (titular con foto del culpable), MÁQUINA DE ESCRIBIR con texto rojo si fallas |
| **Final bueno C8** | Plano fijo cinematográfico: dos copas en mesa, una se *evapora* literalmente. Frame estático ~10s |
| **Final malo C8** | Silueta colgada (sólo silueta — guideline ética del style-bible), grabadora encendida en primer plano. Sonido en bucle |

### 4.4 — UI Tutorial

| Asset | Detalle |
|-------|---------|
| **Spotlight con borde dorado pulsante** | ✅ ya implementado vía CSS |
| **Tooltip "estilo dossier" con corner cuts** | Mejora: cuatro esquinitas tipo `menu__logo-corner` para aspecto carpeta clasificada |
| **Icono "Paso N de M" con progreso visual** | Pequeña fila de puntos llenos/vacíos en el header del tooltip |
| **Animación de mano apuntando** ("tap me") | Pequeña mano índice señalando el spotlight para móvil |

### 4.5 — Otros que quedan en el aire

- **Mapa de Madrid** (asset interactivo opcional): Centro · Lavapiés · Chueca ·
  Salamanca · Aravaca · Talavera. Para entrada de cada caso, *zoom* sobre el barrio.
- **Pantalla "FICHA DE SOSPECHOSO"** (dossier impreso): se podría abrir tipo
  expediente con foto + nombre + edad + nivel sospecha + presión.
- **Reloj de presión / Cronómetro de noche**: cada caso ocurre en una jornada — un
  sutil reloj en esquina superior puede marcar el avance del día.
- **Skin móvil del cuaderno**: hoja apaisada hoy, considerar plegado tipo dossier
  para vertical.
- **Avatar del detective hablando** (sólo manos/silueta): para diálogos donde "él"
  responde sin enseñar la cara.

---

## 5 · Requisitos técnicos

### 5.1 — Formatos y tamaños

| Asset | Formato | Resolución mínima | Notas |
|-------|---------|--------------------|-------|
| Retratos sospechosos | PNG (alpha) + WebP fallback | 800×1067 (3:4) | Doble export: `*-cutout.png` (recorte) + `*-background.png` (fondo integrado). Patrón ya en uso con Hugo |
| Pruebas físicas | PNG / WebP | 600×600 (1:1) | Fondo transparente o papel estraza |
| Documentos | PNG / WebP | 800×1000 (4:5) | Texto NO incrustado en imagen (el texto se renderiza vía DOM) |
| Escenarios | JPG/WebP | 1920×1080 (16:9) | JPG suficiente; sin alpha. Variantes responsive: `@1x`, `@2x` |
| Iconos UI | SVG preferido, fallback PNG 64×64 | 64×64 / 128×128 | SVG vectorial para escalado libre |
| Animaciones cortas | WebM (vp9) + GIF fallback | <3s, <500KB | O bien CSS keyframes si es factible |

### 5.2 — Naming convention

```
assets/img/suspects/{nombre}{pose}-{variant}.{ext}
  ej: hugopensativo-removebg.png · martaneutral-withoutbg.png
assets/img/scenes/Escenario_{nombre}.png
assets/img/evidence/{caso}/{evidence-id}.{ext}
  ej: assets/img/evidence/caso01/camara.png
assets/img/recurring/elena_{pose}.png
assets/img/ui/{nombre}.svg
```

> **Importante**: el código de `js/GameEngine.js` y `caso01.js` referencia rutas
> explícitas por sospechoso. Cualquier renombrado obliga a actualizar la sección
> `portraits` del JSON del caso.

### 5.3 — Performance

- **Total budget página inicial**: ≤ 2 MB (excluye assets cargados bajo demanda).
- **Lazy-load por caso**: las imágenes del Caso N sólo se descargan al entrar en él
  (`loadCase`). Hoy el código carga todo `caso01.js` upfront — para Caso 2+ habrá
  que sharded JS data.
- **Sprite sheet** para iconos UI ≤ 128px: mejor todos en un solo SVG sprite que
  múltiples requests.
- **Caching**: `Cache-Control: max-age=31536000` para assets versionados; cambio de
  versión obligado al regenerar pose neutral (regla del style-bible
  §character_consistency_rules).

### 5.4 — Accesibilidad

- **Texto en imágenes**: NUNCA. Ya está en la lista negativa del style-bible. Todo
  el copy se renderiza vía DOM/CSS.
- **Alt text obligatorio** en cada `<img>`: hoy `alt="${suspect.name}"` para
  retratos. Replicar para evidence y scenes.
- **Contraste WCAG AA** mínimo (4.5:1) para texto sobre escenarios.
- **Reduced motion**: añadir `@media (prefers-reduced-motion: reduce)` para suprimir
  animación pulso del spotlight tutorial, transiciones de pantalla y shakes.

### 5.5 — Consistencia de personajes (regla canónica)

> Del style-bible: la pose **neutral aprobada** es la referencia maestra. Toda pose
> `talking`/`nervous` DEBE adjuntar la `neutral` al prompt de generación. Si la cara
> o ropa derivan, se rehace. Personajes recurrentes (Elena, Beltrán, Octaviano Vidal,
> detective) usan la MISMA `neutral` en todos los casos donde aparezcan.

### 5.6 — Mobile / responsive

- Vista vertical bloqueada (ya hecho en S2 — `css/responsive.css`).
- Retratos deben funcionar a `--portrait-scale: 1.45` en pantallas <400px sin
  pixelar: producir mínimo a 800px de ancho.
- Escenarios necesitan crop seguro **3:4 vertical** además del 16:9 base —
  focalizar el "área de acción" en la mitad superior para que el split desk/room no
  recorte info crítica en móvil.

### 5.7 — Ética y guidelines

- **Violencia implícita, nunca explícita**: cuerpos sugeridos por silueta, sábana,
  posición. Sin sangre derramada ni heridas detalladas.
- **Suicidio (final malo C8)**: silueta o sombra, nunca método explícito ni primer
  plano.
- **Menores**: no representar bajo ninguna situación violenta o sexualizada.
- Cualquier ilustración generada por IA queda etiquetada con
  `style_id: undersuspi-noir-v1` y se logea en el campo `history` del style-bible.

---

## 6 · Roadmap visual Fase 2 (Casos 5-8 — fuera de los 6 sprints)

| Caso | Personajes nuevos | Escenario | Tool nueva | Notas |
|------|-------------------|-----------|------------|-------|
| C5 "El cajón" | Hermes Mora · Aurelia Lobera · Damián Mora · Inés Quirós · Roque Vellido | Piso Salamanca abigarrado de fotos | **Luz UV** (overlay sobre evidencias) | Foto familiar 1985 con bebé detective |
| C6 "Estudio Caracedo" | Modesto · Sara · Néstor · Pedro Pinhel · Marina · Eulogio hijo | Bufete calle Almagro + callejón Sagasta | — | Prueba PLANTADA (mecánica) |
| C7 "El sótano" | Camino Quintela · Isma · Florinda · Manuel Ródenas · Elías Mora · Vicente Solera | Chalet Aravaca + sótano con pila industrial | — | Tabla de argumentación manual (UI nueva) |
| C8 "La última cena" | Felipe Saiz · Octavio Brán · Eulogio hijo · **detective como sospechoso** | **Salón del propio detective** (re-skin del comedor) | TODAS combinadas | Doble final: cinematográfico (bueno) / silueta colgada (malo) |

---

## 7 · Guía de prompts para IA generadora de imágenes

> **Filosofía**: cada prompt = `[MASTER PROMPT canónico]` + `[bloque específico del
> tipo de asset]` + `[detalles del personaje/objeto/escena concreto]` +
> `[NEGATIVE PROMPT canónico]`. Para máxima consistencia, **adjuntar siempre** la
> imagen `neutral` aprobada del personaje cuando se pidan las poses `talking` o
> `nervous`.

### 7.1 — Master prompt (cabecera obligatoria, va en TODA imagen)

```
Illustration in Cluedo-modern editorial style, clean defined linework, warm noir
palette with blood red and mustard gold accents, cinematic side-lit chiaroscuro
lighting, timeless 80s-90s era (analog technology, neutral clothing), 50mm
equivalent lens, subtle paper grain, 2D editorial illustration with block shading
and soft transitions, sober tense slightly melancholic mood, NOT photorealistic,
NOT anime, NOT 3D, NOT children cartoon, no text in image.
```

**Versión en español** (si la IA acepta español; resultados pueden variar):

```
Ilustración estilo Cluedo moderno, trazo limpio definido, paleta noir cálida con
acentos rojo sangre y oro mostaza, iluminación cinematográfica de claroscuro con
luz lateral cálida, época atemporal años 80-90 (tecnología analógica, ropa
neutra), lente equivalente 50mm, grano sutil de papel, ilustración 2D editorial
con sombreado por bloques y transiciones suaves, tono sobrio tenso ligeramente
melancólico. NO fotorrealista, NO anime, NO 3D, NO cartoon infantil, sin texto en
la imagen.
```

### 7.2 — Negative prompt canónico (al final de todo prompt)

```
anime, manga, photorealistic, 3D render, children cartoon, deformed, text, logos,
watermark, visible frame, artist signature, oversaturated, rainbow palette,
hypersexualization, explicit gore, multiple faces, extra limbs, distorted hands.
```

### 7.3 — Prompts por tipo de asset

#### A) Retrato de SOSPECHOSO (3:4 medio cuerpo)

**Plantilla (rellenar `[…]`):**

```
[MASTER PROMPT]

Suspect portrait, 3:4 aspect ratio, half-body framing from waist up, slight
three-quarter angle, neutral dark interrogation room background slightly
out-of-focus, single warm key light from upper-left at 45 degrees, fill shadows
deep but readable.

Subject: [edad] year-old [hombre/mujer] [breve descriptor físico — pelo, complexión],
[breve descriptor psicológico en 1-2 adjetivos], wearing [vestimenta detallada
del documento de personajes].

Pose & expression: [Neutral/Talking/Nervous — copiar literal del bloque
"moods" del style-bible].

Composition: subject centered slightly off, eyes at upper third, hands [posición
de manos canónica de la pose].

Style ID: undersuspi-noir-v1.

[NEGATIVE PROMPT]
```

**Ejemplo concreto — Hugo Delmar / Nervous** (referencia retroactiva, ya producido):

```
[MASTER PROMPT]
Suspect portrait, 3:4 aspect ratio, half-body, slight three-quarter angle, neutral
dark interrogation room background slightly out-of-focus, single warm key light
from upper-left at 45 degrees.

Subject: 38 year-old man, dark short hair, average build, anxious sweating,
wearing a white chef jacket with rolled-up sleeves, houndstooth pants partially
visible, stained apron, a single visible drop of sweat on the temple.

Pose & expression: nervous — averted gaze drifting sideways, tense jaw, one hand
near the collar, slight frown, sweat barely visible.

Composition: subject slightly off-center, eyes upper third, fists clenched at
his sides.

Style ID: undersuspi-noir-v1.

[NEGATIVE PROMPT]
```

> **Para `talking`/`nervous` adjuntar la `neutral` aprobada como reference image
> cuando la herramienta lo permita** (Midjourney `--cref`, Stable Diffusion
> ControlNet/IP-Adapter, DALL-E "edit").

#### B) Retrato de VÍCTIMA (3:4, foto archivo policial)

```
[MASTER PROMPT]

Police archive portrait, 3:4 aspect ratio, identification-card style, frontal
shot, plain muted backdrop (desaturated grey-blue or aged sepia), even cool
lighting like a forensic record photo.

Subject: [edad] year-old [hombre/mujer], [descriptor físico breve], [oficio o
detalle relevante de su vida], wearing [vestimenta del documento].

Mood: lifeless documentary tone, no expression, eyes open and direct.

Composition: head and shoulders centered, eyes upper third, slight rim light
from behind for separation.

Style ID: undersuspi-noir-v1.

[NEGATIVE PROMPT]
```

#### C) Personaje RECURRENTE (Elena, Beltrán, Octaviano Vidal)

```
[MASTER PROMPT]

Recurring character portrait, 3:4 aspect ratio, half-body, three-quarter angle,
background contextual: [Elena: warm dim dining room with low yellow lamp / Beltrán:
police precinct with file cabinets / Octaviano Vidal: morgue with cold blue
fluorescent light].

Subject: [edad] year-old [hombre/mujer], [descripción canónica del personaje
del documento, idéntica entre casos].

Pose & expression: [Neutral / Talking / Concerned / Confrontational según
necesidad narrativa].

Composition: characteristic posture of the role.

CRITICAL: this character recurs across multiple cases — must remain visually
identical to previous approved portrait (attach reference image).

Style ID: undersuspi-noir-v1.

[NEGATIVE PROMPT]
```

#### D) ESCENARIO (16:9, sin personajes)

```
[MASTER PROMPT]

Establishing shot of a crime scene location, 16:9 aspect ratio, wide cinematic
framing, NO PEOPLE in frame, fully empty stage where characters will be
composited later.

Location: [descripción concreta del documento — tipo de habitación, época,
detalles específicos].

Lighting: [descripción del bloque "Atmósfera/Iluminación" del documento — ej:
"single warm yellow desk lamp casting long shadows, persian blinds filtering
late afternoon side light, deep ambient shadows in the rest of the room"].

Atmosphere: [adjetivos: tense / cozy-but-claustrophobic / damp / clinical / etc].

Interactive elements visible (place naturally, do not centerpiece): [lista
literal de elementos clave del documento — ej: "wine glass on mahogany desk,
red-marked wall calendar, bottle rack, framed photo, leather chair pushed
back"].

Camera: 50mm equivalent, slight wide angle, eye-level, mid-distance, capturing
the room as a whole.

Composition rule: leave the upper-half of the frame visually clean (CSS overlay
will place character portraits there); place all detail in the lower-mid frame.

Style ID: undersuspi-noir-v1.

[NEGATIVE PROMPT]
```

#### E) PRUEBA física (1:1, objeto)

```
[MASTER PROMPT]

Evidence object photograph, 1:1 square aspect ratio, single object centered,
shot from slight top-down 30-degree angle, placed on coarse brown kraft paper
or dark felt mat (mesa de evidencias).

Object: [descripción detallada del documento — material, tamaño relativo, signos
de uso, detalle clave que importa para la investigación, ej: "rope-thin bloodied
crack along the side"].

Lighting: single side raking light to reveal texture, mild shadow under the
object, no flash glare, museum-catalog feel.

Markings: small forensic ruler or evidence tag NEXT TO (not on) the object,
neutral grey, faintly visible — for context only, no readable text.

Style ID: undersuspi-noir-v1.

[NEGATIVE PROMPT]
```

#### F) DOCUMENTO (4:5, vista cenital)

```
[MASTER PROMPT]

Document evidence shot, 4:5 portrait aspect ratio, top-down flat-lay view,
document placed on a dark wooden desk surface, partial shadow from off-frame
desk lamp.

Document type: [autopsy report / handwritten letter / financial ledger / court
filing / phone record / etc — del documento].

Visual content of the document: [describir layout SIN texto legible — ej:
"typewriter-formatted official forensic header at top, two columns of
typed paragraphs, official stamp in lower-right corner, signature line
below, slight coffee stain near corner". Use lorem ipsum-style placeholder
or blurred / illegible text — DOM will overlay readable text later].

Period detail: typewriter font, official letterhead area, period-appropriate
paper aged with slight yellowing.

Style ID: undersuspi-noir-v1. CRITICAL: text must NOT be readable — it will be
rendered programmatically over the image.

[NEGATIVE PROMPT]
```

#### G) ICONO de UI (1:1, simple, alta legibilidad)

```
[MASTER PROMPT — REDUCED]: minimalist editorial icon, flat 2D, mustard gold
(#C9A961) on transparent background, clean linework, readable at 32px,
matches noir investigative dossier aesthetic, no shading complexity, single
color or two-tone maximum.

Icon concept: [descripción concreta — ej: "magnifying glass over a fingerprint",
"file folder with red ribbon", "telephone handset old rotary style", "UV light
flashlight beam"].

Style ID: undersuspi-noir-v1.

NEGATIVE: photorealistic, gradient mesh, multiple colors, text, watermark.
```

### 7.4 — Workflow recomendado por personaje

```
1. Generar la pose NEUTRAL primera. Iterar hasta aprobar (vestimenta, cara, edad).
2. Guardar la imagen aprobada como `{nombre}-neutral-MASTER.png` (versión sin
   procesar, alta resolución).
3. Para PENSATIVO: prompt = base con bloque pose "talking" + adjuntar la NEUTRAL
   como reference image (Midjourney `--cref` peso alto, IP-Adapter weight 0.7+,
   DALL-E edit con máscara facial).
4. Para NERVIOSO: idem, bloque pose "nervous" + NEUTRAL como reference.
5. Si la cara o ropa deriva: rehacer adjuntando la NEUTRAL y siendo MÁS explícito
   ("same face, same hairstyle, same clothing as reference, only change pose and
   expression").
6. Validar las 3 poses lado a lado antes de aceptar.
7. Producir variantes técnicas: cutout (fondo eliminado) y background (fondo
   integrado del escenario). Background es opcional; cutout es obligatorio.
```

### 7.5 — Checklist de validación (antes de aceptar un asset)

- [ ] ¿Hereda paleta noir (sin saturación rainbow)?
- [ ] ¿Iluminación de claroscuro lateral (no flash directo)?
- [ ] ¿Sin texto legible incrustado?
- [ ] ¿Sin elementos anacrónicos modernos (smartphones, logos de marca actuales)?
- [ ] ¿Aspect ratio correcto al uso (3:4, 1:1, 4:5, 16:9)?
- [ ] ¿Personaje recurrente: misma cara que la `neutral` aprobada?
- [ ] ¿Cumple guidelines éticas (violencia/suicidio implícitos, no menores)?
- [ ] ¿Resolución mínima alcanzada según tabla §5.1?
- [ ] ¿Exports cutout y background generados?
- [ ] ¿Naming convention §5.2 respetado?

### 7.6 — Registro

Cada generación aprobada debe quedar logeada en `assets/style-bible.json` campo
`history`:

```json
{
  "date": "YYYY-MM-DD",
  "version": 1,
  "action": "generated",
  "asset": "suspects/lourdesneutral-withoutbg.png",
  "case": "caso-02",
  "by": "[autor o tool]",
  "prompt_id": "[hash o referencia]",
  "notes": "Pose neutral aprobada como master. Usar como reference para pensativa/nerviosa."
}
```

---

## Anexo · Asset checklist por sprint (resumen rápido)

### Sprint 4 (Caso 2 "Sin sangre")

- [ ] Salvador Cienfuegos (víctima — 1 retrato carnet)
- [ ] Lourdes Cienfuegos × 3 poses
- [ ] Iván Cienfuegos × 3 poses
- [ ] Adelina Roca × 3 poses
- [ ] Escenario: piso Lavapiés (16:9 + variante 3:4 móvil)
- [ ] 8 pruebas (mix documento/objeto)
- [ ] Calendario rojo (asset reutilizable)
- [ ] Comedor cena para Elena (si no se hizo en S2)
- [ ] Elena × 3 poses (si pendiente de S2)

### Sprint 5 (Caso 3 "El número equivocado")

- [ ] Carla Vinyets (víctima)
- [ ] Esteban Vidal × 3 poses
- [ ] Jorge "Jordi" Sallén × 3 poses
- [ ] Olalla Bermejo × 3 poses
- [ ] Bernabé Faz × 3 poses
- [ ] Escenario: portal Chueca lluvia
- [ ] Escenario: despacho TecBaria
- [ ] 9 pruebas
- [ ] **UI teléfono** (panel completo: dial, pantalla LCD, botón colgar, ringer)
- [ ] Foto familiar Esteban Vidal (asset narrativo del padre detective)

### Sprint 6 (Caso 4 "La piedra rota")

- [ ] Andrés Solera (víctima)
- [ ] Joaquín Vela × 3 poses
- [ ] Mireia Solana × 3 poses
- [ ] Don Eulogio Pacheco × 3 poses
- [ ] Lucía Solera × 3 poses
- [ ] Escenario: caserón Talavera (despacho con chimenea)
- [ ] 8 pruebas
- [ ] **Caja fuerte de pared cerrada** (asset interactivo C5)
- [ ] Forense Octaviano Vidal × 2 poses (si pendiente)
- [ ] Hojas sueltas con menciones "caso Mora del 86" (asset narrativo pivote)

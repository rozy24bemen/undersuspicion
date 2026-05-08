# Prompts — Iconos de Pruebas (Mesa de Evidencias)

## Contexto

Estos iconos reemplazarán los emojis que aparecen en las tarjetas de prueba de la mesa de trabajo.
Cada tarjeta muestra el icono a **14 px** dentro del juego, pero el archivo debe generarse a **128×128 px** para que escale bien en pantallas de alta densidad.

El icono va incrustado en la cabecera ámbar de la tarjeta (`#c8b888`), así que el **fondo del icono debe ser transparente** (PNG con canal alfa).

---

## Parámetros de estilo base (style-bible v1)

Copiar estos valores en todos los prompts:

```
Estilo: ilustración 2D editorial, estilo Cluedo moderno, trazo limpio y contornos definidos, sombreado por bloques con transiciones suaves
Paleta: noir cálida — fondos oscuros (#1a1a1a / #3a2820), acento rojo sangre (#8B0000), acento oro mostaza (#C9A961), papel claro (#e8d8b0)
Iluminación: claroscuro, luz lateral cálida, sombras profundas, sin flash directo
Época: atemporal años 80-90 (tecnología analógica, sin pantallas modernas)
Formato: icono cuadrado 1:1, sujeto centrado, alta legibilidad a tamaño pequeño, fondo transparente, sin texto, sin marcos, sin watermark
Negativo: anime, manga, fotorrealista, 3D, render, cartoon infantil, deforme, texto, logos, watermark, firma de artista, exceso de saturación, paleta arcoíris
```

---

## Iconos únicos a generar

A continuación se listan los **28 iconos únicos** del juego. Donde el mismo icono se reutiliza en varios casos, solo hay que generarlo una vez.

---

### 1. Informe / Clipboard
**Emoji original:** 📋  
**Archivo:** `icon_informe.png`  
**Usado en:** Caso 1 (Informe de Autopsia), Caso 5 (Informe Forense), Caso 7 (Informe Forense)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: portapapeles de detective con un folio preso y líneas de texto ilegibles, pluma o bolígrafo apoyado. Paleta noir cálida, acento oro mostaza en el clip metálico, papel amarillento con líneas oscuras. Iluminación de claroscuro con luz lateral cálida. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 2. Dinero / Finanzas
**Emoji original:** 💰  
**Archivo:** `icon_dinero.png`  
**Usado en:** Caso 1 (Registros Financieros), Caso 2 (Movimientos de Salvador), Caso 5 (Sobre con Dinero), Caso 6 (mov. bancarios)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: fajo de billetes atado con una goma, junto a una moneda o símbolo de peseta estilo vintage. Paleta noir cálida, acento oro mostaza en los billetes, sombras profundas. Iluminación de claroscuro con luz lateral cálida. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 3. Cámara fotográfica estática / CCTV
**Emoji original:** 📸  
**Archivo:** `icon_cctv_foto.png`  
**Usado en:** Caso 1 (Cámara de Seguridad), Caso 2 (CCTV portal Lavapiés), Caso 3 (CCTV portal Chueca)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: cámara de vigilancia analógica de pared años 80-90, lente circular prominente, tornillos visibles. Paleta noir cálida, metal oscuro con reflejos dorados suaves. Iluminación de claroscuro con luz lateral cálida. Fondo transparente. Sin texto, sin watermark, sin 3D, sin anime.

---

### 4. Carta / Sobre
**Emoji original:** ✉️  
**Archivo:** `icon_carta.png`  
**Usado en:** Caso 1 (Carta Manuscrita), Caso 4 (Carta a medio escribir), Caso 5 (Carta Inacabada de Hermes)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: sobre de papel envejecido ligeramente abierto con un folio doblado asomando, borde rasgado. Paleta noir cálida, papel en tono sepia-amarillento (#e8d8b0), sello lacre en rojo sangre (#8B0000). Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 5. Copa de vino
**Emoji original:** 🍷  
**Archivo:** `icon_copa.png`  
**Usado en:** Caso 1 (Copa de Vino Analizada)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: copa de vino tinto vista de frente, con un poso o residuo oscuro visible en el fondo, aspecto de prueba forense. Paleta noir cálida, líquido en rojo sangre oscuro (#8B0000), cristal con reflejos oro mostaza. Iluminación de claroscuro con luz lateral. Fondo transparente. Sin texto, sin watermark, sin 3D, sin anime.

---

### 6. Registro telefónico / Listado de llamadas
**Emoji original:** 📞  
**Archivo:** `icon_telefono_registro.png`  
**Usado en:** Caso 1 (Registro Telefónico), Caso 4 (Listado de llamadas)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: teléfono fijo analógico de los 80-90 visto en tres cuartos, con auricular descolgado o sobre la base, aspecto de prueba. Paleta noir cálida, plástico negro con detalles dorados. Iluminación de claroscuro con luz lateral cálida. Fondo transparente. Sin texto, sin watermark, sin 3D, sin anime.

---

### 7. Declaración / Testigo
**Emoji original:** 👤  
**Archivo:** `icon_declaracion.png`  
**Usado en:** Caso 1 (Declaración del Camarero)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: silueta de busto humano estilizada con contorno definido, aspecto de ficha policial o testigo anónimo. Paleta noir cálida, silueta en oscuro con contorno oro mostaza, fondo interior neutro. Iluminación de claroscuro. Fondo transparente. Sin texto, sin watermark, sin 3D, sin anime.

---

### 8. Grabación de vídeo / CCTV vídeo
**Emoji original:** 🎥 / 📹  
**Archivo:** `icon_cctv_video.png`  
**Usado en:** Caso 1 (CCTV Hotel Ritz), Caso 6 (Cámara de Seguridad), Caso 7 (Cámara Exterior del Chalet)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: casete de vídeo VHS con etiqueta en blanco o fragmento de cinta de película enrollada, aspecto de prueba de vigilancia analógica años 80-90. Paleta noir cálida, carcasa negra mate, bobinas en tono metal oscuro, acento dorado en la etiqueta. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 9. Informe médico / Forense
**Emoji original:** 🩺  
**Archivo:** `icon_forense.png`  
**Usado en:** Caso 2 (Informe forense), Caso 4 (Informe forense)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: estetoscopio enrollado sobre un folio de informe médico o tabla de cuerpo humano estilizada, estética de sala de autopsias. Paleta noir cálida, metal frío en el estetoscopio, papel envejecido, acento rojo sangre sutil. Iluminación de claroscuro con luz lateral. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 10. Almohada
**Emoji original:** 🛏️  
**Archivo:** `icon_almohada.png`  
**Usado en:** Caso 2 (Almohada con cabello canoso)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: almohada con funda arrugada y un mechón de cabello canoso visible encima, marcada con una etiqueta de evidencia policial. Paleta noir cálida, funda en tono papel crema, cabello en gris plateado, etiqueta en oro mostaza. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 11. Testamento / Documento legal enrollado
**Emoji original:** 📜  
**Archivo:** `icon_testamento.png`  
**Usado en:** Caso 2 (Borrador de testamento sin firmar)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: pergamino o folio enrollado parcialmente con sello de lacre roto y líneas de texto ilegibles, aspecto de documento legal antiguo. Paleta noir cálida, papel en sepia (#e8d8b0), lacre en rojo sangre (#8B0000), tinta oscura. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 12. Tarjeta bancaria / Recibos
**Emoji original:** 💳  
**Archivo:** `icon_banco.png`  
**Usado en:** Caso 2 (Recibos banco de Lourdes), Caso 5 (Movimientos Bancarios Inés), Caso 6 (Movimientos Bancarios de Pinhel)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: talonario de banco o extracto bancario doblado junto a un recibo de papel, estética años 80-90 (sin chip visible, diseño analógico). Paleta noir cálida, papel envejecido, acento oro mostaza en los números marcados. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 13. Fotografías antiguas
**Emoji original:** 📷  
**Archivo:** `icon_fotos.png`  
**Usado en:** Caso 2 (Caja con fotos antiguas), Caso 5 (Fotografías de Carmen Lobera)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: pila de fotografías analógicas en blanco y negro esparcidas, una de ellas boca abajo o con borde doblado, estética polaroid o foto revelada años 80. Paleta noir cálida, bordes blancos de foto sobre superficie oscura, acento sepia en la imagen. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 14. Calendario
**Emoji original:** 📅  
**Archivo:** `icon_calendario.png`  
**Usado en:** Caso 2 (Calendario de pared con día rojo), Caso 5 (Calendario)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: calendario de pared o de mesa años 80-90, una página con una fecha marcada con un círculo rojo o una X. Paleta noir cálida, papel envejecido, acento rojo sangre en la marca, espiral o gancho metálico oscuro. Iluminación de claroscuro. Fondo transparente. Sin texto legible excepto números de fecha abstractos, sin watermark, sin 3D, sin anime.

---

### 15. Cuchillo
**Emoji original:** 🔪  
**Archivo:** `icon_cuchillo.png`  
**Usado en:** Caso 3 (Cuchillo de cocina), Caso 6 (Cuchillo de Cocina)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: cuchillo de cocina sobre una bolsa de evidencias transparente sellada con etiqueta policial, o simplemente apoyado sobre papel de estraza. Paleta noir cálida, hoja metálica con reflejos fríos, mango oscuro, etiqueta en oro mostaza. Iluminación de claroscuro con luz lateral. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 16. Teléfono móvil
**Emoji original:** 📱  
**Archivo:** `icon_movil.png`  
**Usado en:** Caso 3 (Móvil de Carla con mensajes borrados), Caso 6 (Mensajes en el Móvil de Marina), Caso 7 (móvil)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: teléfono móvil táctil de finales de los 2000, pantalla encendida mostrando una conversación con mensajes borrados (iconos de eliminar o pantalla negra con trazas), aspecto de prueba policial. Paleta noir cálida, carcasa oscura, pantalla con brillo azul frío tenue, acento rojo en el indicador de eliminado. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 17. Carpeta de archivos
**Emoji original:** 🗂️  
**Archivo:** `icon_carpeta.png`  
**Usado en:** Caso 3 (Carpeta de RRHH)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: carpeta archivadora de cartón marrón con pestañas de colores y documentos asomando, etiqueta frontal con texto ilegible. Paleta noir cálida, cartón en marrón oscuro, pestañas con toque oro mostaza, papeles en crema. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 18. Recibo / Tique
**Emoji original:** ☕  
**Archivo:** `icon_recibo.png`  
**Usado en:** Caso 3 (Recibo café, Cafetería La Fontana)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: tique o recibo de caja registradora de papel térmico enrollado con fecha visible como abstracción, junto a una taza de café volcada o vacía. Paleta noir cálida, papel blanco roto, taza oscura con poso de café. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 19. Cuaderno / Libreta
**Emoji original:** 📓 / 📔  
**Archivo:** `icon_cuaderno.png`  
**Usado en:** Caso 3 (Cuaderno con número incompleto), Caso 4 (Agenda de Andrés), Caso 7 (Cuaderno)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: libreta o cuaderno de espiral abierto por una página con anotaciones manuscritas ilegibles y un número subrayado o tachado. Paleta noir cálida, tapa oscura, páginas en crema-amarillento, tinta negra con acento rojo en el número marcado. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 20. Pegatina / Etiqueta adhesiva
**Emoji original:** 🟨  
**Archivo:** `icon_pegatina.png`  
**Usado en:** Caso 3 (Pegatina amarilla "22" en monitor)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: nota adhesiva amarilla tipo post-it despegándose de una superficie, con un número o símbolo abstracto garabateado, bordes arrugados. Paleta noir cálida, adhesivo en amarillo mostaza apagado, garabato en tinta oscura, sombra de despegue. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 21. Correo electrónico / Mensaje digital
**Emoji original:** 📧  
**Archivo:** `icon_email.png`  
**Usado en:** Caso 3 (Mail con fragmento numérico)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: pantalla de ordenador de tubo (CRT) años 90 mostrando un correo electrónico con parte del texto censurado con rectángulo negro, aspecto de impresión de pantalla. Paleta noir cálida, monitor verde fósforo o ámbar sobre negro, acento rojo en las líneas censuradas. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 22. Fotografía enmarcada / Foto familiar
**Emoji original:** 🖼️  
**Archivo:** `icon_foto_familiar.png`  
**Usado en:** Caso 3 (Foto familiar Esteban Vidal), Caso 5 (Fotografías de Carmen Lobera)

> **Nota:** Si el icono `icon_fotos.png` (nº 13) ya cubre visualmente este uso, se puede reutilizar. De lo contrario, generar este variante con una foto enmarcada.

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: foto enmarcada en blanco y negro con marco de madera oscura, silhouetas de una familia o grupo borrosas, cristal con un reflejo. Paleta noir cálida, marco marrón oscuro, foto en grises sepia, acento oro mostaza en el marco. Iluminación de claroscuro. Fondo transparente. Sin texto, sin watermark, sin 3D, sin anime.

---

### 23. Piedra / Objeto contundente
**Emoji original:** 🪨  
**Archivo:** `icon_piedra.png`  
**Usado en:** Caso 4 (Piedra del fuego rota)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: fragmento de piedra irregular sobre una bolsa de evidencias o papel de estraza, con una etiqueta policial. Paleta noir cálida, piedra en grises fríos oscuros con venas, papel de estraza en crema, etiqueta en oro mostaza. Iluminación de claroscuro con luz lateral que marca la textura. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 24. Documentos sueltos / Hojas
**Emoji original:** 📎 / 📄  
**Archivo:** `icon_documentos.png`  
**Usado en:** Caso 4 (Coartadas verificables, Hojas sueltas caso Mora), Caso 5 (Hoja Elena)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: conjunto de folios sueltos con un clip metálico, uno de ellos con texto mecanografiado ilegible y sello de archivo. Paleta noir cálida, papel envejecido crema, clip metálico oscuro, sello en rojo sangre. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 25. Vela / Escena de morgue
**Emoji original:** 🕯️  
**Archivo:** `icon_vela.png`  
**Usado en:** Caso 4 (Forense Octaviano Vidal en morgue)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: vela encendida sobre un portavelas metálico, cera derramada, luz cálida en contraste con fondo muy oscuro, atmósfera fúnebre. Paleta noir cálida, cera blanca-amarillenta, llama en ámbar, metal oxidado oscuro, sombras muy profundas. Iluminación de claroscuro extremo. Fondo transparente. Sin texto, sin watermark, sin 3D, sin anime.

---

### 26. Candado / Caja cerrada
**Emoji original:** 🔒  
**Archivo:** `icon_candado.png`  
**Usado en:** Caso 5 (Cajón con Candado)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: cajón de madera oscura entreabierto con un candado metálico viejo cerrando el asidero. Paleta noir cálida, madera en oscuro caoba, candado en metal envejecido con reflejos dorados, cerradura en negro. Iluminación de claroscuro con luz lateral que marca el candado. Fondo transparente. Sin texto, sin watermark, sin 3D, sin anime.

---

### 27. Papeles ardidos / Fuego
**Emoji original:** 🔥  
**Archivo:** `icon_papeles_ardidos.png`  
**Usado en:** Caso 6 (Papeles Ardidos)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: documentos quemados con bordes carbonizados, ceniza y una pequeña brasa aún encendida en una esquina. Paleta noir cálida, papel en negro-sepia con bordes naranja-rojo, brasa en rojo sangre, ceniza en gris frío. Iluminación de claroscuro con el propio fuego como fuente de luz secundaria. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 28. Pluma / Bolígrafo
**Emoji original:** 🖊️  
**Archivo:** `icon_pluma.png`  
**Usado en:** Caso 6

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: estilográfica o bolígrafo de calidad sobre papel de carta con trazas de escritura ilegible, aspecto de documento firmado. Paleta noir cálida, cuerpo de pluma en negro lacado con anillo dorado, tinta en negro-azul oscuro, papel crema. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 29. Edificio / Local comercial
**Emoji original:** 🏪  
**Archivo:** `icon_local.png`  
**Usado en:** Caso 6

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: fachada de local comercial o estudio artístico años 80-90, puerta metálica entreabierta, letrero ilegible en la cristalera, aspecto de escena de crimen precintada. Paleta noir cálida, fachada en grises oscuros, franja de luz interior en ámbar, cinta de precinto en amarillo mostaza. Iluminación de claroscuro exterior nocturno. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 30. Cubo / Contenedor industrial
**Emoji original:** 🪣  
**Archivo:** `icon_cubo.png`  
**Usado en:** Caso 7 (Pila Industrial del Sótano)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: cuba o depósito industrial metálico de sótano, con válvulas y tuberías, aspecto de instalación eléctrica o química peligrosa, etiqueta de advertencia abstracta. Paleta noir cálida, metal oxidado en grises fríos, acento rojo sangre en la señal de peligro, óxido en naranja apagado. Iluminación de claroscuro con luz única lateral. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 31. Caja / Manuscrito
**Emoji original:** 📦  
**Archivo:** `icon_caja.png`  
**Usado en:** Caso 7 (Caja de Borradores del Libro)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: caja de cartón desgastada entreabierta con folios mecanografiados asomando (borradores de manuscrito), aspecto de archivo personal desempolvado. Paleta noir cálida, cartón en marrón apagado, papeles en crema envejecido, polvo gris. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

### 32. Libros
**Emoji original:** 📚  
**Archivo:** `icon_libros.png`  
**Usado en:** Caso 7

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: dos o tres libros de lomo oscuro apilados o en diagonal, uno con páginas dobladas como marcapáginas, aspecto de biblioteca privada antigua. Paleta noir cálida, lomos en granate-marrón oscuro y negro, acento oro mostaza en los lomos, páginas amarillentas. Iluminación de claroscuro. Fondo transparente. Sin texto legible en portada, sin watermark, sin 3D, sin anime.

---

### 33. Fotografía de grupo / Álbum
**Emoji original:** 📷 (variante grupo)  
**Archivo:** `icon_foto_grupo.png`  
**Usado en:** Caso 5 (Fotografía de Grupo — 1985)

> **Nota:** Puede reutilizarse `icon_fotos.png`. Generar solo si se quiere diferenciar de la pila de fotos.

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: fotografía analógica en blanco y negro con borde blanco característico de los años 80, mostrando siluetas abstractas de grupo, esquina doblada. Paleta noir cálida, foto en escala de grises sepia, borde blanco roto, sombra de papel sobre superficie oscura. Iluminación de claroscuro. Fondo transparente. Sin caras reconocibles, sin texto legible, sin watermark, sin 3D, sin anime.

---

### 34. Registro de portería / Edificio
**Emoji original:** 🏠  
**Archivo:** `icon_registro_porteria.png`  
**Usado en:** Caso 5 (Registro Portero)

**Prompt:**
> Icono cuadrado 128×128 px, ilustración 2D editorial estilo Cluedo moderno, trazo limpio. Sujeto: libro de registro de portería de finca urbana, abierto por una página con columnas de entrada/salida y sellos de fecha ilegibles. Paleta noir cálida, tapa en cuero oscuro, páginas en crema, sellos en rojo sangre. Iluminación de claroscuro. Fondo transparente. Sin texto legible, sin watermark, sin 3D, sin anime.

---

## Notas de implementación

Una vez generados los iconos, para usarlos en el juego hay que:

1. Guardar los PNG en `assets/img/icons/pruebas/`
2. En cada archivo `js/data/casoXX.js`, cambiar el campo `icon` de cada prueba:
   ```js
   // Antes
   icon: '📋',
   // Después
   icon: '<img src="assets/img/icons/pruebas/icon_informe.png" class="ev-icon" alt="">',
   ```
   O bien añadir un nuevo campo `iconImg` y modificar el template en `DeskManager.js` para usar la imagen cuando esté disponible y caer al emoji cuando no.

3. En `DeskManager.js` ajustar el CSS de `.desk-card__icon` de `font-size: 14px` a `width: 20px; height: 20px; object-fit: contain;`

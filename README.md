# Web CEO · Lucía Morales

Web personal de Lucía Morales (luciamorales.es): Creator, Business, Owner. Lleva al público de Instagram hacia lo que va a venir, su marca de cosmética, y recoge la lista de espera.

## Ver la web

- **Web:** https://toniolive.github.io/web-ceo/
- **Vista por dispositivos (escritorio, tablet y móvil):** https://toniolive.github.io/web-ceo/preview.html
- **Primera propuesta (estilo anterior):** https://toniolive.github.io/web-ceo/v1/
- **Propuesta v2 (movimiento intermedio, para comparar):** https://toniolive.github.io/web-ceo/v2/ · por dispositivos: https://toniolive.github.io/web-ceo/v2/preview.html

Cada cambio que se sube a la rama `main` se publica solo en 1 o 2 minutos. Si no ves el cambio, recarga sin caché (Ctrl+Shift+R o Cmd+Shift+R).

## Index

| Bloque | Qué es |
|---|---|
| 01 · Ascensor | Puertas de acero con el menú y el indicador rojo de planta (0) encima. Al entrar se entreabren un momento (luz por la rendija y «Baja para abrir») para invitar a bajar; si sigues arriba se repite una vez. En cuanto empiezas a bajar se abren solas y aparece Lucía, sin frenar el scroll; al volver arriba se cierran. Aquí irán el vídeo del interior y el sonido. |
| 02 · Bienvenida | Pared blanca con la letra a mano, la cinta «C B O» y la foto. Estática: se ve completa al llegar. |
| 03 · Sobre mí | Fondo azul y texto rojo: trayectoria, foto (fija) y «Lo que va a venir». El texto se ilumina al leer. |
| 04 · In the making | Foto de la obra de las nuevas oficinas, cita de L.M y collage «MG days» y «MG design process». |
| 05 · New chapter | Foto en la escalera con «new Chapter» cuatro veces, estática. «Join the list» lleva al formulario. |
| 06 · Lista de espera | «Introduce tu mail» y, al enviarlo, «Gracias, ya estás en la lista». |
| 07 · Gallery | Las seis casillas en orden (01 Hot Readers, 03 Design Freaks, 04 Artholics y 05 Wardrobe Edit enlazadas), estáticas, en el mismo scroll. |
| 08 · Plantas 2 y 3 | CURATEDShopping y +More, en obras, con las cintas amarillas. Después, el pie. |

## Páginas

| Archivo | Qué es |
|---|---|
| `index.html` | El Index completo (HTML, CSS y JS en un solo archivo) |
| `gallery.html` | Gallery: cita de L.M y seis casillas (01 Hot Readers, 03 Design Freaks; el resto, próximamente). Estática |
| `hot-readers.html` | Portada con la estantería y la lista de libros, cada uno enlazado a su tienda. Cada portada es un libro 3D: un toque o clic lo abre (tapa y hojas en abanico) y dentro aparecen título, autor, año y «Ver el libro», que es lo único que lleva a la tienda; otro toque o Escape lo cierra. Con ratón se entreabre al pasar por encima; en móvil se entreabre una vez al aparecer |
| `artholics.html` | Gallery 04: portada «artholics», Avant-garde y «who» con los artistas; cada caja abre la web del artista |
| `wardrobe-edit.html` | Gallery 05: Wardrobe Edit, la foto «Key Pieces A/W 26'» con cada palabra enlazada a la pieza y la lista «Pieces worth buying» |
| `design-freaks.html` | Diseñadores y arquitectos, con enlaces a cada artículo |
| `melara-glow.html` | Web de Melara Glow en construcción. Estática: título y cintas amarillas, sin juego de momento (la versión con las cintas que se arrancan está en el commit 4ecb451). Enlazada desde «Con tu mirada» y desde Design Freaks |
| `curated-shopping.html`, `more.html` | Plantas 2 y 3 en obras: título, «Muy pronto» y las cintas amarillas |
| `assets/site.css`, `assets/site.js` | Barra, menú de puertas, pie y animaciones comunes de las páginas interiores |
| `assets/lift.css`, `assets/lift.js` | Transición de ascensor entre plantas (ver abajo) |
| `assets/img/`, `assets/fonts/` | Imágenes recortadas de los diseños y Google Sans en woff2 (licencia SIL Open Font License) |
| `preview.html` | Visor para revisar la web en escritorio, tablet y móvil |
| `v1/` | Primera propuesta, guardada como referencia |

## Transición de ascensor

Index (planta 0), Gallery (1), CURATEDShopping (2) y +More (3) son plantas de un edificio. Al ir de una a otra:

1. **Salida:** el marco del ascensor entra desde fuera de la pantalla y las puertas se cierran. Desde la portada del Index las puertas ya están cerradas y solo se enciende el indicador.
2. **Llegada:** el indicador rojo sobre la puerta cuenta las plantas (▲/▼), se ilumina al llegar, las puertas se abren con la página nueva detrás y la cámara cruza la puerta. Al volver a la portada del Index, el ascensor ya está ahí y solo se funde.

Funciona con cualquier enlace a esas cuatro páginas, también desde Hot Readers, Design Freaks y Melara Glow. El viaje se guarda en `sessionStorage` y un script en el `<head>` deja las puertas cerradas antes del primer pintado. Con `prefers-reduced-motion` se navega sin transición.

## Propuesta v2

Copia completa de la web en `v2/` para comparar con la actual (cada página lleva la etiqueta «Propuesta v2 · ver actual»). Misma estructura y mismo contenido; cambia solo el movimiento, con una regla común:

- Nada bloquea ni marea: sin anclajes, sin zoom, nada que obligue a esperar para bajar.
- Bienvenida: todo a la vista; cada capa (letra, foto, firma) se desplaza un poco distinto al bajar.
- Sobre mí: los textos entran con un movimiento corto; la foto no se agranda, solo se desliza unos píxeles.
- New chapter: sin anclaje; la foto ya está y las cuatro líneas se escriben en un segundo.
- Gallery: título, cita y casillas entran igual que el resto; al pasar el ratón la casilla sube un poco.
- Igual que la actual: ascensor, In the making, Join the list, Hot Readers, Design Freaks, Melara y plantas 2 y 3.

Se genera con el mismo script que las páginas interiores, a partir de la versión actual (`v2/index.html` sale del `index.html` de la raíz con sus bloques de movimiento cambiados).

## Tecnología

- HTML, CSS y JavaScript, sin framework ni compilación.
- GSAP 3.12.5 con ScrollTrigger y Lenis 1.1.13 para el scroll suave en ordenador, por CDN.
- Respeta `prefers-reduced-motion`: sin animaciones, todo el contenido queda visible.

## Pendiente

- [ ] Conectar el formulario de la lista de espera a la herramienta de email (Shopify, Klaviyo, Brevo…). Ahora solo muestra «Gracias» y no guarda el email.
- [ ] Melara Glow: cuando se decida, recuperar las cintas que se arrancan (commit 4ecb451) con la idea que elijan; ahora la página es estática.
- [ ] «Con tu mirada»: cuando exista la web de Melara, cambiar el enlace de «Ver el libro» de `melara-glow.html` a la web real.
- [ ] Vídeo del interior del ascensor y sonido (los envía Lucía).
- [ ] Artholics: faltan las webs de Jaime Monge, Marta Camallonga, Mr. x Peexwo e Inés Longevial (sus cajas no enlazan). Federico Granell y Pelayo Ortega vienen en el Word pero no en el diseño.
- [ ] Confirmar el año de «La vegetariana»: el diseño pone 2024 y el correo 2007 (se ha puesto 2007, el de la edición original).
- [ ] Contenido de las casillas 02, 04, 05 y 06 de Gallery, de *CURATED*Shopping y de +More.
- [ ] Aviso legal, privacidad y cookies.
- [ ] Dominio luciamorales.es.
- [ ] Quitar `<meta name="robots" content="noindex, nofollow">` de las páginas cuando la web esté lista para Google.

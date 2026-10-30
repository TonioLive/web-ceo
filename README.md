# Web CEO · Lucía Morales

Web personal de Lucía Morales (luciamorales.es): Creator, Business, Owner. Lleva al público de Instagram hacia lo que va a venir, su marca de cosmética, y recoge la lista de espera.

## Ver la web

- **Web:** https://toniolive.github.io/web-ceo/
- **Vista por dispositivos (escritorio, tablet y móvil):** https://toniolive.github.io/web-ceo/preview.html
- **Primera propuesta (estilo anterior):** https://toniolive.github.io/web-ceo/v1/

Cada cambio que se sube a la rama `main` se publica solo en 1 o 2 minutos. Si no ves el cambio, recarga sin caché (Ctrl+Shift+R o Cmd+Shift+R).

## Index

| Bloque | Qué es |
|---|---|
| 01 · Ascensor | Puertas de acero con el menú. Al bajar se abren, aparece Lucía y la cámara entra en el ascensor. |
| 02 · Bienvenida | Pared blanca con la letra a mano, la cinta «C B O» y la foto. La letra se escribe sola al llegar. |
| 03 · Sobre mí | Fondo azul y texto rojo: trayectoria, foto y «Lo que va a venir». El texto se ilumina al leer. |
| 04 · In the making | Foto de la obra de las nuevas oficinas, cita de L.M y collage «MG days» y «MG design process». |
| 05 · New chapter | Foto en la escalera; al bajar, la foto se descubre y «new Chapter» se escribe cuatro veces. «Join the list» lleva al formulario. |
| 06 · Lista de espera | «Introduce tu mail» y, al enviarlo, «Gracias, ya estás en la lista». |

## Páginas

| Archivo | Qué es |
|---|---|
| `index.html` | El Index completo (HTML, CSS y JS en un solo archivo) |
| `gallery.html` | Gallery: cita de L.M y seis casillas (01 Hot Readers, 03 Design Freaks; el resto, próximamente). Al entrar, el marco de cada casilla se dibuja y la casilla aparece dentro |
| `hot-readers.html` | Portada con la estantería y la lista de libros, cada uno enlazado a su tienda. Cada portada es un libro 3D: al pasar el ratón se abre, las hojas se abren en abanico y aparece el «Ex libris»; en móvil se entreabre al aparecer |
| `design-freaks.html` | Diseñadores y arquitectos, con enlaces a cada artículo |
| `melara-glow.html` | Web de Melara Glow en construcción. Al arrancar (arrastrar o pulsar) las dos cintas amarillas aparece un código promocional de ejemplo (`MELARA10`). Enlazada desde «Con tu mirada» y desde Design Freaks |
| `curated-shopping.html`, `more.html` | Plantas 2 y 3 en obras: título, «Muy pronto» y las cintas amarillas |
| `assets/site.css`, `assets/site.js` | Barra, menú de puertas, pie y animaciones comunes de las páginas interiores |
| `assets/lift.css`, `assets/lift.js` | Transición de ascensor entre plantas (ver abajo) |
| `assets/img/`, `assets/fonts/` | Imágenes recortadas de los diseños y Google Sans en woff2 (licencia SIL Open Font License) |
| `preview.html` | Visor para revisar la web en escritorio, tablet y móvil |
| `v1/` | Primera propuesta, guardada como referencia |

## Transición de ascensor

Index (planta 0), Gallery (1), CURATEDShopping (2) y +More (3) son plantas de un edificio. Al ir de una a otra:

1. **Salida:** el marco del ascensor entra desde fuera de la pantalla y las puertas se cierran. Desde la portada del Index las puertas ya están cerradas y solo se enciende el indicador.
2. **Llegada:** el indicador sobre la puerta cuenta las plantas (▲/▼), suena el «ding», las puertas se abren con la página nueva detrás y la cámara cruza la puerta. Al volver a la portada del Index, el ascensor ya está ahí y solo se funde.

Funciona con cualquier enlace a esas cuatro páginas, también desde Hot Readers, Design Freaks y Melara Glow. El viaje se guarda en `sessionStorage` y un script en el `<head>` deja las puertas cerradas antes del primer pintado. Con `prefers-reduced-motion` se navega sin transición.

## Tecnología

- HTML, CSS y JavaScript, sin framework ni compilación.
- GSAP 3.12.5 con ScrollTrigger y Lenis 1.1.13 para el scroll suave en ordenador, por CDN.
- Respeta `prefers-reduced-motion`: sin animaciones, todo el contenido queda visible.

## Pendiente

- [ ] Conectar el formulario de la lista de espera a la herramienta de email (Shopify, Klaviyo, Brevo…). Ahora solo muestra «Gracias» y no guarda el email.
- [ ] Código de Melara Glow: `MELARA10` (10 % en el primer pedido) es de ejemplo. Crear el descuento real en Shopify antes del lanzamiento y cambiar `PROMO_CODE` / `PROMO_TEXT` en `melara-glow.html`.
- [ ] Confirmar el año de «La vegetariana»: el diseño pone 2024 y el correo 2007 (se ha puesto 2007, el de la edición original).
- [ ] Contenido de las casillas 02, 04, 05 y 06 de Gallery, de *CURATED*Shopping y de +More.
- [ ] Aviso legal, privacidad y cookies.
- [ ] Dominio luciamorales.es.
- [ ] Quitar `<meta name="robots" content="noindex, nofollow">` de las páginas cuando la web esté lista para Google.

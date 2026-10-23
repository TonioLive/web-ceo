# Web CEO · Lucía Morales

Web personal de Lucía Morales (luciamorales.es): Creator, Business, Owner. Lleva al público de Instagram hacia lo que va a venir, su marca de cosmética.

## Ver la web

- **Web:** https://toniolive.github.io/web-ceo/
- **Vista por dispositivos (escritorio, tablet y móvil):** https://toniolive.github.io/web-ceo/preview.html
- **Primera propuesta (estilo anterior):** https://toniolive.github.io/web-ceo/v1/

Cada cambio que se sube a la rama `main` se publica solo en 1 o 2 minutos. Si no ves el cambio, recarga sin caché (Ctrl+Shift+R o Cmd+Shift+R).

## Index

| Planta | Qué es |
|---|---|
| 01 · Ascensor | Las puertas de acero con el menú (Index, Gallery, *CURATED*Shopping, +More). Al bajar se abren, aparece Lucía y la cámara entra en el ascensor. En ordenador, el botón azul del panel también abre las puertas. |
| 02 · Bienvenida | La pared blanca con la letra a mano, la cinta «C B O · Creator Business Owner», su foto y una cartela con información rápida. La letra se escribe sola al llegar. |
| 03 · Sobre mí | Fondo azul y texto rojo: su trayectoria, la foto y «Lo que va a venir». El texto se ilumina a medida que se lee. |

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | El Index completo (HTML, CSS y JS en un solo archivo) |
| `gallery.html`, `curated-shopping.html`, `more.html` | Plantas 1, 2 y 3, de momento con aviso de «Muy pronto» |
| `assets/img/` | Ascensor sin texto, pared, capas de la letra a mano, cinta con foto y foto de Lucía |
| `assets/fonts/` | Google Sans (licencia SIL Open Font License) en woff2 |
| `preview.html` | Visor para revisar la web en escritorio, tablet y móvil |
| `v1/` | Primera propuesta, guardada como referencia |

## Tecnología

- HTML, CSS y JavaScript, sin framework ni compilación.
- GSAP 3.12.5 con ScrollTrigger (ascensor, letra a mano, texto) y Lenis 1.1.13 para el scroll suave en ordenador, por CDN.
- Respeta `prefers-reduced-motion`: sin animaciones, todo el contenido queda visible.

## Pendiente

- [ ] Fotos originales en alta resolución, sobre todo la de la camiseta de Nirvana y una vertical de Lucía para el ascensor.
- [ ] Contenido de Gallery, *CURATED*Shopping y +More.
- [ ] Aviso legal, privacidad y cookies.
- [ ] Dominio luciamorales.es.
- [ ] Quitar `<meta name="robots" content="noindex, nofollow">` de las páginas cuando la web esté lista para Google.

# Web CEO

Web personal de la CEO: un portfolio en 4 páginas (Inicio, Gallery, Mods y More) que lleva al público de Instagram hacia la lista de espera de la nueva marca de cosmética.

## Ver la web

- **Web:** https://toniolive.github.io/web-ceo/
- **Vista por dispositivos (escritorio, tablet y móvil):** https://toniolive.github.io/web-ceo/preview.html

Cada cambio que se sube a la rama `main` se publica solo en 1 o 2 minutos. Si no ves el cambio, recarga sin caché (Ctrl+Shift+R o Cmd+Shift+R).

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La web completa: HTML, CSS y JS en un solo archivo |
| `preview.html` | Visor para revisar la web en escritorio, tablet y móvil |
| `.nojekyll` | Hace que GitHub Pages sirva los archivos tal cual |

Las cuatro páginas están en el mismo archivo y se abren con `#inicio`, `#gallery`, `#mods` y `#more`.

## Tecnología

- HTML, CSS y JavaScript, sin framework ni proceso de compilación.
- Librerías por CDN: GSAP 3.12.5 (ScrollTrigger y Flip) y Lenis 1.1.13 para el scroll suave.
- Tipografías de Google Fonts: Bodoni Moda y Jost.
- Respeta `prefers-reduced-motion`. Si falla la CDN, la web sigue funcionando sin animaciones.

## Pendiente

- [ ] Sustituir los textos entre corchetes (`[MARCA]`, `[EMAIL]`…) y las ilustraciones por el contenido real.
- [ ] Conectar el formulario de la lista de espera a la herramienta de email. Ahora solo muestra la confirmación.
- [ ] Aviso legal, privacidad y cookies.
- [ ] Dominio propio.
- [ ] Quitar `<meta name="robots" content="noindex, nofollow">` de `index.html` cuando la web esté lista para Google.

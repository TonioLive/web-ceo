/* Transición de ascensor entre plantas. Ver assets/lift.css.
   Salida: cualquier enlace a Index, Gallery, CURATEDShopping o +More cierra el ascensor y guarda el viaje en sessionStorage.
   Llegada: el script del <head> (LIFT_HEAD) prepara las puertas antes del primer pintado; aquí solo se cuentan las plantas. */
(function () {
  'use strict';
  var d = document, h = d.documentElement, st = h.style;
  if (!d.querySelector('.lx')) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MAIN = { '': 0, 'index.html': 0, 'gallery.html': 1, 'curated-shopping.html': 2, 'more.html': 3 };
  var SUB = { 'hot-readers.html': 1, 'design-freaks.html': 1, 'melara-glow.html': 1 };
  function file(p) { return p.split('/').pop(); }
  function mainFloor(p) { var f = file(p); return f in MAIN ? MAIN[f] : null; }
  var hereMain = mainFloor(location.pathname);
  var here = hereMain !== null ? hereMain : (SUB[file(location.pathname)] || 0);
  function zoom() { return (Math.max(innerWidth / (innerHeight * 0.43166), 1.166) * 1.08).toFixed(3); }
  function arrow(f, t) { return t > f ? '"▲"' : t < f ? '"▼"' : 'none'; }
  function clean() { h.classList.remove('lx-in', 'lx-out', 'lx-home', 'lx-ding'); ['--lxd', '--lxz', '--lxn', '--lxa'].forEach(function (k) { st.removeProperty(k); }); }

  /* llegada: el indicador cuenta hasta la planta y suena el «ding» */
  var L = window.LM_LIFT;
  if (L && h.classList.contains('lx-in')) {
    /* los tiempos cuentan desde el script del <head>, que es cuando arrancan las animaciones CSS */
    var n = Math.abs(L.t - L.f), dir = L.t > L.f ? 1 : -1, el = (performance.now() - (L.t0 || performance.now())) / 1000;
    var at = function (sec, fn) { setTimeout(fn, Math.max(0, sec - el) * 1000); };
    for (var i = 1; i <= n; i++) (function (k) {
      at(0.1 + k * 0.2, function () { st.setProperty('--lxn', '"' + (L.f + dir * k) + '"'); });
    })(i);
    at(L.count - 0.05, function () { h.classList.add('lx-ding'); st.setProperty('--lxa', 'none'); });
    at(L.count + (L.home ? 0.7 : 1.5), clean);
  }

  /* salida */
  var busy = false;
  d.addEventListener('click', function (e) {
    if (busy || reduce || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    var u = new URL(a.href, location.href);
    if (u.origin !== location.origin) return;
    var to = mainFloor(u.pathname);
    if (to === null || u.pathname === location.pathname || (to === 0 && hereMain === 0)) return;
    var home = hereMain === 0 && window.pageYOffset < 8;
    try { sessionStorage.setItem('lm-lift', JSON.stringify({ f: here, t: to, p: u.pathname, ts: Date.now() })); } catch (err) { return; }
    e.preventDefault(); busy = true;
    clean();
    st.setProperty('--lxz', zoom()); st.setProperty('--lxn', '"' + here + '"'); st.setProperty('--lxa', arrow(here, to));
    h.classList.add('lx-out'); if (home) h.classList.add('lx-home');
    setTimeout(function () { location.href = u.href; }, home ? 420 : 900);
  });
  /* volver atrás con la caché del navegador: la página no debe quedarse con las puertas cerradas */
  window.addEventListener('pageshow', function (e) { if (e.persisted) { clean(); busy = false; } });
})();

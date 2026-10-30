/* Base compartida de las páginas interiores: scroll suave, barra por secciones, menú de puertas,
   avisos y revelado al hacer scroll. Expone window.LM para el código propio de cada página. */
(function () {
  'use strict';
  var d = document, html = d.documentElement;
  var $ = function (s, r) { return (r || d).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); };
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  var G = window.gsap, ST = window.ScrollTrigger;
  var motion = !!(G && ST) && !reduce;
  if (G && ST) { G.registerPlugin(ST); ST.config({ ignoreMobileResize: true }); }

  var lenis = null;
  if (motion && fine && window.Lenis) {
    try {
      lenis = new window.Lenis({ lerp: 0.09, smoothWheel: true });
      lenis.on('scroll', ST.update);
      G.ticker.add(function (t) { lenis.raf(t * 1000); });
      G.ticker.lagSmoothing(0);
    } catch (e) { lenis = null; }
  }
  function scrollToY(y) {
    if (lenis) lenis.scrollTo(y, { duration: 1.4 });
    else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  }

  /* barra: color según la sección que tiene debajo; se esconde al bajar y vuelve al subir */
  var bar = $('.bar'), themed = $$('[data-theme]').filter(function (el) { return el !== bar; }), lastY = 0;
  function onScroll() {
    var y = window.pageYOffset, theme = 'light';
    for (var i = 0; i < themed.length; i++) {
      var r = themed[i].getBoundingClientRect();
      if (r.top <= 40 && r.bottom > 40) { theme = themed[i].getAttribute('data-theme'); break; }
    }
    bar.setAttribute('data-theme', theme);
    if (!html.classList.contains('sheet-open')) {
      if (y > 240 && y > lastY + 4) bar.classList.add('is-hidden');
      else if (y < lastY - 4 || y < 240) bar.classList.remove('is-hidden');
    }
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  /* menú a pantalla completa */
  var sheet = $('#sheet'), menuBtn = $('.bar__menu');
  function openSheet() {
    sheet.removeAttribute('inert'); sheet.classList.add('is-open'); html.classList.add('sheet-open');
    menuBtn.setAttribute('aria-expanded', 'true'); bar.classList.remove('is-hidden'); if (lenis) lenis.stop();
    setTimeout(function () { $('.sheet__close').focus(); }, 600);
  }
  function closeSheet() {
    if (!sheet.classList.contains('is-open')) return;
    sheet.classList.remove('is-open'); sheet.setAttribute('inert', ''); html.classList.remove('sheet-open');
    menuBtn.setAttribute('aria-expanded', 'false'); if (lenis) lenis.start();
  }
  if (menuBtn && sheet) {
    menuBtn.addEventListener('click', openSheet);
    $('.sheet__close').addEventListener('click', function () { closeSheet(); menuBtn.focus(); });
    d.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSheet(); });
  }

  /* anclas internas con scroll suave */
  d.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var el = d.getElementById(a.getAttribute('href').slice(1));
    if (!el) return;
    e.preventDefault(); closeSheet();
    scrollToY(el.getBoundingClientRect().top + window.pageYOffset - 64);
  });

  /* avisos */
  var toastEl = $('.toast'), tt;
  function toast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg; toastEl.classList.add('is-on');
    clearTimeout(tt); tt = setTimeout(function () { toastEl.classList.remove('is-on'); }, 2600);
  }
  $$('[data-toast]').forEach(function (b) { b.addEventListener('click', function () { toast(b.getAttribute('data-toast')); }); });

  /* revelado: [data-reveal] sube y aparece; [data-reveal-group] escalona a sus hijos */
  function reveal() {
    if (!motion) return;
    var vh = window.innerHeight;
    $$('[data-reveal]').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh * 0.9) return;
      G.set(el, { autoAlpha: 0, y: 40 });
      ST.create({ trigger: el, start: 'top 90%', once: true, onEnter: function () { G.to(el, { autoAlpha: 1, y: 0, duration: 1.1, ease: 'power3.out' }); } });
    });
    $$('[data-reveal-group]').forEach(function (grp) {
      var kids = Array.prototype.slice.call(grp.children);
      if (grp.getBoundingClientRect().top < vh * 0.9) return;
      G.set(kids, { autoAlpha: 0, y: 50 });
      ST.batch(kids, { start: 'top 92%', once: true, onEnter: function (batch) { G.to(batch, { autoAlpha: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.09 }); } });
    });
  }

  onScroll();
  window.LM = { $: $, $$: $$, G: G, ST: ST, motion: motion, fine: fine, reduce: reduce, lenis: lenis, scrollToY: scrollToY, toast: toast };
  if (d.readyState === 'loading') d.addEventListener('DOMContentLoaded', reveal); else reveal();
  window.addEventListener('load', function () { if (ST) ST.refresh(); });
})();

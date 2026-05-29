/**
 * FlexFlix.ai — JS
 * Sin animaciones de scroll que oculten elementos.
 * Solo: nav, hero, micro-interacciones, carousel.
 */
"use strict";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ── SMOOTH SCROLL ─────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (!t) return;
    e.preventDefault();
    gsap.to(window, { scrollTo: { y: t, offsetY: 72 }, duration: 1.2, ease: "power4.inOut" });
  });
});

// ── NAV ───────────────────────────────────────────────────────
const nav = document.getElementById("nav");
if (nav) {
  ScrollTrigger.create({
    start: 80,
    onEnter:     () => nav.classList.add("scrolled"),
    onLeaveBack: () => nav.classList.remove("scrolled"),
  });

  const links = document.querySelectorAll(".nav__link");
  if (links.length) {
    const sty = document.createElement("style");
    sty.textContent = `.nav__link.active{color:var(--text-1);background:var(--border);}`;
    document.head.appendChild(sty);

    document.querySelectorAll("section[id]").forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec, start: "top 60%", end: "bottom 40%",
        onEnter:     () => links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + sec.id)),
        onEnterBack: () => links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + sec.id)),
      });
    });
  }
}

// ── MOBILE MENU ───────────────────────────────────────────────
const btn  = document.getElementById("hamburger");
const menu = document.getElementById("mobile-menu");
if (btn && menu) {
  btn.addEventListener("click", () => {
    const open = menu.classList.contains("open");
    menu.classList.toggle("open", !open);
    btn.classList.toggle("active", !open);
    btn.setAttribute("aria-expanded", String(!open));
    menu.setAttribute("aria-hidden", String(open));
    document.body.style.overflow = open ? "" : "hidden";
    if (!open) {
      gsap.from(menu.querySelectorAll(".mobile-link"),
        { opacity: 0, y: 10, duration: 0.4, stagger: 0.06, ease: "power3.out", delay: 0.08 }
      );
    }
  });
  menu.querySelectorAll(".mobile-link").forEach((l) => l.addEventListener("click", () => {
    menu.classList.remove("open"); btn.classList.remove("active");
    btn.setAttribute("aria-expanded", "false"); menu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }));
}

// ── SCROLL PROGRESS ───────────────────────────────────────────
const bar = document.getElementById("scroll-progress");
if (bar) {
  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate: (s) => { bar.style.width = s.progress * 100 + "%"; },
  });
}


// ── HERO — animación al cargar ────────────────────────────────
(function () {
  const label = document.querySelector(".fx-depth__label");
  const title = document.querySelector(".fx-depth__title");
  const desc  = document.querySelector(".fx-depth__desc");
  const cta   = document.querySelector(".fx-depth__cta");
  if (!title) return;

  const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "expo.out" } });
  if (label) tl.from(label, { opacity: 0, x: -18, duration: 0.5, ease: "power3.out" });
  tl.from(title, { opacity: 0, y: 40, duration: 1.0 }, label ? "-=0.1" : 0);
  if (desc)  tl.fromTo(desc,  { opacity: 0, filter: "blur(8px)", y: 18 }, { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.75, ease: "power3.out" }, "-=0.5");
  if (cta)   tl.from(cta,  { opacity: 0, scale: 0.88, y: 16, duration: 0.5, ease: "back.out(1.4)" }, "-=0.3");
})();

// ── MICRO-INTERACCIONES ───────────────────────────────────────
if (window.matchMedia("(hover: hover) and (min-width: 900px)").matches) {

  // Tilt 3D en cards
  document.querySelectorAll(".caso-card, .conv-card, .sol-card, .idca-card, .pq-card, .paccc-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      gsap.to(card, {
        rotateY: ((e.clientX - r.left) / r.width  - 0.5) * 6,
        rotateX: -((e.clientY - r.top)  / r.height - 0.5) * 6,
        transformPerspective: 900, duration: 0.3, ease: "power2.out",
      });
    });
    card.addEventListener("mouseleave", () =>
      gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: "elastic.out(1,0.5)" })
    );
  });

  // Magnético en CTAs
  document.querySelectorAll(".conv-btn, .fx-depth__cta").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect();
      gsap.to(btn, {
        x: (e.clientX - (r.left + r.width  / 2)) * 0.25,
        y: (e.clientY - (r.top  + r.height / 2)) * 0.25,
        duration: 0.3, ease: "power2.out",
      });
    });
    btn.addEventListener("mouseleave", () =>
      gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.5)" })
    );
  });
}

// Watermark letter en PACCC hover
document.querySelectorAll(".paccc-card").forEach((card) => {
  const letter = card.querySelector(".pc-letter");
  if (!letter) return;
  card.addEventListener("mouseenter", () => gsap.to(letter, { opacity: 0.18, scale: 1.08, duration: 0.3 }));
  card.addEventListener("mouseleave", () => gsap.to(letter, { opacity: 0.10, scale: 1,    duration: 0.5, ease: "back.out(1.4)" }));
});

// Arq-row: número escala en hover
document.querySelectorAll(".arq-row").forEach((row) => {
  const num = row.querySelector(".arq-num");
  if (!num) return;
  row.addEventListener("mouseenter", () => gsap.to(num, { scale: 1.12, duration: 0.25, ease: "power2.out" }));
  row.addEventListener("mouseleave", () => gsap.to(num, { scale: 1,    duration: 0.5,  ease: "back.out(1.4)" }));
});

// Nav links
document.querySelectorAll(".nav__link").forEach((l) => {
  l.addEventListener("mouseenter", () => gsap.to(l, { y: -2, duration: 0.25 }));
  l.addEventListener("mouseleave", () => gsap.to(l, { y:  0, duration: 0.4, ease: "back.out(1.4)" }));
});

// ── CASOS MOBILE CAROUSEL ────────────────────────────────────
(function () {
  const fan   = document.getElementById("casosFan");
  const prev  = document.getElementById("casosPrev");
  const next  = document.getElementById("casosNext");
  const dotsW = document.getElementById("casosDots");
  if (!fan || !prev || !next) return;

  const cards = Array.from(fan.querySelectorAll(".caso-card"));
  let current = 3; // Mendoza (índice 3, centro)

  // Crear dots
  const dots = cards.map((_, i) => {
    const d = document.createElement("span");
    d.className = "casos-dot" + (i === current ? " active" : "");
    dotsW.appendChild(d);
    return d;
  });

  function isMobile() { return window.innerWidth <= 768; }

  function update() {
    if (!isMobile()) return;
    const prevIdx  = (current - 1 + cards.length) % cards.length;
    const prev2Idx = (current - 2 + cards.length) % cards.length;
    const nextIdx  = (current + 1) % cards.length;
    const next2Idx = (current + 2) % cards.length;
    cards.forEach((c, i) => {
      c.classList.toggle("mob-active",  i === current);
      c.classList.toggle("mob-prev",    i === prevIdx);
      c.classList.toggle("mob-prev-2",  i === prev2Idx && i !== current);
      c.classList.toggle("mob-next",    i === nextIdx);
      c.classList.toggle("mob-next-2",  i === next2Idx && i !== current);
    });
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  prev.addEventListener("click", () => {
    current = (current - 1 + cards.length) % cards.length;
    update();
  });
  next.addEventListener("click", () => {
    current = (current + 1) % cards.length;
    update();
  });

  // Swipe touch
  let startX = 0;
  fan.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  fan.addEventListener("touchend",   (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) < 40) return;
    dx < 0 ? next.click() : prev.click();
  });

  window.addEventListener("resize", update);
  update();
})();

// ── REFRESH ───────────────────────────────────────────────────
window.addEventListener("load", () => ScrollTrigger.refresh());

// ── ACORDEÓN ARQUITECTURA — cierra el anterior al abrir uno nuevo ──
(function () {
  const rows = document.querySelectorAll(".arq-accordion details.arq-row");
  rows.forEach((row) => {
    row.addEventListener("toggle", () => {
      if (!row.open) return;
      rows.forEach((other) => { if (other !== row) other.open = false; });
    });
  });
})();

// ── PACCC TABS ────────────────────────────────────────────────
(function () {
  var cards   = document.querySelectorAll(".paccc-card[data-paccc]");
  var details = document.querySelectorAll(".paccc-detail[data-detail]");
  if (!cards.length || !details.length) return;

  function activate(n) {
    var current = document.querySelector(".paccc-detail.is-active");
    var next    = document.querySelector('.paccc-detail[data-detail="' + n + '"]');
    if (!next || next === current) return;

    // Swap cards active state
    cards.forEach(function (c) { c.classList.toggle("is-active", c.dataset.paccc === n); });

    // GSAP crossfade
    var tl = gsap.timeline();
    if (current) {
      tl.to(current, { opacity: 0, y: -8, duration: 0.18, ease: "power2.in",
        onComplete: function () { current.classList.remove("is-active"); current.style.cssText = ""; }
      });
    }
    tl.call(function () {
      next.style.opacity = "0";
      next.style.transform = "translateY(10px)";
      next.classList.add("is-active");
    });
    tl.to(next, { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" });
  }

  cards.forEach(function (card) {
    card.addEventListener("click", function () { activate(card.dataset.paccc); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(card.dataset.paccc); }
    });
  });
})();

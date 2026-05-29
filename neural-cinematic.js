(function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  var hero       = document.querySelector(".fx-depth");
  var video      = document.querySelector(".fx-depth__video--desk");
  var neuron     = document.querySelector(".fx-depth__neuron:not(.fx-depth__neuron--tl)");
  var neuronTL   = document.querySelector(".fx-depth__neuron--tl");
  var neuronBlur = document.querySelector(".fx-depth__neuron-blur");
  var content    = document.querySelector(".fx-depth__content");

  if (!hero || !video || !neuron || !neuronBlur || !content) return;

  var mm = gsap.matchMedia();

  mm.add("(min-width: 1025px)", function () {
    var st = {
      trigger: hero,
      start: "top top",
      end: "bottom bottom",
      scrub: 1.6,
      invalidateOnRefresh: true,
    };

    gsap.fromTo(video,
      { scale: 1.0, transformOrigin: "center center" },
      { scale: 1.18, ease: "none", scrollTrigger: st }
    );

    gsap.fromTo(neuron,
      { scale: 1.0, rotation: -4, transformOrigin: "center center" },
      { scale: 1.48, rotation: 4, ease: "none", scrollTrigger: st }
    );

    if (neuronTL) {
      gsap.fromTo(neuronTL,
        { scale: 1.0, rotation: -4, transformOrigin: "center center" },
        { scale: 1.22, rotation: 4, ease: "none", scrollTrigger: st }
      );
    }

    gsap.fromTo(neuronBlur,
      { scale: 1.0, rotation: -2, transformOrigin: "center center" },
      { scale: 1.4, rotation: 2, ease: "none", scrollTrigger: st }
    );

    gsap.fromTo(content,
      { y: 0 },
      { y: -30, ease: "none", scrollTrigger: st }
    );
  });

  window.addEventListener("load", function () {
    setTimeout(function () { ScrollTrigger.refresh(); }, 200);
  });

})();


/* ── Neural background parallax ── */
(function () {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  var ST_BASE = {
    trigger: document.documentElement,
    start: "top top",
    end: "bottom bottom",
    scrub: 3,             /* inercia suave */
    invalidateOnRefresh: true,
  };

  /* Neuronas izquierda */
  var left = [
    { sel: ".nb-l1", y: -420, rot:  18 },
    { sel: ".nb-l2", y: -230, rot: -11 },
    { sel: ".nb-l3", y: -560, rot:  28 },
  ];

  /* Neuronas derecha — espejadas en X */
  var right = [
    { sel: ".nb-r1", y: -310, rot: -15 },
    { sel: ".nb-r2", y: -480, rot:   10 },
    { sel: ".nb-r3", y: -170, rot: -24 },
  ];

  right.forEach(function (n) {
    var el = document.querySelector(n.sel);
    if (el) gsap.set(el, { scaleX: -1 });
  });

  left.concat(right).forEach(function (n) {
    var el = document.querySelector(n.sel);
    if (!el) return;
    var isRight = n.sel.indexOf(".nb-r") === 0;
    gsap.fromTo(el,
      { y: 0,   rotation: 0,   scaleX: isRight ? -1 : 1 },
      { y: n.y, rotation: n.rot, scaleX: isRight ? -1 : 1,
        ease: "none",   /* lineal: movimiento continuo en toda la página; la inercia la da scrub */
        scrollTrigger: Object.assign({}, ST_BASE) }
    );
  });

  /* ── Plano trasero — más lento que las neuronas → sensación de profundidad ── */
  var backR = document.querySelector(".nb-back--r");
  if (backR) gsap.set(backR, { scaleX: -1 });

  document.querySelectorAll(".nb-back").forEach(function (el) {
    var isR = el.classList.contains("nb-back--r");
    gsap.fromTo(el,
      { y: 0,    scaleX: isR ? -1 : 1 },
      { y: -160, scaleX: isR ? -1 : 1,
        ease: "none",
        scrollTrigger: Object.assign({}, ST_BASE, { scrub: 4.5 }) }
    );
  });

  /* ── Textura — velocidad lenta para capa extra de profundidad ── */
  var tex = document.querySelector(".nb-texture");
  if (tex) {
    gsap.fromTo(tex,
      { y: 0 },
      { y: -120, ease: "none",
        scrollTrigger: Object.assign({}, ST_BASE, { scrub: 5 }) }
    );
  }

})();

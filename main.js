(function () {
  "use strict";

  var root = document.documentElement;
  document.getElementById("year").textContent = new Date().getFullYear();
  var reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // =========================================================
  // i18n — French is authored in index.html, English lives here.
  // =========================================================
  var EN = {
    "skip": "Skip to content",
    "nav.about": "About",
    "nav.exp": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.certs": "Certifications",
    "nav.contact": "Contact",

    "hero.status": "Available — open to opportunities",
    "hero.hello": "Software engineer.",
    "hero.build": "I build",
    "hero.w1": "SaaS platforms",
    "hero.w2": "AI agents",
    "hero.w3": "secure APIs",
    "hero.w4": "microservices",
    "hero.lead": "Full-Stack &amp; AI — Java / Spring Boot, Python, Angular and React. I design secure, maintainable applications and integrate LLMs and AI agents into them.",
    "hero.cta1": "View my work",
    "hero.cta2": "Download résumé",
    "code.role": "\"Software Engineer\"",

    "st.1": "Industry internships",
    "st.2": "Oracle certifications",
    "st.3": "Projects delivered",
    "st.4": "Engineering degree",

    "ab.title": "Software engineer, Full-Stack &amp; AI.",
    "ab.p1": "Software engineer specialized in software development, with strong skills in <strong>Java / Spring Boot</strong>, <strong>REST APIs</strong> and relational databases.",
    "ab.p2": "Experienced in designing <strong>secure and maintainable</strong> applications, with a focus on code quality and sound architecture practices.",
    "ab.more": "See my experience",
    "ab.f1t": "Backend &amp; secure APIs",
    "ab.f1d": "Java, Spring Boot, REST APIs, Spring Security, OAuth 2.0, JWT.",
    "ab.f2t": "Applied AI",
    "ab.f2d": "LLM and AI agent integration, RAG and vector search.",
    "ab.f3t": "Full-Stack &amp; DevOps",
    "ab.f3d": "Angular, React, Next.js, Docker, CI/CD with GitHub Actions.",
    "exp.cv": "View full résumé",
    "pj.more": "See all my repositories on GitHub",
    "exp.title": "Professional experience",
    "tag.intern": "Internship",
    "e1.role": "Full-Stack &amp; AI Engineer",
    "e1.1": "Re-architected a single-client MVP into a <strong>multi-tenant B2B SaaS</strong> pricing platform augmented by AI.",
    "e1.2": "Built backend services and a <strong>data processing pipeline</strong> feeding a pricing model and surfacing its results for analysis.",
    "e1.3": "Integrated <strong>LLMs and AI agents</strong> across multiple providers and frameworks, including a <strong>BYOK</strong> (Bring Your Own Key) mode.",
    "e1.4": "Applied SOLID and DRY principles with a strong focus on security and maintainability.",
    "e2.role": "Full-Stack Engineer",
    "e2.1": "Designed and built an <strong>AI-assisted recruitment platform</strong> matching candidates with job offers.",
    "e2.2": "Developed and integrated REST APIs and third-party services, documented with Swagger.",
    "e2.3": "Secured the application with <strong>Spring Security, OAuth 2.0 and JWT</strong>.",
    "e3.role": "Cloud Security Consultant",
    "e3.1": "Assessed and strengthened the <strong>identity security posture</strong> of a Microsoft Entra environment.",
    "e3.2": "Configured IAM mechanisms, security policies and incident response.",
    "e4.role": "Full-Stack Developer",
    "e4.1": "Optimized the portfolio of a <strong>SaaS aimed at optimizing delivery services</strong>.",
    "e4.2": "Built an <strong>admin space</strong> for managing users, roles and permissions and delivery companies, and approving account creation requests.",

    "pj.title": "Selected work",
    "pj.sub": "A selection of work: context, contributions and technologies.",




    "pr.pricing.domain": "B2B SaaS · AI",
    "pr.pricing.title": "AI-Augmented Pricing Platform",
    "pr.pricing.lead": "A pricing platform integrating AI capabilities, market analysis and scenario simulation.",
    "pr.pricing.b1": "Re-architected a single-client MVP into a multi-tenant B2B SaaS platform.",
    "pr.pricing.b2": "Data processing pipeline preparing pricing-model inputs and surfacing its results.",
    "pr.pricing.b3": "Integrated multi-provider LLMs and AI agents, with a BYOK mode.",
    "pr.pricing.b4": "UI/UX design, logo and visual identity, then implementation of the interfaces.",
    "pr.pricing.ctx": "OCP Solutions · Internship",
    "pr.matching.domain": "AI · Microservices",
    "pr.matching.title": "CV – Job Offer Matching Platform",
    "pr.matching.lead": "An intelligent matching engine between résumés and job offers, built on a microservices architecture.",
    "pr.matching.b1": "Developed Java / Python backend services.",
    "pr.matching.b2": "Set up a CI/CD pipeline with Docker containerization.",
    "pr.matching.ctx": "Academic project",
    "pr.finance.domain": "AI · RAG",
    "pr.finance.title": "Financial Knowledge &amp; Analysis Platform",
    "pr.finance.lead": "A platform to centralize, search and analyze information from structured financial data and business documents.",
    "pr.finance.b1": "RAG assistant querying financial documentation in natural language, with contextualized answers and sources.",
    "pr.finance.b2": "Data modeling and processing on Oracle Database, with vector search.",
    "pr.finance.b3": "Backend API development.",
    "pr.finance.ctx": "Academic project",
    "pr.elearning.domain": "Full-stack · Security",
    "pr.elearning.title": "Secure E-Learning Platform",
    "pr.elearning.lead": "Designed and developed an e-learning platform with multi-role management, real-time messaging and Power BI reporting.",
    "pr.elearning.b1": "Multi-role management and real-time messaging.",
    "pr.elearning.b2": "Power BI reporting.",
    "pr.elearning.b3": "Advanced security: 2FA and SSPR (Self-Service Password Reset).",
    "pr.elearning.ctx": "Academic project",
    "pr.cra.domain": "Business application",
    "pr.cra.title": "Activity Report (CRA) Platform",
    "pr.cra.lead": "A web application for managing activity reports, with two distinct spaces: Admin and Employee.",
    "pr.cra.b1": "Admin: employee, mission and assignment management, report approval.",
    "pr.cra.b2": "Employee: report entry and submission.",
    "pr.cra.b3": "JWT authentication and API documented with Swagger / OpenAPI.",
    "pr.databridge.domain": "Data · XML",
    "pr.databridge.title": "DataBridge",
    "pr.databridge.lead": "A web application for validating and converting XML files.",
    "pr.databridge.b1": "XML validation against a DTD or an XSD schema.",
    "pr.databridge.b2": "XML → JSON conversion.",
    "pr.databridge.b3": "DTD → XSD conversion.",
    "pr.live": "Live",
    "pr.conf": "Confidential",
    "pr.lnk.code": "Source code",
    "pr.lnk.video": "Video demo",
    "pr.lnk.live": "Live demo",

    "sk.title": "Technical expertise",
    "sk.ai": "AI, LLMs &amp; agents",
    "sk.vector": "Vector search",
    "sk.sec": "Security",
    "sk.db": "Databases",
    "sk.front": "Frontend &amp; quality",

    "ce.title": "Certifications &amp; education",
    "ed.1t": "State Engineering Degree — Computer Science",
    "ed.1d": "École Nationale Supérieure des Mines de Rabat",
    "ed.2t": "Master's — Information Systems Engineering",
    "ed.2d": "Faculty of Sciences Semlalia",
    "ed.3t": "Bachelor's — Computer Science",
    "ed.3d": "Faculty of Sciences and Techniques",
    "lg.title": "Languages",
    "lg.ar": "Arabic",
    "lg.fr": "French",
    "lg.en": "English",
    "lg.native": "Native",
    "lg.fluent": "Fluent",
    "lg.inter": "Intermediate",

    "ct.title": "Let's build something solid.",
    "ct.sub": "Open to full-stack and AI software engineering roles.",
    "ct.copy": "Copy",
    "ft.made": "Designed and built by me.",
    "ft.top": "Back to top"
  };
  var UI = {
    fr: { copied: "Adresse copiée ✓", cv: "assets/CV_Majda_Ablaoui_FR.pdf", title: "Majda Ablaoui — Ingénieure Logiciel · Full-Stack & IA" },
    en: { copied: "Email copied ✓", cv: "assets/CV_Majda_Ablaoui_EN.pdf", title: "Majda Ablaoui — Software Engineer · Full-Stack & AI" }
  };

  var i18nNodes = document.querySelectorAll("[data-i18n]");
  var FR = {};
  i18nNodes.forEach(function (el) { FR[el.dataset.i18n] = el.innerHTML; });
  var lang = root.lang === "en" ? "en" : "fr";

  function applyLang(l) {
    var dict = l === "en" ? EN : FR;
    i18nNodes.forEach(function (el) {
      var v = dict[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    root.lang = l;
    document.title = UI[l].title;
    document.querySelectorAll("#cv-link, .cv-link").forEach(function (a) { a.href = UI[l].cv; });
    document.querySelectorAll(".seg button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === l));
    });
    lang = l;
  }

  function setLang(l) {
    if (l === lang) return;
    localStorage.setItem("lang", l);
    if (reduceMotion) return applyLang(l);
    document.body.classList.add("lang-swap");
    setTimeout(function () {
      applyLang(l);
      document.body.classList.remove("lang-swap");
    }, 180);
  }

  if (lang === "en") applyLang("en");
  document.querySelectorAll(".seg button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  // =========================================================
  // Theme — circular reveal from the toggle (View Transitions)
  // =========================================================
  var themeBtn = document.getElementById("theme-toggle");
  themeBtn.addEventListener("click", function (e) {
    var next = root.dataset.theme === "dark" ? "light" : "dark";
    var swap = function () { root.dataset.theme = next; localStorage.setItem("theme", next); };
    if (!document.startViewTransition || reduceMotion) return swap();

    var r = themeBtn.getBoundingClientRect();
    var x = r.left + r.width / 2, y = r.top + r.height / 2;
    var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(swap).ready.then(function () {
      root.animate(
        { clipPath: ["circle(0px at " + x + "px " + y + "px)", "circle(" + radius + "px at " + x + "px " + y + "px)"] },
        { duration: 650, easing: "cubic-bezier(.22,1,.36,1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  });

  // =========================================================
  // Mobile menu
  // =========================================================
  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menu-toggle");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // =========================================================
  // Hero: entrance, rotating words, code card
  // =========================================================
  requestAnimationFrame(function () { document.body.classList.add("loaded"); });

  var words = document.querySelectorAll(".rot-word");
  var wi = 0;
  if (!reduceMotion && words.length > 1) {
    setInterval(function () {
      var cur = words[wi];
      wi = (wi + 1) % words.length;
      cur.classList.remove("is-active");
      cur.classList.add("is-leaving");
      words[wi].classList.add("is-active");
      setTimeout(function () { cur.classList.remove("is-leaving"); }, 700);
    }, 2600);
  }

  var codeCard = document.querySelector(".code-card");
  codeCard.querySelectorAll(".ln").forEach(function (ln, i) { ln.style.setProperty("--i", i); });
  setTimeout(function () { codeCard.classList.add("typed"); }, 150);

  var finePointer = matchMedia("(pointer: fine)").matches;
  if (finePointer && !reduceMotion) {
    codeCard.addEventListener("mousemove", function (e) {
      var r = codeCard.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      codeCard.style.setProperty("--ry", (px * 8).toFixed(2) + "deg");
      codeCard.style.setProperty("--rx", (-py * 8).toFixed(2) + "deg");
    });
    codeCard.addEventListener("mouseleave", function () {
      codeCard.style.setProperty("--rx", "0deg");
      codeCard.style.setProperty("--ry", "0deg");
    });
  }

  // =========================================================
  // Cursor spotlight + card border glow
  // =========================================================
  if (finePointer && !reduceMotion) {
    document.body.classList.add("has-pointer");
    var spot = document.querySelector(".spotlight");
    window.addEventListener("pointermove", function (e) {
      spot.style.setProperty("--mx", e.clientX + "px");
      spot.style.setProperty("--my", e.clientY + "px");
    }, { passive: true });

    document.querySelectorAll(".tl-card, .project, .skill, .cert").forEach(function (c) {
      c.classList.add("glow-card");
      c.addEventListener("pointermove", function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty("--cx", (e.clientX - r.left) + "px");
        c.style.setProperty("--cy", (e.clientY - r.top) + "px");
      });
    });
  }

  // =========================================================
  // Scroll: header, progress bar, timeline line
  // =========================================================
  var header = document.querySelector(".site-header");
  var progress = document.querySelector(".progress");
  var timeline = document.querySelector(".timeline");
  var ticking = false;

  function onScroll() {
    var y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle("scrolled", y > 10);
    progress.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);
    var r = timeline.getBoundingClientRect();
    var t = (innerHeight * 0.6 - r.top) / r.height;
    timeline.style.setProperty("--tl", Math.min(1, Math.max(0, t)).toFixed(3));
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  // =========================================================
  // Reveal on scroll (staggered per group) + counters + nav spy
  // =========================================================
  function countUp(el) {
    var target = +el.dataset.count;
    if (el.hasAttribute("data-fast") || reduceMotion) { el.textContent = target; return; }
    var start = performance.now(), dur = 1400;
    (function step(now) {
      var p = Math.min(1, (now - start) / dur);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }

  var revealEls = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
    document.querySelectorAll("[data-count]").forEach(countUp);
    return;
  }

  // Stagger siblings that share a parent
  revealEls.forEach(function (el) {
    var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) { return c.hasAttribute("data-reveal"); });
    var idx = sibs.indexOf(el);
    if (idx > 0) el.style.setProperty("--rd", Math.min(idx, 5) * 90 + "ms");
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(e.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach(function (el) { io.observe(el); });

  var links = document.querySelectorAll(".nav a");
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

  // =========================================================
  // Copy email
  // =========================================================
  var toast = document.querySelector(".toast"), toastTimer;
  document.getElementById("copy-email").addEventListener("click", function () {
    var email = this.dataset.email;
    (navigator.clipboard ? navigator.clipboard.writeText(email) : Promise.reject()).then(function () {
      toast.textContent = UI[lang].copied;
      toast.classList.add("show");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2000);
    }, function () { location.href = "mailto:" + email; });
  });

})();

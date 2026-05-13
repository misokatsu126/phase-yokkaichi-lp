const refinementFonts = "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Orbitron:wght@600;700&family=Rajdhani:wght@500;600;700&family=Zen+Kaku+Gothic+New:wght@500;700;900&display=swap";

if (!document.querySelector(`link[href="${refinementFonts}"]`)) {
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = refinementFonts;
  document.head.append(fontLink);
}

const refinementStyle = document.createElement("style");
refinementStyle.textContent = `
:root {
  --font-jp: "Noto Sans JP", "BIZ UDPGothic", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-heading: "Zen Kaku Gothic New", "Noto Sans JP", "BIZ UDPGothic", system-ui, sans-serif;
  --font-ui: "Rajdhani", "Noto Sans JP", system-ui, sans-serif;
  --section-space: clamp(82px, 9vw, 116px);
  --panel-space: clamp(24px, 3vw, 34px);
  --card-space: clamp(22px, 2.4vw, 30px);
}

body {
  font-family: var(--font-jp);
  font-weight: 500;
  line-height: 1.72;
  text-rendering: optimizeLegibility;
}

.section {
  padding-block: var(--section-space);
}

.nav-cta,
.button {
  padding: 13px 20px;
  font-family: var(--font-heading);
}

.eyebrow {
  margin-bottom: 10px;
  font-family: var(--font-ui);
  font-size: clamp(0.78rem, 0.82vw, 0.88rem);
  font-weight: 700;
  letter-spacing: 0;
}

h1,
h2,
h3 {
  font-family: var(--font-heading);
  line-height: 1.22;
}

h1 {
  line-height: 1.14;
}

h2 {
  font-size: clamp(1.95rem, 4vw, 3.15rem);
  font-weight: 900;
}

h3 {
  font-weight: 900;
  line-height: 1.28;
}

.hero-actions,
.button-row {
  gap: 14px;
  margin-top: 30px;
}

.quick-facts {
  gap: 14px;
  margin-top: 34px;
}

.quick-facts div {
  min-height: 106px;
  padding: 18px 16px 16px;
}

.quick-facts dt,
.shop-brief-grid span,
.hours-head span,
.event-date,
.brand-mini-panels span,
.hero-stage::after,
.media-panel figcaption,
.buy-grid .info-card h3::before {
  font-family: var(--font-ui);
  font-weight: 700;
  letter-spacing: 0;
}

.quick-facts dt {
  font-size: 0.78rem;
}

.quick-facts dd {
  margin-top: 7px;
  font-family: var(--font-ui);
  font-weight: 700;
}

.section-heading {
  margin-bottom: clamp(34px, 4vw, 46px);
}

.section-heading p:not(.eyebrow) {
  line-height: 1.72;
}

.section-heading .eyebrow + h2,
.shop-info .eyebrow + h2,
.x-copy .eyebrow + h2,
.shop-brief .eyebrow + h2,
.section-blue .eyebrow + h2 {
  margin-top: 8px;
}

.section-heading-split {
  align-items: start;
  gap: clamp(28px, 4vw, 42px);
}

.feature-grid,
.buy-grid,
.title-grid {
  gap: clamp(20px, 2.6vw, 28px);
}

.event-board {
  gap: clamp(18px, 2.4vw, 24px);
}

.feature-card,
.info-card,
.event-card,
.title-grid article {
  padding: var(--card-space);
}

.feature-card p,
.info-card p,
.event-card p {
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.68;
}

.feature-section .section-heading,
.buy-section .section-heading,
.visual-section > div:last-child,
.shop-info,
.x-copy {
  padding: var(--panel-space);
}

.feature-section .section-heading::after,
.buy-section .section-heading::after,
.visual-section > div:last-child::after,
.shop-info::after,
.x-copy::after {
  top: 18px;
  right: 20px;
}

.shop-brief {
  padding-block: clamp(64px, 7vw, 92px);
}

.shop-brief-inner {
  gap: clamp(26px, 4vw, 48px);
}

.shop-brief-lead {
  padding: var(--panel-space);
}

.shop-brief p {
  line-height: 1.72;
}

.shop-brief-actions {
  gap: 14px;
  margin-top: 26px;
}

.shop-brief-grid {
  gap: 14px;
}

.shop-brief-grid article {
  min-height: 108px;
  padding: 18px;
}

.shop-brief-grid strong {
  margin-top: 8px;
  line-height: 1.42;
}

.hours-panel {
  padding: 20px;
}

.hours-head {
  margin-bottom: 16px;
}

.shop-section {
  gap: clamp(34px, 5vw, 70px);
  align-items: stretch;
}

.info-list {
  display: grid;
  gap: 10px;
  margin: clamp(26px, 3vw, 34px) 0 0;
  border-top: 0;
}

.info-list div {
  grid-template-columns: minmax(96px, 128px) minmax(0, 1fr);
  align-items: start;
  gap: 14px;
  padding: 14px 16px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.035)), rgba(1, 9, 31, 0.18);
  border: 1px solid rgba(218, 248, 255, 0.14);
  clip-path: polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%);
}

.info-list dt {
  font-family: var(--font-heading);
  font-size: 0.84rem;
  font-weight: 900;
  line-height: 1.5;
}

.info-list dd {
  font-size: 0.96rem;
  line-height: 1.68;
}

.section-photo {
  gap: clamp(32px, 5vw, 68px);
}

.mini-gallery {
  gap: 16px;
  margin-top: 26px;
}

.brand-mini-panels article {
  min-height: 140px;
  padding: 20px;
}

.brand-mini-panels strong {
  margin-top: 9px;
}

.brand-mini-panels p {
  line-height: 1.62;
}

.title-grid article {
  font-family: var(--font-heading);
  line-height: 1.45;
}

.lineup-section .title-grid article {
  min-height: 116px;
}

@media (max-width: 720px) {
  :root {
    --section-space: 64px;
    --panel-space: 24px;
    --card-space: 20px;
  }

  .layout {
    width: min(100% - 44px, 1120px);
  }

  .section,
  .section-band {
    padding-block: var(--section-space);
  }

  h1 {
    font-size: clamp(1.78rem, 7.8vw, 2.45rem);
    line-height: 1.16;
  }

  h2 {
    font-size: clamp(1.72rem, 7.4vw, 2.36rem);
    line-height: 1.22;
  }

  .eyebrow {
    margin-bottom: 8px;
    font-size: 0.78rem;
  }

  .section-heading {
    margin-bottom: 28px;
  }

  .section-heading p:not(.eyebrow) {
    margin-top: 16px;
    font-size: 0.94rem;
    line-height: 1.72;
  }

  .hero-actions,
  .button-row {
    gap: 12px;
    margin-top: 24px;
  }

  .quick-facts {
    gap: 12px;
    margin-top: 28px;
  }

  .quick-facts div {
    min-height: 100px;
    padding: 16px 14px 14px;
  }

  .info-list {
    gap: 10px;
    margin-top: 24px;
  }

  .info-list div {
    gap: 5px;
    padding: 14px 15px;
  }

  .info-list dt {
    font-size: 0.8rem;
    line-height: 1.35;
  }

  .info-list dd {
    font-size: 0.94rem;
    line-height: 1.68;
  }

  .shop-brief {
    padding-block: 56px;
  }

  .feature-grid,
  .buy-grid,
  .title-grid,
  .event-board,
  .mini-gallery {
    gap: 16px;
  }
}
`;
document.head.append(refinementStyle);

const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const todayHours = document.querySelector("[data-today-hours]");

const setMenu = (isOpen) => {
  header?.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuButton?.setAttribute("aria-expanded", String(isOpen));
  menuButton?.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
};

menuButton?.addEventListener("click", () => {
  setMenu(!header?.classList.contains("is-open"));
});

nav?.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLAnchorElement) {
    setMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

const hoursByDay = [
  "日曜日：11:00〜21:00",
  "月曜日：13:00〜20:00",
  "火曜日：13:00〜20:00",
  "水曜日：13:00〜20:00",
  "木曜日：12:00〜21:00",
  "金曜日：12:00〜21:00",
  "土曜日：11:00〜21:00",
];

if (todayHours) {
  const day = new Date().getDay();
  todayHours.textContent = `本日の営業時間 ${hoursByDay[day]} / 定休日：不定休`;
}

const revealTargets = document.querySelectorAll(
  [
    ".shop-brief-lead",
    ".shop-brief-grid article",
    ".hours-panel",
    ".feature-section .section-heading",
    ".feature-card",
    ".buy-section .section-heading",
    ".info-card",
    ".media-panel",
    ".event-card",
    ".character-panel",
    ".brand-scene > div:last-child",
    ".mini-gallery article",
    ".title-grid article",
    ".shop-info",
    ".shop-photo",
    ".map-shell",
    ".x-copy",
    ".x-timeline",
  ].join(","),
);

if (revealTargets.length) {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  revealTargets.forEach((target) => {
    target.classList.add("reveal-panel");
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealTargets.forEach((target) => observer.observe(target));
  }
}

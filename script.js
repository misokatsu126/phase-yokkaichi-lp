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

.phase-core-section + .feature-section {
  display: none;
}

.phase-core-section {
  overflow: hidden;
  color: var(--white);
}

.phase-core-layout {
  display: grid;
  grid-template-columns: minmax(0, 0.78fr) minmax(440px, 1.08fr);
  grid-template-areas:
    "copy visual"
    "grid grid";
  align-items: stretch;
  gap: clamp(28px, 4vw, 54px);
}

.phase-core-copy,
.phase-core-card {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0 48%, rgba(51, 207, 255, 0.07) 50%, rgba(255, 255, 255, 0.04) 52% 100%) 0 0 / 100% 240%,
    linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.04)),
    rgba(1, 9, 31, 0.42);
  border: 1px solid rgba(169, 237, 255, 0.28);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.16),
    inset 0 -1px 0 rgba(51, 207, 255, 0.1),
    0 26px 72px rgba(1, 9, 31, 0.24);
  backdrop-filter: blur(18px) saturate(1.1);
  animation: panel-scan 10s linear infinite;
}

.phase-core-copy {
  grid-area: copy;
  align-self: center;
  padding: clamp(28px, 3.4vw, 42px);
  clip-path: polygon(22px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 22px) 100%, 0 100%, 0 22px);
}

.phase-core-copy::after,
.phase-core-card::before {
  content: "";
  position: absolute;
  top: 20px;
  right: 22px;
  width: 74px;
  height: 3px;
  background: linear-gradient(90deg, var(--sun), var(--orange), transparent);
  opacity: 0.92;
}

.phase-core-copy h2 {
  max-width: 9.8em;
  margin-top: 10px;
  color: var(--white);
  font-size: clamp(2.05rem, 4.2vw, 4.15rem);
  line-height: 1.08;
}

.phase-core-copy p:not(.eyebrow) {
  max-width: 34rem;
  margin: 24px 0 0;
  color: rgba(231, 247, 255, 0.82);
  font-size: clamp(0.98rem, 1.2vw, 1.06rem);
  line-height: 1.8;
}

.phase-core-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 30px;
}

.phase-core-actions .button-outline {
  color: var(--white);
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.035)),
    rgba(1, 9, 31, 0.24);
  border-color: rgba(169, 237, 255, 0.36);
}

.phase-core-visual {
  grid-area: visual;
  position: relative;
  min-height: clamp(430px, 39vw, 620px);
  margin: 0;
  overflow: hidden;
  clip-path: polygon(7% 0, 100% 0, 93% 100%, 0 100%);
  border: 1px solid rgba(51, 207, 255, 0.34);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.08),
    0 28px 80px rgba(0, 109, 255, 0.18);
}

.phase-core-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.12) contrast(1.05) brightness(0.88);
  animation: image-drift 18s ease-in-out infinite alternate;
}

.phase-core-visual::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(1, 9, 31, 0.58), transparent 42%, rgba(1, 9, 31, 0.24)),
    radial-gradient(circle at 76% 16%, rgba(51, 207, 255, 0.2), transparent 18rem);
}

.phase-core-visual::after {
  content: "";
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 18%;
  z-index: 2;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--blue-2), var(--sun), transparent);
  box-shadow: 0 0 22px rgba(51, 207, 255, 0.34);
  opacity: 0.82;
}

.phase-core-visual figcaption {
  position: absolute;
  left: clamp(22px, 3vw, 34px);
  bottom: clamp(20px, 2.6vw, 32px);
  z-index: 3;
  padding: 10px 14px;
  color: rgba(231, 247, 255, 0.9);
  background: rgba(1, 9, 31, 0.46);
  border: 1px solid rgba(169, 237, 255, 0.3);
  font-family: var(--font-ui);
  font-size: 0.86rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
}

.phase-core-grid {
  grid-area: grid;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(18px, 2vw, 26px);
}

.phase-core-card {
  min-height: 222px;
  padding: clamp(24px, 3vw, 34px);
  clip-path: polygon(18px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 18px) 100%, 0 100%, 0 18px);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.phase-core-card:nth-child(1),
.phase-core-card:nth-child(4) {
  grid-column: span 2;
}

.phase-core-card::after {
  content: "";
  position: absolute;
  inset: 0 auto 0 -72%;
  width: 42%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.18), transparent);
  opacity: 0;
  transform: skewX(-18deg);
  transition:
    opacity 180ms ease,
    transform 520ms ease;
}

.phase-core-card:hover {
  transform: translateY(-5px);
  border-color: rgba(51, 207, 255, 0.52);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    0 28px 76px rgba(0, 109, 255, 0.18);
}

.phase-core-card:hover::after {
  opacity: 1;
  transform: translateX(360%) skewX(-18deg);
}

.core-index {
  display: block;
  color: var(--sun);
  font-family: var(--font-ui);
  font-size: clamp(2.2rem, 4.4vw, 4.4rem);
  font-weight: 900;
  line-height: 0.95;
  text-shadow: 0 0 22px rgba(255, 210, 46, 0.16);
}

.core-label {
  display: inline-block;
  margin-top: 18px;
  color: var(--blue-2);
  font-family: var(--font-ui);
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.phase-core-card h3 {
  margin: 8px 0 0;
  color: var(--white);
  font-size: clamp(1.22rem, 1.8vw, 1.56rem);
  line-height: 1.28;
}

.phase-core-card p {
  max-width: 31rem;
  margin: 14px 0 0;
  color: rgba(232, 247, 255, 0.76);
  font-size: 0.95rem;
  line-height: 1.72;
}

@media (min-width: 1041px) {
  .hero-grid.layout,
  .phase-core-layout.layout {
    width: min(1240px, calc(100% - 64px));
  }

  .phase-core-section {
    padding-block: clamp(96px, 10vw, 138px);
  }

  .phase-core-card:nth-child(2),
  .phase-core-card:nth-child(3) {
    min-height: 272px;
  }
}

@media (max-width: 1040px) {
  .phase-core-layout {
    grid-template-columns: 1fr;
    grid-template-areas:
      "copy"
      "visual"
      "grid";
  }

  .phase-core-copy h2 {
    max-width: 12em;
  }

  .phase-core-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
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
  .phase-core-grid,
  .title-grid,
  .event-board,
  .mini-gallery {
    gap: 16px;
  }

  .phase-core-layout {
    gap: 24px;
  }

  .phase-core-copy {
    padding: 24px;
    clip-path: polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px);
  }

  .phase-core-copy h2 {
    font-size: clamp(1.76rem, 7.4vw, 2.42rem);
    line-height: 1.18;
  }

  .phase-core-copy p:not(.eyebrow) {
    margin-top: 18px;
    font-size: 0.94rem;
    line-height: 1.76;
  }

  .phase-core-actions {
    gap: 12px;
    margin-top: 24px;
  }

  .phase-core-actions .button {
    width: 100%;
  }

  .phase-core-visual {
    min-height: 330px;
    clip-path: polygon(5% 0, 100% 0, 95% 100%, 0 100%);
  }

  .phase-core-visual figcaption {
    left: 18px;
    bottom: 18px;
    max-width: calc(100% - 36px);
    font-size: 0.72rem;
  }

  .phase-core-card,
  .phase-core-card:nth-child(1),
  .phase-core-card:nth-child(4) {
    grid-column: auto;
    min-height: auto;
    padding: 20px;
  }

  .core-index {
    font-size: clamp(1.9rem, 9vw, 2.6rem);
  }

  .core-label {
    margin-top: 14px;
  }
}
`;
document.head.append(refinementStyle);

const ensurePhaseCore = () => {
  if (document.querySelector("#phase-core")) return;

  const section = document.createElement("section");
  section.className = "section phase-core-section station-section";
  section.id = "phase-core";
  section.setAttribute("aria-labelledby", "core-title");
  section.innerHTML = `
    <div class="layout phase-core-layout">
      <div class="phase-core-copy">
        <p class="eyebrow">PHASE CORE</p>
        <h2 id="core-title">買う、売る、遊ぶ、集まる。四日市のTCGステーション。</h2>
        <p>
          フェイズ四日市店は、販売・買取・大会開催・32席のデュエルスペースをひとつにつなぐYOKKAICHI BASE。
          カードゲームの熱量が、日常の中で自然に集まる場所を目指しています。
        </p>
        <div class="phase-core-actions">
          <a class="button button-primary" href="#access">YOKKAICHI BASEへ向かう</a>
          <a class="button button-outline" href="#x-news">最新情報を見る</a>
        </div>
      </div>
      <figure class="phase-core-visual">
        <img src="assets/phase-duel-table-rich.jpg" width="1600" height="1000" alt="PHASEカードが並ぶ近未来TCG対戦テーブルのビジュアル" />
        <figcaption>YOKKAICHI BASE / PHASE SYSTEM</figcaption>
      </figure>
      <div class="phase-core-grid" aria-label="フェイズ四日市店の4つのコア">
        <article class="phase-core-card core-duel">
          <span class="core-index">01</span>
          <p class="core-label">DUEL SPACE</p>
          <h3>32席のデュエルスペース</h3>
          <p>友人との対戦や大会参加に使える、地域のプレイヤーが集まるプレイスペース。</p>
        </article>
        <article class="phase-core-card">
          <span class="core-index">02</span>
          <p class="core-label">EVENT FIELD</p>
          <h3>大会・イベント開催</h3>
          <p>初心者から経験者まで、カードゲームの熱量を共有できるイベントを開催。</p>
        </article>
        <article class="phase-core-card">
          <span class="core-index">03</span>
          <p class="core-label">BUY / SELL</p>
          <h3>販売・買取対応</h3>
          <p>シングルカードからBOXまで、各種TCGの販売・買取を店頭で相談できます。</p>
        </article>
        <article class="phase-core-card core-base">
          <span class="core-index">04</span>
          <p class="core-label">YOKKAICHI BASE</p>
          <h3>四日市富田のTCG拠点</h3>
          <p>駐車場あり。三重県四日市市富田でカードゲームを楽しめるショップです。</p>
        </article>
      </div>
    </div>
  `;

  const featureSection = document.querySelector(".feature-section");
  const eventsSection = document.querySelector("#events");
  if (featureSection) {
    featureSection.insertAdjacentElement("beforebegin", section);
    featureSection.setAttribute("hidden", "");
  } else {
    eventsSection?.insertAdjacentElement("beforebegin", section);
  }
};

ensurePhaseCore();

const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
};

setText("#events-title", "対戦の熱量が集まる場所。");
setText("#buy-title", "カードの価値を、次のプレイヤーへ。");
setText("#titles-title", "人気タイトルを中心に、各種TCGを取り扱い。");
setText("#shop-title", "四日市富田にある、カードゲームの拠点。");
setText("#access-title", "フェイズ四日市店へアクセス。");

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
    ".phase-core-copy",
    ".phase-core-visual",
    ".phase-core-card",
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

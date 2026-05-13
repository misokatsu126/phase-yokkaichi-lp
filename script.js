const fontUrl =
  "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Orbitron:wght@600;700&family=Rajdhani:wght@500;600;700&family=Zen+Kaku+Gothic+New:wght@500;700;900&display=swap";

if (!document.querySelector(`link[href="${fontUrl}"]`)) {
  const fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = fontUrl;
  document.head.append(fontLink);
}

const runtimeStyle = document.createElement("style");
runtimeStyle.textContent = `
  :root {
    --font-jp: "Noto Sans JP", "BIZ UDPGothic", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    --font-heading: "Zen Kaku Gothic New", "Noto Sans JP", "BIZ UDPGothic", system-ui, sans-serif;
    --font-ui: "Rajdhani", "Noto Sans JP", system-ui, sans-serif;
  }

  body {
    font-family: var(--font-jp);
    text-rendering: optimizeLegibility;
  }

  p {
    overflow-wrap: anywhere;
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-heading);
    overflow-wrap: normal;
    word-break: keep-all;
    line-break: strict;
    text-wrap: balance;
  }

  .heading-unit,
  .nowrap-ja {
    display: inline-block;
    white-space: nowrap;
  }

  .eyebrow,
  .quick-facts dt,
  .quick-facts dd,
  .shop-brief-grid span,
  .hours-head span,
  .event-date,
  .brand-mini-panels span,
  .hero-stage::after,
  .media-panel figcaption,
  .buy-grid .info-card h3::before,
  .core-label,
  .core-index {
    font-family: var(--font-ui);
  }

  @media (max-width: 720px) {
    h1 {
      font-size: clamp(1.78rem, 7.8vw, 2.45rem);
      line-height: 1.16;
    }

    h2 {
      font-size: clamp(1.72rem, 7.4vw, 2.36rem);
      line-height: 1.22;
    }
  }
`;
document.head.append(runtimeStyle);

const heading = (selector, html) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
};

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
        <h2 id="core-title">
          <span class="heading-unit">買う、売る、遊ぶ、</span><span class="heading-unit">集まる。</span>
          <span class="heading-unit">四日市のTCGステーション。</span>
        </h2>
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

heading(
  "#hero-title",
  '<span class="heading-unit">四日市に、カードゲームの</span><span class="heading-unit">新しいフェイズを。</span>',
);
heading(
  "#core-title",
  '<span class="heading-unit">買う、売る、遊ぶ、</span><span class="heading-unit">集まる。</span><span class="heading-unit">四日市のTCGステーション。</span>',
);
heading("#events-title", '<span class="heading-unit">対戦の熱量が</span><span class="heading-unit">集まる場所。</span>');
heading("#buy-title", '<span class="heading-unit">カードの価値を、</span><span class="heading-unit">次のプレイヤーへ。</span>');
heading(
  "#titles-title",
  '<span class="heading-unit">人気タイトルを中心に、</span><span class="heading-unit">各種TCGを取り扱い。</span>',
);
heading("#shop-title", '<span class="heading-unit">四日市富田にある、</span><span class="heading-unit">カードゲームの拠点。</span>');
heading("#access-title", '<span class="heading-unit">フェイズ四日市店へ</span><span class="heading-unit">アクセス。</span>');
heading("#x-title", '<span class="heading-unit">最新情報は公式Xで</span><span class="heading-unit">発信中</span>');
heading("#shop-brief-title", '<span class="heading-unit">フェイズ四日市店</span><span class="heading-unit">店舗案内</span>');
heading(
  "#gallery-title",
  '<span class="heading-unit">販売・買取・大会を</span><span class="heading-unit">楽しめる</span><span class="heading-unit">四日市のTCG拠点。</span>',
);

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
  if (event.target instanceof HTMLAnchorElement) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
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
  todayHours.textContent = `本日の営業時間 ${hoursByDay[new Date().getDay()]} / 定休日：不定休`;
}

const revealTargets = document.querySelectorAll(
  [
    ".shop-brief-lead",
    ".shop-brief-grid article",
    ".hours-panel",
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
  revealTargets.forEach((target) => target.classList.add("reveal-panel"));

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

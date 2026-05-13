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

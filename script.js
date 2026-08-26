// Public playtest application URL. Leave empty until the form is ready.
const PLAYTEST_URL = "";

const translations = {
  en: {
    skip: "Skip to content",
    navLabel: "Primary navigation",
    sectionLabel: "Page sections",
    languageLabel: "Language",
    navAbout: "About",
    navGameplay: "Gameplay",
    navPlaytest: "Playtest",
    heroEyebrow: "Four-player physics party survival",
    heroLineOne: "Build the disaster.",
    heroLineTwo: "Survive the chaos.",
    heroDescription: "A 4-player physics party survival game where every player builds the next disaster.",
    apply: "Apply for Playtest",
    howItWorks: "How it works",
    statusLabel: "Project status",
    statusDevelopment: "Early development",
    statusWindows: "Windows",
    statusPrivate: "Private playtest",
    simultaneous: "simultaneous disasters",
    coreKicker: "The core idea",
    coreTitle: "You don't just survive the disaster. You build it.",
    builderLabel: "Example disaster sentence",
    locationLabel: "Location",
    locationValue: "Above the arena",
    targetLabel: "Target",
    targetValue: "Meteor",
    actionLabel: "Action",
    actionValue: "Falls",
    compiledSentence: "“Above the arena, a meteor falls.”",
    arenaKicker: "One shared problem",
    fourPlayers: "Four players.",
    fourDisasters: "Four disasters.",
    oneArena: "One arena.",
    arenaBodyOne: "Every player creates one disaster. All four activate together.",
    arenaBodyTwo: "Physics, positioning, and player decisions turn the arena into a different problem every round.",
    eventLabel: "Four disasters activating together",
    eventOne: "Meteor falls",
    eventTwo: "Ball duplicates",
    eventThree: "Ice rises",
    eventFour: "Wall moves",
    eventTogether: "All at once",
    physicsKicker: "Emergent physics",
    physicsTitle: "Chaos can collide.",
    physicsIntro: "Disasters can affect players, the arena, and other disasters.",
    toolTitle: "A hazard can become a tool.",
    toolBody: "Use movement, timing, and the forces already in the arena.",
    routeTitle: "A safe route can disappear.",
    routeBody: "The plan changes when disasters meet.",
    backfireTitle: "Your own disaster can come back to hurt you.",
    backfireBody: "Creating danger never makes you immune to it.",
    gameplayKicker: "Gameplay",
    gameplayTitle: "Calm choices. Chaotic results.",
    gameplayIntro: "Build a sentence, read the arena, and survive what everyone created.",
    mediaLabel: "Gameplay footage placeholder",
    footageSoon: "Gameplay footage coming soon.",
    playtestKicker: "Early development",
    playtestTitle: "Private Playtest",
    playtestBody: "Keyword Disaster Arena is currently in early private playtesting. We are looking for Windows players to help test the core multiplayer experience.",
    applicationsSoon: "Applications opening soon",
    independent: "Independent game project."
  },
  ko: {
    skip: "본문으로 바로가기",
    navLabel: "주요 탐색",
    sectionLabel: "페이지 섹션",
    languageLabel: "언어",
    navAbout: "소개",
    navGameplay: "게임플레이",
    navPlaytest: "플레이테스트",
    heroEyebrow: "4인 물리 파티 생존 게임",
    heroLineOne: "재난을 만들고.",
    heroLineTwo: "혼돈에서 살아남아라.",
    heroDescription: "각 플레이어가 다음 재난을 직접 만드는 4인 물리 파티 생존 게임입니다.",
    apply: "플레이테스트 신청",
    howItWorks: "게임 방식",
    statusLabel: "프로젝트 상태",
    statusDevelopment: "초기 개발",
    statusWindows: "Windows",
    statusPrivate: "비공개 플레이테스트",
    simultaneous: "동시에 발생하는 재난",
    coreKicker: "핵심 아이디어",
    coreTitle: "재난에서 살아남기만 하는 것이 아닙니다. 직접 만듭니다.",
    builderLabel: "재난 문장 예시",
    locationLabel: "위치",
    locationValue: "경기장 위에서",
    targetLabel: "대상",
    targetValue: "메테오",
    actionLabel: "행동",
    actionValue: "떨어진다",
    compiledSentence: "“경기장 위에서 메테오가 떨어진다.”",
    arenaKicker: "모두가 마주할 하나의 문제",
    fourPlayers: "네 명의 플레이어.",
    fourDisasters: "네 개의 재난.",
    oneArena: "하나의 경기장.",
    arenaBodyOne: "모든 플레이어가 재난 하나씩을 만들고, 네 재난이 동시에 실행됩니다.",
    arenaBodyTwo: "물리, 위치 선정, 플레이어의 판단이 매 라운드 경기장을 새로운 문제로 바꿉니다.",
    eventLabel: "동시에 실행되는 네 개의 재난",
    eventOne: "메테오가 떨어진다",
    eventTwo: "공이 복제된다",
    eventThree: "얼음이 솟아난다",
    eventFour: "벽이 이동한다",
    eventTogether: "모두 동시에",
    physicsKicker: "창발적 물리",
    physicsTitle: "혼돈도 서로 충돌합니다.",
    physicsIntro: "재난은 플레이어와 경기장, 다른 재난에 영향을 줄 수 있습니다.",
    toolTitle: "위험 요소가 도구가 될 수 있습니다.",
    toolBody: "이동과 타이밍, 경기장에 이미 작용하는 힘을 이용하세요.",
    routeTitle: "안전한 길이 사라질 수 있습니다.",
    routeBody: "재난이 만나는 순간 계획도 달라집니다.",
    backfireTitle: "내가 만든 재난이 나를 덮칠 수 있습니다.",
    backfireBody: "위험을 만들었다고 해서 그 위험에서 면역이 되지는 않습니다.",
    gameplayKicker: "게임플레이",
    gameplayTitle: "차분한 선택. 혼란스러운 결과.",
    gameplayIntro: "문장을 만들고, 경기장을 읽고, 모두가 만든 결과에서 살아남으세요.",
    mediaLabel: "게임플레이 영상 준비 안내",
    footageSoon: "게임플레이 영상이 곧 공개됩니다.",
    playtestKicker: "초기 개발",
    playtestTitle: "비공개 플레이테스트",
    playtestBody: "Keyword Disaster Arena는 현재 초기 비공개 플레이테스트를 준비하고 있습니다. 핵심 멀티플레이 경험을 함께 검증할 Windows 플레이어를 찾고 있습니다.",
    applicationsSoon: "신청이 곧 열립니다",
    independent: "인디 게임 프로젝트."
  }
};

const languageButtons = document.querySelectorAll("[data-language]");

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) {
      element.setAttribute("aria-label", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    window.localStorage.setItem("kda-language", language);
  } catch {
    // The language switch still works when storage is unavailable.
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelectorAll("[data-playtest-link]").forEach((link) => {
  if (PLAYTEST_URL.trim()) {
    link.href = PLAYTEST_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#playtest";
  }
});

let savedLanguage = "en";
try {
  savedLanguage = window.localStorage.getItem("kda-language") || "en";
} catch {
  savedLanguage = "en";
}

setLanguage(savedLanguage === "ko" ? "ko" : "en");

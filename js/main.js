/**
 * ==========================================================================
 * Persona 3 Reload - Portfolio Interaction & Animation Engine
 * Authentic Atlus Aesthetic (60fps, Zero-Latency Audio, Zero Bugs)
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. Data Structures & Configuration
// --------------------------------------------------------------------------
const colors = ["fill-button-1", "fill-button-2", "fill-button-3"];

const options = [
  {
    name: "PROJECT",
    description: "Flagship Data Projects",
    rotation: -20,
    zIndex: 1,
    offsetX: -40,
    offsetY: 25,
    fontSize: "5.15rem",
    bannerScaleX: 1.07,
    bannerScaleY: 3.35,
    tag: "PORTFOLIO WORKS",
    summary: "Data systems, automation and market intelligence built at Acecook Vietnam",
    cards: []
  },
  {
    name: "SKILLS",
    description: "Technical Abilities & Stack",
    rotation: -12,
    zIndex: 2,
    offsetX: -65,
    offsetY: 30,
    fontSize: "4.55rem",
    bannerScaleX: 0.96,
    bannerScaleY: 3.05,
    tag: "ABILITIES & PROFICIENCY",
    summary: "Analytics, engineering and research toolkit",
    cards: []
  },
  {
    name: "EXPERIENCE",
    description: "Work History & Timeline",
    rotation: -4,
    zIndex: 3,
    offsetX: -80,
    offsetY: 35,
    fontSize: "4.35rem",
    bannerScaleX: 1.0,
    bannerScaleY: 3.15,
    tag: "PROFESSIONAL EXPERIENCE",
    summary: "Career progression in data analytics and business intelligence",
    cards: [
      {
        title: "Acecook Vietnam",
        desc: "Data Analyst, CMI Department | Oct 2024 - Present | Market research, BI automation, and cross-functional data systems"
      },
      {
        title: "Avery Dennison",
        desc: "Data Analyst (Production Planner) | Feb 2024 - Oct 2024 | Production planning and data analysis"
      },
      {
        title: "Reputize Asia",
        desc: "Data Analyst | Feb 2023 - Feb 2024 | Data analysis and reporting"
      }
    ]
  },
  {
    name: "ABOUT",
    description: "Profile & Background",
    rotation: 2,
    zIndex: 4,
    offsetX: -85,
    offsetY: 40,
    fontSize: "4.85rem",
    bannerScaleX: 1.02,
    bannerScaleY: 3.25,
    tag: "PROFILE & JOURNEY",
    summary: "Strategic BI Analyst | Market Intelligence & Cross-Functional Data Systems",
    cards: []
  },
  {
    name: "CONTACT",
    description: "Initiate Communication",
    rotation: 10,
    zIndex: 5,
    offsetX: -90,
    offsetY: 45,
    fontSize: "4.65rem",
    bannerScaleX: 1.04,
    bannerScaleY: 3.2,
    tag: "COMMUNICATION CHANNELS",
    summary: "Open to data, BI and market insight opportunities",
    cards: []
  }
];

// EXPERIENCE page data: detailed work history with achievements and outcomes
const experienceData = [
  {
    id: "acecook",
    company: "ACECOOK VIETNAM",
    period: "Oct 2025 - Present",
    role: "Data Analyst, CMI Department",
    tag: "CURRENT POSITION",
    summary: "Market research, BI automation, and cross-functional data systems",
    details: [
      { title: "Core Focus", desc: "Market research operations, BI automation, and cross-functional data infrastructure for Marketing and Sales teams." },
      { title: "Key Projects", desc: "Built CMI-Hub (research booking & project tracking platform), automated Nielsen Retail Audit dashboard (20+ users), Sale-in reporting ETL pipeline (saved ~10 hours/month), and SAP-to-Marketing daily data sync." },
      { title: "Research Leadership", desc: "Leading Economy Noodle category repositioning strategy for Mì Quen, synthesizing FGD, quantitative and CLT research into actionable insight." },
      { title: "Impact", desc: "Delivered 15+ DIY consumer studies, automated recurring workflows, and established data infrastructure used daily by 30+ stakeholders across departments." },
      { title: "Recognition", desc: "Golden Suggestion Award (2025) for process automation and innovation contributions." }
    ],
    tags: ["Python", "Power BI", "ETL", "Market Research", "Nielsen Audit", "SAP", "Vercel", "Supabase"]
  },
  {
    id: "avery",
    company: "AVERY DENNISON",
    period: "Feb 2025 - Oct 2025",
    role: "Data Analyst (Production Planner)",
    tag: "MANUFACTURING OPERATIONS",
    summary: "Production planning and data analysis for manufacturing operations",
    details: [
      { title: "Responsibility", desc: "Production planning, demand forecasting, and capacity analysis for label manufacturing operations." },
      { title: "Core Work", desc: "Optimized production schedules, managed inventory levels, and coordinated cross-functional teams for on-time delivery." },
      { title: "Data Analysis", desc: "Built Excel-based planning models and reporting dashboards to track KPIs, production efficiency, and material utilization." },
      { title: "Skills Applied", desc: "Production scheduling, demand planning, inventory management, and stakeholder coordination in a fast-paced manufacturing environment." }
    ],
    tags: ["Production Planning", "Data Analysis", "Excel", "Demand Forecasting", "Inventory Management"]
  },
  {
    id: "reputize",
    company: "REPUTIZE ASIA",
    period: "Feb 2024 - Feb 2025",
    role: "Data Analyst",
    tag: "DIGITAL ANALYTICS",
    summary: "Data analysis and reporting for digital reputation management",
    details: [
      { title: "Focus Area", desc: "Data analysis and automated reporting for digital reputation management and social media monitoring campaigns." },
      { title: "Core Deliverables", desc: "Created client dashboards, automated reporting workflows, and delivered data-driven insights for brand reputation tracking." },
      { title: "Technical Work", desc: "Built reporting automation pipelines, cleaned and processed social media and web data, and designed visualization dashboards." },
      { title: "Client Impact", desc: "Supported multiple client accounts with consistent, timely reporting and actionable insights for reputation strategy." }
    ],
    tags: ["Data Analysis", "Reporting", "Automation", "Dashboards", "Social Media Analytics"]
  }
];

// PROJECT page cards. `details` open in the existing modal when confirmed (ENTER / click).
// Display fonts (Rodin / Skip) have no Vietnamese diacritics, so card titles stay ASCII.
const slinkData = [
  {
    numeral: "I",
    title: "CMI-HUB",
    subtitle: "Research booking & project database web app",
    url: "#",
    tag: "ACECOOK VIETNAM",
    summary: "Self-built internal tool, adopted as a daily working tool",
    details: [
      { title: "Stack", desc: "Designed and self-built on Vercel + Supabase." },
      { title: "Function", desc: "Research booking, project database search, status tracking and reschedule history for 15+ live CMI projects." },
      { title: "AI", desc: "Integrated with a RAG-based AI agent for fast information retrieval." },
      { title: "Adoption", desc: "Daily working tool of the Marketing department (10+ users)." }
    ]
  },
  {
    numeral: "II",
    title: "SAP > MARKETING SYNC",
    subtitle: "Automated daily data pipeline (Python)",
    url: "#",
    tag: "ACECOOK VIETNAM",
    summary: "Cross-functional data infrastructure",
    details: [
      { title: "What", desc: "Built and deployed an automated daily sync pipeline in Python connecting Sales (SAP) data directly to Marketing reporting." },
      { title: "Impact", desc: "Removed the manual handoff between departments and gave same-day data availability for decision-making." }
    ]
  },
  {
    numeral: "III",
    title: "SALE-IN REPORTING",
    subtitle: "Python ETL: SAP > Data Raw > Power BI / Excel",
    url: "#",
    tag: "ACECOOK VIETNAM",
    summary: "Automated monthly sale-in reports by province and brand",
    details: [
      { title: "What", desc: "Python ETL pipeline (SAP > Data Raw > Power BI/Excel) that auto-generates monthly sale-in reports by province and brand." },
      { title: "Impact", desc: "Processing cycle cut from roughly 2 working days to about 6 hours per month, saving ~10 working hours monthly." }
    ]
  },
  {
    numeral: "IV",
    title: "NIELSEN DASHBOARD",
    subtitle: "Retail Audit rebuilt as an interactive Power BI report",
    url: "#",
    tag: "ACECOOK VIETNAM",
    summary: "Market intelligence automation",
    details: [
      { title: "What", desc: "Re-engineered the Nielsen Retail Audit processing workflow and rebuilt it as an interactive Power BI dashboard." },
      { title: "Impact", desc: "Processing time cut from ~4-5 hours/day to ~2 hours/day; delivery shortened by about a day." },
      { title: "Adoption", desc: "Standard tool for tracking market share and competitor movement, used by 20+ people across Marketing, Brand and management." }
    ]
  },
  {
    numeral: "V",
    title: "ECONOMY NOODLE STRATEGY",
    subtitle: "Category repositioning for Mì Quen",
    url: "#",
    tag: "ACECOOK VIETNAM",
    summary: "Category strategy leadership",
    details: [
      { title: "Scope", desc: "Leading end-to-end repositioning strategy for the Economy Noodle segment." },
      { title: "Method", desc: "Synthesizing FGD, quantitative and CLT research into UAV/BDA-driven insight and a competitive quality benchmark for Mì Quen." },
      { title: "Impact", desc: "Directly informs rebranding, R&D reformulation and go-to-market direction." }
    ]
  }
];

const skillTabsList = [
  { id: "analytics", code: "01", label: "ANALYTICS" },
  { id: "engineering", code: "02", label: "ENGINEERING" },
  { id: "research", code: "03", label: "RESEARCH" },
  { id: "languages", code: "04", label: "LANGUAGES" }
];

// NOTE: a CV has no proficiency scores. The "level" values below are self-assessment
// estimates (except TOEIC 865/990 = 87). Edit them to match how you rate yourself.
const skillGroupsData = [
  {
    id: "analytics",
    title: "ANALYTICS & VISUALIZATION",
    code: "01",
    skills: [
      { name: "Power BI · DAX", level: 90 },
      { name: "Excel · VBA", level: 85 },
      { name: "Looker Studio", level: 80 },
      { name: "BigQuery", level: 70 },
      { name: "Azure", level: 60 }
    ]
  },
  {
    id: "engineering",
    title: "PROGRAMMING & DATA SYSTEMS",
    code: "02",
    skills: [
      { name: "Python · Pandas · Polars", level: 88 },
      { name: "SQL", level: 80 },
      { name: "SAP · API Integration", level: 75 },
      { name: "Supabase · Database Management", level: 72 },
      { name: "JavaScript · Streamlit", level: 70 },
      { name: "Git", level: 70 }
    ]
  },
  {
    id: "research",
    title: "RESEARCH & STRATEGY",
    code: "03",
    skills: [
      { name: "Nielsen Retail Audit", level: 85 },
      { name: "Consumer Insight · FGD · CLT", level: 82 },
      { name: "Market Sizing · UAV / BDA", level: 75 },
      { name: "FMCG Category Strategy", level: 78 },
      { name: "Stakeholder Management", level: 80 },
      { name: "Cross-functional Coordination", level: 82 }
    ]
  },
  {
    id: "languages",
    title: "LANGUAGE PROFICIENCY",
    code: "04",
    skills: [
      { name: "Vietnamese (Native)", level: 100 },
      { name: "English (TOEIC 865 / 990)", level: 87 }
    ]
  }
];

// --------------------------------------------------------------------------
// 2. Global State & DOM Element Cache
// --------------------------------------------------------------------------
let isLoaded = false;
let isStarted = false;
let selectedIndex = 0;
let isModalOpen = false;
let isProjectPageOpen = false;
let selectedSlinkIndex = 0;
let isSkillPageOpen = false;
let currentSkillTab = "analytics";
let isAboutPageOpen = false;
let isContactPageOpen = false;
let selectedContactIndex = 0;
let isWavyTransitionRunning = false;

// DOM Elements: Main Menu & Background
const bgVideoIntro = document.getElementById("background-video-intro") || document.getElementById("background-video");
const bgVideoLoop = document.getElementById("background-video-loop");
const optionsList = document.getElementById("options-list");
const sideNumber = document.getElementById("side-number");
const wavyTransitionPortal = document.getElementById("wavy-transition-portal");

// DOM Elements: Modal
const portfolioModal = document.getElementById("portfolio-modal");
const modalTag = document.getElementById("modal-tag");
const modalTitle = document.getElementById("modal-title");
const modalSummary = document.getElementById("modal-summary");
const modalCardsContainer = document.getElementById("modal-cards-container");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalFooterCloseBtn = document.getElementById("modal-footer-close");

// DOM Elements: Project Screen (S.Link)
const projectPage = document.getElementById("project-page");
const slinkBgVideo = document.getElementById("slink-bg-video");
const slinkCardsContainer = document.getElementById("slink-cards-container");
const slinkConfirmBtn = document.getElementById("slink-confirm-btn");
const slinkBackBtn = document.getElementById("slink-back-btn");

// DOM Elements: Skill Screen
const skillPage = document.getElementById("skill-page");
const skillBgVideo = document.getElementById("skill-bg-video");
const skillHeaderDiv = document.getElementById("skill-header-div");
const skillTabsNav = document.getElementById("skill-tabs-nav");
const p3rSkillsContainer = document.getElementById("p3r-skills-container");
const skillBackBtn = document.getElementById("skill-back-btn");
const skillTabPrevBtn = document.getElementById("skill-tab-prev-btn");
const skillTabNextBtn = document.getElementById("skill-tab-next-btn");

// DOM Elements: Experience Screen
const experiencePage = document.getElementById("experience-page");
const experienceBgVideo = document.getElementById("experience-bg-video");
const experienceBackBtn = document.getElementById("experience-back-btn");

// DOM Elements: About Screen
const aboutPage = document.getElementById("about-page");
const aboutBgVideo = document.getElementById("about-bg-video");
const aboutHeaderDiv = document.getElementById("about-header-div");
const aboutBackBtn = document.getElementById("about-back-btn");

// DOM Elements: Contact Screen
const contactPage = document.getElementById("contact-page");
const contactBgVideo = document.getElementById("contact-bg-video");
const contactBackBtn = document.getElementById("contact-back-btn");
const contactMailRows = document.querySelectorAll(".p3r-mail-row");

// DOM Elements: Loading Screen
const loadingScreen = document.getElementById("loading-screen");
const loadingBar = document.getElementById("loading-bar");
const loadingPercent = document.getElementById("loading-percent");

// --------------------------------------------------------------------------
// 3. Low-Latency Audio Engine (Web Audio API + Audio Pools + HTML5 Fallbacks)
// --------------------------------------------------------------------------
let audioCtx = null;
let sfxAudioBuffer = null;
let closeMenuAudioBuffer = null;
let menuUtamaAudioBuffer = null;

const SFX_POOL_SIZE = 4;
const sfxAudioPool = [];
const closeMenuAudioPool = [];
const menuUtamaAudioPool = [];
let sfxPoolIndex = 0;
let closeMenuPoolIndex = 0;
let menuUtamaPoolIndex = 0;

let hasMenuUtamaSFXPlayed = false;
let experienceEntryTime = 0;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass({ latencyHint: "interactive" });
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

// Pre-create light fallback HTMLAudioElement pools
for (let i = 0; i < 2; i++) {
  const a = new Audio("sfx/navigation.wav");
  a.preload = "auto";
  a.volume = 0.6;
  sfxAudioPool.push(a);

  const b = new Audio("sfx/close-menu.mp3");
  b.preload = "auto";
  b.volume = 0.75;
  closeMenuAudioPool.push(b);

  const c = new Audio("sfx/menu-utama.mp3");
  c.preload = "auto";
  c.volume = 0.8;
  menuUtamaAudioPool.push(c);
}

// Background buffer decoding for instantaneous hardware playback
async function loadAudioBuffers() {
  try {
    const [navRes, closeRes, menuRes] = await Promise.all([
      fetch("sfx/navigation.wav"),
      fetch("sfx/close-menu.mp3"),
      fetch("sfx/menu-utama.mp3")
    ]);
    const ctx = getAudioContext();
    if (ctx) {
      if (navRes.ok && !sfxAudioBuffer) {
        const buf = await navRes.arrayBuffer();
        sfxAudioBuffer = await ctx.decodeAudioData(buf);
      }
      if (closeRes.ok && !closeMenuAudioBuffer) {
        const buf = await closeRes.arrayBuffer();
        closeMenuAudioBuffer = await ctx.decodeAudioData(buf);
      }
      if (menuRes.ok && !menuUtamaAudioBuffer) {
        const buf = await menuRes.arrayBuffer();
        menuUtamaAudioBuffer = await ctx.decodeAudioData(buf);
      }
    }
  } catch (_) {}
}
if (window.innerWidth >= 1024) {
  loadAudioBuffers();
}

// Clean unified audio playback dispatcher
function playAudioChannel({
  buffer,
  staticElId,
  pool,
  getPoolIdx,
  setPoolIdx,
  volume = 0.6,
  onPlaySuccess
}) {
  const ctx = getAudioContext();
  if (ctx && ctx.state === "running" && buffer) {
    try {
      const source = ctx.createBufferSource();
      const gainNode = ctx.createGain();
      gainNode.gain.value = volume;
      source.buffer = buffer;
      source.connect(gainNode);
      gainNode.connect(ctx.destination);
      source.start(0);
      if (onPlaySuccess) onPlaySuccess();
      return true;
    } catch (_) {}
  }

  const staticEl = document.getElementById(staticElId);
  if (staticEl) {
    try {
      staticEl.currentTime = 0;
      staticEl.volume = volume;
      const p = staticEl.play();
      if (p !== undefined) {
        p.then(() => { if (onPlaySuccess) onPlaySuccess(); }).catch(() => {});
      }
      return true;
    } catch (_) {}
  }

  if (pool && pool.length > 0) {
    try {
      const idx = getPoolIdx();
      const sound = pool[idx];
      sound.currentTime = 0;
      sound.volume = volume;
      const sp = sound.play();
      if (sp !== undefined) {
        sp.then(() => { if (onPlaySuccess) onPlaySuccess(); }).catch(() => {});
      }
      setPoolIdx((idx + 1) % pool.length);
      return true;
    } catch (_) {}
  }
  return false;
}

function playSFX() {
  if (!isStarted) return;
  playAudioChannel({
    buffer: sfxAudioBuffer,
    staticElId: "sfx-navigation-el",
    pool: sfxAudioPool,
    getPoolIdx: () => sfxPoolIndex,
    setPoolIdx: (v) => { sfxPoolIndex = v; },
    volume: 0.6
  });
}

function playCloseMenuSFX() {
  playAudioChannel({
    buffer: closeMenuAudioBuffer,
    staticElId: "sfx-close-menu-el",
    pool: closeMenuAudioPool,
    getPoolIdx: () => closeMenuPoolIndex,
    setPoolIdx: (v) => { closeMenuPoolIndex = v; },
    volume: 0.75
  });
}

async function playMenuUtamaSFX() {
  if (hasMenuUtamaSFXPlayed) return true;
  const ctx = getAudioContext();
  if (ctx && ctx.state !== "running") {
    try { await ctx.resume(); } catch (_) {}
  }
  playAudioChannel({
    buffer: menuUtamaAudioBuffer,
    staticElId: "sfx-menu-utama-el",
    pool: menuUtamaAudioPool,
    getPoolIdx: () => menuUtamaPoolIndex,
    setPoolIdx: (v) => { menuUtamaPoolIndex = v; },
    volume: 0.95,
    onPlaySuccess: () => { hasMenuUtamaSFXPlayed = true; }
  });
  return true;
}

// Early Audio Unlocker on First User Gesture
async function unlockAudioEngine() {
  const ctx = getAudioContext();
  if (ctx) {
    if (ctx.state !== "running") {
      try { await ctx.resume(); } catch (_) {}
    }
    try {
      const buffer = ctx.createBuffer(1, 1, 22050);
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.connect(ctx.destination);
      source.start(0);
    } catch (_) {}
  }

  if (isStarted && !hasMenuUtamaSFXPlayed) {
    if (Date.now() - experienceEntryTime < 2500) {
      playMenuUtamaSFX();
    } else {
      hasMenuUtamaSFXPlayed = true;
    }
  }
}

["pointerdown", "mousedown", "touchstart", "touchend", "click", "keydown", "focus"].forEach((evt) => {
  window.addEventListener(evt, unlockAudioEngine, { capture: true, passive: true });
});

// --------------------------------------------------------------------------
// 4. Main Menu SVG Dynamic Mask Inversion Engine
// --------------------------------------------------------------------------
const selectorPath = "M 24.853754, 93.31573 135.14625, 49.684266 114.14751, 97.331142 Z";
const selectorBackgroundPath = "M 12.7428765,95.50088 144.25712,47.499123 116.75625,95.465764 Z";

let cachedOptionItems = [];

function renderOptions() {
  optionsList.innerHTML = "";
  cachedOptionItems = [];

  options.forEach((opt, index) => {
    const colorClass = colors[(index + 2) % colors.length];
    const cleanName = opt.name.replace(/ /g, "");
    const bannerScaleFactorX = opt.bannerScaleX || 1.0;
    const bannerScaleY = opt.bannerScaleY || 3.2;
    const scaleX = (cleanName.length * 0.52 + 1.6) * bannerScaleFactorX;
    const selectorTransform = `translate(-60, -9) rotate(8, 0, 100) scale(${scaleX}, ${bannerScaleY})`;
    const maskId = `selector-mask-${index}`;

    const item = document.createElement("div");
    item.className = `option-item ${index === 0 ? "selected" : ""}`;
    item.id = `option-item-${index}`;
    item.style.zIndex = index === 0 ? 15 : opt.zIndex;

    item.innerHTML = `
      <button 
        class="option-hitbox" 
        data-index="${index}" 
        aria-label="${opt.name}">
      </button>

      <svg
        width="950"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        class="option-svg"
        style="transform: translate(${opt.offsetX}px, ${opt.offsetY}px) rotate(${opt.rotation}deg);"
      >
        <defs>
          <mask
            id="${maskId}"
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="950"
            height="200"
          >
            <rect width="100%" height="100%" fill="black" />
            <g transform="${selectorTransform}" transform-origin="left center">
              <path fill="white" d="${selectorPath}" />
              <path class="pulse-anim" transform-origin="52 100" fill="white" d="${selectorBackgroundPath}" />
            </g>
          </mask>
        </defs>

        <!-- Selector banner when selected -->
        <g class="selector-group" transform="${selectorTransform}" transform-origin="left center">
          <path class="fill-pink pulse-anim" transform-origin="52 100" d="${selectorBackgroundPath}" />
          <path class="fill-fg" d="${selectorPath}" />
        </g>

        <!-- Base Text -->
        <text
          x="150"
          y="122"
          class="option-text base-text ${colorClass}"
          style="font-size: ${opt.fontSize || '4.8rem'};"
        >
          ${opt.name}
        </text>

        <!-- Masked Red Text (Over the white selector) -->
        <g class="masked-red-group" mask="url(#${maskId})">
          <text
            x="150"
            y="122"
            class="option-text fill-red"
            style="font-size: ${opt.fontSize || '4.8rem'};"
          >
            ${opt.name}
          </text>
        </g>
      </svg>
    `;

    // Interactive event triggers
    const hitbox = item.querySelector(".option-hitbox");
    hitbox.addEventListener("mouseenter", () => {
      if (selectedIndex !== index) {
        setIndex(index);
      }
    });

    hitbox.addEventListener("click", (e) => {
      setIndex(index);
      handleOptionConfirm(index, e);
    });

    optionsList.appendChild(item);
    cachedOptionItems.push(item);
  });
}

function setIndex(index) {
  if (index === selectedIndex && cachedOptionItems.length > 0) return;
  selectedIndex = index;

  playSFX();

  if (sideNumber) {
    sideNumber.textContent = (selectedIndex + 1).toString().padStart(2, "0");
  }

  // Speculatively preload the selected subpage's video just in time
  if (index === 0 && slinkBgVideo && slinkBgVideo.preload !== "auto") slinkBgVideo.preload = "auto";
  else if (index === 1 && skillBgVideo && skillBgVideo.preload !== "auto") skillBgVideo.preload = "auto";
  else if (index === 2 && experienceBgVideo && experienceBgVideo.preload !== "auto") experienceBgVideo.preload = "auto";
  else if (index === 3 && aboutBgVideo && aboutBgVideo.preload !== "auto") aboutBgVideo.preload = "auto";
  else if (index === 4 && contactBgVideo && contactBgVideo.preload !== "auto") contactBgVideo.preload = "auto";

  for (let idx = 0; idx < cachedOptionItems.length; idx++) {
    const item = cachedOptionItems[idx];
    if (idx === selectedIndex) {
      item.classList.add("selected");
      item.style.zIndex = 15;
    } else {
      item.classList.remove("selected");
      item.style.zIndex = options[idx].zIndex;
    }
  }
}

// --------------------------------------------------------------------------
// 5. Wavy Ripple Geometric Math & Screen Transition Engine
// --------------------------------------------------------------------------
function generateWavyPolygon(
  cx, 
  cy, 
  r, 
  numPoints = 72, 
  waves1 = 7, 
  amp1 = 0.085, 
  waves2 = 14, 
  amp2 = 0.035, 
  phase = 0.0, 
  scaleX = 1.25, 
  scaleY = 1.05
) {
  if (r <= 0.5) {
    const pt = `${cx.toFixed(1)}px ${cy.toFixed(1)}px`;
    return `polygon(${new Array(numPoints).fill(pt).join(", ")})`;
  }
  const points = [];
  const step = (2 * Math.PI) / numPoints;
  for (let i = 0; i < numPoints; i++) {
    const theta = i * step;
    const wave = 1.0 + amp1 * Math.sin(waves1 * theta + phase) + amp2 * Math.cos(waves2 * theta + phase * 1.6);
    const px = cx + r * wave * Math.cos(theta) * scaleX;
    const py = cy + r * wave * Math.sin(theta) * scaleY;
    points.push(`${px.toFixed(1)}px ${py.toFixed(1)}px`);
  }
  return `polygon(${points.join(", ")})`;
}

function calculateTargetRadius(origin) {
  const maxDist = Math.hypot(
    Math.max(origin.x, window.innerWidth - origin.x),
    Math.max(origin.y, window.innerHeight - origin.y)
  );
  return Math.ceil(maxDist * 1.85);
}

// Universal Origin Locators
function getOptionCenter(optionIndex, clickEvent, fallbackXRatio = 0.56, fallbackYRatio = 0.48) {
  if (clickEvent && typeof clickEvent.clientX === "number" && (clickEvent.clientX > 0 || clickEvent.clientY > 0)) {
    return { x: clickEvent.clientX, y: clickEvent.clientY };
  }

  const optionItem = document.getElementById(`option-item-${optionIndex}`) || document.querySelectorAll(".option-item")[optionIndex];
  if (optionItem) {
    const textEls = optionItem.querySelectorAll(".option-text");
    for (let i = 0; i < textEls.length; i++) {
      const tr = textEls[i].getBoundingClientRect();
      if (tr.width > 0 && tr.height > 0) {
        return {
          x: tr.left + tr.width * 0.5,
          y: tr.top + tr.height * 0.5
        };
      }
    }
    const ir = optionItem.getBoundingClientRect();
    if (ir.width > 0 && ir.height > 0) {
      return {
        x: ir.left + ir.width * 0.45,
        y: ir.top + ir.height * 0.5
      };
    }
  }

  return {
    x: window.innerWidth * fallbackXRatio,
    y: window.innerHeight * fallbackYRatio
  };
}

function getExitOrigin(buttonElOrId, fallbackX, fallbackY) {
  const btn = typeof buttonElOrId === "string" ? document.getElementById(buttonElOrId) : buttonElOrId;
  if (btn) {
    const r = btn.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      return {
        x: r.left + r.width * 0.5,
        y: r.top + r.height * 0.5
      };
    }
  }
  return {
    x: fallbackX !== undefined ? fallbackX : window.innerWidth - 120,
    y: fallbackY !== undefined ? fallbackY : window.innerHeight - 55
  };
}

// Named Aliases for Backward Compatibility & Direct Script Control (Updated for menu layout)
const getProjectOptionCenter = (evt) => getOptionCenter(0, evt, 0.62, 0.38);
const getSkillOptionCenter   = (evt) => getOptionCenter(1, evt, 0.60, 0.48);
const getAboutOptionCenter   = (evt) => getOptionCenter(2, evt, 0.58, 0.57);
const getContactOptionCenter = (evt) => getOptionCenter(3, evt, 0.57, 0.66);

const getProjectExitOrigin = () => getExitOrigin(slinkBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getSkillExitOrigin   = () => getExitOrigin(skillBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getAboutExitOrigin   = () => getExitOrigin(aboutBackBtn, window.innerWidth - 120, window.innerHeight - 55);
const getContactExitOrigin = () => getExitOrigin(contactBackBtn, 80, window.innerHeight - 60);

// Unified WAAPI Ripple Reveal & Close Transitions
function executeWavyReveal({
  pageEl,
  origin,
  bodyClass,
  videoEl,
  onStart,
  onComplete,
  duration = 520,
  easing = "cubic-bezier(0.2, 1, 0.35, 1)"
}) {
  if (!pageEl) {
    if (bodyClass) document.body.classList.add(bodyClass);
    if (onComplete) onComplete();
    return;
  }

  isWavyTransitionRunning = true;
  if (onStart) onStart();

  const targetRadius = calculateTargetRadius(origin);

  pageEl.classList.remove("active");
  pageEl.classList.add("circle-transitioning");
  pageEl.setAttribute("aria-hidden", "false");

  // Pause main menu background video while subpage is displayed to eliminate dual-video GPU decode load
  if (bgVideoLoop && !bgVideoLoop.paused) {
    bgVideoLoop.pause();
  }

  if (videoEl) {
    videoEl.currentTime = 0;
    videoEl.muted = true;
    videoEl.play().catch(() => {});
  }

  const anim = pageEl.animate([
    { 
      clipPath: generateWavyPolygon(origin.x, origin.y, 0, 72, 7, 0.085, 14, 0.035, 0.0, 1.25, 1.05) 
    },
    { 
      clipPath: generateWavyPolygon(origin.x + 22, origin.y - 12, targetRadius * 0.45, 72, 7, 0.09, 14, 0.035, 1.2, 1.25, 1.05),
      offset: 0.38
    },
    { 
      clipPath: generateWavyPolygon(origin.x + 10, origin.y - 5, targetRadius * 0.85, 72, 7, 0.075, 14, 0.025, 2.2, 1.20, 1.05),
      offset: 0.70
    },
    { 
      clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius, 72, 7, 0.05, 14, 0.015, 3.4, 1.15, 1.02) 
    }
  ], {
    duration,
    easing,
    fill: "forwards"
  });

  anim.onfinish = () => {
    pageEl.classList.remove("circle-transitioning");
    pageEl.classList.add("active");
    pageEl.style.clipPath = "";
    if (bodyClass) document.body.classList.add(bodyClass);
    try { anim.cancel(); } catch (_) {}
    isWavyTransitionRunning = false;
    if (onComplete) onComplete();
  };
}

function executeWavyClose({
  pageEl,
  exitOrigin,
  bodyClass,
  videoEl,
  onComplete,
  duration = 480,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)"
}) {
  playCloseMenuSFX();

  if (!pageEl) {
    if (bodyClass) document.body.classList.remove(bodyClass);
    isWavyTransitionRunning = false;
    return;
  }

  isWavyTransitionRunning = true;
  const targetRadius = calculateTargetRadius(exitOrigin);

  if (bodyClass) document.body.classList.remove(bodyClass);

  pageEl.classList.remove("active");
  pageEl.classList.add("circle-transitioning");

  const anim = pageEl.animate([
    { 
      clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, targetRadius, 72, 9, 0.07, 18, 0.025, 0.0, 1.15, 1.25) 
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x - 20, exitOrigin.y - 12, targetRadius * 0.80, 72, 9, 0.08, 18, 0.03, 1.0, 1.15, 1.25),
      offset: 0.32
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x - 28, exitOrigin.y - 18, targetRadius * 0.42, 72, 9, 0.085, 18, 0.03, 2.0, 1.15, 1.25),
      offset: 0.65
    },
    { 
      clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, 0, 72, 9, 0.08, 18, 0.025, 3.0, 1.15, 1.25) 
    }
  ], {
    duration,
    easing,
    fill: "forwards"
  });

  anim.onfinish = () => {
    pageEl.classList.remove("circle-transitioning", "active");
    pageEl.style.clipPath = "";
    pageEl.setAttribute("aria-hidden", "true");
    if (videoEl) videoEl.pause();
    // Resume main menu loop video seamlessly
    if (bgVideoLoop && bgVideoLoop.paused) {
      bgVideoLoop.play().catch(() => {});
    }
    try { anim.cancel(); } catch (_) {}
    isWavyTransitionRunning = false;
    if (onComplete) onComplete();
  };
}

// --------------------------------------------------------------------------
// 6. Subpage: PROJECT (S.Link Cards Stack)
// --------------------------------------------------------------------------
function triggerProjectTitleAnimation() {
  const projectDiv = document.getElementById("slink-project-div");
  if (projectDiv) {
    projectDiv.classList.remove("animating");
    void projectDiv.offsetWidth;
    projectDiv.classList.add("animating");
  }
}

function renderSlinkCards() {
  if (!slinkCardsContainer) return;
  slinkCardsContainer.innerHTML = "";

  slinkData.forEach((item, idx) => {
    const card = document.createElement("button");
    const isActive = idx === selectedSlinkIndex;
    card.className = `slink-card ${isActive ? "active" : ""}`;
    card.id = `slink-card-${idx}`;
    card.setAttribute("role", "tab");
    card.setAttribute("aria-selected", isActive ? "true" : "false");
    card.style.setProperty("--card-idx", idx);

    card.innerHTML = `
      <div class="card-unified-row">
        <!-- Solid Sharp Box for Roman Numeral -->
        <div class="card-numeral-box">
          <span class="card-numeral-text">${item.numeral}</span>
        </div>

        <!-- Unified Main Body: Title & Caption Together -->
        <div class="card-main-body">
          <div class="card-title-text">${item.title}</div>
          <div class="card-subtitle-text">${item.subtitle}</div>
          <div class="card-red-accent" aria-hidden="true"></div>
        </div>
      </div>
    `;

    card.addEventListener("mouseenter", () => {
      if (isProjectPageOpen && !isWavyTransitionRunning && selectedSlinkIndex !== idx) {
        selectSlinkCard(idx);
      }
    });

    card.addEventListener("click", () => {
      if (isProjectPageOpen && !isWavyTransitionRunning) {
        if (selectedSlinkIndex !== idx) {
          selectSlinkCard(idx);
        } else {
          confirmSlinkSelection();
        }
      }
    });

    slinkCardsContainer.appendChild(card);
  });
}

function selectSlinkCard(index) {
  selectedSlinkIndex = index;
  const cards = document.querySelectorAll(".slink-card");
  cards.forEach((c, idx) => {
    if (idx === selectedSlinkIndex) {
      c.classList.add("active");
      c.setAttribute("aria-selected", "true");
    } else {
      c.classList.remove("active");
      c.setAttribute("aria-selected", "false");
    }
  });
  playSFX();
}

function confirmSlinkSelection() {
  if (isModalOpen) return;
  const item = slinkData[selectedSlinkIndex];
  if (item && item.details && item.details.length) {
    openProjectDetail(item);
  } else if (item && item.url && item.url !== "#") {
    playSFX();
    setTimeout(() => {
      window.location.href = item.url;
    }, 200);
  } else {
    playSFX();
  }
}

function openProjectPage(clickEvent) {
  if (isProjectPageOpen || isWavyTransitionRunning) return;
  isProjectPageOpen = true;
  selectedSlinkIndex = 0;
  playSFX();

  executeWavyReveal({
    pageEl: projectPage,
    origin: getProjectOptionCenter(clickEvent),
    bodyClass: "project-screen-active",
    videoEl: slinkBgVideo,
    onStart: () => {
      renderSlinkCards();
      selectSlinkCard(0);
      triggerProjectTitleAnimation();
    }
  });
}

function closeProjectPage() {
  if (!isProjectPageOpen || isWavyTransitionRunning) return;
  isProjectPageOpen = false;

  executeWavyClose({
    pageEl: projectPage,
    exitOrigin: getProjectExitOrigin(),
    bodyClass: "project-screen-active",
    videoEl: slinkBgVideo
  });
}

const playWavyCircleTransition = (clickEvent, onComplete) => {
  openProjectPage(clickEvent);
  if (onComplete) setTimeout(onComplete, 850);
};

// --------------------------------------------------------------------------
// 7. Subpage: SKILLS (Stats & Abilities Interface)
// --------------------------------------------------------------------------
function triggerSkillTitleAnimation() {
  if (skillHeaderDiv) {
    skillHeaderDiv.classList.remove("animating");
    void skillHeaderDiv.offsetWidth;
    skillHeaderDiv.classList.add("animating");
  }
}

function renderSkillsTabs() {
  if (!skillTabsNav) return;
  skillTabsNav.innerHTML = "";

  skillTabsList.forEach((tab) => {
    const btn = document.createElement("button");
    const isActive = (tab.id === currentSkillTab);
    btn.className = `p3r-skill-tab ${isActive ? "active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
    btn.innerHTML = `
      <span class="p3r-tab-tag">${tab.code}</span>
      <span class="p3r-tab-label">${tab.label}</span>
    `;

    btn.addEventListener("click", () => {
      if (currentSkillTab !== tab.id) {
        setSkillTab(tab.id);
      }
    });

    skillTabsNav.appendChild(btn);
  });
}

function setSkillTab(tabId) {
  currentSkillTab = tabId;
  playSFX();
  renderSkillsTabs();
  renderSkillStats(currentSkillTab);
}

function prevSkillTab() {
  const currIdx = skillTabsList.findIndex(t => t.id === currentSkillTab);
  const prevIdx = (currIdx - 1 + skillTabsList.length) % skillTabsList.length;
  setSkillTab(skillTabsList[prevIdx].id);
}

function nextSkillTab() {
  const currIdx = skillTabsList.findIndex(t => t.id === currentSkillTab);
  const nextIdx = (currIdx + 1) % skillTabsList.length;
  setSkillTab(skillTabsList[nextIdx].id);
}

function renderSkillStats(category = "analytics") {
  if (!p3rSkillsContainer) return;
  p3rSkillsContainer.innerHTML = "";

  const groupsToDisplay = skillGroupsData.filter(g => g.id === category);

  groupsToDisplay.forEach((group) => {
    const groupDiv = document.createElement("div");
    groupDiv.className = "p3r-skill-group";
    groupDiv.id = `skill-group-${group.id}`;

    let rowsHTML = "";
    group.skills.forEach((skill, idx) => {
      rowsHTML += `
        <div class="p3r-stat-row" style="animation-delay: ${idx * 0.06}s;">
          <div class="p3r-stat-name-col">
            <span class="p3r-stat-name">${skill.name}</span>
          </div>
          <div class="p3r-stat-bar-track">
            <div class="p3r-stat-bar-fill" data-v="${skill.level}" style="width: ${skill.level}%;">
              <div class="p3r-stat-bar-tip" aria-hidden="true"></div>
            </div>
          </div>
          <div class="p3r-stat-lv">
            <span class="p3r-stat-lv-prefix">LV</span>
            <span class="p3r-stat-lv-val">${skill.level}</span>
          </div>
        </div>
      `;
    });

    groupDiv.innerHTML = `
      <div class="p3r-skill-group-header">
        <h3 class="p3r-group-title">${group.title}</h3>
        <div class="p3r-group-line"></div>
      </div>
      <div class="p3r-skill-rows-list">
        ${rowsHTML}
      </div>
    `;

    p3rSkillsContainer.appendChild(groupDiv);
  });
}

function openSkillPage(clickEvent) {
  if (isSkillPageOpen || isWavyTransitionRunning) return;
  isSkillPageOpen = true;
  playSFX();

  executeWavyReveal({
    pageEl: skillPage,
    origin: getSkillOptionCenter(clickEvent),
    bodyClass: "skill-screen-active",
    videoEl: skillBgVideo,
    onStart: () => {
      renderSkillsTabs();
      renderSkillStats(currentSkillTab);
      triggerSkillTitleAnimation();
    }
  });
}

function closeSkillPage() {
  if (!isSkillPageOpen || isWavyTransitionRunning) return;
  isSkillPageOpen = false;

  executeWavyClose({
    pageEl: skillPage,
    exitOrigin: getSkillExitOrigin(),
    bodyClass: "skill-screen-active",
    videoEl: skillBgVideo
  });
}

// --------------------------------------------------------------------------
// 8. Subpage: ABOUT (Profile & Philosophy Interface)
// --------------------------------------------------------------------------
function triggerAboutTitleAnimation() {
  if (aboutHeaderDiv) {
    aboutHeaderDiv.classList.remove("animating");
    void aboutHeaderDiv.offsetWidth;
    aboutHeaderDiv.classList.add("animating");
  }
}

function openAboutPage(clickEvent) {
  if (isAboutPageOpen || isWavyTransitionRunning) return;
  isAboutPageOpen = true;
  playSFX();

  executeWavyReveal({
    pageEl: aboutPage,
    origin: getAboutOptionCenter(clickEvent),
    bodyClass: "about-screen-active",
    videoEl: aboutBgVideo,
    onStart: () => {
      triggerAboutTitleAnimation();
    }
  });
}

// --------------------------------------------------------------------------
// Experience Page Open & Close
// --------------------------------------------------------------------------
let isExperiencePageOpen = false;

function getExperienceOptionCenter(clickEvent) {
  if (clickEvent && clickEvent.currentTarget) {
    const rect = clickEvent.currentTarget.getBoundingClientRect();
    return { x: rect.left + rect.width * 0.5, y: rect.top + rect.height * 0.5 };
  }
  const optionEl = document.querySelector('[data-option-index="2"]');
  if (optionEl) {
    const r = optionEl.getBoundingClientRect();
    return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
  }
  return { x: window.innerWidth * 0.35, y: window.innerHeight * 0.5 };
}

function getExperienceExitOrigin() {
  if (experienceBackBtn) {
    const r = experienceBackBtn.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
    }
  }
  return { x: window.innerWidth * 0.1, y: window.innerHeight * 0.92 };
}

function openExperiencePage(clickEvent) {
  if (isExperiencePageOpen || isWavyTransitionRunning) return;
  isExperiencePageOpen = true;
  playSFX();

  executeWavyReveal({
    pageEl: experiencePage,
    origin: getExperienceOptionCenter(clickEvent),
    bodyClass: "experience-screen-active",
    videoEl: experienceBgVideo,
    onStart: () => {
      attachExperienceCardListeners();
    }
  });
}

// Attach click handlers to experience cards
function attachExperienceCardListeners() {
  const expCards = document.querySelectorAll('.p3r-exp-card');
  expCards.forEach((card, index) => {
    // Remove existing listeners
    const newCard = card.cloneNode(true);
    card.parentNode.replaceChild(newCard, card);
    
    // Add hover effect
    newCard.style.cursor = 'pointer';
    
    // Add click listener
    newCard.addEventListener('click', () => {
      if (!isModalOpen && experienceData[index]) {
        openExperienceDetail(experienceData[index]);
      }
    });
  });
}

// Open experience detail modal
function openExperienceDetail(expData) {
  if (isModalOpen) return;
  
  // Find the clicked card for origin point
  const cards = document.querySelectorAll('.p3r-exp-card');
  let origin = { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 };
  
  cards.forEach((card, idx) => {
    if (experienceData[idx] && experienceData[idx].id === expData.id) {
      const r = card.getBoundingClientRect();
      origin = { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
    }
  });
  
  showModal(expData.tag, expData.company, expData.summary, expData.details, origin);
}

function closeExperiencePage() {
  if (!isExperiencePageOpen || isWavyTransitionRunning) return;
  isExperiencePageOpen = false;

  executeWavyClose({
    pageEl: experiencePage,
    exitOrigin: getExperienceExitOrigin(),
    bodyClass: "experience-screen-active",
    videoEl: experienceBgVideo
  });
}

function closeAboutPage() {
  if (!isAboutPageOpen || isWavyTransitionRunning) return;
  isAboutPageOpen = false;

  executeWavyClose({
    pageEl: aboutPage,
    exitOrigin: getAboutExitOrigin(),
    bodyClass: "about-screen-active",
    videoEl: aboutBgVideo
  });
}

// --------------------------------------------------------------------------
// 9. Subpage: CONTACT (Mail / Phone Messaging UI)
// --------------------------------------------------------------------------
function selectContactRow(index) {
  if (!contactMailRows || contactMailRows.length === 0) return;
  selectedContactIndex = Math.max(0, Math.min(index, contactMailRows.length - 1));
  contactMailRows.forEach((row, i) => {
    if (i === selectedContactIndex) {
      row.classList.add("active");
    } else {
      row.classList.remove("active");
    }
  });
  playSFX();
}

function triggerContactPhoneAnimation() {
  const phoneWrap = document.querySelector(".p3r-mail-phone-wrap");
  if (phoneWrap) {
    phoneWrap.style.animation = "none";
    void phoneWrap.offsetWidth;
    phoneWrap.style.animation = "";
  }
}

function openContactPage(clickEvent) {
  if (isContactPageOpen || isWavyTransitionRunning) return;
  isContactPageOpen = true;
  playSFX();

  executeWavyReveal({
    pageEl: contactPage,
    origin: getContactOptionCenter(clickEvent),
    bodyClass: "contact-screen-active",
    videoEl: contactBgVideo,
    onStart: () => {
      triggerContactPhoneAnimation();
      selectContactRow(0);
    }
  });
}

function closeContactPage() {
  if (!isContactPageOpen || isWavyTransitionRunning) return;
  isContactPageOpen = false;

  executeWavyClose({
    pageEl: contactPage,
    exitOrigin: getContactExitOrigin(),
    bodyClass: "contact-screen-active",
    videoEl: contactBgVideo
  });
}

// --------------------------------------------------------------------------
// 10. Portfolio Modal System (General Fallback for ITEM, EQUIP, SYSTEM)
// --------------------------------------------------------------------------
function getModalExitOrigin() {
  if (modalCloseBtn) {
    const r = modalCloseBtn.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) {
      return { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
    }
  }
  return { x: window.innerWidth * 0.78, y: window.innerHeight * 0.22 };
}

function openModal(index) {
  const opt = options[index];
  showModal(opt.tag, opt.name, opt.summary, opt.cards, getOptionCenter(index));
}

// Project detail: reuses the exact same wavy modal reveal, originating from the selected card.
function openProjectDetail(item) {
  const el = document.getElementById(`slink-card-${selectedSlinkIndex}`);
  let origin = { x: window.innerWidth * 0.3, y: window.innerHeight * 0.5 };
  if (el) {
    const r = el.getBoundingClientRect();
    origin = { x: r.left + r.width * 0.5, y: r.top + r.height * 0.5 };
  }
  showModal(item.tag, item.title, item.summary, item.details, origin);
}

function showModal(tag, title, summary, cards, origin) {
  modalTag.textContent = tag;
  modalTitle.textContent = title;
  modalSummary.textContent = summary;

  modalCardsContainer.innerHTML = "";
  (cards || []).forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.className = "modal-info-card";
    cardEl.innerHTML = `
      <div class="info-card-title">${card.title}</div>
      <div class="info-card-desc">${card.desc}</div>
    `;
    modalCardsContainer.appendChild(cardEl);
  });

  isModalOpen = true;
  portfolioModal.classList.add("active");
  portfolioModal.setAttribute("aria-hidden", "false");
  playSFX();

  const targetRadius = calculateTargetRadius(origin);

  const keyframes = [
    { clipPath: generateWavyPolygon(origin.x, origin.y, 0, 100, 6, 0.08, 12, 0.03, 0.0, 1.25, 1.05) },
    { clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius * 0.45, 100, 6, 0.085, 12, 0.03, 1.0, 1.25, 1.05), offset: 0.4 },
    { clipPath: generateWavyPolygon(origin.x, origin.y, targetRadius, 100, 6, 0.05, 12, 0.015, 2.5, 1.15, 1.02) }
  ];

  portfolioModal.animate(keyframes, {
    duration: 650,
    easing: "cubic-bezier(0.2, 1, 0.35, 1)",
    fill: "forwards"
  });
}

function closeModal() {
  if (!isModalOpen) return;
  isModalOpen = false;
  playCloseMenuSFX();

  const exitOrigin = getModalExitOrigin();
  const targetRadius = calculateTargetRadius(exitOrigin);

  const closeAnim = portfolioModal.animate([
    { clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, targetRadius, 100, 8, 0.07, 16, 0.025, 0.0, 1.15, 1.25) },
    { clipPath: generateWavyPolygon(exitOrigin.x, exitOrigin.y, 0, 100, 8, 0.08, 16, 0.02, 2.5, 1.15, 1.25) }
  ], {
    duration: 600,
    easing: "cubic-bezier(0.2, 1, 0.35, 1)",
    fill: "forwards"
  });

  closeAnim.onfinish = () => {
    portfolioModal.classList.remove("active");
    portfolioModal.setAttribute("aria-hidden", "true");
    portfolioModal.style.clipPath = "";
  };
}

// Option Confirmation Dispatcher (5 Options: PROJECT, SKILLS, EXPERIENCE, ABOUT, CONTACT)
function handleOptionConfirm(index, clickEvent) {
  if (index === 0) {
    openProjectPage(clickEvent);
  } else if (index === 1) {
    openSkillPage(clickEvent);
  } else if (index === 2) {
    openExperiencePage(clickEvent);
  } else if (index === 3) {
    openAboutPage(clickEvent);
  } else if (index === 4) {
    openContactPage(clickEvent);
  }
}

// --------------------------------------------------------------------------
// 11. Background Video Flow in Menu Utama (Intro -> Loop Seamless Cut)
// --------------------------------------------------------------------------
let hasSwitchedToLoop = false;

function switchToLoopVideo() {
  if (hasSwitchedToLoop) return;
  hasSwitchedToLoop = true;

  if (bgVideoLoop) {
    if (bgVideoLoop.preload !== "auto") bgVideoLoop.preload = "auto";
    bgVideoLoop.currentTime = 0;
    const playPromise = bgVideoLoop.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          if (bgVideoIntro) {
            bgVideoIntro.classList.add("fade-out");
            setTimeout(() => {
              bgVideoIntro.pause();
              bgVideoIntro.style.display = "none";
            }, 300);
          }
        })
        .catch((err) => {
          console.warn("Loop video playback notice:", err);
          if (bgVideoIntro) bgVideoIntro.classList.add("fade-out");
        });
    } else {
      if (bgVideoIntro) bgVideoIntro.classList.add("fade-out");
    }
  }
}

if (bgVideoIntro) {
  bgVideoIntro.addEventListener("ended", switchToLoopVideo);
  bgVideoIntro.addEventListener("error", switchToLoopVideo);
  bgVideoIntro.addEventListener("timeupdate", () => {
    if (!hasSwitchedToLoop && bgVideoIntro.duration > 0) {
      if (bgVideoIntro.currentTime >= bgVideoIntro.duration * 0.4) {
        if (bgVideoLoop && bgVideoLoop.preload !== "auto") {
          bgVideoLoop.preload = "auto";
        }
      }
      if (bgVideoIntro.currentTime >= bgVideoIntro.duration - 0.08) {
        switchToLoopVideo();
      }
    }
  });
}

// --------------------------------------------------------------------------
// 12. Loading Screen & Experience Entry Sequence
// --------------------------------------------------------------------------
let currentProgress = 0;
let targetProgress = 15;
let progressTimer = null;

function setProgress(val) {
  targetProgress = Math.min(100, Math.max(targetProgress, Math.round(val)));
}

function updateProgressUI(val) {
  const rounded = Math.min(100, Math.max(0, Math.round(val)));
  if (loadingBar) loadingBar.style.width = `${rounded}%`;
  if (loadingPercent) loadingPercent.textContent = `${rounded}%`;
  if (loadingScreen) loadingScreen.setAttribute("aria-valuenow", rounded);
}

function runProgressTicker() {
  return new Promise((resolve) => {
    function tick() {
      if (currentProgress < targetProgress) {
        const step = Math.max(1, Math.ceil((targetProgress - currentProgress) * 0.35));
        currentProgress = Math.min(targetProgress, currentProgress + step);
        updateProgressUI(currentProgress);
      }

      if (currentProgress >= 100) {
        updateProgressUI(100);
        resolve();
      } else {
        requestAnimationFrame(tick);
      }
    }
    requestAnimationFrame(tick);
  });
}

async function startLoadingSequence() {
  const tickerPromise = runProgressTicker();

  if (bgVideoIntro) {
    bgVideoIntro.muted = true;
    bgVideoIntro.defaultMuted = true;
  }
  if (bgVideoLoop) {
    bgVideoLoop.muted = true;
    bgVideoLoop.defaultMuted = true;
  }

  // Preload audio and fonts with minimal latency
  loadAudioBuffers();
  setProgress(55);

  try {
    if (document.fonts && document.fonts.ready) {
      await Promise.race([
        document.fonts.ready,
        new Promise((r) => setTimeout(r, 120))
      ]);
    }
  } catch (_) {}

  setProgress(100);
  await tickerPromise;
  updateProgressUI(100);
  isLoaded = true;

  await new Promise((r) => setTimeout(r, 60));

  const ctx = getAudioContext();
  if (ctx && ctx.state !== "running") {
    ctx.resume().catch(() => {});
  }

  enterExperience();
}

function enterExperience() {
  if (isStarted) return;
  isStarted = true;
  experienceEntryTime = Date.now();

  playMenuUtamaSFX();

  if (loadingScreen) {
    loadingScreen.classList.add("dismissed");
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 450);
  }

  const menuColumn = document.getElementById("menu-column");
  if (menuColumn) menuColumn.classList.add("menu-entered");
  const menuProfileHeader = document.getElementById("menu-profile-header");
  if (menuProfileHeader) menuProfileHeader.classList.add("menu-entered");

  if (bgVideoIntro) {
    if (bgVideoIntro.preload !== "auto") bgVideoIntro.preload = "auto";
    bgVideoIntro.currentTime = 0;
    bgVideoIntro.muted = true;
    const playP = bgVideoIntro.play();
    if (playP !== undefined) {
      playP.catch((err) => {
        console.warn("Intro playback notice:", err);
        switchToLoopVideo();
      });
    }
  }
}

// --------------------------------------------------------------------------
// 13. Event Listeners & Keyboard Navigation
// --------------------------------------------------------------------------
if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
if (modalFooterCloseBtn) modalFooterCloseBtn.addEventListener("click", closeModal);
if (portfolioModal) {
  portfolioModal.addEventListener("click", (e) => {
    if (e.target === portfolioModal) closeModal();
  });
}

if (slinkConfirmBtn) slinkConfirmBtn.addEventListener("click", confirmSlinkSelection);
if (slinkBackBtn) slinkBackBtn.addEventListener("click", closeProjectPage);
if (skillBackBtn) skillBackBtn.addEventListener("click", closeSkillPage);
if (skillTabPrevBtn) skillTabPrevBtn.addEventListener("click", prevSkillTab);
if (skillTabNextBtn) skillTabNextBtn.addEventListener("click", nextSkillTab);
if (experienceBackBtn) experienceBackBtn.addEventListener("click", closeExperiencePage);
if (aboutBackBtn) aboutBackBtn.addEventListener("click", closeAboutPage);
if (contactBackBtn) contactBackBtn.addEventListener("click", closeContactPage);

if (contactMailRows && contactMailRows.length > 0) {
  contactMailRows.forEach((row, idx) => {
    row.addEventListener("mouseenter", () => {
      selectContactRow(idx);
    });
  });
}

// Keyboard Router
document.addEventListener("keydown", (e) => {
  if (!isStarted) {
    if (isLoaded || e.key === "Enter" || e.key === " ") {
      enterExperience();
    }
    return;
  }

  // Modal opened from the Project page takes priority
  if (isModalOpen) {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " " || e.key.toLowerCase() === "a" || e.key.toLowerCase() === "b" || e.key === "Backspace") {
      e.preventDefault();
      closeModal();
    }
    return;
  }

  // Active Screen: Project
  if (isProjectPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeProjectPage();
    } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
      e.preventDefault();
      selectSlinkCard((selectedSlinkIndex + 1) % slinkData.length);
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
      e.preventDefault();
      selectSlinkCard((selectedSlinkIndex - 1 + slinkData.length) % slinkData.length);
    } else if (e.key === "Enter" || e.key === " " || e.key.toLowerCase() === "a") {
      e.preventDefault();
      confirmSlinkSelection();
    }
    return;
  }

  // Active Screen: Skill
  if (isSkillPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeSkillPage();
    } else if (e.key.toLowerCase() === "q" || e.key === "ArrowLeft") {
      e.preventDefault();
      prevSkillTab();
    } else if (e.key.toLowerCase() === "e" || e.key === "ArrowRight") {
      e.preventDefault();
      nextSkillTab();
    }
    return;
  }

  // Active Screen: Experience
  if (isExperiencePageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeExperiencePage();
    }
    return;
  }

  // Active Screen: About
  if (isAboutPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeAboutPage();
    }
    return;
  }

  // Active Screen: Contact
  if (isContactPageOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "b" || e.key.toLowerCase() === "backspace") {
      e.preventDefault();
      closeContactPage();
    } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
      e.preventDefault();
      selectContactRow((selectedContactIndex + 1) % contactMailRows.length);
    } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
      e.preventDefault();
      selectContactRow((selectedContactIndex - 1 + contactMailRows.length) % contactMailRows.length);
    } else if (e.key === "Enter" || e.key === " ") {
      if (contactMailRows[selectedContactIndex]) {
        contactMailRows[selectedContactIndex].click();
      }
    }
    return;
  }

  // Active Screen: Modal
  if (isModalOpen) {
    if (e.key === "Escape" || e.key.toLowerCase() === "a") {
      closeModal();
    }
    return;
  }

  // Main Menu Navigation
  if (e.key === "ArrowDown" || e.key.toLowerCase() === "s") {
    e.preventDefault();
    setIndex((selectedIndex + 1) % options.length);
  } else if (e.key === "ArrowUp" || e.key.toLowerCase() === "w") {
    e.preventDefault();
    setIndex((selectedIndex - 1 + options.length) % options.length);
  } else if (e.key === "Enter" || e.key === " " || e.key.toLowerCase() === "b") {
    e.preventDefault();
    handleOptionConfirm(selectedIndex);
  } else if (e.key === "Escape" || e.key.toLowerCase() === "a") {
    playSFX();
  }
});

// --------------------------------------------------------------------------
// 14. Initialization & Window Exports
// --------------------------------------------------------------------------
renderOptions();

const urlParams = new URLSearchParams(window.location.search);
const initialSelect = parseInt(urlParams.get("select"), 10);
if (!isNaN(initialSelect) && initialSelect >= 0 && initialSelect < options.length) {
  setIndex(initialSelect);
} else {
  setIndex(0);
}

// Expose public API for debugging, URL parameters, and automated testing
window.openProjectPage = openProjectPage;
window.closeProjectPage = closeProjectPage;
window.openSkillPage = openSkillPage;
window.closeSkillPage = closeSkillPage;
window.openAboutPage = openAboutPage;
window.closeAboutPage = closeAboutPage;
window.openContactPage = openContactPage;
window.closeContactPage = closeContactPage;
window.triggerContactPhoneAnimation = triggerContactPhoneAnimation;
window.playWavyCircleTransition = playWavyCircleTransition;

// URL Navigation Shortcuts & Responsive Init
if (window.innerWidth < 1024) {
  // Mobile / Small screen mode: cleanly dismiss loading HUD and exit immediately
  if (loadingScreen) loadingScreen.style.display = "none";
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && !isStarted) {
      loadAudioBuffers();
      startLoadingSequence();
    }
  }, { once: true });
} else if (urlParams.get("page") === "project") {
  if (loadingScreen) loadingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  openProjectPage();
  triggerProjectTitleAnimation();
} else if (urlParams.get("page") === "skill" || urlParams.get("page") === "skills") {
  if (loadingScreen) loadingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  const tabParam = urlParams.get("tab") || urlParams.get("cat");
  if (tabParam && skillTabsList.some((t) => t.id === tabParam)) {
    currentSkillTab = tabParam;
  }
  openSkillPage();
  triggerSkillTitleAnimation();
} else if (urlParams.get("page") === "about") {
  if (loadingScreen) loadingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  openAboutPage();
  triggerAboutTitleAnimation();
} else if (urlParams.get("page") === "contact") {
  if (loadingScreen) loadingScreen.style.display = "none";
  isStarted = true;
  isLoaded = true;
  openContactPage();
} else if (urlParams.get("skip_loading") === "1") {
  if (loadingScreen) loadingScreen.style.display = "none";
  enterExperience();
  switchToLoopVideo();
} else {
  startLoadingSequence();
}

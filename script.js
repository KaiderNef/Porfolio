const projects = {
  sales: {
    kicker: "CASE FILE / 01 — DATA AUTOMATION",
    title: "Automated Sales Reporting",
    summary: "A repeatable reporting pipeline that turns raw SAP sales data into monthly views by province and brand.",
    challenge: "Manual consolidation created a long reporting cycle and delayed access to a consistent view of sales performance.",
    approach: "Built a Python ETL workflow across SAP exports, a raw-data layer, and Power BI / Excel outputs. Automated the recurring transformation steps and report generation.",
    outcome: "Reduced the reporting cycle from roughly two working days to around six hours per month, saving approximately ten working hours monthly and making the report available earlier.",
    tools: ["Python", "SAP", "ETL", "Power BI", "Excel"]
  },
  nielsen: {
    kicker: "CASE FILE / 02 — MARKET INTELLIGENCE",
    title: "Nielsen Retail Audit BI",
    summary: "Re-engineered the Nielsen Retail Audit workflow into an interactive dashboard for market-share and competitor tracking.",
    challenge: "Daily processing took around four to five hours and the output arrived later than the business needed.",
    approach: "Rebuilt the processing workflow and connected the cleaned data to an interactive Power BI dashboard designed for recurring market and competitor review.",
    outcome: "Cut processing time to about two hours per day and shortened delivery by roughly one day. The tool is used by 20+ people across Marketing, Brand, and management.",
    tools: ["Nielsen Retail Audit", "Python / Data Processing", "Power BI", "Market Share", "Competitor Analysis"]
  },
  hub: {
    kicker: "CASE FILE / 03 — INTERNAL PRODUCT",
    title: "CMI-Hub & AI Retrieval",
    summary: "A lightweight internal web application for research booking, project tracking, and faster retrieval of project information.",
    challenge: "Research projects and their status information needed a more searchable, consistent place to live.",
    approach: "Designed and built a web app with project search, status tracking, reschedule history, and a project database using Vercel and Supabase. The CV describes integration with a RAG-based AI agent for information retrieval.",
    outcome: "Supported tracking for 15+ live CMI projects and became a daily working tool for 10+ Marketing users.",
    tools: ["Vercel", "Supabase", "JavaScript", "Project Workflow", "RAG-based Retrieval"]
  },
  research: {
    kicker: "CASE FILE / 04 — CONSUMER INSIGHT",
    title: "Consumer & Category Research",
    summary: "Quick-turn studies and product evaluations supporting consumer understanding, product development, and category decisions.",
    challenge: "Brand and category teams needed structured feedback across products, packaging, and new product opportunities.",
    approach: "Delivered 15 DIY / quick-turn consumer studies across several food categories, contributed to a Top 10 SKU benchmarking study, and ran the CLT phase of a Bistro UAV study.",
    outcome: "Generated consumer and product evidence for Marketing discussions, product evaluation, and distribution expansion planning. Individual study outcomes are not claimed here because the CV does not specify them.",
    tools: ["DIY Studies", "FGD", "CLT", "SKU Benchmarking", "Consumer Insight"]
  }
};

const pages = [...document.querySelectorAll(".page")];
const navItems = [...document.querySelectorAll(".nav-item")];
const railIndex = document.getElementById("railIndex");
const pageOrder = ["home", "about", "projects", "experience", "skills", "contact"];
let currentPage = "home";

function showPage(name) {
  if (!pageOrder.includes(name)) return;
  currentPage = name;
  pages.forEach(page => page.classList.toggle("active", page.dataset.page === name));
  navItems.forEach(item => item.classList.toggle("selected", item.dataset.pageTarget === name));
  railIndex.textContent = String(pageOrder.indexOf(name) + 1).padStart(2, "0");
  window.scrollTo({ top: 0, behavior: document.body.classList.contains("no-motion") ? "auto" : "smooth" });
}
navItems.forEach(item => item.addEventListener("click", () => showPage(item.dataset.pageTarget)));
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => showPage(button.dataset.go)));

const modal = document.getElementById("projectModal");
function openProject(key) {
  const p = projects[key];
  if (!p) return;
  document.getElementById("modalKicker").textContent = p.kicker;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalSummary").textContent = p.summary;
  document.getElementById("modalChallenge").textContent = p.challenge;
  document.getElementById("modalApproach").textContent = p.approach;
  document.getElementById("modalOutcome").textContent = p.outcome;
  document.getElementById("modalTools").replaceChildren(...p.tools.map(tool => {
    const el = document.createElement("span"); el.textContent = tool; return el;
  }));
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector(".modal-close").focus();
}
function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.querySelectorAll("[data-project]").forEach(card => card.addEventListener("click", () => openProject(card.dataset.project)));
document.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeProject));

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeProject();
  if (event.key === "ArrowDown" && !modal.classList.contains("open")) {
    event.preventDefault(); showPage(pageOrder[Math.min(pageOrder.indexOf(currentPage) + 1, pageOrder.length - 1)]);
  }
  if (event.key === "ArrowUp" && !modal.classList.contains("open")) {
    event.preventDefault(); showPage(pageOrder[Math.max(pageOrder.indexOf(currentPage) - 1, 0)]);
  }
});

document.getElementById("motionToggle").addEventListener("click", event => {
  const off = document.body.classList.toggle("no-motion");
  event.currentTarget.setAttribute("aria-pressed", String(off));
  event.currentTarget.innerHTML = `MOTION <b>${off ? "OFF" : "ON"}</b>`;
});

document.getElementById("copyEmail").addEventListener("click", async () => {
  const email = "nguyenxuantuankiet1507@gmail.com";
  const status = document.getElementById("copyStatus");
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = "Email copied to clipboard.";
  } catch {
    status.textContent = email;
  }
});

const loadingScreen = document.getElementById("loadingScreen");
const loadFill = document.getElementById("loadFill");
const loadPercent = document.getElementById("loadPercent");
let progress = 0;
const loadingTimer = setInterval(() => {
  progress = Math.min(progress + Math.ceil(Math.random() * 19), 100);
  loadFill.style.width = progress + "%";
  loadPercent.textContent = String(progress).padStart(2, "0") + "%";
  if (progress >= 100) {
    clearInterval(loadingTimer);
    setTimeout(() => loadingScreen.classList.add("done"), 180);
  }
}, 85);

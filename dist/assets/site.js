const stages = {
  observe: ["Collect session telemetry", "Cowrie records SSH interactions. The ingestion pipeline groups events into searchable session records."],
  adapt: ["Update the decoy environment", "A policy can change decoy files in response to observed activity. The live baseline and offline PPO experiments are evaluated separately."],
  detect: ["Draft rules for review", "Session summaries can feed first-pass Snort and YARA detection rules that a defender can review."]
};
const stageButtons = [...document.querySelectorAll("[data-stage]")];
const stageTitle = document.querySelector("#stage-title");
const stageText = document.querySelector("#stage-text");

for (const button of stageButtons) {
  button.addEventListener("click", () => {
    const [title, text] = stages[button.dataset.stage];
    stageTitle.textContent = title;
    stageText.textContent = text;
    for (const item of stageButtons) item.setAttribute("aria-pressed", String(item === button));
  });
}

const sectionLinks = [...document.querySelectorAll(".header nav a")];
const navSections = sectionLinks.map((link) => document.querySelector(link.hash));

function updateNavigation() {
  const atBottom = Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight;
  const section = atBottom ? navSections.at(-1) : navSections.findLast((item) => item.getBoundingClientRect().top <= 110);
  for (const link of sectionLinks) {
    if (link.hash === '#' + section?.id) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

function openLinkedProject() {
  const target = document.getElementById(location.hash.slice(1));
  const notes = target?.querySelector("details");
  if (notes) notes.open = true;
}

window.addEventListener("scroll", updateNavigation, { passive: true });
window.addEventListener("hashchange", openLinkedProject);
openLinkedProject();
updateNavigation();

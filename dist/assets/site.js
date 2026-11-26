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

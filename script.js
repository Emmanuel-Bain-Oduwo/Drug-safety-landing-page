const header = document.querySelector("[data-header]");
const checklist = document.querySelector("[data-checklist]");
const tabs = document.querySelectorAll("[data-tab]");

const checks = {
  prescribing: [
    "Confirm the medicine has a clear indication and expected review date.",
    "Check allergies, pregnancy status, age, weight, kidney and liver considerations.",
    "Write dose, route, frequency, duration, and monitoring needs without ambiguity.",
    "Avoid duplication and unnecessary antibiotics, injections, or long-term medicines."
  ],
  dispensing: [
    "Verify prescription completeness before preparing or issuing the medicine.",
    "Screen for interactions, contraindications, duplication, expiry, and storage needs.",
    "Counsel the patient in plain language on dose, timing, duration, and warning signs.",
    "Escalate unclear, unsafe, unavailable, or substituted medicines to the prescriber."
  ],
  administration: [
    "Match patient identity, medicine, dose, route, time, and documentation at the bedside.",
    "Pause when the medicine, label, dose, or patient response does not look right.",
    "Observe for benefit, side effects, missed doses, and adherence barriers.",
    "Report suspected adverse reactions, near misses, and medicine errors promptly."
  ]
};

function renderChecklist(key) {
  checklist.innerHTML = checks[key]
    .map((item, index) => {
      const id = `${key}-${index}`;
      return `
        <li>
          <input id="${id}" type="checkbox">
          <label for="${id}">${item}</label>
        </li>
      `;
    })
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderChecklist(tab.dataset.tab);
  });
});

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
renderChecklist("prescribing");

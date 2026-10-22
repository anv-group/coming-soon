const TARGET_URL = "https://github.com/anv-group";
const TOTAL_SECONDS = 5;

let remainingSeconds = TOTAL_SECONDS;
let isPaused = false;
let timer = null;

const countdownEl = document.getElementById("countdown");
const countdownUnitEl = document.getElementById("countdown-unit");
const countdownHighlightEl = document.getElementById("countdown-highlight");
const progressBarEl = document.getElementById("progress-bar");
const pauseBtn = document.getElementById("pause-btn");
const pauseBtnText = document.getElementById("pause-btn-text");
const pauseIndicatorIcon = document.getElementById("pause-indicator-icon");
const redirectBtn = document.getElementById("redirect-now");
const yearEl = document.getElementById("year");

// Set dynamic current year in footer
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

function updateUI() {
  if (countdownEl) {
    countdownEl.textContent = remainingSeconds;
  }
  if (countdownUnitEl) {
    countdownUnitEl.textContent = remainingSeconds === 1 ? "s" : "s";
  }
  if (progressBarEl) {
    const fraction = remainingSeconds / TOTAL_SECONDS;
    progressBarEl.style.transform = `scaleX(${Math.max(0, fraction)})`;
  }
}

function performRedirect() {
  window.location.replace(TARGET_URL);
}

function tick() {
  if (isPaused) return;

  remainingSeconds -= 1;
  updateUI();

  if (remainingSeconds <= 0) {
    clearInterval(timer);
    performRedirect();
  }
}

function togglePause() {
  isPaused = !isPaused;

  if (isPaused) {
    if (pauseBtnText) pauseBtnText.textContent = "Resume Redirect";
    if (pauseIndicatorIcon) pauseIndicatorIcon.textContent = "▶";
    if (countdownHighlightEl) {
      countdownHighlightEl.textContent = "Redirect paused";
      countdownHighlightEl.classList.add("is-paused");
    }
  } else {
    if (pauseBtnText) pauseBtnText.textContent = "Pause Redirect";
    if (pauseIndicatorIcon) pauseIndicatorIcon.textContent = "❚❚";
    if (countdownHighlightEl) {
      countdownHighlightEl.textContent = "Auto-forwarding in progress";
      countdownHighlightEl.classList.remove("is-paused");
    }
    // If resumed at 0 or less, redirect immediately
    if (remainingSeconds <= 0) {
      performRedirect();
    }
  }
}

// Event listeners
if (pauseBtn) {
  pauseBtn.addEventListener("click", togglePause);
}

if (redirectBtn) {
  redirectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    performRedirect();
  });
}

// Keyboard shortcuts: Space toggles pause, Enter triggers instant redirect
window.addEventListener("keydown", (e) => {
  // Ignore if user is interacting with an input or form element
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

  if (e.code === "Space") {
    e.preventDefault();
    togglePause();
  } else if (e.code === "Enter") {
    e.preventDefault();
    performRedirect();
  }
});

// Initialize UI & start countdown
updateUI();
timer = setInterval(tick, 1000);

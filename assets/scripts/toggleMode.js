const modeToggle = document.getElementById("modeToggle");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const title = document.getElementById("heroTitle");
const subtitle = document.getElementById("heroSubtitle");
const lottieAnim = document.getElementById("lottieAnim");

function animateThemeChange() {
  gsap.fromTo("body",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
  );
}

function setMode(mode) {
  document.body.setAttribute("data-theme", mode);
  localStorage.setItem("theme", mode);
  modeToggle.classList.add("spin");
  animateThemeChange();

  if (mode === "creative") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    title.textContent = "Writer • Artist • Creator";
    subtitle.textContent = "Exploring beauty in code and canvas";
    lottieAnim.load("/assets/creative-animation.json");
    document.body.style.fontFamily = "'Playfair Display', serif";
  } else {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    title.textContent = "Python Developer";
    subtitle.textContent = "Creating what you can imagine is the first step.";
    lottieAnim.load("/assets/tech-animation.json");
    document.body.style.fontFamily = "'Inter', sans-serif";
  }

  setTimeout(() => modeToggle.classList.remove("spin"), 600);
}

modeToggle.addEventListener("click", () => {
  const newMode = document.body.getAttribute("data-theme") === "tech" ? "creative" : "tech";
  setMode(newMode);
});

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "tech";
  setMode(saved);
});
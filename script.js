const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  const setMenuState = (isOpen) => {
    mainNav.classList.toggle("open", isOpen);
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = !mainNav.classList.contains("open");
    setMenuState(isOpen);
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });

  // Ensure closed state on initial load.
  setMenuState(false);
}

// Lightweight parallax effect for marked sections.
const parallaxSections = document.querySelectorAll("[data-speed]");

const onScrollParallax = () => {
  const scrollY = window.scrollY;
  parallaxSections.forEach((section) => {
    const speed = Number(section.getAttribute("data-speed")) || 0;
    section.style.setProperty("--parallax-offset", `${scrollY * speed * 0.15}px`);
  });
};

window.addEventListener("scroll", onScrollParallax, { passive: true });
onScrollParallax();

const currentYear = document.getElementById("currentYear");
if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

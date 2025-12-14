let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // User scrolled down → hide navbar
  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.classList.add("hidden");
  } 
  // User scrolled up → show navbar
  else {
    navbar.classList.remove("hidden");
  }

  // Add white background after scrolling down a bit
  if (currentScroll > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScroll = currentScroll;
});
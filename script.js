const searchIcon = document.getElementById("searchToggle");
const searchBar = document.getElementById("navSearchBar");
const carouselTrack = document.querySelector(".carousel-track");

searchIcon.addEventListener("click", () => {
  searchBar.classList.toggle("active");
  searchIcon.classList.toggle("is-active");
});

carouselTrack.addEventListener("mouseenter", () => {
  carouselTrack.style.animationPlayState = "paused";
});

carouselTrack.addEventListener("mouseleave", () => {
  carouselTrack.style.animationPlayState = "running";
});

// Close sidebar when clicking outside
const burgerCheckbox = document.querySelector(".burger input");
const sidebar = document.querySelector(".sidebar");

document.addEventListener("click", (e) => {
  // If click is outside burger and sidebar, close the sidebar
  if (!e.target.closest(".burger") && !e.target.closest(".sidebar")) {
    burgerCheckbox.checked = false;
  }
});

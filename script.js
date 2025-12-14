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




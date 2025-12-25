document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("searchToggle");
  const searchBar = document.getElementById("navSearchBar");
  const carouselTrack = document.querySelector(".carousel-track");

  if (searchIcon && searchBar) {
    searchIcon.addEventListener("click", () => {
      searchBar.classList.toggle("active");
      searchIcon.classList.toggle("is-active");
    });
  }

  if (carouselTrack) {
    carouselTrack.addEventListener("mouseenter", () => {
      carouselTrack.style.animationPlayState = "paused";
    });

    carouselTrack.addEventListener("mouseleave", () => {
      carouselTrack.style.animationPlayState = "running";
    });
  }

  // Close sidebar
  const burgerCheckbox = document.querySelector(".burger input");
  const sidebar = document.querySelector(".sidebar");

  document.addEventListener("click", (e) => {
    
    if (!e.target.closest(".burger") && !e.target.closest(".sidebar")) {
      if (burgerCheckbox) burgerCheckbox.checked = false;
      
      document
        .querySelectorAll(".sidebar-item.open")
        .forEach((i) => i.classList.remove("open"));
    }
  });

 
  document.querySelectorAll(".toggle-destination").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const li = btn.closest(".sidebar-item");
      if (!li) return;
      li.classList.toggle("open");
    });
  });
});

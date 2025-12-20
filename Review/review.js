document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector(".carousel-track");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  // --- SCROLL DISTANCE CALCULATION ---

  // 1. Define the width of a single card unit (from the CSS: 280px card + 15px gap)
  const singleCardScrollWidth = 280 + 15; // = 295

  // 2. Set the distance for scrolling to be 3 cards
  const scrollDistance = singleCardScrollWidth * 3; // 295 * 3 = 885 pixels

  // Ensure smooth scrolling behavior
  carouselTrack.style.scrollBehavior = "smooth";

  // --- RIGHT ARROW CLICK HANDLER (Scroll Forward by 3 Cards) ---
  rightArrow.addEventListener("click", () => {
    // Check if we are at the end (optional: prevents scrolling past content)
    if (
      carouselTrack.scrollLeft + carouselTrack.clientWidth >=
      carouselTrack.scrollWidth
    ) {
      // Optionally scroll back to the start or do nothing
      // carouselTrack.scrollLeft = 0;
    } else {
      carouselTrack.scrollLeft += scrollDistance;
    }
  });

  // --- LEFT ARROW CLICK HANDLER (Scroll Backward by 3 Cards) ---
  leftArrow.addEventListener("click", () => {
    // Check if we are at the beginning (optional: prevents scrolling past content)
    if (carouselTrack.scrollLeft <= 0) {
      // Optionally scroll to the end or do nothing
      // carouselTrack.scrollLeft = carouselTrack.scrollWidth;
    } else {
      carouselTrack.scrollLeft -= scrollDistance;
    }
  });
});

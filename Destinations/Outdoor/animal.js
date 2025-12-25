document.addEventListener("DOMContentLoaded", (event) => {
  const slider = document.getElementById("animal-slider");
  const progressBar = document.getElementById("progressBar");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentSlide = 0;
  const intervalTime = 8000; //8000ms

  function startProgressBar() {
    progressBar.classList.remove("progress-animate");

    requestAnimationFrame(() => {
      progressBar.classList.add("progress-animate");
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;

    const offset = -currentSlide * 100;
    slider.style.transform = `translateX(${offset}%)`;
    startProgressBar();
  }

  startProgressBar();

  setInterval(nextSlide, intervalTime);
});

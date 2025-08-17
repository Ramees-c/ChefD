// Carousel Script
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("foodCarousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".carousel-indicator");
  let currentIndex = 0;
  let autoSlideInterval;

  // Show specific slide
  function showSlide(index) {
    // Wrap around if at ends
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("opacity-100");
      slide.classList.add("opacity-0");
    });

    // Show selected slide
    slides[index].classList.remove("opacity-0");
    slides[index].classList.add("opacity-100");

    // Update indicators
    indicators.forEach((indicator) => {
      indicator.classList.remove("bg-primary", "w-2");
      indicator.classList.add("bg-white/50", "w-2");
    });
    indicators[index].classList.remove("bg-white/50", "w-2");
    indicators[index].classList.add("bg-primary", "w-2");

    currentIndex = index;
  }

  // Auto slide every 5 seconds
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      showSlide(currentIndex + 1);
    }, 5000);
  }

  // Initialize carousel
  function initCarousel() {
    showSlide(0);
    startAutoSlide();

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        showSlide(index);
        startAutoSlide();
      });
    });

    // Pause on hover
    carousel.addEventListener("mouseenter", () => {
      clearInterval(autoSlideInterval);
    });

    carousel.addEventListener("mouseleave", () => {
      startAutoSlide();
    });
  }

  initCarousel();
});

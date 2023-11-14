document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");
  let currentIndex = 0;

  function showSlide(index) {
      const slideWidth = carousel.clientWidth;
      const newTransformValue = -index * slideWidth;
      carousel.style.transform = `translateX(${newTransformValue}px)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
      showSlide(currentIndex);
  }

  // Change slides every 3 seconds (adjust as needed)
  setInterval(nextSlide, 6000);

  // Event listeners for navigation buttons
  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
});

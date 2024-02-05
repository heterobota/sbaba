let slideIndex = 0;

function showSlides() {
  let slidesContainer = document.querySelector(".slides");
  let slideWidth = slidesContainer.clientWidth;

  slideIndex++;

  if (slideIndex >= slidesContainer.children.length) {
    slideIndex = 0;
  }

  // Adjust the transform property for the sliding effect
  slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);

let slideIndex = 0;

function showSlides() {
  let slides = document.querySelector(".slides");
  let slideWidth = document.querySelector(".slide").offsetWidth;

  slideIndex++;

  if (slideIndex >= slides.children.length) {
    slideIndex = 0;
  }

  // Adjust the transform property for the sliding effect
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);

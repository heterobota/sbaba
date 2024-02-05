let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Adjust the transform property for the sliding effect
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
  }

  setTimeout(showSlides, 2000); // Change slide every 2 seconds (adjust as needed)
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", showSlides);

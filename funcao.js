var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  var slides = document.getElementsByClassName("mySlide");
  if (slides.length > 0) {
    slideIndex += n;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    showSlides(slideIndex);
  }
}

function currentSlide(n) {
  var slides = document.getElementsByClassName("mySlide");
  if (slides.length > 0 && n >= 1 && n <= slides.length) {
    slideIndex = n;
    showSlides(slideIndex);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  var dots = document.getElementsByClassName("dot");

  if (!slides.length) return;

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";
}

document.addEventListener('DOMContentLoaded', (event) => {
    showSlides(slideIndex);
  });
let currentSlide = 0;
let autoSlideInterval;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');

  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
  startAutoSlide();

  const controls = document.querySelectorAll('.carousel-control');
  controls.forEach(control => {
    control.addEventListener('click', stopAutoSlide);
  });
});
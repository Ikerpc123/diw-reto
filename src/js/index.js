let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  // Ocultar la diapositiva actual
  slides[currentSlide].classList.remove('active');

  // Calcular el nuevo índice
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Mostrar la nueva diapositiva
  slides[currentSlide].classList.add('active');

  // Mover el contenedor del carrusel
  const carouselInner = document.querySelector('.carousel-inner');
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}
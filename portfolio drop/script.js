
document.getElementById("carouselButtonNext").addEventListener("click", function() {
    moveToNextSlide();
  });
document.getElementById("carouselButtonPrev").addEventListener("click", function() {
    moveToPrevSlide();
  });

  function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
  
    updateSlidePosition();
  }
  
  function moveToPrevSlide() {
    if (slidePosition === 0) {
      slidePosition = totalSlides - 1;
    } else {
      slidePosition--;
    }
  
    updateSlidePosition();
  }
  
function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carouselImgV');
    slide.classList.add('carouselImgH');
  }

  slides[slidePosition].classList.add('carouselImgV');
}

let slidePosition = 0;
const slides = document.getElementsByClassName('carouselImg');
const totalSlides = slides.length;

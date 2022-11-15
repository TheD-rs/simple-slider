const left = document.querySelector('.btn__left');
const right = document.querySelector('.btn__right');
const slides = document.querySelectorAll('.slider__item');

let sliderIndex = 0;

const activeSlider = (n) => {
  for (let slide of slides) {
    slide.classList.remove('active');
  }
  slides[sliderIndex].classList.add('active');
}

const next = () => {
  if (sliderIndex === slides.length - 1) {
    sliderIndex = 0;
    activeSlider(sliderIndex);
  } else {
    sliderIndex++;
    activeSlider(sliderIndex);
  }
}

const prev = () => {
  if (sliderIndex === 0) {
    sliderIndex = slides.length - 1;
    activeSlider(sliderIndex);
  } else {
    sliderIndex--;
    activeSlider(sliderIndex);
  }
}

right.addEventListener('click', next);
left.addEventListener('click', prev);
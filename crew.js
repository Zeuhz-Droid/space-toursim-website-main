// CREW FILE SELECTORS
const crew = document.querySelector('.crew');
const crewDetails = document.querySelector('.crew__details');
const crewSlider = document.querySelector('.crew__slider');
const crewSlides = document.querySelectorAll('.crew__slide');
const crewDotContainer = document.querySelector('.crew__dots');
const crewImage = document.querySelector('.crew__image img');

// CREW SLIDER
const slider = function () {
  // SLIDES VARIABLES
  let curSlide = 0,
    maxSlide = crewSlides.length - 1;

  //   CREATE DOTS
  const createDots = function (slide) {
    crewSlides.forEach((_, i) => {
      crewDotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="crew__dots--dot" data-slide="${i}"></button>`
      );
    });
  };

  //   ACTIVATE DOTS
  const activateDot = function (slide) {
    document
      .querySelectorAll('.crew__dots--dot')
      .forEach(dot => dot.classList.remove('crew__dots--active'));

    document
      .querySelector(`.crew__dots--dot[data-slide="${slide}"]`)
      .classList.add('crew__dots--active');
  };

  //   GIVE BUTTON NEW DATASET

  const getDots = function () {
    return (crewDots = document.querySelectorAll('.crew__dots--dot'));
  };

  const pushImgClass = function () {
    const arrNames = [
      'douglas-hurley',
      'mark-shuttleworth',
      'victor-glover',
      'anousheh-ansari',
    ];
    crewDots.forEach((dot, index) => {
      if (dot.dataset.slide == `${index}`) {
        dot.setAttribute('data-image', `${arrNames[index]}`);
      }
    });
  };

  // ACTIVATE IMAGES ON SLIDE
  const activateImg = function (image) {
    crewImage.setAttribute(`src`, `img/crew/image-${image}.png`);
    crewImage.setAttribute(`srcset`, `img/crew/image-${image}.webp`);
    crewImage.setAttribute('alt', `${image}`);
  };

  //   MAKE SLIDES
  const makeSlide = function (slides) {
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(${100 * index}%)`;
    });
  };
  makeSlide(crewSlides);

  const goToSlide = function (slide) {
    crewSlides.forEach(
      (s, index) =>
        (s.style.transform = `translateX(${100 * (index - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    getDots();
    pushImgClass();
    goToSlide(0);
    activateDot(0);
  };
  init();

  crewDotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('crew__dots--dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }

    if (e.target.classList.contains('crew__dots--active')) {
      const { image } = e.target.dataset;
      activateImg(image);
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
      prevSlide();
      crewDots.forEach(dot => {
        if (dot.classList.contains('crew__dots--active')) {
          activateImg(dot.dataset.image);
        }
      });
    }

    if (e.key === 'ArrowRight') {
      nextSlide();
      crewDots.forEach(dot => {
        if (dot.classList.contains('crew__dots--active')) {
          activateImg(dot.dataset.image);
        }
      });
    }
  });
};
slider();

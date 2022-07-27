const technology = document.querySelector('.technology');
const technologyDetails = document.querySelector('.technology__details');
const technologyBtnContainer = document.querySelector('.technology__btns');
const technologySlideContainer = document.querySelector(
  '.technology__slide-cont'
);
const technologySlides = document.querySelectorAll('.technology__slide');
const technologyImage = document.querySelector(
  '.technology__image picture img'
);
const technologySource = document.querySelector(
  '.technology__image picture source'
);
// console.log(technologyImage);
// console.log(technologySource);

const slider = function () {
  let curSlide = 0;
  maxSlide = technologySlides.length - 1;

  const arrNames = ['launch-vehicle', 'spaceport', 'space-capsule'];

  // createDots
  const createBtns = function () {
    technologySlides.forEach((_, index) => {
      technologyBtnContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="technology__btns--btn" data-slide="${index}" data-image="${
          arrNames[index]
        }">${index + 1}</button>`
      );
    });
  };

  //   MAKE SLIDES AND GO TO SLIDES
  const goToSlide = function (slide) {
    technologySlides.forEach((s, index) => {
      s.style.transform = `translateX(${100 * (index - slide)}%)`;
    });
  };

  //   ACTIVATE DOT
  const activateBtn = function (slide) {
    document
      .querySelectorAll('.technology__btns--btn')
      .forEach(dot => dot.classList.remove('technology__btns--active'));

    document
      .querySelector(`.technology__btns--btn[data-slide="${slide}"]`)
      .classList.add('technology__btns--active');
  };

  //   GET DOTS

  const getBtns = function () {
    return (technologyBtns = document.querySelectorAll(
      '.technology__btns--btn'
    ));
  };

  // ACTIVATE IMAGES ON SLIDE
  const activateImg = function (image) {
    technologyImage.setAttribute(
      `src`,
      `img/technology/image-${image}-portrait.jpg`
    );
    technologySource.setAttribute(
      `srcset`,
      `img/technology/image-${image}-landscape.jpg`
    );
    technologyImage.setAttribute('alt', `${image}`);
  };

  //   MOVE SLIDES WITH ARROW
  const nextSlide = function () {
    if (curSlide < maxSlide) {
      curSlide++;
    } else {
      curSlide = 0;
    }

    goToSlide(curSlide);
    activateBtn(curSlide);
  };

  //   MOVE SLIDES WITH ARROW
  const prevSlide = function () {
    if (curSlide > 0) {
      curSlide--;
    } else {
      curSlide = maxSlide;
    }
    goToSlide(curSlide);
    activateBtn(curSlide);
  };

  const init = function () {
    createBtns();
    getBtns();
    goToSlide(0);
    activateBtn(0);
  };
  init();

  //   IMPLEMENTING CLICK FUNCTION
  technologyBtnContainer.addEventListener('click', function (e) {
    if (e.target.closest('.technology__btns--btn')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateBtn(slide);
    }

    if (e.target.classList.contains('technology__btns--active')) {
      const { image } = e.target.dataset;
      activateImg(image);
    }
  });

  //   IMPLEMENTING ARROW UP AND DOWN
  document.body.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') {
      nextSlide();
      technologyBtns.forEach(btn => {
        if (btn.classList.contains('technology__btns--active')) {
          const { image } = btn.dataset;
          console.log(image);
          activateImg(image);
        }
      });
    }
    if (e.key === 'ArrowUp') {
      prevSlide();
      technologyBtns.forEach(btn => {
        if (btn.classList.contains('technology__btns--active')) {
          const { image } = btn.dataset;
          activateImg(image);
        }
      });
    }
  });
};

slider();

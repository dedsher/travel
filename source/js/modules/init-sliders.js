import Swiper from '../vendor/swiper';

const slidersWrappers = document.querySelectorAll('[data-swiper]');

const slidersSettings = {
  hero: {
    slideClass: 'intro__card',
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 0,
        allowTouchMove: true,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
        initialSlide: 0,
        allowTouchMove: false,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'intro__bullet',
      bulletActiveClass: 'intro__bullet--active',
    },
  },
};


export const initSliders = () => {
  const sliders = [];
  slidersWrappers.forEach((wrapper, index) => {
    const currentSliderName = wrapper.dataset.swiper;
    sliders[index] = new Swiper(wrapper, slidersSettings[currentSliderName]);
  });
};

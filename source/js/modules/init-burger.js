const wrapper = document.querySelector('.header');
const burger = document.querySelector('.burger');

const onBurgerClick = () => {
  wrapper.classList.toggle('is-active');
};

const handleResize = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1200 && wrapper.classList.contains('is-active')) {
    wrapper.classList.remove('is-active');
  }
};

export const initBurger = () => {
  burger.addEventListener('click', onBurgerClick);
  window.addEventListener('resize', handleResize);
};

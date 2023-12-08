const posterWrappers = document.querySelectorAll('.intro__media');

const initPosters = () => {
  if (posterWrappers) {
    posterWrappers.forEach((poster) => {
      poster.addEventListener('click', () => {
        const frame = poster.querySelector('iframe');
        if (frame) {
          frame.style.zIndex = '3';
          frame.src = frame.getAttribute('data-src');
          frame.play();
        }
      });
    });
  }
};

export {initPosters};

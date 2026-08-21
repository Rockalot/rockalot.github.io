const pageShell = document.querySelector('.page-shell');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const dotParallaxCompensation = 0.72;
let dotParallaxFrame = null;

const updateDotParallax = () => {
  dotParallaxFrame = null;

  if (!pageShell || reducedMotion.matches) {
    pageShell?.style.removeProperty('--dot-parallax-y');
    return;
  }

  pageShell.style.setProperty('--dot-parallax-y', `${window.scrollY * dotParallaxCompensation}px`);
};

const requestDotParallaxUpdate = () => {
  if (dotParallaxFrame !== null) return;
  dotParallaxFrame = window.requestAnimationFrame(updateDotParallax);
};

window.addEventListener('scroll', requestDotParallaxUpdate, { passive: true });
reducedMotion.addEventListener('change', requestDotParallaxUpdate);
updateDotParallax();

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
const closeButton = lightbox?.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.dataset.alt || '';
    lightbox.showModal();
  });
});

closeButton?.addEventListener('click', () => lightbox.close());

lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const languageButton = document.querySelector('.language-button');
const languageMenu = document.querySelector('.language-menu');

languageButton?.addEventListener('click', () => {
  const expanded = languageButton.getAttribute('aria-expanded') === 'true';
  languageButton.setAttribute('aria-expanded', String(!expanded));
  languageMenu.hidden = expanded;
});

document.addEventListener('click', (event) => {
  if (!languageButton || !languageMenu || languageButton.contains(event.target) || languageMenu.contains(event.target)) return;
  languageButton.setAttribute('aria-expanded', 'false');
  languageMenu.hidden = true;
});

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

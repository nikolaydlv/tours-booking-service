/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
import './styles/styles.css';
import './libs/autoComplete/css/autoComplete.01.css';
import './libs/custom-select/custom-select.css';

customSelect('select');

const picker = new easepick.create({
  lang: 'ru-Ru',
  element: document.getElementById('date'),
  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
  ],
  format: 'DD.MM.YY',
});

/* Subscribe Label */

const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label');
inputSubscribe.addEventListener('input', () => {
  if (inputSubscribe.value.trim() !== '') {
    label.classList.add('.subscribe__label--top');
  } else {
    label.classList.remove('.subscribe__label--top');
  }
});

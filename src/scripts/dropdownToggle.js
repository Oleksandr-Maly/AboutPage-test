'use strict';

const dropdownButton = document.querySelector('.header__extra-button');
const dropdownMenu = document.querySelector('#dropdown-menu');

dropdownButton.addEventListener('click', () => {
  if (dropdownMenu.classList.contains('header__extra-dropdown--hidden')) {
    dropdownMenu.classList.remove('header__extra-dropdown--hidden');
  } else {
    dropdownMenu.classList.add('header__extra-dropdown--hidden');
  }
});

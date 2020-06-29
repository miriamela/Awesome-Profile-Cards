'use strict';

//SELECTORS...
const angleDownButton1 = document.querySelector('.js-angleDown1');
const designSection = document.querySelector('.js-design');

const angleDownButton2 = document.querySelector('.js-angleDown2');
const formSection = document.querySelector('.js-formData');

const angleDownButton3 = document.querySelector('.js-angleDown3');
const createSection = document.querySelector('.js-share');

// eslint-disable-next-line no-unused-vars
const createButton = document.querySelector('.create');
// const shareSection = document.querySelector('.js-createText');

//FUNCTIONS

function displayOrHideContent(event) {
  designSection.classList.toggle('hidden');
  event.currentTarget.classList.toggle('rot');
}
function displayOrHideContent2(event) {
  formSection.classList.toggle('hidden');
  event.currentTarget.classList.toggle('rot');
}
function displayOrHideContent3(event) {
  createSection.classList.toggle('hidden');
  event.currentTarget.classList.toggle('rot');
}
// function displayOrHideShareSection() {
//   shareSection.classList.toggle('hidden');
// }

//LISTENERS
angleDownButton1.addEventListener('click', displayOrHideContent);
angleDownButton2.addEventListener('click', displayOrHideContent2);
angleDownButton3.addEventListener('click', displayOrHideContent3);

// createButton.addEventListener('click', displayOrHideShareSection);

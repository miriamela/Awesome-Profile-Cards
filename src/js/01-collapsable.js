"use strict";

//SELECTORS...
const angleDownButton1 = document.querySelector(".js-angleDown1");
angleDownButton1.section = document.querySelector(".js-design");

const angleDownButton2 = document.querySelector(".js-angleDown2");
angleDownButton2.section = document.querySelector(".js-formData");

const angleDownButton3 = document.querySelector(".js-angleDown3");
angleDownButton3.section = document.querySelector(".js-share");

//VARS
const sectionArr = [
  angleDownButton1.section,
  angleDownButton2.section,
  angleDownButton3.section,
];

// eslint-disable-next-line no-unused-vars
const createButton = document.querySelector(".create");
const shareSection = document.querySelector(".js-createText");

//FUNCTIONS

function displayOrHideContent(event) {
  event.currentTarget.section.classList.toggle("hidden");
  for (const sect of sectionArr) {
    if (sect !== event.currentTarget.section) {
      sect.classList.add("hidden");
      if (sect === angleDownButton3.section) {
        shareSection.classList.add("hidden");
      }
    }
  }
  event.currentTarget.classList.toggle("rot");
  if (event.currentTarget.section.classList.contains("js-share")) {
    if (event.currentTarget.section.classList.contains("hidden")) {
      shareSection.classList.add("hidden");
    }
  }
}
function displayOrHideShareSection() {
  shareSection.classList.toggle("hidden");
}

//LISTENERS
angleDownButton1.addEventListener("click", displayOrHideContent);
angleDownButton2.addEventListener("click", displayOrHideContent);
angleDownButton3.addEventListener("click", displayOrHideContent);

createButton.addEventListener("click", displayOrHideShareSection);

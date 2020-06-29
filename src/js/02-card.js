"use strict";

//COLOR PALLETE

//SELECTORS...
const coldPalette = document.querySelector(".cold-palette");
const hotPalette = document.querySelector(".hot-palette");
const mixPalette = document.querySelector(".mix-palette");
const cardName = document.querySelector(".js-name");
const cardPosition = document.querySelector(".js-job");
const socialMediaIcons = document.querySelectorAll(".js-socialMedia-icons");

//FUNCTIONS
function ChangeToColdPalette() {
  if (cardName.classList.contains("red-name")) {
    cardName.classList.remove("red-name");
    cardName.classList.add("cold-name");
  } else if (cardName.classList.contains("mix-name")) {
    cardName.classList.remove("mix-name");
    cardName.classList.add("cold-name");
  }
  if (cardPosition.classList.contains("red-job")) {
    cardPosition.classList.remove("red-job");
    cardPosition.classList.add("cold-job");
  } else if (cardPosition.classList.contains("mix-job")) {
    cardPosition.classList.remove("mix-job");
    cardPosition.classList.add("cold-job");
  }
  for (const mediaIcon of socialMediaIcons) {
    if (mediaIcon.classList.contains("red-icon")) {
      mediaIcon.classList.remove("red-icon");
      mediaIcon.classList.add("cold-icon");
    } else if (mediaIcon.classList.contains(" mix-icon")) {
      mediaIcon.classList.remove("mix-icon");
      mediaIcon.classList.add("cold-icon");
    }
  }
}
function ChangeToHotPalette() {
  if (cardName.classList.contains("cold-name")) {
    cardName.classList.remove("cold-name");
    cardName.classList.add("red-name");
  } else if (cardName.classList.contains("mix-name")) {
    cardName.classList.remove("mix-name");
    cardName.classList.add("red-name");
  }
  if (cardPosition.classList.contains("cold-job")) {
    cardPosition.classList.remove("cold-job");
    cardPosition.classList.add("red-job");
  } else if (cardPosition.classList.contains("mix-job")) {
    cardPosition.classList.remove("mix-job");
    cardPosition.classList.add("red-job");
  }
  for (const mediaIcon of socialMediaIcons) {
    console.log("WOrking?");
    if (mediaIcon.classList.contains("cold-icon")) {
      mediaIcon.classList.remove("cold-icon");
      mediaIcon.classList.add("red-icon");
    } else if (mediaIcon.classList.contains(" mix-icon")) {
      mediaIcon.classList.remove("mix-icon");
      mediaIcon.classList.add("red-icon");
    }
  }
}

function ChangeToMixPalette() {
  if (cardName.classList.contains("cold-name")) {
    cardName.classList.remove("cold-name");
    cardName.classList.add("mix-name");
  } else if (cardName.classList.contains("red-name")) {
    cardName.classList.remove("red-name");
    cardName.classList.add("mix-name");
  }
  if (cardPosition.classList.contains("cold-job")) {
    cardPosition.classList.remove("cold-job");
    cardPosition.classList.add("mix-job");
  } else if (cardPosition.classList.contains("red-job")) {
    cardPosition.classList.remove("red-job");
    cardPosition.classList.add("mix-job");
  }
  for (const mediaIcon of socialMediaIcons) {
    if (mediaIcon.classList.contains("cold-icon")) {
      mediaIcon.classList.remove("cold-icon");
      mediaIcon.classList.add("mix-icon");
    } else if (mediaIcon.classList.contains(" red-icon")) {
      mediaIcon.classList.remove("red-icon");
      mediaIcon.classList.add("mix-icon");
    }
  }
}

//LISTENERS
coldPalette.addEventListener("click", ChangeToColdPalette);
hotPalette.addEventListener("click", ChangeToHotPalette);
mixPalette.addEventListener("click", ChangeToMixPalette);

//////////////////////////////////////////////////////////

//DATA FORM

//SELECTORS...
const userNameElem = document.querySelector(".js-userName");
const userJobElem = document.querySelector(".js-userJob");
const userPhoneNumberElem = document.querySelector(".js-phoneNumber");
const userEmailElem = document.querySelector(".js-email");
const userLinkedinElem = document.querySelector(".js-linkedin");
const userGithubElem = document.querySelector(".js-github");
const userData = {};
const renderedUserName = document.querySelector(".js-userName-result");
const renderedUserJob = document.querySelector(".js-userJob-result");
const renderedUserPhoneNumber = document.querySelector(".js-phone-result");
const renderedUserEmail = document.querySelector(".js-email-result");
const renderedUserLinkedin = document.querySelector(".js-linkedin-result");
const renderedUserGithub = document.querySelector(".js-github-result");

//FUNCTIONS...
function getInputValues() {
  userData.name = userNameElem.value;
  userData.job = userJobElem.value;
  userData.tel = userPhoneNumberElem.value;
  userData.email = userEmailElem.value;
  userData.linkedin = userLinkedinElem.value;
  userData.github = userGithubElem.value;
}
function renderUserInfo(obj) {
  renderedUserName.innerHTML = obj.name;
  renderedUserJob.innerHTML = obj.job;
  renderedUserPhoneNumber.href = obj.tel;
  renderedUserEmail.href = `mailto: ${obj.email}`;
  renderedUserLinkedin.href = obj.linkedin;
  renderedUserGithub.href = `https://github.com/${obj.github}`;
}
function updateImputHandler() {
  getInputValues();
  renderUserInfo(userData);
}
//LISTENERS...
userNameElem.addEventListener("keyup", updateImputHandler);
userJobElem.addEventListener("keyup", updateImputHandler);
userPhoneNumberElem.addEventListener("keyup", updateImputHandler);
userEmailElem.addEventListener("keyup", updateImputHandler);
userLinkedinElem.addEventListener("keyup", updateImputHandler);
userGithubElem.addEventListener("keyup", updateImputHandler);

'use strict';

//COLOR PALLETE

//SELECTORS...
const coldPalette = document.querySelector('.cold-palette');
coldPalette.colorPalette = 'cold-';
const hotPalette = document.querySelector('.hot-palette');
hotPalette.colorPalette = 'red-';
const mixPalette = document.querySelector('.mix-palette');
mixPalette.colorPalette = 'mix-';

const cardObj = {
  //dont modify the property names !important
  name: document.querySelector('.js-name'),
  job: document.querySelector('.js-job'),
  border: document.querySelector('.js-border-color'),
  icons: document.querySelectorAll('.js-socialMedia-icons'),
};

//SELECTORS...
const userNameElem = document.querySelector('.js-userName');
const userJobElem = document.querySelector('.js-userJob');
const userPhoneNumberElem = document.querySelector('.js-phoneNumber');
const userEmailElem = document.querySelector('.js-email');
const userLinkedinElem = document.querySelector('.js-linkedin');
const userGithubElem = document.querySelector('.js-github');
const userData = { palette: 1 };
const renderedUserName = document.querySelector('.js-userName-result');
const renderedUserJob = document.querySelector('.js-userJob-result');
const renderedUserPhoneNumber = document.querySelector('.js-phone-result');
const renderedUserEmail = document.querySelector('.js-email-result');
const renderedUserLinkedin = document.querySelector('.js-linkedin-result');
const renderedUserGithub = document.querySelector('.js-github-result');
const resetButton = document.querySelector('.js-reset-button');
const form = document.querySelector('.js-form');
const userCardUrl = document.querySelector('.js-url');
const twitterShare = document.querySelector('.twitter-share-button');

//FUNCTIONS
function changePalette(event) {
  //for every property name inside card object
  userData.palette =
    ['cold-', 'red-', 'mix-'].indexOf(event.currentTarget.colorPalette) + 1;
  for (const key in cardObj) {
    if (key === 'icons') {
      //for every property name inside icons object
      for (const item in cardObj[key]) {
        if (item === 'length') break;
        //remove every class related to color
        cardObj[key][item].classList.remove(
          `cold-icon`,
          `red-icon`,
          `mix-icon`
        );
        //add in the icon, inside the icons, the correct colorPalette, property defined
        //at the start below selectors
        cardObj[key][item].classList.add(
          `${event.currentTarget.colorPalette}icon`
        );
      }
    } else {
      //remove every key (name, job, etc) and add the correct palette related to the key
      cardObj[key].classList.remove(`cold-${key}`, `red-${key}`, `mix-${key}`);
      cardObj[key].classList.add(`${event.currentTarget.colorPalette}${key}`);
    }
  }
}

//LISTENERS
coldPalette.addEventListener('click', changePalette);
hotPalette.addEventListener('click', changePalette);
mixPalette.addEventListener('click', changePalette);

//////////////////////////////////////////////////////////

//DATA FORM

//FUNCTIONS...
function getInputValues() {
  userData.name = userNameElem.value;
  userData.job = userJobElem.value;
  userData.photo = fr.result;
  userData.phone = userPhoneNumberElem.value;
  userData.email = userEmailElem.value;
  userData.linkedin = userLinkedinElem.value;
  if (userGithubElem.value[0] === '@') {
    userData.github = userGithubElem.value.substring(1);
  } else {
    userData.github = userGithubElem.value;
  }
  //   userData.github = userGithubElem.value;
}
function renderUserInfo(obj) {
  renderedUserName.innerHTML = obj.name;
  renderedUserJob.innerHTML = obj.job;
  renderedUserPhoneNumber.href = `tel:${obj.phone}`;
  renderedUserEmail.href = `mailto:${obj.email}`;
  renderedUserLinkedin.href = obj.linkedin;
  renderedUserGithub.href = `https://github.com/${obj.github}`;
  for (let key in userData) {
    if (userData[key] === '') {
      createButton.disabled = true;
      document.querySelector('.js-createText').classList.add('hidden');
      break;
    } else {
      createButton.disabled = false;
    }
  }
}

function updateInputHandler() {
  getInputValues();
  renderUserInfo(userData);
  if (cardObj.name.innerHTML === '') cardObj.name.innerHTML = 'Nombre Apellido';
  if (cardObj.job.innerHTML === '')
    cardObj.job.innerHTML = 'Front-end Developer';
}
//   if (userGithubElem.value === "@") {

function resetForm() {
  form.reset();
  updateInputHandler();
  profileImage.style.backgroundImage = `url(https://via.placeholder.com/300x300/cccccc/666666/?text=IMAGE)`;
  profilePreview.style.backgroundImage = '';
  coldPalette.click();
}

function sendData() {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    userCardUrl.href = result.cardURL;
    userCardUrl.innerHTML = result.cardURL;
    twitterShare.href = `https://twitter.com/intent/tweet?text=Tu%20tarjeta%20es:%20${result.cardURL}`;
  } else {
    userCardUrl.innerHTML = 'ERROR:' + result.error;
  }
}
//LISTENERS...
userNameElem.addEventListener('keyup', updateInputHandler);
userJobElem.addEventListener('keyup', updateInputHandler);
userPhoneNumberElem.addEventListener('keyup', updateInputHandler);
userEmailElem.addEventListener('keyup', updateInputHandler);
userLinkedinElem.addEventListener('keyup', updateInputHandler);
userGithubElem.addEventListener('keyup', updateInputHandler);
resetButton.addEventListener('click', resetForm);

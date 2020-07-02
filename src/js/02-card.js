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

//FUNCTIONS
function changePalette(event) {
  //for every property name inside card object
  for (const key in cardObj) {
    if (key === 'icons') {
      //for every property name inside icons object
      for (const item in cardObj[key]) {
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

//SELECTORS...
const userNameElem = document.querySelector('.js-userName');
const userJobElem = document.querySelector('.js-userJob');
const userPhoneNumberElem = document.querySelector('.js-phoneNumber');
const userEmailElem = document.querySelector('.js-email');
const userLinkedinElem = document.querySelector('.js-linkedin');
const userGithubElem = document.querySelector('.js-github');
const userData = {};
const renderedUserName = document.querySelector('.js-userName-result');
const renderedUserJob = document.querySelector('.js-userJob-result');
const renderedUserPhoneNumber = document.querySelector('.js-phone-result');
const renderedUserEmail = document.querySelector('.js-email-result');
const renderedUserLinkedin = document.querySelector('.js-linkedin-result');
const renderedUserGithub = document.querySelector('.js-github-result');

//FUNCTIONS...
function getInputValues() {
  userData.name = userNameElem.value;
  userData.job = userJobElem.value;
  userData.tel = userPhoneNumberElem.value;
  userData.email = userEmailElem.value;
  userData.linkedin = userLinkedinElem.value;
  //   if (userGithubElem.value === "@") {
  //     userData.github = userGithubElem.value.splice(0, 1);
  //   } else {
  //     userData.github = userGithubElem.value;
  //   }
  userData.github = userGithubElem.value;
}
function renderUserInfo(obj) {
  renderedUserName.innerHTML = obj.name;
  renderedUserJob.innerHTML = obj.job;
  renderedUserPhoneNumber.href = `tel:${obj.tel}`;
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
}
//LISTENERS...
userNameElem.addEventListener('keyup', updateInputHandler);
userJobElem.addEventListener('keyup', updateInputHandler);
userPhoneNumberElem.addEventListener('keyup', updateInputHandler);
userEmailElem.addEventListener('keyup', updateInputHandler);
userLinkedinElem.addEventListener('keyup', updateInputHandler);
userGithubElem.addEventListener('keyup', updateInputHandler);

const fr = new FileReader();
const uploadBtn = document.querySelector('.js__profile-trigger');
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa
   * de nuestro componente.
   */
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

/**
 * Genera un click automático en nuesto campo de tipo "file"
 * que está oculto
 */
function fakeFileClick() {
  fileField.click();
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
uploadBtn.addEventListener('click', fakeFileClick);
fileField.addEventListener('change', getImage);

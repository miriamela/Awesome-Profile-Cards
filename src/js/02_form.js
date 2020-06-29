'use strict';

//constantes de donde saco la info (value del input, added empty value attribte to input in html )

const userName=document.querySelector('#firstName');
const userWork=document.querySelector('#work');
const userEmail=document.querySelector('#emai');
const userTelephone=document.querySelector('#telephone');
const userLinkedin=document.querySelector('#linkedin');
const userGithub=document.querySelector('#github');

//constantes de donde las pinto .innerHTML

const renderUserName=document.querySelector('.page__container__card__box__name');
const renderUserWork=document.querySelector('.page__container__card__box__job');

//constantes de donde las pinto .href

const renderUserTelephone=document.querySelector('.cardPhoneNumber');
//issue del mailto... como e donde se lo digo?
//const renderUserEmail=document.querySelector('#cardEmail')+ href =`mailto:${userEmail}`; 
const renderUserLinkedin=document.querySelector('.cardLinkedin');
const renderUserGithub=document.querySelector('.cardGithub');

//constante objeto userData

const userData={};

//function 1, get the value

function getValue (){
  userData.name=userName.value;
  userData.work=userWork.value;
  //userData.email=userEmail.value;
  userData.telephone=userTelephone.value;
  userData.linkedin=userLinkedin.value;
  userData.github=userGithub.value;

}

//function 2, render the value

function renderValue (userData){
  renderUserName.innerHTML=userData.name;
  renderUserWork.innerHTML=userData.work;
  renderUserTelephone.href=userData.telephone;
  //renderUserEmail.href=userData.email;
  renderUserLinkedin.href=userData.linkedin;
  renderUserGithub.href=userData.github;
}

//function 3 activate the previous 2 functions

function pleaseWork(){
  getValue();
  renderValue(userData);
}


//listening evens
userName.addEventListener('keyup', pleaseWork);
userWork.addEventListener('keyup', pleaseWork);
//userEmail.addEventListener('keyup', pleaseWork);
userTelephone.addEventListener('keyup', pleaseWork);
userLinkedin.addEventListener('keyup', pleaseWork);
userGithub.addEventListener('keyup', pleaseWork);




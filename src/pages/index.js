const numbers = [2, 3, 5];

// Стрелочная функция. Не запнётся ли на ней Internet Explorer?
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // 4, 6, 10
import {
    keyCodeEsc,
    editButton,
    popupPlace,
    closePopupPlaceButton, inputListpopupPlace,closePopupChangeProfileButton, imagePopupCloseButton,
    popupChangeProfile,
    openPopupPlaceButton,
    formEditProfile,
    formAddCard,
    inputUserName,
    inputUserJob,
    inputCardName,
    inputCardLink,
    nameProfileElement,
    jobProfileElement,
    cardsList,
    initialCards,
    popupImage,
    configs,
} from '../../utils/constants.js';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
//сначала вебпак-потом рефакторинг -на буд
//import {Section} from '../components/Section.js';
//import {PopupWithForm} from '../components/PopupWithForm.js';
//import {PopupWithImage} from '../components/PopupWithImage.js';
//import {UserInfo} from '../components/UserInfo.js';



function closePopupEsc() {
    const popupToClose = document.querySelector('.popup_opened');
    popupToClose.classList.remove('popup_opened');
}


function eventKeyDownListener(evt) {
    if (evt.code === keyCodeEsc || evt.key === 'Escape') {
        closePopupEsc();
    }
}


function openPopup(popup) {
    document.addEventListener('keydown', eventKeyDownListener);
    popup.classList.add('popup_opened');
}

function submitHandlerProfile(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    nameProfileElement.textContent = inputUserName.value;
    jobProfileElement.textContent = inputUserJob.value;
    closePopup(popupChangeProfile);
}


function openEditProfilePopup() {
    //открытие попапа с редактированием профиля
    inputUserName.value = nameProfileElement.textContent;
    inputUserJob.value = jobProfileElement.textContent;
    formValidatorProfile.inputListValidate();
    openPopup(popupChangeProfile);
}

function openAddCardPopup() {
    formAddCard.reset();
    formValidatorCard.inputListValidate();
    formValidatorCard.hideInputErrorAll();
    openPopup(popupPlace);
}


function renderAllCards() {
    const elements = document.querySelector('.elements');
    initialCards.forEach((item) =>
    {
        // Создадим экземпляр карточки
        const card = new Card(item, '.item-template' );
        // Создаём карточку
        const newElement = card.createCard();
        //и возвращаем наружу
        cardsList.append(newElement);
        // Добавляем в DOM
        elements.append(newElement);
    });
}

function submitAddCardPopup(evt) {
    // сохраняем введенные значения 2 popup
    evt.preventDefault();
    const inputElement =
        {
        name: inputCardName.value,
        link: inputCardLink.value
    };
    const card = new Card(inputElement,'.item-template');
    const newCard = card.createCard();
    cardsList.prepend(newCard);
    formAddCard.reset();
    closePopup(popupPlace);
}


editButton.addEventListener('click', openEditProfilePopup);
openPopupPlaceButton.addEventListener('click', openAddCardPopup);
formEditProfile.addEventListener('submit', submitHandlerProfile);
formAddCard.addEventListener('submit', submitAddCardPopup);
window.addEventListener("load", renderAllCards);



function closePopup(popup) {

    document.removeEventListener('keydown', eventKeyDownListener);
    popup.classList.remove('popup_opened');
}

popupImage.addEventListener('click',(evt) =>{
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button-image')) {
        closePopup(popupImage);
    }
});

popupChangeProfile.addEventListener('click',(evt)=>{
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        closePopup(popupChangeProfile);
    }
});

    popupPlace.addEventListener('click',(evt)=>{
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
            closePopup(popupPlace);
        }
    });

const formElementProfile =document.querySelector('.popup__form[name="resaveProfile"]');
const formValidatorProfile = new FormValidator(configs, formElementProfile);
formValidatorProfile.enableValidation();

const formElementCard =document.querySelector('.popup__form[name="resaveCountry"]');
const formValidatorCard = new FormValidator(configs, formElementCard);
formValidatorCard.enableValidation();
export {openPopup};











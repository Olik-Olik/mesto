//Переменные перенесены в constants.js

import { keyCodeEsc, editButton,popupPlace,submitPopupPlaceButton,closePopupPlaceButton,inputListpopupPlace,
    popupChangeProfile,closePopupChangeProfileButton,imagePopupCloseButton,openPopupPlaceButton,formEditProfile,
    formAddCard,inputUserName,inputUserJob,inputCardName,inputCardLink,nameProfileElement,jobProfileElement,
    cardsList,zoomedImage,imageDescription,itemTemplate,initialCards } from '../variables/constants.js';

import  {Card}  from './Card.js'
import {FormValidator} from './FormValidator.js';
import {configs} from '../variables/configs.js';


function closePopupEsc() {
    const popupToClose = document.querySelector('.popup_opened');
    popupToClose.classList.remove('popup_opened');
}


function eventKeyDownListener(evt) {
    if (evt.code === keyCodeEsc || evt.key === 'Escape') {
        closePopupEsc();
    }
}

function closePopup(evt) {
    const popupToClose = evt.target.closest('section');
    //закрываем попап -1
    document.removeEventListener('keydown', eventKeyDownListener);
    popupToClose.classList.remove('popup_opened');
}


function openPopup(evt) {
    document.addEventListener('keydown', eventKeyDownListener);
    evt.classList.add('popup_opened');
}


function submitHandlerProfile(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    nameProfileElement.textContent = inputUserName.value;
    jobProfileElement.textContent = inputUserJob.value;
    closePopup(evt);
}


/*function handleImageView(evt) {//обработчик события
    //меняем параметры из попапа, на карточку img /word
    openPopup(popupImage);
    zoomedImage.src = evt.currentTarget.src;
    zoomedImage.alt = evt.currentTarget.alt;
    imageDescription.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
}*/

    function openEditProfilePopup() {
        //открытие попапа с редактированием профиля
        inputUserName.value = nameProfileElement.textContent;
        inputUserJob.value = jobProfileElement.textContent;
        openPopup(popupChangeProfile);
    }

    function openAddCardPopup() {
        //открытие попапа с местом
        inputListpopupPlace.forEach((inputElement) => {
            inputElement.value = '';
        })
       // disableButton(submitPopupPlaceButton); подумать позднее
        openPopup(popupPlace);
    }

    function submitAddCardPopup(evt) {
        // сохраняем введенные значения 2 popup
        evt.preventDefault();
        const newArrayElement = {
            name: inputCardName.value,
            link: inputCardLink.value
        };
        const newCard = createCard(newArrayElement);
        cardsList.prepend(newCard);
        formAddCard.reset();
        closePopup(evt);
    }
//последняя итерация -кладем в ДОМ 1.5
function renderAllCards() {
    initialCards.forEach(function (item) {
        const card = new Card(item);
        const newCard = card._createCard(item);
        cardsList.append(newCard);
        //кладем в ДОМ
    });
}
    editButton.addEventListener('click', openEditProfilePopup);
    openPopupPlaceButton.addEventListener('click', openAddCardPopup);
    closePopupPlaceButton.addEventListener('click', closePopup);
    closePopupChangeProfileButton.addEventListener('click', closePopup);
    formEditProfile.addEventListener('submit', submitHandlerProfile);
    formAddCard.addEventListener('submit', submitAddCardPopup);
    imagePopupCloseButton.addEventListener('click', closePopup);
    window.addEventListener("load", renderAllCards);



//ищем все оверлеи=блокеры,  навешиваем листенер на онклик
    const blockerList = Array.from(document.querySelectorAll('.blocker'));
    blockerList.forEach((blocker) => {
        blocker.addEventListener('click', (evt) => {
            closePopup(evt);
        });
    });



 //валидация
/*
const enableValidation = ({formSelector, ...rest}) => {
    const formItems = Array.from(document.querySelectorAll(formSelector));
    formItems.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, rest);
    })
}
*/


configs.forEach(config =>{
     new FormValidator(config);
});

/*  configs.forEach(config => enableValidation(config));*/


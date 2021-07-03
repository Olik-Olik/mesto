//Переменные перенесены в constants.js zoomedImage, imageDescription, itemTemplate, submitPopupPlaceButton,

import {
    keyCodeEsc, editButton, popupPlace, closePopupPlaceButton, inputListpopupPlace,
    popupChangeProfile, closePopupChangeProfileButton, imagePopupCloseButton, openPopupPlaceButton, formEditProfile,
    formAddCard, inputUserName, inputUserJob, inputCardName, inputCardLink, nameProfileElement, jobProfileElement,
    cardsList, initialCards
} from '../variables/constants.js';

import {Card} from './Card.js'
import {FormValidator} from './FormValidator.js';
import {configs} from '../variables/configs.js';

//window.onbeforeunload = function(){return false;};

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

//Функция открытия также как и функция закрытия должны принимать попап в качестве аргумента
function closePopup(popup) {
    const popupToClose = popup.target.closest('section');
    //закрываем попап -1
    document.removeEventListener('keydown', eventKeyDownListener);
    popupToClose.classList.remove('popup_opened');
}


function submitHandlerProfile(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    nameProfileElement.textContent = inputUserName.value;
    jobProfileElement.textContent = inputUserJob.value;
    closePopup(evt);
}


function openEditProfilePopup() {
    //открытие попапа с редактированием профиля
    inputUserName.value = nameProfileElement.textContent;
    inputUserJob.value = jobProfileElement.textContent;
    //formValidatorProfile._inputListValidate();//убрать отсюда
    openPopup(popupChangeProfile);

}

function openAddCardPopup() {
    //открытие попапа с местом
    inputListpopupPlace.forEach((inputElement) => {
       // inputElement.value = '';
        inputElement.form.reset();
    })
    //disableButton(submitPopupPlaceButton); //подумать позднее
    //formValidatorCard._inputListValidate();//убрать отсюда
   // formValidatorCard._hideInputErrorAll();
    openPopup(popupPlace);
}
/*
//последняя итерация -кладем в ДОМ 1.5
function renderAllCards() {
    initialCards.forEach(function (item) {
        const card = new Card();
        const newCard = card.createCard(item);
        cardsList.append(newCard);
        //кладем в ДОМ
    });
}*/

function renderAllCards() {
//При создании карточки передаем ей два аргумента — объект с данными и селектор template-элемента замечание из ревью
    initialCards.forEach((item) => {
        // Создадим экземпляр карточки
        const card = new Card(item, '.item-template');
        // Создаём карточку
        const newElement = card.createCard(item);
        //и возвращаем наружу
        cardsList.append(newElement);
        // Добавляем в DOM
        document.querySelector('.elements').append(newElement);
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
    const card = new Card();
    const newCard = card.createCard(inputElement);
    cardsList.append(newCard);
    formAddCard.reset();
    closePopup(evt);
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



//const formValidatorProfile = new FormValidator(configs[0]);
//const formValidatorCard = new FormValidator(configs[0]);
export {openPopup};












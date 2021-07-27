import {Api} from "../components/Api";

/*
const api = new Api(config);

const config = {
    address: 'https://mesto.nomoreparties.co/v1/cohort-26',
    token: 'b12ac09d-a522-46ec-9026-b6918737b3ea'
}
api.getUserInfo().then(data => {userInfo.setInfo(data);})
*/

import {
    configs,
    editButton,
    formAddCard,
    initialCards,
    inputUserJob,
    inputUserName,
    openPopupPlaceButton,
    editFotoButton,
} from '../../utils/constants.js';

import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';



function handleCardClick(evt) {
    const data = {
        'name': evt.currentTarget.alt,
        'link': evt.currentTarget.src
    }
    const popupBigImage = new PopupWithImage('.popup_type_image', data);
    popupBigImage.setEventListeners();
    popupBigImage.open();
}


function cardRenderer(cardItem) {
    const card = new Card(cardItem, '.item-template', handleCardClick);
    const newCard = card.createCard();
    return newCard;
}

const cardsList = new Section({
    items: initialCards,
    renderer: cardRenderer
}, '.elements');

/*const cardListAvatar = new Section({}) куда сохранять? -на сервер сразу*/

cardsList.renderItems();
//карточка из input
function handleSubmitCard(formValues) {
    const inputElement =
        {
            name: formValues['popup-input-place'],
            link: formValues['popup-input-img']
        };
    cardsList.addItem(cardRenderer(inputElement));
}
// новая аватарка куда ее  положить
function handleSubmitAvatar(formValuesAvatar) {
    const inputElement =
        {
            link: formValuesAvatar['popup-input-img']
        };
    cardsList.addItem(cardRenderer(inputElement));
}


const formElementProfile = document.querySelector('.popup__form[name="resaveProfile"]');
const formValidatorProfile = new FormValidator(configs, formElementProfile);
formValidatorProfile.enableValidation();

const formElementCard = document.querySelector('.popup__form[name="resaveCountry"]');
const formValidatorCard = new FormValidator(configs, formElementCard);
formValidatorCard.enableValidation();


const popupEditProfile = new PopupWithForm('.popup_type_edit', handleSubmitProfile);
popupEditProfile.setEventListeners();

//редактирование аватара - новый экземпляр класса PopupWithForm
const popupEditAvatarProfile = new PopupWithForm('.popup_type_edit', handleSubmitProfile);
popupEditProfile.setEventListeners();

const profileUserInfo = new UserInfo('.profile__title', '.profile__subtitle');

/*const popupConfirmDelete = new PopupWithForm('.popup_delete-confirm', this._handleCardRemove);*/

function openEditProfilePopup() {
    //открытие попапа с редактированием профиля
    const userInfo = profileUserInfo.getUserInfo();

    inputUserName.value = userInfo.name;
    inputUserJob.value = userInfo.about;

    formValidatorProfile.inputListValidate();
    popupEditProfile.open();
}
const popupEditUserFoto = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatar);

function openEditFotoProfilePopup() {
    //открытие попапа с редактированием фотки профиля
   /* const userFoto = popupEditUserFoto.getUserInfoFoto();*/
   /* inputUserFoto.value = userInfo.image;*/

    formValidatorProfile.inputListValidate();
    popupEditUserFoto.open();
}


function handleSubmitProfile(formValues) {
    const userInfo = {
        'name': formValues['inputForm_name'],
        'about': formValues['inputForm_job']
    }
    profileUserInfo.setUserInfo(userInfo);
}

const popupAddCard = new PopupWithForm('.popup_country', handleSubmitCard);
popupAddCard.setEventListeners();

function openAddCardPopup() {
    formAddCard.reset();
    formValidatorCard.inputListValidate();
    formValidatorCard.hideInputErrorAll();
    popupAddCard.open();
}

editButton.addEventListener('click', openEditProfilePopup);
editFotoButton.addEventListener('click', openEditFotoProfilePopup);//bind?
openPopupPlaceButton.addEventListener('click', openAddCardPopup);


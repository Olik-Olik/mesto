import {
    anyAvatar,
    configs,
    editAvatarButton,
    editButton,
    formAddCard,
    inputUserJob,
    inputUserName,
    openPopupPlaceButton,
} from '../../utils/constants.js';

import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo, UserInfoAvatar} from '../components/UserInfo.js';
import {Api} from "../components/Api";

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-26',
    headers: {
        authorization: 'b12ac09d-a522-46ec-9026-b6918737b3ea'
    }
});


function updateAllCards(){
    api.getInitialCards().then((res) => {
        const initialCards = res;
        const cardsList = new Section({
            items: initialCards,
            renderer: cardRenderer }, '.elements');
        cardsList.renderItems();
    })
}


function handleCardClick(evt) {
    const data = {
        'name': evt.currentTarget.alt,
        'link': evt.currentTarget.src
    }
    const popupBigImage = new PopupWithImage('.popup_type_image', data);
    popupBigImage.setEventListeners();
    popupBigImage.open();
}

function removeCard(cardId){
    api.submitRemoveCard(cardId);
    updateAllCards();
}

function cardRenderer(cardItem) {
    const card = new Card(
        cardItem,
        '.item-template',
        handleCardClick, removeCard);

    const newCard = card.createCard();
    return newCard;
}
//нужно
/*const cardsList = new Section({
    items: getInitialCards,
    renderer: cardRenderer
}, '.elements');*/


//карточка из input
function handleSubmitCard(formValues) {
    const inputElement =
        {
            name: formValues['popup-input-place'],
            link: formValues['popup-input-img']
        };
/*    cardsList.addItem(cardRenderer(inputElement));*/
    api.submitNewCard(inputElement);
    updateAllCards();
}

// новая аватарка куда ее  положить
function handleSubmitAvatar(formValuesAvatar) {
    const inputElement =
        {
            link: formValuesAvatar['popup-input-img']
        };

    anyAvatar.addItem(cardRenderer(inputElement))
    handleSubmitAvatar.close();
}


//валидация для профиля
const formElementProfile = document.querySelector('.popup__form[name="resaveProfile"]');
const formValidatorProfile = new FormValidator(configs, formElementProfile);
formValidatorProfile.enableValidation();

//валидация для аватарчика
const formElementAvatar = document.querySelector('.popup__form[name="resaveProfileAvatar"]');
const formValidatorAvatar = new FormValidator(configs, formElementAvatar);
formValidatorAvatar.enableValidation();


//валидация для карточек
const formElementCard = document.querySelector('.popup__form[name="resaveCountry"]');
const formValidatorCard = new FormValidator(configs, formElementCard);
formValidatorCard.enableValidation();

//эл-т  профиля
const popupEditProfile = new PopupWithForm('.popup_type_edit', handleSubmitProfile);
popupEditProfile.setEventListeners();

//редактирование аватара - новый экземпляр класса PopupWithForm
const popupEditAvatarProfile = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatarProfile);
popupEditAvatarProfile.setEventListeners(); //закрываем

//
const profileUserInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');


/*const popupConfirmDelete = new PopupWithForm('.popup_delete-confirm');
this._popupConfirmDelete .setEventListeners();*///закрываем


//новый аватарчик
const popupEditAvatar = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatar);


//открытие попапа с редактированием профиля
function openEditProfilePopup() {
    const userInfo = profileUserInfo.getUserInfo();
    inputUserName.value = userInfo.name;
    inputUserJob.value = userInfo.about;
    formValidatorProfile.inputListValidate();
    popupEditProfile.open();
}

function openEditAvatarPopup() {
    editAvatarButton.addEventListener('click', () => {
        popupEditAvatar.open();
        formValidatorAvatar.enableValidation();
        formValidatorAvatar.inputListValidate();
        formValidatorAvatar.hideInputErrorAll();
    })
}

// надо через api // api.openEditAvatarPopup()
/*const popupEditAvatar = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatar);*/

/*const editUserAvatar = new UserAvatar('.popup_type_edit-avatar');*/


//добавляем лайки api
function handleLikeCount(newElementImage, data) {
    const res = newElementImage.isLikedCard() ? api.notLikedCard(data._id) : api._likeElement(data._id);
    res.then((data) => {
        card._handleLikeClick(data);
    })
        .catch((err) => {
            console.log(`$(err)`);
        });
}

//кнопка открытия попапа изменения аватарки

function updateUserInfo() {
    api.getUserInfo().then((res) => {
        const userProfileInfo = res;
        const userInfo = {
            'name': userProfileInfo.name,
            'about': userProfileInfo.about,
            'avatar': userProfileInfo.avatar
        }
        profileUserInfo.setUserInfo(userInfo);
    })

}

//сохраняем профиль
function handleSubmitProfile(formValues) {
    const userInfo = {
        'name': formValues['inputForm_name'],
        'about': formValues['inputForm_job']
    }
    profileUserInfo.setUserInfo(userInfo);
    api.submitUserInfo(userInfo);
    updateUserInfo();
}

//сохраняем аватар
function handleSubmitAvatarProfile(formValues) {
    const userAva = {
        'avatar': formValues['input-avatar']
    }
    profileUserInfo.setUserInfo(userAva);
    api.submitUserAvatar(userAva);
    updateUserInfo();
}

//добавление карточек
const popupAddCard = new PopupWithForm('.popup_country', handleSubmitCard);
popupAddCard.setEventListeners();

//открываем попап  карточки валидируем
function openAddCardPopup() {
    formAddCard.reset();
    formValidatorCard.inputListValidate();
    formValidatorCard.hideInputErrorAll();
    popupAddCard.open();
}


//вообще окончательное удаление
/*this._handleDoCardRemove.setEventListeners();*/


editButton.addEventListener('click', openEditProfilePopup);
editAvatarButton.addEventListener('click', openEditAvatarPopup);
openPopupPlaceButton.addEventListener('click', openAddCardPopup);
/*popupConfirmDelete.addEventListener('click',openPopupConfirmDelete);*/


updateUserInfo();
updateAllCards();




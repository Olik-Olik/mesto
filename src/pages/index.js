
import {
    configs,
    editButton,
    formAddCard,
    initialCards,
    inputUserJob,
    inputUserName,
    openPopupPlaceButton,
    editAvatarButton,anyAvatar,

} from '../../utils/constants.js';

import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo,UserInfoAvatar} from '../components/UserInfo.js';



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
    anyAvatar.addItem(cardRenderer(inputElement));
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
popupEditAvatarProfile.setEventListeners();

//аватар const editUserAvatar = new UserAvatar('.popup_type_edit-avatar');



const profileUserInfo = new UserInfo('.profile__title', '.profile__subtitle');

const popupConfirmDelete = new PopupWithForm('.popup_delete-confirm',)

import {Api} from "../components/Api";

//открытие попапа с редактированием профиля
function openEditProfilePopup() {
    const userInfo = profileUserInfo.getUserInfo();
    inputUserName.value = userInfo.name;
    inputUserJob.value = userInfo.about;
    formValidatorProfile.inputListValidate();
    popupEditProfile.open();
}
//новый аватарчик
const popupEditAvatar = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatar);
//открытие кнопки c попапа с редактированием фотки аватарки
function openEditAvatarPopup() {
        editAvatarButton.addEventListener('click', () => {
        popupEditAvatar.open();
       formValidatorAvatar.enableValidation();
       /* formValidatorAvatar.inputListValidate();
        formValidatorAvatar.hideInputErrorAll();*/
    })
}

// надо через api // api.openEditAvatarPopup()


//добавляем лайки api
function handleLikeCount(newElementImage, data){
    const res = newElementImage.isLikedCard() ? api.notLikedCard(data._id) : api._likeElement(data._id);
    res.then((data) =>{card._handleLikeClick(data);})
        .catch((err) =>{console.log(`$(err)`);});
}



//сохраняем
function handleSubmitProfile(formValues) {
    const userInfo = {
        'name': formValues['inputForm_name'],
        'about': formValues['inputForm_job']
    }
    profileUserInfo.setUserInfo(userInfo);
}
//сохраняем аватар
function handleSubmitAvatarProfile(formValues) {
    const userInfoAvatar = {
        'img': formValues['popup-input-img-avatar']
    }
    popupEditAvatarProfile.setUserInfoAvatar(userInfoAvatar);
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
//кнопка открытия попапа изменения аватарки



editButton.addEventListener('click', openEditProfilePopup);
editAvatarButton.addEventListener('click', openEditAvatarPopup);
openPopupPlaceButton.addEventListener('click', openAddCardPopup);
/*popupConfirmDelete.addEventListener('click',openPopupConfirmDelete);*/


/*
//классик
const api = new Api(config);
const config = {
    address: 'https://mesto.nomoreparties.co/v1/cohort-26',
    token: 'b12ac09d-a522-46ec-9026-b6918737b3ea',
    authorization: 'b12ac09d-a522-46ec-9026-b6918737b3ea',
    'Content-Type':'application/json',
}
//тянем данные юзера при загрузке страницы
api.getUserInfo().then(data => {userInfo.setInfo(data);})
    .catch(err =>{
        console.log('Что-то криво в добычи информации о позьзователе')
    })
//получение инфо о аватарке юзера



*/


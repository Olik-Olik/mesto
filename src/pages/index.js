//взаимодействие между классами проекта и инициализируем их
import {
    editButton,
    openPopupPlaceButton,
    formAddCard,
    inputUserName,
    inputUserJob,
    nameProfileElement,
    jobProfileElement,
    initialCards,
    configs,
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


function cardRenderer(cardItem){
    const card = new Card(cardItem,'.item-template', handleCardClick);
    const newCard = card.createCard();
    return newCard;
}

const cardsList = new Section({
    items: initialCards,
    renderer: cardRenderer}, '.elements');


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


const formElementProfile = document.querySelector('.popup__form[name="resaveProfile"]');
const formValidatorProfile = new FormValidator(configs, formElementProfile);
formValidatorProfile.enableValidation();

const formElementCard = document.querySelector('.popup__form[name="resaveCountry"]');
const formValidatorCard = new FormValidator(configs, formElementCard);
formValidatorCard.enableValidation();


const popupEditProfile = new PopupWithForm('.popup_type_edit', handleSubmitProfile);
popupEditProfile.setEventListeners();

const profileUserInfo = new UserInfo('.profile__title','.profile__subtitle');


function openEditProfilePopup() {
    //открытие попапа с редактированием профиля
   const userInfo = profileUserInfo.getUserInfo();

    inputUserName.value = userInfo.name;
    inputUserJob.value = userInfo.about;

    formValidatorProfile.inputListValidate();
    popupEditProfile.open();
}

function handleSubmitProfile(formValues) {
  const userInfo = { 'name': formValues['inputForm_name'],
                     'about':formValues['inputForm_job']
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
openPopupPlaceButton.addEventListener('click', openAddCardPopup);


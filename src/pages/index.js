import {
    configs,
    editAvatarButton,
    editButton,
    formAddCard,
    imageDescription,
    inputUserJob,
    inputUserName,
    openPopupPlaceButton,
    zoomedImage,
} from '../utils/constants.js';

import './index.css';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js';
import {Api} from "../components/Api";
import {PopupWithConfirm} from "../components/PopupWithConfirm";

const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-26',
    headers: {
        authorization: 'b12ac09d-a522-46ec-9026-b6918737b3ea'
    }
});

var selfID = null;

const profileUserInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');

const cardsSection = new Section(cardRenderer, '.elements');

function getCardsPromise() {
    return api.getInitialCards();
}

function getUserInfoPromise() {
    return api.getUserInfo();
}


Promise.all([getUserInfoPromise(), getCardsPromise()]).then((values) => {
    const userProfileInfo = values[0];
    const initialCards = values[1];
    const userInfo = {
        'name': userProfileInfo.name,
        'about': userProfileInfo.about,
        'avatar': userProfileInfo.avatar,
        'id': userProfileInfo._id
    }
    profileUserInfo.setUserInfo(userInfo);

    cardsSection.renderItems(initialCards);
})
    .catch((err) => {
        console.log('MAMA!!!: ' + err.toString())
    });


const popupBigImage = new PopupWithImage('.popup_type_image', zoomedImage, imageDescription);
popupBigImage.setEventListeners();

function handleCardClick(evt) {
    const data = {
        'name': evt.currentTarget.alt,
        'link': evt.currentTarget.src
    }
    popupBigImage.open(data);
}

function removeCard(cardId, cardElement) {
    api.submitRemoveCard(cardId).then((res) => {
        cardElement.remove();
        popupConfirmDelete.close();
    }).catch((err) => {
        console.log('MAMA!!!: ' + err.toString())
    })
        .finally(() => {
            popupConfirmDelete.resetButtonText();
        });
}

const popupConfirmDelete = new PopupWithConfirm('.popup_delete-confirm', removeCard);
popupConfirmDelete.setEventListeners();//??????????????????

function handleLikeClick(target, cardId, likeCountElement) {
    if (target.classList.contains('elements__like_active')) {
        api.like(cardId).then((res) => {
            likeCountElement.textContent = res.likes.length;
        }).catch((err) => {
            console.log('MAMA!!!: ' + err.toString())
        });
    } else {
        api.dislike(cardId).then((res) => {
            likeCountElement.textContent = res.likes.length;
        }).catch((err) => {
            console.log('MAMA!!!: ' + err.toString())
        });
    }
}

function cardRenderer(cardItem) {
    const card = new Card(
        cardItem,
        '.item-template',
        handleCardClick, removeCard, profileUserInfo.getUserInfo().id,
        handleLikeClick, popupConfirmDelete);
    const newCard = card.createCard();
    return newCard;
}

//???????????????? ???? input
function handleSubmitCard(formValues) {
    const inputElement =
        {
            name: formValues['popup-input-place'],
            link: formValues['popup-input-img']
        };
    api.submitNewCard(inputElement).then((res) => {
        cardsSection.addItem(res)
        popupAddCard.close();
    })
        .catch((err) => {
            console.log('MAMA!!!: ' + err.toString())
        })
        .finally(() => {
            popupAddCard.resetButtonText();
        });
}


//?????????????????? ?????? ??????????????
const formElementProfile = document.querySelector('.popup__form[name="resaveProfile"]');
const formValidatorProfile = new FormValidator(configs, formElementProfile);
formValidatorProfile.enableValidation();

//?????????????????? ?????? ????????????????????
const formElementAvatar = document.querySelector('.popup__form[name="resaveProfileAvatar"]');
const formValidatorAvatar = new FormValidator(configs, formElementAvatar);
formValidatorAvatar.enableValidation();


//?????????????????? ?????? ????????????????
const formElementCard = document.querySelector('.popup__form[name="resaveCountry"]');
const formValidatorCard = new FormValidator(configs, formElementCard);
formValidatorCard.enableValidation();

//????-??  ??????????????
const popupEditProfile = new PopupWithForm('.popup_type_edit', handleSubmitProfile, '??????????????????');
popupEditProfile.setEventListeners();

//???????????????????????????? ?????????????? - ?????????? ?????????????????? ???????????? PopupWithForm
const popupAvatar = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatarProfile, '??????????????????');
popupAvatar.setEventListeners(); //??????????????????


//???????????????? ???????????? ?? ?????????????????????????????? ??????????????
function openEditProfilePopup() {
    const userInfo = profileUserInfo.getUserInfo();
    inputUserName.value = userInfo.name;
    inputUserJob.value = userInfo.about;
    formValidatorProfile.inputListValidate();
    popupEditProfile.open();
}

function openEditAvatarPopup() {
    editAvatarButton.addEventListener('click', () => {
        popupAvatar.open();
        formValidatorAvatar.inputListValidate();
        formValidatorAvatar.hideInputErrorAll();
    })
}

//?????????????????? ??????????????
function handleSubmitProfile(formValues) {
    const userInfo = {
        'name': formValues['inputForm_name'],
        'about': formValues['inputForm_job']
    }
    api.submitUserInfo(userInfo).then((res) => {
        profileUserInfo.setUserInfo(res);
        popupEditProfile.close();
    }).catch((err) => {
        console.log('MAMA!!!: ' + err.toString())
    })
        .finally(() => {
            popupEditProfile.resetButtonText();
        });
}

//?????????????????? ????????????
function handleSubmitAvatarProfile(formValues) {
    const userAva = {'avatar': formValues['input-avatar']}
    api.submitUserAvatar(userAva).then((res) => {
        profileUserInfo.setUserInfo(res);
        popupAvatar.close();
    }).catch((err) => {
        console.log('MAMA!!!: ' + err.toString())
    })
        .finally(() => {
            popupAvatar.resetButtonText();
        });
}

//???????????????????? ????????????????
const popupAddCard = new PopupWithForm('.popup_country', handleSubmitCard, '??????????????????');
popupAddCard.setEventListeners();

//?????????????????? ??????????  ???????????????? ????????????????????
function openAddCardPopup() {
    formAddCard.reset();
    formValidatorCard.inputListValidate();
    formValidatorCard.hideInputErrorAll();
    popupAddCard.open();
}


editButton.addEventListener('click', openEditProfilePopup);
editAvatarButton.addEventListener('click', openEditAvatarPopup);
openPopupPlaceButton.addEventListener('click', openAddCardPopup);




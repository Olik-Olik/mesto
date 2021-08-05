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
});
/*//карта
//промис all
Promise.all([api.getUserInfo, api.getInitialCards])
    .then (([user,initialCards]) => {
        profileUserInfo.setUserInfo({
            name: user.name,
            about: user.about,
            userId: userId
        });
        profileUserInfo.setUserInfo({
            avatar: user.avatar
        });
        const initialCardsInfo =  new Section ({
            renderer: () => {initialCardsInfo.addItem(data); //верно, что форму ? подумать
            }
        }, '.elements');
     /!*   initialCardsInfo.forEach(item => Section.rendered(createCard(item)));*!/
        initialCardsInfo.forEach(initialCards);})
    .catch(err => {
        console.log('Что-то криво ' + err);
    })
// поставить во всех api*/


/*function updateAllCards(){
    api.getInitialCards().then((res) => {
        const initialCards = res;
        const cardsList = new Section({ items: initialCards,renderer: cardRenderer }, '.elements');
       /!* cardsList.renderItems();*!/
        cardsList.renderItems(items);
    })
}*/

/*const cardsList = new Section(
    { renderer: (data) => {cardsList.addItem(popupAddCard(data)); }},'.elements');
cardsList.renderItems(items);*/

function handleCardClick(evt) {
    const data = {
        'name': evt.currentTarget.alt,
        'link': evt.currentTarget.src
    }
    const popupBigImage = new PopupWithImage('.popup_type_image', zoomedImage, imageDescription);
    popupBigImage.setEventListeners();
    popupBigImage.open(data);
}

function removeCard(cardId, cardElement) {
    api.submitRemoveCard(cardId).then((res) => {
        cardElement.remove();
    }).catch((err) => {
        console.log('MAMA!!!: ' + err.toString())
    })
        .finally(() => {
            popupConfirmDelete.close();
        });
}

const popupConfirmDelete = new PopupWithConfirm('.popup_delete-confirm', removeCard);
popupConfirmDelete.setEventListeners();//закрываем

function handleLikeClick(target, cardId) {
    if (target.classList.contains('elements__like_active')) {
        api.like(cardId).then((res) => {
            // FIXME!!!
        }).catch((err) => {
            console.log('MAMA!!!: ' + err.toString())
        })
            .finally(() => {
                // FIXME!!!
            });

    } else {
        api.dislike(cardId).then((res) => {
            // FIXME!!!
        }).catch((err) => {
            console.log('MAMA!!!: ' + err.toString())
        })
            .finally(() => {
                // FIXME!!!
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

//карточка из input
function handleSubmitCard(formValues) {
    const inputElement =
        {
            name: formValues['popup-input-place'],
            link: formValues['popup-input-img']
        };
    api.submitNewCard(inputElement).then((res) => {
        cardsSection.addItem(res)
    })
        .catch((err) => {
            console.log('MAMA!!!: ' + err.toString())
        })
        .finally(() => {
            popupAddCard.close();
        });
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
const popupAvatar = new PopupWithForm('.popup_type_edit-avatar', handleSubmitAvatarProfile);
popupAvatar.setEventListeners(); //закрываем


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
        popupEditAvatarProfile.open();
        formValidatorAvatar.enableValidation();
        formValidatorAvatar.inputListValidate();
        formValidatorAvatar.hideInputErrorAll();
    })
}

//изменение аватарки
function updateUserInfo() {
    api.getUserInfo().then((res) => {
        const userProfileInfo = res;
        const userInfo = {
            'name': userProfileInfo.name,
            'about': userProfileInfo.about,
            'avatar': userProfileInfo.avatar,
            'id': userProfileInfo._id
        }
        userInfo.setUserInfo(userInfo);
    })
}

//сохраняем профиль
function handleSubmitProfile(formValues) {
    const userInfo = {
        'name': formValues['inputForm_name'],
        'about': formValues['inputForm_job']
    }
    api.submitUserInfo(userInfo).then((res) => {
        userInfo.setUserInfo(res);

    });
}

/*api.метод()
    .then((res) => `res` - это ответ от сервера при успешном запросе,
    в котором чаще всего вся нужная информация для изменения DOM.
    Тут делаем все изменения DOM (лайки, удаления, добавления карточки, закрытия попапов и тд )
. catch((ошибка) => обязательно ловим возможные ошибки в конце запроса )
.finally(() => в этом блоке чаще всего изменяют текст кнопки и скрывают эффект загрузки)*/


//сохраняем аватар
function handleSubmitAvatarProfile(formValues) {
    const userAva = {'avatar': formValues['input-avatar']}
    profileUserInfo.setUserInfo(userAva);
    api.submitUserAvatar(userAva).then((res) => {
        console.log('FIXME!!!: ' + res.toString());
    });
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


editButton.addEventListener('click', openEditProfilePopup);
editAvatarButton.addEventListener('click', openEditAvatarPopup);
openPopupPlaceButton.addEventListener('click', openAddCardPopup);

/*

updateUserInfo();
updateAllCards();

*/



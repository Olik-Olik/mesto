//Переменные
const keyCodeEsc = '27';

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const editButton = document.querySelector('.profile__edit-button');
const popupPlace = document.querySelector('.popup_country');
const submitPopupPlaceButton = popupPlace.querySelector('.popup__save');
const closePopupPlaceButton = popupPlace.querySelector('.popup__close-button');//место-1
const inputListpopupPlace = popupPlace.querySelectorAll('.popup__field');

const popupChangeProfile = document.querySelector('.popup_type_edit');
const closePopupChangeProfileButton = popupChangeProfile.querySelector('.popup__close-button');//Кусто-2

const popupImage = document.querySelector('.popup_type_image');
const imagePopupCloseButton = popupImage.querySelector('.popup__close-button-image');//картинка-3

//открытие 2-го попапа
const openPopupPlaceButton = document.querySelector('.profile__add-button');

// форма и поля формы
const formEditProfile = document.querySelector('#popup-mega-id');
const formAddCard = document.querySelector('#popup-input-mega-id');//2-попап

const inputUserName = document.querySelector('#popup-field-name');
const inputUserJob = document.querySelector('#popup-field-job');

const inputCardName = document.querySelector('#popup-field-card-name');//2-попап
const inputCardLink = document.querySelector('#popup-field-card-img');//ссылка//2-попап
//куда это будет вставлено
const nameProfileElement = document.querySelector('.profile__title');
const jobProfileElement = document.querySelector('.profile__subtitle');

const cardsList = document.querySelector('.elements'); //list весь список

//делаем глобальными  из onLoad
const zoomedImage = document.querySelector('.popup__image');
const imageDescription = document.querySelector('.popup__image-word');
const itemTemplate = document.querySelector('.item-template');

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

function handleImageView(evt) {//обработчик события
    //меняем параметры из попапа, на карточку img /word
    openPopup(popupImage);
    zoomedImage.src = evt.currentTarget.src;
    zoomedImage.alt = evt.currentTarget.alt;
    imageDescription.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
}

function handleLikeClick(evt) {
    evt.currentTarget.classList.toggle('elements__like_active');
}

function handleCardRemove(evt) {
    evt.currentTarget.closest('#template-id').remove();
}

function renderAllCards() {
    initialCards.forEach(function (item) {
        const newCard = createCard(item);
        cardsList.append(newCard);
        //кладем в ДОМ
    });
}

function createCard(item) { //create
    const newElement = itemTemplate.content.cloneNode(true);
    const newElementImage = newElement.querySelector('.elements__image');
    newElementImage.src = item.link;
    newElementImage.alt = item.name;
    newElement.querySelector('.elements__word').textContent = item.name;

    const likeElement = newElement.querySelector('.elements__like');
    likeElement.addEventListener('click', handleLikeClick);

    //новая картинка слушает когда по нему кликнут
    newElementImage.addEventListener('click', handleImageView);//обработчик события

    newElement.querySelector('.elements__trash').addEventListener('click', handleCardRemove);
    return newElement;
}

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
    disableButton(submitPopupPlaceButton);
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


editButton.addEventListener('click', openEditProfilePopup);
openPopupPlaceButton.addEventListener('click', openAddCardPopup);
closePopupPlaceButton.addEventListener('click', closePopup);
closePopupChangeProfileButton.addEventListener('click', closePopup);
formEditProfile.addEventListener('submit', submitHandlerProfile);
formAddCard.addEventListener('submit', submitAddCardPopup);
imagePopupCloseButton.addEventListener('click', closePopup);
window.addEventListener("load", renderAllCards);

const emptyFieldErrorMsg = "   Вы пропустили это поле.";

//для валидации файл конфиг указываем класс кнопок инпутов форм
const configs = [
    {
        formSelector: '.popup__form[name="resaveProfile"]',
        inputElement: '.popup__field',
        submitButton: '.popup__save',
        message:      emptyFieldErrorMsg,
        popupIsValid: 'popup__button_valid',
        popupIsInvalid: 'popup__button_invalid',
        formInputErrorClass: 'form__input_error',
        formInputErrorActive: 'form__input-error_active'
    },
    {   formSelector: '.popup__form[name="resaveCountry"]',
        inputElement: '.popup__field',
        submitButton: '.popup__save',
        message:      "Введите адрес сайта.",
        popupIsValid: 'popup__button_valid',
        popupIsInvalid: 'popup__button_invalid',
        formInputErrorClass: 'form__input_error',
        formInputErrorActive: 'form__input-error_active'
    }
]

//ищем все оверлеи=блокеры,  навешиваем листенер на онклик
const blockerList = Array.from(document.querySelectorAll('.blocker'));
blockerList.forEach((blocker) => {
    blocker.addEventListener('click', (evt) => {
        closePopup(evt);
    });
})

configs.forEach(config=>enableValidation(config));

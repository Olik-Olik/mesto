//Переменные
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
const closePopupPlace = popupPlace.querySelector('.popup__close-button');//место-1

const popupChangeProfile = document.querySelector('.popup_type_edit');
const closePopupChangeProfile = popupChangeProfile.querySelector('.popup__close-button');//Кусто-2

const popupMainContainerImage = document.querySelector('.popup_type_image');
const imagePopupCloseButton = popupMainContainerImage.querySelector('.popup__close-button-image');//картинка-3

//открытие 2-го попапа
const openPopupPlaceButton = document.querySelector('.profile__add-button');

// форма и поля формы
const savePopupProfile = document.querySelector('#popup-mega-id');
const saveAddPopup = document.querySelector('#popup-input-mega-id');//2-попап

const popupName = document.querySelector('#popup-field-name');
const popupJob = document.querySelector('#popup-field-job');

const popupCountryform = document.querySelector('#popup-field-card-name');//2-попап
const popupLinkform = document.querySelector('#popup-field-card-img');//ссылка//2-попап
//куда это будет вставлено
const nameProfileElement = document.querySelector('.profile__title');
const jobProfileElement = document.querySelector('.profile__subtitle');

const newElements = document.querySelector('.elements'); //list весь список

//делаем глобальными  из onLoad
const popupImage = document.querySelector('.popup__image');
const popupWord = document.querySelector('.popup__image-word');
const itemTemplate = document.querySelector('.item-template');


function closePopupAll(evt) {
    //закрываем попап -1
    evt.target.closest('section').classList.remove('popup_opened');
}

function closePopupEsc() {
    const popupList = document.querySelectorAll('.popup_opened');
    popupList.forEach((pop) => {
        pop.classList.remove('popup_opened');
    })
}

function popupOpenAll(evt) {
    evt.classList.add('popup_opened')
}

function submitHandlerProfile(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    nameProfileElement.textContent = popupName.value;
    jobProfileElement.textContent = popupJob.value;
    closePopupAll(evt);
}

function handleImageView(evt) {//обработчик события
    //меняем параметры из попапа, на карточку img /word
    popupOpenAll(popupMainContainerImage);
    popupImage.src = evt.currentTarget.src;
    popupImage.alt = evt.currentTarget.alt;
    popupWord.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
}


// закрытие по esc
document.addEventListener('keydown', function(evt) {
    if (evt.code === '27' || evt.key === 'Escape') {
        closePopupEsc();
    }
});


function handleLikeClick(evt) {
    evt.currentTarget.classList.toggle('elements__like_active');
}

function handleCardRemove(evt) {
    evt.currentTarget.closest('#template-id').remove();
}

function renderAllCards() {
    initialCards.forEach(function (item) {
        const newCard = createCard(item);
        newElements.append(newCard);
        //кладем в ДОМ
    });
}

function createCard(item) { //create
    const newElement = itemTemplate.content.cloneNode(true);
    newElement.querySelector('.elements__image').src = item.link;
    newElement.querySelector('.elements__image').alt = item.name;
    newElement.querySelector('.elements__word').textContent = item.name;


    const likeElement = newElement.querySelector('.elements__like');
    likeElement.addEventListener('click', handleLikeClick);

    const newElementImage = newElement.querySelector('.elements__image');

    //новая картинка слушает когда по нему кликнут
    newElementImage.addEventListener('click', handleImageView);//обработчик события

    newElement.querySelector('.elements__trash').addEventListener('click', handleCardRemove);
    return newElement;
}

function workPopup() {
    //открытие попапа с редактированием профиля
    popupName.value = nameProfileElement.textContent;
    popupJob.value = jobProfileElement.textContent;
    popupOpenAll(popupChangeProfile);
}

function workpopupPlace() {
    //открытие попапа с местом
    popupOpenAll(popupPlace);
}

function submitAddHandler(evt) {
    // сохраняем введенные значения 2 popup
    evt.preventDefault();
    const newArrayElement = {
        name: popupCountryform.value,
        link: popupLinkform.value
    };
    const newCard = createCard(newArrayElement);
    newElements.prepend(newCard);
    saveAddPopup.reset();
    closePopupAll(evt);
}


editButton.addEventListener('click', workPopup);
openPopupPlaceButton.addEventListener('click', workpopupPlace);
closePopupPlace.addEventListener('click', closePopupAll);
closePopupChangeProfile.addEventListener('click', closePopupAll);
savePopupProfile.addEventListener('submit', submitHandlerProfile);
saveAddPopup.addEventListener('submit', submitAddHandler);
imagePopupCloseButton.addEventListener('click', closePopupAll);
window.addEventListener("load", renderAllCards);

const emptyFieldErrorMsg = "   Вы пропустили это поле.";

//для валидации файл конфиг указываем класс кнопок инпутов форм
const configs = [
    {
        formSelector: '.popup__form[name="resaveProfile"]',
        inputElement: '.popup__field',
        submitButton: '.popup__save',
        message:      emptyFieldErrorMsg,
        popupIsValid:'popup__button_valid',
        popupIsInvalid:'popup__button_invalid'
    },
    {   formSelector: '.popup__form[name="resaveCountry"]',
        inputElement: '.popup__field',
        submitButton: '.popup__save',
        message:      "Введите адрес сайта.",
        popupIsValid:'popup__button_valid',
        popupIsInvalid:'popup__button_invalid',
    }
]

//ищем все оверлеи=блокеры  навешиваем листенер на онклик
const blockerList = Array.from(document.querySelectorAll('.blocker'));
blockerList.forEach((blocker) => {
    blocker.addEventListener('click', (evt) => {
        closePopupAll(evt);
    });
})

configs.forEach(config=>enableValidation(config));

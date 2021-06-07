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
let popup = document.querySelector('.popup_type_edit');// По классу .popup найдется первый попап в разметке. Если разметка поменяется, то найдется не тот попап, который нужен. Для попапа нужно задать модификатор и проводить поиск по нему.
let popupPlace = document.querySelector('.popup_country');
let closePopupPlace = popupPlace.querySelector('.popup__close-button');//место

let popupChangeProfile = document.querySelector('.popup_type_edit');
let closePopupChangeProfile = popupChangeProfile.querySelector('.popup__close-button');//Кусто

let popupMainContainerImage = document.querySelector('.popup_type_image');
let imagePopupCloseButton = popupMainContainerImage.querySelector('.popup__close-button-image');//картинка

//открытие 2-го попапа
let openPopupPlaceButton = document.querySelector('.profile__add-button');

// форма и поля формы
let savePopupProfile = document.querySelector('#popup-mega-id');
let saveAddPopup = document.querySelector('#popup-input-mega-id');//2-попап

let popupName = document.querySelector('#popup-field-name');
let popupJob = document.querySelector('#popup-field-job');

let popupCountryform = document.querySelector('#popup-field-card-name');//2-попап
let popupLinkform = document.querySelector('#popup-field-card-img');//ссылка//2-попап

//куда это будет вставлено
let name = document.querySelector('.profile__title');
let job = document.querySelector('.profile__subtitle');


let newElements = document.querySelector('.elements'); //list весь список
//let elements = document.querySelectorAll('.elements__card'); //ВСЕ СОДЕРЖИМОЕ КАРТОЧКИ
let elementsSection = document.querySelector('.elements');

function closePopupAll(evt) {
    //закрываем попап
    evt.target.closest('section').classList.remove('popup_opened');
}

function submitHandlerProfile(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    name.textContent = popupName.value;
    job.textContent = popupJob.value;
    closePopupAll(evt);
}

function handleImageView(evt) {//обработчик события
    //меняем параметры из попапа, на карточку img /word
    popupMainContainerImage.classList.add('popup_opened');
    popupImage.src = evt.currentTarget.src;
    popupAlt.alt = evt.currentTarget.alt;
    popupWord.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
}

let itemTemplate = null;
let popupImage = null;
let popupWord = null;
let popupAlt = null;
function handleLikeClick(evt) {
    evt.currentTarget.classList.toggle('elements__like_active');
}

function handleCardRemove(evt) {
    evt.currentTarget.closest('#template-id').remove();
}
function createCard(item) { //create
    const newElement = itemTemplate.content.cloneNode(true);
    newElement.querySelector('.elements__image').src = item.link;
    newElement.querySelector('.elements__image').alt = item.name;
    newElement.querySelector('.elements__word').textContent = item.name;
   // newElement.querySelector('.elements__image').addEventListener('.click', handleImageView)

    const likeElement = newElement.querySelector('.elements__like');
    likeElement.addEventListener('click', handleLikeClick);

    const newElementImage = newElement.querySelector('.elements__image');

    //новый картинка слушает когда по нему кликнут
    newElementImage.addEventListener('click', handleImageView);//обработчик события

    newElement.querySelector('.elements__trash').addEventListener('click', handleCardRemove);
    return newElement;
}

function renderAllCards() {
    initialCards.forEach(function (item) {
        const newCard = createCard(item);
        newElements.append(newCard); //кладем в ДОМ
    });
}

//вызывается при загрузке
function onLoad(event) {
    itemTemplate = document.querySelector('.item-template');
    popupImage = document.querySelector('.popup__image');
    popupWord = document.querySelector('.popup__image-word');
    popupAlt = document.querySelector('.popup__image');
    renderAllCards();
}

window.addEventListener("load", onLoad);


function workPopup() {
    //открытие попапа с редактированием профиля
    popupName.value = name.textContent;
    popupJob.value = job.textContent;
    popup.classList.add('popup_opened');
}

function workpopupPlace() {
    //открытие попапа с местом
    popupPlace.classList.add('popup_opened');
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



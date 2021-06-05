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
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupPlace = document.querySelector('.popup__country');
let closePopup = popupPlace.querySelector('.popup__close-button');//место

let popupChangePlace = document.querySelector('.popup_type_edit');
let closePopupAdd = popupChangePlace.querySelector('.popup__close-button');//Кусто

let imagePopup = document.querySelector('.popup_type_image');
let imagePopupCloseButton = imagePopup.querySelector('.popup__close-button-image');//картинка

//let deleteButton = document.querySelector('.elements__trash');

let popupAdd = document.querySelector('.popup__country');//2-попап
//открытие 2-го попапа
let openPopupAdd = document.querySelector('.profile__add-button');

// форма и поля формы
let savePopup = document.querySelector('#popup-mega-id');
let saveAddPopup = document.querySelector('#popup-input-mega-id');//2-попап

let popupName = document.querySelector('#popup-field-name');
let popupJob = document.querySelector('#popup-field-job');

let popupCountryform = document.querySelector('#popup-field-card-name');//2-попап
let popupLinkform = document.querySelector('#popup-field-card-img');//ссылка//2-попап

//куда это будет вставлено
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');


let newElements = document.querySelector('.elements'); //list весь список
//let elements = document.querySelectorAll('.elements__card'); //ВСЕ СОДЕРЖИМОЕ КАРТОЧКИ

//картинка попап
let popupMainContainerImage = document.querySelector('.popup_type_image');


function closePopupAll(evt) {
    //закрываем попап
    evt.target.closest('section').classList.remove('popup_opened');
}

function submitHandler(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    nameInput.textContent = popupName.value;
    jobInput.textContent = popupJob.value;
    closePopupAll(evt);
}

function renderAllCards() {
    let itemTemplate = document.querySelector('.item__template');
    initialCards.forEach(function createCard(item) {
        let newElement = itemTemplate.content.cloneNode(true);
        newElement.querySelector('.elements__image').src = item.link;
        newElement.querySelector('.elements__image').alt = item.name;
        newElement.querySelector('.elements__word').textContent = item.name;

        let likeElement = newElement.querySelector('.elements__like');
        likeElement.addEventListener('click', function (evt) {
            evt.currentTarget.classList.toggle('elements__like_active');
        });

        let popupImage = document.querySelector('.popup__image');
        let popupWord = document.querySelector('.popup__image-word');
        let newElementImage = newElement.querySelector('.elements__image');
        //новый картинка слушает когда по нему кликнут
        newElementImage.addEventListener('click', function (evt) {
            //меняем параметры из попапа, на карточку img /word
            popupMainContainerImage.classList.add('popup_opened');
            popupImage.src = evt.currentTarget.src;
            popupWord.textContent = evt.currentTarget.closest("form").querySelector('.elements__word').textContent;
        });

        newElement.querySelector('.elements__trash').addEventListener('click', function (evt) {
            evt.currentTarget.closest('form').remove();
            // renderAllCards();
        });

        newElements.append(newElement);
    });
}



//выводим карточки
window.addEventListener("load", function (event) {
   // console.log(initialCards);
    renderAllCards();
});

//по 2-му попапу добавление карточки
//const popupLink = document.querySelector('.elements__image');//2-попап
//const popupCountry = document.querySelector('.elements__word');//2-попап

function workPopup() {
    //открытие попапа с редактированием профиля
    popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;
    popup.classList.add('popup_opened');
}

function workPopupAdd() {
    //открытие попапа с местом
    popupAdd.classList.add('popup_opened');
}


function submitAddHandler(evt) {
    // сохраняем введенные значения 2 popup
    evt.preventDefault();
    let newArrayElement = {
        name: popupCountryform.value,
        link: popupLinkform.value
    };
    initialCards.unshift(newArrayElement);
    let elementsSection = document.querySelector('.elements');
    elementsSection.innerHTML = '';
    renderAllCards();
    closePopupAll(evt);
}


editButton.addEventListener('click', workPopup);
openPopupAdd.addEventListener('click', workPopupAdd);
closePopup.addEventListener('click', closePopupAll);
closePopupAdd.addEventListener('click', closePopupAll);
savePopup.addEventListener('submit', submitHandler);
saveAddPopup.addEventListener('submit', submitAddHandler);
imagePopupCloseButton.addEventListener('click', closePopupAll);


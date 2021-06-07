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

//let popupAdd = document.querySelector('.popup_country');//2-попап
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

//let popupMainContainerImage = document.querySelector('.popup_type_image');


function closePopupAll(evt) {
    //закрываем попап
    evt.target.closest('section').classList.remove('popup_opened');
}

function submitHandler(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    name.textContent = popupName.value;
    job.textContent = popupJob.value;
    closePopupAll(evt);
}

function renderAllCards() {
    const itemTemplate = document.querySelector('.item-template');
    initialCards.forEach(function createCard(item) {
        const newElement = itemTemplate.content.cloneNode(true);
        newElement.querySelector('.elements__image').src = item.link;
        newElement.querySelector('.elements__image').alt = item.name;
        newElement.querySelector('.elements__word').textContent = item.name;

        const likeElement = newElement.querySelector('.elements__like');
        likeElement.addEventListener('click', function (evt) {
            evt.currentTarget.classList.toggle('elements__like_active');
        });

        const popupImage = document.querySelector('.popup__image');
        const popupWord = document.querySelector('.popup__image-word');
        const newElementImage = newElement.querySelector('.elements__image');
        //новый картинка слушает когда по нему кликнут
        newElementImage.addEventListener('click', function (evt) {
            //меняем параметры из попапа, на карточку img /word
            popupMainContainerImage.classList.add('popup_opened');
            popupImage.src = evt.currentTarget.src;
            popupWord.textContent = evt.currentTarget.closest("form").querySelector('.elements__word').textContent;
        });

        newElement.querySelector('.elements__trash').addEventListener('click', function (evt) {
            evt.currentTarget.closest('form').remove();
        });

        newElements.append(newElement);
    });
}

//выводим карточки
window.addEventListener("load", function (event) {
    renderAllCards();
});


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
 //   initialCards.unshift(popupCountryform.value,popupLinkform.value);

    initialCards.unshift(newArrayElement);
//    let elementsSection = document.querySelector('.elements');
    elementsSection.innerHTML = '';
    renderAllCards();
    closePopupAll(evt);

}

editButton.addEventListener('click', workPopup);
openPopupPlaceButton.addEventListener('click', workpopupPlace);
closePopupPlace.addEventListener('click', closePopupAll);
closePopupChangeProfile.addEventListener('click', closePopupAll);
savePopupProfile.addEventListener('submit', submitHandler);
saveAddPopup.addEventListener('submit', submitAddHandler);
imagePopupCloseButton.addEventListener('click', closePopupAll);


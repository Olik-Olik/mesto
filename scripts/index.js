let editButton = document.querySelector('.profile__edit-button');
let addCard = document.querySelector('.profile__add-button');
let popup = document.querySelector('.popup');
let savePopup = document.querySelector('#popup-mega-id');
let closePopup = document.querySelector('.popup__close-button');
let popupName = document.querySelector('#popup-field-name');
let popupJob = document.querySelector('#popup-field-job');
//куда это будет вставлено
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');
let newElements = document.querySelector('.elements');
//card
/*
let namecardInput = document.querySelector('.profile__title');
let jobcardInput = document.querySelector('.profile__subtitle');
let popupcardName = document.querySelector('#popup-field-name');
let popupcardJob = document.querySelector('#popup-field-job');
const addButton = document.querySelector('.profile__add-button');
*/

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
window.addEventListener("load", function (event) {
    console.log(initialCards);
    var itemTemplate = document.querySelector('.item__template');

    initialCards.forEach(function createCard(item) {
        let newElement = itemTemplate.content.cloneNode(true);
        newElement.querySelector('.elements__image').src = item.link;
        newElement.querySelector('.elements__image').alt = item.name;
        newElement.querySelector('.elements__title').textContent = item.name;
        newElements.append(newElement);
    })
});

//лайки

let likeElement = newElements.querySelector('.elements__like');
likeElement.addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__like_active');
   });





/*
// профиль
//перечисляем переменные
const popupProfile = document.querySelector('#popup-input-profile');
const popupCloseProfile = document.querySelector('.popup__close-button');
//let popupName = document.querySelector('#popup-field-name');
*/
//let popupJob = document.querySelector('#popup-field-job');
//let savePopup = document.querySelector('#popup-mega-id');

//функция для переноса ссылки на картинку и подписи к ней


/*Например, при клике на кнопку в свойство target попадает элемент этой кнопки:*/
/*const button = document.querySelector('.button');
button.addEventListener('click', function (evt) {
  // в переменной eventTarget окажется элемент
  // button, на который мы кликнули
    const eventTarget = evt.target;
    eventTarget.setAttribute('disabled', true);
});*/

//надо создать карточку
//динамически добавть карточку на страницу



// слушатель кликов по картинке
/*
const template =document.querySelector('.item-template');//родитель / все картинки
const templateClone = document.querySelector('.list__item').cloneNode(true);//тут картинка содержащая мусорку и img и титл и лайк
const itemTemplate = document.querySelector(".item_template").content;
const list = document.querySelector(".list");
const formButton = document.querySelector(".form__submit");
const formInput = document.querySelector(".form__input");

/!*popup_type_edit,
 popup_type_new-card
 popup_type_image 
и именно по этому классу вы будете обращаться к ним из js*!/


// клонируем содержимое тега template
const userElement = userTemplate.querySelector('.user').cloneNode(true);

// наполняем содержимым
userElement.querySelector('.user__avatar').src = 'tinyurl.com/v4pfzwy';
userElement.querySelector('.user__name').textContent = 'Кусто блин';
*/


//добавление картинки
/*function addCard() {
  //  const addButton = document.querySelector('.profile__add-button');
    popup.classList.add('profile__add-button');
    popupcardName.value = namecardInput.textContent;
    popupcardJob.value = jobcardInput.textContent;
   // popup.classList.add('popup_opened');
}*/

//открытие попапа
function workPopup() {
    popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;
    popup.classList.add('popup_opened');
}

//закрываем попап
function closePopupAll() {

    popup.classList.remove('popup_opened');
}

// сохраняем введенные значения
function submitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent = popupName.value;
    jobInput.textContent = popupJob.value;
    closePopupAll();
}

/*

//модальные окна
const firstModal = document.querySelector('.modal_first');
const secondModal = document.querySelector('.modal_second');

 */
//Открытие модального окна
/*
function toggleModal() {
    modal.classList.toggle("popup_opened");
}
....toggleModal(modal) {
    modal.toggle('modal_open')
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
somebutton.addEL('click', () => toggleModal(firstModal))
anotherbutton.addEL('click', () => toggleModal(secondModal));
*/

//вызовы
editButton.addEventListener('click', workPopup);
closePopup.addEventListener('click', closePopupAll);
savePopup.addEventListener('submit', submitHandler);
//addButton.addEventListener('click', addCard);
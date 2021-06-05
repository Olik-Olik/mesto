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
let closePopup = document.querySelector('.popup__close-button');//попап с Кусто
let closePopupAdd = document.querySelector('.popup__close-button-image');//пoпап со Страной//2-попап
let deleteButton = document.querySelector('.elements__trash');

let popupAdd = document.querySelector('.popup-country');//2-попап
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

//по 2-му попапу добавление карточки
let popupLink = document.querySelector('.elements__image');//2-попап
let popupCountry = document.querySelector('.elements__word');//2-попап

let newElements = document.querySelector('.elements'); //list весь список
let elements = document.querySelectorAll('.elements__card'); //ВСЕ СОДЕРЖИМОЕ КАРТОЧКИ

//картинка попап
let popupMainContainerImage = document.querySelector('.popup_type_image');

let imagePopupCloseButton = document.querySelector('.popup__close-button-image')

function workPopup() {
    //открытие попапа с редактированием профиля
    popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;
    popup.classList.add('popup_opened');
}

function workPopupAdd() {
    //открытие попапа с местом -не пашет вместе со всем
    popupCountryform.value = popupCountry.textContent;
    popupLinkform.value = popupLink.textContent;
    popupAdd.classList.add('popup_opened'); //псевдомассив  со все классами элемента.
}

/*
function taskDelete(evt){
//удаляем карточку
elements.forEach(function (item) {
    item.addEventListener('.click', (evt)=> {
        if (evt.target.classList.contains('elements__trash')){  //кликает то по ссылке идет к//содержащий все классы элемента.узел
            item.remove();
        }
    });
})*/

function closePopupAll(evt) {
    //закрываем попап
    evt.target.closest('section').classList.remove('popup_opened');

//    popupMainContainerImage.classList.remove('popup_opened')
}

function submitHandler(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    nameInput.textContent = popupName.value;
    jobInput.textContent = popupJob.value;
    closePopupAll();
}

function submitAddHandler(evt) {
    // сохраняем введенные значения 2 popup
    evt.preventDefault();
    popupCountry.textContent = popupCountryform.value;
    popupLink.textContent = popupLinkform.value;
    closePopupAll();
}
imagePopupCloseButton.addEventListener('click',closePopupAll);

//выводим карточки
window.addEventListener("load", function (event) {
    console.log(initialCards);
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
            popupWord.textContent = evt.currentTarget.closest("section").querySelector('.elements__word').textContent;
        });

        /*  newElement.querySelector('.elements__trash').addEventListener('.click', function (evt) {
              evt.target.closest('.elements__card').remove();
          });*/

        newElements.append(newElement);
    });

    //картинка из попапа в экран вписывается- точнее задача такая, вписать!

});

// Открытие модального окна
/*const firstModal = document.querySelector('.popup');
 const secondModal = document.querySelector('.popup__country');

 function toggleModal() {
     modal.classList.toggle("popup_opened");
 }
  ...toggleModal(modal) {
     modal.toggle('modal_open')
 }

 function windowOnClick(evt) {
     if (evt.target === modal) {
         //ссылкой на объект, который был инициатором события.
         toggleModal();
     }
 }*/

editButton.addEventListener('click', workPopup);
openPopupAdd.addEventListener('click', workPopupAdd);
closePopup.addEventListener('click', closePopupAll);
//  closeAddPopup.addEventListener('click', );
   savePopup.addEventListener('submit', submitHandler);
//  saveAddPopup.addEventListener('submit', submitAddHandler);
//  deleteButton.addEventListener('click', taskDelete);

// element.querySelector('.elements__trash').addEventListener('.click', taskDelete);

//   popup.addEventListener('click', windowOnClick());//модальное окно по клику open заменяем нижнего слушателя
//closePopup.addEventListener('click',() => toggleModal);//заменяем нижнего слушателя close
////////////trigger.addEventListener('click',() => toggleModal);/////
//    form.addEventListener('input', inputHandler);//на ввод форма
//   form.addEventListener('submit', addCard);//на сохранение слушатель,того,что ввели
//  savePopup.addEventListener('submit', submitHandler);

/*
popup.addEventListener('click', () => toggleModal(firstModal));
popupAdd.addEventListener('click', () => toggleModal(secondModal));*/

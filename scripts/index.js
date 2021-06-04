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
let closePopup = document.querySelector('.popup__close-button');//попап с Кусто
let closePopupAdd = document.querySelector('.popup__close-button-country');//папап со Страной
let deleteButton = document.querySelector('.elements__trash');

let popupAdd = document.querySelector('.popup-country');//2-попап
let openPopupAdd = document.querySelector('.profile__add-button');

// форма и поля формы
let savePopup = document.querySelector('#popup-mega-id');

let popupName = document.querySelector('#popup-field-name');
let popupJob = document.querySelector('#popup-field-job');

let popupCountryform = document.querySelector('#popup-field-card-name');
let popupLinkform = document.querySelector('#popup-field-card-img');//ссылка


//куда это будет вставлено
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');

//по 2-му попапу добавление карточки
let popupLink = document.querySelector('.elements__image');
let popupCountry = document.querySelector('.elements__word');

let newElements = document.querySelector('.elements'); //list
let elements = document.querySelectorAll('.elements__card'); //ВСЕ СОДЕРЖИМОЕ КАРТОЧКИ

//let formInput = document.querySelector('.popup__form');//form__input-edit
//let formButton = document.querySelector('.popup__save');
//let editing ; // изначально не задано значение

function workPopup() {
    //открытие попапа с редактированием профиля
    popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;
    popup.classList.add('popup_opened');
}

function workPopupAdd() {
    //открытие попапа с местом -не пашет
    popupCountryform.value = popupCountry.textContent;
    popupLinkform.value = popupLink.textContent;
    popupAdd.classList.add('popup_opened'); //псевдомассив  со все классами элемента.
}


//удаляем карточку
elements.forEach(function (item) {
    item.addEventListener('.click', (evt)=> {
        if (evt.target.classList.contains('elements__trash')){
            item.remove();
        }
    });
})

function handleDelete(evt) {
    evt.target.closest('.elements__card').remove();
}

function closePopupAll() {
    //закрываем попап
    popup.classList.remove('popup_opened');

}

function submitHandler(evt) {
    // сохраняем введенные значения
    evt.preventDefault();
    nameInput.textContent = popupName.value;
    jobInput.textContent = popupJob.value;
    closePopupAll();
}

//выводим карточки
window.addEventListener("load", function (event) {
    console.log(initialCards);
    let itemTemplate = document.querySelector('.item__template');

    initialCards.forEach(function createCard(item) {
        let newElement = itemTemplate.content.cloneNode(true);
        newElement.querySelector('.elements__image').src = item.link;
        newElement.querySelector('.elements__image').alt = item.name;
        newElement.querySelector('.elements__word').textContent = item.name;
        newElements.append(newElement);
    });

//лайки
    let likeElement = newElements.querySelector('.elements__like');
    likeElement.addEventListener('click', function (evt) {
        console.log(evt);
        evt.target.classList.toggle('elements__like_active');

    });
//удаление карты из ДОМ внутри функции обработчика события удаления-клик по корзине

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

    /*function addCard(evt){
            evt.preventDefault();
            const
    }*/


    /*
    function renderItems() {
        initialCards.forEach(renderItem);
    }

    function renderItem(text) {
        let htmlElement = itemTemplate.cloneNode(true);
        htmlElement.querySelector('.elements__title').innerText = text;
        setEventListeners(htmlElement);
        list.appendChild(htmlElement);
    }

    function handleSubmit() {
        renderItem(formInput.value)
    }



    function setEventListeners(element) {
        element.querySelector('.elements__trash').addEventListener('.click', handleDelete);
        element.querySelector('.profile__edit-button').addEventListener('.click', handleEdit);
        element.querySelector('.duplicate').addEventListener('.click', handleDuplicate);
    }

    formButton.addEventListener('.click', HandleSubmit);
    renderItems();

    function handleDuplicate(evt) {
        let text = evt.target.closest('.elements__card').querySelector('.elements__title').textContent;
        renderItems(text);
    }

    function handleEdit(evt) {
        //редактирование
        editing = evt.target.closest('.elements__card');//это и редактируем
        // копируем содержимое в инпут
        //копируем в инпут
        formInput.value = editing.querySelector('.elements__title').textContent;

        //меняем название кнопки
        formButton.value = "Изменить";

        //вешаем нового слушателя на кнопку.
        // Надо,чтобы менять старый список.Удаляем старого слушателя с кнопки и вешаем нового.
        formButton.removeEventListener('.click', handleSubmit);
        formButton.addEventListener('click', handleEditSubmit);//это теперь наша новая функция
        resetEditMode();
    }

    function handleEditSubmit() {
        //старый edit элемент
        editing.querySelector('.elements__title').textContent = formInput.value;
        resetEditMode();
    }

    function resetEditMode() {
        //editind делаем нулем нечего редактировать
        editing = null;
        formInput.value = ''; //пустой текст
        formButton.value = "Добавить как и раньше";
        formButton.removeEventListener('click', handleSubmit);
        formButton.addEventListener('.click', handleSubmit);//отвечает за добавление.При нажании на edit- сброс.
    }


    function handleSubmit() {
        renderItem(formInput.value);
    }
    */

    editButton.addEventListener('click', workPopup);
    openPopupAdd.addEventListener('click',workPopupAdd);
    closePopup.addEventListener('click', closePopupAll);
    savePopup.addEventListener('submit', submitHandler);
  //  deleteButton.addEventListener('click',)
    element.querySelector('.elements__trash').addEventListener('.click', handleDelete);

//popup.addEventListener('click', windowOnClick());//модальное окно по клику open заменяем нижнего слушателя
//closePopup.addEventListener('click',() => toggleModal);//заменяем нижнего слушателя close
////////////trigger.addEventListener('click',() => toggleModal);/////
//form.addEventListener('input', inputHandler);//на ввод форма
//form.addEventListener('submit',addCard);//на сохранение слушатель,того,что ввели
//savePopup.addEventListener('submit', submitHandler);
    popup.addEventListener('click', () => toggleModal(firstModal));
    popupAdd.addEventListener('click', () => toggleModal(secondModal));
})
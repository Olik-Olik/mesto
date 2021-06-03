let editButton = document.querySelector('.profile__edit-button');

let popup = document.querySelector('.popup');
let savePopup = document.querySelector('#popup-mega-id');
let closePopup = document.querySelector('.popup__close-button');
let popupName = document.querySelector('#popup-field-name');
let popupJob = document.querySelector('#popup-field-job');
//куда это будет вставлено
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');
let newElements = document.querySelector('.elements'); //list

let formInput = document.querySelector('.popup__form');//form__input-edit
let formButton = document.querySelector('.popup__save');
let editing = null; // изначально не задано значение
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
    let itemTemplate = document.querySelector('.item__template');

    initialCards.forEach(function createCard(item) {
        let newElement = itemTemplate.content.cloneNode(true);
        newElement.querySelector('.elements__image').src = item.link;
        newElement.querySelector('.elements__image').alt = item.name;
        newElement.querySelector('.elements__title').textContent = item.name;
        newElements.append(newElement);
    });
//лайки
    let likeElement = newElements.querySelector('.elements__like');
    likeElement.addEventListener('click', function (evt) {
        evt.target.classList.toggle('elements__like_active');
    });
//-------
    //1
    function renderItems() {
        initialCards.forEach(renderItem);
    }

    //2
    function renderItem(text) {
        let htmlElement = itemTemplate.cloneNode(true);
        htmlElement.querySelector('.elements__title').innerText = text;
        setEventListeners(htmlElement);
        list.appendChild(htmlElement);
    }

    function handleSubmit() {
        renderItem(formInput.value)
    }

    function handleDelete(evt) {
        evt.target.closest('.elements__card').remove();
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
        //editind делаем нулем
        editing = null;//nothing to redact
        formInput.value = ''; //пустой текст
        formButton.value = "Добавить как и раньше";
        formButton.removeEventListener('click', handleSubmit);
        formButton.addEventListener('.click', handleSubmit);//отвечает за добавление.При нажании на edit- сброс.
    }


    function handleSubmit() {
        renderItem(formInput.value);
    }

    function workPopup() {
        //открытие попапа
        popupName.value = nameInput.textContent;
        popupJob.value = jobInput.textContent;
        popup.classList.add('popup_opened');
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

    editButton.addEventListener('click', workPopup);
    closePopup.addEventListener('click', closePopupAll);
    savePopup.addEventListener('submit', submitHandler);
})

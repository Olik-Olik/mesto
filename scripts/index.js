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
let formInput = document.querySelector('.profile__add-button');//form__input

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
    });
//лайки

        let likeElement = newElements.querySelector('.elements__like');
        likeElement.addEventListener('click', function (evt) {
            evt.target.classList.toggle('elements__like_active');

    });

    //1 add card

      function createCard(item){
      const div = document.createElement('div');
      div.classList.add('elements__card');

      const span=document.createElement('span');
      span.classList.add('elements__image');


    }


 //2
    function handleSubmit(){renderItem(formInput.value);}createCard();

    newElements.querySelector('.elements__card').addEventListener()

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
    savePopup.addEventListener('submit', submitHandler);})
    formInput.addEventListener('click', handleSubmit);
    renderItems();
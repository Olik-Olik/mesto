const
    initialCards = [
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
const keyCodeEsc = '27';
const editButton = document.querySelector('.profile__edit-button');

//открытие 2-го попапа
const openPopupPlaceButton = document.querySelector('.profile__add-button');

const formAddCard = document.querySelector('#popup-input-mega-id');//2-попап

const inputUserName = document.querySelector('#popup-field-name');
const inputUserJob = document.querySelector('#popup-field-job');

//куда это будет вставлено

//делаем глобальными  из onLoad
const zoomedImage = document.querySelector('.popup__image');
const imageDescription = document.querySelector('.popup__image-word');

//для валидации файл конфиг указываем класс кнопок инпутов форм
const configs =
    {   //settings
        formSelector: '.popup__form',
        inputElement: '.popup__field',
        submitButton: '.popup__save',
        popupIsValid: 'popup__button_valid',
        popupIsInvalid: 'popup__button_invalid',
        formInputErrorClass: 'form__input_error',
        formInputErrorActive: 'form__input-error_active',
    };

export {configs};

export{keyCodeEsc, editButton,
    openPopupPlaceButton,
    formAddCard,inputUserName,inputUserJob,
    zoomedImage,imageDescription,initialCards};

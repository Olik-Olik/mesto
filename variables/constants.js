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
const popupPlace = document.querySelector('.popup_country');
const submitPopupPlaceButton = popupPlace.querySelector('.popup__save');
const closePopupPlaceButton = popupPlace.querySelector('.popup__close-button');//место-1
const inputListpopupPlace = popupPlace.querySelectorAll('.popup__field');

const popupChangeProfile = document.querySelector('.popup_type_edit');
const closePopupChangeProfileButton = popupChangeProfile.querySelector('.popup__close-button');//Кусто-2

const popupImage = document.querySelector('.popup_type_image');
const imagePopupCloseButton = popupImage.querySelector('.popup__close-button-image');//картинка-3

//открытие 2-го попапа
const openPopupPlaceButton = document.querySelector('.profile__add-button');

// форма и поля формы
const formEditProfile = document.querySelector('#popup-mega-id');
const formAddCard = document.querySelector('#popup-input-mega-id');//2-попап

const inputUserName = document.querySelector('#popup-field-name');
const inputUserJob = document.querySelector('#popup-field-job');

const inputCardName = document.querySelector('#popup-field-card-name');//2-попап
const inputCardLink = document.querySelector('#popup-field-card-img');//ссылка//2-попап
//куда это будет вставлено
const nameProfileElement = document.querySelector('.profile__title');
const jobProfileElement = document.querySelector('.profile__subtitle');

const cardsList = document.querySelector('.elements'); //list весь список


//делаем глобальными  из onLoad
const zoomedImage = document.querySelector('.popup__image');
const imageDescription = document.querySelector('.popup__image-word');
const itemTemplate = document.querySelector('.item-template');



export{keyCodeEsc, editButton,popupPlace,submitPopupPlaceButton,closePopupPlaceButton,inputListpopupPlace,
    popupChangeProfile,closePopupChangeProfileButton,imagePopupCloseButton,openPopupPlaceButton,formEditProfile,
    formAddCard,inputUserName,inputUserJob,inputCardName,inputCardLink,nameProfileElement,jobProfileElement,
    cardsList,zoomedImage,imageDescription,itemTemplate,initialCards};

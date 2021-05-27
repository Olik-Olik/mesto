let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let savePopup = document.getElementById('popup__field');
let closePopup = document.querySelector('.popup__close-button');
let popupName = document.getElementById('popup__field_name');
let popupJob = document.getElementById('popup__field_job');
//куда это будет вставлено
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');

/*editButton.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;
})*/
function workPopup() {
    popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;
    popup.classList.add('popup_opened');
}

function closePopupAll() {
    popup.classList.remove('popup_opened');
}

/*popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
})*/
function submitHandler(evt) {
    evt.preventDefault();
    nameInput.value= popupName.textContent;
    jobInput.value = popupJob.textContent;
    closePopupAll();
}
editButton.addEventListener('click', workPopup);
closePopup.addEventListener('click', closePopupAll);
savePopup.addEventListener('submit', submitHandler);


/*
formElement.addEventListener('submit', #formSubmitHandler);
let formElement = document.querySelector('.popup__container')
let nameInput = document.querySelector('.popup__field_name');
let jobInput = document.querySelector('.popup__field_job');
function formSubmitHandler (evt) {
evt.preventDefault();
let ProfileTitle = document.querySelector('.profile__title');
let ProfileSubtitle = document.querySelector('.profile__subtitle');
 ProfileTitle.textContent = nameInput.value;
  ProfileSubtitle.textContent = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);
*/
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let savePopup = document.getElementById('popup_mega_id');
let closePopup = document.querySelector('.popup__close-button');
let popupName = document.getElementById('popup__field_name');
let popupJob = document.getElementById('popup__field_job');
//куда это будет вставлено
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');

function workPopup() {
    popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;
    popup.classList.add('popup_opened');
}

function closePopupAll() {
    popup.classList.remove('popup_opened');
}

function submitHandler(evt) {
    evt.preventDefault();
    nameInput.textContent= popupName.value;
    jobInput.textContent = popupJob.value;
    closePopupAll();
}

editButton.addEventListener('click', workPopup);
closePopup.addEventListener('click', closePopupAll);
savePopup.addEventListener('submit', submitHandler);

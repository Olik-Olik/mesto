/*
//обьявляем переменные
let popup = document.querySelector('.popup');
let popupOpen = document.querySelector('.profile__edit-button');
let popupClose = document.querySelector('.popup__close-button');
let popUpSave = document.querySelector('.popup__save');
let nameInput = document.querySelector('.profile__title');
let popupName = document.getElementsByid('popup__name');
let jobInput = document.querySelector('.profile__subtitle');
let popupJob = document.getElementsByid('popup__job');
let formSubmit = document.querySelector('.popup__form');*/


let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
editButton.addEventListener('click',function (){
popup.classList.add('popup_opened');})

let nameInput = document.querySelector('.profile__title');
let popupName = document.getElementsByid('popup__name');
let jobInput = document.querySelector('.profile__subtitle');
let popupJob = document.getElementsByid('popup__job');

      popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;


/*

//теперь функции open
/!*function editButton() {
    popupName.value = nameInput.textContent;
    popupJob.value = jobInput.textContent;
    popup.classList.add('popup_opened');
}*!/

popupOpen.addEventListener('click',function (){
/!* popupName.value = nameInput.textContent;
 popupJob.value = jobInput.textContent; *!/
popup.classList.add('popup_opened');})


//удаляем=закрываем
    popupClose.addEventListener('click',function (){
    popup.classList.remove('popup_opened');
})


//функция сабмита
// Находим форму в DOM  formSubmitHandler
//Слушаем в submitPopup содержимое класса формы
formElement
let submitPopup = container.querySelector('.container')
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileTitle = container.querySelector('.profile__title');
    let profileSubtitle = container.querySelector('.profile__subtitle');
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    toggleClass();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);



*/

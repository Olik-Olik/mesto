let container = document.querySelector('.container');

//let heartButton = document.querySelector('.elements__heart');
//heartButton.addEventListener('click', () =>
//heartButton.classList.toggle('elements__heart_active'));//переключит на черное хотелось бы

//let editButton = document.querySelector('.profile__edit-button');
//let popupClose = container.querySelector('.popup__close');
//let popup = container.querySelector('.popup');
//editButton.addEventListener('click', toggleClass);
//popupClose.addEventListener('click', toggleClass);


let editButton = document.querySelector('.profile__edit-button');
let popup = container.querySelector('.popup');
editButton.addEventListener('click',function (){
popup.classList.add('popup_opened');})

let popupClose = container.querySelector('.popup__close');
popupClose.addEventListener('click',function (){
popup.classList.remove ('popup_opened');})

function toggleClass() {
    popup.classList.toggle('popup_opened');
}//переключаем класс

// Находим форму в DOM
let formElement = container.querySelector('.popup__container')
// Находим поля формы в DOM
let nameInput = container.querySelector('.popup__field_name');
let jobInput = container.querySelector('.popup__field_job');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
   // jobInput.getAttribute('value:');
   // nameInput.getAttribute('value');

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
//editButton.addEventListener('click', openPopup);
//popupClose.addEventListener('click', closePopup);

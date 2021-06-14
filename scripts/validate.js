//«Редактировать профиль»
function enableValidation() {
    // Вынесем все необходимые элементы формы в константы
    const form = document.querySelector('.popup__form[name=resaveProfile]');

    form.addEventListener('submit', submitHandlerProfile(evt));// Слушатель события submit
    form.addEventListener('input', handleFormProfileInput(evt));// Слушатель события input

    //  const formInput = formProfile.querySelector('.form__input');
    // const formError = formProfile.querySelector(`.${formInput.id}-error`);
}

function submitHandlerProfile(evt) {
    // evt.preventDefault(); // Отменим стандартное поведение

    const form = evt.currentTarget();
    const valid = form.checkValidity();
    if (valid) {
        alert('Все отлично форма валидна');
        form.reset();
    } else {
        alert('Меняй свою невалидную форму');
    }
    // Выведем в консоль значение свойства validity.valid поля ввода, на котором слушаем событие
    console.log(evt.target.validity.valid);
}

function handleFormProfileInput(evt) {
    // Вынесем все необходимые элементы формы в константы
    const inputProfile = evt.target;//ссылка на объект, который был инициатором события.
    const formProfile = evt.currentTarget;//элемент, в котором в данный момент обрабатывается событие на что повесиои
    textForUserError(inputProfile);//текст ошибки
}

function textForUserError(inputProfile) {
    const validity = inputProfile.validity;
    inputProfile.setCustomValidity('');//обнулись
    const min = inputProfile.getAttribute('minlength');
    const max = inputProfile.getAttribute('maxlength')

    if (validity.valueMissing) {
        inputProfile.setCustomValidity('Вы пропустили это поле')
    }
    if (validity.rangeOverflow) {
        inputProfile.setCustomValidity('Значение превосходит атрибут max')
    }
    if (validity.rangeUnderflow) {
        inputProfile.setCustomValidity('Значение меньше атрибута min')
    }
    if (validity.typeMismatch) {
        inputProfile.setCustomValidity('Значение не соответствует атрибуту type не ссылка')
    }

}

function mistakesField(input) {
    const span = document.querySelector(`.${span.id}-error`);
    //const formError = formProfile.querySelector(`.${formInput.id}-error`);
    span.textContent = input.validitionMessage;
}


enableValidation();


/*    {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
});*/

//   if (evt.target.classList.contains('.popup_opened')){closePopupAll(popup)}





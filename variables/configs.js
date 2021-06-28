const emptyFieldErrorMsg = "   Вы пропустили это поле.";

//для валидации файл конфиг указываем класс кнопок инпутов форм
export const configs = [
    {
        formSelector: '.popup__form[name="resaveProfile"]',
        inputElement: '.popup__field',
        submitButton: '.popup__save',
        message:      emptyFieldErrorMsg,
        popupIsValid: 'popup__button_valid',
        popupIsInvalid: 'popup__button_invalid',
        formInputErrorClass: 'form__input_error',
        formInputErrorActive: 'form__input-error_active'
    },
    {   formSelector: '.popup__form[name="resaveCountry"]',
        inputElement: '.popup__field',
        submitButton: '.popup__save',
        message:      "Введите адрес сайта.",
        popupIsValid: 'popup__button_valid',
        popupIsInvalid: 'popup__button_invalid',
        formInputErrorClass: 'form__input_error',
        formInputErrorActive: 'form__input-error_active'
    }
]

/*

const setEventListeners = (formElement, formConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(formConfig.inputElement));
    const buttonElement = formElement.querySelector(formConfig.submitButton);// сохранения
    toggleButtonState(inputList, buttonElement);// в кнопку всовываем инпуты и кнопку


};

const showInputError = (inputElement, inputElementConfig, errorMessage) => {
    const errorElement = document.querySelector(`#${inputElement.id}-error`); //#popup-field-name-error
    inputElement.classList.add(inputElementConfig.formInputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(inputElementConfig.formInputErrorActive);
};

const hideInputError = (inputElement, inputElementConfig) => {
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputElementConfig.formInputErrorClass);
    errorElement.classList.remove(inputElementConfig.formInputErrorActive);
    errorElement.textContent = '';
};


//проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита
const hasInvalidInput = (inputList) => {
    // удовлетворяет ли какой-либо элемент  условию
    return inputList.some((inputElement) => {
        //  не валидно, колбэк вернёт true Обход массива прекратится и вся функция вернёт true
        return !inputElement.validity.valid;
    })
};
*/




//Вот стартовый код
const enableValidation = ({formSelector, ...rest}) => {
    const formItems = Array.from(document.querySelectorAll(formSelector));
    formItems.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        setEventListeners(formElement, rest);
    })
};

const setEventListeners = (formElement, formConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(formConfig.inputElement));
    const buttonElement = formElement.querySelector(formConfig.submitButton);// сохранения
    toggleButtonState(inputList, buttonElement);// в кнопку всовываем инпуты и кнопку
//прогон инпутов
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(inputElement, formConfig);
            toggleButtonState(inputList, buttonElement);
        });
    });
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

const checkInputValidity = (inputElement, inputElementConfig) => {
    if (!inputElement.validity.valid) {
        if(inputElement.value.length === 0){
            showInputError(inputElement, inputElementConfig, emptyFieldErrorMsg);
        }else {
            const errText = handleInvalidInput(inputElement, inputElementConfig.message);
            showInputError(inputElement, inputElementConfig, errText);
        }
    } else {
        hideInputError(inputElement, inputElementConfig);
    }
};

//проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита
const hasInvalidInput = (inputList) => {
    // удовлетворяет ли какой-либо элемент  условию
    return inputList.some((inputElement) => {
        //  не валидно, колбэк вернёт true Обход массива прекратится и вся функция вернёт true
        return !inputElement.validity.valid;
    })
};

function disableButton(buttonElement){
    buttonElement.classList.add('button_inactive');
    buttonElement.disabled = true;
}

function enableButton(buttonElement){
    buttonElement.classList.remove('button_inactive');
    buttonElement.disabled = false;
}

function toggleButtonState(inputList, buttonElement){
    if (hasInvalidInput(inputList)){
        // сделай кнопку неактивной
        disableButton(buttonElement);
    } else
    {
        // иначе сделай кнопку активной
        enableButton(buttonElement);
    }
}

function handleInvalidInput(inputElement, typeErrorMsg){
    const validity = inputElement.validity;
    const length = inputElement.value.length;
    if (validity.tooShort){
        const min =inputElement.getAttribute('minlength');
        return(`Минимальное количество символов: ${min}. Длина текста сейчас: ${length} символ.`);
    } else if (validity.tooLong){
        const max =inputElement.getAttribute('maxlength');
        return(`Максимальное количество символов: ${max}. Длина текста сейчас: ${length} символ.`);
    } else if (validity.typeMismatch) {
        return typeErrorMsg;
    }

    return('Неправильные данные!');
}


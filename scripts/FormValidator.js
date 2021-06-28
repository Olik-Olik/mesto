import {configs, emptyFieldErrorMsg} from '../variables/configs.js';

// сделать массив обьекта ключей FormElement из formConfig
// id="popup-mega-id" имя
//id="popup-field-name"
//id="popup-field-name-error
// id="popup-field-job" работа
//id="popup-field-job-error"

//  id="popup-field-card-name карточка название
// id="popup-field-card-name-error"

// id="popup-field-card-img" карточка url
//id="popup-field-card-img-error"

// для каждой формы новый объект класса .
class FormValidator {
    constructor(settings) {
        this._settings = settings;
        this._enableValidation(settings);
    }

    _setEventListeners = (formElement, formConfig) => {
        const inputList = Array.from(formElement.querySelectorAll(formConfig.inputElement));  //FormElement- массив обьекта ключей
        const buttonElement = formElement.querySelector(formConfig.submitButton);// сохранения
        this._toggleButtonState(inputList, buttonElement);// в кнопку всовываем инпуты и кнопку
    };

    _enableValidation = (settings) => {
        const formItem = document.querySelector(settings.formSelector);
        formItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(formItem, settings);
    }

    _showInputError = (inputElement, inputElementConfig, errorMessage) => {
        const errorElement = document.querySelector(`#${inputElement.id}-error`); //#popup-field-name-error
        inputElement.classList.add(inputElementConfig.formInputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(inputElementConfig.formInputErrorActive);
    };


    _hideInputError = (inputElement, inputElementConfig) => {
        const errorElement = document.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(inputElementConfig.formInputErrorClass);
        errorElement.classList.remove(inputElementConfig.formInputErrorActive);
        errorElement.textContent = '';
    };


//проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита

    _hasInvalidInput = (inputList) => {
        // удовлетворяет ли какой-либо элемент  условию
        return inputList.some((inputElement) => {
            //  не валидно, колбэк вернёт true Обход массива прекратится и вся функция вернёт true
            return !inputElement.validity.valid;
        })
    };

    _handleInvalidInput(inputElement, typeErrorMsg) {
        const validity = inputElement.validity;
        const length = inputElement.value.length;
        if (validity.tooShort) {
            const min = inputElement.getAttribute('minlength');
            return (`Минимальное количество символов: ${min}. Длина текста сейчас: ${length} символ.`);
        } else if (validity.tooLong) {
            const max = inputElement.getAttribute('maxlength');
            return (`Максимальное количество символов: ${max}. Длина текста сейчас: ${length} символ.`);
        } else if (validity.typeMismatch) {
            return typeErrorMsg;
        }

        return ('Неправильные данные!');
    }

//методы класса
    _disableButton(buttonElement) {
        buttonElement.classList.add('button_inactive');
        buttonElement.disabled = true;
    }

    _enableButton(buttonElement) {
        buttonElement.classList.remove('button_inactive');
        buttonElement.disabled = false;
    }

    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput(inputList)) {
            // сделай кнопку неактивной
            this._disableButton(buttonElement);
        } else {
            // иначе сделай кнопку активной
            this._enableButton(buttonElement);
        }
    }

    _checkInputValidity = (inputElement, inputElementConfig) => {
        if (!inputElement.validity.valid) {
            if (inputElement.value.length === 0) {
                this._showInputError(inputElement, inputElementConfig, emptyFieldErrorMsg);
            } else {
                const errText = handleInvalidInput(inputElement, inputElementConfig.message);
                this._showInputError(inputElement, inputElementConfig, errText);
            }
        } else {
            this._hideInputError(inputElement, inputElementConfig);
        }
    };

}

export {FormValidator};
// сделать массив обьекта ключей FormElement из formConfig
// для каждой формы новый объект класса .
export class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputElement));
        this._buttonElement = this._formElement.querySelector(this._settings.submitButton);// сохранения
    }

    _setEventListeners = () => {
        this._toggleButtonState(this._inputList, this._buttonElement);
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement, this._settings);
                this._toggleButtonState();
            });
        });
    }

    hideInputErrorAll = () => {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement, this._settings);
        });
    }
    //  всовываем инпуты и кнопку

    inputListValidate = () => {
        this._inputList.forEach((inputElement) => {
            this._checkInputValidity(inputElement, this._settings);
            this._toggleButtonState(this._inputList, this._buttonElement);
        });
    };

    enableValidation = () => {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners(); /*не принимает ничего в вызов*/
    }

    _showError = (inputElement, inputElementConfig) => {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); //#popup-field-name-error
        inputElement.classList.add(inputElementConfig.formInputErrorClass);
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(inputElementConfig.formInputErrorActive);
    };

    _hideInputError = (inputElement, inputElementConfig) => {
        const errorElement =  this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(inputElementConfig.formInputErrorClass);
        errorElement.classList.remove(inputElementConfig.formInputErrorActive);
        errorElement.textContent = '';
    };

//проверяет наличие невалидного поля и сигнализирует, можно ли разблокировать кнопку сабмита
    _hasInvalidInput = () => {
        // удовлетворяет ли какой-либо элемент  условию проверка массива
        return this._inputList.some((inputElement) => {
            //  не валидно, колбэк вернёт true Обход массива прекратится и вся функция вернёт true
            return !inputElement.validity.valid;
        })
    };


//методы класса
    _disableButton() {
        this._buttonElement.classList.add('button_inactive');
        this._buttonElement.disabled = true;
    }

    _enableButton() {
        this._buttonElement.classList.remove('button_inactive');
        this._buttonElement.disabled = false;
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            // сделай кнопку неактивной
            this._disableButton();
        } else {
            // иначе сделай кнопку активной
            this._enableButton();
        }
    }

    _checkInputValidity = (inputElement, inputElementConfig) => {
        if (!inputElement.validity.valid) {
            this._showError(inputElement, inputElementConfig);

        } else {
            this._hideInputError(inputElement, inputElementConfig);
        }
    };
}

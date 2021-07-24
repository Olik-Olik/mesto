
// сделать массив обьекта ключей FormElement из formConfig
// для каждой формы новый объект класса .
export class FormValidator {
    constructor(settings, formElement) {
        this._settings = settings;
        this._formElement = formElement;
    }

    _setEventListeners = () => {
        this.inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputElement));
        this._buttonElement = this._formElement.querySelector(this._settings.submitButton);// сохранения
        this._toggleButtonState(this.inputList, this._buttonElement);
        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement, this._settings);
                this._toggleButtonState(this.inputList, this._buttonElement);
            });
        });
    }
    hideInputErrorAll = () => {
        this.inputList.forEach((inputElement) => {
            this._hideInputError(inputElement, this._settings);
        });
    }
    // в кнопку всовываем инпуты и кнопку

    inputListValidate = () => {
        this.inputList.forEach((inputElement) => {
            this._checkInputValidity(inputElement, this._settings);
            this._toggleButtonState(this.inputList, this._buttonElement);
        });
    };
    enableValidation = () => {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();

        });
        this._setEventListeners(this._formElement, this._settings);
    }

  _showError = (inputElement, inputElementConfig) => {
      const errorElement = document.querySelector(`#${inputElement.id}-error`); //#popup-field-name-error
             inputElement.classList.add(inputElementConfig.formInputErrorClass);
            errorElement.textContent = inputElement.validationMessage;
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
        // удовлетворяет ли какой-либо элемент  условию проверка массива
        return inputList.some((inputElement) => {
            //  не валидно, колбэк вернёт true Обход массива прекратится и вся функция вернёт true
            return !inputElement.validity.valid;
        })
    };



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
            this._showError(inputElement, inputElementConfig);

        } else {
            this._hideInputError(inputElement, inputElementConfig);
        }
    };

}

// Вынесем все необходимые элементы формы в константы
//const formElement = document.querySelector('.form');
//const formInput = formElement.querySelector('.popup__field');

/*const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.form'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));//Присвойте
        // ей массив из всех элементов с классом form__set внутри текущей формы — formElement.
        //Обойдите этот массив методом forEach. Для каждого филдсета элемента вызовите функцию setEventListeners и передайте ей аргументом нужный fieldset
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(form,rest);
        });
    });
};*/

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
    inputElement.classList.add('form__input_error');
//    const span=document.querySelector('.form__input-error);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};

const hideInputError = (inputElement, inputElementConfig) => {
    const errorElement = document.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove('form__input_error');
    errorElement.classList.remove('form__input-error_active');
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



function toggleButtonState(inputList, buttonElement){
    if (hasInvalidInput(inputList)){
        // сделай кнопку неактивной
        buttonElement.classList.add('button_inactive');
    } else
    {
        // иначе сделай кнопку активной
        buttonElement.classList.remove('button_inactive');
    }
}

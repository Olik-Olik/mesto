// Вынесем все необходимые элементы формы в константы
const formElement = document.querySelector('.form');
const formInput = formElement.querySelector('.popup__field');

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
};



const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        // showInputError теперь получает параметром форму, в которой
        // находится проверяемое поле, и само это поле
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        // hideInputError теперь получает параметром форму, в которой
        // находится проверяемое поле, и само это поле
        hideInputError(formElement, inputElement);
    }
};
//функция поиска форм  найдёт на странице и обработает все формы с классом form
const enableValidation() => {// Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll('.form'));

    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            // У каждой формы отменим стандартное поведение
            evt.preventDefault();
        });


        //слушатель событий добавится всем полям ввода внутри формы Она добавит обработчики сразу всем полям формы
        const setEventListeners = (formElement, rest) => {
            // Найдём все поля формы и сделаем из них массив
            const inputList = Array.from(formElement.querySelectorAll(`.popup__field`));
            // Найдём в текущей форме кнопку отправки
            const buttonElement = formElement.querySelector('.popup__savet');
            // Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
            toggleButtonState(inputList, buttonElement);

            inputList.forEach((inputElement) => {
                inputElement.addEventListener('input', () => {
                    isValid(formElement, inputElement);
                    // Вызовем toggleButtonState и передадим ей массив полей и кнопку
                    toggleButtonState(inputList, buttonElement);
                });
            });
        };

        // Функция isValid теперь принимает formElement и inputElement,
// а не берёт их из внешней области видимости

        const isValid = (formElement, inputElement) => {
            if (!inputElement.validity.valid) {
                // showInputError теперь получает параметром форму, в которой
                // находится проверяемое поле, и само это поле
                showInputError(formElement, inputElement, inputElement.validationMessage);
            } else {
                // hideInputError теперь получает параметром форму, в которой
                // находится проверяемое поле, и само это поле
                hideInputError(formElement, inputElement);
            }
        };

// Для каждой формы вызовем функцию setEventListeners,
        // передав ей элемент формы
        setEventListeners(formElement);
    });
}
// Вызовем функцию
enableValidation();





// Передадим текст ошибки вторым параметром
const showInputError = (input, errorMessage) => {
    item.classList.add('form__input_type_error');
    // Заменим содержимое span с ошибкой на переданный параметр
    errorForm.textContent = errorMessage//Так текст ошибки попадёт в нужное место.
    errorForm.classList.add('form__input-error_active');//Это сделает ошибку видимой, когда в поле ввода добавят некорректный текст
};
// Функция, которая удаляет класс с ошибкой ecли введены корректные данные
const hideInputError = (input) => {
    input.classList.remove('form__input_error');//активный класс ошибки удаляем
    errorForm.classList.remove('form__input-error_active');
    // Очистим ошибку
    errorForm.textContent = '';
};

//проверка на корректность введенных данных
const checkInputValidity = () => {
    evt.preventDefault(); // Отменим стандартное поведение отдает управление этому коду

    if (!input.validity.valid) {
        // Если поле не проходит валидацию, покажем ошибку
        showInputError(input, input.validationMessage); //в поле введены невалидные данные смотрим что
    } else {
        hideInputError(input);
    }
};

form.addEventListener('submit', function (evt) {
    evt.preventDefault()
});

input.addEventListener('input', function () {
    checkInputValidity();
});




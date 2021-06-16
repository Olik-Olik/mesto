
   // const form = document.querySelector('.popup__form[name="resaveCountry"]');
   // const error = form.querySelector('.mistakes-input');
    const input = form.querySelector('.popup__field');

    function enableValidation()
    { const form = document.querySelector('.popup__form[name="resaveCountry"]');
      form.addEventListener('submit',submitAddHandler);//2-ой попап на add submitHandlerPlaceForm
      form.addEventListener('input',workpopupPlace)}//2-ой попап на input


    // Функция добавляет класс с ошибкой текст ошибки 2-ой параметр
          const showInputError = (input, errorMessage) => {
           input.classList.add('form__input_type_error');
          // Заменим содержимое span с ошибкой на переданный параметр
         error.textContent = errorMessage;
         error.classList.add('form__input-error_active');
    }
    //удаляет класс с ошибкой
        const hideInputError = (input) => {
        input.classList.remove('form__input_type_error')}
        //  делает ошибку видимой когда в поле ввода добавят некорректный текст
        error.classList.remove('popup__field-error_active');//form__input-error_active?
        //  Очистить свойство textContent элемента error.
        error.textContent = '';
   // }

    // Функция, которая проверяет валидность поля submitAddHandler
    function submitHandlerPlaceForm(evt) {
        evt.preventDefault(); // Отменим стандартное поведение отдает управление этому коду
        const form = evt.currentTarget();//текущий эл-т in форму получаем .Валидна ли форма
        const isValid = () => {
        if (!formInput.validity.valid) {
            form.reset();
            // Если поле не проходит валидацию, покажем ошибку
            showInputError(input);
        } else {
            // Если проходит, скроем
            hideInputError(input);
        }}
    };

    form.addEventListener('submit', function (evt) {
        // Отменим стандартное поведение по сабмиту
        evt.preventDefault();
    });

    // Вызовем функцию isValid на каждый ввод символа
    input.addEventListener('input', isValid);


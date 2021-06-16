
   const form = document.querySelector('.popup__form[name="resaveCountry"]');
   //const error = form.querySelector('.form__input-error');
   const input = form.querySelector('.popup__field');
   const error = form.querySelector(`${input.id}-error`);

    function enableValidation(){}

   // Передадим текст ошибки вторым параметром
   const showInputError = (input, errorMessage) => {
       input.classList.add('form__input_type_error');
       // Заменим содержимое span с ошибкой на переданный параметр
       error.textContent = errorMessage;
       error.classList.add('form__input-error_active');
   }
   const hideInputError = (element) => {
       element.classList.remove('form__input_type_error');
       formError.classList.remove('form__input-error_active');
       // Очистим ошибку
       formError.textContent = '';
   };

    form.addEventListener('submit',function (evt)
    {evt.preventDefault()})

   const isValid = () => {
       if (!formInput.validity.valid) {
           // Передадим сообщение об ошибке вторым аргументом
           showInputError(formInput, formInput.validationMessage);
       } else {
           hideInputError(formInput);
       }
   };




   // Функция, которая проверяет валидность поля submitAddHandler
   function submitHandlerPlaceForm(evt) {
       evt.preventDefault(); // Отменим стандартное поведение отдает управление этому коду
       const form = evt.currentTarget();//текущий эл-т in форму получаем .Валидна ли форма
       const isValid = form.checkValidity();
       //const isValid =()=>{
       if (isValid) {
           form.reset();
           // Если поле не проходит валидацию, покажем ошибку
           showInputError(input); //alert('valinda') в вебинаре у Романа
       } else {
           // Если проходит, скроем
           hideInputError(input);//alert('no valinda')в вебинаре у Романа
       }
   }
   function handleFormInput(event){
    const input = event.target;
    const form = event.currentTarget;
    setCustomError(input);
   }



   function setCustomError(input){
       const validity = input.validity;
       if (validity.tooLong||validity.tooShort){

       }
   };


    form.addEventListener('submit', function (evt) {
        // Отменим стандартное поведение по сабмиту
        evt.preventDefault();
    });

    // Вызовем функцию isValid на каждый ввод символа
    input.addEventListener('input', isValid);


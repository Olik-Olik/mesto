function enableValidation() {
    const formProfile = document.querySelector('.popup__form')
    formProfileInput.addEventListener('input', inputHandleProfile);
    formProfileSubmit.addEventListener('submit', submitHandlerProfile);
}

function submitHandleProfile(evt) {
    //evt.preventDefault() не нужен. Обраьлока по умолчанию
    const formProfileInput = evt.currentTarget;
    const isValid = formProfile.checkValidity();
}
function inputHandleProfile(evt,config){
    const input = evt.target;
    const formProfileInput = evt.currentTarget;
    function userError(input){
        const proverka = input.validity;
        if (proverka.tooShort){
            const length =input.value.length;
            const min =input.getAttribute(evt);
            input.userError(`Минимальное количество символов:${min}. Длина текста сейчас${length}символ.`);
        }
        if (proverka.tooLong){
            const max =input.getAttribute(evt);
            input.userError(`Максимальное количество символов:${max}. Длина текста сейчас${length}символ.`);
        }
    }
}
enableValidation();


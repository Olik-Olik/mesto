function submitHandleProfile(evt) {
    //evt.preventDefault() не нужен. Обраьлока по умолчанию
    const formProfileInput = evt.currentTarget;
    const isValid = formProfile.checkValidity();
}

function handleInvalidInputProfile(inputElement){
    const proverka = inputElement.validity;
    const length = inputElement.value.length;
    if (proverka.tooShort){
        const min =inputElement.getAttribute('minlength');
        return(`Минимальное количество символов:${min}. Длина текста сейчас${length}символ.`);
    }
    if (proverka.tooLong){
        const max =inputElement.getAttribute('maxlength');
        return(`Максимальное количество символов:${max}. Длина текста сейчас${length}символ.`);
    }
}

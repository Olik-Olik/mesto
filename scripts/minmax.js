function handleInvalidInput(inputElement, typeErrorMsg){
    const proverka = inputElement.validity;
    const length = inputElement.value.length;
    if (proverka.tooShort){
        const min =inputElement.getAttribute('minlength');
        return(`Минимальное количество символов: ${min}. Длина текста сейчас: ${length} символ.`);
    } else if (proverka.tooLong){
        const max =inputElement.getAttribute('maxlength');
        return(`Максимальное количество символов: ${max}. Длина текста сейчас: ${length} символ.`);
    } else if (proverka.typeMismatch) {
        return typeErrorMsg;
    }

    return('Неправильные данные!');
}

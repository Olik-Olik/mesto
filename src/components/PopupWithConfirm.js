//новый попап для подтверждений

import {PopupWithForm} from "./PopupWithForm";

export class PopupWithConfirm extends PopupWithForm {
    constructor(popupSelector, defaultButtonText) {
        super(popupSelector);
        this._submit = null;
       /* this._submitButtonBack = document.querySelector('#yes');*/
        this._defaultButtonText = defaultButtonText;
        this._submitButton = this._popup.querySelector('.popup__save');
        this._submitButton.textContent = this._defaultButtonText;
    }
    setConfirm(submit) {
        this._submit = submit;
    }

    setEventListeners() {
        super.setEventListeners();
        //переопределяем в конструкторе главное не потерять контент
        this._popupForm.addEventListener(
            'submit',
            (evt) => {
                evt.preventDefault();
                this._submitButton.textContent = 'Удаление...';
                this._submit();
            });
    }
resetButtonText(){
    this._submitButton.textContent = this._defaultButtonText;
}

close() {
    super.close();
    this._popupForm.reset();
    this.resetButtonText('');

}
}
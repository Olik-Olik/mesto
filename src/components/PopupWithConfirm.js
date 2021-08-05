//новый попап для подтверждений

import {PopupWithForm} from "./PopupWithForm";

export class PopupWithConfirm extends PopupWithForm {
    constructor(popupSelector, callbackFormSubmit) {
        super(popupSelector, callbackFormSubmit);
        this._submit = null;
    }

    setConfirm(submit) {
        this._submit = submit;
    }

    setEventListeners() {
        //переопределяем в конструкторе главное не потерять контент
        this._popupForm.addEventListener(
            'submit',
            (evt) => {
                evt.preventDefault();
                /*console.log("III");*/
                this._submit();
                /*this.close();*/
            });
    }
}

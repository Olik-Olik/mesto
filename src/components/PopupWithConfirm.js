//новый попап для подтверждений
import {Popup} from "./Popup";

export class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._submit = null;
        this._popupForm = this._popup.querySelector('.popup__form');
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
}
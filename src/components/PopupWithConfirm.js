/*
//новый попап для подтверждений
import {Popup} from './Popup.js';

export class PopupWithConfirm extends Popup {
    constructor(submitForm, popupSelector) {
        super(popupSelector);
        this._acceptButton = this._popup.querySelector('.popup__save-button_delete-accept');
        this._submit = submitForm;
    }
    open(card, cardId) {
        super.open();
        this._card = card;
        this._id = cardId;
    }
    setEventListeners() {
        super.setEventListeners();
        this._acceptButton.addEventListener('click', () => {
            this._submit(this._id, this._card, this)
        });
    }

}
*/



   /* constructor(submitForm, popupSelector) {
        super(popupSelector);
        this._formConfirm = document.querySelector('.elements__trash');
        this.popupConfirmDelete = null; //очищаем колбэк
        this.setEventListeners();
    }
//сохранит колбэк в классе
    setConfirm(confirm){
        this._popupConfirmDelete = confirm;}

    setEventListeners() {
        this._formConfirm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._popupConfirmDelete();
        });
        super.setEventListeners();
    }
}*/

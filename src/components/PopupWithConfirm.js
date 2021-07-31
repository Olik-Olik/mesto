//новый попап для подтверждений
import {Popup}  from './Popup.js';

    export class PopupWithConfirm extends Popup{
        constructor(popupSelector) {
            super(popupSelector);
            this._formConfirm = document.querySelector('.elements__trash');
            this._popupConfirmDelete = null; //очищаем колбэк
        }
        //хотим удалить?
        _handleCardRemove(evt) {
            this._popupConfirmDelete = evt;
        }
        setEventListeners() {
            super.setEventListeners();
            this._formConfirm.addEventListener('submit',(evt) => {
                evt.preventDefault();
                this._popupConfirmDelete();});
        }
    }
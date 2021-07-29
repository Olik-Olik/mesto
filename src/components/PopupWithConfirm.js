//новый попап для подтверждений
import {Popup}  from './Popup.js';
    export class PopupWithConfirm extends Popup{
        constructor(popupSelector) {
            super(popupSelector);
            this._formConfirm = document.querySelector('.popup__container-delete-confirm')
        }
        handleFormSubmit(evt) {
            super.handleFormSubmit = evt;
        }
        setEventListeners() {
            super.setEventListeners();
            evt.preventDefault();
            this._formConfirm.addEventListener('submit',(evt) => {
                evt.preventDefault();
                this.handleFormSubmit();});
        }
    }
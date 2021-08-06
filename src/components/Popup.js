import {keyCodeEsc,} from "../utils/constants";

/*bind(this) позволяет зафиксировать this*/
export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
        this._submitButton = this._popup.querySelector('.popup__save');
        if (this._submitButton){
            this._defaultButtonText = this._submitButton.textContent;
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose); /*=== только cсылку передаете ==*/
    }

    close() {
        this._popup.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popup.addEventListener('click', (evt) => {
            this._handleCloseButton(evt)
        });
    }

    resetButtonText(){
        if (this._submitButton) {
            this._submitButton.textContent = this._defaultButtonText;
        }
    }

    _handleCloseButton(evt) {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
            this.close();
        }
    }

//esc
    _handleEscClose(evt) {
        if (evt.code === keyCodeEsc || evt.key === 'Escape') {
            this.close();
        }
    }
}

import {keyCodeEsc, popupImage} from "../../utils/constants";

class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupSelector = popupSelector;
    }

    open() {
        document.addEventListener('keydown', this._eventKeyDownListener);
        this._popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', this._eventKeyDownListener);
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose() {
        const popupToClose = document.querySelector('.popup_opened');
        popupToClose.classList.remove('popup_opened');
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._handleCloseButton);
    }

    _handleCloseButton(evt)
    {if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button-image')) {
    this.close();
}
}
    _eventKeyDownListener(evt) {
        if (evt.code === keyCodeEsc || evt.key === 'Escape') {
            this._handleEscClose();
        }
    }
}
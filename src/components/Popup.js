import {
    keyCodeEsc,
} from "../../utils/constants";

export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupSelector = popupSelector;
        this._popupCloseButton = this._popup.querySelector('.popup__close-button-image');
    }

    open() {
        document.addEventListener('keydown', (evt) => {this._eventKeyDownListener(evt)});
        this._popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', (evt) => {this._eventKeyDownListener(evt)});
        this._popup.classList.remove('popup_opened');
    }

    _handleEscClose() {
        this.close();
    }

    setEventListeners() {
        this._popupCloseButton.addEventListener('click', (evt) => {this._handleCloseButton(evt)});
        this._popup.addEventListener('click', (evt) => {this._handleCloseButton(evt)});
    }

    _handleCloseButton(evt) {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button-image')) {
            this.close();
        }
    }

    _eventKeyDownListener(evt) {
        if (evt.code === keyCodeEsc || evt.key === 'Escape') {
            this._handleEscClose();
        }
    }
}

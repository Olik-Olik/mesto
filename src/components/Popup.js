import {keyCodeEsc,} from "../utils/constants";

export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupSelector = popupSelector;
        this._popupCloseButton = this._popup.querySelector('.popup__close-button');
    }

    open() {
        document.addEventListener('keydown', (evt) => {
            this._eventKeyDownListener(evt)
        });
        this._popup.classList.add('popup_opened');
    }

    close() {
        document.removeEventListener('keydown', (evt) => {
            this._eventKeyDownListener(evt)
        });
        this._popup.classList.remove('popup_opened');
    }


    setEventListeners() {
        this._popupCloseButton.addEventListener('click', (evt) => {
            this._handleCloseButton(evt)
        });
        this._popup.addEventListener('click', (evt) => {
            this._handleCloseButton(evt)
        });
    }

    _handleCloseButton(evt) {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
            this.close();
        }
    }

    _eventKeyDownListener(evt) {
        if (evt.code === keyCodeEsc || evt.key === 'Escape') {
            this.close();
        }
    }
}

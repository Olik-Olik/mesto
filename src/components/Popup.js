import {keyCodeEsc,} from "../utils/constants";
/*bind(this) позволяет зафиксировать this*/
export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
       /* this._popupSelector = popupSelector;*/
       /* this._popupCloseButton = this._popup.querySelector('.popup__close-button');*/
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose); /*=== только cсылку передаете ==*/

    }
    /*open() {
        document.addEventListener('keydown', (evt) => {
            this._eventKeyDownListener(evt)
        });
        this._popup.classList.add('popup_opened');
    }*/

    close() {
        this._popup.classList.remove('popup_opened')
        document.removeEventListener('keydown', this._handleEscClose);


        /*document.removeEventListener('keydown', (evt) => {
            this._eventKeyDownListener(evt)
        });
        this._popup.classList.remove('popup_opened');*/
    }


    setEventListeners() {
      /*  this._popupCloseButtonOverlay.addEventListener('click', (evt) => {
            this._handleCloseButtonOverlay(evt)*/
        this._popup.querySelector('.popup__close-button').addEventListener('click', () =>{this.close();})
        this._popup.addEventListener('click', (evt) => {this._handleCloseButtonOverlay(evt)
        });
    }
//overlay
    _handleCloseButtonOverlay(evt) {
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

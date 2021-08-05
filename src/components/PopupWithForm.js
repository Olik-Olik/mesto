/* this.close();
закрывать попапы нужно только после удачного ответа от сервера в блоке then, иначе пользователь не поймет, что произошла ошибка, да и инпуты очистятся и придется опять печатать данные для отправки. А еще не будет видно изменение текста кнопки сабмита, если ее делаете.
Исправьте это везде по коду, пожалуйста*/

import {Popup} from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popupSelector, callbackFormSubmit) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._callbackFormSubmit = callbackFormSubmit;
    }

    //собирает данные всех полей
    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll('.popup__field');//input class html
        this._inputValues = {}//пустой изначально
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;//по всем 4 инпутам и заносим в пустой
        });
        return this._inputValues;
    }

    setEventListeners() {
        //перезапись метода
        super.setEventListeners();

        //переопределяем в конструкторе главное не потерять контент
        this._popupForm.addEventListener(
            'submit',
            (evt) => {
                evt.preventDefault();
                this._callbackFormSubmit(this._getInputValues());
                /*this.close();*/
            });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

}
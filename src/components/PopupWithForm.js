import {Popup} from "./Popup";
import {inputCardLink, inputCardName,} from "../../utils/constants";
import {Card} from "./Card";

export class PopupWithForm extends Popup {
    constructor(popupSelector, callbackFormSubmit) {
        super(popupSelector);
        this._popupSelector = popupSelector;
        this._callbackFormSubmit = callbackFormSubmit;
    }

//собирает данные всех полей
    _getInputValues() {
        this._inputList = this._popup.querySelector();//ввели  выбрали
        this._inputValues = {}//значения взяли
        this._inputList.forEach(input => {
            this._inputValues
        })
        evt.preventDefault();

        return this._inputValues;
    }

    setEventListeners() {
        evt.preventDefault();
        //переопределяем в конструкторе главное не потерять контент
        this._popup.addEventListener('submit', this._callbackFormSubmit());
//перезапись
        super.setEventListener();
    }

    close() {
        this._popup.reset();
        super.close();
    }

    inputForm() {
        const inputElement =
            {
                name: inputCardName.value,
                link: inputCardLink.value
            };
    }
}

const cardForm = new PopupWithForm({
    popupSelector: '.item-template',
    _callbackFormSubmit: callbackForm
});
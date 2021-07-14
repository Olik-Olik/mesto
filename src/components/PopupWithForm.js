import {Popup} from "./Popup";

export default class PopupWithForm extends Popup{
    super(popupSelector);
    this._callbackSubmitForm = collbackSubmitForm;

}

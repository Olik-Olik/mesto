import {imageDescription, zoomedImage} from "../utils/constants";
import {Popup} from "./Popup";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
       /* this._data = data;*/
    }

    open(data) {
        zoomedImage.src = data.link;
        zoomedImage.alt = data.name;
        imageDescription.textContent = data.name;

       /* zoomedImage.src = this._data.link;
        zoomedImage.alt = this._data.name;
        imageDescription.textContent = this._data.name;*/
        super.open();
    }
}



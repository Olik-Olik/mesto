import {Popup} from "./Popup";

export class PopupWithImage extends Popup {
    constructor(popupSelector, zoomedImage, imageDescription) {
        super(popupSelector);
        this._zoomedImage = zoomedImage;
        this._imageDescription = imageDescription;
    }

    open(data) {
        this._zoomedImage.src = data.link;
        this._zoomedImage.alt = data.name;
        this._imageDescription.textContent = data.name;
        super.open();
    }
}



import {zoomedImage} from "../../utils/constants";

class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);


        open()
        {
            zoomedImage.src = evt.currentTarget.src;
            zoomedImage.alt = evt.currentTarget.alt;
            super.open();
        }
    }
}








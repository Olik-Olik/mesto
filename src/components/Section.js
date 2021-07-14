
//import {cardsList, initialCards} from "../utils/constants";
import {Card} from "./Card";
import {rendererItems} from "/utils/utils.js";

//вставляет элемент в разметку class Section

export default class Section {
    constructor(data, containerSelector)
    {
        this._items = data.items;
        this._renderer = data.renderer;
        this._container = document.querySelector(containerSelector);
        this.renderItems();
    }

    addItem(element) {
        this._container.append(element);
    }

    renderItems() {
        this._items.forEach(item => {
            const renderedElement = this._renderer(item);
            this.addItem(renderedElement);
        });
    }
}


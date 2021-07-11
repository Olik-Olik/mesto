//items = messageList — это массив данных  для перебора, которые нужно добавить на страницу

//renderer — это функция, которая отвечает за создание и отрисовку элементов разметки на странице

//Второй параметр конструктора — containerSelector, в который нужно добавлять созданные элементы

//Содержит публичный метод, который отвечает за отрисовку всех элементов renderer
//принимает element
//вставляет методом append

//публичный метод addItem добавляет DOM-элемент в контейнер
// перебирает массив данных

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


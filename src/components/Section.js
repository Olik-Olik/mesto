//вставляет элемент в разметку

export class Section {
    constructor(data, containerSelector) {
/*        this._items = data.items;*/
        this._renderer = data.renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems(items) {
        items.forEach((item) => {
            const renderedElement = this._renderer(item);
            this._container.append(renderedElement);
        });
    }
}


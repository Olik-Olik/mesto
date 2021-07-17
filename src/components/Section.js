//вставляет элемент в разметку class Section

export  class Section {
    constructor(data, containerSelector)
    {
        this._items = data.items;
        this._renderer = data.renderer;
        this._container = document.querySelector(containerSelector);
//        this.renderItems();
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this._items.forEach((item) => {
            const renderedElement = this._renderer(item);
            this._container.append(renderedElement);
        });
    }
}


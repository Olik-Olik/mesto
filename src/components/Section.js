//вставляет элемент в разметку

export  class Section {
    constructor(data, containerSelector) {
        this._items = data.items;
        this._renderer = data.renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
      /*  this._container.prepend(element);*/
    }

    renderItems() {
        while(this._container.firstChild){
            this._container.removeChild(this._container.firstChild);

        }

        this._items.forEach((item) => {
            const renderedElement = this._renderer(item);
            this._container.append(renderedElement);
        });
    }
}


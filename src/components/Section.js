//вставляет элемент в разметку в индексе additem

export class Section {
    constructor(renderer, containerSelector) {
        /*this._items = data.items;*/
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems(data) {
        /*    можно было не очищать ничего, так как при загрузке сайта в контейнере нет элементов*/
        /* while(this._container.firstChild){
             this._container.removeChild(this._container.firstChild);
         }

        /*   this._items.forEach((item) => {
                const renderedElement = this._renderer(item);
                this._container.append(renderedElement);
            });*/
        data.forEach(item => {
            const renderedElement = this._renderer(item);
            this._container.append(renderedElement);
        });
    }

// только создает карточку
    addItem(item) {
        const renderedElement = this._renderer(item);
        this._container.prepend(renderedElement);
        /*  this._container.prepend(element);*/
    }

}



//класс Section, который отвечает за отрисовку элементов на странице. Этот класс:
//    Первым параметром конструктора принимает объект с двумя свойствами:
//    items : это массив данных,
//    которые нужно добавить на страницу при инициализации класса.
// renderedItems — это функция, которая отвечает за создание
//и отрисовку данных на странице.
//    Второй параметр конструктора — селектор контейнера,
//    в который нужно добавлять созданные элементы.
//    Содержит публичный метод, который отвечает за отрисовку
//всех элементов. Отрисовка каждого отдельного элемента должна
//осуществляться функцией renderer.
//    Содержит публичный метод addItem,
//    который принимает DOM-элемент и добавляет его в контейнер.
//    У класса Section нет своей разметки.
//    Он получает разметку через функцию-колбэк и вставляет её в контейнер.
/*

import {Card} from "./Card.js";

    export default class Section {
    constructor({ data }, containerSelector) {
        this._renderedItems = data;
        this._container = document.querySelector(containerSelector);
    }
   // setItem — принимает параметр element
  //  и вставляет его в контейнер методом append. логика отрисовки элемента
    setItem(element) {
        this._container.append(element);
    }
 //   renderItems — перебирает массив данных _initialArray.
  //  Вызывает для каждого элемента массива метод setItem.публичный
        //items : это массив данных

        renderItems() {
        this._renderedItems.forEach((item) => {
            const card = item.isOwner
                ? new Card(item, '.card-template_type_user')
                : new DefaultCard(item, '.card-template_type_default');

            const cardElement = card.generateCard();

            this.setItem(cardElement);
        });
    }
}
*/

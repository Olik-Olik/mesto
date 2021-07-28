import {PopupWithForm} from "./PopupWithForm";

export class Card {
    constructor(item, cardSelector, handleCardClick) {
        this._item = item;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._popupConfirmDelete = new PopupWithForm('.popup_delete-confirm', this._handleConfirmDelete);
    }


//все evt должны работать снаружи класса
    // забираем разметку из HTML и клонируем элемент // вернуть разметку
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.elements__card')
            .cloneNode(true);
        return cardElement;
    }


    createCard() {
        // Запишем разметку в приватное поле _newElement.
        // Так у других элементов появится доступ к ней.
        const newElement = this._getTemplate();
        // Добавим данные
        const newElementImage = newElement.querySelector('.elements__image');
        newElementImage.src = this._item.link;
        newElementImage.alt = this._item.name;
        newElement.querySelector('.elements__word').textContent = this._item.name;
        this._setEventListeners(newElement, newElementImage);
        return newElement;

    }

    _setEventListeners(newElement, newElementImage) {
        this._likeElement = newElement.querySelector('.elements__like');
        this._likeElement.addEventListener('click', this._handleLikeClick);
        newElementImage.addEventListener('click', this._handleCardClick);

        newElement.querySelector('.elements__trash').addEventListener('click',
            (evt) => {this._handleCardRemove(evt)});
        /*  newElement.querySelector('.elements__trash').addEventListener('click', '.popup_delete-confirm');*/
    }/**/



    /* _likeCount(){

     }*/
    _handleLikeClick(evt) {
        evt.target.classList.toggle('elements__like_active');
    }
//проверяет желание удалить
    _handleCardRemove(evt) {
        this._evt = evt;
        this._popupConfirmDelete.open() ;
    }
//удаляет
    _handleConfirmDelete(evt){
         this._evt.currentTarget.closest('#template-id').remove();
    }
}
//для 9 работы
// переделать все карточки
//созидаем карточку




import {PopupWithForm} from "./PopupWithForm";

export class Card {
    constructor(...arr) {
        this._item = arr.item;
        this._cardSelector = arr.cardSelector;
        this._handleCardClick = arr.handleCardClick;
        this._popupConfirmDelete = new arr.PopupWithForm('.popup_delete-confirm', this._handleConfirmDelete);
        this._id = arr._id;
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


//новая карточка
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
        //подсчет лайков
        this._likeCount = newElement.querySelector('.elements__like-count');// его нет пока-есть уже
        this._likeElement = newElement.querySelector('.elements__like-button');
        /*this._likeElement.addEventListener('click', () => {

        } this._handleLikeClick

        this._likeElement.addEventListener('click', () => {


                });*/

//удаление по подтверждению
        newElementImage.addEventListener('click', this._handleCardClick);
        newElement.querySelector('.elements__trash').addEventListener('click', (evt) => {
            evt.preventDefault();//перезагрузка стр
            this._handleCardRemove(evt);//хотим ли удалить
            if (newElement.addEventListener('click', this._handleCardRemove)) {
                this._handleConfirmDelete;
            } // слышим клик-удаляем
            evt.target.classList.close();//иначе-закрываем
        });
    }

    _handleLikeClick(evt) {
        evt.target.classList.toggle('elements__like_active');
    }

//проверяет желание удалить
    _handleCardRemove(evt) {
        this._evt = evt;
        this._popupConfirmDelete.open();
    }

//удаляет
    _handleConfirmDelete(evt) {
        this._evt.currentTarget.closest('#template-id').remove();
    }
}


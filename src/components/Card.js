import {PopupWithForm} from "./PopupWithForm";
import {PopupWithConfirm} from "./PopupWithConfirm";

/*const popupConfirmDelete = new PopupWithConfirm('.popup_delete-confirm');*/
/*this._popupConfirmDelete.setEventListeners();*///закрываем

export class Card {
    constructor(item, cardSelector, handleCardClick, handleCardRemove, selfId, handleLikeClick, popupConfirmDelete) {
        this._item = item;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._removeHandler = handleCardRemove;
        this._handleLikeClick = handleLikeClick;
        this._id = item._id; //чужие
        this._likes = item.likes;
        this._likeCount = item.likes.length;
        this._selfId = selfId;//ЯЯЯЯ
        this._ownerId = item.owner._id;//собственник карточки
        this._popupConfirmDelete = popupConfirmDelete;
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
        const newElement = this._getTemplate();
        // Добавим данные
        const newElementImage = newElement.querySelector('.elements__image');
        newElementImage.src = this._item.link;
        newElementImage.alt = this._item.name;
        newElement.querySelector('.elements__word').textContent = this._item.name;

        if (this._selfId !== this._ownerId){
            const trashElement = newElement.querySelector('.elements__trash');
            trashElement.visible = false;
            trashElement.hidden = true;
        }

        if (this._likes.some((element) => {this._selfId === element._id})){
            const likeElement = newElement.querySelector('.elements__like-button');
            likeElement.classList.add('elements__like_active');
        }

        this._likeCountElement = newElement.querySelector('.elements__like-count');
        this._likeCountElement.textContent = this._likeCount;

        this._setEventListeners(newElement, newElementImage);
        return newElement;

    }

    _setEventListeners(newElement, newElementImage) {
        // лайки

        this._likeElementButton = newElement.querySelector('.elements__like-button');

        this._likeElementButton.addEventListener('click', (evt) => {
            evt.target.classList.toggle('elements__like_active');
            this._handleLikeClick(evt.target, this._id);
        });

        newElementImage.addEventListener('click', this._handleCardClick);
        newElement.querySelector('.elements__trash').addEventListener('click', (evt) => {
            this._handleCardRemove(evt);
        })
    }

    _handleCardRemove(evt) {
        popupConfirmDelete.setConfirm(() => {this._handleDoCardRemove()});
        popupConfirmDelete.open();
    }

    _handleDoCardRemove(){
        this._removeHandler(this._id);
    }

}
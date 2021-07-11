import {
    itemTemplate,
    popupImage,
    zoomedImage,
    imageDescription,
} from '../../utils/constants.js';
import {openPopup} from '../pages';


export default class Card {
    constructor(item, cardSelector) {
        this._item = item;
        this._cardSelector = cardSelector;
    }
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

        newElementImage.addEventListener('click', this._handleImageView);

        newElement.querySelector('.elements__trash').addEventListener('click', this._handleCardRemove);
    }

    _handleImageView(evt) {//обработчик события
        //меняем параметры из попапа, на карточку img /word
        openPopup(popupImage);
        zoomedImage.src = evt.currentTarget.src;
        zoomedImage.alt = evt.currentTarget.alt;
        imageDescription.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
    }


    _handleLikeClick(evt) {
        evt.target.classList.toggle('elements__like_active');
    }

    _handleCardRemove(evt) {
        evt.currentTarget.closest('#template-id').remove();
    }
}

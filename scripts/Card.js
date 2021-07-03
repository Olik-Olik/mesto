import {
    itemTemplate,
    popupImage,
    zoomedImage,
    imageDescription,
    initialCards,
    cardsList, imagePopupCloseButton,

} from '../variables/constants.js';
import {openPopup} from '../scripts/index.js';

//логики публикации элемента
export class Card {
    constructor(item) {
        this._item = item;
    }

    // забираем разметку из HTML и клонируем элемент // вернуть разметку
    _getTemplate() {
        const cardElement =
            //найдёт template-элемент с классом item-template,
            //извлечёт его содержимое,
            itemTemplate
                .content
                //в содержимом найдёт элемент с классом elements__card,
                .querySelector('.elements__card')
                //клонирует его,
                .cloneNode(true);
        //вернёт клонированный элемент DOM-элемент карточки
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


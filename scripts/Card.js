import {initialCards, itemTemplate, popupImage, zoomedImage, imageDescription} from '../variables/constants.js';
import {openPopup} from '../scripts/index.js'
class Card {
    _createCard(item) {
        const newElement = itemTemplate.content.cloneNode(true);
        const newElementImage = newElement.querySelector('.elements__image');
        newElementImage.src = item.link;
        newElementImage.alt = item.name;
        newElement.querySelector('.elements__word').textContent = item.name;

        const likeElement = newElement.querySelector('.elements__like');
        likeElement.addEventListener('click', this._handleLikeClick);

        //новая картинка слушает когда по нему кликнут
        newElementImage.addEventListener('click', this._handleImageView);//обработчик события

        newElement.querySelector('.elements__trash').addEventListener('click', this._handleCardRemove);
        return newElement;
    }

    _handleCardRemove(evt) {
        evt.currentTarget.closest('#template-id').remove();
    }


    _handleLikeClick(evt) {
        evt.currentTarget.classList.toggle('elements__like_active');
    }

    _handleImageView(evt) {//обработчик события
        //меняем параметры из попапа, на карточку img /word
        openPopup(popupImage);
        zoomedImage.src = evt.currentTarget.src;
        zoomedImage.alt = evt.currentTarget.alt;
        imageDescription.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
    }
}

export {itemTemplate};
export {Card};
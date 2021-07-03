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
    constructor(item, itemTemplate) {
        this._item = item;
        //  this._name = item.name;
        // this._link = item.link;
        this._itemTemplate = itemTemplate;
//при клике на карточку
        _openPopup()
        {
            popupImage.crs = this._image;
            popupElement.classList.add(popup_is - opened);
        }

        //при клике на крестик
        _handleClosePopup()
        {
            popupImage.crs = '';
            popupElement.classList.remove(popup_is - opened);
        }

//все обработчики в одном месте карточке  иконке закрытия, которая хранится в переменной imagePopupCloseButton
        _setEventListeners()
        {
            this._newElement().addEventListener('click', () => {
                // откройте попап
                this._openPopup();
            });
            imagePopupCloseButton.addEventListener('click', () => {
                // закройте попап
                this._closePopup();
            });
        }
        // забираем разметку из HTML и клонируем элемент // вернуть разметку
        _getTemplate()
        {
            itemTemplate.content.cloneNode(true);
            const newElement = document
                //найдёт template-элемент с классом item-template,
                //извлечёт его содержимое,
                .querySelector(this._itemTemplate)
                .content
                //в содержимом найдёт элемент с классом elements__card,
                .querySelector('.elements__card')
                //клонирует его,
                .cloneNode(true);
            //вернёт клонированный элемент DOM-элемент карточки
            return newElement;
        }

        _createCard()
        {
            // Запишем разметку в приватное поле _newElement.
            // Так у других элементов появится доступ к ней.
            this._newElement = this._getTemplate;
            // Добавим данные

            this._newElement.src = this._item.link;
            this._newElement.alt = this._item.name;
            this._newElement.querySelector('.elements__word').textContent = this._item.name;
            return this._newElement;
        }

            function _setEventListeners()
        {
            this._likeElement = newElement.querySelector('.elements__like');
            this._likeElement.addEventListener('click',()=>
            {
                this._handleLikeClick();
            });

            newElementImage.addEventListener('click', this._handleImageView);//обработчик события

            newElement.querySelector('.elements__trash').addEventListener('click',()=>
            {
                this._handleCardRemove();
            });
            return newElement;

        _handleCardRemove(evt)
        {
            evt.currentTarget.closest('#template-id').remove();
        }


        handleLikeClick(evt)
        {
            evt.currentTarget.classList.toggle('elements__like_active');
        }

        handleImageView(evt)
        {//обработчик события
            //меняем параметры из попапа, на карточку img /word
            openPopup(popupImage);
            zoomedImage.src = evt.currentTarget.src;
            zoomedImage.alt = evt.currentTarget.alt;
            imageDescription.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
        }
    }
}
}

       /* _handleLikeClick(evt)
        {
            const likeElement = this._newElement.querySelector('.elements__like');
            likeElement.addEventListener('click', this._handleLikeClick);
            evt.target.classList.toggle('elements__like_active');
        }


        _handleCardRemove(evt)
        {
            //новая картинка слушает когда по ней кликнут
            // this.newElementImage.addEventListener('click', this._handleImageView);//обработчик события
            // this._newElement.querySelector('.elements__trash').addEventListener('click', this._handleCardRemove);
            evt.currentTarget.closest('#template-id').remove();
        }

        //все обработчики:  лайка
        _handleLikeClick(evt)
        {
            const likeElement = this._newElement.querySelector('.elements__like');
            likeElement.addEventListener('click', this._handleLikeClick);
            evt.currentTarget.classList.toggle('elements__like_active');
        }

        _handleImageView(evt)
        {//обработчик события
            //меняем параметры из попапа, на карточку img /word
            openPopup(popupImage);
            zoomedImage.src = evt.currentTarget.src;
            zoomedImage.alt = evt.currentTarget.alt;
            imageDescription.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
        }*/



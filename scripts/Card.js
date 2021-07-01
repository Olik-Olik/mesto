import {
    itemTemplate,
    popupImage,
    zoomedImage,
    imageDescription,
    initialCards,
    cardsList,

} from '../variables/constants.js';
import {openPopup} from '../scripts/index.js'

//логики публикации элемента
export class Card {
    constructor(item,itemTemplate) {
        this._item = item;
        this._name = item.name;
        this._link = item.link;
        this._itemTemplate = itemTemplate;
    }

    // забираем разметку из HTML и клонируем элемент
    _getTemplate()
    // вернуть разметку
    {

      const  newElement = document
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

    _createCard() {
        // Запишем разметку в приватное поле _newElement.
        // Так у других элементов появится доступ к ней.
        this._newElement = this._getTemplate();

        // Добавим данные
        /*  this._newElement.querySelector('.elements__image').src = this._item.link;
          this._newElement.querySelector('.elements__word').alt = this._item.name;
          this._newElement.querySelector('.elements__word').textContent = this._item.name;
          return this._newElement;
      }*/
        const newElementImage = this._newElement.querySelector('.elements__image');
        newElementImage.src = this._item.link; //не определяет при сабмите карточки
        newElementImage.alt = this._item.name;
        this._newElement.querySelector('.elements__word').textContent = this._item.name;
// Вернём элемент наружу
        return this._newElement;
    }

    /*
        // Добавляем в DOM
        // document.querySelector('.card-list__items').append(newElement);});

        /* this._newElement = itemTemplate.content.cloneNode(true);
         const newElementImage = this._newElement.querySelector('.elements__image');
         newElementImage.src = item.link;
         newElementImage.alt = item.name;
         this._newElement.querySelector('.elements__word').textContent = item.name;

         const likeElement = this._newElement.querySelector('.elements__like');
         likeElement.addEventListener('click', this._handleLikeClick);

         //новая картинка слушает когда по ней кликнут
         newElementImage.addEventListener('click', this._handleImageView);//обработчик события
         this._newElement.querySelector('.elements__trash').addEventListener('click', this._handleCardRemove);
         return this._newElement;*/
    //  }

//все обработчики:  превью картинки.
    //_setEventListeners(evt) {
    //все обработчики:  удаления

    _handleCardRemove(evt) {
        //новая картинка слушает когда по ней кликнут
        this.newElementImage.addEventListener('click', this._handleImageView);//обработчик события
        this._newElement.querySelector('.elements__trash').addEventListener('click', this._handleCardRemove);
        evt.currentTarget.closest('#template-id').remove();
    }

    //все обработчики:  лайка
    _handleLikeClick(evt) {
        const likeElement = this._newElement.querySelector('.elements__like');
        likeElement.addEventListener('click', this._handleLikeClick);
        evt.currentTarget.classList.toggle('elements__like_active');
    }

    //все обработчики:  превью картинки
    _handleImageView(evt) {//обработчик события
        //меняем параметры из попапа, на карточку img /word
        openPopup(popupImage);
        zoomedImage.src = evt.currentTarget.src;
        zoomedImage.alt = evt.currentTarget.alt;
        imageDescription.textContent = evt.currentTarget.closest("#template-id").querySelector('.elements__word').textContent;
    }
}

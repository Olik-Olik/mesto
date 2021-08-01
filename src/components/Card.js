import {PopupWithForm} from "./PopupWithForm";

export class Card {
    constructor(item, cardSelector, handleCardClick, handleCardRemove, id, likeArr, userId) {
        this._item = item;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._removeHandler = handleCardRemove;
        this._popupConfirmDelete = new PopupWithForm('.popup_delete-confirm', this._handleDoCardRemove);
        this._id = id; //карточки id
        /* this._likeCount = likeArr.length;*/
        this._likeArr = likeArr;//массив лайков
        this._userId = userId;
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
        this._setEventListeners(newElement, newElementImage);
        return newElement;

    }

    _handleDeleteLikeClick(evt) {

    }

    _handleLikeClick(evt) {
        evt.target.classList.toggle('elements__like_active');
    }

    _setEventListeners(newElement, newElementImage) {
        // лайки
        /*        this._likes = likes;*/
        this._likeCount = newElement.querySelector('.elements__like-count');
        this._likeElementButton = newElement.querySelector('.elements__like-button');
        /*
                this._likes.every((item) => {
                    if (item._id === this._userId) {
                        this._likeElementButton.classList.add('elements__like_active');
                    } else {
                        this._likeElementButton.classList.remove('elements__like_active')
                    }
                })
        */
        //считаем
        /*        this._likeCount.textContent = this._likeArr.length;*/
        /*this._handleLikeClick(evt); //active*/

        this._likeElementButton.addEventListener('click', (evt) => {
            if (this._likeElementButton.classList.contains('elements__like_active')) {
                this._handleLikeClick(evt);
            } else {
                this._handleDeleteLikeClick(evt);
            }
        });

        newElementImage.addEventListener('click', this._handleCardClick);
        newElement.querySelector('.elements__trash').addEventListener('click', (evt) => {
            this._handleCardRemove(evt);
        })

    }

    _handleCardRemove(evt)
    {
        console.log("AAA");
        this._popupConfirmDelete.open();
    }

    _handleDoCardRemove(formValues){
        console.log("FFF");
        this._removeHandler(this._id);
    }

}


//удаление
/*
*/
/*        //проверяет желание удалить
        const element PopupWithConfirm = new PopupWithConfirm({elementPopupWithConfirm: (this._id)=>
        {api.handleCardRemove((this._id)).then(() => {
        return newElement.newElementImage()
        elementPopupWithConfirm.close()

newElement.open()
newElement.setEventListeners(this._id)

*/

/*

//функция добавления лайков
handleLikeClicAdd(card) api
{
    api.likeCount(card.cardId, card.likeNotLike)
        .then((data) => {
            card.like(data)
        }) //сервер отвечает массивом с обновленными карточками
        .catch(err => {
            console.log('Что-то криво с лайками')
        })
}



*/

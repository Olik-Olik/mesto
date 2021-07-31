import {PopupWithForm} from "./PopupWithForm";

export class Card {
    constructor(item, cardSelector, handleCardClick, id, likeArr, userId) {
        this._item = item;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._popupConfirmDelete = new PopupWithForm('.popup_delete-confirm', this._hardlyDelete);
        this._id = id; //карточки id
        /*this._likeCount = likeArr.length;*/
        this._likeArr = likeArr;//массив лайков сюда их запишем!!
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
        // лайки
        /* this._likeCount = newElement.querySelector('.elements__like-count');// его нет пока-есть уже*/
        this._likeElement = newElement.querySelector('.elements__like-button')
        this._likeElement.addEventListener('click', (evt) => {
            this._handleLikeClick(evt); //услышали-поставили
        })
    }
}

/*

//функция добавления лайков
        function handleLikeClicAdd(card) {
            api.likeCount(card.cardId, card.likeNotLike)
                .then((data) => {
                    card.like(data)
                }) //сервер отвечает массивом с обновленными карточками
                .catch(err => {
                    console.log(`${err}`, 'Что-то криво')
                })
        }

        //лайк или не лайк         true/false метод класса id юзера который поставил лайк
        likeNotLike(data)
        {
            return Boolean(this._likeArr.find((newElement) => {
                return newElement._id === this._userId
            }));
        }
//добавляем лайки получает обьект с новыми данными актуальная инфо внутри карточки
        like(evt)
        {
            this._likeNotLike = this._likeNotLike();//лайкнута или нет карточка обновляет
            this._likeArr = data.likeCount;
            this._newElement.querySelector('.').textContent = data.likeCount;    // длина массива увеличится
            if (this._likeNotLike()) {
                newElement.querySelector('.elements__like_active').classList.add('.elements__like-black')
            } else {
                newElement.querySelector('.elements__like_active').classList.remove('.elements__like-black');
            }
        }

        //удаление по подтверждению
        newElementImage.addEventListener('click', this._handleCardClick);
        newElement.querySelector('.elements__trash').addEventListener('click', (evt) => {
            this._popupConfirmDelete(this._evt);
        });
    }

    _handleLikeClick(evt) {
        evt.target.classList.toggle('elements__like_active');
    }

//удаляет окончательно
    _hardlyDelete(evt) {
        this._evt.currentTarget.closest('#template-id').remove();
    }

//проверяет желание удалить
    _handleCardRemove(evt) {
        this._evt = evt;
        this._popupConfirmDelete.open();
    }
}

*/

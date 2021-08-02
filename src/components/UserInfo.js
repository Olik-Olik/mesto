export class UserInfo {
    constructor(profileNameSelector, profileJobSelector, avatarSelector, id) {
        this._profileNameElement = document.querySelector(profileNameSelector);
        this._jobProfileElement = document.querySelector(profileJobSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._id = id;
    }

    getUserInfo()// возвращает объект с данными пользователя
    {
        return {
            'name':   this._profileNameElement.textContent,
            'about':  this._jobProfileElement.textContent,
            'avatar': this._avatar.src,
            'id':     this._id
        };
    }
//закладывает
    setUserInfo(userInfo) {
        if ('name' in userInfo) {
            this._profileNameElement.textContent = userInfo.name;
        }
        if ('about' in userInfo) {
            this._jobProfileElement.textContent = userInfo.about;
        }
        if ('avatar' in userInfo) {
            this._avatar.src = userInfo.avatar;
        }
        if ('id' in userInfo) {
            this._id = userInfo.id;
        }

    }
}

/*
const newElement = this._getTemplate();
// Добавим данные
const newElementImage = newElement.querySelector('.elements__image');
newElementImage.src = this._item.link;
newElementImage.alt = this._item.name;
newElement.querySelector('.elements__word').textContent = this._item.name;
this._setEventListeners(newElement, newElementImage);
return newElement;*/

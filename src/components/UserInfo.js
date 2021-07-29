export class UserInfo {
    constructor(profileNameSelector, profileJobSelector) {
        this._profileNameElement = document.querySelector(profileNameSelector);
        this._jobProfileElement = document.querySelector(profileJobSelector);
      /*  this._avatar = document.querySelector(avatarSelector);*/
    }

    getUserInfo()// возвращает объект с данными пользователя
    {
        return {
            'name': this._profileNameElement.textContent,
            'about': this._jobProfileElement.textContent
        };
    }
//закладывает
    setUserInfo(userInfo) {
        this._profileNameElement.textContent = userInfo.name;
        this._jobProfileElement.textContent = userInfo.about;
    }
}

export class UserInfoAvatar {
    constructor(avatarSelector) {
        this._avatar = document.querySelector(avatarSelector);
    }

    setUserInfoAvatar(avatar) {
        this._avatar.src = avatar;
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

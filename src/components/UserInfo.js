
export class UserInfo {
    constructor(profileNameSelector, profileJobSelector) {
        this._profileNameElement = document.querySelector(profileNameSelector);
        this._jobProfileElement = document.querySelector(profileJobSelector);
     }


    getUserInfo()// возвращает объект с данными пользователя
    {
        return{'name': this._profileNameElement.textContent ,
               'about': this._jobProfileElement.textContent };
    }

    setUserInfo(userInfo) {
        this._profileNameElement.textContent = userInfo.name;
        this._jobProfileElement.textContent = userInfo.about;
    }

}
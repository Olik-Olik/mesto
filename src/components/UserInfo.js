
import {
    jobProfileElement,
    nameProfileElement,
} from "../../utils/constants";

class UserInfo {
    constructor(userInfo) {
        this._name = userInfo.name;
        this._about = userInfo.about;
    }
//  setUserInfo();

    getUserInfo()// возвращает объект с данными пользователя
    {
    return{'name':this._name,
           'about':this._about};
    }

    setUserInfo(userInfo) {
        this._name = userInfo.name;
        this._about = userInfo.about;

        nameProfileElement.textContent = this._name;
        jobProfileElement.textContent = this._about;
    }


}
//все про сервер

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
    headers: {
        authorization: 'b12ac09d-a522-46ec-9026-b6918737b3ea',
        'Content-Type': 'application/json',
        /*address: 'https://mesto.nomoreparties.co/v1/cohort-26',
            token: 'b12ac09d-a522-46ec-9026-b6918737b3ea'  }*/
    }
});

export class Api {
    constructor(...arr) {
        this._address = arr._address;
        this._headers = arr._headers;
        this._groupId = arr._groupId;
    }
}

// если сервер ответит ок- то выдать значение  если нет-отклоняется промис
function _handleResponse(response) {
    return response.ok ? response.json() : Promise.reject("Вылезла ошибка,УПС, Повезло-то как!")
}

//получение карточек с сервера внешний метод
const getInitialCards = api.getInitialCards();

getInitialCards()
{
    return fetch(`${this._address}/$cards`,
        {
            headers: this._headers,
            method: 'GET',
            body: ''
        })
        .then((response) =>
            //тупо заменим на хандлеРеспонсе
            /* if (response.ok) return response.json();
             else return Promise.reject('Произошла ошибка', response.status)*/
            this._handleResponse(response))
        .catch(err => {
            console.log('Что-то криво в добычи информации о позьзователе')
        });
}
//надо ли так подробно подумать
/* const data = getInitCards
     .then((response) => {
         const InitialCards = response.map(response =>
             [
                 {
                     'name': response.name,
                     'link': response.link,
                 }
             ])
         return InitialCards;*/

//добавляем карточки охохохо -лажааа
function formAddCard(inputNameFormCard, inputLinkFormCard) {
    return fetch(`${this._address}/$cards`,
        {
            headers: this._headers,
            method: 'post',      //Роst запрос через body
            body: JSON.stringify({
                name: inputNameFormCard,
                link: inputLinkFormCard
            })
        })
        .then((response) => this.handleResponse(response))
        .catch(err => {
            console.log('Что-то криво в добычи информации о позьзователе')
        })
}


function Renderer() {
}

function setUserInfo(inputNameUserInfo, inputAboutUserInfo) {
    return fetch(`${api._address}/${users}/${me}`, {
        headers: api._headers,
        method: 'post', //Роst запрос через body
        body: JSON.stringify({
            name: inputNameUserInfo,
            about: inputAboutUserInfo
        })
    })
        .then((response) => this._handleResponse(response))
        .catch(err => {
            console.log('Что-то криво в добычи информации о позьзователе')
        })
}

/*const editFotoButton = document.querySelector('.profile__foto-edit-button');
editFotoButton.addEventListener('click', () => {
    console.log('Заменили фотку'); }) */

function removeCard() { //идентифицируем карточку как ? подумать
    return fetch(`${api._address}/${cards}`, {
        headers: this._headers,
        method: 'delete',
        body: ''
            .then((response) => this.handleResponse(response))
            .catch(err => {
                console.log('Что-то криво в добычи информации о позьзователе')
            })
    })
}

function like() {
    return fetch(`${api._address}/${cards}`, {
        headers: api._headers,
        method: 'put'
            /* body: ''*/
            .then((response) => this.handleResponse(response))
            .catch(err => {
                console.log('Что-то криво в добычи информации о позьзователе')
            })
    })
}
function likeApsence() {
        return fetch(`${api._address}/${cards}`, {
            headers: api._headers,
            method: 'delete'
         /*   body: ''*/
                .then((response) => this.handleResponse(response))
                .catch(err => {
                    console.log('Что-то криво в добычи информации о позьзователе')
                })
        })
    }


// _id — это идентификатор пользователя, в данном случае вашего.
//юзер данные
    function getUserInfo() {
        return fetch(`${api._address}/${users}/${me}`,
            {
                headers: api._headers,
                method: 'GET'
                /*     body: ''*/
            })
            .then((response) => this._handleResponse(response))
            .catch(err => {
                console.log('Что-то криво в добычи информации о позьзователе')
            })
    }

//тянем данные юзера при загрузке страницы через апи??
// api.getUserInfo().then(data => {userInfo.setInfo(data)})

    function promise(){
    return Promise.all([api.getUserInfo(),
        api.getInitialCards()]);

// новая аватарка куда ее  положить?????
    function handleSubmitAvatar(avatar) {
        return fetch(`${api._address}/${users}/${me}`,
            {
                headers: api._headers,
                method: 'put',
                body: JSON.stringify(avatar), // в аватар кладем строку от аватара
                avatar:avatar;

            })
            .then((response) => this._handleResponse(response))
            .catch(err => {
                console.log('Что-то криво в добычи информации о позьзователе')
            })
    }

    /*api.setAvatarUser(data)*/
    /*editAvatar.setUserInfoAvatar(data);
    handleSubmitAvatar.close();*/
}


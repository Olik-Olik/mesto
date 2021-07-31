//все про сервер переписать все под взаимодействие с сервером

export class Api {
    constructor(arr) {
        this._address = arr.address;
        this._headers = arr.headers;
    }

    getMovies() {
        return fetch(this._address,
            {headers: this._headers})
            .then((response) => console.log(response))
    }

//тянем данные юзера при загрузке страницы через апи
    promiseAll() {
        Promise.all([this.getUserInfo(),
                            this.getMovies()])
            .then((data) => console.log('Пришел ответ с карточками'));
    }

// если сервер ответит ок- то выдать значение  если нет-отклоняется промис
    _handleResponse(response) {
        if (response.ok){
            return response.json()}
           else  return Promise.reject("Вылезла ошибка, УПС, Повезло-то как!");

           /* Promise.resolve(response.json()).then(value => {return value});
            /!*console.log(response.json());*!/
           /!* return new Promise(function(resolve, reject) {
                resolve(response.json());
                reject(); // ignored
            });*!/
        }else {
            Promise.reject(response.status, "Вылезла ошибка, УПС, Повезло-то как!")
        }*/
    }




//получение карточек с сервера внешний метод

    getInitialCards() {
        return fetch(this._address + '/cards',
            {
                headers: this._headers,
                method: 'GET',
            })
            .then(value => Promise.resolve(value.json()))

           /* .then(response => {if (response.ok) return response.json();
                else return Promise.reject(response.status, "Ну не повезло!")*/
            /*
                        .then((response) =>
                        {this._handleResponse(response)})
            */
            .catch(err => {
                console.log('Что-то криво в добыче информации о пользователе')
            });
    }

//надо ли так подробно    подумать
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

//добавляем карточки
    formAddCard(inputNameFormCard, inputLinkFormCard) {
        return fetch(this._address + '/cards',
            {
                headers: this._headers,
                method: 'POST',      //Роst запрос через body
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


    setUserInfo(inputNameUserInfo, inputAboutUserInfo) {
        return fetch(this._address + '/users' + '/me', {
            headers: this._headers,
            method: 'POST', //Роst запрос через body
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

    removeCard() { //идентифицируем карточку как ? подумать
        return fetch(this._address +'/cards',{
            headers: this._headers,
            method: 'DELETE'
                .then((response) => this.handleResponse(response))
                .catch(err => {
                    console.log('Что-то криво в добычи информации о позьзователе')
                })
        })
    }

    like() {
        return fetch(this._address + '/cards' + 'id', {
            headers: this._headers,
            method: 'PUT'
                /* body: ''*/
                .then((response) => this.handleResponse(response))
                .catch(err => {
                    console.log('Что-то криво в добычи информации о позьзователе')
                })
        })
    }

    likeApsence() {
        return fetch(this._address +'/cards' + 'id', {
            headers: this._headers,
            method: 'DELETE'
                /*   body: ''*/
                .then((response) => this.handleResponse(response))
        })
            .catch(err => {
                console.log('Что-то криво в добычи информации о позьзователе')

            })
    }

// _id — это идентификатор пользователя, в данном случае вашего.

//юзер данные
    getUserInfo() {
        return fetch(this._address + '/cards' + 'me',
            {
                headers: this._headers,
                method: 'GET'

            })
            .then((response) => this._handleResponse(response))
            .catch(err => {
                console.log('Что-то криво в добычи информации о позьзователе')
            });
    }

// новая аватарка куда ее  положить????? в card.js
    handleSubmitAvatar(avatar) {
        return fetch(this._address + '/cards' + 'me',
            {
                headers: this._headers,
                method: 'put',
                body: JSON.stringify(avatar), // в аватар кладем строку от аватара
                avatar: avatar
            })
            .then((response) => this._handleResponse(response))
            .catch(err => {
                console.log('Что-то криво в добычи информации о позьзователе')
            })

    }
}


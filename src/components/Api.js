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
        if (response.ok) {
            return response.json()
        } else return Promise.reject("Вылезла ошибка, УПС, Повезло-то как!");

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
    submitNewCard(cardInfo) {
        return fetch(this._address + '/cards',
            {
                headers: {
                    'authorization': this._headers.authorization,
                    'Content-Type': 'application/json'
                },
                method: 'POST',      //Роst запрос через body
                body: JSON.stringify(cardInfo)
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
                console.log('Что-то криво в обновлении информации о пользователе')
            })
    }

    /*const editFotoButton = document.querySelector('.profile__foto-edit-button');
    editFotoButton.addEventListener('click', () => {
        console.log('Заменили фотку'); })
*/

    submitRemoveCard(cardId) { //идентифицируем карточку как ? подумать
        return fetch(this._address + '/cards/' + cardId, {
            headers: this._headers,
            method: 'DELETE'
        })
            .then((response) => this._handleResponse(response))
            .catch(err => {
                console.log('Что-то криво в удалении карточки')
            })
    }

/*
like()
{
    return fetch(this._address + '/cards' + 'id', {
        headers: this._headers,
        method: 'PUT'
            .then((response) => this.handleResponse(response))
            .catch(err => {
                console.log('Что-то криво в добычи информации о позьзователе')
            })
    })
}

likeApsence()
{
    return fetch(this._address + '/cards' + 'id', {
        headers: this._headers,
        method: 'DELETE'
        body: ''
            .then((response) => this.handleResponse(response))
    })
        .catch(err => {
            console.log('Что-то криво в добычи информации о позьзователе')

        })
}
*/

// _id — это идентификатор пользователя, в данном случае вашего.
getUserInfo()
{
    return fetch(this._address + '/users/me',
        {
            headers: this._headers,
            method: 'GET'
        })
        .then(value => Promise.resolve(value.json()))
        .catch(err => {
            console.log('Чорный Властелин не пришел.')
        });
}

submitUserInfo(userInfo)
{
    const userUpdate = {
        'name': userInfo.name,
        'about': userInfo.about
    }
    return fetch(this._address + '/users/me',
        {
            headers: {
                'authorization': this._headers.authorization,
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(userUpdate), // в аватар кладем строку от аватара
        })
        .then((response) => this._handleResponse(response))
        .catch(err => {
        })
}

submitUserAvatar(userInfo)
{
    const avaUpdate = {
        'avatar': userInfo.avatar
    }
    return fetch(this._address + '/users/me/avatar',
        {
            headers: {
                'authorization': this._headers.authorization,
                'Content-Type': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(avaUpdate), // в аватар кладем строку от аватара
        })
        .then((response) => this._handleResponse(response))
        .catch(err => {
        })
}

}


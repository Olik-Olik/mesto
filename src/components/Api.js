/*

class Api {
  constructor(options) {
    constructor({...arr}) {
        this._address = arr._address;
        this._headers = arr._headers;
        this._groupId = arr._groupId;
  }

  getInitialCards() {
    // ...
  }

  // другие методы работы с API
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: 'b12ac09d-a522-46ec-9026-b6918737b3ea',
    'Content-Type': 'application/json'
  }
});

_checkResponce(response){
    return res.ok ? res.json() : Promise.reject();
}
getMovies(){
}

}

const editFotoButton = document.querySelector('.profile__foto-edit-button');
editFotoButton.addEventListener('click', () => {
    console.log('Заменили фотку');
    api.getMovies()
})

//получение карточек с сервера
const getInitialCards = api.getInitialCards();
getInitialCards()
{
    return fetch(`${this._address}/$cards`, {
        method: 'GET',
        headers: this._headers
    }
        .then((response) => {
            console.log(response);
            if (response.ok) return response.json();
            else return Promise.reject('Произошла ошибка', response.status);
        }))}


/!* return InitialCards;

const data = getInitCards
.then((response) =>{
 const InitialCards = response.map(response =>
     [
         {   name: response.name,
             link:response.link}
     ])
 return InitialCards;
})
console.log(data);


Promise.all([api.getUserInfo(),
              api.getInitialCards()])

//все ли ок с ответомы
getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-42/cards', {
        headers: {
            authorization: 'c56e30dc-2883-4270-a59e-b2f7bae969c6'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        });
}

*/

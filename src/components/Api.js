export class Api {
    constructor({...arr}) {
        this._address = arr._address;
        this._headers = arr._headers;
        this._groupId = arr._groupId;
    }

_checkResponce(response){
    return res.ok ? res.json() : Promise.reject();
}
getMovies(){
}

}
const api = new Api(config);

const config = {
    address: 'https://mesto.nomoreparties.co/v1/cohort-26',
    token: 'b12ac09d-a522-46ec-9026-b6918737b3ea'
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


/* return InitialCards;

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
*/















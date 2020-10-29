class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._errorServer = document.querySelector(".error-server");
    }

    // Получение ответа от сервера, иначе ошибка
    _getResponseData(res) {
        if (res.ok) { return res.json(); }
        return Promise.reject(new Error(`Ошибка: ${res.status}`)); // если ошибка при запросе, переходим к catch
    }

    // Получение с сервера начальных карточек 
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
            .then(res => { return this._getResponseData(res); })
    }

    // Сохранение на сервере карточки
    saveCardToServer({ name, link }) {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then((res) => { return this._getResponseData(res); })
    }

    // Удаление на сервере карточки
    deleteCardToServer(card) {
        return fetch(`${this._baseUrl}/cards/${card._id}`, {
            headers: this._headers,
            method: 'DELETE'
        })
    }

    // Лайк++
    likeUpCardToServer(card) {
        return fetch(`${this._baseUrl}/cards/likes/${card._id}`, {
            headers: this._headers,
            method: 'PUT'
        })
            .then((res) => { return this._getResponseData(res); })
    }

    // Лайк--
    likeDownCardToServer(card) {
        return fetch(`${this._baseUrl}/cards/likes/${card._id}`, {
            headers: this._headers,
            method: 'DELETE'
        })
            .then((res) => { return this._getResponseData(res); })
    }

    // Сохранение на сервере Аватара 
    saveAvatarToServer({ link }) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                avatar: link
            })
        })
            .then((res) => { return this._getResponseData(res); })
    }

    // Получение с сервера информация о пользователе 
    getUserInfoFromServer() {
        return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
            .then(res => { return this._getResponseData(res); })
    }

    // Сохранение на сервере информация о пользователе 
    saveUserInfoToServer({ name, about }) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
            .then(res => { return this._getResponseData(res); })
    }
}

export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16',
    headers: {
      authorization: '4b2550a1-9754-487b-87bb-c51dfc845f43',
      'Content-Type': 'application/json'
    },
  });
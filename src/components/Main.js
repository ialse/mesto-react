import React from 'react';
import Card from './Card.js';
import { api } from '../utils/Api.js';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

    const [userName, setUserName] = React.useState("Имя");
    const [userDescription, setUserDescription] = React.useState("Работа");
    const [userAvatar, setUserAvatar] = React.useState(false);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getUserInfoFromServer(), // Получаем данные профиля
            api.getInitialCards() // Получаем массив карточек
            ])
            .then((data) => {
                const [userData, cardsData] = data;
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardsData);
            })
             .catch((err) => { /*setErrorServer(err); */});

    }, []);

    return (
        <main className="content">
            <section className="profile">
                <button
                    className="profile__avatar"
                    onClick={onEditAvatar}
                    style={{ backgroundImage: `url(${userAvatar})` }}>
                </button>
                <div className="profile__profile-info">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" className="profile__button-edit" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((card, i) => (
                    <Card card={card} key={i} onCardClick={onCardClick} />
                ))}
            </section>
        </main>
    );
}

export default Main;
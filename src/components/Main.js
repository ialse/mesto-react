import React from 'react';
import Card from './Card.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards() // Получаем массив карточек
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => { api.setErrorServer(err); });
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <button
                    className="profile__avatar"
                    onClick={onEditAvatar}
                    style={{ backgroundImage: `url(${currentUser.avatar})` }}>
                </button>
                <div className="profile__profile-info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button type="button" className="profile__button-edit" onClick={onEditProfile}></button>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__button-add" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={onCardClick} />
                ))}
            </section>
        </main>
    );
}

export default Main;
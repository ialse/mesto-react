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

    // обработчик клика по лайку
    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(like => like._id === currentUser._id);

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card, isLiked)
            .then((newCard) => {
                // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                // Обновляем стейт
                setCards(newCards);
            })
            .catch((err) => { api.setErrorServer(err); });
    }

    // обработчик клика по лайку
    function handleCardDelete(card) {

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.deleteCardToServer(card)
            .then(() => {
                // Формируем новый массив на основе имеющегося, если ИД совпадает с ИД 
                // удаляемой карточки, то она не должна попасть в новый массив
                const newCards = cards.filter((c) => c._id !== card._id && c);
                // Обновляем стейт
                setCards(newCards);
            })
            .catch((err) => { api.setErrorServer(err); });
    }



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
                    <Card
                        card={card}
                        key={card._id}
                        onCardClick={onCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;
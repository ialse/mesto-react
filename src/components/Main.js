import React from 'react';
import Card from './Card.js';
import { api } from '../utils/Api.js';

function Main(props) {

    const [userName, setUserName] = React.useState("Ал");
    const [userDescription, setUserDescription] = React.useState("Ис");
    const [userAvatar, setUserAvatar] = React.useState(false);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfoFromServer() // Получаем данные профиля
            .then((userData) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
            })
        // .catch((err) => { /*setErrorServer(err); */});

        api.getInitialCards() // Получаем массив карточек
            .then((data) => {
                setCards(data);
            })
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <button
                    className="profile__avatar"
                    onClick={props.onEditAvatar}
                    style={{ backgroundImage: `url(${userAvatar})` }}>
                </button>
                <div className="profile__profile-info">
                    <h1 className="profile__title">{userName}</h1>
                    <button type="button" className="profile__button-edit" onClick={props.onEditProfile}></button>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__button-add" onClick={props.onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((item, i) => (
                    <Card card={item} key={i} />
                ))}
            </section>
        </main>
    );
}

export default Main;
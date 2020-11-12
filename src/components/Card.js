import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick }) {
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = currentUser._id === card.owner._id;
    const cardButtonRemoveClassName = `element__button-remove ${isOwn && 'element__button-remove_active'}`;

    const isLiked = card.likes.some(like => like._id === currentUser._id);
    const cardButtonLikeClassName = `element__button-like ${isLiked && 'element__button-like_active'}`;

    return (
        <article className="element">
            <img
                className="element__image"
                src={card.link}
                onClick={() => onCardClick(card)}
            />
            <h2 className="element__title">{card.name}</h2>
            <div className="element__likes">
                <button type="button" className="element__button-like"></button>
                <span className="element__likes-count">{card.likes.length}</span>
            </div>
            <button type="button" className="element__button-remove"></button>
        </article>
    );
}

export default Card;
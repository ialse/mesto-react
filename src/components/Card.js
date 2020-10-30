import React from 'react';

function Card({card, i, onCardClick}) {
    return (
        <article className="element" key={i}>
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
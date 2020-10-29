import React from 'react';

function Card(props, i) {
    return (
        <article className="element" key={i}>
            <img className="element__image" src={props.card.link} />
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__likes">
                <button type="button" className="element__button-like"></button>
                <span className="element__likes-count">{props.card.likes.length}</span>
            </div>
            <button type="button" className="element__button-remove"></button>
        </article>
    );
}

export default Card;
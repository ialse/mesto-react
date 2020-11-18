import React from 'react';
import PopupWithForm from './PopupWithForm';

const DelCardPopup = React.memo(({ isOpen, onClose, onDelCard, card, isLoading, popupRef }) => {

    function handleSubmit(e) {
        e.preventDefault();
        onDelCard(card);
    }

    return (
        <PopupWithForm
            name="confirm-delete"
            title="Вы уверены?"
            btnName="Да"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            popupRef={popupRef}
        >
        </PopupWithForm>
    );
}
);

export default DelCardPopup;
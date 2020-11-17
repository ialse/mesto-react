import React, { useState } from 'react';
import { InputAddCard } from './PopupHTML';
import PopupWithForm from './PopupWithForm.js';

const AddCardPopup = React.memo(({ isOpen, onClose, onAddPlace, isLoading, onValidation }) => {

    const [place, setPlace] = React.useState("");
    const [link, setLink] = React.useState("");

    const [formValues, setFormValues] = useState({
        name: '',
        link: ''
    });

    const [error, setError] = useState({});
    const [isInvalid, setIsInvalid] = useState(true);

    // Обработчик нажатия кнопки Создать
    function handleAddPlaceSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: place,
            link
        });
    }

    function handleChange(e) {

        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));

        // если аттрибут name имеет значение name, то устанавливаем setPlace
        // иначе setLink
        e.target.name === "name" ?
            setPlace(e.target.value) :
            setLink(e.target.value);
    }

    React.useEffect(() => {
        // в res должен вернуться результат валидации и текст ошибки
        const { allErrors, isInvalid } = onValidation(formValues);
        setError(() => { return allErrors });
        setIsInvalid(isInvalid);

    }, [formValues, onValidation]);

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            btnName="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleAddPlaceSubmit}
            isLoading={isLoading}
            isInvalid={isInvalid}
        >
            <InputAddCard
                onChange={handleChange}
                error={error}
            />
        </PopupWithForm>
    );
});

export default AddCardPopup;
import React, { useState, useEffect, useRef } from 'react';
import { InputEditAvatar } from './PopupHTML';
import PopupWithForm from './PopupWithForm.js';

const EditAvatarPopup = React.memo(({ isOpen, onClose, onUpdateAvatar, isLoading, onValidation }) => {

    const avatarRef = useRef();

    const [formValues, setFormValues] = useState({
        link: ''
    });

    const [error, setError] = useState({});
    const [isInvalid, setIsInvalid] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            link: avatarRef.current.value /* Значение инпута, полученное с помощью рефа */
        });
    }

    function handleChange(e) {

        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        //обновляем значение поля после каждого ввода символа
        avatarRef.current.value = e.target.value;
    }

    // Валидируем при каждом измении данных в полях, formValues
    useEffect(() => {
        // в res должен вернуться результат валидации и текст ошибки
        const { allErrors, isInvalid } = onValidation(formValues);
        setError(() => { return allErrors });
        setIsInvalid(isInvalid);

    }, [formValues, onValidation]);

    return (
        <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            btnName="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isInvalid={isInvalid}
        >
            <InputEditAvatar
                avatarRef={avatarRef}
                onChange={handleChange}
                error={error}
            />
        </PopupWithForm>
    );
}
);

export default EditAvatarPopup;
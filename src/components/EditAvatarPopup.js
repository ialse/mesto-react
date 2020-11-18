import React, { useState, useEffect, useRef, useContext } from 'react';
import { InputEditAvatar } from './PopupHTML';
import PopupWithForm from './PopupWithForm';
import { StatePopup } from '../contexts/StatePopup';

const EditAvatarPopup = React.memo(({ isOpen, onClose, onUpdateAvatar, isLoading, onValidation }) => {

    // Использую контекст, чтобы понимать когда попап закрывают и очищать поля
    const { isEditAvatarPopupOpen } = useContext(StatePopup);
    const avatarRef = useRef();

    // Стейты для валидации полей
    const [formValues, setFormValues] = useState({
        link: ''
    });

    const [error, setError] = useState({});
    const [isInvalid, setIsInvalid] = useState(true);

    // Обработчик ввода данных в поля
    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
            link: avatarRef.current.value /* Значение инпута, полученное с помощью рефа */
        });

        // очищаю поле после нажатия Сохранить
        avatarRef.current.value = '';
        setFormValues({
            link: ''
        });
    }

    function handleChange(e) {

        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));
        //обновляем значение поля после каждого ввода символа
        avatarRef.current.value = e.target.value;
    }

    // Если попап закрыли, то очищаем поля, если открыли, устанавливаем
    useEffect(() => {
        if (isEditAvatarPopupOpen) {
            avatarRef.current.value = '';
        }
    }, [isEditAvatarPopupOpen]);

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
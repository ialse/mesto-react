import React, { useState, useContext, useEffect } from 'react';
import { InputEditProfile } from './PopupHTML';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { StatePopup } from '../contexts/StatePopup';

const EditProfilePopup = React.memo(({ isOpen, onClose, onUpdateUser, isLoading, onValidation, popupRef }) => {

    // Использую контекст, чтобы понимать когда попап закрывают и очищать поля
    const { isEditProfilePopupOpen } = useContext(StatePopup);

    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    // Стейты для валидации полей
    const [formValues, setFormValues] = useState({
        name: '',
        about: ''
    });

    const [error, setError] = useState({});
    const [isInvalid, setIsInvalid] = useState(true);

    // Обработчик нажатия кнопки Сохранить
    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description
        });
    }

    // Обработчик ввода данных в поля
    function handleChange(e) {

        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));

        // если аттрибут name имеет значение name, то устанавливаем setName
        // иначе setDescription
        e.target.name === "name" ?
            setName(e.target.value) :
            setDescription(e.target.value);
    }

    // Если попап закрыли, то очищаем поля, если открыли, устанавливаем
    useEffect(() => {
        if (!isEditProfilePopupOpen) {
            setName('');
            setDescription('');
        } else {
            setName(currentUser.name);
            setDescription(currentUser.about);
            setFormValues({
                name: currentUser.name,
                about: currentUser.about
            });
        }

    }, [isEditProfilePopupOpen, currentUser]);

    // Вызов валидации полей при каждом изменении formValues
    useEffect(() => {
        const { allErrors, isInvalid } = onValidation(formValues);
        setError(() => { return allErrors });
        setIsInvalid(isInvalid); // установка состояния кнопки

    }, [formValues, onValidation]);

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            btnName="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            isInvalid={isInvalid}
            popupRef={popupRef}
        >
            <InputEditProfile
                inputName={name}
                inputAbout={description}
                onChange={handleChange}
                error={error}
            />
        </PopupWithForm>
    );
});

export default EditProfilePopup;
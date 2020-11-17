import React, { useState } from 'react';
import { InputEditProfile } from './PopupHTML';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const EditProfilePopup = React.memo(({ isOpen, onClose, onUpdateUser, isLoading, onValidation }) => {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    const [formValues, setFormValues] = useState({
        name: '',
        about: ''
    });

    const [error, setError] = useState({});
    const [isInvalid, setIsInvalid] = useState(true);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
        /*setFormValues(prevState => ({
            name: currentUser.name,
            about: currentUser.about

        }))*/

    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description
        });
    }

    function handleChange(e) {

        const { name, value } = e.target;
        setFormValues((prevState) => ({ ...prevState, [name]: value }));

        // если аттрибут name имеет значение name, то устанавливаем setName
        // иначе setDescription
        e.target.name === "name" ?
            setName(e.target.value) :
            setDescription(e.target.value);
    }

    React.useEffect(() => {
        // в res должен вернуться результат валидации и текст ошибки
        const { allErrors, isInvalid } = onValidation(formValues);
        setError(() => { return allErrors });
        setIsInvalid(isInvalid);

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
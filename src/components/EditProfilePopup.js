import React from 'react';
import { PopupEditAvatar, InputEditProfile, PopupAddCard } from './PopupHTML';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState("Имя");
    const [description, setDescription] = React.useState("Работа");

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description
        });
    }

    function handleChange(e) {
        //если аттрибут name имеет значение name, то устанавливаем setName
        e.target.name === "name" ?
            setName(e.target.value) :
            setDescription(e.target.value);
    }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            btnName="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <InputEditProfile
                inputName={name}
                inputAbout={description}
                onChange={handleChange}
            />
        </PopupWithForm>
    );
}

export default EditProfilePopup;
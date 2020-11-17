import React from 'react';

export const InputEditAvatar = React.memo(({ onChange, avatarRef }) => {
    return (
        <label className="popup__field">
            <input type="url" className="popup__input popup__input_link" id="link-input" name="link"
                placeholder="Ссылка на картинку для аватара" required ref={avatarRef} onChange={onChange} />
            <span className="popup__error" id="link-input-error"></span>
        </label>
    );
});

export const InputEditProfile = React.memo(({ inputName, inputAbout, onChange, error }) => {
    return (
        <>
            <label className="popup__field">
                <input type="text" className="popup__input popup__input_name" id="name-input" placeholder="Имя" name="name"
                    minLength="2" maxLength="40" required value={inputName || ""} onChange={onChange} />
                <span className="popup__error popup__error_visible" id="name-input-error">
                    {(Object.keys(error).length && error.name.required && 'Поле должно быть заполнено') ||
                        (Object.keys(error).length && error.name.minLength && 'Поле должно содержать больше 1 символа')}
                </span>
            </label>
            <label className="popup__field">
                <input type="text" className="popup__input popup__input_work" id="work-input" placeholder="Работа" name="about"
                    minLength="2" maxLength="200" required value={inputAbout || ""} onChange={onChange} />
                <span className='popup__error popup__error_visible' id="work-input-error">
                    {(Object.keys(error).length && error.about.required && 'Поле должно быть заполнено') ||
                        (Object.keys(error).length && error.about.minLength && 'Поле должно содержать больше 1 символа')}
                </span>
            </label>
        </>
    );
});

export const InputAddCard = React.memo(({ onChange, error }) => {
    return (
        <>
            <label className="popup__field">
                <input type="text" className="popup__input popup__input_place" id="title-input" name="name" placeholder="Название"
                    minLength="1" maxLength="30" required onChange={onChange} />
                <span className="popup__error popup__error_visible" id="title-input-error">
                    {(Object.keys(error).length && error.name.required && 'Поле должно быть заполнено') ||
                        (Object.keys(error).length && error.name.minLength && 'Поле должно содержать больше 1 символа')}
                </span>
            </label>
            <label className="popup__field">
                <input type="url" className="popup__input popup__input_link" id="link-input" name="link"
                    placeholder="Ссылка на картинку" required onChange={onChange} />
                <span className="popup__error popup__error_visible" id="link-input-error">
                    {(Object.keys(error).length && error.link.required && 'Поле должно быть заполнено') ||
                        (Object.keys(error).length && error.link.http && 'Это должна быть ссылка')}
                </span>
            </label>
        </>
    );
});
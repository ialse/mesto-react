export function PopupEditAvatar() {
    return (
        <label className="popup__field">
            <input type="url" className="popup__input popup__input_link" id="link-input" name="link"
                placeholder="Ссылка на картинку для аватара" required />
            <span className="popup__error" id="link-input-error"></span>
        </label>
    );
}

export function InputEditProfile({ inputName, inputAbout, onChange }) {
    return (
        <>
            <label className="popup__field">
                <input type="text" className="popup__input popup__input_name" id="name-input" placeholder="Имя" name="name"
                    minLength="2" maxLength="40" required value={inputName} onChange={onChange} />
                <span className="popup__error" id="name-input-error"></span>
            </label>
            <label className="popup__field">
                <input type="text" className="popup__input popup__input_work" id="work-input" placeholder="Работа" name="about"
                    minLength="2" maxLength="200" required value={inputAbout} onChange={onChange} />
                <span className="popup__error" id="work-input-error"></span>
            </label>
        </>
    );
}

export function PopupAddCard() {
    return (
        <>
            <label className="popup__field">
                <input type="text" className="popup__input popup__input_place" id="title-input" name="name" placeholder="Название"
                    minLength="1" maxLength="30" required />
                <span className="popup__error" id="title-input-error"></span>
            </label>
            <label className="popup__field">
                <input type="url" className="popup__input popup__input_link" id="link-input" name="link"
                    placeholder="Ссылка на картинку" required />
                <span className="popup__error" id="link-input-error"></span>
            </label>
        </>
    );
}
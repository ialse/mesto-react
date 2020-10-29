import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setisAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setisAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />

      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <label className="popup__field">
          <input type="url" className="popup__input popup__input_link" id="link-input" name="link"
            placeholder="Ссылка на картинку для аватара" required />
          <span className="popup__error" id="link-input-error"></span>
          </label>
        }/>
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__field">
            <input type="text" className="popup__input popup__input_name" id="name-input" placeholder="Имя" name="name"
              minlength="2" maxlength="40" required />
            <span className="popup__error" id="name-input-error"></span>
            </label>
            <label className="popup__field">
            <input type="text" className="popup__input popup__input_work" id="work-input" placeholder="Работа" name="about"
              minlength="2" maxlength="200" required />
            <span className="popup__error" id="work-input-error"></span>
            </label>
          </>
        }/>
      <PopupWithForm
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <label className="popup__field">
            <input type="text" className="popup__input popup__input_place" id="title-input" name="name" placeholder="Название"
              minlength="1" maxlength="30" required />
            <span className="popup__error" id="title-input-error"></span>
            </label>
            <label className="popup__field">
            <input type="url" className="popup__input popup__input_link" id="link-input" name="link"
              placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="link-input-error"></span>
            </label>
          </>
        }/>

      <div className="block-action"></div>
      <div className="error-server"></div>

      <div className="popup popup_confirm-delete">
        <form className="popup__container popup__container_popup_confirm-delete" name="popup__confirm-delete" novalidate>
          <h2 className="popup__title popup__title_confirm">Вы уверены?</h2>
          <button type="submit" className="popup__btn-submit">Да</button>
          <button type="button" className="popup__btn-close"></button>
        </form>
      </div>

      <template id="card-template">
        <article className="element">
          <img className="element__image" />
          <h2 className="element__title"></h2>
          <div className="element__likes">
            <button type="button" className="element__button-like"></button>
            <span className="element__likes-count">3</span>
          </div>
          <button type="button" className="element__button-remove"></button>
        </article>
      </template>
    </div>


  );
}

export default App;

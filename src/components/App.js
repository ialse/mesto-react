import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
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
              minLength="2" maxLength="40" required />
            <span className="popup__error" id="name-input-error"></span>
            </label>
            <label className="popup__field">
            <input type="text" className="popup__input popup__input_work" id="work-input" placeholder="Работа" name="about"
              minLength="2" maxLength="200" required />
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
              minLength="1" maxLength="30" required />
            <span className="popup__error" id="title-input-error"></span>
            </label>
            <label className="popup__field">
            <input type="url" className="popup__input popup__input_link" id="link-input" name="link"
              placeholder="Ссылка на картинку" required />
            <span className="popup__error" id="link-input-error"></span>
            </label>
          </>
        }/>

      <PopupWithImage
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;

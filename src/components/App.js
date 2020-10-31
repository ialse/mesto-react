import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import { PopupEditAvatar, PopupEditProfile, PopupAddCard } from './PopupHTML.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDelCardPopupOpen, setIsDelCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  {/*Обработчики открытия попапов*/ }
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

  {/*Обработчик закрытия попапов*/ }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">
      <Header />

      {/*Создаем компонент Main и передаем обработчики через пропсы*/}
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} // Обработчик клика по карточке
      />

      <Footer />

      {/*Создаем попап для аватара и передаем пропсы и обработчики*/}
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        btnName="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <PopupEditAvatar />
      </PopupWithForm>

      {/*Создаем попап для профиля и передаем пропсы и обработчики*/}
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        btnName="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <PopupEditProfile />
      </PopupWithForm>

      {/*Создаем попап для новой карточки и передаем пропсы и обработчики*/}
      <PopupWithForm
        name="add-card"
        title="Новое место"
        btnName="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <PopupAddCard />
      </PopupWithForm>

      {/*Создаем попап для подтверждения удаления карточки и передаем пропсы и обработчики*/}
      <PopupWithForm
        name="confirm-delete"
        title="Вы уверены?"
        btnName="Да"
        isOpen={isDelCardPopupOpen}
        onClose={closeAllPopups}
      >
      </PopupWithForm>

      {/*Создаем попап с картинкой и передаем пропсы и обработчики*/}
      <PopupWithImage
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;

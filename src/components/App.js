import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddCardPopup from './AddCardPopup.js';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDelCardPopupOpen, setIsDelCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  const [cards, setCards] = React.useState([]);

  //Используем хук для получения инфы о пользователе и карточек
  React.useEffect(() => {
    Promise.all([
      api.getUserInfoFromServer(), //получаем данные о пользователе
      api.getInitialCards() // Получаем массив карточек
    ])
      .then((data) => {
        const [userData, cardsData] = data;
        setCurrentUser(userData); //меняем состояние
        setCards(cardsData); //меняем состояние
      })
      .catch((err) => { api.setErrorServer(err); });
  }, []);

  // Обработчик клика по лайку
  function handleCardLike(card) {
    // Проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card, isLiked)
      .then((newCard) => {
        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);  // Обновляем стейт
      })
      .catch((err) => { api.setErrorServer(err); });
  }

  // Обработчик кнопки удаления карточки
  function handleCardDelete(card) {
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.deleteCardToServer(card)
      .then(() => {
        // Формируем новый массив на основе имеющегося, если ИД совпадает с ИД 
        // удаляемой карточки, то она не должна попасть в новый массив
        const newCards = cards.filter((c) => c._id !== card._id && c);
        setCards(newCards);  // Обновляем стейт
      })
      .catch((err) => { api.setErrorServer(err); });
  }

  // Обработчики открытия попапов
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

  // Обработчик кнопки Сохранить в попапе редактирования профиля
  function handleUpdateUser(inputValues) {
    api.saveUserInfoToServer(inputValues)   // Сохраняем на сервере
      .then((userData) => { setCurrentUser(userData) }) // Устанавливаем данные о пользователе на страницу
      .catch((err) => { api.setErrorServer(err); })
      .finally(() => {
        //popupEditProfile.loadEnd();     //Снимаем блок и меняем название кнопки на начальное
        closeAllPopups();
        //editProfileValidation.resetForm(); // Очищаем поля при Создании
      });
  }

  // Обработчик кнопки Сохранить в попапе редактирования аватара
  function handleUpdateAvatar(avatar) {
    api.saveAvatarToServer(avatar)   // Сохраняем на сервере
      .then((userData) => { setCurrentUser(userData) }) // Устанавливаем данные о пользователе на страницу
      .catch((err) => { api.setErrorServer(err); })
      .finally(() => {
        //popupEditProfile.loadEnd();     //Снимаем блок и меняем название кнопки на начальное
        closeAllPopups();
        //editProfileValidation.resetForm(); // Очищаем поля при Создании
      });
  }

  // Обработчик кнопки Создать в попапе добавления карточки
  function handleAddPlace(newCard) {
    api.saveCardToServer(newCard)   // Сохраняем на сервере
      .then((newCard) => { setCards([newCard, ...cards]) }) // Обновляем массив с карточками, добавляем загруженную
      .catch((err) => { api.setErrorServer(err); })
      .finally(() => {
        //popupEditProfile.loadEnd();     //Снимаем блок и меняем название кнопки на начальное
        closeAllPopups();
        //editProfileValidation.resetForm(); // Очищаем поля при Создании
      });
  }

  // Обработчик закрытия попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />

        {/*Создаем компонент Main и передаем обработчики через пропсы*/}
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick} // Обработчик клика по карточке
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        {/*Создаем попап для аватара и передаем пропсы и обработчики*/}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        {/*Создаем попап для профиля и передаем пропсы и обработчики*/}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        {/*Создаем попап для новой карточки и передаем пропсы и обработчики*/}
        <AddCardPopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />

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
    </CurrentUserContext.Provider>
  );
}

export default App;

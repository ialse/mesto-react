import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithImage from './PopupWithImage';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddCardPopup from './AddCardPopup';
import DelCardPopup from './DelCardPopup';
import BlockAction from './BlockAction';

import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  // Устанавливаем стэйты
  const [currentUser, setCurrentUser] = React.useState({}); // состояние пользователя

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false); //состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isDelCardPopupOpen, setIsDelCardPopupOpen] = React.useState(false);

  const [cardToDel, setCardToDel] = React.useState({}); // состояние карточки, которую удаляют
  const [selectedCard, setSelectedCard] = React.useState({}); //состояние карточки, по которой кликнули
  const [isLoading, setIsLoading] = React.useState(false); // состояние спиннера
  const [isLoadingOpen, setIsLoadingOpen] = React.useState(false); /* состояние спиннера
    при открытии сайта, иначе спиннер дублируется на блоке и на кнопке*/

  const [cards, setCards] = React.useState([]); // состояние массива карточек

  // Используем хук для получения инфы о пользователе и карточек
  React.useEffect(() => {
    setIsLoadingOpen(true);
    Promise.all([
      api.getUserInfoFromServer(), //получаем данные о пользователе
      api.getInitialCards() // Получаем массив карточек
    ])
      .then((data) => {
        const [userData, cardsData] = data;
        setCurrentUser(userData); //меняем состояния 
        setCards(cardsData);
        setIsLoadingOpen(false);
      })
      .catch((err) => { api.setErrorServer(err); })
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
  function handleCardDelete(cardToDel) {
    setIsLoading(true); //ставим блок и спиннер
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.deleteCardToServer(cardToDel)
      .then(() => {
        // Формируем новый массив на основе имеющегося, если ИД совпадает с ИД 
        // удаляемой карточки, то она не должна попасть в новый массив
        const newCards = cards.filter((c) => c._id !== cardToDel._id && c);
        setCards(newCards);  // Обновляем стейт
      })
      .catch((err) => { api.setErrorServer(err); })
      .finally(() => {
        setIsLoading(false);  //убираем блок и спиннер
        closeAllPopups();
        //editProfileValidation.resetForm(); // Очищаем поля при Создании
      });
  }

  // Обработчик кнопки Сохранить в попапе редактирования профиля
  function handleUpdateUser(inputValues) {
    setIsLoading(true);
    api.saveUserInfoToServer(inputValues)   // Сохраняем на сервере
      .then((userData) => { setCurrentUser(userData) }) // устанавливаем новый стэйт: новые данные пользователя
      .catch((err) => { api.setErrorServer(err); })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
        //editProfileValidation.resetForm(); // Очищаем поля при Создании
      });
  }

  // Обработчик кнопки Сохранить в попапе редактирования аватара
  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    api.saveAvatarToServer(avatar)   // Сохраняем на сервере
      .then((userData) => { setCurrentUser(userData) }) // устанавливаем новый стэйт: новый аватар
      .catch((err) => { api.setErrorServer(err); })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
        //editProfileValidation.resetForm(); // Очищаем поля при Создании
      });
  }

  // Обработчик кнопки Создать в попапе добавления карточки
  function handleAddPlace(newCard) {
    setIsLoading(true);
    api.saveCardToServer(newCard)   // Сохраняем на сервере
      .then((newCard) => { setCards([newCard, ...cards]) }) // Обновляем массив с карточками, добавляем загруженную
      .catch((err) => { api.setErrorServer(err); })
      .finally(() => {
        setIsLoading(false);
        closeAllPopups();
        //editProfileValidation.resetForm(); // Очищаем поля при Создании
      });
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

  function handleDelCardPopup(card) {
    setIsDelCardPopupOpen(true);
    setCardToDel(card);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  // Обработчик закрытия попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDelCardPopupOpen(false);
    setSelectedCard({});
  }

  return (
    // Делаем доступным контекст currentUser
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
          onCardDelete={handleDelCardPopup}
          isLoading={isLoading}
        />

        <Footer />

        {/*Создаем попап для аватара и передаем пропсы и обработчики*/}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />

        {/*Создаем попап для профиля и передаем пропсы и обработчики*/}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        />

        {/*Создаем попап для новой карточки и передаем пропсы и обработчики*/}
        <AddCardPopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
          isLoading={isLoading}
        />

        {/*Создаем попап для подтверждения удаления карточки и передаем пропсы и обработчики*/}
        <DelCardPopup
          isOpen={isDelCardPopupOpen}
          onClose={closeAllPopups}
          onDelCard={handleCardDelete}
          card={cardToDel}
          isLoading={isLoading}
        >
        </DelCardPopup>

        {/*Создаем попап с картинкой и передаем пропсы и обработчики*/}
        <PopupWithImage
          card={selectedCard}
          onClose={closeAllPopups}
        />

        {/*Если isLoading=true, то ставим блок, чтобы пользователь не мог что то поменять*/}
        {(isLoadingOpen || isLoading) && <BlockAction isLoadingOpen={isLoadingOpen} />}

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

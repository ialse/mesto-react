import React, { useEffect, useRef, useState } from 'react';
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
import { validators } from '../utils/validators';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { StatePopup } from '../contexts/StatePopup';

function App() {
  // Устанавливаем стэйты
  const [currentUser, setCurrentUser] = useState({}); // состояние пользователя

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false); //состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDelCardPopupOpen, setIsDelCardPopupOpen] = useState(false);

  const [cardToDel, setCardToDel] = useState({}); // состояние карточки, которую удаляют
  const [selectedCard, setSelectedCard] = useState({}); //состояние карточки, по которой кликнули
  const [isLoading, setIsLoading] = useState(false); // состояние спиннера
  const [isLoadingOpen, setIsLoadingOpen] = useState(false); /* состояние спиннера
    при открытии сайта, иначе спиннер дублируется на блоке и на кнопке*/

  const [cards, setCards] = useState([]); // состояние массива карточек

  // рефы на попапы для клика по оверлею
  const editProfileRef = useRef();
  const editAvatarRef = useRef();
  const addCardRef = useRef();
  const delCardRef = useRef();
  const imageRef = useRef();

  // Общая валидация для полей
  function handleValidation(inputValues) {

    // Преобразовывем объект с полями в объект с булевыми значениями и возвращаем этот объект
    const formKeys = Object.keys(inputValues);
    const allErrors = formKeys.map((key) => {
      const valueByKey = inputValues[key];

      if (!validators[key]) return {};

      const errors = Object.entries(validators[key]).map(([errorKey, validatorFn]) => {

        return { [errorKey]: validatorFn(valueByKey) };
      }).reduce((acc, item) => ({ ...acc, ...item }), {});

      return { [key]: errors };
    }).reduce((acc, item) => ({ ...acc, ...item }), {});

    // Если хоть одна проверка возвращает true, то блокируем кнопку
    let isInvalid = false;
    for (const keyInput in allErrors) {
      for (const keyCheck in allErrors[keyInput]) {
        if (allErrors[keyInput][keyCheck]) {
          isInvalid = true;
          break;
        }
      }
    }

    return { allErrors, isInvalid };
  }

  // Используем хук для получения инфы о пользователе и карточек
  useEffect(() => {
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

  // Обработчик нажатия Esc
  function handleEsc(e) {
    if (e.key === "Escape") {
      closeAllPopups();
    }
  }

  // Обработчик клика по оверлею при открытом попапе
  function handleClickOverlay(e) {
    if (
      e.target === editProfileRef.current ||
      e.target === editAvatarRef.current ||
      e.target === addCardRef.current ||
      e.target === delCardRef.current ||
      e.target === imageRef.current) {
      closeAllPopups();
    }
  }

  // Обработчик закрытия попапов
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDelCardPopupOpen(false);
    setSelectedCard({});
  }

  // Объект с состояниями попапов
  const popupStateContext = {
    isEditProfilePopupOpen,
    isEditAvatarPopupOpen,
    isAddPlacePopupOpen
  }

  return (
    // Делаем доступным контекст currentUser и состояние попапов
    <StatePopup.Provider value={popupStateContext}>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page" onKeyUp={handleEsc} onClick={handleClickOverlay} >
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
            onValidation={handleValidation}
            popupRef={editAvatarRef}
          />

          {/*Создаем попап для профиля и передаем пропсы и обработчики*/}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
            onValidation={handleValidation}
            popupRef={editProfileRef}
          />

          {/*Создаем попап для новой карточки и передаем пропсы и обработчики*/}
          <AddCardPopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
            isLoading={isLoading}
            onValidation={handleValidation}
            popupRef={addCardRef}
          />

          {/*Создаем попап для подтверждения удаления карточки и передаем пропсы и обработчики*/}
          <DelCardPopup
            isOpen={isDelCardPopupOpen}
            onClose={closeAllPopups}
            onDelCard={handleCardDelete}
            card={cardToDel}
            isLoading={isLoading}
            popupRef={delCardRef}
          >
          </DelCardPopup>

          {/*Создаем попап с картинкой и передаем пропсы и обработчики*/}
          <PopupWithImage
            card={selectedCard}
            onClose={closeAllPopups}
            popupRef={imageRef}
          />

          {/*Если isLoading=true, то ставим блок, чтобы пользователь не мог что то поменять*/}
          {(isLoadingOpen || isLoading) && <BlockAction isLoadingOpen={isLoadingOpen} />}

        </div>
      </CurrentUserContext.Provider>
    </StatePopup.Provider>
  );
}

export default App;
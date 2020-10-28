import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />




      <div className="block-action"></div>
      <div className="error-server"></div>

      <div className="popup popup_edit-profile">
        <form className="popup__form" name="popup__form_profile" novalidate>
          <h2 className="popup__title">Редактировать профиль</h2>
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
          <button type="submit" className="popup__btn-submit">Сохранить</button>
          <button type="button" className="popup__btn-close"></button>
        </form>
      </div>

      <div className="popup popup_edit-avatar">
        <form className="popup__form" name="popup__form_profile" novalidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <label className="popup__field">
            <input type="url" className="popup__input popup__input_link" id="link-input" name="link"
              placeholder="Ссылка на картинку для аватара" required />
            <span className="popup__error" id="link-input-error"></span>
          </label>
          <button type="submit" className="popup__btn-submit">Сохранить</button>
          <button type="button" className="popup__btn-close"></button>
        </form>
      </div>

      <div className="popup popup_add-card">
        <form className="popup__form" name="popup__form_card" novalidate>
          <h2 className="popup__title">Новое место</h2>
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
          <button type="submit" className="popup__btn-submit">Создать</button>
          <button type="button" className="popup__btn-close"></button>
        </form>
      </div>

      <div className="popup popup_image">
        <form className="popup__container popup__container_image" name="popup__image" novalidate>
          <img className="popup__image" src="#" alt="" />
          <h2 className="popup__title popup__title_popup-image"></h2>
          <button type="button" className="popup__btn-close"></button>
        </form>
      </div>

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

function PopupWithImage() {
  return (
    <div className="popup popup_image">
      <form className="popup__container popup__container_image" name="popup__image" novalidate>
        <img className="popup__image" src="#" alt="" />
        <h2 className="popup__title popup__title_popup-image"></h2>
        <button type="button" className="popup__btn-close"></button>
      </form>
    </div>

  );
}

export default PopupWithImage;

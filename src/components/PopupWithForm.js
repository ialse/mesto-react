function PopupWithForm({ name, title, btnName, isOpen, onClose, children }) {
  return (
    <div className={`popup popup__form_${name} ${isOpen && 'popup_opened'}`}>
      <form className="popup__form" name={`popup__form_${name}`} noValidate>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__btn-submit">{btnName}</button>
        <button type="button" className="popup__btn-close" onClick={onClose}></button>
      </form>
    </div>
  );
}

export default PopupWithForm;

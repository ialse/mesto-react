function PopupWithForm(props) {
  return (
    <div className={`popup popup__form_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__form" name={`popup__form_${props.name}`} novalidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__btn-submit">Сохранить</button>
        <button type="button" className="popup__btn-close" onClick={props.onClose}></button>
      </form>
    </div>

  );
}

export default PopupWithForm;

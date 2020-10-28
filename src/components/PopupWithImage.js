function PopupWithForm(props) {
  return (
    <div className={`popup popup__form_${props.name}`}>
      <form className="popup__form" name={`popup__form_${props.name}`} novalidate>
        <h2 className="popup__title">{props.title}</h2>
        <button type="submit" className="popup__btn-submit">Сохранить</button>
        <button type="button" className="popup__btn-close"></button>
      </form>
    </div>

  );
}

export default PopupWithForm;

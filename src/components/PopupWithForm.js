import React from 'react';

const PopupWithForm = React.memo(({ name, title, btnName, isOpen, onClose, onSubmit, children, isLoading }) => {
  return (
    <div className={`popup popup__form_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <form className="popup__form" name={`popup__form_${name}`} noValidate onSubmit={onSubmit}>
        <h2 className="popup__title">{title}</h2>
        {children}
        <button type="submit" className="popup__btn-submit">
          {isLoading
            ? (<div className='spinner'></div >)
            : btnName
          }
        </button>
        <button type="button" className="popup__btn-close" onClick={onClose}></button>
      </form>
    </div>
  );
});

export default PopupWithForm;

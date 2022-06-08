function PopupWithForm({
  name,
  title,
  onClose,
  isOpen,
  children,
  buttonText = "Сохранить",
}) {
  return (
    <section
      id={`popup_type_${name}`}
      className={"popup" + (isOpen ? " popup_opened" : "")}
    >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <form id={`form_${name}`} name={name} className="form" novalidate>
          {children}
          <input
            id="submit_avatar"
            className="form__submit form__submit_inactive"
            type="submit"
            value={buttonText}
            disabled
          />
        </form>
        <button
          id="popupAdClose"
          type="button"
          className="popup__close"
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;

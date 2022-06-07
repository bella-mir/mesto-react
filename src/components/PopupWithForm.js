function PopupWithForm(props) {

    return (
        <section id={`popup_type_${props.name}`} className={"popup" + (props.isOpen ? ' popup_opened' : '')}>
            <div className="popup__container">
                <h2 className="popup__title">{props.title}</h2>
                <form id={`form_${props.name}`} name={props.name} className="form" novalidate>
                    {props.children}
                </form>
                <button
                    id="popupAdClose"
                    type="button"
                    className="popup__close"
                    onClick={props.onClose}
                ></button>
            </div>
        </section>

    );
}

export default PopupWithForm;
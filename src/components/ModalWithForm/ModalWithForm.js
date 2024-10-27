import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText,
  title,
  onClose,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal-content">
        <button
          className="modal-content__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form form" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="modal__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

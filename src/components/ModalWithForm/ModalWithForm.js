import "./ModalWithForm.css";

const ModalWithForm = ({ children, buttonText, title, onClose, name }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal-content">
        <button
          className="modal-content__close-button"
          type="button"
          onClick={onClose}
        ></button>
        <h3 className="ModalWithForm__title">{title}</h3>
        <form className="ModalWithForm__form form">
          {children}
          <button type="submit">{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;

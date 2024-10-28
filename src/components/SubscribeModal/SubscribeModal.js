import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import { useEffect, useState } from "react";
const RegisterModal = ({ handleCloseModal, onSubscribeUser, isOpen }) => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubscribeUser(email);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText={"SUBSCRIBE"}
      title={"SUBSCRIBE TO OUR EMAIL LIST"}
      onClose={handleCloseModal}
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="email" className="modal_label-text">
        Email
        <input
          type="text"
          id="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
          className="modal__input"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;

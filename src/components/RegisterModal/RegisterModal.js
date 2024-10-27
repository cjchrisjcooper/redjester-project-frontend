import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../ModalWithForm/ModalWithForm.css";
import { useEffect, useState } from "react";
const RegisterModal = ({
  handleCloseModal,
  onAddUser,
  isOpen,
  handleModalRedirect,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarUrlChange = (e) => {
    console.log(e.target.value);
    setAvatar(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddUser(name, password, avatar);
  };

  useEffect(() => {
    if (isOpen) {
      setName("");
      setPassword("");
      setAvatar("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      buttonText={"SIGN UP"}
      title={"SIGN UP"}
      onClose={handleCloseModal}
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="Name" className="modal_label-text">
        Name
        <input
          type="text"
          name="Name"
          id="Name"
          minLength="1"
          maxLength="250"
          placeholder="Name"
          className="modal__input"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="avatarUrl" className="modal_label-text">
        Avatar Url
        <input
          type="url"
          name="avatarUrl"
          id="avatarUrl"
          minLength="1"
          maxLength="250"
          placeholder="Avatar-URL"
          className="modal__input"
          value={avatar}
          onChange={handleAvatarUrlChange}
        />
      </label>
      <label htmlFor="password" className="modal_label-text">
        Password
        <input
          type="text"
          name="password"
          id="password"
          minLength="1"
          maxLength="250"
          placeholder="Password"
          className="modal__input"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;

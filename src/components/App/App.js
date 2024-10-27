import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import { useState } from "react";
function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };
  return (
    <div className="App">
      <Header handleRegisterModal={handleRegisterModal} />
      <Main />
      {activeModal === "register" && (
        <RegisterModal handleCloseModal={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
}

export default App;

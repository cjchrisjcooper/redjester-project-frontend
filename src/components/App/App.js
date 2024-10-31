import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import SubscribeModal from "../SubscribeModal/SubscribeModal.js";
import { useEffect, useState } from "react";
import { getUselessFact } from "../../Utils/UselessFactsApi.js";
function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleSebscribeModal = () => {
    setActiveModal("subscribe");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getUselessFact().then((data) => {
      console.log(data.text);
    });
  }, []);
  return (
    <div className="App">
      <Header
        handleRegisterModal={handleRegisterModal}
        handleSubscribeModal={handleSebscribeModal}
      />
      <Main />
      {activeModal === "register" && (
        <RegisterModal handleCloseModal={handleCloseModal} />
      )}
      {activeModal === "subscribe" && (
        <SubscribeModal handleCloseModal={handleCloseModal} />
      )}

      <Footer />
    </div>
  );
}

export default App;

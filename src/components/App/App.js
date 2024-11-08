import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutUs from "../AboutUs/AboutUs.js";
import Footer from "../Footer/Footer.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import SubscribeModal from "../SubscribeModal/SubscribeModal.js";
import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import {
  getUselessFact,
  parseUselessFact,
} from "../../Utils/UselessFactsApi.js";
function App() {
  const [activeModal, setActiveModal] = useState("");
  const [uselessFact, setUselessFact] = useState("");
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
      const uselessFactParsed = parseUselessFact(data);
      setUselessFact(uselessFactParsed);
    });
  }, []);

  //console.log(uselessFact);
  return (
    <div className="App">
      <Header
        handleRegisterModal={handleRegisterModal}
        handleSubscribeModal={handleSebscribeModal}
      />
      <Switch>
        <Route path="/about-us">
          <AboutUs />
        </Route>
        <Route path="/">
          <Main uselessMainFact={uselessFact} />
        </Route>
      </Switch>

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

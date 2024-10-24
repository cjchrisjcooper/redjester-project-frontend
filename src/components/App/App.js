import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ModalWithForm title={"SIGN UP"} onClose={""}>
        These are the children
      </ModalWithForm>
      <Footer />
    </div>
  );
}

export default App;

import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../images/CopyRedJester1.jpg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} className="header__logo-image" alt="logo"></img>
      </div>
      <div className="header__main-content">
        <button className="header__button">Games</button>

        <button className="header__button">Meet the Team</button>

        <button className="header__button">About us</button>

        <button className="header__button">Subscribe</button>

        <button className="header__button">Sign up</button>
      </div>
    </header>
  );
};

export default Header;

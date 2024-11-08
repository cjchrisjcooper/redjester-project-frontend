import "./Header.css";
import Logo from "../../images/CopyRedJester1.jpg";
import { Link } from "react-router-dom";
const Header = ({ handleRegisterModal, handleSubscribeModal }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={Logo} className="header__logo-image" alt="logo"></img>
        </Link>
      </div>
      <div className="header__main-content">
        {/* <button className="header__button header__button_hover_purple">
          <Link
            to={`${url}/games`}
            className="header__link header__link_hover_purple"
          >
            Games
          </Link>
        </button>

        <button className="header__button header__button_hover_blue">
          <Link
            to={`${url}/meet-the-team`}
            className="header__link header__link_hover_blue"
          >
            Meet the Team
          </Link>
        </button> */}

        <button className="header__button header__button_hover_yellow">
          <Link
            to="/about-us"
            className="header__link header__link_hover_yellow"
          >
            About us
          </Link>
        </button>

        <button
          className="header__button header__button_hover_maroon"
          onClick={handleSubscribeModal}
        >
          Subscribe
        </button>

        <button
          className="header__button  header__button_hover_green"
          onClick={handleRegisterModal}
        >
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;

import "./intro.css";
import { Link } from "react-router-dom";
import Logo from "../images/CopyRedJester1.jpg";
const Intro = () => {
  return (
    <div className="Intro">
      <div className="Intro__text">
        <h1 className="Intro__mission-statement">
          DEDICATED TO CRAFTING IMMERSIVE <br /> AND INNOVATIVE GAMING
          EXPERIENCES
        </h1>
        <p className="intro__text_small">
          We make colored pixels move across your screen. Based in Phoenix, AZ.
        </p>
        <p className="intro__invitation">Check out our stuff</p>
      </div>
      <div className="header__logo">
        <img src={Logo} className="Intro__logo-image" alt="logo"></img>
      </div>
    </div>
  );
};

export default Intro;

//import Logo from "../../images/CopyRedJester1.jpg";
import "./Game.css";
const Game = ({ item }) => {
  return (
    <div className="Game">
      <div className="Game__logo">
        <img src={item.Photo} className="Game__logo-image" alt="logo"></img>
        <p>{item.Title}</p>
      </div>
      <div className="Game__description">{item.Desription}</div>
    </div>
  );
};

export default Game;

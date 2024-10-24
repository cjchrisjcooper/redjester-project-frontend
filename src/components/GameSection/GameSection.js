import Game from "../Game/Game";
import "./GameSection.css";
const GameSection = () => {
  return (
    <div className="GameSection">
      <p className="GameSection__intro">Games</p>
      <Game />
    </div>
  );
};

export default GameSection;

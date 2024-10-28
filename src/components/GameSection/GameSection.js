import Game from "../Game/Game";
import "./GameSection.css";
import { games } from "../../Utils/Constants";
const GameSection = () => {
  return (
    <div className="GameSection">
      <p className="GameSection__intro">Games</p>
      {games.map((game) => {
        return <Game item={game} />;
      })}
    </div>
  );
};

export default GameSection;

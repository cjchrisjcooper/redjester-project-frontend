import Logo from "../../images/CopyRedJester1.jpg";
import "./Game.css";
const Game = () => {
  return (
    <div className="Game">
      <div className="Game__logo">
        <img src={Logo} className="Game__logo-image" alt="logo"></img>
      </div>
      <div className="Game__description">
        The “Corabanth Saga: rebellion” is an immersive FPS/RPG video game set
        on the sci-fi world of CoraBanth. You play as a part of the slave
        rebellion that has recently escaped the vultrite mines and is now hold
        up at a abandoned military outpost. Although the rebellion has just
        begun; it needs food, weapons, and galactic credits if it is to survive.
        Be the force that burns house Corabanth to the ground, and the greater
        Andromeda Empire to its knees. You will fight with your fellow comrades
        to ensure your freedom on the land and in space. some of your comrades
        will be of high honor, while others believe that the ends justify the
        means. Be careful though. The Galaxy is filled with numerous factions
        and houses, and not all of them share your same interests.
      </div>
    </div>
  );
};

export default Game;

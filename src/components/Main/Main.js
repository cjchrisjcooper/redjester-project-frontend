import GameSection from "../GameSection/GameSection";
import Intro from "../Intro/intro";
import MeetTheTeam from "../MeetTheTeam/MeetTheTeam.js";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <Intro />

      <GameSection />

      <MeetTheTeam />
    </div>
  );
};

export default Main;

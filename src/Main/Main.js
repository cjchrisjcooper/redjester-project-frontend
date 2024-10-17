import GameSection from "../GameSection/GameSection";
import Intro from "../Intro/intro";
import MeetTheTeam from "../MeetTheTeam/MeetTheTeam.js";
import "./Main.css";
import { Link } from "react-router-dom";

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

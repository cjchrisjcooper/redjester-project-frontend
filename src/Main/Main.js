import Footer from "../Footer/Footer.js";
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
      <Footer />
    </div>
  );
};

export default Main;

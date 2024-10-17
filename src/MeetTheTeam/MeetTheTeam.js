import Employee from "../Employee/Employee";
import GameSection from "../GameSection/GameSection";
import Intro from "../Intro/intro";
import "./MeetTheTeam.css";

const MeetTheTeam = () => {
  return (
    <div className="MeetTheTeam">
      <p className="MeetTheTeam__intro">MEET THE TEAM</p>
      <Employee />
    </div>
  );
};

export default MeetTheTeam;

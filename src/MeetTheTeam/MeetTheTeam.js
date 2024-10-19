import Employee from "../Employee/Employee";
import GameSection from "../GameSection/GameSection";
import Intro from "../Intro/intro";
import "./MeetTheTeam.css";
import { employees } from "../Utils/Constants";

const MeetTheTeam = () => {
  return (
    <div className="MeetTheTeam">
      <p className="MeetTheTeam__intro">MEET THE TEAM</p>
      {employees.map((employee) => {
        return <Employee item={employee} />;
      })}
    </div>
  );
};

export default MeetTheTeam;

import GameSection from "../GameSection/GameSection";
import Intro from "../Intro/intro";
import "./Employee.css";
import Logo from "../images/CopyRedJester1.jpg";
const Employee = () => {
  return (
    <div className="Employee">
      <div className="Employee__picture">
        <img
          src={Logo}
          className="Employee__picture-image"
          alt="Employee Picture"
        ></img>
      </div>
      <div className="Employee__description">
        I am the head Unity C# developer at Red Jester Games LLC. Being raised
        with video games from an early age; it has always been my passion to
        tell unique, character driven, thrilling, and immersive stories. With
        advent of the Unity game engine and my programming background, I now can
        now bring those stories to life. As the Unity C# developer it is my
        responsibility to write clean, reusable, efficient, and readable code to
        all the objects inside Unity that are logic based. It is also my
        responsibility to fix any bugs inside the program and to make sure each
        game object acts according to its own programming logic.
      </div>
    </div>
  );
};

export default Employee;

import "./Employee.css";

const Employee = ({ item }) => {
  console.log(item.description);
  return (
    <div className="Employee">
      <div className="Employee__picture">
        <img
          src={item.Photo}
          className="Employee__picture-image"
          alt="Employee"
        ></img>
        <p>{item.Name}</p>
        <p>Role: {item.Role}</p>
      </div>
      <div className="Employee__description">{item.Desription}</div>
    </div>
  );
};

export default Employee;

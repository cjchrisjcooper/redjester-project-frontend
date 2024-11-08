import "./UselessFact.css";

const UselessFact = ({ uselessFact }) => {
  return (
    <div className="uselessFact">
      <p className="uselessFact__intro">USELESS FACT OF THE DAY</p>
      <p className="uselessFact__fact">{`"${uselessFact}"`}</p>
    </div>
  );
};

export default UselessFact;

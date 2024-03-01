import "./Die.css";
function Die({ val, color = "slateblue" }) {
  return (
    <div className="Die" style={{ backgroundColor: color }}>
      {val} {/* val is the value showed within the die */}
    </div>
  );
}

export default Die;

import Die from "./Die";
import "./Dice.css";
function Dice({ dice, color }) {
  return (
  <section className="Dice"> {/* map creates new Array, takes an callback as an argument */}
      {dice.map((v, i) => ( //all dice will have one value to it, after getting rolled, these value will get iterated over though Map and will be passed on to each "die component"
        <Die key={i} val={v} color={color} />
      ))}
    </section>
  );
}

export default Dice;

[3, 4, 2];

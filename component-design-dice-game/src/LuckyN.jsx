import { useState } from "react";
import { getRolls } from "./utils";
import Button from "./Button";
import Dice from "./Dice";

function LuckyN({ title = "Dice Game", numOfDice = 2, winCheck }) {
  const [diceVal, setDiceVal] = useState(getRolls(numOfDice));
  const isWinner = winCheck(diceVal);
  const roll = () => setDiceVal(getRolls(numOfDice));

  return (
    <main className="LuckyN">
      <h1>
        {title} {isWinner && "You Win!"}
      </h1>
      <Dice dice={diceVal} />
      {/* Dice is State which is passed down as a prop to the Dice Components*/}
      <Button clickFunc={roll} label="Re-Roll" />
    </main>
  );
}
export default LuckyN;

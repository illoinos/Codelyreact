import React, { useState } from "react";
import "./style.css";
const TicTac = () => {
  const [boxes, setBoxes] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lastClick, setLastClick] = useState("");
  const [winner, setWinner] = useState("");
  const checkWinner = (lastBoxes) => {
    console.log(lastBoxes);
    if (
      lastBoxes[0] !== "" &&
      lastBoxes[0] === lastBoxes[1] &&
      lastBoxes[0] === lastBoxes[2]
    ) {
      console.log("Winner=" + lastBoxes[0]);
      setWinner(lastBoxes[0]);
    }
    if (
      lastBoxes[0] !== "" &&
      lastBoxes[0] === lastBoxes[3] &&
      lastBoxes[0] === lastBoxes[6]
    ) {
      console.log("Winner=" + lastBoxes[0]);
      setWinner(lastBoxes[0]);
    }
    if (
      lastBoxes[6] !== "" &&
      lastBoxes[1] === lastBoxes[4] &&
      lastBoxes[1] === lastBoxes[7]
    ) {
      console.log("Winner=" + lastBoxes[0]);
      setWinner(lastBoxes[1]);
    }
    if (
      lastBoxes[2] !== "" &&
      lastBoxes[2] === lastBoxes[5] &&
      lastBoxes[2] === lastBoxes[8]
    ) {
      console.log("Winner=" + lastBoxes[0]);
      setWinner(lastBoxes[2]);
    }
    if (
      lastBoxes[0] !== "" &&
      lastBoxes[0] === lastBoxes[4] &&
      lastBoxes[0] === lastBoxes[8]
    ) {
      console.log("Winner=" + lastBoxes[0]);
      setWinner(lastBoxes[0]);
    }
    if (
      lastBoxes[2] !== "" &&
      lastBoxes[2] === lastBoxes[4] &&
      lastBoxes[2] === lastBoxes[6]
    ) {
      console.log("Winner=" + lastBoxes[0]);
      setWinner(lastBoxes[2]);
    }
    if (
      lastBoxes[3] !== "" &&
      lastBoxes[3] === lastBoxes[4] &&
      lastBoxes[3] === lastBoxes[5]
    ) {
      console.log("Winner3=" + lastBoxes[3]);
      setWinner(lastBoxes[3]);
    }
    if (
      lastBoxes[6] !== "" &&
      lastBoxes[6] === lastBoxes[7] &&
      lastBoxes[6] === lastBoxes[8]
    ) {
      console.log("Winner=" + lastBoxes[0]);
      setWinner(lastBoxes[6]);
    }
  };

  const handleClick = (i) => {
    if (boxes[i] === "") {
      let next = lastClick === "X" ? "O" : "X";
      boxes[i] = next;
      setLastClick(next);
      setBoxes([...boxes]);
      checkWinner(boxes);
    }
  };
  return (
    <div className="container">
      {winner !== "" ? <h1 className="winner">Ялагч бол: {winner}</h1> : null}
      <div className="tic-tac">
        {boxes.map((box, i) => (
          <div className="box" onClick={() => handleClick(i)}>
            {box}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTac;

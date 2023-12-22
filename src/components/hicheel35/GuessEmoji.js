import React, { useState } from "react";
import "./style.css";
const MemoryGame = () => {
  const [boxes, setBoxes] = useState([
    "🐱",
    "🎀",
    "🐶",
    "💕",
    "🐼",
    "🤖",
    "👼",
    "🐭",
    "",
    "🎀",
    "🐶",
    "💕",
    "🐼",
    "🤖",
    "👼",
    "🐭",
  ]);
  const [clickedBox, setClickedBox] = useState([]);
  // ['🐶','🐶','🐶','','','']
  // 🐱🎀🐭🐶💕🐼🤖👼
  const check = (clickedBox) => {
    if (clickedBox.length === 2) {
      console.log("check", clickedBox);
      const boxIndex1 = clickedBox[0];
      const boxIndex2 = clickedBox[1];
      console.log("boxes[boxIndex1]", boxes[boxIndex1]);
      console.log("boxes[boxIndex1]", boxes[boxIndex2]);
      if (boxes[boxIndex1] === boxes[boxIndex2]) {
      } else {
        setTimeout(() => {
          setClickedBox([]);
        }, 1000);
      }
    }
  };
  const handleClick = (i) => {
    if (clickedBox.length < 2) {
      let newClickedBox = [...clickedBox, i];
      console.log("newClickedBox=", newClickedBox);

      setClickedBox(newClickedBox);

      check(newClickedBox);
    }
  };
  return (
    <div className="container">
      <div className="main">
        {boxes.map((box, i) => (
          <div onClick={() => handleClick(i)} className="box">
            {clickedBox.includes(i) ? box : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;

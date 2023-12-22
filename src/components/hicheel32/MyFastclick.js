import React, { useState } from "react";
import Displaybox from "./Displaybox.js";
import "./style.css";

const MyFastclick = () => {
  const [counter, setcounter] = useState(0);
  const [time, settime] = useState(0);
  const [timerid, settimerid] = useState(0);

  const handleclick = () => {
    if (counter === 0) {
      setInterval(() => {
        settime((time) => time + 10);
      }, 10);
    }
    setcounter(counter + 1);
  };
  const second = time / 1000;
  const clickPerSec = parseFloat(counter / second).toFixed(2);
  return (
    <div className="main">
      <div className="container">
        <Displaybox too={second} tailbar={"Timer"} ungu="blue" />
        <Displaybox
          too={isNaN(clickPerSec) ? "0" : clickPerSec}
          tailbar={"Click/s"}
          ungu="orange"
        />
        <Displaybox too={counter} tailbar={"Score"} ungu="green" />
      </div>
      <button onClick={handleclick} className={"btn"}>
        Click to start
      </button>
    </div>
  );
};
export default MyFastclick;

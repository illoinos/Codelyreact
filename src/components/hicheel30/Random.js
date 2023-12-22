import React, { useState } from "react";
import "./random.css";

const Random = () => {
  const [Random, setRandom] = useState(Math.floor(Math.random() * 100));
  console.log("Random", Random);
  const [word, setWord] = useState("");
  const [attempt, setAttempt] = useState(5);
  const [result, setResult] = useState("");
  const typing = (e) => {
    const text = e.target.value;
    setWord(text);
  };
  const Guess = () => {
    if (Random == word) {
      console.log("win");
      setResult("you win");
    } else if (attempt - 1 == 0) {
      setResult("You lose");
    } else if (word > Random) {
      console.log("alot");
      setResult("Too many numbers" + (attempt - 1));
      setAttempt(attempt - 1);
    } else if (word < Random) console.log("little");
    setResult("Too little" + (attempt - 1));
  };
  return (
    <div className="color">
      <h1>What is the hidden number?</h1>
      <p>Guess the number between 1-100</p>
      <div>
        <input onChange={typing} placeholder="input" value={word}></input>
        <button onClick={Guess}>Enter</button>
        <p>Hint: {word} </p>
      </div>
    </div>
  );
};

export default Random;

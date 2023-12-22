import React, { useState } from "react";
import "./counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="count">
      <p>Count: {count}</p>
      <button className="erhem" onClick={() => setCount(count + 1)}>
        Like
      </button>
      <button className="tuguldur" onClick={() => setCount(count - 1)}>
        Dislike
      </button>
      <button className="alex" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

import React from "react";
import "./style.css";
const Displaybox = ({ too, tailbar, ungu }) => {
  return (
    <div className={"Display-box " + ungu}>
      <h1>{too}</h1>
      <h2>{tailbar}</h2>
    </div>
  );
};
export default Displaybox;

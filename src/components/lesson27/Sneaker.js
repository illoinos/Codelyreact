import React from "react";
import puuz1 from "../../images/image1.png";
import ToggleButton from "./ToggleButton";
import "../../App.css";
function Sneaker() {
  return (
    <div className="Sneakers">
      <img src={puuz1} />
      <div className="Title">
        <header>Nike Blazer Mid'77</header>
        <description>"Nike Kick Shoes"</description>
      </div>

      <ToggleButton />
    </div>
  );
}

export default Sneaker;

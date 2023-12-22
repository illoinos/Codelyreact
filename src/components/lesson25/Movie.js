import React from "react";
import "./movie.css";
import Counter from "../hicheel26/Counter";
const Movie = ({ image, name, description }) => {
  return (
    <div className="movie">
      <img
        className="movie-img"
        src={image}
        width={300}
        height={500}
        alt="Product"
      />
      <div className="Title">
        <h2 className="Title">{name}</h2>
        <p className="product-description">{description}</p>
        <div>
          <Counter />
        </div>
      </div>
    </div>
  );
};
export default Movie;

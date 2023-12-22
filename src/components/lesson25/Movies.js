import React, { useState } from "react";
import "../../App.css";
import Avengers from "../../images/avengers.jpeg";
import Ironman from "../../images/ironman.jpg";
import Movie from "./Movie";
import Spiderman from "../../images/spider-man.jpg";
import Thor from "../../images/thor_love_and_thunder_dc.jpg";

const FindMovie = () => {
  const movies = [
    {
      image: Avengers,
      name: "The Avengers",
      description: "Superheroes team up to save the world.",
    },
    {
      image: Spiderman,
      name: "Spider-Man: Into the Spider-Verse",
      description: "An animated adventure with multiple Spider-People.",
    },
    {
      image: Ironman,
      name: "Iron man 3",
      description:
        "Iron Man 3 is a 2013 American superhero film based on the Marvel Comics character Iron Man",
    },
    {
      image: Thor,
      name: "Thor: Love and Thunder",
      description:
        "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    },
  ];

  const [text, setText] = useState("");
  const filteredMovie = movies.filter((Movie) =>
    Movie.name.toLowerCase().includes(text.toLowerCase())
  );
  console.log("filteredMovie", filteredMovie);
  const onTyping = (e) => {
    const text = e.target.value;
    console.log("Бичсэн текст бол: " + text);
    setText(text);
  };

  return (
    <div className="App">
      <h1>Таньд санал болгох киноны жагсаалт</h1>
      <p>Адал явдалт , тулаант </p>
      <input type="text" placeholder="Хайлт" onChange={onTyping} />

      <div className="row">
        {filteredMovie.map((movie) => (
          <Movie
            image={movie.image}
            name={movie.name}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
};
export default FindMovie;

import React, { useState } from "react";

import { Movie } from "../components/Movie";
import { initialMovies } from "../utils/movies";

export const MyMovies = () => {
  const [movies, setMovies] = useState(initialMovies);

  console.log(movies);

  return (
    <>
      <h1>My Movies</h1>
      {movies.map((movie, index) => {
        const { releaseDate, name, imageUrl, userScore } = movie;
        return (
          <div key={`${name}-${index}`}>
            <Movie
              releaseDate={releaseDate}
              name={name}
              imageUrl={imageUrl}
              userScore={userScore}
            />
          </div>
        );
      })}
    </>
  );
};

export default MyMovies;

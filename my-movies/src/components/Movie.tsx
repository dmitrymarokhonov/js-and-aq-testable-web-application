import React from "react";

import { IMovie } from "../utils/movies";
import { formatDate } from "../utils/utils";

export const Movie = ({ name, releaseDate, userScore, imageUrl }: IMovie) => (
  <>
    <h2>
      {name} - {formatDate(releaseDate)}
    </h2>
    <h3>
      {userScore === 0 || userScore
        ? `User Score: ${userScore}`
        : "No user score yet"}
    </h3>
    <img src={imageUrl} alt="Movie in question" />
  </>
);

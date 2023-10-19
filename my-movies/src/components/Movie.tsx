import React from "react";
import { Card, CardContent, Rating, Typography } from "@mui/material";
import { IMovie } from "../utils/movies";
import { formatDate } from "../utils/utils";

export const Movie = ({ name, releaseDate, userScore, review }: IMovie) => (
  <Card variant="outlined" style={{ margin: "16px" }}>
    <CardContent>
      <Typography variant="h4">
        {name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Realease date: {formatDate(releaseDate)}
      </Typography>
      <Typography variant="h6" color="primary">
        {userScore === 0 || userScore
          ? <Rating name="user-rating" precision={0.5} max={10} readOnly  value={userScore}/>
          : "No user score yet"}
      </Typography>
      {review && <Typography variant="body1">My Review: {review}</Typography>}
    </CardContent>
  </Card>
);

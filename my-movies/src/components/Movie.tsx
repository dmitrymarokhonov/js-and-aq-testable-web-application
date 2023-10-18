import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
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
          ? `User Score: ${userScore}`
          : "No user score yet"}
      </Typography>
      {review && <Typography variant="body1">User review: {review}</Typography>}
    </CardContent>
  </Card>
);

import React, { useState, useCallback } from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
} from "@mui/material";
import { Movie } from "../components/Movie";
import { IMovie, initialMovies } from "../utils/movies";
import AddMovie from "./AddMovie";

export const MyMovies = () => {
  const [movies, setMovies] = useState(initialMovies);
  const [isAddingMovie, setAddingMovie] = useState(false);

  const openAddMovieDialog = useCallback(() => {
    setAddingMovie(true);
  }, []);

  const closeAddMovieDialog = useCallback(() => {
    setAddingMovie(false);
  }, []);

  const addNewMovie = (newMovie : IMovie) => {
    setMovies([...movies, newMovie]);
    closeAddMovieDialog();
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        My Movies
      </Typography>
      <Button variant="outlined" color="primary" onClick={openAddMovieDialog}>
        Add Movie
      </Button>
      <Grid container spacing={2}>
        {movies.map((movie, index) => {
          const { releaseDate, name, review, userScore } = movie;
          return (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <Movie
                releaseDate={releaseDate}
                name={name}
                review={review}
                userScore={userScore}
              />
            </Grid>
          );
        })}
      </Grid>
      <AddMovie open={isAddingMovie} onClose={closeAddMovieDialog} onSubmit={addNewMovie} />
    </Container>
  );
};

export default MyMovies;

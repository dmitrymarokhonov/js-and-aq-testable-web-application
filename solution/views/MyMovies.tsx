import React, { useState } from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { Movie } from "../components/Movie";
import { IMovie, initialMovies } from "../utils/movies";
import AddMovie from "./AddMovie";
import { useNavigate } from "react-router-dom";

export const MyMovies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(initialMovies);
  const [isAddingMovie, setAddingMovie] = useState(false);

  const addNewMovie = (newMovie: IMovie) => {
    setMovies([...movies, newMovie]);
    setAddingMovie(false);
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <Container>
      <div style={{ position: "relative" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={logout}
          style={{ position: "absolute", top: 8, right: 0 }}
        >
          Log Out
        </Button>
      </div>
      <Typography variant="h3" gutterBottom>
        My Movies
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setAddingMovie(true)}
      >
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
      <AddMovie
        open={isAddingMovie}
        onClose={() => setAddingMovie(false)}
        onSubmit={addNewMovie}
      />
    </Container>
  );
};

export default MyMovies;

import { useState } from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { Movie } from "../components/Movie";
import { IMovie, initialMovies } from "../utils/movies";
import { useNavigate } from "react-router-dom";
import AddMovie from "./AddMovie";

export const MyMovies = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [movies, setMovies] = useState(initialMovies);

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
        onClick={() => setDialogIsOpen(true)}
      >
        Add Movie
      </Button>
      <Grid container spacing={2}>
        {movies.map((movie: IMovie, index) => {
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
      <AddMovie open={dialogIsOpen} onClose={() => setDialogIsOpen(false)} />
    </Container>
  );
};

export default MyMovies;

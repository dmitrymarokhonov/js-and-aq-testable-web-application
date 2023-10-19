import React, { useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Rating,
  Grid,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { IMovie } from "../utils/movies";

interface AddMovieProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (newMovie: IMovie) => void;
}

const AddMovie: React.FC<AddMovieProps> = ({ open, onClose, onSubmit }) => {
  const [movieDetails, setMovieDetails] = useState<IMovie>({
    name: "",
    releaseDate: new Date(),
    review: "",
    userScore: 10.0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovieDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setMovieDetails((prevState) => ({
        ...prevState,
        releaseDate: date,
      }));
    }
  };

  const handleRatingChange = (event: ChangeEvent<{}>, value: number | null) => {
    if (value !== null) {
      setMovieDetails((prevState) => ({
        ...prevState,
        userScore: value,
      }));
    }
  };

  const handleAddMovie = (event: any) => {
    event.preventDefault();
    onSubmit(movieDetails);
    setMovieDetails({
      name: "",
      releaseDate: new Date(),
      review: "",
      userScore: 10.0,
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleAddMovie}>
        <DialogTitle>Add a Movie</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Movie Name"
                variant="outlined"
                fullWidth
                name="name"
                value={movieDetails.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Release Date" onChange={handleDateChange} />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Grid container alignItems="center">
                <Rating
                  name="userScore"
                  value={movieDetails.userScore}
                  onChange={handleRatingChange}
                  precision={0.5}
                  max={10}
                  size="large"
                />
                {movieDetails.userScore !== null && (
                  <span style={{ margin: "8px" }}>
                    {movieDetails.userScore + "/10"}
                  </span>
                )}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Review"
                variant="outlined"
                fullWidth
                name="review"
                value={movieDetails.review}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddMovie;

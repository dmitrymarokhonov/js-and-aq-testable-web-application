import React, { useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  Grid,
  TextField,
  Rating,
} from "@mui/material";
import { IMovie } from "../utils/movies";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface AddMovieProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (newMovie: IMovie) => void;
}

const AddMovie: React.FC<AddMovieProps> = ({
  open,
  onClose,
  onSubmit,
}: AddMovieProps) => {
  const [movieDetails, setMovieDetails] = useState<IMovie>({
    name: "",
    releaseDate: new Date(),
    review: "",
    userScore: 10.0,
  });

  //Handle input change functions are given here to spare some time
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovieDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleAddMovie = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(movieDetails);
    setMovieDetails({
      name: "",
      releaseDate: new Date(),
      review: "",
      userScore: 10.0,
    });
    onClose();
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

  return (
    <Dialog open={open} onClose={onClose}>
      <form onSubmit={handleAddMovie}>
        <DialogTitle>Add a Movie</DialogTitle>
        <DialogContent>
          <Grid container spacing={4} sx={{ paddingTop: "8px" }}>
            <Grid item xs={12}>
              <TextField
                label="Movie name"
                value={movieDetails.name}
                onChange={handleInputChange}
                name="name"
                fullWidth
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
                <span style={{ margin: "8px" }}>
                  {movieDetails.userScore + "/10"}
                </span>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Review"
                fullWidth
                name="Review"
                value={movieDetails.review}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Cancel</Button>
          <Button type="submit" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddMovie;

import React, { useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";

import { IMovie } from "../utils/movies";

interface AddMovieProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (newMovie: IMovie) => void;
}

const AddMovie: React.FC<AddMovieProps> = () => {
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

  const handleRatingChange = ( value: number | null) => {
    if (value !== null) {
      setMovieDetails((prevState) => ({
        ...prevState,
        userScore: value,
      }));
    }
  };

  return (
    <Dialog open={false}>
      <form>
        <DialogTitle>Add a Movie</DialogTitle>

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

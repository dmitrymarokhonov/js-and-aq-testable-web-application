import React, { useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { IMovie } from "../utils/movies";

interface AddMovieProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (newMovie: IMovie) => void;
}

const AddMovie: React.FC<AddMovieProps> = ({ open, onClose, onSubmit }) => {
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    releaseDate: new Date(),
    review: "",
    userScore: 0.0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovieDetails({ ...movieDetails, [name]: value });
  };

  const handleAddMovie = () => {
    onSubmit(movieDetails);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <form>
        <DialogTitle>Add a Movie</DialogTitle>
        <DialogContent>
          <TextField
            label="Movie Name"
            variant="outlined"
            fullWidth
            name="name"
            value={movieDetails.name}
            onChange={handleInputChange}
          />
          <div>
            <label>Release date:</label>
            <input
              type="date"
              name="releaseDate"
              value={movieDetails.releaseDate.toISOString().slice(0, 10)}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>User Score:</label>
            <input
              type="number"
              name="userScore"
              step="0.1"
              min="0"
              max="10"
              value={movieDetails.userScore}
              onChange={handleInputChange}
            />
          </div>
          <TextField
            label="Review"
            variant="outlined"
            fullWidth
            name="review"
            value={movieDetails.review}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddMovie} color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default AddMovie;

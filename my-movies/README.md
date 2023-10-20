# My Movies React app

Go to the project folder and run `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Where is Login?
We have implemented a fake login page. Credentials are hardcoded in the LoginPage.tsx.

Can you find them? Try to change them, and log in.


## Assignment 1:
Open AddMovie Dialog when the "Add Movie" -button is pressed, and close if the "Cancel" -button or area outside of the dialog is clicked.

Step 1. Import AddMovie and useState to MyMovies.tsx. Remember to add all necessary imports in other steps too.

Step 2. Create a state variable dialogIsOpen using the useState hook. Initialize it with false.

Step 3. Add the onClick property to the "Add Movie" -button, which will set the value of the dialogIsOpen to true. You can use inline arrow function syntax or create a handle click -function.

Step 4. Include the AddMovie component at the bottom of the MyMovies component's return section. Pass the following props to AddMovie:
 - open: dialogIsOpen state.
 - onClose: () => setDialogIsopen(false). Or create a separate handleClose function for this.

Step 5. In AddMovie.tsx give open and onClose props to the Dialog component's properties with the same names. Give Cancel button onClick property "onClose".
 
Step 6. Now check that everything works.

## Assignment 2:
Update movies when submit is pressed, and close dialog. [Useful example](https://react.dev/learn/updating-arrays-in-state#adding-to-an-array)

Step 1. In MyMovies.tsx create a new state variable called movies using the useState hook. Initialize it with initialMovies. Update the map function to use the movies state instead of initialMovies.

Step 2. Implement a function addNewMovie that takes a new movie: IMovie object as an argument. Inside the function, use the setMovies function to update the movies state. Append the new movie to the existing list of movies.

Step 3. Give the addNewMovie as a prop called onSubmit to the AddMovie component. Remove //in front of the onSubmit in the AddMovieProps in the AddMovie.tsx. Add this as a prop to the AddMovie in the AddMovie.tsx.

Step 4. Set initial state for the movieDetails:
```
{
 name: "My movie",
 releaseDate: new Date(),
 review: "Very nice movie!",
 userScore: 10.0,
}
```
Set the type of the state to be IMovie.

Step 5. Create handleAddMovie that takes event: React.FormEvent<HTMLFormElement>. Call event.preventDefault() and then onSubmit(movieDetails). At last call onClose, so that the dialog closes after submission. 

Step 6. Add onSubmit property for the form, it should call handleAddMovie.

Step 7. Check that if you now click "Add" -button it will add a new movie to the My Movies page.

## Assignment 3:
Create the form where users can send movies.

Step 1. Clear initial state of from the movieDetails
```
{
 name: "",
 releaseDate: new Date(),
 review: "",
 userScore: 10.0,
}
```
Also, restore this state when the form is submitted. Use setMovieDetails() in the handleAddMovie.

Step 2. Inside the first Grid item xs={12}: Add TextField with label "Movie name", and with name = "name", value as moviedetails.name, and onChange as handleInputChange. Also, give it a property fullWidth. Now you should be able to save movies with different titles.
[TextField](https://mui.com/material-ui/react-text-field/)

Step 3. Add DatePicker to the next Grid item xs={12}:
```
<LocalizationProvider dateAdapter={AdapterDayjs}>
 <DatePicker label="Release Date" onChange={handleDateChange} />
</LocalizationProvider>
```
Note that you need to import these: 
```
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
```
Now you should be able to add movies with specific dates.

Step 4. Inside Grid container alignItems="center" add Rating component. [Rating](https://mui.com/material-ui/react-rating/)
With properties: name as "userScore", value as movieDetails.userScore, onChange as handleRatingChange, precision as 0.5, max as 10, and size as large. 

Inside the same Grid add a span :
```
<span style={{ margin: "8px" }}>
 {movieDetails.userScore + "/10"}
</span>
```
Now you can choose the rating for movies added.

Step 5. Inside the last Grid item xs={12}:
Add another TextField for Reviews. Take an example from the name. After that, you should be able to add movie reviews.

### Extra React Assignments:
- Add validation that the name of the movie cannot be an empty string.
- The user should not be able to add movies with the same name.
- Add remove button to movies [Example](https://react.dev/learn/updating-arrays-in-state#removing-from-an-array)


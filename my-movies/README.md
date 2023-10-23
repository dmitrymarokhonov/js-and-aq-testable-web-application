# My Movies React app

Go to the project folder and run 
`npm install typescript`
and then
`npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Exercises
- [First steps](#first-steps)
- [Assignment 1: Opening AddMovie Dialog](#assignment-1)
- [Assignment 2: Updating Movies](#assignment-2)
- [Assignment 3: Creating the Movie Submission Form](#assignment)
- [Extra React Assignments](#extra-react-assignments)

## First steps
We have implemented a fake login page. Credentials are hardcoded in the LoginPage.tsx.

Can you find them? Try to change them, and log in.


## Assignment 1:
Open AddMovie Dialog when the "Add Movie" -button is pressed, and close if the "Cancel" -button or area outside of the dialog is clicked.

### Step 1. 
Import AddMovie and useState to MyMovies.tsx. Remember to add all necessary imports in other steps too.

### Step 2. 
Create a state variable dialogIsOpen using the useState hook. Initialize it with false.

### Step 3. 
Add the onClick property to the "Add Movie" -button, which will set the value of the dialogIsOpen to true. You can choose to use either inline arrow function syntax or create a separate handleClick function

### Step 4. 
Include the AddMovie component at the bottom of the MyMovies component's return section. Pass the following props to AddMovie:
 - open: dialogIsOpen state.
 - onClose: () => setDialogIsopen(false). Or create a separate handleClose function for this.

### Step 5. 
In AddMovie.tsx give open and onClose props to the Dialog component's properties with the same names. Give Cancel button onClick property "onClose".
 
### Step 6. 
Check that everything works.

## Assignment 2:
Update movies when submit is pressed, and close dialog. 

[Useful example](https://react.dev/learn/updating-arrays-in-state#adding-to-an-array)

### Step 1. 
In MyMovies.tsx create a new state variable called movies using the useState hook. Initialize it with initialMovies. Update the map function to use the movies state instead of initialMovies.

### Step 2. 
Implement a function addNewMovie that takes a new movie: IMovie object as an argument. Inside the function, use the setMovies function to update the movies state. Append the new movie to the existing list of movies.

### Step 3. 
Give the addNewMovie as a prop called onSubmit to the AddMovie component. Remove // in front of the onSubmit in the AddMovieProps in the AddMovie.tsx. Add this as a prop to the AddMovie in the AddMovie.tsx.

### Step 4. 
Create handleAddMovie that takes event: React.FormEvent<HTMLFormElement>. Call event.preventDefault() and then onSubmit(movieDetails). Use setMovieDetails to reset the state to its initial values. At last call onClose, so that the dialog closes after submission.

### Step 5. 
Add onSubmit property for the form, it should call handleAddMovie.

### Step 6. 
Check that if you now click "Add" -button it will add a new movie to the My Movies page.

## Assignment 3:
Create the form where users can send movies.

### Step 1. 
Add DatePicker to the first empty Grid item xs={12}:
```typescript
<LocalizationProvider dateAdapter={AdapterDayjs}>
 <DatePicker label="Release Date" onChange={handleDateChange} />
</LocalizationProvider>
```
Note that you need to import these: 
```typescript
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
```
Now you should be able to add movies with specific dates.

### Step 2. 
Inside Grid container alignItems="center" add Rating component. [Rating](https://mui.com/material-ui/react-rating/)

With properties: name as "userScore", value as movieDetails.userScore, onChange as handleRatingChange, precision as 0.5, max as 10, and size as large. 

Inside the same Grid add a span :
```
<span style={{ margin: "8px" }}>
 {movieDetails.userScore + "/10"}
</span>
```
Now you can choose the rating for movies added.

### Step 3. 
Inside the last Grid item xs={12}:

Add another TextField for Reviews. Take an example from the name. After that, you should be able to add movie reviews.

[TextField](https://mui.com/material-ui/react-text-field/)

## Extra React Assignments:
- Add remove button to movies [Example](https://react.dev/learn/updating-arrays-in-state#removing-from-an-array)
- Add validation that the name of the movie cannot be an empty string.
- The user should not be able to add movies with the same name.

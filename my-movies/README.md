# My Movies React app

   To get started, navigate to the my-movies project folder and run the following commands:

   ```shell
   npm install
   npm install @mui/material @emotion/react @emotion/styled
   npm start
   ```

   This will install the necessary dependencies and start the application.

   Open [http://localhost:3000](http://localhost:3000) to view the app in your web browser. The page will automatically reload when you make changes, and any lint errors will be displayed in the console.


**Exercises**
- [First steps](#first-steps)
- [Assignment 1: Opening AddMovie Dialog](#assignment-1-opening-addmovie-dialog)
- [Assignment 2: Updating Movies](#assignment-2-updating-movies)
- [Assignment 3: Creating the Movie Submission Form](#assignment-3-creating-the-movie-submission-form)
- [Extra React Assignments](#extra-react-assignments)

## First steps
We have implemented a fake login page. Credentials are hardcoded in `LoginPage.tsx`. You can find them and try changing them to log in.


## Assignment 1: Opening AddMovie Dialog

**Step 1**

Import `AddMovie` and `useState` in `MyMovies.tsx`. Remember to add all necessary imports in other steps too.

**Step 2**

Create a state variable `dialogIsOpen` using the `useState` hook and initialize it with `false`.

**Step 3**

Add the `onClick` property to the "Add Movie" button, which will set the value of `dialogIsOpen` to `true`. You can use the inline arrow function syntax or create a separate `handleClick` function.

**Step 4**

Include the `AddMovie` component at the bottom of the `MyMovies` component's return section. Pass the following props to `AddMovie`:
 - open: `dialogIsOpen` state.
 - onClose: `() => setDialogIsOpen(false)` or create a separate `handleClose` function for this.

**Step 5**

In `AddMovie.tsx`, give `open` and `onClose` props to the `Dialog` component's properties with the same names. Give the "Cancel" button an `onClick` property of "onClose".

**Step 6**

Check that everything works.

## Assignment 2: Updating Movies

**Step 1**

In `MyMovies.tsx`, create a new state variable called `movies` using the `useState` hook and initialize it with `initialMovies`. Update the `map` function to use the `movies` state instead of `initialMovies`.

**Step 2**

Implement a function called `addNewMovie` that takes a `movie: IMovie` as an argument. Inside the function, use the `setMovies` function to update the `movies` state by appending the new movie to the existing list of movies. [Useful example](https://react.dev/learn/updating-arrays-in-state#adding-to-an-array) (Read carefully, we *don't* want to use push!)

**Step 3**

Remove the `//` in front of `onSubmit` in the `AddMovieProps` in `AddMovie.tsx`. Add this as a prop to the `AddMovie` component in `AddMovie.tsx`. Also in the `MyMovies.tsx`, add the prop `onSubmit` to the `AddMovie` component, and assign the `addNewMovie` function for it. 

**Step 4**

Create a `handleAddMovie` function that takes `event: React.FormEvent<HTMLFormElement>`.Call `event.preventDefault()` and then `onSubmit(movieDetails)`. Use `setMovieDetails` to reset the state to its initial values. Finally, call `onClose` to close the dialog after submission.

**Step 5**

Add an `onSubmit` property for the `form`, it should call `handleAddMovie`.

**Step 6**

Check that clicking the "Add" button now adds a new movie to the My Movies page.

## Assignment 3: Creating the Movie Submission Form

**Step 1**

Add a `DatePicker` to the first empty `Grid item xs={12}`:
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

**Step 2**

[Rating](https://mui.com/material-ui/react-rating/)
Inside `Grid container alignItems="center"`, add a `Rating` component with the following properties:

```typescript
name="userScore"
value={movieDetails.userScore}
onChange={handleRatingChange}
precision={0.5}
max={10}
size="large"
```

Also, add a `span` for displaying the user score:

```typescript
<span style={{ margin: "8px" }}>
   {movieDetails.userScore + "/10"}
</span>
```
Now you can choose the rating for movies added.

**Step 3**

Inside the last `Grid item xs={12}`, add another `TextField` for Reviews. Refer to the `TextField` for the movie's name as an example. After that, you should be able to add movie reviews.

[TextField](https://mui.com/material-ui/react-text-field/)

## Extra React Assignments:
- Add remove button to movies [Example](https://react.dev/learn/updating-arrays-in-state#removing-from-an-array)
- Add validation that the name of the movie cannot be an empty string.
- The user should not be able to add movies with the same name.

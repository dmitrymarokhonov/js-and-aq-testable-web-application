# My Movies React app

Go to the project folder and run `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

TODO: Comment away onSubmit from the props interface in AddMovie?

## Assignment 1:
Open AddMovie Dialog when the "Add Movie" -button is pressed, and close if the "Cancel" -button is clicked.

Step 1. Import AddMovie and useState to MyMovies.tsx.

Step 2. Create a state variable isAddingMovie using the useState hook. Initialize it with false.

Step 3. Add the onClick property to the "Add Movie" -button, which will set the value of the isAddingMovie to true. 

Step 4. Include the AddMovie component at the bottom of the MyMovies component's return section. Pass the following props to AddMovie:
 - open: isAddingMovie state.
 - onClose: () => setAddingMovie(false). Or create a separate hadleClose function for this.

Step 5. Add open and onClose props on AddMovie.tsx, and give these as props to the Dialog component. Give Cancel button onClick property "onClose".
 
## Assignment 2:
Update movies when submit is pressed, and close dialog

Step 1. Create a new state variable called movies using the useState hook. Initialize it with initialMovies. Update the map function to use the movies state instead of initialMovies.

Step 2. Implement a function addNewMovie that takes a new movie object as an argument. Inside the function, use the setMovies function to update the movies state. Append the new movie to the existing list of movies.

Step 3. Give AddMovie the addNewMovie as a prop called onSubmit.

## Assignment 3:
Create a form that users can send movies.

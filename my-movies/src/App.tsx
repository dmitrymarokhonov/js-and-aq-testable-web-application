import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import WelcomePage from './views/WelcomePage';
import MyMovies from './views/MyMovies';
import AddMovie from './views/AddMovie';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/movies" element={<MyMovies />}/>
          <Route path="/addmovie" element={<AddMovie />}/>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

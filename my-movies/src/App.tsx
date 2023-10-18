import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import WelcomePage from './views/WelcomePage';
import MyMovies from './views/MyMovies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/movies" element={<MyMovies />}/>
          <Route path="/" element={<WelcomePage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

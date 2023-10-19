import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from './views/LoginPage';
import MyMovies from './views/MyMovies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/movies" element={<MyMovies />}/>
          <Route path="/" element={<LoginPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

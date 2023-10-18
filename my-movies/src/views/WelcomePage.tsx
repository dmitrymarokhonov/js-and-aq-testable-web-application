import React from "react";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/movies");
  }

  return (
    <>
      <h1>Welcome Page</h1>
      <button onClick={() => handleLoginClick()}>Login</button>
    </>
  );
};

export default WelcomePage;

import React from "react";
import NavBar from "./components/NavBar";
import GlobalStyle from "./globalStyles";
import MoviePage from "./components/MoviePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <MoviePage/>
    </>
  );
}

export default App;

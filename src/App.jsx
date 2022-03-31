import React from 'react';
import Navbar from 'components/NavBar';
import GlobalStyle from 'globalStyles';
import MoviePage from 'components/Pages/MoviePage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <MoviePage />
    </>
  );
}

export default App;

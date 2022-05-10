import React from 'react';
import Navbar from 'components/Navbar/NavBar';
import GlobalStyle from 'global-styles';
import MoviePage from 'components/MoviePage/MoviePage';

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

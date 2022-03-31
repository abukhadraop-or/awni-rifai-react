import { React, useEffect, useState } from 'react';
import MoviePageWrapper from 'components/MoviePageWrapper';
import CardsGridWrapper from 'components/CardsGridWrapper';
import Card from 'components/CardComponents/Card';
import Sort from 'components/sidebarComponents/Sort';
import getAllMovies from 'movie-api';

/**
 * The movie page
 * @returns {JSX}
 */
function MoviePage() {
  const [movies, setMoviesData] = useState([]);
  const [sortType, setSortType] = useState('');
  

  /**
   * make get request
   * @return {Promise<Object>} Promise fulfilled with response data.
   */

  /**
   * set the movies to the array fetched from getAllMovies
   */
  const setMovies = async () => {
    const fetchedMovies = await getAllMovies(1, sortType);
    setMoviesData(fetchedMovies);
  };

  useEffect(() => {
    setMovies();
  }, [sortType]);

  return (
    <MoviePageWrapper>
      <h2 className="main-header">Popular Movies</h2>
      <Sort
        handleFilter={setMoviesData}
        setSortType={setSortType}
        data={movies}
      />
      <CardsGridWrapper data={movies}>
        {movies?.map((movie) => (
          <Card key={movie.id} data={movie} />
        ))}
      </CardsGridWrapper>
    </MoviePageWrapper>
  );
}
export default MoviePage;

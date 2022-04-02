import { React, useEffect, useState } from 'react';
import MoviePageWrapper from 'components/MoviePageWrapper';
import CardsGridWrapper from 'components/CardsGridWrapper';
import Sort from 'components/sidebarComponents/sort/Sort';
import getAllMovies from 'movie-api';
import MovieCard from 'components/movieCard/MovieCard';

/**
 * Renders The whole Movie Page.
 * @return {JSX.Element}
 */
function MoviePage() {
  const [movies, setMoviesData] = useState([]);
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    /**
     * set the movies to the array fetched from getAllMovies.
     */
    const setMovies = async () => {
      const fetchedMovies = await getAllMovies(1, sortType);
      setMoviesData(fetchedMovies);
    };
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
          <MovieCard key={movie.id} data={movie} />
        ))}
      </CardsGridWrapper>
    </MoviePageWrapper>
  );
}
export default MoviePage;

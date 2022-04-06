import { React, useEffect, useState } from 'react';
import MoviePageWrapper from 'components/wrappers/moviePageWrapper/MoviePageWrapper';
import CardsGridWrapper from 'components/wrappers/cardsWrapper/CardsGridWrapper';
import Sort from 'components/sidebarComponents/sort/Sort';
import getAllMovies from 'api-calls/movie-api';
import MovieCard from 'components/movieCard/MovieCard';
import { MainHeader, MoreBtn } from 'components/Pages/moviePage.Styled';

/**
 * Renders The whole Movie Page.
 * 
 * @return {JSX.Element}
 */
function MoviePage() {

  const [movies, setMoviesData] = useState([]);
  const [sortType, setSortType] = useState('');
  const [paginate,setPaginate]=useState(1);

  useEffect(() => {

    /**
     * Set the movies to the array fetched from getAllMovies.
     */
    const setMovies = async () => {
      const fetchedMovies = await getAllMovies(paginate, sortType);
      setMoviesData((prev) => [...prev, ...fetchedMovies]);
    };

    setMovies();

  }, [sortType,paginate]);

  return (
    <MoviePageWrapper>
      <MainHeader>Popular Movies</MainHeader>
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
      <div />
      <MoreBtn onClick={()=>setPaginate(prev=>prev+1)}>Load More</MoreBtn>
    </MoviePageWrapper>
  );
}

export default MoviePage;

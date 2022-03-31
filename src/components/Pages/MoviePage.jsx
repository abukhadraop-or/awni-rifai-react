import { React, useEffect, useState } from "react";
import MoviePageWrapper from "components/MoviePageWrapper";
import CardsGridWrapper from "components/CardsGridWrapper";
import Card from "components/CardComponents/Card";
import Sort from "components/sidebarComponents/Sort";

/**
 * The movie page
 * @returns {JSX}
 */
function MoviePage() {
  const [movies, setMoviesData] = useState([]);
  const [sortType, setSortType] = useState("");
  const [sort, setSort] = useState("popularity.asc");

  /**
   * make get request
   * @return {Promise<Object>} Promise fulfilled with response data.
   */
  const fetchData = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=a6ce94f05ccb22f0236d41a4d037e960&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setMoviesData(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [sortType]);

  useEffect(() => {
    setSort(sortType);
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

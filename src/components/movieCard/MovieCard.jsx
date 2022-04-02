import React from 'react';
import CardImage from 'components/movieCard/cardImage/CardImage';
import PropTypes from 'prop-types';
import CardContent from 'components/movieCard/cardContent/CardContent';
import {
  ImageContainer,
  MovieCardContainer,
} from 'components/movieCard/movie-card.styled';
import ProgressBar from 'components/movieCard/progressBar/ProgressBar';

const BACKUP_IMAGE_PATH = process.env.React_APP_BACKUP_IMAGE_PATH;
/**
 * Show Movie Card
 * @param {object} props
 * @param {object} props.data Movie details fetched from API.
 * @return {JSX.Element}
 */
function MovieCard({ data }) {  
  return (
    <MovieCardContainer>
      <ImageContainer>
        <CardImage
          src={
            data.poster_path
              ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`
              : BACKUP_IMAGE_PATH
          }
          alt={data.title}
        />
        <ProgressBar voteAverage={data.vote_average} />
      </ImageContainer>
      <CardContent
        title={data.title}
        releaseDate={data.release_date}
        description={data.overview?.slice(0, 60)}
      />
    </MovieCardContainer>
  );
}
MovieCard.propTypes = {
  data: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }),
};
MovieCard.defaultProps = {
  data: {},
};
export default MovieCard;

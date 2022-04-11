import { React  , useState} from 'react';
import CardImage from 'components/CardImage/CardImage';
import PropTypes from 'prop-types';
import CardContent from 'components/CardContent/CardContent';
import {
  ImageContainer,
  MovieCardContainer,
  Overlay,
} from 'components/MovieCard/movie-card.styled';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import MoreIcon from 'components/MoreIcon/MoreIcon';
import MoreList from 'components/MoreList/MoreList';
import { backupImagePath } from 'global-variables/envConstants';
import useClickOutside from 'custom-hooks/click-outside';

const BACKUP_IMAGE_PATH = backupImagePath;

/**
 * Show Movie Card.
 * 
 * @param {Object} props
 * @param {Object} props.data Movie details fetched from API.
 * 
 * @return {JSX.Element}
 */
function MovieCard({ data }) {
  const [showMore, setShowMore] = useState(false);
  const domeNode=useClickOutside(()=>setShowMore(false));
  
  return (
    <MovieCardContainer data-testid="movie card" ref={domeNode}>
      {showMore ? <Overlay onClick={() => setShowMore(false)} /> : ''}
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
      <MoreIcon setShowMore={setShowMore}/>
      {showMore ? <MoreList /> : ''}
    </MovieCardContainer>
  );
}

MovieCard.propTypes = {
  data: PropTypes.shape({

    id: PropTypes.number,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,

  }),
};

MovieCard.defaultProps = {
  data: {},
};

export default MovieCard;

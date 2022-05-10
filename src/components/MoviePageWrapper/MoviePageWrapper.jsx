import React from 'react';
import StyledMoviePageWrapper from 'components/MoviePageWrapper/movie-page-wrapper.styled';
import PropTypes from 'prop-types';

/**
 *  A wrapper for the movie page.
 * 
 * @param {Object} props
 * @param {JSX} children
 * 
 * @return {JSX.Element}
 */
function MoviePageWrapper({ children }) {
  return <StyledMoviePageWrapper>{children}</StyledMoviePageWrapper>;
}

MoviePageWrapper.defaultProps = {
  children: null,
};

MoviePageWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
export default MoviePageWrapper;

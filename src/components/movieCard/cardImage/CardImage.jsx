import React from 'react';
import PropTypes from 'prop-types';
import StyledCardImage from 'components/movieCard/cardImage/card-image.styled';

/**
 * Display Card Image.
 * 
 * @param {Object} props
 * @param {string} props.src Image url.
 * @param {string} props.alt Alternative text for images usually movie title.
 * 
 * @return {JSX.Element}
 */

function CardImage({ src, alt }) {
  return <StyledCardImage src={src} alt={alt} />;
}

CardImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
};

CardImage.defaultProps = {
  alt: '',
  src: '',
};

export default CardImage;

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledCardContent,
  Paragraph,
  ReleaseDate,
  SecondaryHeader,
} from 'components/CardContent/card-conent.styled';

/**
 * Display Card content.
 * 
 * @param {Object} props
 * @param {string} props.title  Movie title fetched from the data object.
 * @param {string} props.releaseDate Movie release_date fetched from the data object.
 * @param {string} props.description Movie description fetched from the data object.
 * 
 * @return {JSX.Element}
 */
function CardContent({ title, releaseDate, description }) {
  return (
    <StyledCardContent>
      <SecondaryHeader>{title}</SecondaryHeader>
      <ReleaseDate>
        {releaseDate !== '' ? releaseDate : 'There is no release date'}
      </ReleaseDate>
      <Paragraph>{description}</Paragraph>
    </StyledCardContent>
  );
}

CardContent.propTypes = {
  description: PropTypes.string,
  releaseDate: PropTypes.string,
  title: PropTypes.string,
};

CardContent.defaultProps = {
  description: '',
  releaseDate: '',
  title: '',
};

export default CardContent;

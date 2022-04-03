import React from 'react';
import PropTypes from 'prop-types';
import StyledCardsGridWrapper from 'components/wrappers/cardsWrapper/cardsWrapper.styled';

/**
 * A wrapper for all the cards.
 * @param {object} props
 * @param {JSX.Element} props.children
 * @return {JSX.Element}
 */
function CardsGridWrapper({ children }) {
  return <StyledCardsGridWrapper>{children}</StyledCardsGridWrapper>;
}
CardsGridWrapper.defaultProps = {
  children: null,
};
CardsGridWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default CardsGridWrapper;

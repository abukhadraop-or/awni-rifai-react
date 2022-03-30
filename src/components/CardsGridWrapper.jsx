import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCardsGridWrapper = styled.div`
  @media (min-width: 820px) {
    margin-left: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-gap: 15px;
  }
`;
/**
 * a wrapper for all the cards
 * @param {JSX} children 
 * @returns {JSX}
 */
function CardsGridWrapper({ children}) {
    
    
  return <StyledCardsGridWrapper>{children}</StyledCardsGridWrapper>;
}
CardsGridWrapper.defaultProps = {
  children: null,
};
CardsGridWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default CardsGridWrapper;

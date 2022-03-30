import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMoviePageWrapper = styled.main`
padding: 9vh 2rem;
@media (min-width: 820px) {
    padding:7rem 5rem;
    .main-header{
        grid-area: h1;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 600;
        font-size: 1.4rem;
    }
    display: grid;
    grid-template-columns: 20% 1fr;
    grid-template-rows: auto;
    grid-template-areas:'h1 h1';

 
    
  }
`;
/**
 *  a wrapper for the movie page
 * @param {JSX} children 
 * @returns {JSX}
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

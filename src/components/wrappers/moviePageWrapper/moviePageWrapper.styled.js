import styled from "styled-components";

const StyledMoviePageWrapper = styled.main`
padding: 9vh 2rem;
@media (min-width: 820px) {
    padding:7rem 5rem;
    display: grid;
    grid-template-columns: minmax(200px,1fr) 4fr;
    grid-template-rows: auto;
    grid-template-areas:'h1 h1';
  }
`;
export default StyledMoviePageWrapper;
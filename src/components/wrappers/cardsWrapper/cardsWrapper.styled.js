import styled from "styled-components";

const StyledCardsGridWrapper = styled.div`
  @media (min-width: 820px) {
    margin-left: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-template-rows: auto;
    grid-gap: 3rem;
  }
`;
export default StyledCardsGridWrapper;
import styled from 'styled-components';
import viewPorts from 'global-variables/viewPorts';

const StyledCardsGridWrapper = styled.div`

  @media (min-width: ${viewPorts.mobile}) {
    margin-left: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-template-rows: auto;
    grid-gap: 3rem;
  }

  
`;
export default StyledCardsGridWrapper;

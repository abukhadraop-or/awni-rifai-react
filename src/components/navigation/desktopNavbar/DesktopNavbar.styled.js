import styled from 'styled-components';
import viewPorts from 'global-constants/viewPorts';

const StyledDesktopNavbar = styled.div`
  display: none;

  @media (min-width: ${viewPorts.desktop}) {
    display: initial;
    align-items: center;
    display: flex;
    height: 100%;
    padding: 0 16rem;
  }
`;
export default StyledDesktopNavbar;

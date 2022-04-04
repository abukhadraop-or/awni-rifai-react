import styled from 'styled-components';

const StyledNavBar = styled.nav`
  width: 100vw;
  background-color: #032540;
  height: 4rem;
  position: fixed;
  top: 0;
  right: 0;
  padding: 0.6rem 0;
  font-size: 0.8rem;
  z-index: 50;
  display: ${({ scrolled }) => (scrolled === 'down' ? 'none' : 'block')};
`;
export default StyledNavBar;

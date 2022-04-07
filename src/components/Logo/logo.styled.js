import styled from 'styled-components';

 const StyledLogo = styled.img`
  aspect-ratio: auto 55/40;
  height: 2rem;
  margin: ${({ isDesktop }) => (isDesktop ? '1.5rem' : '0 auto')};
  width: ${({ isDesktop }) => (isDesktop? '9.5rem' : '5.5rem')};
`;
export default StyledLogo;
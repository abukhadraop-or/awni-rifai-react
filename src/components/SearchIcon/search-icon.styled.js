import styled from "styled-components";

const StyledSearchIcon = styled.i`
  color: lightblue;
  font-size: ${({ isDesktop }) => (!isDesktop ? '1rem' : '1.3rem')};
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default StyledSearchIcon
import styled from "styled-components";

export const Logo = styled.img`
  aspect-ratio: auto 55/40;
  height: 4rem;
  margin: ${({ margin }) => margin==="Desktop"?"1rem":"0 auto"};
  width: ${({ width }) => width==="Desktop"?'11.2rem':'5.5rem'};
`;
export const SearchIcon = styled.i`
  color: lightblue;
  font-size: ${({size})=>size==="Mobile"?'1rem':'1.3rem'};
  margin-left: 1rem;
  margin-right: 1rem;
`;
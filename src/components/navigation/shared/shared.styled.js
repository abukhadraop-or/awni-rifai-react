import styled from "styled-components";

export const Logo = styled.img`
  aspect-ratio: auto 55/40;
  height: 2rem;
  margin: ${({ margin }) => margin==="Desktop"?"1rem":"0 auto"};
  width: ${({ width }) => width==="Desktop"?'8rem':'5.5rem'};
`;
export const SearchIcon = styled.i`
  color: lightblue;
  font-size: ${({size})=>size==="Mobile"?'1rem':'1.3rem'};
  margin-left: 1rem;
  margin-right: 1rem;
`;
export const MoreIconContainer=styled.div`

`;
export const MoreIcon=styled.i`
position: absolute;
top: 10px;
right: 10px;
font-size: .8rem;
background-color: #fff;
padding:.2rem;
border-radius: 50%;
opacity: 0.4;
`;
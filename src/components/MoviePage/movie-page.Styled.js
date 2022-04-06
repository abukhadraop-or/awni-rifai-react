import styled from 'styled-components';

export const MainHeader = styled.h2`
  grid-area: h1;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
`;

export const MoreBtn = styled.button`
  margin: auto;
  margin-top: 1.5rem;
  width: 95%;
  padding: .5rem 2rem;
  font-size: 1.8rem;
  color: white;
  background-color: rgb(1,180,228);
  border-radius: 8px;
  font-weight: 600;

  :hover{
    color: black;
    cursor: pointer;
  }
`;

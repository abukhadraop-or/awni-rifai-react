import styled from 'styled-components';
import viewPorts from 'global-variables/viewPorts';

export const Logo = styled.img`
  aspect-ratio: auto 55/40;
  height: 2rem;
  margin: ${({ margin }) => (margin === 'Desktop' ? '1.5rem' : '0 auto')};
  width: ${({ width }) => (width === 'Desktop' ? '9.5rem' : '5.5rem')};
`;

export const SearchIcon = styled.i`
  color: lightblue;
  font-size: ${({ size }) => (size === 'Mobile' ? '1rem' : '1.3rem')};
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const MoreIcon = styled.i`
  display: none;

  @media (min-width: ${viewPorts.mobile}) {
    display: initial;
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    font-size: 0.8rem;
    background-color: #fff;
    padding: 0.2rem;
    border-radius: 50%;
    opacity: 0.4;
    
    :hover {
      opacity: 1;
      background-color: darkblue;
      cursor: pointer;
    }
  }
`;

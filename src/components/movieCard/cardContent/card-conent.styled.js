import styled from 'styled-components';
import viewPorts from 'global-variables/viewPorts';

export const StyledCardContent = styled.div`
  margin-bottom: 2rem;
  margin: 1rem;
`;
export const SecondaryHeader = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
`;
export const ReleaseDate = styled.span`
  color: grey;
  font-size: 0.9rem;
`;
export const Paragraph = styled.p`
  font-size: 0.9rem;
  margin-top: 0.8rem;
  word-break: normal;
  @media (min-width: ${viewPorts.mobile}) {
    display: none;
  }
`;

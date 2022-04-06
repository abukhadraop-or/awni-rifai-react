import styled from 'styled-components';
import viewPorts from 'global-variables/viewPorts';

export const ProgressBarContainer = styled.div`
  display: none;

  @media (min-width: ${viewPorts.mobile}) {
    position: absolute;
    bottom: -10px;
    display: initial;
    left: 5px;
    margin: 0;
    padding: 0;
    width: 20%;
    .CircularProgressbar-path {
      stroke: ${({ isGreen }) => (isGreen? '#21d07a' : '#d2d531')};
    }
  }
`;

export const progressBarStyles = {
  background: {
    fill: 'black',
  },
  text: {
    fill: 'white',
    fontSize: '35px',
    fontWeight: 'bold',
  },
  trail: {
    stroke: 'grey',
  },
};

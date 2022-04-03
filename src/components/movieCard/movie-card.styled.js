import styled from 'styled-components';
import viewPorts from 'global-constants/viewPorts';

export const MovieCardContainer = styled.div`
  border-left: .1rem;
  border-radius: 0.4rem;
  border: 1px solid #00000033;
  box-shadow: 0 0.2rem 0.8rem #0000001a;
  display: flex;
  height: fit-content;
  max-height: 16rem;
  margin-top: 1rem;
  position: relative;
  width: 100%;
  @media (min-width: ${viewPorts.mobile}) {
    display: block;
    height: auto;
    max-height: fit-content;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  min-width: 7rem;
  width: 20%;
  @media (min-width: ${viewPorts.mobile}) {
    width: 100%;
    min-width: auto;
  }
`;

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
      stroke: ${({ green }) => (green === 'true' ? '#21d07a' : '#d2d531')};
    }
  }
`;
export const Overlay=styled.div`
 background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(20px);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 10;
`;

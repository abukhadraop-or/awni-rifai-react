import styled from 'styled-components';
import viewPorts from 'global-variables/viewPorts';

export const StyledMobileNavBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 200;

  @media (min-width: ${viewPorts.desktop}) {
    display: none;
  }
`;
export const UserIcon = styled.i`
  color: white;
`;
export const BurgerIcon = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
export const BurgerInnerDiv = styled.div`
  width: 1.5rem;
  height: 4px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 4px;
    background: #ffffff;
    opacity: 0.9;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
  }
  ::before {
    transform: translateY(-6px);
  }
  ::after {
    transform: translateY(6px);
  }
`;
export const UserAndSearchWrapper = styled.div``;

export const MobileNavigationMenuWrapper = styled.div`
  background-color: #203953;
  position: absolute;
  color: black;
  height: 92.5vh;
  left: 0;
  padding: 20px;
  top: 7.5vh;
  transition: display 4s;
  width: 90%;
  z-index: 100;

  @keyframes translateRight {
    0% {
      left: -100vw;
    }
    25% {
      left: -75vw;
    }
    50% {
      left: -50vw;
    }
    75% {
      left: -25vw;
    }
    100% {
      left: 0;
    }
  }
  @keyframes translateLeft {
    0% {
      left: 0;
      display: block;
      opacity: 1;
    }
    25% {
      left: -25vw;
      display: block;
      opacity: 1;
    }
    50% {
      left: -50vw;
      display: block;
      opacity: 1;
    }
    75% {
      left: -75vw;
      display: block;
      opacity: 1;
    }
    100% {
      left: -100vw;
      display: block;
      opacity: 1;
    }
  }
  animation: ${({ showNavMenu }) =>
      !showNavMenu ? 'translateLeft' : 'translateRight'}
    0.3s linear;
  left: ${({ showNavMenu }) => (showNavMenu ? '0' : '-100vw')};
`;

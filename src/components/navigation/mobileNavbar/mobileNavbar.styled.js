import styled from 'styled-components';

export const StyledMobileNavBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: relative;
  z-index: 200;

  @media (min-width: 1181px) {
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
  border: 3px solid white;
`;
export const BurgerInnerDiv = styled.div`
  width: 20px;
  height: 4px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 4px;
    background: rgba(255, 255, 255, 0.9);
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
  height: 93vh;
  left: 0;
  padding: 20px;
  top: 7vh;
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
    }
    25% {
      left: -25vw;
      display: block;
    }
    50% {
      left: -50vw;
      display: block;
    }
    75% {
      left: -75vw;
      display: block;
    }
    100% {
      left: -100vw;
      display: block;
    }
  }
  animation: ${({ showNavMenu }) =>
      !showNavMenu ? 'translateLeft' : 'translateRight'}
    0.3s linear;
  left: ${({ showNavMenu }) => (showNavMenu ? '0' : '-100vw')};
`;

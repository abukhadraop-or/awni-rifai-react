import styled from 'styled-components';

export const StyledSidebar = styled.nav`
  position: fixed;
  z-index: 10;
  width: 15rem;
  height: 97%;
  background-color: #262628;
  border-radius: 1rem;
  @keyframes translateRight {
    0% {
      transform: translateX(-16rem);
    }
    25% {
      transform: translateX(-12rem);
    }
    50% {
      transform: translateX(-8rem);
    }
    75% {
      transform: translateX(-4rem);
    }
    100% {
      transform: translateX(0rem);
    }
  }

  @keyframes translateLeft {
    0% {
      opacity: 1;
      transform: translateX(0rem);
    }
    25% {
      opacity: 1;
      transform: translateX(-4rem);
    }
    50% {
      opacity: 1;
      transform: translateX(-8rem);
    }
    75% {
      opacity: 1;
      transform: translateX(-12rem);
    }
    100% {
      opacity: 1;
      transform: translateX(-16rem);
    }
  }

  @media (max-width: 576px) {
    transform: ${({ showSidebar }) =>
      showSidebar === 'translateRight'
        ? 'translateX(0rem)}'
        : 'translateX(-16rem)'};
    overflow-x: hidden;

    opacity: ${({ showSidebar }) => (showSidebar ? '1' : '0')};
    overflow-x: hidden;

    animation: ${({ showSidebar }) =>showSidebar}
      0.3s linear;
  }
`;

export const LogoImage = styled.img`
  width: 4rem;
`;

export const StyledSpacer = styled.hr`
  flex-shrink: 0;
  border-top: 0px solid rgba(0, 0, 0, 0.08);
  border-right: 0px solid rgba(0, 0, 0, 0.08);
  border-left: 0px solid rgba(0, 0, 0, 0.08);
  height: 0.0625rem;
  margin: 0.01rem 0px;
  border-bottom: none;
  opacity: 0.25;
  background-color: transparent;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgb(255, 255, 255),
    rgba(255, 255, 255, 0)
  ) !important;
`;

export const BurgerIconContainer = styled.div`
display: none;
@media (max-width: 576px) {
    display: initial;
}
`;

import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import LeftNavigationMenu  from "./LeftNavigationMenu";
import RightNavigationMenu from "./RightNavigationMenu";

const StyledDesktopNavbar = styled.div`
height: 100%;
  display: flex;
  align-items: center;
  padding: 0 200px;
  @media (max-width: 1181px) {
    display: none;
  }
`;
/**
 * Desktop Navbar container
 * @returns {JSX}
 */
function DesktopNavbar() {
  return (
    <StyledDesktopNavbar>
      <Logo
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        width="125px"
        margin="0"
      />
      <LeftNavigationMenu marginLeft="16px" marginRight="auto"/>
      <RightNavigationMenu/>
      


    </StyledDesktopNavbar>
  );    
}
export default DesktopNavbar;

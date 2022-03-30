import React from "react";
import styled from "styled-components";
import DesktopNavbar from "./navigation/DesktopNavbar";
import MobileNavbar from "./navigation/MobileNavbar";

const StyledNavBar = styled.nav`
  width: 100vw;
  background-color: #032540;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.6rem 0;
  font-size: 0.8rem;
`;
/**
 * 
 * @returns {JSx}
 */
function NavBar() {
  return (
    <StyledNavBar>
      <MobileNavbar />
      <DesktopNavbar/>
    </StyledNavBar>
  );
}

export default NavBar;

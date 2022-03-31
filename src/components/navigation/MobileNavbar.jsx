import React, { useState } from "react";
import styled from "styled-components";
import BurgerIcon from "components/navigation/BurgerIcon";
import SearchIcon from "components/icons/SearchIcon";
import UserIcon from "components/icons/UserIcon";
import Logo from "components/navigation/Logo";
import UserAndSearchWrapper from "components/navigation/UserAndSearchWrapper";
import MobileNavigationMenuWrapper from "components/navigation/MobileNavigationMenuWrapper";
import MobileMenu from "components/navigation/MobileMenu";

const StyledMobileNavBar = styled.div`
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
/**
 * mobile Navbar container
 * @returns {JSX}
 */
function MobileNavbar() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <StyledMobileNavBar>
      <BurgerIcon setShowNavMenu={setShowNavMenu} />
      <Logo
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        width="55px"
        margin="0 auto"
      />
      <UserAndSearchWrapper>
        <UserIcon color="white" />
        <SearchIcon color="white" />
      </UserAndSearchWrapper>
      <MobileNavigationMenuWrapper showNavMenu={showNavMenu}>
        <MobileMenu />
      </MobileNavigationMenuWrapper>
    </StyledMobileNavBar>
  );
}
export default MobileNavbar;

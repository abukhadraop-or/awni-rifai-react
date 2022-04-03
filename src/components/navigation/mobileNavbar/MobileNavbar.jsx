import React, { useState } from 'react';
import MobileMenu from 'components/navigation/mobileNavbar/mobileMenu/MobileMenu';
import {
  StyledMobileNavBar,
  UserIcon,
  BurgerIcon,
  BurgerInnerDiv,
  UserAndSearchWrapper,
  MobileNavigationMenuWrapper,
} from 'components/navigation/mobileNavbar/mobileNavbar.styled';
import { Logo, SearchIcon } from 'components/navigation/shared/shared.styled';

/**
 * Mobile Navbar container.
 * @return {JSX.Element}
 */
function MobileNavbar() {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <StyledMobileNavBar>
      <BurgerIcon onClick={() => setShowNavMenu((prev) => !prev)}>
        <BurgerInnerDiv />
      </BurgerIcon>
      <Logo
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        width="Mobile"
        margin="Mobile"
      />
      <UserAndSearchWrapper>
        <UserIcon className="fa fa-user" aria-hidden="true" />
        <SearchIcon
          size="Mobile"
          className="fas fa-search"
          aria-hidden="true"
        />
      </UserAndSearchWrapper>
      <MobileNavigationMenuWrapper showNavMenu={showNavMenu}>
        <MobileMenu />
      </MobileNavigationMenuWrapper>
    </StyledMobileNavBar>
  );
}
export default MobileNavbar;

import React, { useState } from 'react';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import {
  StyledMobileNavBar,
  UserIcon,
  BurgerIcon,
  BurgerInnerDiv,
  UserAndSearchWrapper,
  MobileNavigationMenuWrapper,
} from 'components/MobileNavbar/mobile-navbar.styled';
import Logo from 'components/Logo/Logo';
import SearchIcon from 'components/SearchIcon/SearchIcon';

/**
 * Mobile Navbar container.
 *
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
        isDesktop={false}
      />
      <UserAndSearchWrapper>
        <UserIcon className="fa fa-user" aria-hidden="true" />
        <SearchIcon isDesktop={false} />
      </UserAndSearchWrapper>
      {showNavMenu ? (
        <MobileNavigationMenuWrapper showNavMenu={showNavMenu}>
          <MobileMenu />
        </MobileNavigationMenuWrapper>
      ) : (
        ''
      )}
    </StyledMobileNavBar>
  );
}
export default MobileNavbar;

import React from 'react';
import LeftNavigationMenu from 'components/LeftNavigation/LeftNavigationMenu';
import RightNavigationMenu from 'components/RightNavigation/RightNavigationMenu';
import StyledDesktopNavbar from 'components/DesktopNavbar/desktop-navbar.styled';
import Logo from 'components/Logo/Logo';

/**
 * Desktop Navbar container.
 * 
 * @return {JSX.Element}
 */
function DesktopNavbar() {
  return (
    <StyledDesktopNavbar>
      <Logo
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        isDesktop
        alt="Website Logo"
      />
      <LeftNavigationMenu />
      <RightNavigationMenu />
    </StyledDesktopNavbar>
  );
}

export default DesktopNavbar;

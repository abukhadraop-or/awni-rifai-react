import React from 'react';
import LeftNavigationMenu from 'components/navigation/desktopNavbar/leftNavigation/LeftNavigationMenu';
import RightNavigationMenu from 'components/navigation/desktopNavbar/rightNavigation/RightNavigationMenu';
import StyledDesktopNavbar from 'components/navigation/desktopNavbar/DesktopNavbar.styled';
import { Logo } from 'components/navigation/shared/shared.styled';

/**
 * Desktop Navbar container.
 * @returns {JSX.Element}
 */
function DesktopNavbar() {
  return (
    <StyledDesktopNavbar>
      <Logo
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        width="Desktop"
        margin="Desktop"
        alt="Website Logo"
      />
      <LeftNavigationMenu />
      <RightNavigationMenu />
    </StyledDesktopNavbar>
  );
}
export default DesktopNavbar;

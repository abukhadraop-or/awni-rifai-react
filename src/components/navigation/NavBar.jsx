import {React} from 'react';
import StyledNavBar from 'components/navigation/navbar.styled';
import DesktopNavbar from 'components/navigation/desktopNavbar/DesktopNavbar';
import MobileNavbar from 'components/navigation/mobileNavbar/MobileNavbar';



/**
 * Show Nav bar Element.
 * @return {JSX.Element}
 */
function NavBar() {

  return (
    <StyledNavBar>
      <MobileNavbar />
      <DesktopNavbar />
    </StyledNavBar>
  );
}

export default NavBar;

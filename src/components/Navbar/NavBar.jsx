import { React, useEffect, useState } from 'react';
import StyledNavBar from 'components/Navbar/navbar.styled';
import DesktopNavbar from 'components/DesktopNavbar/DesktopNavbar';
import MobileNavbar from 'components/MobileNavbar/MobileNavbar';
import debounce from 'helper-functions/debounce';

/**
 * Shows Nav bar Element.
 * 
 * @return {JSX.Element}
 */
function NavBar() {

  const [scrollVerticalPosition, setScrollVerticalPosition] = useState(0);
  const [scrolled, setScrolled] = useState('not scrolled');

  /**
   * Handle scroll event by setting scroll state to up or down.
   */
  const scrollHandler = () => {
    setScrollVerticalPosition(window.scrollY);
    if (window.scrollY > scrollVerticalPosition) setScrolled('down');
    else {
      setScrolled('up');
    }
  };

  const processChange = debounce(() => scrollHandler());

  useEffect(() => {
    window.addEventListener('scroll', processChange);
  }, [scrollVerticalPosition]);

  return (
    <StyledNavBar scrolled={scrolled}>
      <MobileNavbar />
      <DesktopNavbar />
    </StyledNavBar>
  );
}

export default NavBar;

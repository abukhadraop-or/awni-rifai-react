import { React, useEffect, useState } from 'react';
import StyledNavBar from 'components/navigation/navbar.styled';
import DesktopNavbar from 'components/navigation/desktopNavbar/DesktopNavbar';
import MobileNavbar from 'components/navigation/mobileNavbar/MobileNavbar';
import debounce from 'helper-functions/helperFunctions';

/**
 * Show Nav bar Element.
 * @return {JSX.Element}
 */
function NavBar() {
  const [y, setY] = useState(0);
  const [scrolled, setScrolled] = useState('not scrolled');
  const scrollHandler = () => {
    setY(window.scrollY);
    if (window.scrollY > y) setScrolled('down');
    else {
      setScrolled('up');
    }
  };
  const processChange = debounce(() => scrollHandler());

  useEffect(() => {
    window.addEventListener('scroll', processChange);
  }, [y]);
  return (
    <StyledNavBar scrolled={scrolled}>
      <MobileNavbar />
      <DesktopNavbar />
    </StyledNavBar>
  );
}

export default NavBar;

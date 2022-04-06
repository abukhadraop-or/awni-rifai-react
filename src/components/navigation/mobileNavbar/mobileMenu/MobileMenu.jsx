import React from 'react';
import {
  StyledMobileMenu,
  MainItem,
  SecondaryItem,
} from 'components/navigation/mobileNavbar/mobileMenu/mobileMenu.styled';

const mainMobileMenuItems = [
  { mobileMenuTitle: 'Movies' },
  { mobileMenuTitle: 'Tv Shows' },
  { mobileMenuTitle: 'People' },
];

const secondaryMobileMenuItems = [
  { mobileMenuTitle: 'Contribution Bible' },
  { mobileMenuTitle: 'Apps' },
  { mobileMenuTitle: 'Discussions' },
  { mobileMenuTitle: 'Leaderboard' },
  { mobileMenuTitle: 'Contribute' },
  { mobileMenuTitle: 'API' },
  { mobileMenuTitle: 'Support' },
  { mobileMenuTitle: 'About' },
];

/**
 * Mobile menu container.
 * 
 * @return {JSX.Element}
 */
function MobileMenu() {
  return (
    <StyledMobileMenu>
      {mainMobileMenuItems.map((item) => (
        <MainItem key={Math.random()}>{item.mobileMenuTitle}</MainItem>
      ))}
      {secondaryMobileMenuItems.map((item) => (
        <SecondaryItem key={Math.random()}>
          {item.mobileMenuTitle}
        </SecondaryItem>
      ))}
    </StyledMobileMenu>
  );
}
export default MobileMenu;

import React from 'react';
import {
  StyledItemList,
  StyledRightNavigationMenu,
  PlusIcon,
  LanguageIcon,
} from 'components/navigation/desktopNavbar/rightNavigation/rightNavigation.styled';
import { SearchIcon } from 'components/navigation/shared/shared.styled';

/**
 * Show Right Navigation Menu.
 * 
 * @return {JSX.Element}
 */
function RightNavigationMenu() {
  return (
    <StyledRightNavigationMenu>
      <PlusIcon className="fas fa-plus" />
      <LanguageIcon>En</LanguageIcon>
      <StyledItemList>Login</StyledItemList>
      <StyledItemList>Join TMDB</StyledItemList>
      <SearchIcon className="fas fa-search" aria-hidden="true" />
    </StyledRightNavigationMenu>
  );
}

export default RightNavigationMenu;

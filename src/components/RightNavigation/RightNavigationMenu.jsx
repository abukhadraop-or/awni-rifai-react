import React from 'react';
import {
  StyledItemList,
  StyledRightNavigationMenu,
  PlusIcon,
  LanguageIcon,
} from 'components/RightNavigation/right-navigation.styled';
import SearchIcon from 'components/SearchIcon/SearchIcon';

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
      <SearchIcon isDesktop/>
    </StyledRightNavigationMenu>
  );
}

export default RightNavigationMenu;

import React from "react";
import styled from "styled-components";
import LanguageIcon from "components/icons/LanguageIcon";
import PlusIcon from "components/icons/PlusIcon";
import SearchIcon from "components/icons/SearchIcon";

const StyledItemList = styled.li`
  color: white;
  font-weight: 600;
  text-transform: capitalize;
  margin-right: 1.2rem;
`;
const StyledRightNavigationMenu = styled.div`
  margin-right: 0;
  margin-left: auto;
  color: white;
  list-style-type: none;
  display: flex;
  align-items: center;
`;
/**
 *
 * @return {JSX.Element}
 */
function RightNavigationMenu() {
  return (
    <StyledRightNavigationMenu>
      <PlusIcon marginRight="1.2rem" color="white" />
      <LanguageIcon marginRight="1.2rem" lan="en" />
      <StyledItemList>Login</StyledItemList>
      <StyledItemList>Join TMDB</StyledItemList>
      <SearchIcon marginRight="1rem" color="lightblue" />
    </StyledRightNavigationMenu>
  );
}
export default RightNavigationMenu;

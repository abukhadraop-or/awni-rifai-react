import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NavigationItem from "./NavigationItem";

const menuItems = [
  {
    menuTitle: "movies",
    menuItemChildren: [
      { childrenTitle: "popular", link: "" },
      { childrenTitle: "Now Playing", link: "" },
      { childrenTitle: "Upcoming", link: "" },
      { childrenTitle: "Top Rated", link: "" },
    ],
  },
  {
    menuTitle: "TV Shows",
    menuItemChildren: [
      { childrenTitle: "Popular", link: "" },
      { childrenTitle: "Airing Today", link: "" },
      { childrenTitle: "On TV", link: "" },
      { childrenTitle: "Top Rated", link: "" },
    ],
  },
  {
    menuTitle: "People",
    menuItemChildren: [{ childrenTitle: "Popular People", link: "" }],
  },
  {
    menuTitle: "More",
    menuItemChildren: [
      { childrenTitle: "Discussions", link: "" },
      { childrenTitle: "Leaderboard", link: "" },
      { childrenTitle: "Support", link: "" },
      { childrenTitle: "API", link: "" },
    ],
  },
];

const StyledLeftNavigationMenu = styled.ul`
  display: flex;
  margin-right: ${({marginRight})=>marginRight};
  margin-left: ${({marginLeft})=>marginLeft};
  list-style-type: none;
`;
function LeftNavigationMenu({ marginRight, marginLeft }) {
  return (
    <StyledLeftNavigationMenu marginLeft={marginLeft} marginRight={marginRight}>
      {menuItems.map((item) => (
        <NavigationItem
          menuTitle={item.menuTitle}
          menuItemChildren={item.menuItemChildren}
          key={Math.random()}
        />
      ))}
    </StyledLeftNavigationMenu>
  );
}
LeftNavigationMenu.propTypes = {
  marginRight: PropTypes.string,
  marginLeft: PropTypes.string,
};
LeftNavigationMenu.defaultProps = {
  marginLeft: "",
  marginRight: "",
};
export default LeftNavigationMenu;

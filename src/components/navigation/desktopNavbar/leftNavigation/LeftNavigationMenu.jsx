import React from 'react';
import NavigationItem from 'components/navigation/desktopNavbar/leftNavigation/navigationItem/NavigationItem';
import LeftNavigationMenuWrapper from 'components/navigation/desktopNavbar/leftNavigation/leftNavigation.styled';

const menuItems = [
  {
    menuItemChildren: [
      { childrenTitle: 'popular', link: '' },
      { childrenTitle: 'Now Playing', link: '' },
      { childrenTitle: 'Upcoming', link: '' },
      { childrenTitle: 'Top Rated', link: '' },
    ],
    menuTitle: 'movies',
  },
  {
    menuItemChildren: [
      { childrenTitle: 'Popular', link: '' },
      { childrenTitle: 'Airing Today', link: '' },
      { childrenTitle: 'On TV', link: '' },
      { childrenTitle: 'Top Rated', link: '' },
    ],
    menuTitle: 'TV Shows',
  },
  {
    menuItemChildren: [{ childrenTitle: 'Popular People', link: '' }],
    menuTitle: 'People',
  },
  {
    menuItemChildren: [
      { childrenTitle: 'Discussions', link: '' },
      { childrenTitle: 'Leaderboard', link: '' },
      { childrenTitle: 'Support', link: '' },
      { childrenTitle: 'API', link: '' },
    ],
    menuTitle: 'More',
  },
];

/**
 * Show Left Navigation Menu.
 * 
 * @return {JSX.Element}
 */
function LeftNavigationMenu() {
  return (
    <LeftNavigationMenuWrapper>
      {menuItems.map((item) => (
        <NavigationItem
          key={Math.random()}
          menuItemChildren={item.menuItemChildren}
          menuTitle={item.menuTitle}
        />
      ))}
    </LeftNavigationMenuWrapper>
  );
}

export default LeftNavigationMenu;

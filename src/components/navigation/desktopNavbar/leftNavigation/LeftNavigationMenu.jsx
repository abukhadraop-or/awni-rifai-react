import React from 'react';
import NavigationItem from 'components/navigation/desktopNavbar/leftNavigation/navigationItem/NavigationItem';
import LeftNavigationMenuWrapper from 'components/navigation/desktopNavbar/leftNavigation/leftNavigation.styled';

const menuItems = [
  {
    key: 'movies',
    menuItemChildren: [
      { childrenTitle: 'popular', link: '', key: 'popular' },
      { childrenTitle: 'Now Playing', link: '', key: 'Now Playing' },
      { childrenTitle: 'Upcoming', link: '', key: 'Upcoming' },
      { childrenTitle: 'Top Rated', link: '', key: 'Top Rated' },
    ],
    menuTitle: 'movies',
  },
  {
    key: 'TV Shows',
    menuItemChildren: [
      { childrenTitle: 'Popular', link: '', key: 'popular' },
      { childrenTitle: 'Airing Today', link: '', key: 'Airing Today' },
      { childrenTitle: 'On TV', link: '', key: 'On TV' },
      { childrenTitle: 'Top Rated', link: '', key: 'Top Rated' },
    ],
    menuTitle: 'TV Shows',
  },
  {
    key: 'People',
    menuItemChildren: [
      { childrenTitle: 'Popular People', link: '', key: 'Popular People' },
    ],
    menuTitle: 'People',
  },
  {
    key: 'More',
    menuItemChildren: [
      { childrenTitle: 'Discussions', link: '', key: 'Discussion' },
      { childrenTitle: 'Leaderboard', link: '', key: 'Leaderboard' },
      { childrenTitle: 'Support', link: '', key: 'Support' },
      { childrenTitle: 'API', link: '', key: 'API' },
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
          key={item.key}
          menuItemChildren={item.menuItemChildren}
          menuTitle={item.menuTitle}
        />
      ))}
    </LeftNavigationMenuWrapper>
  );
}

export default LeftNavigationMenu;

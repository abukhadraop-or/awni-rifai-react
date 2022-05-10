import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationItem from 'components/NavigationItem/NavigationItem';

const mockedProps = {
  menuItemChildren: [
    { childrenTitle: 'Discussions', link: '', key: 'Discussion' },
    { childrenTitle: 'Leaderboard', link: '', key: 'Leaderboard' },
    { childrenTitle: 'Support', link: '', key: 'Support' },
    { childrenTitle: 'API', link: '', key: 'API' },
  ],
  menuTitle: 'More',
};

describe('NavigationItem', () => {
    
  it('show tooltip when hover on the element', async () => {
    render(<NavigationItem />);
    const listItem = screen.getByRole('listitem');
    fireEvent.mouseEnter(listItem);
    const tooltipElement = screen.getByRole('tooltip');
    expect(tooltipElement).toBeVisible();
  });

  it('hide tooltip when hover out of the element', async () => {
    render(<NavigationItem />);
    const listItem = screen.getByRole('listitem');
    fireEvent.mouseLeave(listItem);
    const tooltipElement = screen.queryByRole('tooltip');
    expect(tooltipElement).toBeFalsy();
  });

  it('displays menu title', () => {
    render(
      <NavigationItem
        menuTitle={mockedProps.menuTitle}
        menuItemChildren={mockedProps.menuItemChildren}
      />
    );
    const heading = screen.getByText('More');
    expect(heading).toBeInTheDocument();
  });

  it('display menuItemChildren list when hover',()=>{
    render(
        <NavigationItem
          menuTitle={mockedProps.menuTitle}
          menuItemChildren={mockedProps.menuItemChildren}
        />
      );
      const listItem = screen.getByRole('listitem');
      fireEvent.mouseEnter(listItem);
      const heading = screen.getByText('Leaderboard');
      expect(heading).toBeInTheDocument();

  })
});

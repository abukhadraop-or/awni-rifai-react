import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ShowListOnActionWrapper from 'components/ShowListOnActionWrapper/ShowListOnActionWrapper';
import {
  StyledNavigationItem,
  StyledChildrenItem,
} from 'components/NavigationItem/navigation-item.styled';

/**
 * Shows Navigation Item.
 * 
 * @param {props}
 * @param {string} props.menuTitle
 * @param {arrayOf{Objects}} props.menuItemChildren Array of menu items (objects).
 * 
 * @return {JSX.Element}
 */
function NavigationItem({ menuTitle, menuItemChildren }) {
  const [actionState, setActionState] = useState(false);

  return (
    <StyledNavigationItem
      onMouseEnter={() => setActionState(true)}
      onMouseLeave={() => setActionState(false)}
    >
      <ShowListOnActionWrapper actionState={actionState}>
        {menuItemChildren.map((item) => (
          <StyledChildrenItem key={Math.random()}>
            {item.childrenTitle}
          </StyledChildrenItem>
        ))}
      </ShowListOnActionWrapper>
      {menuTitle}
    </StyledNavigationItem>
  );
}

NavigationItem.propTypes = {
  menuItemChildren: PropTypes.arrayOf(
    PropTypes.shape({
      childrenTitle: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  menuTitle: PropTypes.string,
};

NavigationItem.defaultProps = {
  menuItemChildren: [],
  menuTitle: '',
};

export default NavigationItem;

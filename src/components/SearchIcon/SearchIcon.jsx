import React from 'react';
import PropTypes from 'prop-types';
import StyledSearchIcon from 'components/SearchIcon/search-icon.styled';

/**
 * Render a Search Icon..
 *
 * @param {Object} props
 * @param {bool} isDesktop
 *
 * @return {JSX.Element}
 */
function SearchIcon({ isDesktop }) {
  return (
    <StyledSearchIcon
      className="fas fa-search"
      aria-hidden="true"
      isDesktop={isDesktop}
    />
  );
}

SearchIcon.defaultProps = {
  isDesktop: false,
};

SearchIcon.propTypes = {
  isDesktop: PropTypes.bool,
};

export default SearchIcon;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSearchIcon = styled.i`
  color: ${({ color }) => color};
  margin-left: 10px;
  margin-right: ${({ marginRight }) => marginRight};
  font-size: 1.3rem;
`;

function SearchIcon({ color ,marginRight}) {
  return (
    <StyledSearchIcon
      color={color}
      marginRight={marginRight}
      className="fas fa-search"
      aria-hidden="true"
    />
  );
}

SearchIcon.propTypes = {
  color: PropTypes.string,
  marginRight: PropTypes.string,
};

SearchIcon.defaultProps = {
  color: "",
  marginRight: "",
};

export default SearchIcon;

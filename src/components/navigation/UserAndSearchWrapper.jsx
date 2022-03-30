import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledUserAndSearchWrapper = styled.div`

`;
/**
 *  a wrapper for the user and the search
 * @param {JSX} children 
 * @returns 
 */
function UserAndSearchWrapper({ children }) {
  return <StyledUserAndSearchWrapper>{children}</StyledUserAndSearchWrapper>;
}

UserAndSearchWrapper.defaultProps = {
  children: null,
};
UserAndSearchWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default UserAndSearchWrapper;

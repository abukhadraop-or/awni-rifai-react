import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledShowListOnActionWrapper,
  StyledUnorderedList,
} from 'components/utility/showListOnActionWrapper/showlistOnAction.styled';

/**
 * A component that shows it's children based on an bool passed to it.
 * @param {Object} props
 * @param {JSX} props.children
 * @param {bool}props.actionState
 * @return {JSX.Element}
 */
function ShowListOnActionWrapper({ children, actionState }) {

  return (
    <StyledShowListOnActionWrapper actionState={actionState}>
      <StyledUnorderedList>{children}</StyledUnorderedList>
    </StyledShowListOnActionWrapper>
  );
}

ShowListOnActionWrapper.defaultProps = {
  actionState: false,
  children: null,
};
ShowListOnActionWrapper.propTypes = {
  actionState: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.node),
};

export default ShowListOnActionWrapper;

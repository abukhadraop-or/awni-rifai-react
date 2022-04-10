import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledShowListOnActionWrapper,
  StyledUnorderedList,
} from 'components/ShowListOnActionWrapper/show-list-on-action.styled';

/**
 * A component that shows it's children based on an bool passed to it.
 * @param {Object} props
 * @param {JSX} props.children
 * @param {bool}props.actionState
 * @return {JSX.Element}
 */
function ShowListOnActionWrapper({ children, actionState }) {

  return (
    <StyledShowListOnActionWrapper role="tooltip" actionState={actionState}>
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

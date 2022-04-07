import React from 'react';
import StyledMoreIcon from 'components/MoreIcon/more-icon.styled';
import PropTypes from 'prop-types';

/**
 * Render a Search Icon..
 *
 * @return {JSX.Element}
 */
function MoreIcon({setShowMore}) {
  return (
    <StyledMoreIcon
      onClick={() => setShowMore((prev) => !prev)}
      className="fas fa-ellipsis-h"
    />
  );
}

MoreIcon.defaultProps={
    setShowMore:()=>{},
}

MoreIcon.propTypes={
    setShowMore:PropTypes.func,
}

export default MoreIcon;

import React from 'react';
import StyledDropDown from 'components/utility/dropDown/dropDown.styled';
import PropTypes from 'prop-types';

/**
 * Shows Drop Down Menu.
 * 
 * @param  {Object} props
 * @param {Array} props.options Provide a list of options for the DropDown.
 * @param {Function} props.setSortType A function that is called on DropDown change.
 * 
 * @return {JSX.Element}
 */
function DropDown({ options, setSortType }) {
  return (
    <StyledDropDown onChange={(e) => setSortType(e.target.value)}>
      {options.map((option) => (
        <option value={option.val}>{option.text}</option>
      ))}
    </StyledDropDown>
  );
}

DropDown.defaultProps = {
  options: [],
  setSortType: null,
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      val: PropTypes.string,
    })
  ),
  setSortType: PropTypes.func,
};

export default DropDown;

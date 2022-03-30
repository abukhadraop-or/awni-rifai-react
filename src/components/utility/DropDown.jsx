import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const StyledDropDown = styled.select`
 background-color: #ced3db;
 margin-top: 0.6rem;
 padding: 0.6rem 0;
 width: 100%;
 border: none;
 border-radius: 0.2rem;
 letter-spacing: 0.6px;
`;
/**
 * 
 * @param {Array} options provide a list of options for the DropDown 
 * @param {Function} setSortType a function that is called on DropDown change 
 * @returns {JSX}
 */
function DropDown({ options,setSortType}) {
  return (
    <StyledDropDown onChange={e=>setSortType(e.target.value)}>
      {options.map((option) => (
        <option value={option.val}>{option.text}</option>
      ))}
    </StyledDropDown>
  );
}
DropDown.defaultProps = {
  options: [],
  setSortType:null,
};
DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      val: PropTypes.string,
    })
  ),
  setSortType:PropTypes.func,
};
export default DropDown;

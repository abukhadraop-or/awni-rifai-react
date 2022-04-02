import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledChevronIcon = styled.i`
position: absolute;
top: 50%;
transform: translateY(-50%);

right:0;
z-index: 0;

`;
/**
 * 
 * @param {string} direction direction of chevron icon (left right down up) 
 * @param {string} left left position of the chevron
 * @param {string} right right position of the chevron
 * @returns {JSX}
 */
function ChevronIcon({direction,left,right}) {
  return (
    <StyledChevronIcon left={left} right={right} className={`fa solid fa-chevron-${direction}`} />
  );
}
ChevronIcon.defaultProps = {
    direction:"left",
    left:"initial",
    right:"0",
  };
  ChevronIcon.propTypes = {
    direction:PropTypes.string,
    left:PropTypes.string,
    right:PropTypes.string,
  };
export default ChevronIcon;

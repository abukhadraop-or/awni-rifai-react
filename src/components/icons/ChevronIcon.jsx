import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledChevronIcon = styled.i`
position: absolute;
top: 50%;
transform: translateY(-50%);
left:${({left})=>left};
right:${({right})=>right};
z-index: 0;

`;

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

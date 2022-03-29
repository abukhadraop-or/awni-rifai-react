import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLanguageIcon = styled.span`
  text-transform: uppercase;
  border: 1px solid white;
  width: 24px;
  height: 20px;
  padding: 1px 5px;
  font-size: 0.9em;
  font-weight: 600;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);

  margin-right: ${({ marginRight }) => marginRight};
`;

function LanguageIcon({ lan,marginRight }) {
  return (
    <StyledLanguageIcon 
    marginRight={marginRight}
    >
        {lan}</StyledLanguageIcon>
  );
}
LanguageIcon.propTypes = {
  lan: PropTypes.string,
  marginRight: PropTypes.string,
};
LanguageIcon.defaultProps = {
  lan: "",
  marginRight: "",
};
export default LanguageIcon;

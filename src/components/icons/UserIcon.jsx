import React from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledUserIcon = styled.i`
  color: ${({color})=>color};
`;

function UserIcon({color}) {
  return (
    <StyledUserIcon color={color} className="fa fa-user" aria-hidden="true" />
  );
}


UserIcon.propTypes={
    color:PropTypes.string,
}

UserIcon.defaultProps={
  color:"",
}

export default UserIcon;
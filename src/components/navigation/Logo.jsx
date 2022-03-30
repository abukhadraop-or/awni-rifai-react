import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';



const StyledLogo=styled.img`
width: ${({width})=>width};
aspect-ratio: auto 55/40;
height: 40px;
margin:${({margin})=>margin};
`;
/**
 * 
 * @param {string} src url of the logo image  
 * @param {string} width  width of the logo adjusted based on the screen size
 * @returns {JSX}
 */
function Logo({src,width,margin="0 auto"}) {
  return (
  <StyledLogo
  src={src}
  width={width}
  margin={margin}
  alt="Website Logo"
  />
  );
}
Logo.propTypes={
  src:PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
}
Logo.defaultProps={
  src:"",
  width: "",
  margin:"",
}

export default Logo;

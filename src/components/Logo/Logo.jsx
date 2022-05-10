import React from "react";
import PropTypes from 'prop-types';
import StyledLogo from "components/Logo/logo.styled";

/**
 * Render the website Logo.
 * 
 * @param {Object} props
 * @param {bool} isDesktop
 * @param {string} src
 *   
 * @return {JSX.Element} 
 */
function Logo({isDesktop,src,alt}){
  
  return(
    <StyledLogo alt={alt} src={src} isDesktop={isDesktop} />
  )
}

Logo.defaultProps={
    isDesktop:false,
    src:'',
    alt:'',
}

Logo.propTypes={
    isDesktop:PropTypes.bool,
    src:PropTypes.string,
    alt:PropTypes.string,
}

export default Logo;
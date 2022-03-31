import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledCardImage=styled.img`

width: 30%;
border-top-left-radius: 0.4rem;
border-bottom-left-radius: 0.4rem;
margin-bottom: 0;
padding-bottom: 0;
display: block;
opacity: ${({opacity})=>opacity};
@media(min-width:820px){
    width: 100%;
}


`;
/**
 * 
 * @param {string} src image url
 * @param {string} alt alternative text for images usually movie title
 * @param {string} [opacity=1]  the opacity of the image 
 * @returns {JSX}
 */
function CardImage({src,alt,opacity}){
     
return(
    <StyledCardImage opacity={opacity} src={src} alt={alt}/>
)
}
CardImage.propTypes={
    src:PropTypes.string,
    alt:PropTypes.string,
    opacity:PropTypes.string,
    
}
CardImage.defaultProps={
    src:"",
    alt:"",
    opacity:"1",
}
export default CardImage;

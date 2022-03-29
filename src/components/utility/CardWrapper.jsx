import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledCardWrapper=styled.div`
width: 100%;
background-color: white;
border: 1px solid rgba(0,0,0,0.2);
border-radius: 0.4rem;
border-left: ${({borderLeft})=>borderLeft};
padding: ${({padding})=>padding};
display: ${({display})=>display};
background: ${({background})=>background};
margin-top: 1rem;
box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
height: fit-content;
position: relative;
//add custom styles
@media (min-width:820px){
    display: block;
}
${({customStyles})=>customStyles}
`;

function CardWrapper({children,borderLeft,padding,display,customStyles,background}){
    return(
        <StyledCardWrapper background={background} customStyles={customStyles} display={display} padding={padding} borderLeft={borderLeft}>
            {children}
        </StyledCardWrapper>
    )

}

CardWrapper.defaultProps={
    children:null,
    borderLeft:'1px',
    padding:'1rem 1.5rem',
    display: 'iherit',
    customStyles:'',
    background:'',
   
}
CardWrapper.propTypes={ 
    children:PropTypes.arrayOf(PropTypes.element),
    borderLeft:PropTypes.string,
    padding:PropTypes.string,
    display:PropTypes.string,
    customStyles:PropTypes.string,
    background:PropTypes.string,
   
}
export default CardWrapper;
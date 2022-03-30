import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMobileNavigationMenuWrapper=styled.div`
position: absolute;
top: 7vh;
left: 0;
background-color: rgb(32, 57, 83);
height: 93vh;
z-index: 100;
color: black;
width: 90%;
transition: display 4s ;
padding: 20px;

@keyframes translateRight {
    0%{
        left: -100vw;
    }
    25%{
        left: -75vw;
    }
    50%{
        left: -50vw;
    }
    75%{
        left: -25vw;
    }
    100%{
        left: 0;
    }
}
@keyframes translateLeft{
    0%{
        left: 0;
        display:block;
    }
    25%{
        left: -25vw;
        display:block;
    }
    50%{
        left: -50vw;
        display:block;
    }
    75%{
        left: -75vw;
        display:block;
    }
    100%{
        left: -100vw;
        display:block;
    }
}
animation:  ${({showNavMenu})=> !showNavMenu?'translateLeft':'translateRight'} 0.3s linear ;
left: ${({showNavMenu})=> showNavMenu?'0':'-100vw'};



`;
/**
 * Wrapper for the mobile menu
 * @param {JSX} children
 * @param {bool} showNavMenu show and hide mobile menu 
 * @returns {JSX}
 */

function MobileNavigationMenuWrapper({children,showNavMenu}){
   
    
    return(
        <StyledMobileNavigationMenuWrapper showNavMenu={showNavMenu}>
        {children}
    </StyledMobileNavigationMenuWrapper>
    );

}

MobileNavigationMenuWrapper.defaultProps = {
    children: null,
    showNavMenu:false,
  };
  MobileNavigationMenuWrapper.propTypes = {
    children: PropTypes.element,
    showNavMenu:PropTypes.bool,
  };
  
  export default MobileNavigationMenuWrapper;
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


const StyledBurgerIcon = styled.div`
  .menu-btn {
    width: 80px;
    height: 80px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 3px solid white;

    &__burger {
      width: 20px;
      height: 4px;
      background: rgba(255,255,255,0.9);
      border-radius: 5px;
      &::before,
      &::after {
        content: "";
        position: absolute;
        width: 20px;
        height: 4px;
        background: rgba(255,255,255,0.9);
        border-radius: 5px;
        transition: all 0.2s ease-in-out;
      }
      &::before{
        transform: translateY(-6px);
      }
      &::after{
        transform: translateY(6px);
      }
    }
  }
`;
/**
 * 
 * @param {Function} setShowNavMenu shows and hides nav menu based on clicking on the icon 
 * @returns {JSX}
 */
function BurgerIcon({setShowNavMenu}) {
  return (
    <StyledBurgerIcon onClick={()=>setShowNavMenu((prev)=>!prev)} className="menu-btn">
      <div className="menu-btn__burger" />
    </StyledBurgerIcon>
  );
}
BurgerIcon.defaultProps = {
  setShowNavMenu:null,
};
BurgerIcon.propTypes = {
  setShowNavMenu:PropTypes.func,
};
export default BurgerIcon;

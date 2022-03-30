import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ShowListOnActionWrapper from "../utility/ShowListOnActionWrapper";

const StyledNavigationItem = styled.li`
  color: white;
  margin-right: 25px;
  font-weight: 600;
  text-transform: capitalize;
  font-family: "Source Sans Pro", Arial, sans-serif;
  position: relative;
  :hover{
      cursor: pointer;  
    }
`;
const StyledChildrenItem = styled.li`
  color: black;
  margin-top: 6px;
  font-weight: 400;
  
   
`;
/**
 * 
 * @param {string} menuTitle 
 * @param {arrayOf{Objects}} menuItemChildren array of menu items (objects)
 * @returns {JSX}
 */
function NavigationItem({ menuTitle, menuItemChildren }) {
  const [actionState, setActionState] = useState(false);

  return (
    <StyledNavigationItem
      onMouseEnter={() => setActionState(true)}
      onMouseLeave={() => setActionState(false)}
    >
        <ShowListOnActionWrapper actionState={actionState}>
            
        {menuItemChildren.map((item) => (
          <StyledChildrenItem key={Math.random()}>
              {item.childrenTitle}
              </StyledChildrenItem>
        ))} 
        
      </ShowListOnActionWrapper>
      {menuTitle}
    </StyledNavigationItem>
  );
}

NavigationItem.propTypes = {
  menuTitle: PropTypes.string,
  menuItemChildren: PropTypes.arrayOf(
    PropTypes.shape({
      childrenTitle: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};
NavigationItem.defaultProps = {
  menuTitle: "",
  menuItemChildren: [],
};
export default NavigationItem;

import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const StyledShowListOnActionWrapper=styled.div`
    position: absolute;
    top: ${({top})=>top};
    left: 0;
    background-color: white;
    border:1px solid rgba(0,0,0,0.2);
    border-radius: 0.5rem;
    min-width: 200px;
    padding: 1rem;
    text-align: left;
    display: ${({actionState})=>actionState?'inline-block':'none'};
    height: fit-content;

`;
const StyledUnorderedList=styled.ul`
  list-style-type: none;
`;

function ShowListOnActionWrapper({children,actionState,top}){
 return(
    <StyledShowListOnActionWrapper top={top} actionState={actionState}>
     <StyledUnorderedList>
     {children}
     </StyledUnorderedList>
   
  
</StyledShowListOnActionWrapper>

 );
}

ShowListOnActionWrapper.defaultProps = {
    children: null,
    actionState:false,
    top:"20px",
  };
  ShowListOnActionWrapper.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
    actionState:PropTypes.bool,
    top: PropTypes.string,
  };
  
  export default ShowListOnActionWrapper;
  
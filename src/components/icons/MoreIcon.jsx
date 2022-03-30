import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledMoreIcon=styled.span`
width: 25px;
height: 25px;
border-radius: 50%;
border: 1px solid rgba(0,0,0,0.2);
box-shadow: 2px 1px 1px rgba(0,0,0,0.2);
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 5px;
right: 10px;
background-color: rgba(255,255,255,0.6);
:hover{
    background-color: #3fc5f1;
    cursor: pointer;
}
span{
    background-color: rgba(0,0,0,0.6);
    width: 3px;
    height: 3px;
    display: inline-block;
    margin-left: 1px;
    border-radius: 50%;
}

`;

/**
 * 
 * @param {Function} setShowMore a set state function that shows and hides more container 
 * @returns {JSX}
 */
function MoreIcon({setShowMore}){
    return(
        <StyledMoreIcon onClick={()=>setShowMore(prev=>!prev)}>
            <span/>
            <span/>
            <span/>
        </StyledMoreIcon>
    )

}
MoreIcon.propTypes={
    setShowMore:PropTypes.func,
}
MoreIcon.defaultProps={
    setShowMore:()=>{},
}
export default MoreIcon;
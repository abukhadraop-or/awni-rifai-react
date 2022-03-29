import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';


const StyledPlusIcon=styled.i`
color:${({color})=>color};
margin-right:${({marginRight})=>marginRight};
font-weight: 600;
font-size: 1rem;
`;

function PlusIcon({color,marginRight}){
    return(
        <StyledPlusIcon marginRight={marginRight} className="fas fa-plus" color={color}/>

    )
}
PlusIcon.propTypes={
    color:PropTypes.string,
    marginRight:PropTypes.string,
}

PlusIcon.defaultProps={
  color:"",
  marginRight:"",
}

export default PlusIcon;
import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledCardContent=styled.div`
margin:1rem;
margin-bottom: 2rem;
h2{
    font-weight: 600;
    font-size: 1.2rem;
    font-family: 'Source Sans Pro', Arial, sans-serif;
}
.release-date{
    color: grey;
    font-size: 0.9rem;
}
p{
    font-size: 0.9rem;
    word-break: normal;
    margin-top: .8rem;
}
@media(min-width:820px){
    p{
        display: none;
        
    }
}
`;
/**
 *  
 * @param {string} title  movie title fetched from the data object
 * @param {string} releaseDate movie release_date fetched from the data object
 * @param {string} description movie description fetched from the data object
 * @returns {jsx} 
 */
function CardContent({title,releaseDate,description}){
    return(
        <StyledCardContent>
        <h2>{title}</h2>
        <span className="release-date">{releaseDate}</span>
        <p>{description}</p>
    </StyledCardContent>

    );
}   
CardContent.propTypes={
    title:PropTypes.string,
    releaseDate:PropTypes.string,
    description:PropTypes.string,

}
CardContent.defaultProps={
    title:"",
    releaseDate:"",
    description:"",
}

export default CardContent;
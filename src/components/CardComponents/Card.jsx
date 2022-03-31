import styled from "styled-components";
import PropTypes from "prop-types";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
import CardWrapper from "components/utility/CardWrapper";
import CardImage from "components/CardComponents/CardImage";
import CardContent from "components/CardComponents/CardConent";
import MoreIcon from "components/icons/MoreIcon";
import ShowListOnActionWrapper from "components/utility/ShowListOnActionWrapper";

const StyledProgressBar = styled.div`
  position: absolute;
  bottom: -10px;
  left: 5px;
  width: 20%;
  @media (max-width: 820px) {
    display: none;
  }
`;
const StyledImageContainer=styled.div`
    position: relative;
`;

/**
 * A card that shows movie data 
 * @param {object} movieData  movie data fetched from the api 
 * @returns {JSX}  returns jsx of the cards
 */
function Card({ data }) {
  const [showMore, setShowMore] = useState(false);
  const strokeColor = data.vote_average > 7 ? "#21d07a" : "#d2d531";
  return (
    <CardWrapper
      display="flex"
      padding="0"
      
    >
      <StyledImageContainer>
      <StyledProgressBar>
        <CircularProgressbar
          value={data.vote_average}
          maxValue={10}
          text={`${data.vote_average * 10}%`}
          background="true"
          styles={{
            path: {
              stroke: strokeColor,
            },
            trail: {
              stroke: "grey",
            },
            text: {
              fill: "white",
              fontSize: "35px",
              fontWeight: "bold",
            },
            background: {
              fill: "black",
            },
          }}
        />
      </StyledProgressBar>
      <CardImage
        src={data.poster_path?`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg"}
        alt={data.title}
        opacity={!showMore?'1':'0.2'}
      />
      </StyledImageContainer>
       
      <CardContent
        title={data.title}
        releaseDate={data.release_date}
        description={data.overview?.slice(0, 60)}
      />
      <MoreIcon setShowMore={setShowMore} />
      <ShowListOnActionWrapper top="35px" actionState={showMore}>
        <h4>Want to rate or add this item to a list?</h4>
        <div> Login Not a member? </div>
       <div> Sign up and</div>
      <div>  join the community</div>
      </ShowListOnActionWrapper>
  
    </CardWrapper>
  );
}

Card.propTypes = {
  data: PropTypes.string,
};
Card.defaultProps = {
  data: [],
};
export default Card;

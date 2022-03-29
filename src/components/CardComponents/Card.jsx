import styled from "styled-components";
import PropTypes from "prop-types";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React, { useState } from "react";
import CardWrapper from "../utility/CardWrapper";
import CardImage from "./CardImage";
import CardContent from "./CardConent";
import MoreIcon from "../icons/MoreIcon";
import ShowListOnActionWrapper from "../utility/ShowListOnActionWrapper";

const StyledProgressBar = styled.div`
  position: absolute;
  top: 65%;
  left: 5px;
  width: 20%;
  @media (max-width: 820px) {
    display: none;
  }
`;
const customCardWrapperStyles = `@media(min-width:820px){
    min-height: 400px;
    max-height: 400px;
}`;

function Card({ data }) {
  const [showMore, setShowMore] = useState(false);
  const strokeColor = data.vote_average > 7 ? "#21d07a" : "#d2d531";
  return (
    <CardWrapper
      customStyles={customCardWrapperStyles}
      display="flex"
      padding="0"
      
    >
      <CardImage
        src={data.poster_path?`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg"}
        alt="movie name"
        opacity={!showMore?'1':'0.2'}
      />
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

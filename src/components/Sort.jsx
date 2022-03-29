import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ChevronIcon from "./icons/ChevronIcon";
import CardWrapper from "./utility/CardWrapper";
import DropDown from "./utility/DropDown";

const sortOptions = [
  {
    text: "Popularity Ascending",
    val: " popularity.asc",
  },
  {
    text: "Rating Ascending",
    val: "vote_average.asc",
  },
  {
    text: "Rating Descending",
    val: "vote_average.desc",
  },
  {
    text: "Release Date Descending",
    val: "primary_release_date.desc",
  },
  {
    text: "Release Date Ascending",
    val: "primary_release_date.asc",
  },
  {
    text: "Title (A-Z)",
    val: "title.asc",
  },
  {
    text: "Title (Z-A)",
    val: "title.desc",
  },
];
const StyledSort = styled.div`
  .sort-head {
    position: relative;
    margin-bottom: ${({ exapndList }) => (exapndList ? "1rem" : "0rem")};
  }
  h2{
    font-weight: 600;
    font-size: 1rem;

  }
  .sort-body {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 0.5rem;
    h3 {
      font-weight: 200;
      font-size: 1.1rem;
    }
  }
`;

function Sort({ setSortType }) {

  const [exapndList, setExpandList] = useState(false);

  return (
    <CardWrapper>
      <StyledSort exapndList={exapndList}>
        <div
          className="sort-head"
          role="button"
          tabIndex={0}
          onKeyDown={() => setExpandList((prev) => !prev)}
          onClick={() => setExpandList((prev) => !prev)}
        >
          <h2>Sort</h2>
          <ChevronIcon className="" direction={exapndList ? "down" : "right"} />
        </div>

        {exapndList ? (
          <div className="sort-body">
            <h3>Sort Results By </h3>
            <DropDown setSortType={setSortType} options={sortOptions} />
          </div>
        ) : (
          ""
        )}
      </StyledSort>
    </CardWrapper>
  );
}

Sort.defaultProps = {
  setSortType: () => {},
};
Sort.propTypes = {
  setSortType: PropTypes.func,
};
export default Sort;
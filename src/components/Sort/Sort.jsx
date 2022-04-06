import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropDown from 'components/DropDown/DropDown';
import {
  Title,
  SubTitle,
  SortBody,
  SortHead,
  ChevronIcon,
  CardWrapper,
} from 'components/Sort/sort.styled';

const sortOptions = [
  {
    key:'popularity.asc',
    text: 'Popularity Ascending',
    val: ' popularity.asc',
  },
  {
    key:'vote_average.asc',
    text: 'Rating Ascending',
    val: 'vote_average.asc',
  },
  {
    key:'vote_average.desc',
    text: 'Rating Descending',
    val: 'vote_average.desc',
  },
  {
    key:'primary_release_date.desc',
    text: 'Release Date Descending',
    val: 'primary_release_date.desc',
  },
  {
    key:'primary_release_date.asc',
    text: 'Release Date Ascending',
    val: 'primary_release_date.asc',
  },
  {
    key:'title.asc', 
    text: 'Title (A-Z)',
    val: 'title.asc',
  },
  {
    key:'title.desc',
    text: 'Title (Z-A)',
    val: 'title.desc',
  },
];

/**
 * Show Sort Drop Down.
 * @param {Object} props
 * @param {function} props.setSortType A function that is called when the sort type is changed.
 * 
 * @return {JSX.Element}
 */

function Sort({ setSortType }) {

  const [expandList, setExpandList] = useState(false);
  const direction = expandList ? 'down' : 'right';

  return (
    <CardWrapper>
      <SortHead
        expandList={expandList}
        role="button"
        tabIndex={0}
        onKeyDown={() => setExpandList((prev) => !prev)}
        onClick={() => setExpandList((prev) => !prev)}
      >
        <Title>Sort</Title>
        <ChevronIcon
          direction={direction}
          className={`fa solid fa-chevron-${direction}`}
        />
      </SortHead>

      {expandList ? (
        <SortBody>
          <SubTitle>Sort Results By</SubTitle>
          <DropDown setSortType={setSortType} options={sortOptions} />
        </SortBody>
      ) : (
        ''
      )}
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

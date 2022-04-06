import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropDown from 'components/utility/dropDown/DropDown';
import {
  H2,
  H3,
  SortBody,
  SortHead,
  ChevronIcon,
  CardWrapper,
} from 'components/sidebarComponents/sort/sort.styled';

const sortOptions = [
  {
    text: 'Popularity Ascending',
    val: ' popularity.asc',
  },
  {
    text: 'Rating Ascending',
    val: 'vote_average.asc',
  },
  {
    text: 'Rating Descending',
    val: 'vote_average.desc',
  },
  {
    text: 'Release Date Descending',
    val: 'primary_release_date.desc',
  },
  {
    text: 'Release Date Ascending',
    val: 'primary_release_date.asc',
  },
  {
    text: 'Title (A-Z)',
    val: 'title.asc',
  },
  {
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
        <H2>Sort</H2>
        <ChevronIcon
          direction={direction}
          className={`fa solid fa-chevron-${direction}`}
        />
      </SortHead>

      {expandList ? (
        <SortBody>
          <H3>Sort Results By</H3>
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

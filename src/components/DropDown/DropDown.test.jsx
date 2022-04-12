import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import DropDown from 'components/DropDown/DropDown';

const mockedSetSortType = jest.fn();
const mockedOption = [
  {
    key: 'popularity.asc',
    text: 'Popularity Ascending',
    val: 'popularity.asc',
  },
];

it('Should render the drop-down list when passed the option', async () => {
  render(<DropDown setSortType={mockedSetSortType} options={mockedOption} />);
  const optionElement=screen.getByText(/Popularity Ascending/i);
  expect(optionElement).toBeVisible();

});

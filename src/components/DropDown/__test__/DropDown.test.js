import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DropDown from 'components/DropDown/DropDown';

const mockSetSortType = () => {};
const mockOption = [
  {
    key: 'popularity.asc',
    text: 'Popularity Ascending',
    val: 'popularity.asc',
  },
];

it('Should render the drop-down list when passed the option', async () => {
  render(<DropDown setSortType={mockSetSortType} options={mockOption} />);
  const optionElement=screen.getByText(/Popularity Ascending/i);
  expect(optionElement).toBeVisible();

});

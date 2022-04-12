import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MovieCard from 'components/MovieCard/MovieCard';

const mockedData = {};

function MockCardsContainer() {
  return (
    <>
      <div>Click outside</div>
      <MovieCard data={mockedData} />
    </>
  );
}

describe('CardMovie', () => {
  it('should display more list when more btn is clicked', async () => {
    render(<MovieCard data={mockedData} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const tooltipElement = screen.getByRole('tooltip');
    expect(tooltipElement).toBeVisible();
  });
  it('should hide more list when clicking outside the component', async () => {
    render(<MockCardsContainer />);

    const clickOutSideContainer = screen.getByText('Click outside');
    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.click(clickOutSideContainer);
    const tooltipElement = await screen.findByRole('tooltip');
    expect(tooltipElement).not.toBeVisible();

  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import MoviePage from 'components/MoviePage/MoviePage';

jest.mock(
  'utils/http',
  () => () =>
    Promise.resolve({
      results: [
        {
          id: 1,
          overview: 'hello',
          poster_path: 'hello',
          release_date: 'hello',
          title: 'hello',
          vote_average: 9,
        },
      ],
    })
);

describe('Movie Page', () => {
  it('renders 20 cards after fetching data from the API', async () => {
    render(<MoviePage />);
    const cardsList = await screen.findByTestId('movie card');
    expect(cardsList).toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import MoviePage from 'components/MoviePage/MoviePage';
import getAllMovies from 'services/movie-api';
import get from 'utils/http';

jest.mock('services/movie-api', () =>
  jest.fn().mockResolvedValue([
    {
      id: 1,
      overview: 'hello',
      poster_path: 'hello',
      release_date: 'hello',
      title: 'hello',
      vote_average: 9,
    },
  ])
);

jest.mock('utils/http', () => jest.fn().mockResolvedValue('hello'));

describe('Movie Page', () => {

  describe('card render',()=>{
    it('renders a card after fetching data from the API', async () => {
      render(<MoviePage />);
      const cardsList = await screen.findByTestId('movie card');
      expect(cardsList).toBeInTheDocument();
    });
  })
  
  describe('#getAllMovies',()=>{

    it('calls a function getAllMovies', async () => {
      render(<MoviePage />);
      await waitFor(() => {
        expect(getAllMovies).toBeCalled();
      });
    });
  
    it('calls a function with the correct parameters', async () => {
      render(<MoviePage />);
      await waitFor(() => {
        expect(getAllMovies).toBeCalledWith(get, 1, '');
      });
    });

    it('calls a function after click on Load more button', async () => {
      render(<MoviePage />);
      const loadMore = screen.getByRole('button', { name: 'Load More' });
      fireEvent.click(loadMore);
      await waitFor(() => {
        expect(getAllMovies).toBeCalled();
      });
    });

    it('calls a function with the correct parameters after click on Load more button', async () => {
      render(<MoviePage />);
      const loadMore = screen.getByRole('button', { name: 'Load More' });
      fireEvent.click(loadMore);
      await waitFor(() => {
        expect(getAllMovies).toHaveBeenNthCalledWith(5,get,2,'');
      });
    });

    it('calls the function getAllMovies', async () => {
      render(<MoviePage />);
      const sortContainer=screen.getByTestId('sortHead');
      fireEvent.click(sortContainer);
      const dropDown=await screen.findByTestId('sortDropDown');
      fireEvent.change(dropDown);
      await waitFor(() => {
        expect(getAllMovies).toBeCalled();
      });
    });

    it('calls the function getAllMovies with the correct parameters after sort drop down change', async () => {
      render(<MoviePage />);
      const sortContainer=screen.getByTestId('sortHead');
      fireEvent.click(sortContainer);
      const dropDown=await screen.findByTestId('sortDropDown');
      fireEvent.change(dropDown);
      await waitFor(() => {
        expect(getAllMovies).toHaveBeenNthCalledWith(9,get,1,' popularity.asc');
      });
    });
  })
});

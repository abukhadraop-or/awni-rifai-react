import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import MovieCard from 'components/MovieCard/MovieCard';

const mockedData = {};
describe('CardMovie', () => {
  it('should display more list when more btn is clicked', async () => {
    render(<MovieCard data={mockedData} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    const tooltipElement = screen.getByRole('tooltip');
    expect(tooltipElement).toBeVisible();
  });
 
});

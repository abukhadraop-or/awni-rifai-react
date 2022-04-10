import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardContent from 'components/CardContent/CardContent';

const mockedProps = {
  title: 'Movie Title',
  releaseDate: '20/2/2020',
  description: 'cool movie',
};

describe('CardContent', () => {

  it('should render prop title correctly', () => {
    render(<CardContent {...mockedProps} />);
    const headerElement = screen.getByText(/Movie Title/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should render prop releaseDate correctly', () => {
    render(<CardContent {...mockedProps} />);
    const spanElement = screen.getByText("20/2/2020");
    expect(spanElement).toBeInTheDocument();
  });

  it('should render prop description correctly', () => {
    render(<CardContent {...mockedProps} />);
    const paragraphElement = screen.getByText("cool movie");
    expect(paragraphElement).toBeInTheDocument();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardContent from 'components/CardContent/CardContent';

const mockedProps = {
  description: 'cool movie',
  releaseDate: '20/2/2020',
  title: 'Movie Title',
};

describe('CardContent', () => {
  it('should render prop title correctly', async () => {
    render(
      <CardContent
        title={mockedProps.title}
        releaseDate={mockedProps.releaseDate}
        description={mockedProps.description}
      />
    );
    const headerElement = screen.getByRole('heading', { name: /Movie Title/i });
    expect(headerElement).toBeInTheDocument();
  });

  it('should render prop releaseDate correctly', async () => {
    render(
      <CardContent
        title={mockedProps.title}
        releaseDate={mockedProps.releaseDate}
        description={mockedProps.description}
      />
    );
    const spanElement = screen.getByText('20/2/2020');
    expect(spanElement).toBeInTheDocument();
  });

  it('should render prop description correctly', async () => {
    render(
      <CardContent
        title={mockedProps.title}
        releaseDate={mockedProps.releaseDate}
        description={mockedProps.description}
      />
    );
    const paragraphElement = screen.getByText('cool movie');
    expect(paragraphElement).toBeInTheDocument();
  });

  it('should render no release date when the prop release date is empty', async () => {
    render(<CardContent title="" releaseDate="" description="" />);
    const spanElement = screen.getByText('There is no release date');
    expect(spanElement).toBeInTheDocument();
  });
});

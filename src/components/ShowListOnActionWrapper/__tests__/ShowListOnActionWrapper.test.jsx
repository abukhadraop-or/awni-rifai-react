import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowListOnActionWrapper from 'components/ShowListOnActionWrapper/ShowListOnActionWrapper';

function MockShowListOnActionWrapper ({ actionState }) {
  return (
    <ShowListOnActionWrapper actionState={actionState}>
      <li data-testid="list">Test1</li>
      <li data-testid="list">Test2</li>
      <li data-testid="list">Test3</li>
    </ShowListOnActionWrapper>
  );
};
describe('ShowListOnActionWrapper', () => {

  describe('Function1', () => {
    it('Should render a Test text when action state is true', async () => {
      render(<MockShowListOnActionWrapper actionState />);
      const listElement = screen.getByText(/Test1/i);
      expect(listElement).toBeVisible();
    });

    
  });

  describe('Function 2',()=>{
    it('Should render 3 list items when action state is true', async () => {
      render(<MockShowListOnActionWrapper actionState />);
      const listItems = screen.getAllByTestId('list');
      expect(listItems).toHaveLength(3);
    });
    
  })

});


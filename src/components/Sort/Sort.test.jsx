import React from 'react';
import '@testing-library/jest-dom';
import { render, screen,fireEvent} from '@testing-library/react';
import Sort from 'components/Sort/Sort';

describe('Sort', () => {
  
    it('should expand when clicked',async () => {
      render(<Sort/>);
      const expandButton =  screen.getByRole('button')
      fireEvent.click(expandButton) 
      const tooltipElement=screen.getByRole('tooltip')
      expect(tooltipElement).toBeVisible();
    
    });  
  });
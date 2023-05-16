import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../app/page';

describe('Home Page', () => {
  it('renders without errors', () => {
    const spy = jest.spyOn(console, 'error');
    render(<Home />);
    expect(spy).not.toHaveBeenCalled();
  });
});
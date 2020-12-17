import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Home from '../index';

describe('<Home />', () => {
  it('should render Home', async () => {
    render(<Home />);

    expect(
      screen.getByText('translation:home.description')
    ).toBeInTheDocument();
  });
});

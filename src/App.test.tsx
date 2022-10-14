import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reload link', () => {
  render(<App />);
  const linkElement = screen.getByText(/page: 1/i);
  expect(linkElement).toBeInTheDocument();
});

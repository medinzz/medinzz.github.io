import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './pages/Login';

test('renders learn react link', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

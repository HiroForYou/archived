import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  const { getAllByText } = render(<App />);
  const elements = getAllByText(/TorchExpo/i);
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello text', () => {
  render(<App />);
  const h1Element = screen.getByText(/hello/i);
  expect(h1Element).toBeInTheDocument();
});

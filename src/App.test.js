import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello message', () => {
  render(<App />);
  const headingElement = screen.getByText(/hello from cô cảnh/i);
  expect(headingElement).toBeInTheDocument();
});

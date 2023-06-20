import { render, screen } from '@testing-library/react';
import App from './App';

test('renders select dropdown', () => {
  render(<App />);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});

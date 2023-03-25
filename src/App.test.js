import { render, screen } from '@testing-library/react';
import App from './App';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

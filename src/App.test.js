import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Terminator 4/i);
  expect(linkElement).toBeInTheDocument();
});

// Given that we receive a successful response from the back-end of a list of films
// When the App component renders
// Then we see a table displayed with a column heading of 'Title'

// Given that we receive a successful response from the back-end of a list of films
// When the App component renders
// Then we see one of the films 'Terminator 2' is displayed

// Given that we receive a successful response from the back-end of an empty list of films - should return a 200 status code with a representation in JSON of an empty list (checked this in forums)
// When the App component renders
// Then we see the message 'No titles exist'

// Given that we receive a non successful response code from the endpoint to get a list of films
// When the App component renders
// Then an error message including the word 'Error getting titles' should be displayed
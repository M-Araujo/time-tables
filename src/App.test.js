import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('renders main container', () => {
  render(<App />);

  const container = screen.getByTestId('app');
  expect(container).toBeInTheDocument();
});

test('populates the inputs', () => {
  render(<App />);

  const multiplicand = screen.getByTestId('multiplicand');
  expect(multiplicand).toBeInTheDocument();

  const multiplier = screen.getByTestId('multiplier');
  expect(multiplier).toBeInTheDocument();
});


test('it renders the answer in an empty state', () => {
  render(<App />);

  const answer = screen.getByTestId('answer');
  expect(answer.value).toBe('');
});


test('onclick the button a response message appears', () => {
  render(<App />);

  fireEvent.click(screen.getByText('Ok'));

  const success = screen.queryByText('Correct!');
  const error = screen.queryByText('Wrong answer');
  const message = success || error;

  expect(message).toBeTruthy();
});

test('on enter event a response message appears', () => {
  render(<App />);

  const input = screen.getByTestId('answer');
  fireEvent.keyDown(input, { key: 'Enter' });

  const success = screen.queryByText('Correct!');
  const error = screen.queryByText('Wrong answer');
  const message = success || error;

  expect(message).toBeTruthy();
});


// TODO:
// after the validation the response message appears
// if sucess /error it plays a sound
// it resets after the message is displayed
// garantee the numbers are random
// wait for the one second timeout 
import { render } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
});

test('renders app header', () => {
  const { getByTestId } = render(<App />);
  const appHeader = getByTestId('app-header');
  expect(appHeader).toBeInTheDocument();
});

test('renders app body', () => {
  const { getByTestId } = render(<App />);
  const appBody = getByTestId('app-body');
  expect(appBody).toBeInTheDocument();
});

test('renders app footer', () => {
  const { getByTestId } = render(<App />);
  const appFooter = getByTestId('app-footer');
  expect(appFooter).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders the Notifications component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('notifications')).toBeInTheDocument();
  });

  it('renders the Header component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('header')).toBeInTheDocument();
  });

  it('renders the Login component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('login')).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('footer')).toBeInTheDocument();
  });
});

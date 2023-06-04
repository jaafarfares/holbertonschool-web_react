import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';
import { AppContext } from './AppContext';

describe('App', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should render the login section when user is not logged in', () => {
    act(() => {
      render(
        <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
          <App />
        </AppContext.Provider>,
        container
      );
    });

    expect(container.querySelector('Login')).toBeDefined();
    expect(container.querySelector('CourseList')).toBeNull();
  });

  it('should render the course list when user is logged in', () => {
    act(() => {
      render(
        <AppContext.Provider value={{ user: { isLoggedIn: true }, logOut: () => {} }}>
          <App />
        </AppContext.Provider>,
        container
      );
    });

    expect(container.querySelector('Login')).toBeNull();
    expect(container.querySelector('CourseList')).toBeDefined();
  });

  it('should call logOut function when ctrl+h key is pressed', () => {
    const logOutMock = jest.fn();

    act(() => {
      render(
        <AppContext.Provider value={{ user: { isLoggedIn: true }, logOut: logOutMock }}>
          <App />
        </AppContext.Provider>,
        container
      );
    });

    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });

    act(() => {
      document.dispatchEvent(event);
    });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });
});

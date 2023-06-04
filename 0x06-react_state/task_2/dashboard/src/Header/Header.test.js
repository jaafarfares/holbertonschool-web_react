import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Header from './Header';
import { AppContext } from '../App/AppContext';

describe('Header', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should render the header', () => {
    act(() => {
      render(
        <AppContext.Provider value={{ user: { isLoggedIn: false }, logOut: () => {} }}>
          <Header />
        </AppContext.Provider>,
        container
      );
    });

    expect(container.querySelector('.header')).toBeDefined();
    expect(container.querySelector('.logo')).toBeDefined();
    expect(container.querySelector('.title')).toBeDefined();
    expect(container.querySelector('#logoutSection')).toBeNull();
  });

  it('should render the logout section when user is logged in', () => {
    act(() => {
      render(
        <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: () => {} }}>
          <Header />
        </AppContext.Provider>,
        container
      );
    });

    expect(container.querySelector('#logoutSection')).toBeDefined();
    expect(container.querySelector('#logoutSection').textContent).toContain('Welcome test@example.com');
  });

  it('should call logOut function when logout link is clicked', () => {
    const logOutMock = jest.fn();

    act(() => {
      render(
        <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: logOutMock }}>
          <Header />
        </AppContext.Provider>,
        container
      );
    });

    const logoutLink = container.querySelector('#logoutSection span');
    expect(logoutLink).toBeDefined();

    act(() => {
      logoutLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(logOutMock).toHaveBeenCalledTimes(1);
  });
});

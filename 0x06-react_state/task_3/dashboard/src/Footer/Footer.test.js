import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('Footer', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should render the footer with the correct year and text', () => {
    act(() => {
      render(
        <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
          <Footer />
        </AppContext.Provider>,
        container
      );
    });

    const footerText = container.querySelector('.App-footer').textContent;
    expect(footerText).toContain('2023');
    expect(footerText).toContain('All rights reserved');

    expect(container.querySelector('a')).toBeNull();
  });

  it('should render the contact link when user is logged in', () => {
    act(() => {
      render(
        <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
          <Footer />
        </AppContext.Provider>,
        container
      );
    });

    expect(container.querySelector('a')).toBeDefined();
    expect(container.querySelector('a').getAttribute('href')).toBe('contact.html');
  });
});

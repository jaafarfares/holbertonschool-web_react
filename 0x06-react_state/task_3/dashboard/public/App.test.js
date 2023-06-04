import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../src/App/App';

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

  it('should update state when markNotificationAsRead is called', () => {
    act(() => {
      render(<App />, container);
    });

    const appInstance = container.firstChild._reactInternalFiber.stateNode;
    const initialNotifications = appInstance.state.listNotifications;

    act(() => {
      appInstance.markNotificationAsRead(2);
    });

    const updatedNotifications = appInstance.state.listNotifications;

    expect(updatedNotifications).toHaveLength(initialNotifications.length - 1);
    expect(updatedNotifications.some((notification) => notification.id === 2)).toBe(false);
  });
});

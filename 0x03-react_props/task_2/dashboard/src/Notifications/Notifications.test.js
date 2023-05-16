import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('should render NotificationItem elements without crashing', () => {
    const notifications = [
      { id: 1, type: 'default', html: null, value: 'Test 1' },
      { id: 2, type: 'success', html: null, value: 'Test 2' },
      { id: 3, type: 'warning', html: null, value: 'Test 3' },
    ];
    render(<Notifications notifications={notifications} />);
  });

  it('should render the correct html for the first NotificationItem element', () => {
    const notifications = [
      { id: 1, type: 'default', html: null, value: 'Test 1' },
      { id: 2, type: 'success', html: null, value: 'Test 2' },
      { id: 3, type: 'warning', html: null, value: 'Test 3' },
    ];
    const { getByText } = render(<Notifications notifications={notifications} />);
    const listItem = getByText(notifications[0].value);
    expect(listItem).toBeInTheDocument();
  });
});

import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  it('should render without crashing', () => {
    render(<NotificationItem />);
  });

  it('should render the correct html with type and value props', () => {
    const type = 'default';
    const value = 'test';
    const { getByText } = render(<NotificationItem type={type} value={value} />);
    const listItem = getByText(value);
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('data-notification-type', type);
  });

  it('should render the correct html with html prop', () => {
    const html = { __html: '<u>test</u>' };
    const { container } = render(<NotificationItem html={html} />);
    const listItem = container.firstChild;
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveAttribute('dangerouslySetInnerHTML', html);
  });
});

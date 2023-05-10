import { render } from '@testing-library/react';
import App from './App';
import { Notifications } from './Notifications';

test('test that Notifications renders without crashing', () => {
  render(<Notifications />);
});


test('verify that Notifications renders three list items', () => {
    const { getAllByRole } = render(<Notifications />);
    const listItems = getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });
  
  test('verify that Notifications renders the text Here is the list of notifications', () => {
    const { getByText } = render(<Notifications />);
    const textElement = getByText(/here is the list of notifications/i);
    expect(textElement).toBeInTheDocument();
  });

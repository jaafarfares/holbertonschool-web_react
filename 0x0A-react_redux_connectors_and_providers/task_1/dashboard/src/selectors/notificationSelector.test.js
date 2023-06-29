import { Map, List } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from '../selectors/notificationSelector';

describe('notificationSelector', () => {
  const state = Map({
    filter: 'DEFAULT',
    notifications: Map({
      1: Map({ id: 1, isRead: false, value: 'Notification 1' }),
      2: Map({ id: 2, isRead: true, value: 'Notification 2' }),
      3: Map({ id: 3, isRead: false, value: 'Notification 3' }),
    }),
  });

  it('should return the correct filter type selected', () => {
    const filterType = filterTypeSelected(state);
    expect(filterType).toEqual('DEFAULT');
  });

  it('should return the list of notifications', () => {
    const notifications = getNotifications(state);
    expect(notifications).toEqual(
      Map({
        1: Map({ id: 1, isRead: false, value: 'Notification 1' }),
        2: Map({ id: 2, isRead: true, value: 'Notification 2' }),
        3: Map({ id: 3, isRead: false, value: 'Notification 3' }),
      })
    );
  });

  it('should return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications).toEqual(
      Map({
        1: Map({ id: 1, isRead: false, value: 'Notification 1' }),
        3: Map({ id: 3, isRead: false, value: 'Notification 3' }),
      })
    );
  });
});

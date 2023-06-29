import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  const initialState = {
    filter: NotificationTypeFilters.DEFAULT,
    notifications: [],
  };

  it('should return initial state when no action is passed', () => {
    const action = {};
    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const notifications = [
      {
        id: 1,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        type: 'urgent',
        value: 'New resume available',
      },
    ];
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications,
    };
    const newState = notificationReducer(initialState, action);
    expect(newState.notifications).toEqual([
      {
        id: 1,
        isRead: false,
        type: 'default',
        value: 'New course available',
      },
      {
        id: 2,
        isRead: false,
        type: 'urgent',
        value: 'New resume available',
      },
    ]);
  });

  it('should handle MARK_AS_READ action', () => {
    const initialState = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 1,
    };
    const newState = notificationReducer(initialState, action);
    expect(newState.notifications[1].isRead).toBe(true);
  });

  it('should handle SET_TYPE_FILTER action', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT,
    };
    const newState = notificationReducer(initialState, action);
    expect(newState.filter).toBe(NotificationTypeFilters.URGENT);
  });
});

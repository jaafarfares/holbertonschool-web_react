import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
  } from '../actions/notificationActionTypes';
  
  const initialState = {
    filter: NotificationTypeFilters.DEFAULT,
    notifications: [],
  };
  
  const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_NOTIFICATIONS_SUCCESS: {
        const notifications = action.data.map(notification => ({
          ...notification,
          isRead: false,
        }));
        return {
          ...state,
          notifications,
        };
      }
      case MARK_AS_READ: {
        const index = action.index;
        if (index >= 0 && index < state.notifications.length) {
          const updatedNotification = {
            ...state.notifications[index],
            isRead: true,
          };
          const updatedNotifications = [
            ...state.notifications.slice(0, index),
            updatedNotification,
            ...state.notifications.slice(index + 1),
          ];
          return {
            ...state,
            notifications: updatedNotifications,
          };
        }
        return state;
      }
      case SET_TYPE_FILTER: {
        const filter = action.filter;
        return {
          ...state,
          filter,
        };
      }
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  
import uiReducer from './uiReducer';
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from '../actions/uiActionTypes';


describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  
  it('should return initial state when no action is passed', () => {
    const action = {};
    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
  it('should return initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: SELECT_COURSE };
    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });
  it('should correctly change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    const newState = uiReducer(initialState, action);
    expect(newState.isNotificationDrawerVisible).toEqual(true);
  });
});

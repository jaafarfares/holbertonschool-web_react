import { expect } from 'chai';
import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';


describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: Map({}), // Update user to be a Map
  });
  
  it('should return initial state when no action is passed', () => {
    const action = {};
    const newState = uiReducer(initialState, action);
    expect(newState).to.equal(initialState);
  });
  
  it('should return initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' }; // Update the action type
    const newState = uiReducer(initialState, action);
    expect(newState).to.equal(initialState);
  });
  
  it('should correctly change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER }; // Use the imported action type
    const newState = uiReducer(initialState, action);
    expect(newState.get('isNotificationDrawerVisible')).to.equal(true); // Use get() to access the value
  });
});

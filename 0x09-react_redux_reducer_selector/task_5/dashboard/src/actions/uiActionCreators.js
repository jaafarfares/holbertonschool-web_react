import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from './uiActionTypes';
  
  export function login(email, password) {
    return {
      type: LOGIN,
      user: {
        email: email,
        password: password,
      },
    };
  }
  
  export function logout() {
    return {
      type: LOGOUT,
    };
  }
  
  export function displayNotificationDrawer() {
    return {
      type: DISPLAY_NOTIFICATION_DRAWER,
    };
  }
  
  export function hideNotificationDrawer() {
    return {
      type: HIDE_NOTIFICATION_DRAWER,
    };
  }

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}
export function loginRequest(email, password) {
  return async (dispatch) => {
    dispatch(login());
    try {
      const response = await fetch('/login-success.json');
      if (response.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
}

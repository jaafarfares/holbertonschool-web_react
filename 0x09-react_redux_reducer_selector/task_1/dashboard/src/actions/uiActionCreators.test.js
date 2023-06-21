import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  loginRequest,
  login,
  loginSuccess,
  loginFailure,
} from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

test('loginRequest action', () => {
  const store = mockStore({});
  const expectedActions = [
    { type: LOGIN },
    { type: LOGIN_SUCCESS },
  ];

  fetchMock.getOnce('/login-success.json', 200);

  return store.dispatch(loginRequest('user@example.com', 'password')).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

test('loginRequest action - API failure', () => {
  const store = mockStore({});
  const expectedActions = [
    { type: LOGIN },
    { type: LOGIN_FAILURE },
  ];

  fetchMock.getOnce('/login-success.json', 500);

  return store.dispatch(loginRequest('user@example.com', 'password')).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

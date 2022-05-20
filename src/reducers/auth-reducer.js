/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
  userName: '',
};

const authReducer = produce((draftState, action = {}) => {
  switch (action.type) {
  case ActionTypes.AUTH_USER:
    console.log('auth_user');
    draftState.authenticated = true;
    // console.log(action.payload);
    break;
  case ActionTypes.DEAUTH_USER:
    // eslint-disable-next-line prefer-destructuring
    console.log('deauth_user');
    draftState.authenticated = false;
    break;
  case ActionTypes.AUTH_ERROR:
    console.log('auth_error');
    draftState.authenticated = false;
    break;
  default:
    console.log(action.type);
    break;
  }
}, initialState);

export default authReducer;

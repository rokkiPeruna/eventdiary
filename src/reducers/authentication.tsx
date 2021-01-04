import { useDispatch } from 'react-redux';
import { is_logged_in } from '../actions';
import {IUserCredentials} from '../interfaces';

type AUTH_ACTION_TYPE =
  | { type: 'LOG_IN', payload: IUserCredentials }
  | { type: 'LOG_OUT' }

export const authenticationReducer = (state: IUserCredentials = {username: "", password: ""}, action: AUTH_ACTION_TYPE) => {
  switch(action.type) {
    case 'LOG_IN':
      const username = state.username;
      const password = state.password;
      if(username === "testuser" && password === "testuser") {
        const dispatch = useDispatch();
        dispatch(is_logged_in(true));
      }
      return true;
    case 'LOG_OUT':
      const dispatch = useDispatch();
      dispatch(is_logged_in(false));
      return true;
    default:
      return state;
  }
};


type IS_LOGGED_ACTION_TYPE =
  | { type: 'IS_LOGGED_IN' }

export const isLoggedReducer = (state: boolean = false, action: IS_LOGGED_ACTION_TYPE) => {
  switch(action.type) {
    case 'IS_LOGGED_IN':
      return true;
    default:
      return state;
  }
};

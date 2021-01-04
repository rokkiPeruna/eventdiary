import entryReducer from './entries';
import { combineReducers } from 'redux';
import { isLoggedReducer, authenticationReducer } from './authentication';

const allReducers = combineReducers({
  entries: entryReducer,
  isLogged: isLoggedReducer,
  authentication: authenticationReducer
});

export default allReducers;

export type AppState = ReturnType<typeof allReducers>;

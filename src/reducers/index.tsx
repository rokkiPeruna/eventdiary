import entryReducer from './entries';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  entries: entryReducer
});

export default allReducers;

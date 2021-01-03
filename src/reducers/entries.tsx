import { BasicEventFormat } from '../components/event_formats';

type ENTRIES_ACTION_TYPE =
  | { type: 'ADD_ENTRY'; payload: BasicEventFormat}
  | { type: 'REMOVE_ENTRY'; payload: number}


const entryReducer = (state: BasicEventFormat[] = [], action: ENTRIES_ACTION_TYPE) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      let entries = state.slice();
      entries.push(action.payload);
      return entries;
    case 'REMOVE_ENTRY':

      return state;
    default:
      return state;
  }
}

export default entryReducer;

import { BasicEventFormat } from '../components/event_formats';

type ENTRIES_ACTION_TYPE =
  | { type: 'ADD_ENTRY'; payload: BasicEventFormat }
  | { type: 'REMOVE_ENTRY'; payload: number }


const entryReducer = (state: BasicEventFormat[] = [], action: ENTRIES_ACTION_TYPE) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      let add_entries = state.slice();
      add_entries.push(action.payload);
      return add_entries;

      case 'REMOVE_ENTRY':
      return state.slice().filter(e => {return e._id !== action.payload});

      default:
      return state;
  }
}

export default entryReducer;

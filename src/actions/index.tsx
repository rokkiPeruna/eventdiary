import { BasicEventFormat } from '../components/event_formats';

export const add_entry = () => {
  return {
    type: 'ADD_ENTRY',
    payload: new BasicEventFormat()
  }
};

export const remove_entry = (id: number) => {
  return {
    type: 'REMOVE_ENTRY',
    payload: id
  }
};

import { singleEntryTemplate } from '../reducers/entries';
export const add_entry = () => {
  return {
    type: 'ADD_ENTRY',
    payload: singleEntryTemplate
  }
};

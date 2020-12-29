import React from 'react';
import { useSelector } from 'react-redux';
import { isConditionalExpression } from 'typescript';

type AdditionalEntryData = {
  header: string,
  data: string
};

interface ISingleEntry {
  _id: number,
  time: string[],
  date: string,
  location: string,
  coordinates: string,
  description: string,
  additionals: AdditionalEntryData[]
};
export const singleEntryTemplate: ISingleEntry = {
  _id: -1,
  time: ["00:00"],
  date: "01.01.1970",
  location: "",
  coordinates: "",
  description: "",
  additionals: []
};

type ENTRIES_ACTION_TYPE =
  | { type: 'ADD_ENTRY'; payload: ISingleEntry}
  | { type: 'DEL_ENTRY'; payload: number}


const entryReducer = (state: ISingleEntry[] = [], action: ENTRIES_ACTION_TYPE) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      let entries = state;
      entries.push(action.payload);
      return entries;
    case 'DEL_ENTRY':

      return state;
    default:
      return state;
  }
}

export default entryReducer;

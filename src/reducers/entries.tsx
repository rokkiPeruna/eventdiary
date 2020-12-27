import React from 'react';

type AdditionalEntryData = {
  header: string,
  data: string
};

interface SingleEntry {
  _id: number,
  time: string,
  date: string,
  location: string,
  coordinates: string,
  description: string,
  additionals: AdditionalEntryData[]
};

type ENTRIES_ACTION_TYPE =
  | { type: 'ADD_ENTRY'; payload: SingleEntry}
  | { type: 'DEL_ENTRY'; payload: number}


const entryReducer = (state = 0, action: ENTRIES_ACTION_TYPE) => {
  switch(action.type) {
    case 'ADD_ENTRY':
      return  {};
    case 'DEL_ENTRY':
      return  {};
  }
}

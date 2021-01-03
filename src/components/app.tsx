import React from 'react';
import { AddNewEventEntry, EventEntryTable } from './components'
import { useSelector } from 'react-redux';
import { AppState } from '../reducers';

function App(props: any) {
  const entries = useSelector((state: AppState) => state.entries);
  return (
    <div>
      <div>
        <AddNewEventEntry />
      </div>
      <div>
          <EventEntryTable user_entries={entries} />
      </div>
    </div>
  )
}

export default App;

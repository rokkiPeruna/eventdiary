import React from 'react';
import { LoginInput } from './user_auth';
import { AddNewEventEntry, EventEntryTable } from './components'
import { useSelector } from 'react-redux';
import { AppState } from '../reducers';

function App(props: any) {
  const entries = useSelector((state: AppState) => state.entries);
  const isLogged = useSelector((state: AppState) => state.isLogged);
  if(isLogged) {
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
  } else {
    return (
      <div>
        <LoginInput />
      </div>
    )
  }
}

export default App;

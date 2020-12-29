import React from 'react';
import { useDispatch } from 'react-redux';
import { add_entry } from '../actions/add_entry';
import * as formats from './formats';


/* Single event entry contains all data needed to present single event entry */
// TODO: Event structure should be determined by used event template, e.g.
/* {
  Date: {format: string},
  Time: {format: string},
  Description: {format: string},
  ...

  Event template keys would be 'headers' and format would tell which component to use.
*/
class SingleEventEntry extends React.Component {
  render() {
    return (
      <div className="row">
        <formats.LocationData />
        <formats.CoordinatesData />
        <formats.DateData />
        <formats.TimeData />
        <formats.DesctiptionData />
      </div>
    );
  }
}

/* Component for adding new events */
export function AddNewEventEntry() {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(add_entry())} >
      Add
    </button>
  );
};

/* Contains all event entries for single user */
export class EventEntryTable extends React.Component {
  render() {
    return (
      <div>
        <div>
          <AddNewEventEntry />
        </div>
        <div>
          <SingleEventEntry />
          <SingleEventEntry />
          <SingleEventEntry />
        </div>
      </div>
    );
  }
}

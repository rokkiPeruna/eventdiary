import React from 'react';
import { useDispatch } from 'react-redux';
import { add_entry, remove_entry } from '../actions';
import * as formats from './event_formats';
import { StringDataInputProps } from '../interfaces'

/* Header and data input as string */
export function StringDataInput(props: StringDataInputProps) {
  return (
    <div className="string-data">
      <h3>
        {props.header}
      </h3>
      <input placeholder={props.placeholder}>
      </input>
    </div>
  )
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

/* Component for removing event */
export function RemoveEventEntry(props: {id: number}) {
  const dispatch = useDispatch();
  return (
    <button onClick={ () => dispatch(remove_entry(props.id)) } >
      Remove
    </button>
  );
}

/* Single event entry contains all data needed to present single event entry */
const SingleEventEntry = (props: {entry_data: formats.BasicEventFormat}) => {
  const input_fields = props.entry_data.input_fields.slice();

  const input_comps = input_fields.map(ifield => {
    <div>
      <StringDataInput header={ifield.header} placeholder={ifield.placeholder} />
      <RemoveEventEntry id={props.entry_data._id} />
    </div>
  });

  console.log(input_comps.length);
  console.log(props.entry_data);

  return (
  <div className="row">
    {input_comps}
  </div>
  )
}

/* Contains all event entries for single user */
export function EventEntryTable(props: {user_entries: formats.BasicEventFormat[]}) {
  let entries = props.user_entries.map(item => item);
  return (
    <div>
      <div>
        {entries.map( (item: formats.BasicEventFormat, index: number) =>
          <SingleEventEntry key={index} entry_data={item} />
        )}
      </div>
    </div>
  )
}

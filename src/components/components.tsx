import { useDispatch } from 'react-redux';
import { add_entry, remove_entry } from '../actions';
import * as formats from './event_formats';
import { IStringDataInputProps } from '../interfaces'


/* Header and data input as string */
export function StringDataInput(props: IStringDataInputProps) {
  return (
    <div className="string-data">
      <h3>
        {props.header}
      </h3>
      <input placeholder={props.placeholder}>
      </input>
    </div>
  )
};

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
  const id = props.entry_data._id;
  const input_comps = input_fields.map((ifield, index) => {
    return (
      <div key={index} className="column">
        <StringDataInput header={ifield.header} placeholder={ifield.placeholder} />
      </div>
    )
  });
  input_comps.push( // TODO: Remove hard-coded RemoveEventEntry key value
    <div key={id + 10000}>
     <RemoveEventEntry id={id} />
    </div>
  )

  return (
  <div>
    <div className="row">
      {input_comps}
    </div>
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

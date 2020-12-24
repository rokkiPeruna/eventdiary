import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

interface StringDataInputProps {
  header: "StringDataInput",
  data: null,
  placeholder: "placeholder"
}

/* Header and data input as string */
class StringDataInput extends React.Component {
  constructor(props: StringDataInputProps) {
    super(props);
    this.state = {
      header: "StringDataInput",
      data: null,
      placeholder: "placeholder"
    };
  }

  render() {
    return (
      <div className="string-data">
        <h3>
          {this.props.header}
        </h3>
        <input placeholder={this.props.placeholder}>

        </input>
      </div>
    )
  }
}

/* Location entry takes user given location as string */
class LocationEntry extends React.Component {
  render() {
    return (
      <div className="column">
        <StringDataInput
          header="Location"
          placeholder="Set location"
          />
      </div>
    );
  }
}

/* Coordinate entry takes user given coordinates as string */
// TODO: Coordinate format
class CoordinatesEntry extends React.Component {
  render() {
    return (
      <div className="column">
        <StringDataInput
          header="Coordinates"
          placeholder="Set coordinates"
        />
      </div>
    );
  }
}

/* Date entry takes user given date as string */
// TODO: When clicked, this component could show calender from which
// user could pick correct date(s)
class DateEntry extends React.Component {
  render() {
    return (
      <div className="column">
        <StringDataInput
          header="Date"
          placeholder="Set date"
        />
      </div>
    );
  }
}

/* Time entry takes user given start time and additionally end time */
class TimeEntry extends React.Component {
  render() {
    return (
      <div className="column">
        <StringDataInput
          header="Time"
          placeholder="Set time"
        />
      </div>
    );
  }
}

/* Description entry takes user given description of the event as string */
class DescriptionEntry extends React.Component {
  render() {
    return (
      <div className="column">
        <StringDataInput
          header="Description"
          placeholder="..."
        />
      </div>
    );
  }
}

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
        <LocationEntry />
        <CoordinatesEntry />
        <DateEntry />
        <TimeEntry />
        <DescriptionEntry />
      </div>
    );
  }
}

/* Component for adding new events */
class AddNewEventEntry extends React.Component {
  render() {
    return (
      <button onClick={() => console.log("Clicked")} >
        Add
      </button>
    );
  }
}

/* Contains all event entries for single user */
class EventEntryTable extends React.Component {
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

ReactDOM.render(
  <EventEntryTable />,
  document.getElementById('root')
)
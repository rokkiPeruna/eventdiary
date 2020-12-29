import React from 'react';

interface StringDataInputProps {
  header: string,
  placeholder: string
}

/* Header and data input as string */
class StringDataInput extends React.Component<StringDataInputProps> {
  constructor(props: StringDataInputProps) {
    super(props);
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
export function LocationData() {
  return (
    <div className="column">
      <StringDataInput
        header="Location"
        placeholder="Set location"
        />
    </div>
  );
};

/* Coordinate entry takes user given coordinates as string */
// TODO: Coordinate format
export function CoordinatesData() {
  return (
    <div className="column">
      <StringDataInput
        header="Coordinates"
        placeholder="Set coordinates"
      />
    </div>
  );
};

/* Date entry takes user given date as string */
// TODO: When clicked, this component could show calender from which
// user could pick correct date(s)
export function DateData() {
  return (
    <div className="column">
      <StringDataInput
        header="Date"
        placeholder="Set date"
      />
    </div>
  );
};

/* Time entry takes user given start time and additionally end time */
export function TimeData() {
  return (
    <div className="column">
      <StringDataInput
        header="Time"
        placeholder="Set time"
      />
    </div>
  );
};

/* Description entry takes user given description of the event as string */
export function DesctiptionData() {
  return (
    <div className="column">
      <StringDataInput
        header="Description"
        placeholder="..."
      />
    </div>
  );
};

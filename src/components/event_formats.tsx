import { StringDataInput } from './components'

type IStringDataInput = {
  format: typeof StringDataInput,
  header: string,
  placeholder: string
}

/** Basic event format */
export class BasicEventFormat {
  _id: number;
  input_fields: IStringDataInput[];

  constructor() {
    this._id = -1;
    this.input_fields = [
      {
        format: StringDataInput,
        header: "Event",
        placeholder: "Event name"
      },
      {
        format: StringDataInput,
        header: "Location",
        placeholder: "Set location"
      },
      {
        format: StringDataInput,
        header: "Date",
        placeholder: "Set date"
      },
      {
        format: StringDataInput,
        header: "Location",
        placeholder: "Set location"
      },
      {
        format: StringDataInput,
        header: "Description",
        placeholder: "..."
      }
    ]
  }
}

/** Hunting event format */
export class HuntingEventFormat extends BasicEventFormat {
  constructor() {
    super();
    this.input_fields = this.input_fields.concat([
      {
        format: StringDataInput,
        header: "Coordinates",
        placeholder: "Set coordinates"
      },
      {
        format: StringDataInput,
        header: "Spoil",
        placeholder: "Spoil"
      }
    ])
  }
}

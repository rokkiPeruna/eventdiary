import { BasicEventFormat } from 'components/event_formats';

type IUserCredentials = {
  username: string,
  password: string
}

type IStringDataInputProps = {
  header: string,
  placeholder: string
}

type ISingleEntry = {
  _id: number,
  event_format: typeof BasicEventFormat
};

type IEntries = {
  user: string,
  entries: ISingleEntry[]
}

import { BasicEventFormat } from 'components/event_formats';

interface StringDataInputProps {
  header: string,
  placeholder: string
}

type IAdditionalEntryData = {
  header: string,
  data: string
};

type ISingleEntry = {
  _id: number,
  event_format: typeof BasicEventFormat
};

type IEntries = {
  user: string,
  entries: ISingleEntry[]
}

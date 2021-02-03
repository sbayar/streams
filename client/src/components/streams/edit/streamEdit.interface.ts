import { Stream } from '../../../reducers/stream/streamReducer.interface';
import { FormValue } from '../common.interface';

export interface StreamEditProps {
  fetchStream: (id: number) => void;
  editStream: (id: number, formValues: FormValue) => void;
  match: any;
  stream: Stream;
}

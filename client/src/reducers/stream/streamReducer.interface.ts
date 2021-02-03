import { Types } from '../../actions/types.enum';

export interface Stream {
  id: number;
  title: string;
  description: string;
}

export interface StreamAction {
  type: Types;
  payload: Stream & Stream[] & number;
}

export interface StreamState {
  [key: number]: Stream;
}

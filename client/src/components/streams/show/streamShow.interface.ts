import { Stream } from "../../../reducers/stream/streamReducer.interface";

export interface StreamShowProps {
  fetchStream: (id: number) => void;
  match: any;
  stream: Stream;
}

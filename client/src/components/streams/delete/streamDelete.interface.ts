import { Stream } from "../../../reducers/stream/streamReducer.interface";

export interface StreamDeleteProps {
    fetchStream: (id: number) => void;
    deleteStream: (id: number) => void;
    match: any;
    stream: Stream;
}
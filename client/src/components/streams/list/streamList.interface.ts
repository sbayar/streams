import { Stream } from "../../../reducers/stream/streamReducer.interface";

export interface StreamListProps {
    fetchStreams: () => void;
    currentUserId: number;
    streams: Stream[];
    isSignedIn: boolean;
}
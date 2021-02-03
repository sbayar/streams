import { Types } from '../../actions/types.enum';
import { mapKeys, omit } from 'lodash';
import { StreamAction, StreamState } from './streamReducer.interface';

const streamReducer = (state: StreamState = {}, action: StreamAction) => {
  switch (action.type) {
    case Types.FETCH_STREAMS:
      return {...state, ...mapKeys(action.payload, 'id')};
    case Types.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case Types.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case Types.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case Types.DELETE_STREAM:
      return omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;

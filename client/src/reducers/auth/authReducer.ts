import { Types } from '../../actions/types.enum';
import { AuthAction } from './authReducer.interface';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, action: AuthAction) => {
  switch (action.type) {
    case Types.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case Types.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};

export default authReducer;

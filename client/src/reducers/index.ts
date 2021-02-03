import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth/authReducer';
import streamReducer from './stream/streamReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
});

import streams from '../apis/streams';
import history from '../history';

import { Types } from './types.enum';

export const signIn = (userId: string) => {
  return {
    type: Types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: Types.SIGN_OUT,
  };
};

export const createStream = (formValues: any) => async (dispatch: any, getState: any) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', {...formValues, userId});

  dispatch({ type: Types.CREATE_STREAM, payload: response.data });
  history.push('/');
};

export const fetchStreams = () => async (dispatch: any) => {
  const response = await streams.get('/streams');

  dispatch({ type: Types.FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id: number) => async (dispatch: any) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: Types.FETCH_STREAM, payload: response.data });
};

export const editStream = (id: number, formValues: any) => async (dispatch: any) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: Types.EDIT_STREAM, payload: response.data });
  history.push('/');
};

export const deleteStream = (id: number) => async (dispatch: any) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: Types.DELETE_STREAM, payload: id });
  history.push('/');
};

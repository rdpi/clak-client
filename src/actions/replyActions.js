import axios from 'axios';

export const FETCH_REPLIES_BEGIN = 'FETCH_REPLIES_BEGIN';
export const FETCH_REPLIES_SUCCESS = 'FETCH_REPLIES_SUCCESS';
export const FETCH_REPLIES_FAILURE = 'FETCH_REPLIES_FAILURE';
export const ADD_REPLY_LINK = 'ADD_REPLY_LINK';
export const RESET_REPLIES = 'RESET_REPLIES';

export const fetchRepliesBegin = () => ({
  type: FETCH_REPLIES_BEGIN,
});

export const fetchRepliesSuccess = (replies, thread) => ({
  type: FETCH_REPLIES_SUCCESS,
  payload: { replies, thread },
});

export const fetchRepliesError = error => ({
  type: FETCH_REPLIES_FAILURE,
  payload: { error },
});

export const resetReplies = () => ({
  type: RESET_REPLIES,
});

export const addReplyLink = (replyto, replyfrom) => ({
  type: ADD_REPLY_LINK,
  payload: { replyfrom, replyto },
});

export function fetchReplies(boardid, threadid) {
  return (dispatch) => {
    (fetchRepliesBegin());
    return axios.get(`${process.env.REACT_APP_CLAK_API}/${boardid}/thread/${threadid}`)
      .then(res => res.data)
      .then((data) => {
        dispatch(fetchRepliesSuccess(data.replies, data.thread));
        return data;
      })
      .catch(error => dispatch(fetchRepliesError(error)));
  };
}

import axios from 'axios';

export const FETCH_THREADS_BEGIN = 'FETCH_THREADS_BEGIN';
export const FETCH_THREADS_SUCCESS = 'FETCH_THREADS_SUCCESS';
export const FETCH_THREADS_FAILURE = 'FETCH_THREADS_FAILURE';
export const RESET_THREADS = 'RESET_THREADS';
export const SEARCH_THREADS_QUERY = 'SEARCH_THREADS_QUERY';

export const fetchThreadsBegin = () => ({
  type: FETCH_THREADS_BEGIN,
});

export const fetchThreadsSuccess = (threads, board) => ({
  type: FETCH_THREADS_SUCCESS,
  payload: { threads, board },
});

export const fetchThreadsError = error => ({
  type: FETCH_THREADS_FAILURE,
  payload: { error },
});

export function fetchThreads(boardid) {
  return (dispatch) => {
    (fetchThreadsBegin());
    return axios.get(`${process.env.REACT_APP_CLAK_API}/${boardid}`)
      .then(res => res.data)
      .then((data) => {
        dispatch(fetchThreadsSuccess(data.threads, data.board));
        return data;
      })
      .catch(error => dispatch(fetchThreadsError(error)));
  };
}

export const resetThreads = () => ({
  type: RESET_THREADS,
});

export const searchThreadsQuery = query => ({
  type: SEARCH_THREADS_QUERY,
  payload: query,
});

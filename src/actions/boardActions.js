import axios from 'axios';

export const FETCH_BOARDS_BEGIN = 'FETCH_BOARDS_BEGIN';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_FAILURE = 'FETCH_BOARDS_FAILURE';
export const SEARCH_BOARDS_QUERY = 'SEARCH_BOARDS_QUERY';

// actions to fetch list of boards
export const fetchBoardsBegin = () => ({
  type: FETCH_BOARDS_BEGIN,
});

export const fetchBoardsSuccess = boards => ({
  type: FETCH_BOARDS_SUCCESS,
  payload: { boards },
});

export const fetchBoardsError = error => ({
  type: FETCH_BOARDS_FAILURE,
  payload: { error },
});

export function fetchBoards() {
  return (dispatch) => {
    (fetchBoardsBegin());
    return axios.get('http://localhost:5000')
      .then(res => res.data.boards)
      .then((boards) => {
        dispatch(fetchBoardsSuccess(boards));
        return boards;
      })
      .catch(error => dispatch(fetchBoardsError(error)));
  };
}

export const searchBoardsQuery = query => ({
  type: SEARCH_BOARDS_QUERY,
  payload: query,
});

import {
  FETCH_BOARDS_BEGIN,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE,
  SEARCH_BOARDS_QUERY,
} from '../actions/boardActions';

const initialState = {
  boardlist: [],
  displayed: [],
  loading: false,
  error: null,
};

export default function boardReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOARDS_BEGIN:

      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_BOARDS_SUCCESS:
      return {
        ...state,
        loading: false,
        boardlist: action.payload.boards,
        displayed: action.payload.boards,
      };

    case FETCH_BOARDS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        boardlist: [],
      };

    case SEARCH_BOARDS_QUERY:
      return {
        ...state,
        displayed: state.boardlist.filter(board => (board.uri.indexOf(action.payload) > -1) || (board.title.indexOf(action.payload) > -1)),
      };

    default:
      return state;
  }
}

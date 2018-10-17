import {
  FETCH_BOARDS_BEGIN,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILURE
} from '../actions/boardActions';

const initialState = {
  boardlist: [],
  loading: false,
  error: null
};

export default function boardReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_BOARDS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_BOARDS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the boardlist with the ones from the server
      return {
        ...state,
        loading: false,
        boardlist: action.payload.boards
      };

    case FETCH_BOARDS_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have boardlist to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the boardlist
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        boardlist: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}


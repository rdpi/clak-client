import {
  FETCH_REPLIES_BEGIN,
  FETCH_REPLIES_SUCCESS,
  FETCH_REPLIES_FAILURE
} from '../actions/replyActions';

const initialState = {
  replylist: [],
  currentthread: {},
  loading: false,
  error: null
};

export default function threadReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_REPLIES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,        
		replylist: [],
		currenthread: {},
      };

    case FETCH_REPLIES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the threadlist with the ones from the server
      return {
        ...state,
        loading: false,
        replylist: action.payload.replies,
		currentthread: action.payload.thread
      };

    case FETCH_REPLIES_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have threadlist to display anymore, so set it empty.
      // This is up to you and your app though: maybe you want to keep the threadlist
      // around! Do whatever seems right.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        replylist: [],
		currenthread: {},
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}


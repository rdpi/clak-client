import {
  FETCH_THREADS_BEGIN,
  FETCH_THREADS_SUCCESS,
  FETCH_THREADS_FAILURE,
  RESET_THREADS,
  SEARCH_THREADS_QUERY,
} from '../actions/threadActions';

const initialState = {
  threadlist: [],
  displayed: [],
  currentboard: {},
  loading: false,
  error: null,
  boardlabel: '',
};

export default function threadReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_THREADS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_THREADS_SUCCESS:
      return {
        ...state,
        loading: false,
        threadlist: action.payload.threads,
        displayed: action.payload.threads,
        currentboard: action.payload.board,
        boardlabel: `/${action.payload.board.uri}/ - ${action.payload.board.title}`,
      };

    case FETCH_THREADS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        threadlist: [],
        displayed: [],
        currentboard: {},
      };

    case RESET_THREADS:
      return {
        ...state,
        loading: true,
        threadlist: [],
        displayed: [],
        currentboard: {},
      };

    case SEARCH_THREADS_QUERY:
      return {
        ...state,
        displayed: state.threadlist.filter((thread) => {
          let { subject, body } = thread;
          if (!thread.subject) { subject = ''; }
          if (!thread.body) { body = ''; }

          return ((thread.name.toLowerCase().indexOf(action.payload.toLowerCase()) > -1)
          || (subject.toLowerCase().indexOf(action.payload.toLowerCase()) > -1)
          || (body.toLowerCase().indexOf(action.payload.toLowerCase()) > -1));
        }),
      };


    default:
      return state;
  }
}

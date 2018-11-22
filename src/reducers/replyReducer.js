import {
  FETCH_REPLIES_BEGIN,
  FETCH_REPLIES_SUCCESS,
  FETCH_REPLIES_FAILURE,
  RESET_REPLIES,
  ADD_REPLY_LINK,
} from '../actions/replyActions';

const initialState = {
  replylinks: {},
  replylist: [],
  currentthread: {},
  loading: false,
  error: null,
};

export default function threadReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPLIES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        replylist: [],
        currenthread: {},
        replylinks: {},
      };

    case FETCH_REPLIES_SUCCESS:
      return {
        ...state,
        loading: false,
        replylist: action.payload.replies,
        currentthread: action.payload.thread,
      };

    case FETCH_REPLIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        replylist: [],
        currenthread: {},
        replylinks: {},
      };

    case ADD_REPLY_LINK:

      if (!state.replylinks[action.payload.replyfrom]) {
        return {
          ...state,
          replylinks: {
            ...state.replylinks,
            [action.payload.replyfrom]: [action.payload.replyto],
          },
        };
      }
      
      return {
        ...state,
        replylinks: {
          ...state.replylinks,
          [action.payload.replyfrom]: [...state.replylinks[action.payload.replyfrom], action.payload.replyto],
        },
      };

    case RESET_REPLIES:
      return {
        ...state,
        loading: true,
        replylist: [],
        currentthread: {},
        replylinks: {},
      };

    default:
      return state;
  }
}

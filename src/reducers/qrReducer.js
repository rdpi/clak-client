import { EXPAND_QR, COLLAPSE_QR } from '../actions/qrActions';

const initialState = {
  collapsed: true,
};

export default function qrReducer(state = initialState, action) {
  switch (action.type) {
    case EXPAND_QR:
      return {
        collapsed: false,
      };

    case COLLAPSE_QR:
      return {
        collapsed: true,
      };
    default:
      return state;
  }
}

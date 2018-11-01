import {
  combineReducers,
} from 'redux';
import { reducer as formReducer } from 'redux-form';
import boardReducer from './boardReducer';
import threadReducer from './threadReducer';
import replyReducer from './replyReducer';
import qrReducer from './qrReducer';


const rootReducer = combineReducers({
  boards: boardReducer,
  threads: threadReducer,
  replies: replyReducer,
  form: formReducer,
  qr: qrReducer,
});

export default rootReducer;

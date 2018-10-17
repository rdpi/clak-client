import {
	combineReducers
} from 'redux'
import boardReducer from './boardReducer'
import threadReducer from './threadReducer'
import replyReducer from './replyReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
	boards: boardReducer,
	threads: threadReducer,
	replies: replyReducer,
	form: formReducer
})

export default rootReducer

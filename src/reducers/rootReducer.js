import {
	combineReducers
} from 'redux'
import boardReducer from './boardReducer'
import threadReducer from './threadReducer'
import replyReducer from './replyReducer'

const rootReducer = combineReducers({
	boards: boardReducer,
	threads: threadReducer,
	replies: replyReducer
})

export default rootReducer

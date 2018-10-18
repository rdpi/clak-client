import axios from 'axios'

export const FETCH_REPLIES_BEGIN = "FETCH_REPLIES_BEGIN";
export const FETCH_REPLIES_SUCCESS = "FETCH_REPLIES_SUCCESS";
export const FETCH_REPLIES_FAILURE = "FETCH_REPLIES_FAILURE";
export const RESET_REPLIES = "RESET_REPLIES";

export const fetchRepliesBegin = () => ({
  type: FETCH_REPLIES_BEGIN
});

export const fetchRepliesSuccess = (replies, thread) => ({
  type: FETCH_REPLIES_SUCCESS,
  payload: { replies, thread }
});

export const fetchRepliesError = error => ({
  type: FETCH_REPLIES_FAILURE,
  payload: { error }
});

export const resetReplies = () => ({
	type: RESET_REPLIES
});

export function fetchReplies(boardid, threadid){
		return dispatch =>{ (fetchRepliesBegin());
		return axios.get("http://localhost:5000/"+boardid+"/thread/"+threadid)
		.then(res => res.data)
		.then(data =>{ dispatch(fetchRepliesSuccess(data.replies, data.thread));
			return data;
		})
		.catch(error => dispatch(fetchRepliesError(error)));
	};
}


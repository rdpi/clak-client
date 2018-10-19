import React, { Component } from 'react';
import QuickReply from '../components/QuickReply';
import Reply from '../components/Reply'
import OPpost from '../components/OPpost';
import {connect} from 'react-redux';
import {fetchReplies, resetReplies} from '../actions/replyActions';
import axios from 'axios';

class Thread extends Component {

	componentDidMount() {
		this.props.dispatch(fetchReplies(this.props.match.params.boardid, this.props.match.params.threadid))	
	}

	componentWillUnmount(){
		this.props.dispatch(resetReplies())
	}

	submit = values => {
    	axios.post(`http://localhost:5000/`+this.props.match.params.boardid+"/thread/"+this.props.match.params.threadid, values)
      	.then(res => {
        	console.log(res);
        	console.log(res.data);
      	})
	}
		

	render() {
		const { error, loading, replies, thread } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading... </div>;
		}

		return(
			<div className = "container">
				<OPpost thread={thread} />
				{replies.map(reply =>
				 <Reply key={reply._id} reply={reply} />
				)}
				<QuickReply board = {this.props.match.params.boardid} thread = {this.props.match.params.threadid}/>
			</div>
		)
	}


}

const mapStateToProps = state => ({
	replies: state.replies.replylist,
	thread: state.replies.currentthread,
	loading: state.replies.loading,
	error: state.replies.error
});

export default connect(mapStateToProps)(Thread);




import React, { Component } from 'react';
import QuickReply from '../components/QuickReply';
import Reply from '../components/Reply'
import OPpost from '../components/OPpost';
import {connect} from 'react-redux';
import {fetchReplies} from '../actions/replyActions';

class Thread extends Component {

	componentDidMount() {
		this.props.dispatch(fetchReplies(this.props.match.params.boardid, this.props.match.params.threadid))	
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




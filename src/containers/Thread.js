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
		const formData = new FormData();
		if (values.name)
			formData.append('name', values.name);
		if (values.body)
			formData.append('body', values.body);
		if(values.file)
			formData.append('file', values.file, values.file.name);
    	axios.post(`http://localhost:5000/`+this.props.match.params.boardid+"/thread/"+this.props.match.params.threadid, formData)
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
			<div className = "container-fluid w-50 threadContainer">
				<OPpost thread={thread} />
				{replies.map(reply =>
				 <Reply key={reply._id} reply={reply} />
				)}
				<QuickReply onSubmit={this.submit}/>
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




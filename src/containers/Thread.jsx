import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import QuickReply from '../components/quickreply/QuickReply';
import Reply from '../components/post/Reply';
import OPpost from '../components/post/OPpost';
import { fetchReplies, resetReplies } from '../actions/replyActions';

class Thread extends Component {
  componentDidMount() {
    this.props.dispatch(fetchReplies(this.props.match.params.boardid, this.props.match.params.threadid));
  }

  componentWillUnmount() {
    this.props.dispatch(resetReplies());
  }

submit = (values) => {
  const formData = new FormData();
  if (values.name) { formData.append('name', values.name); }
  if (values.subject) { formData.append('subject', values.subject); }
  if (values.body) { formData.append('body', values.body); }
  if (values.file) { formData.append('file', values.file, values.file.name); }
  axios.post(`${process.env.REACT_APP_CLAK_API}/${this.props.match.params.boardid}/thread/${this.props.match.params.threadid}`, formData)
    .then((res) => {
      this.props.dispatch(fetchReplies(this.props.match.params.boardid, this.props.match.params.threadid));
      this.props.dispatch(reset('quickreply'));
    });
}


render() {
  const {
    error, loading, replies, thread,
  } = this.props;

  const boardid = this.props.match.params.boardid;

  if (error) {
    return (
      <div>
        Error!
        {' '}
        {error.message}
      </div>
    );
  }

  if (loading) {
    return <div className="loader" />;
  }

  return (
    <div className="container-fluid py-3 ">
      <div className="row">
        <div className="col-xl-3 col-lg-2 col-md-3 col-sm-0">

          <Link to={`/${boardid}`}>
            <button type="button" className="btn btn-primary">
              Return to /
              {boardid}
              /
            </button>
          </Link>

        </div>
        <div className="col-lg-8 col-xl-6 col-md-9 col sm-12 px-2">
          <div className="container-fluid py-2 rounded threadContainer">
            <OPpost thread={thread} />
            {replies.map(reply => <Reply key={reply.postId} reply={reply} />)}            
          </div>
        </div>
        <div className="col-sm-0 col-md-0 col-lg-2 col-xl-3"><QuickReply onSubmit={this.submit} /></div>
      </div>
    </div>
  );
}
}

const mapStateToProps = state => ({
  replies: state.replies.replylist,
  thread: state.replies.currentthread,
  loading: state.replies.loading,
  error: state.replies.error,
});

export default connect(mapStateToProps)(Thread);

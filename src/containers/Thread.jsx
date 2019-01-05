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
  axios.post(`${process.env.REACT_APP_CLAK_API}/api/${this.props.match.params.boardid}/thread/${this.props.match.params.threadid}`, formData)
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
    <div className="col p-0">
      <div className="my-3 text-center">
        <Link to={`/${boardid}`}><button type="button" className="btn btn-primary">
Return to /
{boardid}
/
</button></Link>
      </div>
      <div className="container w-50 mt-3 py-3 rounded threadContainer">
        <OPpost thread={thread} />
        {replies.map(reply => <Reply key={reply._id} reply={reply} />)}
        <QuickReply onSubmit={this.submit} />
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuickReplyForm from './QuickReplyForm';

class QuickReply extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { collapsed, onSubmit } = this.props;
    return (
      <div className="card quickReply border-4">
        <button type="button" className="btn btn-primary" data-toggle="collapse" data-target="#quickReplyForm" aria-expanded="false" aria-controls="quickReplyForm">
          Reply to thread
        </button>
        <div className="collapse" id="quickReplyForm">
          <QuickReplyForm onSubmit={onSubmit}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  collapsed: state.qr.collapse,
});

export default connect(mapStateToProps)(QuickReply);

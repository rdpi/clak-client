import React, { Component } from 'react';

export default class FileInput extends Component {
  constructor(props) {
    super(props);
    this.quotePost = this.quotePost.bind(this);
  }

  quotePost(replyid) {
    console.log(replyid)
  }

  render() {
    const { replyid } = this.props;
    return (
      <button
        type="button"
        className="btn btn-link btn-sm"
        onClick={this.quotePost(replyid)}
      >
        {replyid}
      </button>
    );
  }
}
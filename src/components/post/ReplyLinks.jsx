import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReplyLink } from '../../actions/replyActions';

class ReplyLinks extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { body, id } = this.props;
    body.replace(/\n/g, ' ').split(' ').map((word) => {
      if (word.charAt(0) === '>' && word.charAt(1) === '>') {
        this.props.dispatch(addReplyLink(id, word.substring(2)));
      }
    });
  }

  render() {
    if (id in replylinks) {
      return (
        replylinks[id].map(link => (
            <a className="text-muted px-4" href={`#${id}`}>
              {link}
            </a>))
      );
    }
    return '';
  }
}

const mapStateToProps = state => ({
  replylinks: state.replies.replylinks,
});

export default connect(mapStateToProps)(ReplyLinks);

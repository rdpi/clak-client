import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReplyLink } from '../../actions/replyActions';

class ReplyLinks extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { body, id } = this.props;
    if (body) {
    body.replace(/\n/g, ' ').split(' ').map((word) => {
      if (word.charAt(0) === '>' && word.charAt(1) === '>') {
        this.props.dispatch(addReplyLink(id, word.substring(2)));
      }
    });
}
  }

  render() {
    const { replylinks, id } = this.props;
    if (id in replylinks) {
      console.log('returning replylink');
      return (
        replylinks[id].map(link => (
          <a className="text-muted px-4 replylink" href={`#${link}`}>
            >>{link}
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

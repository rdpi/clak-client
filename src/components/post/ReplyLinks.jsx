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
    body.replace(/\n/g, ' ').split(' ').map((line) => {
      line.split(' ').map((word) => {
        if (word.charAt(0) === '>' && word.charAt(1) === '>') {
          this.props.dispatch(addReplyLink(parseInt(id), word.substring(2)));
        }
      })
    });
}
  }

  render() {
    const { replylinks, id } = this.props;
    console.log('returning replylink');
      console.log(id);
      console.log(replylinks[id]);
    if (id in replylinks) {
      return (
        replylinks[id].map(link => (
          <a className="text-muted mr-2" href={`#${link}`}>
            <u>
            >>{link}
            </u>
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

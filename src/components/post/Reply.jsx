import React from 'react';
import PropTypes from 'prop-types';
import MessageBody from './MessageBody';
import PostImage from './PostImage';
import { ReplyHeader } from './PostHeaders';
import FileInfo from './FileInfo';
import ReplyLinks from './ReplyLinks';

const Reply = ({ reply }) => (
  <div className="card mb-2 mx-auto w-100 replyCard" id={reply.postId}>
    <div className="card-body px-3 pt-2 pb-2 reply">
      <ReplyHeader name={reply.name} date={reply.createdAt} id={reply.postId} />
      <FileInfo
        fileID={reply.file_id}
        filename={reply.filename}
        filesize={reply.filesize}
        width={reply.width}
        height={reply.height}
      />
      <PostImage id={reply.postId} fileID={reply.file_id} height="125" width="125" />
      <MessageBody body={reply.body} />
      <ReplyLinks id={reply.postId} body={reply.body} />
    </div>
  </div>
);

Reply.defaultProps = {
  reply: null,
};

Reply.propTypes = {
  reply: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string,
    filename: PropTypes.string,
    file_id: PropTypes.string,
    filesize: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
};

export default Reply;

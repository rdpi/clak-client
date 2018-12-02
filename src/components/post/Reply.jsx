import React from 'react';
import PropTypes from 'prop-types';
import MessageBody from './MessageBody';
import PostImage from './PostImage';
import { ReplyHeader } from './PostHeaders';
import FileInfo from './FileInfo';
import ReplyLinks from './ReplyLinks';

const Reply = ({ reply }) => (
  <div className="card mb-2 mx-auto w-100 replyCard" id={reply._id}>
    <div className="card-body px-3 pt-2 pb-2 reply">
      <ReplyHeader name={reply.name} date={reply.date} id={reply._id} />
      <FileInfo
        fileID={reply.file_id}
        filename={reply.filename}
        filesize={reply.filesize}
        width={reply.width}
        height={reply.height}
      />
      <PostImage id={reply._id} fileID={reply.file_id} height="125" width="125" />
      <MessageBody body={reply.body} />
    </div>
    <ReplyLinks id={reply._id} body={reply.body} />
  </div>
);

Reply.defaultProps = {
  reply: null,
};

Reply.propTypes = {
  reply: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string,
    filename: PropTypes.string,
    file_id: PropTypes.string,
    filesize: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
};

export default Reply;

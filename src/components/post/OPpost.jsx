import React from 'react';
import PropTypes from 'prop-types';
import FileInfo from './FileInfo';
import PostImage from './PostImage';
import MessageBody from './MessageBody';
import { OPHeader } from './PostHeaders';
import ReplyLinks from './ReplyLinks';

const OPpost = ({ thread }) => (
  <div className="card my-0 border-0" id={thread.postId}>
    <div>
      <FileInfo
        fileID={thread.file_id}
        filename={thread.filename}
        filesize={thread.filesize}
        width={thread.width}
        height={thread.height}
      />
      <div className="card-body px-0 pt-1 border-0">
        <PostImage id={thread.postId} fileID={thread.file_id} height="250" width="250" />
        <OPHeader
          subject={thread.subject}
          name={thread.name}
          date={thread.createdAt}
          id={thread.postId}
        />
        <MessageBody body={thread.body} />
        
      </div>
    </div>
    <div className="my-3">
      <ReplyLinks id={thread.postId} body={thread.body} />
    </div>
  </div>
);

OPpost.defaultProps = {
  thread: null,
};

OPpost.propTypes = {
  thread: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    date: PropTypes.string,
    subject: PropTypes.string,
    body: PropTypes.string,
    filename: PropTypes.string,
    file_id: PropTypes.string,
    filesize: PropTypes.number,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
};

export default OPpost;

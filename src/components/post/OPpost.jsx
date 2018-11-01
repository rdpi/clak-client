import React from 'react';
import PropTypes from 'prop-types';
import FileInfo from './FileInfo';
import PostImage from './PostImage';
import MessageBody from './MessageBody';
import { OPHeader } from './PostHeaders';

const OPpost = ({ thread }) => (
  <div className="card my-0 border-0">
    <FileInfo
      fileID={thread.file_id}
      filename={thread.filename}
      filesize={thread.filesize}
      width={thread.width}
      height={thread.height}
    />
    <div className="card-body px-0 pt-1 border-0">
      <PostImage id={thread._id} fileID={thread.file_id} height="250" width="250" />
      <OPHeader
        subject={thread.subject}
        name={thread.name}
        date={thread.date}
        id={thread._id}
      />
      <MessageBody body={thread.body} />
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

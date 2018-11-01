import React from 'react';
import PropTypes from 'prop-types';
import Bytes from './Bytes';

const FileInfo = ({
  fileID, filename, filesize, width, height,
}) => (
  <div className={(fileID) ? 'text-secondary' : 'd-none'}>
    {' '}
    <a href={`http://res.cloudinary.com/dmalxzhqk/image/upload/${fileID}`}>{filename}</a>
    {' '}
    (
    <Bytes bytes={filesize} />
    ,
    {' '}
    {width}
    x
    {height}
    )
  </div>
);

FileInfo.defaultProps = {
  fileID: null,
  filename: null,
  filesize: null,
  width: null,
  height: null,
};

FileInfo.propTypes = {
  fileID: PropTypes.string,
  filename: PropTypes.string,
  filesize: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default FileInfo;

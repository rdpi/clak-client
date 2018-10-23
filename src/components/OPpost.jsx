import React, { Component } from 'react';
import moment from 'moment';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Bytes from './Bytes';

class OPpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFull: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      showFull: !prevState.showFull,
    }));
  }

  render() {
    const thread = this.props.thread;
    return (
      <div className="card my-0 border-0">
        <FileInfo thread={thread} />
        <div className="card-body px-0 pt-1 border-0">
          <a href={`#${thread._id}`} onClick={this.toggle}>
            {(this.state.showFull) ? <OPImageFull id={thread.file_id} /> : <OPImage id={thread.file_id} />}
          </a>
          <OPHeader thread={thread} />
          {thread.body}
        </div>
      </div>
    );
  }
}

const FileInfo = ({ thread }) => (
  <div className={(thread.file_id) ? 'text-secondary' : 'd-none'}>
    {' '}
    <a href={`http://res.cloudinary.com/dmalxzhqk/image/upload/${thread.file_id}`}>{thread.filename}</a>
    {' '}
    (
    <Bytes bytes={thread.filesize} />
    ,
    {' '}
    {thread.width}
    x
    {thread.height}
    )
  </div>
);

const OPHeader = ({ thread }) => (
  <div className="d-flex flex-wrap justify-content-between">
    <span>
      <span className="subject">
        {thread.subject}
        {' '}
      </span>
      <span className="name">
        {thread.name}
        {' '}
      </span>
      <span>
        {moment(thread.date).fromNow()}
        {' '}
      </span>
    </span>
    <span>
      ID:
      {' '}
      <button type="button" className="btn btn-link btn-sm p-0">{thread._id}</button>
    </span>
  </div>
);

const OPImage = ({ id }) => (
  <CloudinaryContext cloudName="dmalxzhqk">
    <Image className="align-text-top float-left mr-3" publicId={id}>
      <Transformation height="250" width="250" crop="limit" />
    </Image>
  </CloudinaryContext>

);

const OPImageFull = ({ id }) => (
  <div className="d-flex justify-content-center w-100">
    <CloudinaryContext cloudName="dmalxzhqk">
      <Image className="img-fluid my-2" publicId={id} />
    </CloudinaryContext>
  </div>
);


export default OPpost;

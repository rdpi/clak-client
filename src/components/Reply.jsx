import React, { Component } from 'react';
import moment from 'moment';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Bytes from './Bytes';

class Reply extends Component {
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
    const reply = this.props.reply;
    return (
      <div className="card mb-2 mx-auto w-100 replyCard" id={reply._id}>
        <ReplyHeader reply={reply} />
        <FileInfo reply={reply} />
        <div className="card-body px-3 pt-0 pb-2 reply">
          <a href={`#${reply._id}`} onClick={this.toggle} className={(reply.file_id) ? '' : 'd-none'}>
            {(this.state.showFull) ? <ReplyImageFull id={reply.file_id} /> : <ReplyImage id={reply.file_id} />}
          </a>
          {reply.body}
        </div>
      </div>
    );
  }
}

const FileInfo = ({ reply }) => (
  <div className={(reply.file_id) ? 'pl-3 text-secondary' : 'd-none'}>
    {' '}
    <a href={`http://res.cloudinary.com/dmalxzhqk/image/upload/${reply.file_id}`}>{reply.filename}</a>
    {' '}
    (
    <Bytes bytes={reply.filesize} />
    ,
    {' '}
    {reply.width}
    x
    {reply.height}
    )
  </div>
);

const ReplyHeader = ({ reply }) => (
  <div className="px-3 pt-2 d-flex flex-wrap justify-content-between">
    <span>
      <span className="name">{reply.name}</span>
      {' '}
      <span>{moment(reply.date).fromNow()}</span>
    </span>
    <span>
      ID:
      {' '}
      <button type="button" className="btn btn-link btn-sm p-0 m-0">{reply._id}</button>
    </span>
  </div>
);

const ReplyImage = ({ id }) => (
  <CloudinaryContext cloudName="dmalxzhqk">
    <Image className="mr-3 align-text-top float-left img-fluid" publicId={id}>
      <Transformation height="125" width="125" crop="limit" />
    </Image>
  </CloudinaryContext>

);

const ReplyImageFull = ({ id }) => (
  <div className="d-flex justify-content-center w-100">
    <CloudinaryContext cloudName="dmalxzhqk">
      <Image className="img-fluid my-2" publicId={id} />
    </CloudinaryContext>
  </div>
);

export default Reply;

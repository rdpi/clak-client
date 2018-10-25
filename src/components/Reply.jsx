import React, { Component } from 'react';
import moment from 'moment';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';
import Bytes from './Bytes';
import Quote from './Quote';

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
          <a href={`#${reply._id}`} onClick={this.toggle} className={(reply.file_id) ? '' : 'd-none'} alt={`${reply._id} image`}>
            {(this.state.showFull) ? <ReplyImageFull id={reply.file_id} /> : <ReplyImage id={reply.file_id} />}
          </a>
          <span>
            {reply.body.split('\n').map((line) => {
              if (line.charAt(0) === '>' && line.charAt(1) !== '>' && line.charAt(2) !== '>') {
                return (
                  <span className="quote">
                    {line.split(' ').map((word) => {
                      if (word.charAt(0) === '>' && word.charAt(1) === '>') { return <a href={`#${word.substring(2)}`}>{`${word} `}</a>; }
                      return `${word} `;
                    })}
                    <br />
                  </span>
                );
              }
              return (
                <span>
                  {line.split(' ').map((word) => {
                    if (word.charAt(0) === '>' && word.charAt(1) === '>') { return <a href={`#${word.substring(2)}`}>{word}</a>; }
                    return `${word} `;
                  })}
                  <br />

                </span>
              );
            })
          }

          </span>
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
      <Quote replyid={reply._id} />
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

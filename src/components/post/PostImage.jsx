import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';

class PostImage extends Component {
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
    const {
      id, fileID, height, width,
    } = this.props;
    const { showFull } = this.state;
    return (
      <a href={`#${id}`} onClick={this.toggle} className={(fileID) ? '' : 'd-none'} alt={`${id} image`}>
        {(showFull) ? <ReplyImageFull id={fileID} />
          : <ReplyImage id={fileID} height={height} width={width} />}
      </a>
    );
  }
}

PostImage.defaultProps = {
  id: null,
  fileID: null,
  height: null,
  width: null,
};

PostImage.propTypes = {
  id: PropTypes.number,
  fileID: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default PostImage;

const ReplyImage = ({ id, height, width }) => (
  <CloudinaryContext cloudName="dmalxzhqk">
    <Image className="mr-3 align-text-top float-left img-fluid" publicId={id}>
      <Transformation height={height} width={width} crop="limit" />
    </Image>
  </CloudinaryContext>
);

ReplyImage.defaultProps = {
  id: null,
  height: null,
  width: null,
};

ReplyImage.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

const ReplyImageFull = ({ id }) => (
  <div className="d-flex justify-content-center w-100">
    <CloudinaryContext cloudName="dmalxzhqk">
      <Image className="img-fluid my-2" publicId={id} />
    </CloudinaryContext>
  </div>
);

ReplyImageFull.defaultProps = {
  id: null,
};

ReplyImageFull.propTypes = {
  id: PropTypes.string,
};

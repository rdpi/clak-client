import React from 'react';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react';


const CatalogCard = ({ board, thread }) => (
  <Link className="catalogLink" to={`${board.uri}/thread/${thread.postId}`}>
    <div className="card mx-2 my-2 catalogCard">

      <CloudinaryContext cloudName="dmalxzhqk">
        <Image className="card-img-top" publicId={thread.file_id}>
          <Transformation height="200" width="200" crop="fill" />
        </Image>
      </CloudinaryContext>

      <h6 className="card-title mt-2 subject text-center  mx-1 mt-1 mb-1">
        {thread.subject}
      </h6>
      <div className="card-body catalogCardBody">
        <p className="card-text text-center m-2">
          <Truncate lines={9}>
            {thread.body}
          </Truncate>
        </p>
      </div>
      <div className="card-footer border-top-0">
        <table align="center">
          <tr>
            <td style={{ textAlign: 'right' }}>{thread.replies - 1}</td>
            <td>{thread.replies - 1 === 1 ? 'reply' : 'replies'}</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'right' }}>{thread.images}</td>
            <td>{thread.images === 1 ? 'image' : 'images'}</td>
          </tr>
          <tr>
            <td style={{ textAlign: 'right' }}>{thread.ips}</td>
            <td>{thread.ips === 1 ? 'poster' : 'posters'}</td>
          </tr>
        </table>
      </div>
    </div>
  </Link>
);

export default CatalogCard;

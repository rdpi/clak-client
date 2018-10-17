import React from 'react';
import moment from 'moment';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

const Reply = ({reply}) => (
		<div className = "card my-1 mx-auto replyCard w-75" id={reply._id}>
			<span className="card-header border-bottom-0 d-flex justify-content-between replyCardHeader"><span><span className="name">{reply.name}</span></span><span><span>{moment(reply.date).fromNow()}</span> PostID: <a href={"javascript:quote("+reply._id+");"}>{reply._id}</a></span></span>
			<div className = "card-body reply">
		<CloudinaryContext className="d-inline" cloudName="dmalxzhqk">
			<Image className="mr-4 align-text-top" publicId={reply.media}>
  				<Transformation height="125" width="125" crop="limit"/>
			</Image>
		</CloudinaryContext>
				{reply.body}
			</div>
		</div>
);

export default Reply;

import React from 'react';
import {Link} from 'react-router-dom';
import Truncate from 'react-truncate';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';


const CatalogCard = ({board, thread}) => (
	<div className = "card mx-2 my-2 catalogCard">
		<Link className="catalogImageLink" to={board._id+"/thread/"+thread._id}>
			<CloudinaryContext cloudName="dmalxzhqk">
				<Image className ="card-img-top" publicId={thread.media}>
  					<Transformation height="200" width="200" crop="fill"/>
				</Image>
			</CloudinaryContext>
		</Link>
		<h6 className="card-title subject text-center  mx-1 mt-1 mb-1">
			{thread.subject}
		</h6>
		<div className="card-body catalogCardBody">
			<p className="card-text text-center m-2">
				<Truncate lines={9}>
					{thread.body}
				</Truncate>
			</p>
		</div>
		<div className="card-footer text-center">
			{thread.replies} replies
		</div>
	</div>
);

export default CatalogCard;

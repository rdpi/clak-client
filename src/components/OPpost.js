import React from 'react';
import moment from 'moment';

import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

const OPpost = ({thread}) => (
<div className = "row my-2">
		<CloudinaryContext className="d-inline" cloudName="dmalxzhqk">
			<Image className="mr-4 align-text-top" publicId={thread.media}>
  				<Transformation height="250" width="250" crop="limit"/>
			</Image>
		</CloudinaryContext>

	<div className = "column w-75">
		<div className="opHeader d-flex justify-content-between w-100">
			<p><span className="subject">{thread.subject}</span> <span className="name">{thread.name}</span></p><p><span>{moment(thread.date).fromNow()}</span> <span>{thread._id}</span></p>
		</div>
		<div className="opBody">
			{thread.body}
		</div>
	</div>
</div>
);

export default OPpost;

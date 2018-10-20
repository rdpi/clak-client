import React, {Component} from 'react';
import moment from 'moment';

import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

class OPpost extends Component{
	constructor(props){
		super(props);
		this.state = {
			showFull: false
		}
		this.toggle = this.toggle.bind(this)
	}

	toggle(){
		this.setState(prevState => ({
  			showFull: !prevState.showFull
		}));
	}

	render(){
		const thread = this.props.thread	
		return(
			<div className = "media my-4">
			{/*<div>File: <a href="#">{thread.filename}</a> ({thread.filesize}, {thread.width} x {thread.height})</div>*/}
					<a href="#" onClick={this.toggle}>
						{(this.state.showFull) ? <OPImageFull id={thread.file_id}/> : <OPImage id={thread.file_id} />}
					</a>
					<div className = "media-body">
						<div className="opHeader d-flex justify-content-between w-100 mb-2">
							<span><span className="subject">{thread.subject} </span><span className="name">{thread.name}</span></span><span><span>{moment(thread.date).fromNow()} </span>ID: <a href="#">{thread._id}</a></span>
						</div>
						<div className="opBody">
							{thread.body}
						</div>
					</div>
			</div>
		);
	}
}

const OPImage = ({id}) => (
		<CloudinaryContext className="d-inline" cloudName="dmalxzhqk">
			<Image className="mr-4 align-text-top img-fluid" publicId={id}>
  				<Transformation height="250" width="250" crop="limit"/>
			</Image>
		</CloudinaryContext>

);

const OPImageFull = ({id}) => (
		<CloudinaryContext className="d-inline" cloudName="dmalxzhqk">
			<Image className="mr-4 align-text-top img-fluid" publicId={id} >
			</Image>
		</CloudinaryContext>

);

export default OPpost;

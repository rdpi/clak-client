import React, {Component} from 'react';
import moment from 'moment';
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';

class Reply extends Component{
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

		const reply = this.props.reply
	return(
		<div className = "card my-1 mx-auto replyCard" id={reply._id}>
			<span className="card-header border-bottom-0 d-flex justify-content-between replyCardHeader"><span><span className="name">{reply.name}</span></span><span><span>{moment(reply.date).fromNow()}</span> PostID: <a href={"javascript:quote("+reply._id+");"}>{reply._id}</a></span></span>
			<div className = "card-body reply">
				<a href="#" onClick={this.toggle}>
						{(this.state.showFull) ? <ReplyImageFull id={reply.file_id}/> : <ReplyImage id={reply.file_id} />}
				</a>
				{reply.body}
			</div>
		</div>
	);
	}
}

const ReplyImage = ({id}) => (
		<CloudinaryContext className="d-inline" cloudName="dmalxzhqk">
			<Image className="mr-4 align-text-top img-fluid" publicId={id}>
  				<Transformation height="125" width="125" crop="limit"/>
			</Image>
		</CloudinaryContext>

);

const ReplyImageFull = ({id}) => (
		<CloudinaryContext className="d-inline" cloudName="dmalxzhqk">
			<Image className="mr-4 align-text-top img-fluid" publicId={id} >
			</Image>
		</CloudinaryContext>

);



export default Reply;

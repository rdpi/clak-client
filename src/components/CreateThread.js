import React, { Component } from 'react';
import axios from 'axios';

class CreateThread extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			body: '',
			subject: '',
			replyFile: null,
			hideForm: true
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
		this.showForm = this.showForm.bind(this);
	}

	 handleSubmit = event => {
		const values = this.state;
		console.log(values);
		const formData = new FormData();
		 formData.append('name', values.name);
		 formData.append('subject', values.subject);
		 formData.append('body', values.body);
		if (this.state.replyFile){
			formData.append('file', this.state.replyFile, this.state.replyFile.name);
		}
    	axios.post(`http://localhost:5000/`+this.props.board._id, formData)
      	.then(res => {
        	console.log(res);
        	console.log(res.data);
      	})
		this.setState({name: '', body: ''})
		event.preventDefault();

	 }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	handleFileChange = event => {
		this.setState({replyFile: event.target.files[0]});
		{/*do form validation here (size, type, etc)*/}
	}

	showForm(){
		if(this.state.hideForm)
			this.setState({hideForm: false});
		else
			this.setState({hideForm: true});
	}

	render() {
		return (
			<div className="my-5">
				<div className="card">
				<div className="card-header p-0 m-0">
				<button className="btn rounded-0 w-100" onClick={this.showForm}>Create Thread</button>
				</div>
				<div className="card-body p-0 m-0">
				<form className={this.state.hideForm ? 'd-none' : ''} onSubmit={this.handleSubmit}>
					<input 
						type="text" 
						name="name" 
						className="form-control rounded-0" 
						value={this.state.value} 
						onChange={this.handleInputChange} 
						placeholder="Name"
						maxLength="30"
					/>					
					<input 
						type="text" 
						name="subject" 
						className="form-control rounded-0" 
						value={this.state.value} 
						onChange={this.handleInputChange} 
						placeholder="Subject" 
						maxLength="350"
					/>
					<textarea 
						name="body" 
						className = "form-control rounded-0" 
						value={this.state.value} 
						onChange={this.handleInputChange} 
						placeholder="Comment"
						maxLength="2000"
					/>
					<div className = "card-footer p-0 m-0">
					<div className="row">
					<div className="col-4">
					<input 
						type="submit" 	
						className="btn btn-primary rounded-0 w-100 h-100" 
						value="Submit" 
					/>
					</div>
					<div className="col-8 my-auto">
					<input 
						type="file" 
						name="postimage"
						className="form-control-file" 
						onChange={this.handleFileChange}
					/>
					</div>
					</div>
					</div>
				</form>
				</div>
				</div>

			</div>
		);
	  }
	}

export default CreateThread; 

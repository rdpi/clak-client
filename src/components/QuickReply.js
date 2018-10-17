import React, { Component } from 'react';
import axios from 'axios';

class QuickReply extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			body: '',
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
		 formData.append('body', values.body);
		if (this.state.replyFile){
			formData.append('file', this.state.replyFile, this.state.replyFile.name);
		}
    	axios.post(`http://localhost:5000/`+this.props.board+"/thread/"+this.props.thread, formData)
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
		this.setState({hideForm: false});
	}

	render() {
		return (
			<div className="my-5 w-75 mx-auto">
				<div className="card">
				<button className="btn text-center rounded-0" onClick={this.showForm}>Reply to thread</button>
				<form className={this.state.hideForm ? 'd-none' : ''} onSubmit={this.handleSubmit}>
					<input 
						type="text" 
						name="name" 
						className="form-control rounded-0" 
						value={this.state.value} 
						onChange={this.handleInputChange} 
						placeholder="Name"
						maxLength="50"
					/>
					<textarea 
						name="body" 
						className = "form-control rounded-0" 
						value={this.state.value} 
						onChange={this.handleInputChange} 
						placeholder="Comment"
						maxLength="2000"
					/>
					<div className = "row">
					<div className = "col-4">
					<input 
						type="submit" 	
						className="btn btn-primary" 
						value="Submit" 
					/>
					</div>
					<div className = "col-4">
					<input 
						type="file" 
						name="postimage"
						className="form-control-file" 
						onChange={this.handleFileChange}
					/>
					</div>
					<div className = "col-4">
					<input type="checkbox"
							name="sage"
							className="form-check-input"
							value="true"
							id="qrSage"
					/>
					<label className="form-check-label" htmlFor="qrSage">Sage Thread</label>
					</div>
					</div>

				</form>
				</div>

			</div>
		);
	  }
	}

export default QuickReply; 

import React, { Component } from 'react';
import axios from 'axios';

class QuickReply extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			title: '',
			hideForm: true
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
		this.showForm = this.showForm.bind(this);
	}

	 handleSubmit = event => {
		const values = this.state;
    	axios.post(`http://localhost:5000/`, {name: values.name, title: values.title})
      	.then(res => {
        	console.log(res);
        	console.log(res.data);
      	})
		this.setState({name: '', title: ''})
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
	
	//may add support for board banners
	handleFileChange = event => {
		this.setState({replyFile: event.target.files[0]});
	}

	showForm(){
		this.setState({hideForm: false});
	}

	render() {
		return (
			<div className="my-5">
				<button className="btn" onClick={this.showForm}>Create a board</button>
				<form className={this.state.hideForm ? 'd-none' : ''} onSubmit={this.handleSubmit}>
					<input 
						type="text" 
						name="name" 
						className="form-control" 
						value={this.state.value} 
						onChange={this.handleInputChange} 
						placeholder="Board Code (eg a, b, tech, misc, etc.)"
						maxlength="4"
					/>
					<input 
						type="text" 
						name="Board Code (eg a, b, tech, misc, etc" 
						className="form-control" 
						value={this.state.value} 
						onChange={this.handleInputChange} 
						placeholder="Board Title (Anime, Technology, etc.)"
						maxlength="20"
					/>
					<input 
						type="submit" 	
						className="btn btn-primary" 
						value="Submit" 
					/>
				</form>

			</div>
		);
	  }
	}

export default QuickReply; 

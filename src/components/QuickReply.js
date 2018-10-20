import React, { Component } from 'react';
import { Field, reduxForm} from 'redux-form'
import FileInput from './FileInput';

let QuickReply = props => {
	const { handleSubmit } = props
		return (
			<div className="my-5 w-75 mx-auto">
				<div className="card">
				<button className="btn text-center rounded-0"> Reply to thread</button>
				<form onSubmit={handleSubmit}>
					<Field 
						component="input"
						type="text" 
						name="name" 
						className="form-control rounded-0" 
						placeholder="Name"
						maxLength="50"
					/>
					<Field 
						component="textarea"
						name="body" 
						className = "form-control rounded-0" 
						placeholder="Comment"
						maxLength="2000"
					/>
					<div className = "row">
					<div className = "col-4">
					<button
						type="submit"
						className="btn btn-primary rounded-0 h-100" 
						value="Submit" 
					>Submit</button>
					</div>
					<div className = "col-4">
					<Field
						component={FileInput}
						name="file"
						className="form-control-file" 
					/>
					</div>
					<div className = "col-4">
					</div>
					</div>

				</form>
				</div>

			</div>
		);
	  }

QuickReply = reduxForm({
	form: 'quickreply'
})(QuickReply)

export default QuickReply; 

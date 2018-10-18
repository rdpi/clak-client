import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CreateBoard = props => {
  const { handleSubmit } = props
  return (		
		<div className="card">
        <button className="btn card-header font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Create a new board
        </button>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body p-0 m-0">
	  	<form onSubmit={handleSubmit}>
			<Field
				component="input" 
				type="text" 
				name="name" 
				className="form-control rounded-0" 
				placeholder="Board Code (eg a, b, tech, misc, etc.)"
				maxLength="4"
			/>
			<Field
				component="input" 
				type="text" 
				name="title" 
				className="form-control rounded-0" 
				placeholder="Board Title (Anime, Technology, etc.)"
				maxLength="20"
			/>
			<button 
				type="submit" 	
				className="btn btn-primary rounded-0 m-0 h-100 w-100" 
				value="Submit" 
			>Submit</button>
		</form>
      </div>
    </div>
  </div>
	)
}

CreateBoard = reduxForm({
  // a unique name for the form
  form: 'createboard'
})(CreateBoard)

export default CreateBoard; 

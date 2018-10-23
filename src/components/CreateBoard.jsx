import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FileInput from './FileInput';

const CreateBoards = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="my-5 w-50 mx-auto">
      <div className="card">
        <button type="button" className="btn btn-primary text-center" data-toggle="collapse" data-target="#createBoardForm" aria-expanded="false" aria-controls="createBoardForm">
          Create a Board
        </button>
        <div className="collapse" id="createBoardForm">
          <form onSubmit={handleSubmit}>
            <Field
              component="input"
              type="text"
              name="uri"
              className="form-control rounded-0"
              placeholder="Board URI"
              maxLength="30"
              required
            />
            <Field
              component="input"
              type="text"
              name="title"
              className="form-control rounded-0"
              placeholder="Board Title"
              maxLength="40"
              required
            />
            <button
              type="submit"
              className="btn btn-primary"
              value="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

CreateBoards.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'CreateBoards',
})(CreateBoards);

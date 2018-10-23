import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FileInput from './FileInput';

const CreateThread = (props) => {
  const { handleSubmit } = props;
  return (
    <div className="my-5 w-50 mx-auto">
      <div className="card">
        <button type="button" className="btn btn-primary text-center" data-toggle="collapse" data-target="#createThreadForm" aria-expanded="false" aria-controls="createThreadForm">
          Create Thread
        </button>
        <div className="collapse" id="createThreadForm">
          <form onSubmit={handleSubmit}>
            <Field
              component="input"
              type="text"
              name="name"
              className="form-control rounded-0"
              placeholder="Name"
              maxLength="30"
            />
            <Field
              component="input"
              type="text"
              name="subject"
              className="form-control rounded-0"
              placeholder="Subject"
              maxLength="100"
            />
            <Field
              component="textarea"
              name="body"
              className="form-control rounded-0"
              placeholder="Comment"
              maxLength="2000"
            />
            <div className="row">
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary rounded-0 h-100"
                  value="Submit"
                >
Submit
                </button>
              </div>
              <div className="col-4">
                <Field
                  component={FileInput}
                  name="file"
                  className="form-control-file"
                />
              </div>
              <div className="col-4" />
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

CreateThread.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'CreateThread',
})(CreateThread);

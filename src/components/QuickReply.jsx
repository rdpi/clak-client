import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import FileInput from './FileInput';

const QuickReply = (props) => {
  const { handleSubmit } = props;
  return (
      <div className="card">
        <form onSubmit={handleSubmit}>
          <Field
            component="input"
            type="text"
            name="name"
            className="form-control rounded-0 border-0"
            placeholder="Name"
            maxLength="50"
          />
          <Field
            component="textarea"
            name="body"
            className="form-control rounded-0 border-left-0 border-right-0 border-bottom-0"
            placeholder="Comment"
            maxLength="2000"
          />
          <div className="card-footer px-0 py-2 border-top-0 row mx-0">
            <div className="col-4">
              <button
                type="submit"
                className="btn btn-primary py-0"
                value="Submit"
              >
              Submit
              </button>
            </div>
            <div className="col-4 d-flex align-content-center">
              <Field
                component={FileInput}
                name="file"
              />
            </div>
          </div>
        </form>
      </div>
  );
};

QuickReply.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'quickreply',
})(QuickReply);

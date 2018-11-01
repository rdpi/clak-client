import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { change, focus, blur, formValueSelector } from 'redux-form';

class FileInput extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch, id } = this.props;
    let { value } = this.props;
    if (!value) value = '';
    dispatch(change('quickreply', 'body', `${value}>>${id}\n`));
    dispatch(focus('quickreply', 'body'));
  }

  render() {
    const { id } = this.props;
    return (
      <button
        type="button"
        className="btn btn-link btn-sm"
        onClick={this.handleClick}
      >
        {id}
      </button>
    );
  }
}


const selector = formValueSelector('quickreply');
const mapStateToProps = state => ({
  value: selector(state, 'body'),
});

FileInput.defaultProps = {
  value: '',
};

FileInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default connect(mapStateToProps)(FileInput);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { change, focus, blur, formValueSelector } from 'redux-form';
import { expandQR } from '../../actions/qrActions';

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
    dispatch(expandQR());
  }

  render() {
    const { id } = this.props;
    return (
      <button
        type="button"
        className="btn btn-link btn-sm p-0"
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
  id: '',
};

FileInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.number,
  value: PropTypes.string,
};

export default connect(mapStateToProps)(FileInput);

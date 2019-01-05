import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import CreateBoard from '../components/CreateBoard';
import { fetchBoards } from '../actions/boardActions';

class Index extends Component {
  componentDidMount() {
    this.props.dispatch(fetchBoards());
  }

  submit = (values) => {
    axios.post(`${process.env.REACT_APP_CLAK_API}/api/boards`, { uri: values.uri, title: values.title })
      .then((res) => {
        this.props.history.push(`/api/boards/${res.data.board}`);
      });
  }

  render() {
    const {
      error, loading, boards, displayed,
    } = this.props;

    if (error) {
      return (
        <div>
          Error!
          {' '}
          {error.message}
        </div>
      );
    }

    if (loading) {
      return <div className="loader" />;
    }
    return (
      <div className="container text-center">
        <div className="my-4">
          <h1>Welcome to</h1>
          <img src="/claklogolarge.png" alt="clak" />
          <h2>Choose a board below to get started, or...</h2>
          <CreateBoard onSubmit={this.submit} />
        </div>
        <div className="container threadContainer my-4 rounded">
          <ul className="nav nav-fill flex-column">
            {displayed.map(board => (
              <li className="nav-item" key={board._id}>
                <h4>
                  <Link className="nav-link" to={board.uri}>
                    /
                    {board.uri}
                    / -
                    {' '}
                    {board.title}
                  </Link>

                </h4>

              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  boards: state.boards.boardlist,
  displayed: state.boards.displayed,
  loading: state.boards.loading,
  error: state.boards.error,
});

Index.defaultProps = {
  boards: null,
  loading: true,
  error: null,
};

Index.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default connect(mapStateToProps)(Index);

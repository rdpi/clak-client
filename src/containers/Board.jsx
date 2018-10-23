import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import CreateThread from '../components/CreateThread';
import CatalogCard from '../components/CatalogCard';
import { fetchThreads, resetThreads } from '../actions/threadActions';

class Board extends Component {
  componentDidMount() {
    this.props.dispatch(fetchThreads(this.props.match.params.boardid));
  }

  componentWillUnmount() {
    this.props.dispatch(resetThreads());
  }

  submit = (values) => {
    const formData = new FormData();
    if (values.name) { formData.append('name', values.name); }
    if (values.body) { formData.append('body', values.body); }
    if (values.file) { formData.append('file', values.file, values.file.name); }
    axios.post(`http://localhost:5000/${this.props.match.params.boardid}`, formData)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    const {
      error, loading, threads, board,
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
      return <div>Loading...</div>;
    }

    return (
      <div className="col p-0">
        <h1 className="mt-4 mx-auto text-center font-weight-bold">
/
          {board.uri}
/ -
          {' '}
          {board.title}
        </h1>
        <div className="row justify-content-center">
          <CreateThread onSubmit={this.submit} />
        </div>
        <div className="container-fluid d-flex flex-wrap justify-content-center m-0 p-0">
          {threads.sort((a, b) => new Date(b.bump) - new Date(a.bump))
            .map(thread => <CatalogCard key={thread._id} board={board} thread={thread} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  threads: state.threads.threadlist,
  board: state.threads.currentboard,
  loading: state.threads.loading,
  error: state.threads.error,
});

Board.defaultProps = {
  error: false,
  loading: false,
  threads: null,
  board: null,
};

Board.propTypes = {
  error: PropTypes.bool,
  loading: PropTypes.bool,
  threads: PropTypes.arrayOf(PropTypes.object),
  board: PropTypes.shape({
    uri: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default connect(mapStateToProps)(Board);

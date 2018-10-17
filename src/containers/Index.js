import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import CreateBoard from '../components/CreateBoard';
import {fetchBoards} from '../actions/boardActions';

class Index extends Component {
	componentDidMount() {
		this.props.dispatch(fetchBoards());
	}

	render() {
	 const { error, loading, boards } = this.props;
    
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }
		return(
			<div>
			<CreateBoard />
			<ul className = "nav nav-fill flex-column">
				{boards.map(board => <li className="nav-item" key={board.id}><h4><Link className="nav-link" to={board._id}>/{board.name}/ - {board.title}</Link></h4></li>)}
			</ul>
			</div>
		)
	}
}
const mapStateToProps = state => ({
  boards: state.boards.boardlist,
  loading: state.boards.loading,
  error: state.boards.error
});

export default connect(mapStateToProps)(Index);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import CreateBoard from '../components/CreateBoard';
import {fetchBoards} from '../actions/boardActions';

class Index extends Component {
	componentDidMount() {
		this.props.dispatch(fetchBoards());
	}
	
	submit = values => {
		axios.post(`http://localhost:5000/`, {name: values.name, title: values.title})
		.then(res => {
			console.log(res);
			console.log(res.data);
		})
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
			<div className = "container">
			<h1>Welcome to</h1>
			<img src="/claklogolarge.png" alt="clak"/>
			<h2>Choose a board below to get started, or...</h2>
			<CreateBoard onSubmit={this.submit}/>
			<ul className = "nav nav-fill flex-column">
				{boards.map(board => <li className="nav-item" key={board._id}><h4><Link className="nav-link" to={board._id}>/{board.name}/ - {board.title}</Link></h4></li>)}
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

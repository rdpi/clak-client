import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CreateBoard from './CreateBoard';

class Index extends Component {
	constructor() {
		super();
		this.state = {
			boards: [],
		};
	}


	componentDidMount() {
		axios.get("http://localhost:5000")
		.then(res => res.data.boards.map( board => (
				{
					name: board.name,
					id: board._id,
					title:board.title
				}
			)))
		.then(boardlist => this.setState({boards: boardlist}))
	}


	render() {
		return(
			<div>
			<CreateBoard />
			<ul className = "nav nav-fill flex-column">
				{this.state.boards.map(board => <li className="nav-item" key={board.id}><h4><Link className="nav-link" to={board.id}>/{board.name}/ - {board.title}</Link></h4></li>)}
			</ul>
			</div>
		)
	}
}

export default Index;

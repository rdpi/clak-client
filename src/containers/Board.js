import React, { Component } from 'react';
import CreateThread from '../components/CreateThread';
import CatalogCard from '../components/CatalogCard';
import {connect} from "react-redux"
import {fetchThreads, resetThreads} from "../actions/threadActions";


class Board extends Component {
	componentDidMount() {
		this.props.dispatch(fetchThreads(this.props.match.params.boardid))	
	}

	componentWillUnmount() {
		this.props.dispatch(resetThreads())
	}

	render() {
		const { error, loading, threads, board } = this.props;
		
		if (error) {
			return <div>Error! {error.message}</div>;
		}
		if (loading) {
			return <div>Loading...</div>;
		}

		return(
			<div className="col p-0">
				<h1 className="mt-4 mx-auto text-center font-weight-bold">/{board.name}/ - {board.title}</h1>
				<div className="row justify-content-center">
					<CreateThread board = {board} />
				</div>
				<div className = "container-fluid d-flex flex-wrap justify-content-center m-0 p-0">
					{threads.sort((a,b) => new Date(b.bump) - new Date(a.bump))
					.map(thread =>
				 	<CatalogCard key={thread._id} board={board} thread={thread} />
				)}
			</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	threads: state.threads.threadlist,
	board: state.threads.currentboard,
	loading: state.threads.loading,
	error: state.threads.error
});

export default connect(mapStateToProps)(Board);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchBoardsQuery } from '../actions/boardActions';
import { searchThreadsQuery } from '../actions/threadActions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.dispatch(searchBoardsQuery(e.target.value));
    this.props.dispatch(searchThreadsQuery(e.target.value));
  }

  render() {
    return (
      <nav className="navbar py-1">
        <Link className="navbar-brand" to="/"><img src="/claklogo.png" height="40" alt="clak" /></Link>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleChange} />
        </form>
      </nav>
    );
  }
}
export default connect()(Header);

import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({props}) =>
<nav className="navbar navbar-dark bg-dark">
	<Link className="navbar-brand" to="/">clak</Link>
	<form className="form-inline">
		<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
	</form>
</nav>

export default Header;

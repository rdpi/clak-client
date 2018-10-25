import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar py-1">
    <Link className="navbar-brand" to="/"><img src="/claklogo.png" height="40" alt="clak" /></Link>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    </form>
  </nav>
);

export default Header;

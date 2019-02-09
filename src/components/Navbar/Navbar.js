import React, { Component } from 'react';
import './Navbar.css';

const Navbar = () => {

    return (
<div className="container is-fluid">
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item red" href="">
      <h1>Your logo/company name here</h1>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div className="navbar-menu">
    <div className="navbar-end">
      <a className="navbar-item border-b red">
        Home
      </a>

      <a className="navbar-item border-b red">
        Documentation
      </a>
 
      <a className="navbar-item border-b red">
        Contact
      </a>
    </div>
  </div>
</nav>
</div>

    );
};

export default Navbar;
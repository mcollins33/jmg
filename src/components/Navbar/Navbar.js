import React, { Component } from 'react';
import './Navbar.css';

const Navbar = () => {

    return (
<div id="navbar" className="container">
<nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
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
      <a href="#navbar" className="navbar-item border-b red">
        HOME
      </a>
      <a href="#about" className="navbar-item border-b red">
        ABOUT
      </a>
      <a href="#card" className="navbar-item border-b red">
        SERVICES
      </a>
      <a href="#footer" className="navbar-item border-b red">
        CONTACT
      </a>
    </div>
  </div>
</nav>
</div>

    );
};

export default Navbar;
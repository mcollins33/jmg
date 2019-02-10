import React, { Component } from 'react';
import './Navbar.css';

const Navbar = () => {

    return (

<nav id="navbar" className="navbar container is-fluid is-fixed-top" role="navigation" aria-label="main navigation">
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
      <a href="#navbar" className="navbar-item border red">
        HOME
      </a>
      <a href="#about" className="navbar-item border red">
        ABOUT
      </a>
      <a href="#card" className="navbar-item border red">
        SERVICES
      </a>
      <a href="#footer" className="navbar-item border red">
        CONTACT
      </a>
    </div>
  </div>
</nav>

    );
};

export default Navbar;
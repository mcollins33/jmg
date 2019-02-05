import React, { Component } from 'react';
import './Navbar.css';

const Navbar = () => {

    return (
<div className="container is-fluid">
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
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
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link is-arrowless">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<i className="fas fa-bolt fa-5x"></i>
  <i className="fas fa-hard-hat fa-5x"></i>
  <i className="fas fa-house-damage fa-5x"></i>
  <i className="fas fa-laptop fa-5x"></i>
  <i className="fas fa-plug fa-5x"></i>
  <i className="fas fa-oil-can fa-5x"></i>
  <i className="fas fa-toolbox fa-5x"></i>
  <i className="fas fa-tools fa-5x"></i>
</div>

    );
};

export default Navbar;
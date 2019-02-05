import React, { Component } from 'react';
import './Card.css';

const Navbar = () => {

    return (

<div className="container">
	<div className="card">
	  <div className="card-header-icon">
	    <i className="fas fa-industry fa-5x"></i>
	  </div>
	  <div className="card-content">
	    <div className="media">
	      <div className="media-left">
	      </div>
	      <div className="media-content">
	        <p className="title is-4">John Smith</p>
	      </div>
	    </div>
	    <div className="content">
	      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
	      Phasellus nec iaculis mauris. 
	    </div>
	  </div>
	</div>
	<div className="card">
		<div className="card-header-icon">
		<i className="far fa-lightbulb fa-5x"></i>
		</div>
		<div className="card-content">
		<div className="media">
		  <div className="media-left">
		  </div>
		  <div className="media-content">
		    <p className="title is-4">John Smith</p>
		  </div>
		</div>
		<div className="content">
		  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		  Phasellus nec iaculis mauris. 
		</div>
	</div>
</div>
</div>

    );
};

export default Navbar;
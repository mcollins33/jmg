import React, { Component } from 'react';
import './Card.css';

const Navbar = () => {

    return (

<div className="container margin-top-50">
	<div className="columns">
		<div className="column">
			<div className="card">
				<div className="card-header-icon">
					<i className="fas fa-industry fa-5x"></i>
				</div>
				<div className="card-content">
				    <div className="media-content">
				        <p className="title is-4">Service</p>
				    </div>
					<div className="content dark">
					    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan 
					    ipsum at mauris sodales scelerisque. Praesent nulla elit, scelerisque 
					    nec ultrices quis, varius et dui. In orci dolor, imperdiet sit amet 
					    rutrum a, sollicitudin vel erat. Cras lacus est, porttitor in sagittis 
					    pretium, scelerisque id metus. Fusce non ligula in nisl euismod laoreet 
					    a et dui. 
					</div>
				</div>
			</div>
		</div>
		<div className="column">
			<div className="card">
				<div className="card-header-icon">
					<i className="far fa-lightbulb fa-5x"></i>
				</div>
				<div className="card-content">
				    <div className="media-content">
				        <p className="title is-4">Service</p>
				    </div>
					<div className="content dark">
					    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan 
					    ipsum at mauris sodales scelerisque. Praesent nulla elit, scelerisque 
					    nec ultrices quis, varius et dui. In orci dolor, imperdiet sit amet 
					    rutrum a, sollicitudin vel erat. Cras lacus est, porttitor in sagittis 
					    pretium, scelerisque id metus. Fusce non ligula in nisl euismod laoreet 
					    a et dui. 
					</div>
				</div>
			</div>
		</div>
		<div className="column">
			<div className="card">
				<div className="card-header-icon">
					<i className="fas fa-tools fa-5x"></i>
				</div>
				<div className="card-content">
				    <div className="media-content">
				        <p className="title is-4">Service</p>
				    </div>
					<div className="content dark">
					   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan 
					    ipsum at mauris sodales scelerisque. Praesent nulla elit, scelerisque 
					    nec ultrices quis, varius et dui. In orci dolor, imperdiet sit amet 
					    rutrum a, sollicitudin vel erat. Cras lacus est, porttitor in sagittis 
					    pretium, scelerisque id metus. Fusce non ligula in nisl euismod laoreet 
					    a et dui. 
					</div>
				</div>
			</div>
		</div>
	</div>
	<i className="fas fa-bolt fa-5x"></i>
  <i className="fas fa-hard-hat fa-5x"></i>
  <i className="fas fa-house-damage fa-5x"></i>
  <i className="fas fa-laptop fa-5x"></i>
  <i className="fas fa-plug fa-5x"></i>
  <i className="fas fa-oil-can fa-5x"></i>
  <i className="fas fa-toolbox fa-5x"></i>
</div>

    );
};

export default Navbar;
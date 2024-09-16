import React, { Fragment } from 'react';
import logo from './imgnav.jpg';
import './App.css';

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={logo} alt='Logo' />
          <h1 className='nav-head'>BhooJal <span className='spannav'>C</span>hatbot</h1>
        </div>
        <h1 className='head'>Jal Shakti</h1>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#dummy">Reports</a></li>
          <li><a href="#dummy">Profile</a></li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

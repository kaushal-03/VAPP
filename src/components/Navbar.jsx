import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../websitelogo.png'
import configure from '../configure.png'
import dropdown from '../dropdown.png'
const Navbar = () => {
    
  return (
    <div>
      <nav className="navbar">
      <h1>VAPP</h1>
        <ul className="navbar-links">
          <li className="navbar-dropdown">
            <a href="#">Home</a>
          </li>
          <li className="navbar-dropdown">
            <a href="#">About</a>
          </li>
          <li className="navbar-dropdown">
            <a href="#">
           Services <img src={dropdown} alt="License Management" className='down' /></a>
            <div className="dropdown">
              <a href="#">License Management</a>
            </div>
          </li>
          
        </ul>

        <button className='button-3'><Link to="/configure">Configure</Link>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

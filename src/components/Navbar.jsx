import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from "../websitelogo.png";
import configure from "../configure.png";
import dropdown from "../dropdown.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar">
        <h1>VAPP</h1>
        <ul className="navbar-links">
          <div className="ddiv">
            <li className="navbar-dropdown">
              <a href="#">Home</a>
            </li>
          </div>
          <div>
            <li className="navbar-dropdown">
              <a href="#">About</a>
            </li>
          </div>
          <div>
            <li className="navbar-dropdown">
              <a href="#">
                Solutions{" "}
                <img src={dropdown} alt="License Management" className="down" />
              </a>
              <div className="dropdown">
                <a href="#">License Management</a>
                <a href="#">SOD</a>
                <a href="#">User Administration</a>
                <a href="#">Integration</a>
              </div>
            </li>
          </div>
          <div>
            <li className="navbar-dropdown">
              <a href="#">
                Services{" "}
                <img src={dropdown} alt="License Management" className="down" />
              </a>
              <div className="dropdown">
                <a href="#">License Audit</a>
                <a href="#">ITGC Audit</a>
                <a href="#">Business Process Optimization</a>
              </div>
            </li>
          </div>
          <div>
            <li className="navbar-dropdown">
              <a href="#">
                CaseStudies{" "}
                <img src={dropdown} alt="License Management" className="down" />
              </a>
              <div className="dropdown">
                <a href="#">CS1</a>
                <a href="#">CS2</a>
                <a href="#">CS3</a>
              </div>
            </li>
          </div>
        </ul>
        <div class="button-div">
            <button class="signup-button"onClick={() => navigate('/signup')} >Signup</button>
            <button class="login-button" onClick={() => navigate('/login')}>Login</button>
          </div>
      </nav>
    </div>
  );
};

export default Navbar;

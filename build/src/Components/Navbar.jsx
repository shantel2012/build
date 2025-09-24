import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import user from "../assets/images/avatar.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Buildlinks" className="logo" />
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      <div className="nav-right">
        <button className="register-btn">Register</button>
        <img src={user} alt="user" className="profile" />
      </div>
    </nav>
  );
};

export default Navbar;

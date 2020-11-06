import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-item center nav-logo">LOGO</div>
      <div className="nav-item center">
        <Link to="/">Request Delivery</Link>
      </div>
      <div className="nav-item center">
        <Link to="/MyRequests">My requests</Link>
      </div>
    </div>
  );
};

export default Navbar;

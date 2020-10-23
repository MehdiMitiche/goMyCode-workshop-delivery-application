import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-item center nav-logo">LOGO</div>
      <div className="nav-item center">Request Delivery</div>
      <div className="nav-item center">My requests</div>
    </div>
  );
};

export default Navbar;

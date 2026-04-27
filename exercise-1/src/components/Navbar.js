import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-logo">LearnHub</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          {!isLoggedIn && <li><Link to="/login">Login</Link></li>}
          {!isLoggedIn && <li><Link to="/register">Register</Link></li>}
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/progress">Progress</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
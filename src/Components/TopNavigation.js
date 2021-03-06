import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const TopNavigation = () => {
  return (
      <nav>
        <Link className="links" to="/">
          <h3>Video Courses LOGO</h3>
        </Link>
        <ul className="nav-links">
          <Link className="links" to="/signInForm">
            <li>Logowanie</li>
          </Link>
          <Link className="links" to="/signUpForm">
            <li>Rejestracja</li>
          </Link>
          <Link className="links" to="/about">
            <li>O nas</li>
          </Link>
        </ul>
      </nav>
  );
}

export default TopNavigation;
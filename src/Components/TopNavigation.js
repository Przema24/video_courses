import React from 'react';
import NavButton from './NavButton.js';
import './TopNavigation.css';


class TopNavigation extends React.Component {
  render () {
    return (
        <nav>
          <ul className="TopNav">
              <li><NavButton /></li>
              <li><NavButton /></li>
              <li><NavButton /></li>
              <li><NavButton /></li>
              <li><NavButton /></li>
              <li><NavButton /></li>
          </ul>
        </nav>
    );
  }
}

export default TopNavigation;
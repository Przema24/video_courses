import React from 'react';
import NavButton from './NavButton.js';
import './TopNavigation.css';


class TopNavigation extends React.Component {
  render () {
    return (
        <nav>
          <ul className="TopNav">
              <li><NavButton name="Logowanie"/></li>
              <li><NavButton name="Rejestracja"/></li>
              <li><NavButton name="Przeglądaj kursy"/></li>
              <li><NavButton name="Twoje konto"/></li>
              <li><NavButton name="Twoje kursy"/></li>
              <li><NavButton name="Regulamin"/></li>
              <li><NavButton name="Zgłoś problem"/></li>
          </ul>
        </nav>
    );
  }
}

export default TopNavigation;
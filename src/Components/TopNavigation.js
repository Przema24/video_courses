import React from 'react';
import LoginButton from './Buttons/LoginButton.js';
import RegistrationButton from './Buttons/RegistrationButton.js';
import SearchCoursesButton from './Buttons/SearchCoursesButton.js';
import RegulationsButton from './Buttons/RegulationsButton.js';
import ReportProblemButton from './Buttons/ReportProblemButton.js';
import './TopNavigation.css';


function TopNavigation() {
  return (
      <nav>
        <ul className="TopNav">
          <li><RegistrationButton /></li>
          <li><LoginButton /></li>
          <li><SearchCoursesButton /></li>
          <li><RegulationsButton /></li>
          <li><ReportProblemButton /></li>
        </ul>
      </nav>
  );
}

export default TopNavigation;
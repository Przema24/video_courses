import React from 'react';
import './App.css';
import TopNavigation from './Components/TopNavigation';
import LoginForm from './Components/Content/LoginForm';
import RegistrationForm from './Components/Content/RegistrationForm';
import About from './Components/Content/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <TopNavigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/loginForm" component={LoginForm}/>
          <Route path="/registrationForm" component={RegistrationForm}/>
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>Strona główna</div>
);

export default App;

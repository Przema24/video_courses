import React from 'react';
import './App.css';
import TopNavigation from './Components/TopNavigation';
import SignInForm from './Components/Content/SignInForm';
import SignUpForm from './Components/Content/SignUpForm';
import About from './Components/Content/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="App">
        <TopNavigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signInForm" component={SignInForm}/>
          <Route path="/signUpForm" component={SignUpForm}/>
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

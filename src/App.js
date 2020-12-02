import React from 'react';
import './App.css';
import TopNavigation from './Components/TopNavigation';


class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <TopNavigation />
        </header>
      </div>
    );
  }
}

export default App;
